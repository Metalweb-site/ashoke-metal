import { ChevronDown, Menu, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar({ isLoaded = true }: { isLoaded?: boolean }) {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={isLoaded ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute top-0 left-0 w-full z-50 py-4 px-6 md:px-12 flex justify-between items-center text-white font-sans min-h-20 lg:min-h-0"
    >
      
      {/* Mobile Hamburger (Left on mobile) */}
      <button className="lg:hidden text-white hover:text-[var(--color-copper)] transition-colors p-2 -ml-2 z-20">
        <Menu size={28} strokeWidth={1.5} />
      </button>

      {/* Logo Area */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:left-8 lg:top-4 lg:-translate-x-0 lg:-translate-y-0 z-10 w-[55px] h-[55px] md:w-20 md:h-20 lg:w-24 lg:h-24 pointer-events-none lg:pointer-events-auto">
        <div className="w-full h-full bg-transparent flex items-center justify-center overflow-hidden">
          {/* We use the logo image. User needs to upload it as logo.png in public */}
          <img src="/logo-1.jpg" alt="Ashok Metal Logo" className="w-full h-full object-contain mix-blend-screen scale-[1.2] lg:scale-110 transform origin-center pointer-events-auto" />
        </div>
      </div>

      {/* Mobile Contact Button (Right on mobile) */}
      <button className="lg:hidden flex items-center justify-center border border-[var(--color-copper)] w-9 h-9 rounded-full hover:bg-[var(--color-copper)]/10 transition-colors z-20">
        <Phone size={16} strokeWidth={1.5} className="text-[var(--color-copper)]" />
      </button>

      {/* Main Links */}
      <div className="hidden lg:flex flex-1 justify-end items-center space-x-8 text-[13px] font-medium tracking-[0.08em] text-white/90 mr-8">
        <a href="#" className="text-[var(--color-copper)] flex flex-col items-center">
          HOME
          <span className="w-full h-[1px] bg-[var(--color-copper)] mt-1.5 block"></span>
        </a>
        <a href="#" className="hover:text-[var(--color-copper)] transition-colors py-1.5">ABOUT US</a>
        <a href="#" className="hover:text-[var(--color-copper)] transition-colors flex items-center gap-1.5 py-1.5">SHOP <ChevronDown size={14} className="text-white/70" strokeWidth={2} /></a>
        <a href="#" className="hover:text-[var(--color-copper)] transition-colors flex items-center gap-1.5 py-1.5">COPPER UTENSILS <ChevronDown size={14} className="text-white/70" strokeWidth={2} /></a>
        <a href="#" className="hover:text-[var(--color-copper)] transition-colors flex items-center gap-1.5 py-1.5">COPPER IDOLS <ChevronDown size={14} className="text-white/70" strokeWidth={2} /></a>
        <a href="#" className="hover:text-[var(--color-copper)] transition-colors py-1.5">CUSTOM ORDERS</a>
        <a href="#" className="hover:text-[var(--color-copper)] transition-colors py-1.5">CONTACT US</a>
      </div>

    </motion.nav>
  );
}
