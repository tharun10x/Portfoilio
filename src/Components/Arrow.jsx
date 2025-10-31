import { useState, memo } from 'react'
import { motion } from 'framer-motion'

const Arrow = memo(function Arrow({ color = '#E6E6E6', hoverColor = '#ffffff', onClick, className = '' }) {
  const [isHover, setIsHover] = useState(false)
  
  return (
    <motion.svg
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.8 }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-16 h-16 animate-bounce z-30 cursor-pointer transition-colors duration-300 ${className}
      hover:shadow-[0_0_25px_4px_#e6e6e6e] focus:outline-none focus-visible:outline-none focus-visible:ring-0 ${className} `}
      style={{ color: isHover ? hoverColor : color }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
  onClick={onClick}
  role="button"
  tabIndex={0}
  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick?.(); } }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </motion.svg>
  );
});

export default Arrow