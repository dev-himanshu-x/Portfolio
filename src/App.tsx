import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from '@tanstack/react-router';
import { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Toaster } from 'sonner';
import CoverScreen from './components/layout/CoverScreen';
import SideNav from './components/layout/SideNav';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';

const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: () => {
    const [isIntroDone, setIsIntroDone] = useState(false);

    const handleIntroDone = () => {
      window.scrollTo(0, 0);
      setIsIntroDone(true);
    };

    const isMobile =
      typeof window !== 'undefined' ? window.innerWidth < 768 : false;

    return (
      <div className="min-h-screen bg-[#0a192f]">
        <div className="relative">
          <SideNav />
          <Outlet />
        </div>
        {!isIntroDone && !isMobile && <CoverScreen onDone={handleIntroDone} />}
      </div>
    );
  },
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  ),
});

const routeTree = rootRoute.addChildren([indexRoute]);
const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ParallaxProvider>
        <RouterProvider router={router} />
        <Toaster richColors position="top-right" />
      </ParallaxProvider>
    </QueryClientProvider>
  );
}
