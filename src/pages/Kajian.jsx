import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, SearchX, MessageCircle } from 'lucide-react'
import ScrollReveal from '../components/ui/ScrollReveal'
import SEO from '../components/SEO'
import MateriCard from '../components/MateriCard'
import MateriModal from '../components/MateriModal'
import { materiList } from '../data/materi'
import { profil } from '../data/profil'

const FILTERS = ['Semua', 'Fiqih', 'Aqidah', 'Tafsir', 'Akhlak', 'Sirah']
const waLink = `https://wa.me/62${profil.kontak.wa.replace(/^0/, '')}`

export default function Kajian() {
  const [activeFilter, setActiveFilter] = useState('Semua')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return materiList.filter((m) => {
      const matchFilter = activeFilter === 'Semua' || m.kategori === activeFilter
      if (!matchFilter) return false
      if (!q) return true
      const hay = [m.judul, m.kitab, m.penulis, ...(m.tags || [])]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
      return hay.includes(q)
    })
  }, [activeFilter, query])

  return (
    <>
      <SEO
        title="Materi Kajian"
        description="Kitab dan kitab-kitab pilihan yang sedang dikaji oleh Ustadz Fauzan Sugiyono secara rutin."
      />
      {/* ══════════ HERO ══════════ */}
      <section className="relative h-48 md:h-56 -mt-20 pt-20 flex items-center bg-gradient-to-br from-surface-50 via-surface-50 to-primary-50 overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-40" />
        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h1 className="font-serif text-3xl md:text-5xl text-dark-800">Materi Kajian</h1>
            <p className="text-dark-700 mt-2 max-w-2xl">
              Kitab-kitab dan tema kajian yang sedang dibahas secara rutin.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════ FILTER + SEARCH ══════════ */}
      <section className="bg-surface-50 border-b border-surface-200 sticky top-20 z-30 backdrop-blur bg-surface-50/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col lg:flex-row lg:items-center gap-3">
          <div className="flex-1 overflow-x-auto hide-scrollbar -mx-4 lg:mx-0 px-4 lg:px-0">
            <div className="flex items-center gap-2 w-max">
              {FILTERS.map((f) => {
                const isActive = activeFilter === f
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setActiveFilter(f)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                      isActive
                        ? 'bg-primary-400 text-white shadow-sm'
                        : 'bg-white text-dark-700 border border-surface-200 hover:border-primary-400 hover:text-primary-500'
                    }`}
                  >
                    {f}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="relative lg:w-72 shrink-0">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-700/60"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari judul, kitab, tag..."
              className="w-full pl-9 pr-4 py-2 rounded-full text-sm bg-white border border-surface-200 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition"
            />
          </div>
        </div>
      </section>

      {/* ══════════ GRID ══════════ */}
      <section className="py-12 md:py-16 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-20 h-20 rounded-full bg-surface-100 flex items-center justify-center text-dark-700/50 mb-4">
                <SearchX size={36} strokeWidth={1.4} />
              </div>
              <h3 className="font-serif text-xl text-dark-800">Materi tidak ditemukan</h3>
              <p className="text-dark-700 mt-1 text-sm">
                Coba ganti filter atau kata kunci pencarian.
              </p>
            </div>
          ) : (
            <motion.div
              layout
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((m, idx) => (
                  <motion.div
                    key={m.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                  >
                    <MateriCard materi={m} onInfo={setSelected} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* ══════════ BOTTOM CTA BAND ══════════ */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-primary-400 text-white p-8 md:p-12 shadow-lg">
            <div className="absolute inset-0 geometric-pattern opacity-25" />
            <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
              <div className="flex-1">
                <h2 className="font-serif text-2xl md:text-3xl">Ingin Mengikuti Kajian?</h2>
                <p className="text-white/85 mt-2 leading-relaxed">
                  Hubungi kami untuk informasi jadwal, lokasi, dan pendaftaran kajian
                  rutin.
                </p>
              </div>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white text-primary-500 hover:bg-surface-50 shadow-sm transition-colors whitespace-nowrap"
              >
                <MessageCircle size={18} /> Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <MateriModal
        open={Boolean(selected)}
        materi={selected}
        onClose={() => setSelected(null)}
      />
    </>
  )
}
