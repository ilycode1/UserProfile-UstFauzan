import { Play, ExternalLink, ArrowUpRight, Calendar, Clock } from 'lucide-react'
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

function YouTubeFrame({ video }) {
  const thumbnail =
    video.thumbnail || `https://img.youtube.com/vi/${video.embedId}/hqdefault.jpg`

  return (
    <a
      href={`https://www.youtube.com/watch?v=${video.embedId}`}
      target="_blank"
      rel="noreferrer"
      aria-label={`Tonton video ${video.judul || ''} di YouTube`}
      className="group relative aspect-video bg-surface-100 w-full overflow-hidden block"
    >
      <img
        src={thumbnail}
        alt={video.judul || 'Thumbnail video'}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary-400 text-white shadow-lg group-hover:scale-110 transition-transform">
          <Play size={20} fill="currentColor" className="ml-0.5" />
        </span>
      </span>
    </a>
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

export default function VideoCard({ video }) {
  const hasEmbed = Boolean(video.embedId)
  const isIG = video.platform === 'instagram'
  const isYT = video.platform === 'youtube' && hasEmbed

  return (
    <article className="group bg-white rounded-2xl border border-surface-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col h-full">
      {isIG ? (
        <InstagramFrame video={video} />
      ) : hasEmbed ? (
        <YouTubeFrame video={video} />
      ) : (
        <PlaceholderFrame />
      )}

      <div className="p-4 flex flex-col flex-1">
        {video.kategori && (
          <div className="mb-2">
            <Badge category={video.kategori}>{video.kategori}</Badge>
          </div>
        )}
        <h3 className="font-serif text-dark-800 leading-snug text-base md:text-lg line-clamp-2">
          {video.judul || 'Judul akan segera ditambahkan'}
        </h3>
        {(video.tanggal || video.durasi) && (
          <div className="flex items-center gap-4 mt-2 text-xs text-dark-700/80">
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
        {isYT && (
          <a
            href={`https://www.youtube.com/watch?v=${video.embedId}`}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors self-start"
          >
            Lihat video di YouTube
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}
      </div>
    </article>
  )
}
