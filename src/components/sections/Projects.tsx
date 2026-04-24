import { Github, ArrowUpRight, ChevronDown, ChevronUp, Loader2, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { useGitHubProjects } from '../../hooks/useGitHubProjects';
import type { GitHubRepo } from '../../hooks/useGitHubProjects';

const INITIAL_COUNT = 4;

// Custom display order — repos listed here appear first in this order
const REPO_ORDER = [
  'hospital-management-angularjs-bootstrap',
  'react-webrtc-peerjs-chat',
  'tanstack-task-planner',
  'react-vite-weather-app',
  'react-mui-todo',
  'tanstack-dynamic-table',
  'react-tic-tac-toe',
  'tanstack-todo-typescript',
  'react-antd-form', // User requested AntD Form be last
];

export default function Projects() {
  const { repos, loading, error } = useGitHubProjects();
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const sorted = [...repos].sort((a, b) => {
    const ai = REPO_ORDER.indexOf(a.name);
    const bi = REPO_ORDER.indexOf(b.name);
    if (ai === -1 && bi === -1) return 0;
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });

  const visible = sorted.slice(0, visibleCount);
  const hasMore = visibleCount < sorted.length;

  return (
    <div className="w-full flex items-center justify-center transition-all relative bg-[#020c1b] text-white py-32 overflow-hidden">
      <div id="projects" className="absolute top-0" />

      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-cyan-900/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">

        {/* Header */}
        <div className="flex flex-col gap-8 mb-20 border-b border-white/5 pb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-cyan-400">
              <span className="w-12 h-px bg-cyan-400"></span>
              <span className="text-xs font-black uppercase tracking-[0.4em]">Projects</span>
            </div>

            <h1 className="text-5xl sm:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.85] text-white">
              FEATURED<br />
              <span className="text-cyan-600/70">WORKS</span>
            </h1>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-32 gap-6 text-cyan-400/50">
            <Loader2 size={40} className="animate-spin" />
            <span className="text-sm font-bold uppercase tracking-widest">Fetching from GitHub...</span>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="flex flex-col items-center justify-center py-24 gap-4 text-red-400/60">
            <AlertCircle size={32} />
            <p className="text-sm font-bold uppercase tracking-widest">Could not load projects</p>
            <p className="text-xs text-cyan-100/30">{error}</p>
          </div>
        )}

        {/* Project List */}
        {!loading && !error && (
          <>
            <div className="space-y-0">
              {visible.map((repo, i) => (
                <ProjectCard key={repo.id} repo={repo} index={i} />
              ))}
            </div>

            {/* Show More / Show Less */}
            {repos.length > INITIAL_COUNT && (
              <div className="mt-12 flex justify-center gap-4">
                {hasMore ? (
                  <button
                    onClick={() => setVisibleCount(prev => Math.min(prev + 4, repos.length))}
                    className="group flex items-center gap-3 px-8 py-4 border border-cyan-800/40 rounded-2xl text-sm font-black uppercase tracking-widest text-cyan-400/70 hover:border-cyan-400 hover:text-white hover:bg-cyan-950/40 transition-all duration-300"
                  >
                    <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
                    Show More ({Math.min(4, repos.length - visibleCount)} more)
                  </button>
                ) : (
                  <button
                    onClick={() => setVisibleCount(INITIAL_COUNT)}
                    className="group flex items-center gap-3 px-8 py-4 border border-cyan-800/40 rounded-2xl text-sm font-black uppercase tracking-widest text-cyan-400/70 hover:border-cyan-400 hover:text-white hover:bg-cyan-950/40 transition-all duration-300"
                  >
                    <ChevronUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                    Show Less
                  </button>
                )}
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
}

function ProjectCard({ repo, index }: { repo: GitHubRepo; index: number }) {
  const tech = repo.topics.length > 0 ? repo.topics : [];

  return (
    <div className="group relative border-t border-white/5 py-12 last:border-b last:border-white/5 transition-all duration-500 hover:border-cyan-500/20">

      {/* Hover left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-cyan-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top rounded-full" />

      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-start gap-8 pl-0 group-hover:pl-6 transition-all duration-500">

        {/* Index */}
        <div className="hidden lg:flex w-16 shrink-0 pt-3">
          <span className="text-xs font-black text-cyan-500/20 tracking-[0.2em] tabular-nums group-hover:text-cyan-500/50 transition-colors duration-300">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Main content */}
        <div className="flex-1 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight group-hover:text-cyan-50 transition-colors duration-300">
                {repo.name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
              </h3>
            </div>

            {/* Action links */}
            <div className="flex items-center gap-3 shrink-0 pt-1">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                title="View Repository"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/8 text-cyan-400/50 flex items-center justify-center hover:bg-cyan-400 hover:text-[#020c1b] hover:border-cyan-400 transition-all duration-300"
              >
                <Github size={18} />
              </a>
              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-950/50 border border-cyan-800/40 text-cyan-300 text-sm font-black uppercase tracking-widest hover:bg-cyan-400 hover:text-[#020c1b] hover:border-cyan-400 transition-all duration-300"
                >
                  Live <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          </div>

          {repo.description && (
            <p className="text-lg text-cyan-100/45 leading-relaxed max-w-3xl font-medium">
              {repo.description}
            </p>
          )}

          {/* Tech stack from topics */}
          {tech.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tech.map((t, j) => (
                <span
                  key={j}
                  className="px-3 py-1 border border-white/6 rounded text-xs font-bold text-cyan-200/35 group-hover:text-cyan-300/60 group-hover:border-cyan-800/50 transition-all duration-300"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
