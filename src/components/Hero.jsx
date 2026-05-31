import React, { useEffect, useState } from 'react';
import { ArrowDown, Cpu, Activity, Zap } from 'lucide-react';

export default function Hero() {
  const [pulseScale, setPulseScale] = useState(1);
  const [activeTab, setActiveTab] = useState(0);

  // Live activity ticker simulator for floating cards
  const [systemLoad, setSystemLoad] = useState(42);
  const [experimentCount, setExperimentCount] = useState(14);
  const [recentLogs, setRecentLogs] = useState([
    'Initializing sandbox v1.4...',
    'Deployed Markdown parser',
    'Optimizing build bundler'
  ]);

  useEffect(() => {
    // Simulate updating logs and stats for the digital workshop
    const interval = setInterval(() => {
      setSystemLoad(Math.floor(40 + Math.random() * 25));
      
      const newLogs = [
        'Running compression tests...',
        'Cache invalidated for labs',
        'API Request: 200 OK /labs',
        'Hot reloading assets...',
        'Compiling TS compiler bundle...'
      ];
      setRecentLogs(prev => [newLogs[Math.floor(Math.random() * newLogs.length)], prev[0], prev[1]]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleExploreClick = () => {
    const exploreSection = document.getElementById('explore');
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 bg-slate-950">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950 z-0"></div>
      
      {/* Radial Spotlight Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-violet-500/10 to-cyan-500/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left side: Main text and CTA */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-950/20 text-violet-300 text-xs font-semibold uppercase tracking-wider animate-pulse-slow">
            <Zap className="h-3 w-3 text-cyan-400 fill-cyan-400" />
            <span>Digital Workshop v2.6</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm">
                KK Labs
              </span>
            </h1>
            <p className="text-3xl sm:text-4xl font-semibold text-slate-200 tracking-tight">
              Build. Experiment. Create.
            </p>
            <p className="text-lg sm:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              A place where ideas become tools, projects, and experiments. Built with precision, curiosity, and modern engineering.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button
              onClick={handleExploreClick}
              className="group relative px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02] flex items-center space-x-2"
            >
              <span>Explore Digital Workspace</span>
              <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </button>
            
            <a
              href="#about"
              className="px-6 py-3.5 rounded-full border border-slate-800 bg-slate-900/40 hover:bg-slate-900 hover:border-slate-700 text-slate-300 hover:text-white transition-all text-sm font-semibold"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right side: Floating Interactive Lab Cards */}
        <div className="lg:col-span-5 relative h-[380px] w-full max-w-md mx-auto z-10 flex items-center justify-center">
          
          {/* Decorative ambient lighting behind cards */}
          <div className="absolute w-72 h-72 bg-violet-600/10 rounded-full blur-[80px] -top-10 -right-10 animate-float-delayed"></div>
          <div className="absolute w-60 h-60 bg-cyan-600/10 rounded-full blur-[80px] -bottom-10 -left-10 animate-float"></div>

          {/* Card 1: Lab Status Dashboard (Top Floating Card) */}
          <div className="absolute top-4 left-6 w-[260px] p-4 rounded-2xl border border-slate-800 bg-slate-950/70 backdrop-blur-md shadow-2xl animate-float-slow hover:border-violet-500/50 transition-colors duration-300">
            <div className="flex items-center justify-between mb-3 border-b border-slate-900 pb-2">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Lab Terminal</span>
              </div>
              <Activity className="h-3.5 w-3.5 text-slate-500" />
            </div>
            <div className="space-y-1.5 font-mono text-[9px] text-slate-300">
              {recentLogs.map((log, idx) => (
                <div key={idx} className="truncate text-left">
                  <span className="text-violet-400 font-bold">&gt; </span>
                  <span>{log}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Interactive Metric Card (Middle Floating Card) */}
          <div className="absolute top-[160px] right-2 w-[240px] p-4 rounded-2xl border border-slate-800 bg-slate-950/80 backdrop-blur-md shadow-2xl animate-float-delayed hover:border-cyan-500/50 transition-colors duration-300">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-1.5 bg-cyan-950/50 border border-cyan-900 rounded-lg text-cyan-400">
                <Cpu className="h-4 w-4" />
              </div>
              <div className="text-left">
                <div className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">Node Sandbox</div>
                <div className="text-sm font-semibold text-slate-200">Active Workspaces</div>
              </div>
            </div>
            
            <div className="space-y-1.5">
              <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
                <span>Memory Utilization</span>
                <span>{systemLoad}%</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-violet-500 to-cyan-400 h-full rounded-full transition-all duration-1000"
                  style={{ width: `${systemLoad}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Card 3: Mini Metrics Stat Card (Bottom Left Card) */}
          <div className="absolute bottom-4 left-10 p-3 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-xl flex items-center space-x-3 shadow-xl animate-float hover:scale-105 transition-all">
            <div className="w-8 h-8 rounded-lg bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 font-bold text-sm">
              {experimentCount}
            </div>
            <div className="text-left font-sans">
              <div className="text-[10px] text-slate-400 font-semibold">Active Labs</div>
              <div className="text-[9px] text-slate-500 font-medium">Running Experiments</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
