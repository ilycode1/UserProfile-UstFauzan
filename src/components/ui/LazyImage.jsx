import { useState } from 'react'

export default function LazyImage({
  src,
  alt = '',
  className = '',
  wrapperClassName = '',
  ...props
}) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div
      className={`relative overflow-hidden bg-surface-100 ${
        !loaded && !error ? 'animate-pulse' : ''
      } ${wrapperClassName}`}
    >
      {!error && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          {...props}
        />
      )}
    </div>
  )
}
