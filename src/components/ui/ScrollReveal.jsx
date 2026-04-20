import { motion } from 'framer-motion'
import useScrollReveal from '../../hooks/useScrollReveal'

const directionOffsets = {
  up: { x: 0, y: 30 },
  down: { x: 0, y: -30 },
  left: { x: 30, y: 0 },
  right: { x: -30, y: 0 },
  fade: { x: 0, y: 0 },
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  stagger = 0,
  duration = 0.6,
  className = '',
  once = true,
}) {
  const { ref, inView } = useScrollReveal({ once })
  const offset = directionOffsets[direction] ?? directionOffsets.up

  const container = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: stagger,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  )
}
