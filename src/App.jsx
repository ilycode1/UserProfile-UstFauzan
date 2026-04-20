import { Suspense, lazy, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Layout from './components/layout/Layout'
import PageLoader from './components/ui/PageLoader'

const Home = lazy(() => import('./pages/Home'))
const Profil = lazy(() => import('./pages/Profil'))
const Kajian = lazy(() => import('./pages/Kajian'))
const Video = lazy(() => import('./pages/Video'))
const Kegiatan = lazy(() => import('./pages/Kegiatan'))
const NotFound = lazy(() => import('./pages/NotFound'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <Layout>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/profil"
              element={
                <PageTransition>
                  <Profil />
                </PageTransition>
              }
            />
            <Route
              path="/kajian"
              element={
                <PageTransition>
                  <Kajian />
                </PageTransition>
              }
            />
            <Route
              path="/video"
              element={
                <PageTransition>
                  <Video />
                </PageTransition>
              }
            />
            <Route
              path="/kegiatan"
              element={
                <PageTransition>
                  <Kegiatan />
                </PageTransition>
              }
            />
            <Route
              path="*"
              element={
                <PageTransition>
                  <NotFound />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </Layout>
  )
}
