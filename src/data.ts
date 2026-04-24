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
    period: 'Sep 2024 - Present',
    points: [
      'Architecting high-performance, scalable web applications with a focus on robust frontend infrastructure.',
      'Specializing in complex state management, React Server Components, and advanced rendering patterns.',
      'Bridging the gap between technical requirements and seamless user interactions.',
      'Researching next-gen web technologies and performance-first frontend architectures.'
    ]
  }
];

export const EDUCATION: CareerItem[] = [
  {
    role: 'B.Tech in Computer Science',
    company: 'Institute of Technology',
    period: '2016 - 2020',
    points: [
      'Graduated with distinction and strong academic performance.',
      'Built capstone projects focused on web development and system design.',
      'Participated in hackathons and student-led engineering events.',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'TanStack Dynamic Table',
    year: 2026,
    repoLink: 'https://github.com/dev-himanshu-x/tanstack-dynamic-table',
    liveLink: 'https://dynamic-table-theta-inky.vercel.app',
    description:
      'A configurable data table with sorting, filtering, pagination, and column resizing, built with strong TypeScript support.',
    tech: ['React', 'TanStack Table', 'TypeScript', 'Vite'],
  },
  {
    title: 'WebRTC Video Chat',
    year: 2026,
    repoLink: 'https://github.com/dev-himanshu-x/react-webrtc-peerjs-chat',
    liveLink: 'https://reactjs-peerjs-chat-app.vercel.app',
    description:
      'A peer-to-peer video chat app with screen sharing, live messaging, and room-based collaboration.',
    tech: ['React', 'WebRTC', 'PeerJS', 'JavaScript'],
  },
  {
    title: 'React Ant Design Form',
    year: 2026,
    repoLink: 'https://github.com/dev-himanshu-x/react-antd-form',
    description:
      'A dynamic form engine with validation, multi-step flows, and reusable field schemas.',
    tech: ['React', 'TypeScript', 'Ant Design', 'Vite'],
  },
  {
    title: 'React MUI Todo',
    year: 2025,
    repoLink: 'https://github.com/dev-himanshu-x/react-mui-todo',
    liveLink: 'https://todo-react-js-ivory.vercel.app/',
    description:
      'A polished todo manager with drag-and-drop organization and local persistence.',
    tech: ['React', 'Material UI', 'JavaScript'],
  },
  {
    title: 'Hospital Management',
    year: 2025,
    repoLink: 'https://github.com/dev-himanshu-x/hospital-management-angularjs-bootstrap',
    liveLink: 'https://hospital-management-angularjs-boots.vercel.app/',
    description:
      'A hospital workflow app featuring appointment scheduling, records, and role-specific modules.',
    tech: ['AngularJS', 'Bootstrap', 'JavaScript'],
  },
  {
    title: 'Portfolio Website',
    year: 2026,
    liveLink: '#top',
    description:
      'A single-page portfolio inspired by a playful hand-drawn style with immersive sections and custom motion.',
    tech: ['React', 'TypeScript', 'Framer Motion', 'CSS'],
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
