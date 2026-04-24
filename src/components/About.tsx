import { Parallax } from 'react-scroll-parallax';
import jellyfish from '../assets/images/jellyfish.svg';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React.js', 'TypeScript', 'JavaScript', 'Tanstack', 'AngularJS']
  },
  {
    title: 'UI & Animation',
    skills: ['Tailwind CSS', 'Framer Motion', 'MUI', 'Ant Design', 'Bootstrap']
  },
  {
    title: 'Backend & DB',
    skills: ['Django', 'Python', 'PostgreSQL', 'SQL']
  },
  {
    title: 'DevOps & Tools',
    skills: ['Docker', 'Nginx', 'Git', 'Linux', 'GitHub']
  }
];

export default function About() {
  return (
    <div className="screen-section relative bg-[#020c1b] text-white py-32 overflow-hidden">
      <div id="about-me" className="absolute top-0" />

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <Parallax speed={15} className="absolute bottom-20 left-10 w-96">
          <img src={jellyfish} className="w-full animate-jellyfish opacity-40" alt="Jellyfish" />
        </Parallax>

        {/* Bubbles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '3s' }} />
      </div>

      <div className="w-full mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-20 items-start w-full">

          {/* Left Column: Header */}
          <div className="w-full sm:w-[400px] xl:w-[420px] shrink-0">
            <header className="space-y-4 xl:sticky xl:top-32">
              <div className="flex items-center gap-4 text-cyan-400">
                <span className="w-12 h-px bg-cyan-400"></span>
                <span className="text-xs font-black uppercase tracking-[0.4em]">About Me</span>
              </div>
              <h1 className="text-6xl sm:text-7xl font-black tracking-tighter leading-none">
                CRAFTING <span className="text-cyan-600/70">DIGITAL</span><br />
                ECOSYSTEMS
              </h1>
            </header>
          </div>

          {/* Right Column: Narrative & Arsenal */}
          <div className="flex-1 w-full lg:pl-10 space-y-16">
            
            <div className="space-y-8 text-xl text-cyan-100/60 leading-relaxed font-medium">
              <p className="indent-12">
                I'm <span className="text-white">Himanshu Jaiswal</span>, a Frontend Architect dedicated to building high-performance, robust, and scalable web infrastructures. With a foundation built on 1+ years of rigorous development, I don't just build websites—I engineer high-fidelity digital systems.
              </p>
              <p>
                My philosophy is simple: <span className="text-cyan-400 italic">Code quality is non-negotiable.</span> Whether it's architecting complex React state machines or fine-tuning performance bottlenecks, I bridge the gap between technical requirements and production-ready reality.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 bg-cyan-950/20 rounded-3xl border border-white/5 backdrop-blur-sm group hover:border-cyan-400/30 transition-all shadow-lg">
                <h3 className="text-white font-black uppercase tracking-widest text-sm mb-4">Core Philosophy</h3>
                <p className="text-cyan-100/40 text-base">Performance isn't a feature; it's the architecture. I build for scale, optimized for speed.</p>
              </div>
              <div className="p-8 bg-cyan-950/20 rounded-3xl border border-white/5 backdrop-blur-sm group hover:border-cyan-400/30 transition-all shadow-lg">
                <h3 className="text-white font-black uppercase tracking-widest text-sm mb-4">Technical Prowess</h3>
                <p className="text-cyan-100/40 text-base">Specializing in the React ecosystem, with a deep dive into state management, SSR, and frontend infrastructure.</p>
              </div>
            </div>

            {/* Premium Technical Arsenal */}
            <div className="relative pt-8">
              <div className="absolute -left-20 top-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
              
              <h2 className="text-3xl font-black text-white mb-10 flex items-center gap-6 uppercase tracking-tighter relative z-10">
                Technical Arsenal
                <span className="flex-1 h-[2px] bg-gradient-to-r from-cyan-500/30 to-transparent"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {skillCategories.map((category, idx) => (
                  <div key={idx} className="group relative bg-[#061224]/80 backdrop-blur-md rounded-2xl border border-cyan-900/40 p-6 overflow-hidden hover:border-cyan-500/50 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500/20 group-hover:bg-cyan-400 transition-colors duration-500" />
                    <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-700" />
                    
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-cyan-400 mb-6 flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      {category.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill, sIdx) => (
                        <div 
                          key={sIdx} 
                          className="flex items-center gap-2 px-3 py-1.5 bg-cyan-950/30 border border-white/5 rounded text-sm font-bold text-cyan-100/70 hover:bg-cyan-900/80 hover:text-white hover:border-cyan-400/40 transition-all cursor-default"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>


            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
