import React from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, Mail, ArrowUp } from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900/50 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-900/80">
          
          {/* Logo & Tagline */}
          <div className="md:col-span-5 space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2.5">
              <div className="p-2 bg-gradient-to-tr from-violet-600 to-cyan-500 rounded-lg">
                <FlaskConical className="h-4.5 w-4.5 text-white" />
              </div>
              <span className="text-lg font-bold text-slate-100 tracking-tight">KK Labs</span>
            </div>
            <p className="text-xs text-slate-450 max-w-sm leading-relaxed font-light mx-auto md:mx-0">
              A personal digital workbench designed to experiment, build tools, and host coding sandboxes. Made with React, Tailwind CSS, and precision engineering.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-4 space-y-4 text-center md:text-left">
            <h4 className="text-xs font-bold text-slate-350 uppercase tracking-widest">Workbench sections</h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-xs font-medium text-slate-450">
              <Link to="/" className="hover:text-slate-200 transition-colors">Home</Link>
              <Link to="/labs" className="hover:text-slate-200 transition-colors">Labs</Link>
              <Link to="/projects" className="hover:text-slate-200 transition-colors">Projects</Link>
              <Link to="/updates" className="hover:text-slate-200 transition-colors">Updates</Link>
              <Link to="/about" className="hover:text-slate-200 transition-colors">About</Link>
            </div>
          </div>

          {/* Connect Links */}
          <div className="md:col-span-3 space-y-4 text-center md:text-left">
            <h4 className="text-xs font-bold text-slate-350 uppercase tracking-widest">Connect</h4>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-slate-900 border border-slate-850 hover:border-slate-800 hover:bg-slate-850 rounded-lg text-slate-450 hover:text-slate-200 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-slate-900 border border-slate-850 hover:border-slate-800 hover:bg-slate-850 rounded-lg text-slate-450 hover:text-slate-200 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a 
                href="mailto:contact@kklabs.dev" 
                className="p-2 bg-slate-900 border border-slate-850 hover:border-slate-800 hover:bg-slate-850 rounded-lg text-slate-450 hover:text-slate-200 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-light">
          <div>
            <span>© 2026 KK Labs. All rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <button 
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 hover:text-slate-300 transition-colors focus:outline-none group"
            >
              <span>Back to top</span>
              <div className="p-1 bg-slate-900 border border-slate-850 group-hover:bg-slate-850 rounded-full transition-colors">
                <ArrowUp className="h-3 w-3" />
              </div>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
