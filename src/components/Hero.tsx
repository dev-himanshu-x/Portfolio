import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';
import jellyfishImg from '../assets/images/jellyfish.svg';

export default function Hero() {
  const [stats, setStats] = useState({ years: 0, projects: 0 });

  useEffect(() => {
    fetch('https://api.github.com/users/dev-himanshu-x')
      .then(res => res.json())
      .then(data => {
        const createdYear = new Date(data.created_at).getFullYear();
        const currentYear = new Date().getFullYear();
        setStats({
          years: currentYear - createdYear || 3,
          projects: data.public_repos || 1
        });
      })
      .catch(() => setStats({ years: 3, projects: 1 }));
  }, []);

  return (
    <div className="min-h-screen bg-[#020c1b] text-white pt-20 pb-20 overflow-hidden relative">
      <div id="top" className="absolute top-0" />
      
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-20 items-center xl:items-stretch w-full">
          
          {/* Left Column: Profile Card */}
          <div className="w-full sm:w-[400px] xl:w-[420px] bg-[#0a192f]/40 backdrop-blur-2xl rounded-[3rem] p-8 sm:p-12 flex flex-col relative shrink-0 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5">
            {/* Image Box */}
            <div className="relative w-full aspect-square mb-10 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-3xl group-hover:opacity-60 transition-opacity" />
              
              <div className="absolute inset-0 bg-[#000814] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-inner">
                <img 
                  src="https://github.com/dev-himanshu-x.png" 
                  alt="Himanshu Jaiswal" 
                  className="w-full h-full object-cover grayscale opacity-70 mix-blend-screen hover:grayscale-0 hover:opacity-100 transition-all duration-1000 ease-in-out scale-110 group-hover:scale-100" 
                />
              </div>
            </div>

            <h2 className="text-4xl font-black text-white text-center mb-4 tracking-tighter">Himanshu Jaiswal</h2>
            
            <div className="flex justify-center mb-8">
              <div className="px-6 py-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full flex items-center gap-3 text-cyan-400 shadow-lg shadow-cyan-500/5">
                <FontAwesomeIcon icon={faDroplet} className="animate-pulse" />
                <span className="text-xs font-bold tracking-widest uppercase">Frontend Architect</span>
              </div>
            </div>

            <p className="text-cyan-100/50 text-center font-medium text-lg leading-relaxed mb-12">
              Crafting immersive digital ecosystems with pixel-perfect precision.
            </p>

            <div className="flex justify-center gap-6 mt-auto">
              <a href="https://github.com/dev-himanshu-x" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
                <FontAwesomeIcon icon={faGithub} className="text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/dev-himanshu-jaiswal/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
                <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
              </a>
              <a href="https://x.com/io_ohimanshu" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
                <FontAwesomeIcon icon={faXTwitter} className="text-xl" />
              </a>
            </div>
          </div>
          {/* Right Column: Content */}
          <div className="flex-1 flex flex-col justify-center w-full lg:pl-10">
            <div className="mb-12 relative">
              <div className="inline-block px-4 py-1 bg-cyan-500/20 rounded-lg text-cyan-400 text-xs font-bold tracking-[0.3em] uppercase mb-6">Available for Work</div>
              <h1 className="text-7xl sm:text-8xl lg:text-[9rem] font-black text-white leading-[0.85] tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">FRONTEND</h1>
              <h1 className="text-7xl sm:text-8xl lg:text-[9rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300/30 via-cyan-500/50 to-blue-900/10 leading-[0.85] tracking-tighter drop-shadow-[0_5px_15px_rgba(34,211,238,0.1)]">DEVELOPER</h1>
            </div>
            
            <div className="flex items-center gap-8 mb-16 relative">
              <p className="text-cyan-100/30 text-xl max-w-5xl font-medium leading-relaxed">
                Turning complex requirements into fluid, responsive, and high-performance React applications. I specialize in scalable frontend architecture and modern web performance.
              </p>
              {/* Jellyfish beside the paragraph */}
              <div className="shrink-0 w-20 h-20 sm:w-28 sm:h-28 opacity-40 animate-float-slow pointer-events-none">
                <img src={jellyfishImg} className="w-full h-full" alt="Jellyfish" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-12 sm:gap-20 items-center relative">
              <div className="relative z-10 group">
                <div className="text-5xl sm:text-7xl font-black text-white mb-3 tabular-nums drop-shadow-lg">{stats.years}+</div>
                <div className="text-cyan-500/40 text-sm tracking-[0.2em] uppercase font-bold">YEARS OF<br/>EXPERIENCE</div>
              </div>
              
              <div className="relative z-10 group flex items-center gap-6">
                <div>
                  <div className="text-5xl sm:text-7xl font-black text-white mb-3 tabular-nums drop-shadow-lg">{stats.projects}+</div>
                  <div className="text-cyan-500/40 text-sm tracking-[0.2em] uppercase font-bold">PROJECTS<br/>ON GITHUB</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
