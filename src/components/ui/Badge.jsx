const categoryClasses = {
  Fiqih: 'bg-primary-50 text-primary-600',
  Aqidah: 'bg-amber-50 text-amber-700',
  Tafsir: 'bg-blue-50 text-blue-700',
  Akhlak: 'bg-purple-50 text-purple-700',
  Sirah: 'bg-rose-50 text-rose-700',
}

export default function Badge({ children, category, className = '', ...props }) {
  const categoryClass = category ? categoryClasses[category] : 'bg-surface-100 text-dark-700'

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${categoryClass} ${className}`}
      {...props}
    >
      {children ?? category}
    </span>
  )
}
