import { BookOpen, FileDown, Info } from 'lucide-react'
import Badge from './ui/Badge'

export default function MateriCard({ materi, onInfo }) {
  const hasPdf = Boolean(materi.pdfUrl)

  return (
    <article className="group bg-white rounded-2xl border border-surface-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col h-full">
      {/* Thumbnail / icon */}
      <div className="relative h-40 bg-primary-50 flex items-center justify-center overflow-hidden">
        {materi.thumbnail ? (
          <img
            src={materi.thumbnail}
            alt={materi.judul}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        ) : (
          <BookOpen size={64} className="text-primary-300 group-hover:text-primary-400 transition-colors" strokeWidth={1.2} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-50/30 to-transparent pointer-events-none" />
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-2">
          <Badge category={materi.kategori} />
        </div>

        <h3 className="font-serif text-lg md:text-xl text-dark-800 leading-snug">
          {materi.judul}
        </h3>
        {(materi.penulis || materi.kitab) && (
          <p className="italic text-sm text-dark-700 mt-1">
            {materi.penulis
              ? `oleh ${materi.penulis}`
              : materi.kitab}
          </p>
        )}

        <div className="my-4 h-px bg-surface-200" />

        <p className="text-sm text-dark-700 line-clamp-2">
          {materi.deskripsi ||
            `Kajian rutin membahas ${materi.kitab || materi.judul}. Detail materi akan segera dipublikasikan.`}
        </p>

        {materi.tags?.length > 0 && (
          <>
            <div className="my-4 h-px bg-surface-200" />
            <div className="flex flex-wrap gap-1.5">
              {materi.tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] bg-surface-100 text-dark-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </>
        )}

        <div className="my-4 h-px bg-surface-200" />

        <div className="flex items-center gap-2 mt-auto">
          {hasPdf ? (
            <a
              href={materi.pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 flex-1 px-3 py-2 rounded-full text-sm font-medium bg-primary-400 text-white hover:bg-primary-500 transition-colors"
            >
              <FileDown size={14} /> Unduh Materi
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="inline-flex items-center justify-center gap-1.5 flex-1 px-3 py-2 rounded-full text-sm font-medium bg-surface-100 text-dark-700/60 cursor-not-allowed"
            >
              <FileDown size={14} /> PDF Segera Hadir
            </button>
          )}
          <button
            type="button"
            onClick={() => onInfo?.(materi)}
            aria-label={`Detail ${materi.judul}`}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium border border-surface-200 text-dark-800 hover:border-primary-400 hover:text-primary-500 transition-colors"
          >
            <Info size={14} /> Info
          </button>
        </div>
      </div>
    </article>
  )
}
