# 🌊 Deep Sea Portfolio | Himanshu Jaiswal

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Bun](https://img.shields.io/badge/Bun-Fast-000000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh/)
[![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

An immersive, high-fidelity portfolio experience built with **React 19**, **TypeScript**, and **Tailwind CSS**. Inspired by deep-sea aesthetics, this project features custom motion, dynamic GitHub integration, and a sophisticated scratch-to-reveal entry experience.

---

## ✨ Key Features

- **🚢 Immersive Entry:** Interactive "scratch-to-reveal" layer with floating jellyfish and bioluminescent effects.
- **🐙 Dynamic Projects:** Real-time integration with GitHub API (automated via daily actions) to showcase live repository data and descriptions.
- **🐠 Premium UI/UX:** Built with Tailwind CSS v4, featuring glassmorphism, smooth parallax scrolling, and custom SVG animations.
- **🎵 Atmospheric Audio:** Minimalist background music player inspired by lofi "snowfall" aesthetics.
- **⚡ Performance First:** Powered by Bun and Vite for near-instant load times and optimized build sizes.

## 🛠️ Technical Arsenal

- **Frontend:** React 19, TanStack Router, TanStack Query
- **Styling:** Tailwind CSS v4 (Custom @theme configuration)
- **Animation:** Framer Motion, GSAP, React Scroll Parallax
- **3D Elements:** Three.js, React Three Fiber (for deep-sea atmospheric effects)
- **Tooling:** Bun, Vite, Biome (Linting & Formatting)
- **Monitoring:** Vercel Analytics

## 🚀 Getting Started

### Prerequisites
Ensure you have [Bun](https://bun.sh/) installed (recommended) or Node.js.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/dev-himanshu-x/Portfolio.git
   ```
2. Install dependencies:
   ```bash
   bun install
   ```
3. Launch development server:
   ```bash
   bun run dev
   ```

## 🔧 Automated Repository Syncing
This portfolio remains current without manual updates. A custom GitHub Action (`deploy.yml`) runs daily to:
1. Fetch latest public repositories from your profile.
2. Enrich metadata from repository READMEs.
3. Update `src/data/repos.json` automatically.

---

## 🛠️ Maintenance & Linguist Fix
**Notice on Language Statistics:**
If your GitHub language bar shows high JavaScript percentage despite being a TypeScript project, this is usually due to large reference scripts or build artifacts. This project includes a `.gitattributes` file that:
- Marks `ref_script.js` and `ref_style.css` as documentation.
- Excludes lock files and configuration scripts from statistics.
- **Result:** Accurate representation of your 100% TypeScript codebase.

---

**Crafted with 💙 by [Himanshu Jaiswal](https://github.com/dev-himanshu-x)**
