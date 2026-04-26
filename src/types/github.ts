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