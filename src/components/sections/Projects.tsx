import { Github, ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useMemo } from "react";
import type { GitHubRepo } from "../../types/github";
import repos from "../../data/repos.json";
const INITIAL_COUNT = 4;

const REPO_ORDER = [
  "MedSync",
  "XeroTask",
  "react-tic-tac-toe",
  "PeerPulse",
  "AutoTable",
  "react-antd-form",
];

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const orderSet = useMemo(() => new Set(REPO_ORDER), []);

  const orderedRepos = useMemo(() => {
    return REPO_ORDER.map((name) => repos.find((r) => r.name === name)).filter(
      Boolean,
    ) as GitHubRepo[];
  }, [repos]);

  const otherRepos = useMemo(() => {
    return repos
      .filter((r) => !orderSet.has(r.name))
      .sort(
        (a, b) =>
          new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime(),
      );
  }, [repos, orderSet]);

  const combined = [...orderedRepos, ...otherRepos];

  const visible = combined.slice(0, visibleCount);
  const hasMore = visibleCount < combined.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => {
      const next = Math.min(prev + 4, combined.length);

      requestAnimationFrame(() => {
        const el = document.getElementById(`repo-${next - 4}`);
        el?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });

      return next;
    });
  };

  return (
    <div className="w-full flex items-center justify-center transition-all relative bg-[#020c1b] text-white py-32 overflow-hidden">
      <div id="projects" className="absolute top-0" />
      <div className="absolute top-0 right-0 w-200 h-200 bg-cyan-900/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-160 h-160 bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">
        <div className="flex flex-col gap-8 mb-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-cyan-400">
              <span className="w-12 h-px bg-cyan-400"></span>
              <span className="text-xs font-black uppercase tracking-[0.4em]">
                Projects
              </span>
            </div>
            <h1 className="text-5xl sm:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.85] text-white">
              FEATURED
              <br />
              <span className="text-cyan-600/70">WORKS</span>
            </h1>
          </div>
        </div>
        <>
          <div className="space-y-0">
            {visible.map((repo, i) => (
              <ProjectCard
                key={repo.id}
                repo={repo}
                index={i}
                id={`repo-${i}`}
              />
            ))}
          </div>
          {combined.length > INITIAL_COUNT && (
            <div className="mt-12 flex justify-center gap-4">
              {hasMore ? (
                <button
                  onClick={handleShowMore}
                  className="group flex items-center gap-3 px-8 py-4 border border-cyan-800/40 rounded-2xl text-sm font-black uppercase tracking-widest text-cyan-400/70 hover:border-cyan-400 hover:text-white hover:bg-cyan-950/40 transition-all duration-300"
                >
                  <ChevronDown
                    size={16}
                    className="group-hover:translate-y-0.5 transition-transform"
                  />
                  Show More ({Math.min(4, combined.length - visibleCount)} more)
                </button>
              ) : (
                <button
                  onClick={() => setVisibleCount(INITIAL_COUNT)}
                  className="group flex items-center gap-3 px-8 py-4 border border-cyan-800/40 rounded-2xl text-sm font-black uppercase tracking-widest text-cyan-400/70 hover:border-cyan-400 hover:text-white hover:bg-cyan-950/40 transition-all duration-300"
                >
                  <ChevronUp
                    size={16}
                    className="group-hover:-translate-y-0.5 transition-transform"
                  />
                  Show Less
                </button>
              )}
            </div>
          )}
        </>
      </div>
    </div>
  );
}

function ProjectCard({
  repo,
  index,
  id,
}: {
  repo: GitHubRepo;
  index: number;
  id: string;
}) {
  const tech = repo.topics.length > 0 ? repo.topics : [];

  return (
    <div
      id={id}
      className="group relative border-t border-white/5 py-12 last:border-b last:border-white/5 transition-all duration-500 hover:border-cyan-500/20"
    >
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-cyan-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top rounded-full" />
      <div className="absolute inset-0 bg-linear-to-r from-cyan-500/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-start gap-8 pl-0 group-hover:pl-6 transition-all duration-500">
        <div className="hidden lg:flex w-16 shrink-0 pt-3">
          <span className="text-xs font-black text-cyan-500/20 tracking-[0.2em] tabular-nums group-hover:text-cyan-500/50 transition-colors duration-300">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="flex-1 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight group-hover:text-cyan-50 transition-colors duration-300">
                {repo.name
                  .replace(/-/g, " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </h3>
            </div>
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
