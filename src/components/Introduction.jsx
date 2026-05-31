import React from 'react';
import { Terminal, Lightbulb, Compass, Share2 } from 'lucide-react';

export default function Introduction() {
  const highlights = [
    {
      icon: <Terminal className="h-5 w-5 text-violet-400" />,
      title: "Build Tools",
      desc: "Creating lightweight, utilities that solve real problems, optimizing workflows."
    },
    {
      icon: <Lightbulb className="h-5 w-5 text-cyan-400" />,
      title: "Test Ideas",
      desc: "Fast-prototyping concepts to see what is possible and finding creative solutions."
    },
    {
      icon: <Compass className="h-5 w-5 text-pink-400" />,
      title: "Create Projects",
      desc: "Building complete applications, web portals, and software structures."
    },
    {
      icon: <Share2 className="h-5 w-5 text-emerald-400" />,
      title: "Share Experiments",
      desc: "Publishing source codes, documents, and sandboxes open for anyone to explore."
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-slate-950 border-t border-slate-900/50">
      <div className="absolute inset-0 bg-dot-pattern opacity-40 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="h-px w-8 bg-violet-500"></div>
              <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">Introduction</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-100 leading-tight">
              What is <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">KK Labs?</span>
            </h2>
            
            <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full"></div>
            
            <p className="text-lg text-slate-300 font-light leading-relaxed">
              KK Labs is my digital workshop where I build tools, test ideas, create projects, and share experiments. It acts as an open-source playground and a vault for my software engineering journey.
            </p>
          </div>

          {/* Right Column: Key pillars cards grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl border border-slate-900 bg-slate-900/30 backdrop-blur-sm hover:border-slate-800 hover:bg-slate-900/60 hover:scale-[1.01] hover:-translate-y-0.5 transition-all duration-300 text-left group"
              >
                <div className="p-3 bg-slate-950/60 rounded-xl w-fit border border-slate-850 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-200 mb-2 group-hover:text-slate-100 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
