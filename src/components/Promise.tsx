import { Hand, Hammer, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function PromiseSection() {
  return (
    <section className="bg-[#0c0907] text-white flex flex-col md:flex-row w-full max-w-[1600px] mx-auto border-t border-white/5 overflow-hidden">
      {/* Left Content - Image */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 min-h-[400px] md:min-h-[550px] lg:min-h-[600px]"
      >
         <img 
           src="/hammering-img.png" 
           alt="Copper Craftsmanship" 
           className="w-full h-full object-cover" 
         />
      </motion.div>

      {/* Right Content - Text */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex flex-col justify-center px-8 py-16 md:px-12 lg:px-24"
      >
        <p className="text-[#965a31] text-[11px] tracking-[0.1em] uppercase mb-4 font-semibold font-sans">
          OUR CRAFTSMANSHIP
        </p>
        <h2 className="text-[40px] sm:text-5xl lg:text-[64px] font-serif leading-[1.05] mb-6 text-white tracking-tight">
          Every mark<br/>tells a <span className="text-[#a46034]">story.</span>
        </h2>
        <p className="text-[13px] md:text-[14px] text-white/80 font-sans font-light leading-[1.6] mb-12 max-w-[420px]">
          Each piece is handcrafted by skilled artisans using traditional techniques passed down for generations. Made with precision. Finished with pride.
        </p>

        {/* Features Row */}
        <div className="flex flex-wrap gap-10 lg:gap-14 mb-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-start gap-4">
             <div className="text-[#b16a3a] shrink-0 w-11 h-11 border border-[#b16a3a] rounded-full flex items-center justify-center">
               <Hand size={20} strokeWidth={1.2} />
             </div>
             <span className="text-[11px] tracking-wide text-white/90 font-medium leading-[1.4]">Handcrafted<br/><span className="text-white/60 font-light text-[10.5px]">By Skilled Artisans</span></span>
          </div>
          
          {/* Feature 2 */}
          <div className="flex flex-col items-start gap-4">
             <div className="text-[#b16a3a] shrink-0 w-11 h-11 border border-[#b16a3a] rounded-full flex items-center justify-center">
               <Hammer size={18} strokeWidth={1.2} className="rotate-[-45deg]" />
             </div>
             <span className="text-[11px] tracking-wide text-white/90 font-medium leading-[1.4]">Traditional<br/><span className="text-white/60 font-light text-[10.5px]">Techniques</span></span>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-start gap-4">
             <div className="text-[#b16a3a] shrink-0 w-11 h-11 border border-[#b16a3a] rounded-full flex items-center justify-center">
               <ShieldCheck size={20} strokeWidth={1.2} />
             </div>
             <span className="text-[11px] tracking-wide text-white/90 font-medium leading-[1.4]">Built to Last<br/><span className="text-white/60 font-light text-[10.5px]">For Generations</span></span>
          </div>
        </div>

        <div>
          <button className="bg-gradient-to-b from-[#e38d5b] to-[#a35223] shadow-lg shadow-[#a35223]/30 text-white hover:text-white px-7 py-2.5 flex items-center justify-center text-[10.5px] tracking-wider transition-all font-semibold rounded-[3px] uppercase w-fit">
            OUR STORY
          </button>
        </div>
      </motion.div>
    </section>
  );
}
