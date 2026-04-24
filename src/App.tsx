import { useState } from 'react'
import {
  Outlet,
  RouterProvider,
  createRouter,
  createRoute,
  createRootRoute,
} from '@tanstack/react-router'
import CoverScreen from './components/CoverScreen'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import SideNav from './components/SideNav'


const rootRoute = createRootRoute({
  component: () => {
    const [isIntroDone, setIsIntroDone] = useState(false)

    const handleIntroDone = () => {
      console.log('Intro done, showing main content');
      window.scrollTo(0, 0);
      setIsIntroDone(true);
    };

    return (
      <div className="min-h-screen bg-[#0a192f]">
        <div className="relative">
          <SideNav />
          <Outlet />
        </div>
        {!isIntroDone && (
          <CoverScreen onDone={handleIntroDone} />
        )}
      </div>
    )
  },
})

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
})

import { ParallaxProvider } from 'react-scroll-parallax'

const routeTree = rootRoute.addChildren([indexRoute])

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default function App() {
  return (
    <ParallaxProvider>
      <RouterProvider router={router} />
    </ParallaxProvider>
  )
}

