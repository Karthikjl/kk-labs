import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Explore from './components/Explore';
import Featured from './components/Featured';
import Timeline from './components/Timeline';
import Vision from './components/Vision';
import AboutCreator from './components/AboutCreator';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  // IntersectionObserver to dynamically highlight navbar links as user scrolls
  useEffect(() => {
    const sections = ['home', 'labs', 'projects', 'updates', 'about'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies the middle of the viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-violet-500/20">
      
      {/* Sticky Navigation Bar */}
      <Navbar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Content Layout */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Introduction Section */}
        <Introduction />

        {/* 3. Explore Categories Section */}
        <Explore searchQuery={searchQuery} />

        {/* 4. Featured Content Section */}
        <Featured />

        {/* 5. Recent Activity Timeline */}
        <Timeline />

        {/* 6. Vision Section */}
        <Vision />

        {/* 7. About Creator Section */}
        <AboutCreator />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
