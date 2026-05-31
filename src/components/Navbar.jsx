import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FlaskConical, Search, Menu, X } from 'lucide-react';

export default function Navbar({ searchQuery, onSearchChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/labs', label: 'Labs' },
    { path: '/projects', label: 'Projects' },
    { path: '/updates', label: 'Updates' },
    { path: '/about', label: 'About' }
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/85 border-b border-slate-900/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link 
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            <div className="p-2 bg-gradient-to-tr from-violet-600 to-cyan-500 rounded-xl group-hover:rotate-6 transition-transform duration-300">
              <FlaskConical className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-slate-50 to-slate-200 bg-clip-text text-transparent group-hover:from-violet-400 group-hover:to-cyan-400 transition-all duration-300">
              KK Labs
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) => 
                  `relative py-1 text-sm font-medium transition-colors duration-200 ${
                    isActive 
                      ? 'text-cyan-400 font-semibold' 
                      : 'text-slate-400 hover:text-slate-100'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center relative">
            <Search className="absolute left-3.5 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search tools, projects..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 pr-4 py-1.5 w-48 bg-slate-900/60 border border-slate-800/80 rounded-full text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 focus:border-cyan-500/50 focus:w-60 focus:bg-slate-905 transition-all duration-300"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Search field */}
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-500" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-8 pr-2 py-1 w-28 bg-slate-900 border border-slate-800 rounded-full text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 focus:w-36 transition-all duration-300"
              />
            </div>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-900/60 transition-colors focus:outline-none"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-900/80 bg-slate-950/95 py-3 px-4 space-y-1 animate-fadeIn">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `block px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-slate-900 text-cyan-400 border-l-2 border-cyan-500'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900/40'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
