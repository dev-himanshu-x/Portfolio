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
          .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());

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
