export default function SectionTitle({ title, subtitle, align = 'left', className = '' }) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  const barClass = align === 'center' ? 'mx-auto' : ''

  return (
    <div className={`flex flex-col ${alignClass} mb-10 ${className}`}>
      <h2 className="font-serif text-3xl md:text-4xl text-dark-800 mb-3">{title}</h2>
      <div className={`w-12 h-1 bg-primary-400 rounded-full ${barClass}`} />
      {subtitle && (
        <p className="text-dark-700 mt-4 max-w-2xl text-base md:text-lg">{subtitle}</p>
      )}
    </div>
  )
}
