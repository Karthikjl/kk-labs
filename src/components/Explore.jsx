import React from 'react';
import { Wrench, FolderGit2, FlaskConical, BookOpen, ArrowUpRight } from 'lucide-react';

export default function Explore({ searchQuery }) {
  const categories = [
    {
      id: 'tools',
      title: "Tools",
      count: "12 Utilities",
      desc: "Interactive utility apps, development scripts, syntax helpers, and formatting packages.",
      icon: <Wrench className="h-6 w-6 text-cyan-400" />,
      colorClass: "hover:border-cyan-500/50 hover:shadow-cyan-950/20",
      glowColor: "cyan",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      accentBg: "group-hover:bg-cyan-950/30"
    },
    {
      id: 'projects',
      title: "Projects",
      count: "8 Apps",
      desc: "Full-stack web applications, desktop tools, and production-ready code repositories.",
      icon: <FolderGit2 className="h-6 w-6 text-violet-400" />,
      colorClass: "hover:border-violet-500/50 hover:shadow-violet-950/20",
      glowColor: "violet",
      badgeColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
      accentBg: "group-hover:bg-violet-950/30"
    },
    {
      id: 'experiments',
      title: "Experiments",
      count: "15 Sandboxes",
      desc: "Bleeding-edge proof of concepts, creative coding, and experimental UI interactions.",
      icon: <FlaskConical className="h-6 w-6 text-pink-400" />,
      colorClass: "hover:border-pink-500/50 hover:shadow-pink-950/20",
      glowColor: "pink",
      badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
      accentBg: "group-hover:bg-pink-950/30"
    },
    {
      id: 'resources',
      title: "Resources",
      count: "30+ Items",
      desc: "Curated learning checklists, developer setup scripts, boilerplates, and configuration templates.",
      icon: <BookOpen className="h-6 w-6 text-emerald-400" />,
      colorClass: "hover:border-emerald-500/50 hover:shadow-emerald-950/20",
      glowColor: "emerald",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      accentBg: "group-hover:bg-emerald-950/30"
    }
  ];

  // Filter categories based on search input
  const filteredCategories = categories.filter(category => 
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="labs" className="relative py-24 bg-slate-950 border-t border-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">Explore Categories</span>
            <div className="h-px w-6 bg-cyan-500"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Browse Digital Assets
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto font-light">
            Dive into specific compartments of KK Labs, cataloged by engineering focus and project scale.
          </p>
        </div>

        {/* Categories Grid */}
        {filteredCategories.length > 0 ? (
          <div id="explore" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-mt-24">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className={`group relative p-7 bg-slate-900/25 border border-slate-900 rounded-3xl hover:bg-slate-900/55 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left ${category.colorClass}`}
              >
                {/* Spotlight effect for each card */}
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className={`p-3.5 bg-slate-950/80 border border-slate-900 rounded-2xl transition-all duration-300 ${category.accentBg}`}>
                      {category.icon}
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${category.badgeColor}`}>
                      {category.count}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-200 group-hover:text-slate-50 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-450 leading-relaxed font-light">
                      {category.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-900/60 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-slate-250 transition-colors">
                  <span>Enter Lab</span>
                  <div className="p-1 rounded-full bg-slate-950 border border-slate-900 group-hover:bg-slate-900 group-hover:border-slate-800 transition-colors">
                    <ArrowUpRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border border-dashed border-slate-800 rounded-3xl">
            <p className="text-slate-500 text-sm">No categories match your search "{searchQuery}"</p>
          </div>
        )}

      </div>
    </section>
  );
}
