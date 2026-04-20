import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Profil from './pages/Profil'
import Kajian from './pages/Kajian'
import Video from './pages/Video'
import Kegiatan from './pages/Kegiatan'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/kajian" element={<Kajian />} />
        <Route path="/video" element={<Video />} />
        <Route path="/kegiatan" element={<Kegiatan />} />
      </Routes>
    </Layout>
  )
}
