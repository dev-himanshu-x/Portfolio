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

const EXCLUDED_REPOS = ['dev-himanshu-x'];

async function fetchReadmeDescription(repoName: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/readme`,
      { headers: { Accept: 'application/vnd.github.raw+json' } }
    );
    if (!res.ok) return null;
    const text = await res.text();

    const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
    for (const line of lines) {
      if (line.startsWith('#')) continue;
      if (line.startsWith('![') || line.startsWith('<')) continue;
      if (line.startsWith('---') || line.startsWith('===')) continue;
      const clean = line.replace(/[*_`[\]]/g, '').trim();
      if (clean.length > 30) return clean;
    }
    return null;
  } catch {
    return null;
  }
}

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

        const filtered = data.filter(r => !r.fork && !EXCLUDED_REPOS.includes(r.name));

        const withDescriptions = await Promise.all(
          filtered.map(async (r) => {
            if (r.description) return r;
            const readmeDesc = await fetchReadmeDescription(r.name);
            return { ...r, description: readmeDesc };
          })
        );

        setRepos(withDescriptions);
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
