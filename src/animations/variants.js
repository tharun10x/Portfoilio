export function buildVariants(reduced = false) {
  if (reduced) {
    return {
      containerVariants: { hidden: { opacity: 0 }, show: { opacity: 1 } },
      childVariants: { hidden: { opacity: 0 }, show: { opacity: 1 } },
      iconContainerVariants: { hidden: { opacity: 0 }, show: { opacity: 1 } },
      iconItemVariants: { hidden: { opacity: 0 }, show: { opacity: 1 } },
    }
  }
  return {
    containerVariants: {
      hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
      show: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
          type: 'spring', stiffness: 90, damping: 16, mass: 1,
          staggerChildren: 0.15, delayChildren: 0.15,
        },
      },
    },
    childVariants: {
      hidden: { opacity: 0, y: 40, filter: 'blur(8px)', scale: 0.97 },
      show: { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1, transition: { type: 'spring', stiffness: 100, damping: 18 } },
    },
    iconContainerVariants: {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.7 } },
    },
    iconItemVariants: {
      hidden: { opacity: 0, y: 12, scale: 0.85 },
      show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 160, damping: 14 } },
    },
  }
}
