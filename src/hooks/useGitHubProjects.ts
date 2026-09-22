import { useEffect, useState } from 'react';
import fallbackRepos from '../data/repos.json';
import type { GitHubRepo } from '../types/github';

const GITHUB_USERNAME = 'dev-himanshu-x';
const CACHE_KEY = 'gh-repos-cache-v1';
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes

// GitHub's unauthenticated REST API allows only 60 requests/hour per IP.
// Caching the response client-side means a visitor reloading or navigating
// around the site doesn't re-hit that limit on every page load.
function readCache(): GitHubRepo[] | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;

    const { repos: cached, cachedAt } = JSON.parse(raw) as {
      repos: GitHubRepo[];
      cachedAt: number;
    };

    if (Date.now() - cachedAt > CACHE_TTL_MS) return null;
    return cached;
  } catch {
    return null;
  }
}

function writeCache(repos: GitHubRepo[]) {
  try {
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ repos, cachedAt: Date.now() }),
    );
  } catch {
    // localStorage unavailable (private mode, quota) — safe to skip.
  }
}

// A few repos never had a real GitHub description (empty, or just the
// auto-generated README boilerplate). Override those with something
// that actually describes the project.
const DESCRIPTION_OVERRIDES: Record<string, string> = {
  'Sicuaura-Ecommerce':
    'A Next.js e-commerce storefront with URL-driven search, filters, and sorting, plus wishlist, cart, skeleton loading states, and error boundaries.',
  'Cloudflare-Csv-Template':
    'A TanStack Start starter template for Cloudflare Workers, preconfigured with Tailwind CSS, Biome, and Vitest.',
};

function applyOverrides(repos: GitHubRepo[]): GitHubRepo[] {
  return repos.map((repo) => {
    const override = DESCRIPTION_OVERRIDES[repo.name];
    return override ? { ...repo, description: override } : repo;
  });
}

function getFallbackRepos(): GitHubRepo[] {
  return applyOverrides((fallbackRepos as { repos: GitHubRepo[] }).repos || []);
}

/**
 * The live GitHub API often lags behind what's actually on the repo pages
 * (e.g. a description added after the last index) or the fields can be
 * blank. Fill gaps from the last known-good synced snapshot so cards never
 * regress to missing descriptions/links just because the live fetch is thin.
 */
function fillMissingFields(liveRepos: GitHubRepo[]): GitHubRepo[] {
  const fallbackByName = new Map(
    getFallbackRepos().map((repo) => [repo.name, repo]),
  );

  return applyOverrides(
    liveRepos.map((repo) => {
      const fallback = fallbackByName.get(repo.name);
      if (!fallback) return repo;

      return {
        ...repo,
        description: repo.description || fallback.description,
        homepage: repo.homepage || fallback.homepage,
        topics: repo.topics.length > 0 ? repo.topics : fallback.topics,
      };
    }),
  );
}

// Shared across every component using this hook so mounting it in
// multiple places (Hero, Projects, …) still fires only one network
// request instead of one per caller.
let inFlight: Promise<GitHubRepo[]> | null = null;

function fetchLiveRepos(): Promise<GitHubRepo[]> {
  if (!inFlight) {
    inFlight = fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
    )
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
        return res.json() as Promise<GitHubRepo[]>;
      })
      .then((data) => {
        const merged = fillMissingFields(data.filter((repo) => !repo.fork));
        writeCache(merged);
        return merged;
      })
      .finally(() => {
        inFlight = null;
      });
  }

  return inFlight;
}

export function useGitHubProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>(
    () => readCache() ?? getFallbackRepos(),
  );
  const [loading, setLoading] = useState(() => readCache() === null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    if (readCache()) return;

    fetchLiveRepos()
      .then((merged) => {
        if (!cancelled) setRepos(merged);
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load repos');
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { repos, loading, error };
}
