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
    company: 'Self Employed',
    period: '2024 — PRESENT',
    points: [
      'Architecting high-performance, scalable web applications with a focus on robust frontend infrastructure.',
      'Specializing in complex state management, React Server Components, and advanced rendering patterns.',
      'Bridging the gap between technical requirements and seamless user interactions.',
      'Researching next-gen web technologies and performance-first frontend architectures.',
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
      'A full-featured, web-based Hospital Management System with role-based access control for Doctors and Patients.',
    tech: ['AngularJS', 'Bootstrap', 'JavaScript'],
  },
  {
    title: 'PeerPulse',
    year: 2026,
    repoLink: 'https://github.com/dev-himanshu-x/PeerPulse',
    liveLink: 'https://reactjs-peerjs-chat-app.vercel.app',
    description:
      'A peer-to-peer video chat app with screen sharing, live messaging, and room-based collaboration.',
    tech: ['React', 'WebRTC', 'PeerJS', 'JavaScript'],
  },
  {
    title: 'XeroTask',
    year: 2025,
    repoLink: 'https://github.com/dev-himanshu-x/XeroTask',
    liveLink: 'https://todo-react-js-ivory.vercel.app/',
    description:
      'A polished todo manager with drag-and-drop organization and local persistence.',
    tech: ['React', 'Material UI', 'JavaScript'],
  },
  {
    title: 'TanTask',
    year: 2026,
    repoLink: 'https://github.com/dev-himanshu-x/TanTask',
    liveLink: 'https://dynamic-table-theta-inky.vercel.app',
    description:
      'A configurable data table with sorting, filtering, pagination, and column resizing.',
    tech: ['React', 'TanStack Table', 'TypeScript', 'Vite'],
  },
  {
    title: 'react-antd-form',
    year: 2026,
    repoLink: 'https://github.com/dev-himanshu-x/react-antd-form',
    description:
      'A dynamic form engine with validation, multi-step flows, and reusable field schemas.',
    tech: ['React', 'TypeScript', 'Ant Design', 'Vite'],
  },
  {
    title: 'Portfolio',
    year: 2026,
    liveLink: '#top',
    description:
      'An immersive single-page portfolio with custom motion and high-performance frontend architecture.',
    tech: ['React', 'TypeScript', 'Framer Motion', 'Biome'],
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
  { label: 'Resume', icon: 'file', url: '#' },
];
