import { lazy, Suspense, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Toaster } from 'sonner';
import CoverScreen from './components/layout/CoverScreen';
import SideNav from './components/layout/SideNav';
import About from './components/sections/About';
import Hero from './components/sections/Hero';
import SectionLoader from './components/ui/SectionLoader';

// Below-the-fold sections are code-split so the initial bundle only has
// to cover what's visible on first paint (Hero + About).
const Experience = lazy(() => import('./components/sections/Experience'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Contact = lazy(() => import('./components/sections/Contact'));

export default function App() {
  const [isIntroDone, setIsIntroDone] = useState(false);

  const handleIntroDone = () => {
    window.scrollTo(0, 0);
    setIsIntroDone(true);
  };

  const isMobile =
    typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-[#0a192f]">
        <div className="relative">
          <SideNav />
          <main>
            <Hero />
            <About />
            <Suspense fallback={<SectionLoader />}>
              <Experience />
              <Projects />
              <Contact />
            </Suspense>
          </main>
        </div>
        {!isIntroDone && !isMobile && <CoverScreen onDone={handleIntroDone} />}
      </div>
      <Toaster richColors position="top-right" />
    </ParallaxProvider>
  );
}
