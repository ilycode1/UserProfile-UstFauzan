import { motion } from 'framer-motion'

export default function Card({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`bg-white rounded-2xl shadow-sm hover:shadow-md border border-surface-200 transition-shadow duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
