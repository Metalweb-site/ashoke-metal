import { ArrowRight, Droplet, Hammer, Flame, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero({ isLoaded = true }: { isLoaded?: boolean }) {
  return (
    <div className="relative w-full min-h-screen bg-[var(--color-dark-bg)] flex items-center overflow-hidden pt-20">
      {/* Main Background Image - Desktop */}
      <div 
        className="hidden md:block absolute right-0 top-0 w-full h-full bg-cover bg-[position:70%_center] md:bg-right bg-no-repeat z-0"
        style={{ backgroundImage: 'url("/hero-back.png")' }}
      ></div>
      {/* Main Background Image - Mobile */}
      <div 
        className="md:hidden absolute right-0 top-0 w-full h-[55%] bg-cover bg-[position:center_center] bg-no-repeat z-0"
        style={{ backgroundImage: 'url("/hero-section-back-mobile.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0907] via-[#0c0907]/10 to-transparent"></div>
      </div>
      
      {/* Blackish gradient to blend text area on the left, and bottom edge */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#0c0907] via-[#0c0907]/80 md:via-[#0c0907]/60 to-transparent z-0"></div>
      <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#0c0907] via-[#0c0907]/20 to-transparent z-0"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 text-white flex flex-col-reverse lg:flex-row justify-between items-center h-full pb-10 gap-8 lg:gap-16 xl:gap-24">
        <div className="w-full lg:max-w-[600px] relative z-20 shrink-0 mt-8 lg:mt-0">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isLoaded ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
          >
            <p className="text-[11px] md:text-[12px] uppercase tracking-[0.15em] text-white/90 mb-3 block lg:hidden">
              Purity Forged<br/>Through Generations
            </p>
            <h1 className="text-[38px] sm:text-5xl md:text-[5rem] font-serif font-normal leading-[1.05] mb-5 lg:mb-6 text-white tracking-tight lg:whitespace-nowrap">
              Crafted in <span className="text-[var(--color-copper)]">Copper.</span><br/>
              Rooted in <span className="text-[var(--color-copper)]">Tradition.</span>
            </h1>

            <p className="text-[13px] md:text-[14px] text-[var(--color-cream-bg)]/80 tracking-wide font-light mb-8 lg:mb-10 max-w-[420px] leading-[1.6]">
              Premium copper utensils and divine idols,<br className="hidden sm:block" />
              crafted with purity, passion and tradition.
            </p>
          </motion.div>

          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            animate={isLoaded ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.9, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 lg:gap-5 mb-10 w-full lg:w-auto"
          >
            <button className="w-full lg:w-auto bg-[var(--color-copper-btn)] hover:bg-[var(--color-copper-btn-hover)] text-white px-8 py-3.5 flex items-center justify-center gap-2 text-[11px] lg:text-[10.5px] tracking-[0.08em] transition-colors font-medium border border-[var(--color-copper-btn)] rounded-[3px]">
              EXPLORE COLLECTION <ArrowRight size={14} className="ml-1" strokeWidth={1.5} />
            </button>
            <button className="w-full lg:w-auto border border-white/30 hover:border-[var(--color-copper)] hover:text-[var(--color-copper)] text-white/90 px-8 py-3.5 flex items-center justify-center text-[11px] lg:text-[10.5px] tracking-[0.08em] transition-colors rounded-[3px]">
              OUR CRAFTSMANSHIP
            </button>
          </motion.div>

          {/* Features */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 2.3 }}
            className="flex items-start pt-2 max-w-[540px] w-full"
          >
            <div className="flex-1 flex flex-col items-center text-center group">
              <Droplet size={30} strokeWidth={1.2} className="text-[var(--color-copper)] mb-2 lg:mb-3 opacity-90 group-hover:scale-110 transition-transform w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]" />
              <span className="text-[8px] lg:text-[10px] tracking-[0.05em] lg:tracking-[0.08em] text-white/80 leading-[1.4] font-medium uppercase scale-90 lg:scale-100">100%<br className="lg:hidden"/> PURE COPPER</span>
            </div>
            <div className="flex-1 flex flex-col items-center text-center group border-l border-white/20">
              <Hammer size={30} strokeWidth={1.2} className="text-[var(--color-copper)] mb-2 lg:mb-3 opacity-90 group-hover:scale-110 transition-transform w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]" />
              <span className="text-[8px] lg:text-[10px] tracking-[0.05em] lg:tracking-[0.08em] text-white/80 leading-[1.4] font-medium uppercase scale-90 lg:scale-100">HANDMADE<br className="lg:hidden"/> BY ARTISANS</span>
            </div>
            <div className="flex-1 flex flex-col items-center text-center group border-l border-white/20">
              <Flame size={30} strokeWidth={1.2} className="text-[var(--color-copper)] mb-2 lg:mb-3 opacity-90 group-hover:scale-110 transition-transform w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]" />
              <span className="text-[8px] lg:text-[10px] tracking-[0.05em] lg:tracking-[0.08em] text-white/80 leading-[1.4] font-medium uppercase scale-90 lg:scale-100">TRADITIONAL<br className="lg:hidden"/> TECHNIQUES</span>
            </div>
            <div className="flex-1 flex flex-col items-center text-center group border-l border-white/20">
              <ShieldCheck size={30} strokeWidth={1.2} className="text-[var(--color-copper)] mb-2 lg:mb-3 opacity-90 group-hover:scale-110 transition-transform w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]" />
              <span className="text-[8px] lg:text-[10px] tracking-[0.05em] lg:tracking-[0.08em] text-white/80 leading-[1.4] font-medium uppercase scale-90 lg:scale-100">BUILT TO LAST<br className="lg:hidden"/> GENERATIONS</span>
            </div>
          </motion.div>
        </div>

        {/* Utensils Image */}
        <div className="flex w-full lg:w-[50%] md:w-[55%] max-w-[900px] h-auto lg:h-full items-center justify-center lg:justify-end relative z-10 lg:pl-10 pb-8 lg:pb-0 mt-8 md:mt-0">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isLoaded ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="w-full relative"
          >
            <img 
              src="/hero-utensils.png" 
              alt="Copper Utensils" 
              className="w-full object-contain drop-shadow-2xl opacity-100 mix-blend-normal transform scale-[1.35] lg:scale-[1.25] xl:scale-[1.7] lg:translate-x-8 xl:translate-x-16 lg:translate-y-0 xl:translate-y-10 origin-center mt-4 lg:mt-0" 
            />
          </motion.div>
          
          {/* Trusted Badge / Stamp */}
          <motion.div 
            initial={{ scale: 3, opacity: 0, rotate: -60 }}
            animate={isLoaded ? { scale: 1, opacity: 1, rotate: 15 } : { scale: 3, opacity: 0, rotate: -60 }}
            transition={{ duration: 0.7, delay: 1.4, type: "spring", stiffness: 120, damping: 22, mass: 1.2 }}
            className="absolute -top-16 sm:-top-4 lg:-top-32 xl:-top-48 right-2 sm:right-12 lg:-right-4 xl:right-8 w-28 h-28 sm:w-32 sm:h-32 md:w-[13.5rem] md:h-[13.5rem] z-30 drop-shadow-2xl"
          >
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]">
              <defs>
                <radialGradient id="badgeBg" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#5c3317" />
                  <stop offset="60%" stopColor="#3d1d04" />
                  <stop offset="100%" stopColor="#220e00" />
                </radialGradient>
                <filter id="noise" x="0" y="0" width="100%" height="100%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" result="turbulence" />
                  <feColorMatrix type="matrix" values="1 0 0 0 0  0 0.8 0 0 0  0 0.4 0 0 0  0 0 0 0.4 0" in="turbulence" result="coloredNoise" />
                  <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" result="texture" />
                  <feBlend mode="multiply" in="texture" in2="SourceGraphic" />
                </filter>
              </defs>
              
              {/* Outer background circle */}
              <circle cx="100" cy="100" r="96" fill="url(#badgeBg)" />
              <circle cx="100" cy="100" r="96" fill="url(#badgeBg)" filter="url(#noise)" opacity="0.85" />
              <circle cx="100" cy="100" r="94" fill="none" stroke="#d6a95c" strokeWidth="1.5" opacity="0.8" />
              
              <circle cx="100" cy="100" r="90" fill="none" stroke="#361701" strokeWidth="4" opacity="0.8" />
              <circle cx="100" cy="100" r="87" fill="url(#badgeBg)" />
              <circle cx="100" cy="100" r="87" fill="url(#badgeBg)" filter="url(#noise)" opacity="0.6" />
              
              {/* Dotted circle */}
              <circle cx="100" cy="100" r="77" fill="none" stroke="#d6a95c" strokeWidth="2" strokeDasharray="3 4.5" opacity="0.9" />
              
              {/* Curved Text Path */}
              <path id="curve" d="M 30 84 A 72 72 0 0 1 170 84" fill="none" />
              <text className="font-serif font-bold tracking-[0.18em]" fill="#d6a95c" fontSize="13" style={{ textShadow: "1.5px 1.5px 3px rgba(0,0,0,0.9)" }}>
                <textPath href="#curve" startOffset="50%" textAnchor="middle">TRUSTED SINCE</textPath>
              </text>
              
              {/* Year */}
              <text x="100" y="118" className="font-serif" fontWeight="900" fill="#e8c27a" fontSize="56" textAnchor="middle" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8), -0.5px -0.5px 0px rgba(214,169,92,0.6)" }}>1991</text>
              
              {/* Dotted line with center diamond */}
              <g transform="translate(100, 138)">
                <line x1="-38" y1="0" x2="-12" y2="0" stroke="#d6a95c" strokeWidth="1.5" strokeDasharray="1.5 3.5" opacity="0.9"/>
                <polygon points="0,-4 3,0 0,4 -3,0" fill="#d6a95c" />
                <line x1="12" y1="0" x2="38" y2="0" stroke="#d6a95c" strokeWidth="1.5" strokeDasharray="1.5 3.5" opacity="0.9"/>
              </g>

              {/* Flourish */}
              <g transform="translate(100, 158) scale(0.65)" opacity="0.95">
                <path d="M 0,-14 C 8,-3 25,1 45,-6 C 30,12 10,12 0,4 C -10,12 -30,12 -45,-6 C -25,1 -8,-3 0,-14 Z" fill="none" stroke="#d6a95c" strokeWidth="2" />
                <path d="M 0,0 C 12,18 35,12 55,-4 C 40,20 15,22 0,10 C -15,22 -40,20 -55,-4 C -35,12 -12,18 0,0 Z" fill="none" stroke="#d6a95c" strokeWidth="2.5" />
                {/* central fleur element */}
                <path d="M 0,-26 L 3.5,-10 L 12,-6 L 3.5,-2 L 0,10 L -3.5,-2 L -12,-6 L -3.5,-10 Z" fill="#d6a95c" stroke="#d6a95c" strokeWidth="1" strokeLinejoin="round" />
              </g>
            </svg>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
