import fs from 'fs';

const GITHUB_USERNAME = 'dev-himanshu-x';

function truncate(text: string, max = 160) {
  if (text.length <= max) return text;

  const trimmed = text.slice(0, max);
  const lastSpace = trimmed.lastIndexOf(' ');

  return (
    (lastSpace > 100 ? trimmed.slice(0, lastSpace) : trimmed).trimEnd() + '...'
  );
}

function extractDescription(readme: string): string | null {
  const lines = readme
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);

  let fallback: string | null = null;

  for (const line of lines) {
    if (line.startsWith('#')) continue;
    if (line.startsWith('![')) continue;
    if (line.startsWith('<')) continue;
    if (line.startsWith('---') || line.startsWith('===')) continue;

    const clean = line
      .replace(/[*_`[\]()]/g, '')
      .replace(/<[^>]*>/g, '')
      .trim();

    if (!clean) continue;

    if (clean.length > 30) {
      return truncate(clean);
    }

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
          Accept: 'application/vnd.github.raw+json',
        },
      },
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
        Accept: 'application/vnd.github+json',
      },
    },
  );

  if (!res.ok) {
    throw new Error('GitHub API failed');
  }

  const data = await res.json();
  const filtered = data.filter((r: any) => !r.fork);

  const TOP_N = 30;

  const enriched = await Promise.all(
    filtered.map(async (repo: any, i: number) => {
      if (i >= TOP_N) return repo;

      const readme = await fetchReadme(repo.name, token!);
      if (!readme) return repo;

      const desc = extractDescription(readme);
      if (!desc) return repo;

      return {
        ...repo,
        description: desc,
      };
    }),
  );

  const desiredOrder = [
    'MedSync',
    'PeerPulse',
    'BrightSync',
    'react-vite-weather-app',
    'XeroTask',
    'Portfolio',
    'AutoTable',
    'TanTask',
    'GridLock',
    'react-antd-form',
  ];

  enriched.sort((a, b) => {
    let indexA = desiredOrder.findIndex(
      (name) => name.toLowerCase() === a.name.toLowerCase(),
    );
    let indexB = desiredOrder.findIndex(
      (name) => name.toLowerCase() === b.name.toLowerCase(),
    );
    if (indexA === -1) indexA = 999;
    if (indexB === -1) indexB = 999;
    return indexA - indexB;
  });

  return enriched;
}

async function main() {
  const token = process.env.GITHUB_TOKEN;
  console.log(
    token
      ? '✅ GITHUB_TOKEN is present in environment.'
      : '❌ GITHUB_TOKEN is MISSING in environment.',
  );

  if (!token) {
    console.warn(
      '⚠️ GITHUB_TOKEN is not set. Skipping repository refresh and using existing data.',
    );
    return;
  }

  try {
    console.log(`🔍 Fetching data for user: ${GITHUB_USERNAME}...`);
    const userRes = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    if (!userRes.ok) {
      const errorData = await userRes.json();
      console.error('❌ Failed to fetch user data:', errorData);
      process.exit(1);
    }

    const userData = await userRes.json();
    const totalPublicRepos = userData.public_repos || 0;

    console.log(`📦 Found ${totalPublicRepos} public repositories.`);

    const repos = await fetchRepos();

    const output = {
      totalCount: totalPublicRepos,
      repos: repos,
    };

    const dir = './src/data';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync('./src/data/repos.json', JSON.stringify(output, null, 2));

    console.log(
      `✅ Success! repos.json updated with ${repos.length} repositories.`,
    );
  } catch (err) {
    console.error('❌ An unexpected error occurred:', err);
    process.exit(1);
  }
}

main();
