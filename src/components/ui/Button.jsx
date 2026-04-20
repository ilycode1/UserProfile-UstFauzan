import { motion } from 'framer-motion'

const variantClasses = {
  primary:
    'bg-primary-400 text-white hover:bg-primary-500 shadow-sm hover:shadow-md',
  outline:
    'bg-transparent text-primary-500 border border-primary-400 hover:bg-primary-50',
  ghost:
    'bg-transparent text-dark-800 hover:bg-surface-100',
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-7 py-3.5 text-lg',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  as = 'button',
  className = '',
  ...props
}) {
  const Component = motion[as] || motion.button

  return (
    <Component
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-surface-50 disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
