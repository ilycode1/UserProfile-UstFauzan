import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'

function YoutubeIcon({ size = 18 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.017 3.017 0 0 0-2.12-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.378.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.017 3.017 0 0 0 2.12 2.136c1.873.505 9.378.505 9.378.505s7.505 0 9.378-.505a3.017 3.017 0 0 0 2.12-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}
import ScrollReveal from '../components/ui/ScrollReveal'
import SEO from '../components/SEO'
import VideoCard from '../components/VideoCard'
import { videoList } from '../data/video'
import { profil } from '../data/profil'

function InstagramIcon({ size = 18 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

const igLink = `https://instagram.com/${profil.kontak.instagram}`
const ytLink = profil.kontak.youtube || 'https://youtube.com/'

export default function Video() {
  const hasContent = videoList.some(
    (v) => v.embedId || v.judul || v.thumbnail
  )
  const realVideos = videoList.filter((v) => v.embedId || v.judul)
  const [featured, ...rest] = realVideos

  return (
    <>
      <SEO
        title="Video Kajian"
        description="Tonton video kajian Ustadz Fauzan Sugiyono di YouTube dan Instagram."
      />
      {/* ══════════ HERO ══════════ */}
      <section className="relative h-48 md:h-56 -mt-20 pt-20 flex items-center bg-gradient-to-br from-surface-50 via-surface-50 to-primary-50 overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-40" />
        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h1 className="font-serif text-3xl md:text-5xl text-dark-800">Video Kajian</h1>
            <p className="text-dark-700 mt-2 max-w-2xl">
              Kumpulan kajian dalam format video &mdash; tersedia di YouTube dan
              Instagram.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════ CONTENT ══════════ */}
      <section className="py-12 md:py-16 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!hasContent ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-20 h-20 rounded-full bg-surface-100 flex items-center justify-center text-primary-400 mb-4">
                <BookOpen size={36} strokeWidth={1.4} />
              </div>
              <h3 className="font-serif text-xl text-dark-800">
                Video akan segera ditambahkan
              </h3>
              <p className="text-dark-700 mt-1 text-sm max-w-md">
                Sementara itu, ikuti Instagram untuk cuplikan kajian terbaru.
              </p>
              <a
                href={igLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-full text-sm font-medium bg-primary-400 text-white hover:bg-primary-500 transition-colors"
              >
                <InstagramIcon size={16} /> Ikuti Instagram
              </a>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featured && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  className="md:col-span-2 lg:col-span-3"
                >
                  <VideoCard video={featured} featured />
                </motion.div>
              )}
              {rest.map((v, idx) => (
                <motion.div
                  key={v.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
                >
                  <VideoCard video={v} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ══════════ BOTTOM CTA ══════════ */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-dark-800 text-white p-8 md:p-12 shadow-lg">
            <div className="absolute inset-0 geometric-pattern opacity-15" />
            <div className="relative text-center">
              <h2 className="font-serif text-2xl md:text-3xl">Jangan Ketinggalan Kajian</h2>
              <p className="text-white/70 mt-2 max-w-xl mx-auto">
                Berlangganan channel YouTube dan ikuti Instagram untuk pembaruan kajian
                terbaru.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                <a
                  href={ytLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#FF0000] text-white hover:brightness-110 shadow-sm transition"
                >
                  <YoutubeIcon size={18} /> Subscribe YouTube
                </a>
                <a
                  href={igLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white text-dark-800 hover:bg-surface-50 shadow-sm transition"
                >
                  <InstagramIcon size={18} /> Ikuti Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
