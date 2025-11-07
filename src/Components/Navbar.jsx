import { motion, AnimatePresence} from 'framer-motion'
import { scrollToId } from '../utils/scroll'
import { GiHamburgerMenu } from 'react-icons/gi';
import Menu from './Menu'
import { useState, useCallback } from "react";
import { LuX } from 'react-icons/lu';
import { NAV_LINKS } from '../constants/navigation';

function Navbar() {
  const [open, setOpen] = useState(false);
  
  const handleClick = useCallback((e, href) => {
    e.preventDefault();
    scrollToId(href.replace('#',''), 20)
  }, []);
  
  const toggleMenu = useCallback(() => {
    setOpen(v => !v);
  }, []);
  
  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);
  
  return (
  <motion.header role="navigation" aria-label="Primary"
      initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ type: 'spring', stiffness: 90, damping: 16, mass: 1 }}
  className="sticky top-2 md:top-1 z-50 flex w-[1280px] mx-auto items-center justify-between gap-x-4 md:gap-x-10 lg:gap-x-12 text-xl lg:text-3xl py-2 px-4 sm:px-6 lg:px-8 pr-14 border border-white/5 bg-white/3 backdrop-blur-lg rounded-xl"
    >
  <span className=" text-[#E6E6E6] text-3xl md:text-4xl font-[vt323] whitespace-nowrap">Tharun.10x<span className="animate-blink">_</span></span>
    <nav className="hidden md:block">
        <ul className="flex justify-between md:gap-4 lg:gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e)=>handleClick(e, link.href)}
                className="nav-link cursor-pointer hover:text-[#FF00C8] transition-colors focus:outline-none focus-visible:ring focus-visible:ring-[#FF00C8]/15 rounded"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 shrink-0"
        type="button"
        onClick={toggleMenu}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        {!open ? (
          <GiHamburgerMenu className="text-[#00FFFF] inline" />
        ) : (
          <LuX className="font-bold text-[#00FFFF] inline in-focus:outline-2 in-focus:outline-white rounded-[4px] in-focus:shadow-amber-400 " />
        )}
      </button>
        {open && <Menu id="mobile-menu" onClose={closeMenu} />}
    </motion.header>
  );
}

export default Navbar;
