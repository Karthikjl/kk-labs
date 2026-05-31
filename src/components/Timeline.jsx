import React from 'react';
import { Calendar, Terminal, ListTodo, Rocket } from 'lucide-react';

export default function Timeline() {
  const events = [
    {
      date: "May 2026",
      items: [
        {
          title: "New Lab Released",
          subtitle: "DevFlow Interactive Terminal Simulator",
          desc: "Deployed the virtual shell console experiment enabling matrix streams and sandbox workspace testing.",
          icon: <Terminal className="h-4 w-4 text-cyan-400" />,
          glowColor: "cyan"
        },
        {
          title: "New Project Published",
          subtitle: "Markdown Live-Renderer Portal",
          desc: "Published an optimized workspace rendering documents in real-time, supporting GitHub alert themes.",
          icon: <ListTodo className="h-4 w-4 text-violet-400" />,
          glowColor: "violet"
        }
      ]
    },
    {
      date: "April 2026",
      items: [
        {
          title: "Website Launch",
          subtitle: "KK Labs v1.0 Release",
          desc: "Unveiled the central repository and landing interface for my personal coding assets and tools archive.",
          icon: <Rocket className="h-4 w-4 text-pink-400" />,
          glowColor: "pink"
        }
      ]
    }
  ];

  return (
    <section id="updates" className="relative py-24 bg-slate-950 border-t border-slate-900/50">
      {/* Background Dot patterns */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 z-0"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-cyan-400" />
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">Recent Activity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Recently Added
          </h2>
          <p className="text-slate-400 text-sm max-w-sm mx-auto font-light">
            Stay updated with the latest releases, scripts, and logs rolling out of the workshop.
          </p>
        </div>

        {/* Timeline track */}
        <div className="relative border-l-2 border-slate-900 ml-4 md:ml-32 text-left">
          
          {events.map((group, groupIdx) => (
            <div key={groupIdx} className="mb-16 last:mb-0 relative">
              
              {/* Group Date Header - absolute positioned for md screens */}
              <div className="md:absolute md:-left-36 md:top-1.5 mb-6 md:mb-0 text-left">
                <span className="bg-slate-900 border border-slate-800 text-slate-350 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  {group.date}
                </span>
              </div>

              {/* Items in this date group */}
              <div className="space-y-8 pl-8 md:pl-10">
                {group.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="relative group">
                    
                    {/* Glowing Node Dot on Timeline Line */}
                    <div className="absolute -left-[41px] md:-left-[49px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-800 group-hover:border-violet-500 transition-all flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-slate-850 rounded-full group-hover:bg-violet-400 transition-colors"></div>
                    </div>

                    {/* Content Card */}
                    <div className="p-6 rounded-2xl border border-slate-900 bg-slate-900/10 backdrop-blur-md hover:border-slate-800 hover:bg-slate-900/40 transition-all duration-300 flex flex-col md:flex-row md:items-start gap-4">
                      
                      {/* Icon */}
                      <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-850 shrink-0 w-fit">
                        {item.icon}
                      </div>

                      {/* Text */}
                      <div className="space-y-1.5">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2.5">
                          <h4 className="text-sm font-bold text-slate-200">
                            {item.title}
                          </h4>
                          <span className="hidden sm:inline text-slate-700 text-xs">•</span>
                          <span className="text-xs text-slate-450 font-semibold">
                            {item.subtitle}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed font-light">
                          {item.desc}
                        </p>
                      </div>

                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
