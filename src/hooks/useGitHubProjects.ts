import fallbackRepos from '../data/repos.json';
import type { GitHubRepo } from '../types/github';

export function useGitHubProjects() {
  const data = fallbackRepos as any;
  const repos = Array.isArray(data) ? data : data.repos || [];

  return {
    repos: repos as GitHubRepo[],
    loading: false,
    error: null,
  };
}
