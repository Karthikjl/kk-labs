import React from 'react';
import { User, Mail, MessageSquare } from 'lucide-react';

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

export default function AboutCreator() {
  const roles = [
    { label: "Developer", color: "bg-violet-500/10 text-violet-400 border-violet-500/20" },
    { label: "Creator", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
    { label: "Problem Solver", color: "bg-pink-500/10 text-pink-400 border-pink-500/20" }
  ];

  return (
    <section id="about" className="relative py-24 bg-slate-950 border-t border-slate-900/50">
      {/* Background Dots */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 z-0"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Profile Card wrapper */}
        <div className="p-8 md:p-12 rounded-3xl border border-slate-900 bg-slate-900/15 backdrop-blur-md hover:border-slate-800 transition-all duration-500">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            {/* Avatar Column */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative group">
                {/* Glowing Outer Rings */}
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-cyan-500 rounded-full blur-[10px] opacity-75 group-hover:scale-105 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-500 to-cyan-400 rounded-full scale-102"></div>
                
                {/* Avatar Image container */}
                <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-slate-950 bg-slate-900 flex items-center justify-center">
                  <img 
                    src="/avatar.png" 
                    alt="Karthik - KK Labs Creator" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center bg-slate-900 text-slate-400">
                    <User className="h-10 w-10 text-slate-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Description Column */}
            <div className="md:col-span-8 space-y-6 text-center md:text-left">
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <div className="h-px w-4 bg-violet-500"></div>
                  <span className="text-[10px] font-bold text-violet-400 uppercase tracking-widest">Creator Profile</span>
                </div>
                
                <h3 className="text-3xl font-extrabold text-slate-100">
                  Built by Karthik
                </h3>

                {/* Roles pill list */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1">
                  {roles.map((item, idx) => (
                    <span 
                      key={idx} 
                      className={`text-xs font-semibold px-3 py-1 rounded-full border ${item.color}`}
                    >
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bio */}
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                Hi, I'm Karthik. I'm a developer, creator, and problem solver who loves turning lines of syntax into responsive web tools. KK Labs is my digital workbench where I experiment, build, and deploy useful utilities to simplify complex setups.
              </p>

              {/* Creator Quote */}
              <div className="p-4 rounded-xl bg-slate-950/60 border-l-2 border-cyan-500 font-mono text-[10px] text-slate-400 leading-relaxed italic text-left">
                "Code is not just instructional language; it's a logical playground for structural design and creative problem solving."
              </div>

              {/* Action Contact buttons */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-950 border border-slate-900 hover:border-slate-800 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-900 transition-colors"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-950 border border-slate-900 hover:border-slate-800 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-900 transition-colors"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>

                <a 
                  href="mailto:contact@kklabs.dev" 
                  className="p-2.5 bg-slate-950 border border-slate-900 hover:border-slate-800 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-900 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                </a>

                <a
                  href="mailto:contact@kklabs.dev"
                  className="px-4 py-2 bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 rounded-xl text-xs font-semibold text-white flex items-center space-x-2 transition-all shadow-lg hover:shadow-cyan-500/10 hover:scale-[1.02]"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>Get In Touch</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
