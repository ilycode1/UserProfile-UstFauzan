export default function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="relative w-10 h-10" role="status" aria-label="Memuat...">
        <span className="absolute inset-0 rounded-full border-2 border-primary-100" />
        <span className="absolute inset-0 rounded-full border-2 border-primary-400 border-t-transparent animate-spin" />
      </div>
    </div>
  )
}
