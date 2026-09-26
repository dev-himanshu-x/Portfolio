export interface CareerItem {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export interface ProjectItem {
  title: string;
  year: number;
  description: string;
  repoLink?: string;
  liveLink?: string;
  tech: string[];
}

export interface ContactItem {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'mail' | 'file' | 'twitter';
}

export const EXPERIENCE: CareerItem[] = [
  {
    role: 'Frontend Developer',
    company: 'ERP Eduverse',
    period: 'Jun 2026 — PRESENT',
    points: [
      'Building enterprise-grade ERP interfaces with React, TypeScript, TanStack Router, TanStack Query, Ant Design, and Tailwind CSS.',
      'Shipping data-driven workflows across Academics, Curriculum, Student Registration, HR, Admissions, Support, and Reporting modules.',
      'Building CO-PO mapping, drag-and-drop flows, dynamic data tables with column controls, and Excel/PDF exports for a platform used daily by staff and students.',
      'Working from OpenAPI specs and REST APIs, with Zustand and Vite keeping the frontend fast and predictable at scale.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Team ERP',
    period: 'Jan 2026 — May 2026',
    points: [
      'Built responsive, production-ready interfaces for the KIET and Epoque websites using React, Next.js, JavaScript, and Bootstrap.',
      'Designed reusable UI components and integrated them with backend APIs alongside design and engineering teams.',
      'Refined layouts, forms, and visual consistency to deliver polished, accessible experiences across both sites.',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'MedSync',
    year: 2025,
    repoLink: 'https://github.com/dev-himanshu-x/MedSync',
    liveLink: 'https://medsync-hms.vercel.app',
    description:
      'A comprehensive Hospital Management System handling role-based workflows for Doctors, Patients, and Admins. Features secure appointment scheduling and medical record management.',
    tech: ['AngularJS', 'Bootstrap', 'JavaScript'],
  },
  {
    title: 'PeerPulse',
    year: 2026,
    repoLink: 'https://github.com/dev-himanshu-x/PeerPulse',
    liveLink: 'https://reactjs-peerjs-chat-app.vercel.app',
    description:
      'A real-time, WhatsApp-style communication platform powered by WebRTC and PeerJS. Features peer-to-peer video rooms and instant messaging with a fluid UI.',
    tech: ['React', 'WebRTC', 'PeerJS', 'JavaScript'],
  },
  {
    title: 'BrightSync',
    year: 2026,
    repoLink: 'https://github.com/dev-himanshu-x/BrightSync',
    liveLink: 'https://bright-sync.vercel.app',
    description:
      'An enterprise-grade task management system featuring role-based access control (RBAC) and an interactive calendar interface, streamlining team workflows.',
    tech: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'NeoCast',
    year: 2026,
    repoLink: 'https://github.com/dev-himanshu-x/NeoCast',
    liveLink: 'https://neocast-openmeteo.vercel.app/',
    description:
      'A striking neo-brutalist weather dashboard providing real-time forecasts for Indian cities, built with React, Vite, and external API integrations.',
    tech: ['React', 'Vite', 'Weather API'],
  },
  {
    title: 'XeroTask',
    year: 2025,
    repoLink: 'https://github.com/dev-himanshu-x/XeroTask',
    liveLink: 'https://todo-react-js-ivory.vercel.app/',
    description:
      'A polished task management interface combining React, Vite, and Tailwind CSS with Material UI dialogs for a seamless user experience.',
    tech: ['React', 'Material UI', 'JavaScript'],
  },
  {
    title: 'Portfolio',
    year: 2026,
    liveLink: '#top',
    description:
      'An immersive, highly-optimized single-page portfolio showcasing modern frontend architecture, fluid Framer Motion animations, and strict code quality.',
    tech: ['React', 'TypeScript', 'Framer Motion', 'Biome'],
  },
  {
    title: 'AutoTable',
    year: 2026,
    repoLink: 'https://github.com/dev-himanshu-x/AutoTable',
    liveLink: 'https://autotable.vercel.app',
    description:
      'A powerful developer tool that dynamically generates sortable, paginated data tables from any JSON API URL with advanced column controls.',
    tech: ['React', 'TypeScript', 'TanStack Table'],
  },
  {
    title: 'TanTask',
    year: 2026,
    repoLink: 'https://github.com/dev-himanshu-x/TanTask',
    liveLink: 'https://dynamic-table-theta-inky.vercel.app',
    description:
      'A feature-rich task manager built on the bleeding edge with TanStack Start. Incorporates dark mode, inline editing, filtering, and robust data persistence.',
    tech: ['React', 'TanStack Table', 'TypeScript', 'Vite'],
  },
  {
    title: 'GridLock',
    year: 2026,
    repoLink: 'https://github.com/dev-himanshu-x/GridLock',
    liveLink: 'https://gridlock-tictac.vercel.app/',
    description:
      'An interactive, fully responsive Tic Tac Toe game demonstrating clean React component architecture and optimized local state management.',
    tech: ['React', 'Vite', 'Game'],
  },
  {
    title: 'react-antd-form',
    year: 2026,
    repoLink: 'https://github.com/dev-himanshu-x/react-antd-form',
    description:
      'A robust dynamic form engine engineered with TanStack Start and Ant Design. Handles complex multi-step workflows, real-time validations, and reusable schemas.',
    tech: ['React', 'TypeScript', 'Ant Design', 'Vite'],
  },
];

export const CONTACT_LINKS: ContactItem[] = [
  { label: 'GitHub', icon: 'github', url: 'https://github.com/dev-himanshu-x' },
  {
    label: 'LinkedIn',
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/dev-himanshu-jaiswal',
  },
  { label: 'X (Twitter)', icon: 'twitter', url: 'https://x.com/io_ohimanshu' },
  { label: 'Email', icon: 'mail', url: 'mailto:iam.himanshu.x@gmail.com' },
  { label: 'Resume', icon: 'file', url: '/Himanshu_Jaiswal_Resume.pdf' },
];
