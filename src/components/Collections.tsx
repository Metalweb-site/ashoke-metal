import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Collections() {
  return (
    <section className="bg-[var(--color-cream-bg)] pb-16 px-4 md:px-12 w-full max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto md:h-[420px]">
        
        {/* Left Card: Utensils */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group overflow-hidden bg-[var(--color-dark-bg)] h-[360px] md:h-full flex items-center shadow-lg rounded-sm"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-105 opacity-80"
            style={{ backgroundImage: 'url("/copper-utensils-img.png")' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#110e0c]/90 via-[#110e0c]/40 to-transparent"></div>
          
          <div className="relative z-10 p-10 md:p-14 text-white max-w-[320px]">
            {/* Top Left Icon */}
            <div className="absolute top-8 left-8 md:top-10 md:left-14 w-12 h-12 rounded-full border border-[var(--color-copper)]/40 bg-[#110e0c]/60 flex items-center justify-center text-[var(--color-copper)] backdrop-blur-sm">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                 <path d="M6 4H18V8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8V4Z" fill="currentColor" fillOpacity="0.1"/>
                 <path d="M4 4H20M9 20H15M12 14V20M4 4C4 6.20914 5.79086 8 8 8" />
               </svg>
            </div>
            
            <div className="mt-14 md:mt-16">
              <h3 className="text-[32px] font-serif mb-3 leading-[1.1] tracking-wide text-white">COPPER<br/>UTENSILS</h3>
              <p className="text-[13px] text-white/80 mb-8 font-light leading-relaxed">
                Elevate your lifestyle with the goodness of copper.
              </p>
              <button className="bg-[var(--color-copper-btn)] hover:bg-[var(--color-copper-btn-hover)] text-white px-7 py-3 flex items-center gap-2 text-[10px] tracking-[0.15em] transition-colors font-medium rounded-sm">
                SHOP NOW <ArrowRight size={14} className="ml-1" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Card: Idols */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group overflow-hidden bg-[var(--color-dark-bg)] h-[360px] md:h-full flex items-center shadow-lg rounded-sm"
        >
          <div 
             className="absolute inset-0 bg-cover bg-left transition-transform duration-[1.5s] group-hover:scale-105 opacity-80"
             style={{ backgroundImage: 'url("/idols-img.png")' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#110e0c]/95 via-[#110e0c]/50 to-transparent"></div>
          
          <div className="relative z-10 p-10 md:p-14 text-white w-full max-w-[360px]">
            {/* Top Right Icon */}
            <div className="absolute top-8 right-8 md:top-10 md:right-10 w-12 h-12 rounded-full border border-[var(--color-copper)]/40 bg-[#110e0c]/60 flex items-center justify-center text-[var(--color-copper)] backdrop-blur-sm z-20">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M12 2L14.4 9.6H22L15.8 14.1L18.2 21.7L12 17.2L5.8 21.7L8.2 14.1L2 9.6H9.6L12 2Z" fill="currentColor" fillOpacity="0.2"/>
               </svg>
            </div>
            
            <div className="mt-8 md:mt-12">
              <h3 className="text-[32px] font-serif mb-3 leading-[1.1] tracking-wide text-white">COPPER<br/>IDOLS &amp;<br/>POOJA ITEMS</h3>
              <p className="text-[13px] text-white/80 mb-8 font-light leading-relaxed max-w-[250px]">
                Bring home divinity and positivity.
              </p>
              <button className="bg-[var(--color-copper-btn)] hover:bg-[var(--color-copper-btn-hover)] text-white px-7 py-3 flex items-center gap-2 text-[10px] tracking-[0.15em] transition-colors font-medium rounded-sm">
                SHOP NOW <ArrowRight size={14} className="ml-1" />
              </button>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
