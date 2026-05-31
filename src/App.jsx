import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Explore from './components/Explore';
import Featured from './components/Featured';
import Timeline from './components/Timeline';
import Vision from './components/Vision';
import AboutCreator from './components/AboutCreator';
import Footer from './components/Footer';

// Helper component to scroll window to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <HashRouter>
      <ScrollToTop />
      
      <div className="relative min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-violet-500/20">
        
        {/* Navigation Bar */}
        <Navbar 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Routed Page Content */}
        <main className="flex-grow">
          <Routes>
            {/* Home Page */}
            <Route 
              path="/" 
              element={
                <>
                  <Hero />
                  <Introduction />
                </>
              } 
            />

            {/* Labs Page */}
            <Route 
              path="/labs" 
              element={<Explore searchQuery={searchQuery} />} 
            />

            {/* Projects Page */}
            <Route 
              path="/projects" 
              element={<Featured />} 
            />

            {/* Updates Page */}
            <Route 
              path="/updates" 
              element={<Timeline />} 
            />

            {/* About Page */}
            <Route 
              path="/about" 
              element={
                <>
                  <Vision />
                  <AboutCreator />
                </>
              } 
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </HashRouter>
  );
}
