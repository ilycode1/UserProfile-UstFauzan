import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Mail, Calendar, MapPin, FileDown, BookOpen } from 'lucide-react'
import Badge from './ui/Badge'
import { profil } from '../data/profil'

const emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${profil.kontak.email}`

export default function MateriModal({ materi, open, onClose }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const apply = () => setIsMobile(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  const desktopVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  }

  const mobileVariants = {
    hidden: { y: '100%' },
    visible: { y: 0 },
    exit: { y: '100%' },
  }

  return (
    <AnimatePresence>
      {open && materi && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-dark-900/50 backdrop-blur-sm p-0 md:p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={materi.judul}
        >
          <motion.div
            variants={isMobile ? mobileVariants : desktopVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg bg-white rounded-t-3xl md:rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] md:max-h-[85vh] flex flex-col"
          >
            {/* Header */}
            <div className="relative bg-primary-50 p-6 md:p-8">
              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup"
                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-dark-800 transition-colors"
              >
                <X size={18} />
              </button>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center text-primary-500">
                  <BookOpen size={20} />
                </div>
                <Badge category={materi.kategori} />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-dark-800 leading-tight">
                {materi.judul}
              </h2>
              {(materi.penulis || materi.kitab) && (
                <p className="italic text-sm md:text-base text-dark-700 mt-2">
                  {materi.penulis ? `oleh ${materi.penulis}` : materi.kitab}
                </p>
              )}
            </div>

            {/* Body */}
            <div className="p-6 md:p-8 overflow-y-auto flex-1">
              {materi.deskripsi && (
                <p className="text-dark-700 leading-relaxed mb-5">{materi.deskripsi}</p>
              )}
              {!materi.deskripsi && (
                <p className="text-dark-700 leading-relaxed mb-5">
                  Kajian rutin membahas {materi.kitab || materi.judul}. Detail lengkap
                  materi akan segera dipublikasikan.
                </p>
              )}

              <dl className="space-y-3">
                {materi.jadwal && (
                  <div className="flex items-start gap-3 text-sm">
                    <Calendar size={16} className="text-primary-500 mt-0.5 shrink-0" />
                    <div>
                      <dt className="text-xs uppercase tracking-wide text-dark-700/60">
                        Jadwal
                      </dt>
                      <dd className="text-dark-800">{materi.jadwal}</dd>
                    </div>
                  </div>
                )}
                {materi.lokasi && (
                  <div className="flex items-start gap-3 text-sm">
                    <MapPin size={16} className="text-primary-500 mt-0.5 shrink-0" />
                    <div>
                      <dt className="text-xs uppercase tracking-wide text-dark-700/60">
                        Lokasi
                      </dt>
                      <dd className="text-dark-800">{materi.lokasi}</dd>
                    </div>
                  </div>
                )}
              </dl>

              {materi.tags?.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {materi.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs bg-surface-100 text-dark-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 md:p-6 border-t border-surface-200 bg-surface-50 flex flex-col sm:flex-row gap-2">
              {materi.pdfUrl && (
                <a
                  href={materi.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium border border-primary-400 text-primary-500 hover:bg-primary-50 transition-colors"
                >
                  <FileDown size={16} /> Unduh PDF
                </a>
              )}
              <a
                href={`${emailLink}&su=${encodeURIComponent(
                  `Pendaftaran Kajian: ${materi.judul}`
                )}&body=${encodeURIComponent(
                  `Assalamu'alaikum, saya ingin mendaftar kajian "${materi.judul}"`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 flex-1 px-4 py-2.5 rounded-full text-sm font-medium bg-primary-400 text-white hover:bg-primary-500 transition-colors"
              >
                <Mail size={16} /> Daftar Kajian via Email
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
