import fs from "fs";

const GITHUB_USERNAME = "dev-himanshu-x";

function truncate(text: string, max = 160) {
  if (text.length <= max) return text;

  const trimmed = text.slice(0, max);
  const lastSpace = trimmed.lastIndexOf(" ");

  return (lastSpace > 100 ? trimmed.slice(0, lastSpace) : trimmed).trimEnd() + "...";
}

function extractDescription(readme: string): string | null {
  const lines = readme
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  let fallback: string | null = null;

  for (const line of lines) {
    if (line.startsWith("#")) continue;
    if (line.startsWith("![")) continue;
    if (line.startsWith("<")) continue;
    if (line.startsWith("---") || line.startsWith("===")) continue;

    const clean = line
      .replace(/[*_`[\]()]/g, "")
      .replace(/<[^>]*>/g, "")
      .trim();

    if (!clean) continue;

    // prefer good length
    if (clean.length > 30) {
      return truncate(clean);
    }

    // save shorter fallback if nothing better found
    if (!fallback && clean.length > 10) {
      fallback = clean;
    }
  }

  return fallback;
}

async function fetchReadme(repo: string, token: string) {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${repo}/readme`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github.raw+json",
        },
      }
    );

    if (!res.ok) return null;

    return await res.text();
  } catch {
    return null;
  }
}

async function fetchRepos() {
  const token = process.env.GITHUB_TOKEN;

  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=pushed&direction=desc`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("GitHub API failed");
  }

  const data = await res.json();

  const filtered = data.filter((r: any) => !r.fork);

  // only enrich top N repos (avoid rate limits)
  const TOP_N = 6;

  const enriched = await Promise.all(
    filtered.map(async (repo: any, i: number) => {
      if (repo.description || i >= TOP_N) return repo;

      const readme = await fetchReadme(repo.name, token!);
      if (!readme) return repo;

      const desc = extractDescription(readme);

      return {
        ...repo,
        description: desc || repo.description,
      };
    })
  );

  const desiredOrder = [
    "MedSync",
    "PeerPulse",
    "BrightSync",
    "react-vite-weather-app",
    "XeroTask",
    "Portfolio",
    "AutoTable",
    "TanTask",
    "react-tic-tac-toe",
    "react-antd-form"
  ];

  enriched.sort((a, b) => {
    let indexA = desiredOrder.indexOf(a.name);
    let indexB = desiredOrder.indexOf(b.name);
    if (indexA === -1) indexA = 999;
    if (indexB === -1) indexB = 999;
    return indexA - indexB;
  });

  return enriched;
}

async function main() {
  const repos = await fetchRepos();

  fs.writeFileSync(
    "./src/data/repos.json",
    JSON.stringify(repos, null, 2)
  );

  console.log("✅ repos with README descriptions updated");
}

main();