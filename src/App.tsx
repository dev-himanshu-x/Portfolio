import { useState } from 'react'
import {
  Outlet,
  RouterProvider,
  createRouter,
  createRoute,
  createRootRoute,
} from '@tanstack/react-router'
import { ParallaxProvider } from 'react-scroll-parallax'
import CoverScreen from './components/layout/CoverScreen'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import SideNav from './components/layout/SideNav'

const rootRoute = createRootRoute({
  component: () => {
    const [isIntroDone, setIsIntroDone] = useState(false)

    const handleIntroDone = () => {
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
