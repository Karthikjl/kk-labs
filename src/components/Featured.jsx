import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, Sparkles, Send, Play } from 'lucide-react';

export default function Featured() {
  const [inputValue, setInputValue] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'system', text: 'DevFlow Terminal v1.2 Virtual Shell initialized.' },
    { type: 'system', text: 'Type "help" to see available terminal commands.' },
    { type: 'input', text: '' } // placeholder to trigger empty start
  ]);
  const [matrixActive, setMatrixActive] = useState(false);
  const terminalEndRef = useRef(null);

  // Auto-scroll terminal to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory, matrixActive]);

  // Handle command execution
  const executeCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    let response = [];

    if (trimmed === 'help') {
      response = [
        { type: 'output', text: 'Available commands:' },
        { type: 'output', text: '  about    - Learn about KK Labs' },
        { type: 'output', text: '  tools    - List active development tools' },
        { type: 'output', text: '  matrix   - Toggle retro code rain animation' },
        { type: 'output', text: '  clear    - Clear terminal history' }
      ];
    } else if (trimmed === 'about') {
      response = [
        { type: 'output', text: 'KK Labs is Karthik\'s personal sandbox for web engineering.' },
        { type: 'output', text: 'Goal: Building tools that improve productivity and testing prototypes.' }
      ];
    } else if (trimmed === 'tools') {
      response = [
        { type: 'output', text: 'Active utilities in the workbench:' },
        { type: 'output', text: '  - Color Palette Swapper (design tool)' },
        { type: 'output', text: '  - SVG Optimizer (developer asset compresser)' },
        { type: 'output', text: '  - Markdown Preview Editor (real-time visualizer)' }
      ];
    } else if (trimmed === 'matrix') {
      setMatrixActive(!matrixActive);
      response = [
        { type: 'success', text: matrixActive ? 'Matrix code rain terminated.' : 'Matrix stream initialized! Look at the terminal background...' }
      ];
    } else if (trimmed === 'clear') {
      setTerminalHistory([]);
      return;
    } else if (trimmed === '') {
      return;
    } else {
      response = [
        { type: 'error', text: `Command not found: "${cmd}". Type "help" for a list of commands.` }
      ];
    }

    setTerminalHistory(prev => [
      ...prev,
      { type: 'input', text: cmd },
      ...response
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputValue);
      setInputValue('');
    }
  };

  return (
    <section id="projects" className="relative py-24 bg-slate-950 border-t border-slate-900/50">
      {/* Glow highlight */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2">
              <Sparkles className="h-4 w-4 text-violet-400" />
              <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">Featured This Month</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
              Interactive Lab Sandbox
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-sm font-light mt-4 md:mt-0">
            Every month we highlight a project. Try typing some shell scripts in our featured virtual environment.
          </p>
        </div>

        {/* Large Feature Grid Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card Left: Project Specs */}
          <div className="lg:col-span-5 p-8 rounded-3xl border border-slate-900 bg-slate-900/20 backdrop-blur-md flex flex-col justify-between text-left">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 bg-violet-500/10 border border-violet-500/25 text-violet-400 text-xs font-semibold rounded-full">
                  Experimental Tool
                </span>
                <span className="text-xs text-slate-500 font-medium">May 2026</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-100">DevFlow Terminal</h3>
                <p className="text-sm text-slate-450 leading-relaxed font-light">
                  A custom terminal playground designed to execute web-sandbox configurations. Try running instructions directly inside the terminal simulator panel to explore system status.
                </p>
              </div>

              {/* Feature specs list */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center space-x-2 text-xs text-slate-400 font-light">
                  <div className="w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                  <span>Instant command interpretation</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-400 font-light">
                  <div className="w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                  <span>Live Matrix Code generator module</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-400 font-light">
                  <div className="w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                  <span>Expandable utility database integration</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center space-x-3">
              <button 
                onClick={() => executeCommand('help')}
                className="px-5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-850 text-slate-350 hover:text-slate-100 text-xs font-semibold flex items-center space-x-2 transition-all"
              >
                <Play className="h-3 w-3 fill-slate-450" />
                <span>Initialize Help</span>
              </button>
            </div>
          </div>

          {/* Card Right: Interactive Terminal Widget */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-900 bg-slate-950 overflow-hidden flex flex-col justify-between shadow-2xl relative min-h-[360px] text-left">
            
            {/* Optional Matrix stream layer */}
            {matrixActive && (
              <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden font-mono text-[10px] text-green-500 leading-none select-none">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute whitespace-nowrap animate-pulse-slow"
                    style={{
                      left: `${i * 6}%`,
                      top: `-${Math.random() * 100}px`,
                      animationDuration: `${1.5 + Math.random() * 2}s`,
                      writingMode: 'vertical-rl'
                    }}
                  >
                    {Array.from({ length: 25 }).map(() => String.fromCharCode(33 + Math.floor(Math.random() * 90))).join('')}
                  </div>
                ))}
              </div>
            )}

            {/* Terminal Window Header */}
            <div className="bg-slate-900 px-5 py-3 border-b border-slate-950 flex items-center justify-between z-10">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <span className="text-[10px] font-mono font-semibold text-slate-400 tracking-wider">sh -- devflow@kk-labs</span>
              <TerminalIcon className="h-3.5 w-3.5 text-slate-500" />
            </div>

            {/* Terminal Logs area */}
            <div className="p-6 font-mono text-xs text-slate-350 space-y-2 overflow-y-auto flex-1 h-[260px] z-10">
              {terminalHistory.map((item, idx) => {
                if (item.type === 'input' && item.text !== '') {
                  return (
                    <div key={idx}>
                      <span className="text-cyan-400 font-bold">visitor@kk-labs:~$ </span>
                      <span className="text-slate-100">{item.text}</span>
                    </div>
                  );
                } else if (item.type === 'system') {
                  return (
                    <div key={idx} className="text-slate-500 italic">
                      {item.text}
                    </div>
                  );
                } else if (item.type === 'error') {
                  return (
                    <div key={idx} className="text-rose-400 font-medium">
                      {item.text}
                    </div>
                  );
                } else if (item.type === 'success') {
                  return (
                    <div key={idx} className="text-emerald-400 font-medium">
                      {item.text}
                    </div>
                  );
                } else if (item.type === 'output') {
                  return (
                    <div key={idx} className="text-slate-300 whitespace-pre-wrap">
                      {item.text}
                    </div>
                  );
                }
                return null;
              })}
              <div ref={terminalEndRef} />
            </div>

            {/* Terminal Input area */}
            <div className="bg-slate-900/40 p-4 border-t border-slate-900 flex items-center space-x-2.5 z-10">
              <span className="font-mono text-xs text-cyan-400 font-bold shrink-0">visitor@kk-labs:~$</span>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type command and hit Enter..."
                className="flex-1 bg-transparent font-mono text-xs text-slate-100 border-none outline-none placeholder-slate-600 focus:ring-0"
              />
              <button
                onClick={() => {
                  executeCommand(inputValue);
                  setInputValue('');
                }}
                className="p-1.5 hover:bg-slate-900 border border-transparent hover:border-slate-800 rounded-lg text-slate-400 hover:text-slate-200 transition-all shrink-0"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
