import { useEffect, useState } from "react";

// export interface GitHubRepo {
//   id: number;
//   name: string;
//   description: string | null;
//   html_url: string;
//   homepage: string | null;
//   topics: string[];
//   created_at: string;
//   pushed_at: string;
//   stargazers_count: number;
//   fork: boolean;
// }

import type { GitHubRepo } from "../types/github";

const GITHUB_USERNAME = "dev-himanshu-x";
const EXCLUDED_REPOS = ["dev-himanshu-x"];

const CACHE_KEY = "github-projects-cache";
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

let memoryCache: GitHubRepo[] | null = null;

async function fetchReadmeDescription(
  repoName: string
): Promise<string | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/readme`,
      {
        headers: {
          Accept: "application/vnd.github.raw+json",
        },
      }
    );

    if (!res.ok || res.status === 403) return null;

    const text = await res.text();

    const lines = text
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

    for (const line of lines) {
      if (line.startsWith("#")) continue;
      if (line.startsWith("![")) continue;
      if (line.startsWith("<")) continue;
      if (line.startsWith("---") || line.startsWith("===")) continue;

      const clean = line.replace(/[*_`[\]]/g, "").trim();
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

        // in-memory cache
        if (memoryCache) {
          setRepos(memoryCache);
          setLoading(false);
          return;
        }

        // localStorage cache
        const cached = localStorage.getItem(CACHE_KEY);

        if (cached) {
          try {
            const parsed = JSON.parse(cached);

            if (
              parsed?.data &&
              Array.isArray(parsed.data) &&
              Date.now() - parsed.timestamp < CACHE_TTL
            ) {
              memoryCache = parsed.data;
              setRepos(parsed.data);
              setLoading(false);
              return;
            }
          } catch {
            localStorage.removeItem(CACHE_KEY);
          }
        }

        // fetch repos (no auth)
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=pushed&direction=desc`,
          { signal: controller.signal }
        );

        if (!res.ok) {
          throw new Error(`GitHub API error: ${res.status}`);
        }

        const data: GitHubRepo[] = await res.json();

        const filtered = data.filter(
          (r) => !r.fork && !EXCLUDED_REPOS.includes(r.name)
        );

        // limit README calls
        const top = filtered.slice(0, 6);
        const rest = filtered.slice(6);

        const enrichedTop = await Promise.all(
          top.map(async (r) => {
            if (r.description) return r;

            const readmeDesc = await fetchReadmeDescription(r.name);
            return { ...r, description: readmeDesc };
          })
        );

        const finalData = [...enrichedTop, ...rest];

        // cache it
        memoryCache = finalData;

        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            data: finalData,
            timestamp: Date.now(),
          })
        );

        setRepos(finalData);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError(err.message || "Something went wrong");
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