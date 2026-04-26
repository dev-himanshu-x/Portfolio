import { Parallax } from 'react-scroll-parallax';
import fishesImg from '../../assets/images/fishes.svg';
import sharkImg from '../../assets/images/shark.svg';
import { EXPERIENCE } from '../../data';

const ExperienceItem = ({ data }: { data: any }) => {
  return (
    <div className="relative pl-10 md:pl-20 pb-24 last:pb-0 group overflow-hidden">
      <div className="absolute left-[7px] md:left-[11px] top-4 bottom-0 w-[1px] bg-cyan-500/20 group-last:bg-transparent" />
      <div className="absolute left-0 md:left-1 top-0 w-4 h-4 rounded-full bg-[#020c1b] border-2 border-cyan-500/50 group-hover:border-cyan-400 transition-colors duration-500 z-10 shadow-[0_0_10px_rgba(34,211,238,0)] group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]">
        <div className="absolute inset-[3px] rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="flex flex-col gap-2 transition-transform duration-500 group-hover:translate-x-1 md:group-hover:translate-x-2 pr-4">
        <span className="text-[10px] font-medium tracking-[0.3em] text-cyan-500/40 mb-3 uppercase">
          {data.period}
        </span>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-2 group-hover:text-cyan-50 transition-colors leading-tight break-words">
              {data.role}
            </h3>
            <p className="text-base sm:text-xl font-medium text-cyan-100/50">
              {data.company}
            </p>
          </div>
          <ul className="space-y-4 max-w-3xl">
            {data.points.map((point: string, i: number) => (
              <li
                key={i}
                className="flex items-start gap-3 text-cyan-100/70 text-base sm:text-lg leading-relaxed group/item hover:text-white transition-colors"
              >
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-cyan-800 shrink-0 group-hover/item:bg-cyan-400 transition-colors" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function Experience() {
  return (
    <div className="w-full flex items-center justify-center transition-all relative bg-[#020c1b] text-white py-24 overflow-hidden">
      <div id="experience" className="absolute top-0" />
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden flex items-center">
        <Parallax speed={-12} className="w-full">
          <div
            className="animate-swim w-full relative h-[400px]"
            style={{ animationDuration: '30s' }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 left-[60%]">
              <img src={fishesImg} className="w-32 md:w-48" alt="Fishes" />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 left-[20%]">
              <img
                src={sharkImg}
                className="w-[20rem] md:w-[30rem] opacity-40"
                alt="Shark"
              />
            </div>
          </div>
        </Parallax>
      </div>
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">
        <div className="max-w-6xl">
          <header className="mb-20 relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="flex flex-col items-start relative z-10">
              <div className="flex items-center gap-4 text-cyan-400 mb-6">
                <span className="w-12 h-px bg-cyan-400"></span>
                <span className="text-xs font-black uppercase tracking-[0.4em]">
                  Career Path
                </span>
              </div>
              <h1 className="text-5xl sm:text-8xl font-black tracking-tighter leading-none text-white drop-shadow-2xl flex flex-row flex-wrap items-center gap-4 md:gap-6">
                <span>WORK</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400/80 to-blue-900/30">
                  HISTORY
                </span>
              </h1>
            </div>
            <div className="absolute -bottom-12 left-0 w-full md:w-2/3 h-[1px] bg-gradient-to-r from-cyan-500/40 via-cyan-500/10 to-transparent" />
          </header>
          <div className="relative w-full">
            {EXPERIENCE.map((exp, idx) => (
              <ExperienceItem key={idx} data={exp} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
