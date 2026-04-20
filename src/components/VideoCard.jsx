import { useState } from 'react'
import { Play, ExternalLink, Calendar, Clock } from 'lucide-react'
import Badge from './ui/Badge'

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

function YouTubeFrame({ video, featured }) {
  const [playing, setPlaying] = useState(false)
  const thumbnail =
    video.thumbnail || `https://img.youtube.com/vi/${video.embedId}/hqdefault.jpg`

  if (playing) {
    return (
      <div className="relative aspect-video bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${video.embedId}?autoplay=1&rel=0`}
          title={video.judul || 'Video kajian'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Putar video ${video.judul || ''}`}
      className="group relative aspect-video bg-surface-100 w-full overflow-hidden"
    >
      <img
        src={thumbnail}
        alt={video.judul || 'Thumbnail video'}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      <span
        className={`absolute inset-0 flex items-center justify-center ${
          featured ? '' : ''
        }`}
      >
        <span className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary-400 text-white shadow-lg group-hover:scale-110 transition-transform">
          <Play size={22} fill="currentColor" className="ml-1" />
        </span>
      </span>
    </button>
  )
}

function InstagramFrame({ video }) {
  const url = video.embedId
    ? `https://instagram.com/reel/${video.embedId}`
    : 'https://instagram.com/fauzan.sugiyono'
  return (
    <div className="relative aspect-video bg-gradient-to-br from-rose-100 via-pink-100 to-amber-100 flex flex-col items-center justify-center p-6">
      <div className="w-14 h-14 rounded-2xl bg-white/80 flex items-center justify-center text-rose-500 mb-3">
        <InstagramIcon size={24} />
      </div>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-white text-dark-800 hover:bg-surface-50 shadow-sm transition-colors"
      >
        <ExternalLink size={14} /> Tonton di Instagram
      </a>
    </div>
  )
}

function PlaceholderFrame() {
  return (
    <div className="relative aspect-video bg-surface-100 flex flex-col items-center justify-center text-dark-700/50">
      <Play size={42} strokeWidth={1.2} />
      <span className="text-sm mt-2">Video segera hadir</span>
    </div>
  )
}

export default function VideoCard({ video, featured = false }) {
  const hasEmbed = Boolean(video.embedId)
  const isIG = video.platform === 'instagram'

  return (
    <article
      className={`group bg-white rounded-2xl border border-surface-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col h-full ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      {isIG ? (
        <InstagramFrame video={video} />
      ) : hasEmbed ? (
        <YouTubeFrame video={video} featured={featured} />
      ) : (
        <PlaceholderFrame />
      )}

      <div className="p-5 flex flex-col flex-1">
        {video.kategori && (
          <div className="mb-2">
            <Badge category={video.kategori}>{video.kategori}</Badge>
          </div>
        )}
        <h3
          className={`font-serif text-dark-800 leading-snug ${
            featured ? 'text-xl md:text-2xl' : 'text-base md:text-lg'
          }`}
        >
          {video.judul || 'Judul akan segera ditambahkan'}
        </h3>
        {(video.tanggal || video.durasi) && (
          <div className="flex items-center gap-4 mt-3 text-xs text-dark-700/80">
            {video.tanggal && (
              <span className="inline-flex items-center gap-1">
                <Calendar size={12} /> {video.tanggal}
              </span>
            )}
            {video.durasi && (
              <span className="inline-flex items-center gap-1">
                <Clock size={12} /> {video.durasi}
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
