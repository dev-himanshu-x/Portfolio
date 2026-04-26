# Himanshu Jaiswal | Frontend Architect Portfolio

An immersive, high-fidelity portfolio experience built with **React**, **TypeScript**, and **Tailwind CSS**. Inspired by deep-sea aesthetics, this project features custom motion, dynamic GitHub integration, and a sophisticated scratch-to-reveal entry experience.

![Portfolio Preview](https://github.com/dev-himanshu-x.png)

## 🌊 Core Experience

- **Immersive Entry:** Interactive "scratch-to-reveal" layer with floating jellyfish and bioluminescent effects.
- **Dynamic Projects:** Seamless integration with GitHub API (synced via automated daily actions) to showcase real-time project data and README descriptions.
- **Premium UI:** Glassmorphism, smooth parallax scrolling, and custom SVG animations for a "Deep Sea" atmosphere.
- **Technical Arsenal:** A comprehensive look at my tech stack including React, Next.js, Three.js, GSAP, and more.
- **Interactive Audio:** Minimalist snowfall-inspired background music player.

## 🛠️ Technical Stack

- **Framework:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [GSAP](https://greensock.com/gsap/), [Framer Motion](https://www.framer.com/motion/), [React Scroll Parallax](https://www.npmjs.com/package/react-scroll-parallax)
- **Tooling:** [Bun](https://bun.sh/), [Biome](https://biomejs.dev/) (Formatting & Linting)
- **Icons:** [FontAwesome](https://fontawesome.com/), [Lucide React](https://lucide.dev/)
- **Workflow:** GitHub Actions (for automated data syncing)

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (Recommended) or Node.js

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dev-himanshu-x/Portfolio.git
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Run the development server:
   ```bash
   bun run dev
   ```

4. Format/Lint the code:
   ```bash
   bun run format
   ```

## 🤖 Automated Updates

This portfolio uses a custom GitHub Action (`deploy.yml`) that runs daily to:
1. Fetch latest public repositories from GitHub.
2. Enrich them with descriptions directly from their respective README files.
3. Update `src/data/repos.json` to keep the site content fresh without manual edits.

## 📄 License

This project is open source. Feel free to use the code for your own portfolio, but please provide credit if you use the "Deep Sea" design elements!

---

**Crafted with ❤️ by [Himanshu Jaiswal](https://github.com/dev-himanshu-x)**
