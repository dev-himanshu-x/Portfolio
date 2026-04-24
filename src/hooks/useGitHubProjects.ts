import { useEffect, useState } from 'react';

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  created_at: string;
  pushed_at: string;
  stargazers_count: number;
  fork: boolean;
}

// Fallback descriptions for repos that don't have one set on GitHub
const FALLBACK_DESCRIPTIONS: Record<string, string> = {
  'portfolio': 'An immersive deep-sea themed single-page portfolio with scratch-to-reveal entry, parallax marine animations, and a fully responsive React architecture.',
  'react-vite-weather-app': 'A responsive weather application with real-time data fetching via the Open-Meteo API, dynamic glassmorphism UI, and city-based search for Indian locations.',
  'hospital-management-angularjs-bootstrap': 'A full-featured hospital workflow system with appointment scheduling, patient records management, and role-specific dashboards.',
  'react-mui-todo': 'A polished todo manager built with Material UI featuring drag-and-drop task organization, priority tagging, and persistent local storage.',
  'react-antd-form': 'A dynamic form engine with multi-step flows, real-time validation, and reusable field schemas powered by Ant Design.',
  'react-webrtc-peerjs-chat': 'A peer-to-peer video chat application with screen sharing, live text messaging, and room-based collaboration using WebRTC and PeerJS.',
  'tanstack-dynamic-table': 'A highly configurable data table with sorting, filtering, pagination, and column resizing — built with full TypeScript type safety.',
  'tanstack-task-planner': 'A powerful task management system featuring dynamic scheduling, priority organization, and real-time state management using TanStack Query.',
  'react-tic-tac-toe': 'A classic Tic-Tac-Toe game with a modern UI, featuring local multiplayer and intelligent state management.',
  'tanstack-todo-typescript': 'A robust Todo application built with TanStack Query and TypeScript, showcasing advanced state synchronization and type-safe data handling.',
};

const GITHUB_USERNAME = 'dev-himanshu-x';

// Repos to exclude (forks, archived, or unrelated)
const EXCLUDED_REPOS = ['dev-himanshu-x'];

export function useGitHubProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchRepos() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=pushed&direction=desc`,
          { signal: controller.signal }
        );

        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

        const data: GitHubRepo[] = await res.json();

        const filtered = data
          .filter(r => !r.fork && !EXCLUDED_REPOS.includes(r.name))
          .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
          .map(r => ({
            ...r,
            description: r.description || FALLBACK_DESCRIPTIONS[r.name] || null,
          }));

        setRepos(filtered);
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
    return () => controller.abort();
  }, []);

  return { repos, loading, error };
}
