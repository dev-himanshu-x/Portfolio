import { AnimatePresence, motion } from 'framer-motion';
import {
  Cloud,
  Code2,
  Database,
  Dog,
  Layers,
  Layout,
  Share2,
  Webhook,
} from 'lucide-react';
import { useState } from 'react';
import {
  SiAntdesign,
  SiAxios,
  SiBiome,
  SiBootstrap,
  SiBun,
  SiCloudflare,
  SiCss,
  SiDjango,
  SiEslint,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJson,
  SiNextdotjs,
  SiOpenapiinitiative,
  SiPrettier,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTanstack,
  SiTypescript,
  SiVite,
} from 'react-icons/si';
import { Parallax } from 'react-scroll-parallax';
import jellyfish from '../../assets/images/jellyfish.svg';
import FadeInImage from '../ui/FadeInImage';
import Reveal from '../ui/Reveal';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Layout,
    skills: [
      { name: 'React.js', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TanStack Router', icon: SiTanstack },
      { name: 'TanStack Start', icon: SiTanstack },
      { name: 'TanStack Virtual', icon: SiTanstack },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Bootstrap', icon: SiBootstrap },
      { name: 'Ant Design', icon: SiAntdesign },
      { name: 'PeerJS (WebRTC)', icon: Share2 },
    ],
  },
  {
    title: 'Languages',
    icon: Code2,
    skills: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Python', icon: SiPython },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss },
    ],
  },
  {
    title: 'Backend & APIs',
    icon: Database,
    skills: [
      { name: 'Django', icon: SiDjango },
      { name: 'REST APIs', icon: Webhook },
      { name: 'Axios', icon: SiAxios },
      { name: 'OpenAPI', icon: SiOpenapiinitiative },
      { name: 'JSON Server', icon: SiJson },
      { name: 'TanStack Query', icon: SiTanstack },
      { name: 'Zustand', icon: Layers },
    ],
  },
  {
    title: 'Cloud & Tools',
    icon: Cloud,
    skills: [
      { name: 'Cloudflare', icon: SiCloudflare },
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Bun', icon: SiBun },
      { name: 'Vite', icon: SiVite },
      { name: 'ESLint', icon: SiEslint },
      { name: 'Biome', icon: SiBiome },
      { name: 'Prettier', icon: SiPrettier },
      { name: 'Husky', icon: Dog },
    ],
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = skillCategories[activeTab];

  return (
    <div className="w-full flex items-center justify-center transition-all relative bg-[#020c1b] text-white py-24 overflow-hidden">
      <div id="about-me" className="absolute top-0" />

      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <Parallax
          speed={15}
          className="absolute -bottom-20 left-10 w-48 sm:w-72 md:w-96"
        >
          <FadeInImage
            src={jellyfish}
            className="w-full animate-float-slow opacity-40"
            alt="Jellyfish"
            loading="lazy"
            decoding="async"
          />
        </Parallax>

        <div
          className="absolute top-1/4 left-1/3 w-2 h-2 bg-white/20 rounded-full animate-bounce"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-3 h-3 bg-white/10 rounded-full animate-bounce"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-white/20 rounded-full animate-bounce"
          style={{ animationDelay: '3s' }}
        />
      </div>

      <div className="w-full mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-20 items-start w-full">
          <div className="w-full max-w-[420px] shrink-0">
            <Reveal>
              <header className="space-y-4 xl:sticky xl:top-32">
                <div className="flex items-center gap-4 text-cyan-400">
                  <span className="w-12 h-px bg-cyan-400"></span>
                  <span className="text-xs font-black uppercase tracking-[0.4em]">
                    About Me
                  </span>
                </div>
                <h1 className="text-5xl sm:text-7xl font-black tracking-tighter leading-none">
                  <span className="whitespace-nowrap">BUILDING WITH</span>
                  <br />
                  <span className="whitespace-nowrap">
                    <span className="text-cyan-600/70">REACT</span> &amp;
                  </span>
                  <br />
                  TYPESCRIPT
                </h1>
              </header>
            </Reveal>
          </div>

          <div className="flex-1 w-full lg:pl-10 space-y-16">
            <Reveal
              delay={0.1}
              className="text-lg sm:text-xl text-cyan-100/60 leading-relaxed font-medium"
            >
              <p>
                I'm Himanshu Jaiswal, a Frontend Developer with 1+ year of hands-on experience in the React ecosystem. I bridge complex APIs with fluid, accessible interfaces, whether building modular ERP workflows or real-time dashboards. For me, high performance, robust type-safety, thoughtful UX, and <span className="text-cyan-400 italic">code quality are non-negotiable.</span>
              </p>
            </Reveal>



            <div className="relative pt-8">
              <div className="absolute -left-20 top-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

              <Reveal>
                <div className="flex items-center gap-4 text-cyan-400 mb-4 relative z-10">
                  <span className="w-12 h-px bg-cyan-400"></span>
                  <span className="text-xs font-black uppercase tracking-[0.4em]">
                    Skills
                  </span>
                </div>

                <h2 className="text-4xl sm:text-5xl font-black text-white mb-10 flex items-center gap-6 uppercase tracking-tighter relative z-10">
                  Technical Arsenal
                  <span className="flex-1 h-[2px] bg-gradient-to-r from-cyan-500/30 to-transparent"></span>
                </h2>
              </Reveal>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative z-10 bg-[#061224]/80 backdrop-blur-md rounded-2xl border border-cyan-900/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden"
              >
                <div className="flex flex-wrap gap-2 p-3 border-b border-white/5">
                  {skillCategories.map((category, idx) => (
                    <button
                      key={category.title}
                      type="button"
                      onClick={() => setActiveTab(idx)}
                      className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-colors duration-300 ${
                        activeTab === idx
                          ? 'text-[#020c1b]'
                          : 'text-cyan-300/60 hover:text-cyan-200 hover:bg-white/5'
                      }`}
                    >
                      {activeTab === idx && (
                        <motion.span
                          layoutId="skills-tab-highlight"
                          className="absolute inset-0 bg-cyan-400 rounded-xl"
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                      <category.icon
                        size={14}
                        strokeWidth={2.5}
                        className="relative z-10"
                      />
                      <span className="relative z-10">{category.title}</span>
                    </button>
                  ))}
                </div>

                <div className="p-6 sm:p-8 min-h-[160px] flex items-start">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="flex flex-wrap gap-3 w-full"
                    >
                      {activeCategory.skills.map((skill, sIdx) => (
                        <motion.span
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: sIdx * 0.03, duration: 0.25 }}
                          className="flex items-center gap-2.5 px-4 py-2 bg-cyan-950/30 border border-white/5 rounded-lg text-sm font-bold text-cyan-100/70 hover:bg-cyan-900/80 hover:text-white hover:border-cyan-400/40 transition-colors cursor-default"
                        >
                          <skill.icon size={16} className="text-cyan-400" />
                          {skill.name}
                        </motion.span>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
