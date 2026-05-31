import React from 'react';
import { Target, BookOpen, Wrench, Share2 } from 'lucide-react';

export default function Vision() {
  const pillars = [
    {
      title: "Learn",
      desc: "Deep-diving into new browser standards, frameworks, and system architectures to stay at the cutting edge.",
      icon: <BookOpen className="h-5 w-5 text-violet-400" />,
      borderColor: "group-hover:border-violet-500/30"
    },
    {
      title: "Build",
      desc: "Architecting high-fidelity components, useful developer scripts, and tools designed for high execution speed.",
      icon: <Wrench className="h-5 w-5 text-cyan-400" />,
      borderColor: "group-hover:border-cyan-500/30"
    },
    {
      title: "Share",
      desc: "Opening codebase archives, logs, and interactive workshops for other developers to critique and utilize.",
      icon: <Share2 className="h-5 w-5 text-pink-400" />,
      borderColor: "group-hover:border-pink-500/30"
    }
  ];

  return (
    <section className="relative py-24 bg-slate-950 border-t border-slate-900/50">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0"></div>
      
      {/* Spotlight ambient gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-violet-950/20 to-transparent rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Card Container */}
        <div className="p-8 md:p-14 rounded-3xl border border-slate-900 bg-slate-900/10 backdrop-blur-md relative overflow-hidden text-center max-w-5xl mx-auto">
          
          <div className="space-y-6 max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2.5 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/40 text-slate-400 text-xs font-semibold uppercase tracking-widest">
              <Target className="h-3.5 w-3.5 text-violet-400" />
              <span>Core Mission</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
              Why KK Labs?
            </h2>
            
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              "To learn, build, and share useful things with others."
            </p>
            <p className="text-xs text-slate-500 max-w-md mx-auto font-light leading-relaxed">
              KK Labs was created as an antidote to idle ideas. It forces a disciplined commitment to turn simple thoughts into tangible, functional codebases.
            </p>
          </div>

          {/* Pillars columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {pillars.map((item, idx) => (
              <div 
                key={idx}
                className={`group p-6 rounded-2xl border border-slate-950 bg-slate-950/40 backdrop-blur-sm text-left flex flex-col justify-between hover:bg-slate-950/80 hover:-translate-y-1 transition-all duration-300 ${item.borderColor}`}
              >
                <div className="space-y-4">
                  <div className="p-2.5 bg-slate-900 border border-slate-850 rounded-xl w-fit group-hover:scale-105 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-200">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
