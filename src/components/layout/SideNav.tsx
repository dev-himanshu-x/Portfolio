import classNames from 'classnames';
import { useEffect } from 'react';
import { Home, User, Briefcase, Code, Mail } from 'lucide-react';

const iconMap: any = {
  Home: Home,
  User: User,
  Briefcase: Briefcase,
  Code: Code,
  Mail: Mail,
};

const MenuItem = ({ label, link, iconName }: { label: string, link: string, iconName: string }) => {
  const Icon = iconMap[iconName] || Home;

  return (
    <div className="relative group flex items-center justify-center">
      <a
        href={link}
        aria-label={label}
        className="transition-all hover:scale-110 active:rotate-12 text-xl p-1 block"
        onClick={(e) => {
          e.preventDefault();
          const target = document.querySelector(link);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <Icon size={24} className="block mx-auto" />
      </a>
      <span className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs px-2 py-1 rounded hidden md:block">
        {label}
      </span>
    </div>
  );
};

export default function SideNav() {
  useEffect(() => {
    const handleHashChange = () => {
      if (!window.location.hash) return;
      document.querySelector(window.location.hash)?.scrollIntoView({
        behavior: 'smooth',
      });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update NAV_ITEMS mapping or use inline if data.ts doesn't have icons
  const menuItems = [
    { label: 'Home', link: '#top', iconName: 'Home' },
    { label: 'About', link: '#about-me', iconName: 'User' },
    { label: 'Experience', link: '#experience', iconName: 'Briefcase' },
    { label: 'Projects', link: '#projects', iconName: 'Code' },
    { label: 'Contact', link: '#contact', iconName: 'Mail' },
  ];

  return (
    <div
      className={classNames(
        'fixed z-20',
        'top-2 left-1/2 -translate-x-1/2',
        'md:right-2 md:left-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-0',
        'transition-colors',
        'mix-blend-difference text-white bg-transparent'
      )}
    >
      <div
        className={classNames(
          'flex flex-row md:flex-col',
          'px-4 py-2 gap-4',
          'md:px-2 md:py-4 md:gap-4'
        )}
      >
        {menuItems.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </div>
    </div>
  );
}

