import { Play, ArrowUpRight, Calendar, Clock } from 'lucide-react'
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
      <span className="absolute bottom-3 right-3 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/90 text-[#FF0000] shadow-sm">
        <YoutubeIcon size={16} />
      </span>
    </a>
  )
}

function InstagramFrame({ video }) {
  const url = video.embedId
    ? `https://www.instagram.com/reel/${video.embedId}/`
    : 'https://instagram.com/fauzan.sugiyono'
  const hasThumb = Boolean(video.thumbnail)

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Tonton ${video.judul || 'reel'} di Instagram`}
      className="group relative aspect-video w-full overflow-hidden block bg-gradient-to-br from-rose-100 via-pink-100 to-amber-100"
    >
      {hasThumb && (
        <img
          src={video.thumbnail}
          alt={video.judul || 'Thumbnail reel'}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      )}
      {hasThumb && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      )}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary-400 text-white shadow-lg group-hover:scale-110 transition-transform">
          <Play size={20} fill="currentColor" className="ml-0.5" />
        </span>
      </span>
      <span className="absolute bottom-3 right-3 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/90 text-rose-500 shadow-sm">
        <InstagramIcon size={14} />
      </span>
    </a>
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
  const isIG = video.platform === 'instagram' && hasEmbed
  const isYT = video.platform === 'youtube' && hasEmbed

  const ctaHref = isYT
    ? `https://www.youtube.com/watch?v=${video.embedId}`
    : isIG
    ? `https://www.instagram.com/reel/${video.embedId}/`
    : null
  const ctaLabel = isYT ? 'Lihat video di YouTube' : isIG ? 'Lihat di Instagram' : null

  return (
    <article className="group bg-white rounded-2xl border border-surface-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col h-full">
      {isIG ? (
        <InstagramFrame video={video} />
      ) : isYT ? (
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
        {ctaHref && (
          <a
            href={ctaHref}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors self-start"
          >
            {ctaLabel}
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}
      </div>
    </article>
  )
}
