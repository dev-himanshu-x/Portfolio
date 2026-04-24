# 🌊 Himanshu Jaiswal — Portfolio

A modern, immersive single-page portfolio built with React 19 and TypeScript. Features a scratchable welcome screen, lofi music player, parallax scrolling, and smooth animations throughout.

**Live:** [dev-himanshu-x.github.io](https://github.com/dev-himanshu-x) &nbsp;|&nbsp; **GitHub:** [@dev-himanshu-x](https://github.com/dev-himanshu-x)

---

## ✨ Features

- **Scratch-to-enter cover screen** — tile-based scratchcard animation on desktop (hover) and mobile (touch)
- **Lofi music player** — ambient background music with progress bar, mute, and seek support
- **GitHub stats** — live years of experience and project count fetched from the GitHub API
- **Parallax scrolling** — depth-layered sections using `react-scroll-parallax`
- **3D elements** — Three.js / React Three Fiber powered visuals
- **Fully responsive** — mobile-first layout with Tailwind CSS v4
- **Client-side routing** — TanStack Router with zero-config setup
- **Floating UI tooltips** — accessible hover interactions via `@floating-ui/react`

---

## 🛠 Tech Stack

| Category | Libraries |
|---|---|
| Framework | React 19, TypeScript 6 |
| Build | Vite 8, Bun |
| Styling | Tailwind CSS v4 |
| Routing | TanStack Router |
| Animation | Framer Motion, react-scroll-parallax |
| 3D | Three.js, React Three Fiber, Drei |
| Icons | FontAwesome (Solid + Brands) |
| Utilities | classnames, clsx, lodash |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or [Bun](https://bun.sh)

### Install & Run

```bash
# Clone the repo
git clone https://github.com/dev-himanshu-x/portfolio.git
cd portfolio

# Install dependencies
bun install
# or: npm install

# Start dev server
bun run dev
# or: npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
bun run build
# or: npm run build
```

Output goes to the `dist/` folder.

### Preview Production Build

```bash
bun run preview
# or: npm run preview
```

---

## 🎵 Music Player Setup

The lofi music player requires a local audio file. Add any `.mp3` to the public folder:

```
public/music.mp3
```

Free tracks with no attribution required: [pixabay.com/music](https://pixabay.com/music/)

---

## 📁 Project Structure

```
src/
├── assets/
│   └── images/          # SVGs (jellyfish, octopus, etc.)
├── components/
│   ├── layout/
│   │   ├── CoverScreen.tsx   # Scratchable welcome screen
│   │   └── SideNav.tsx       # Fixed side navigation
│   ├── sections/
│   │   ├── Hero.tsx          # Landing section with profile card
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   └── ui/
│       └── MusicPlayer.tsx   # Lofi audio player
├── data.ts              # Projects, experience, contact data
├── App.tsx              # Router setup
└── main.tsx             # Entry point
```

---

## 📬 Contact

| Platform | Link |
|---|---|
| GitHub | [github.com/dev-himanshu-x](https://github.com/dev-himanshu-x) |
| LinkedIn | [linkedin.com/in/dev-himanshu-jaiswal](https://www.linkedin.com/in/dev-himanshu-jaiswal) |
| X (Twitter) | [x.com/io_ohimanshu](https://x.com/io_ohimanshu) |
| Email | iam.himanshu.x@gmail.com |
