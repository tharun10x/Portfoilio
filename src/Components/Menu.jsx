import { memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { scrollToId } from '../utils/scroll';
import { NAV_LINKS } from '../constants/navigation';

const Menu = memo(function Menu({ id = 'mobile-menu', onClose }){
    const handleClick = useCallback((e, href) => {
        e.preventDefault();
        scrollToId(href.replace('#',''), 20);
        onClose?.();
    }, [onClose]);
    
    return (
                <nav id={id} aria-label="Mobile">
                    {/* Backdrop */}
                    <motion.button
                        type="button"
                        aria-label="Close menu"
                        onClick={() => onClose?.()}
                        className="md:hidden fixed inset-0 z-[60]  "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                    {/* Panel */}
                    <motion.div
                        className="md:hidden mt-5 rounded-xl fixed top-9 left-10 inset-x-1 z-[70] border border-[#00FFFF]/50 bg-[#0f0f1b] shadow-2xl"
                        initial={{ x: '50%', opacity: 1 }}
                        animate={{ x: 30, opacity: 1 }}
                        exit={{ x: '70%', opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                    >
                    <ul className="flex flex-col items-center gap-y-3 p-4">
                {NAV_LINKS.map((link) => (
                    <li key={link.label} className="w-full text-center">
                        <a
                            href={link.href}
                            className="block py-2 text-[#E6E6E6] hover:text-[#FF00C8] transition-colors focus:outline-none focus-visible:ring focus-visible:ring-[#FF00C8]/15 rounded"
                            onClick={(e) => handleClick(e, link.href)}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
                    </ul>
                    </motion.div>
            </nav>
    );
});

export default Menu;