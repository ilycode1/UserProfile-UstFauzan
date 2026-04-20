import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'

function InstagramIcon({ size = 16, className = '' }) {
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
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

const navLinks = [
  { to: '/', label: 'Beranda' },
  { to: '/profil', label: 'Profil' },
  { to: '/kajian', label: 'Kajian' },
  { to: '/video', label: 'Video' },
  { to: '/kegiatan', label: 'Kegiatan' },
]

export default function Footer() {
  return (
    <footer className="relative bg-dark-800 text-white mt-20">
      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-primary-400 to-accent-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-serif text-xl mb-3">Ustadz Fauzan Sugiyono</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Pengkaji Fikih Muamalah dan Tafsir Al-Qur'an. Mengajak kepada ilmu,
              iman, dan amal yang lurus bersumber dari Al-Qur'an dan As-Sunnah.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-3">Navigasi</h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-white/70 hover:text-primary-200 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-3">Kontak</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://wa.me/6285568057474"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-primary-200 transition-colors"
                >
                  <MessageCircle size={16} /> 0855-6805-7474
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/fauzan.sugiyono"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-primary-200 transition-colors"
                >
                  <InstagramIcon size={16} /> fauzan.sugiyono
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-white/50 text-center">
          &copy; {new Date().getFullYear()} Ustadz Fauzan Sugiyono. Seluruh hak dilindungi.
        </div>
      </div>
    </footer>
  )
}
