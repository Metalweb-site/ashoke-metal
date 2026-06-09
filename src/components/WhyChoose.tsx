import { Leaf, Droplet, Recycle, ShieldHalf, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChoose() {
  return (
    <section className="bg-[#141613] text-white py-12 px-6 border-y border-white/5">
      <div className="max-w-[1400px] mx-auto flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-8 min-h-[140px]">
        
        {/* Callout */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="xl:w-[22%] shrink-0 px-2 lg:px-6"
        >
          <h2 className="font-serif text-[26px] md:text-3xl text-[var(--color-copper)] leading-[1.2]">
            WHY CHOOSE<br/>
            <span className="flex items-center gap-1.5 mt-1">
               PURE
               <span className="inline-flex border border-white/20 p-0.5 mt-0.5 mx-0.5">
                  <div className="border border-white/20 px-1.5 py-[1px] text-white text-[15px] font-sans tracking-wide">
                     100%
                  </div>
               </span>
               COPPER?
            </span>
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          className="xl:w-[78%] w-full grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-4 md:divide-x divide-white/10 xl:border-l border-white/10 xl:pl-6"
        >
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center px-4 group"
          >
            <Leaf size={24} strokeWidth={1.2} className="text-[var(--color-copper)] mb-3.5 group-hover:scale-110 transition-transform" />
            <h4 className="text-[10px] tracking-[0.1em] text-white/90 uppercase font-medium mb-2">Ayurvedic Benefits</h4>
            <p className="text-[11px] text-white/50 font-light leading-snug">Promotes health &amp; overall well-being</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center text-center px-4 group"
          >
            <Droplet size={24} strokeWidth={1.2} className="text-[var(--color-copper)] mb-3.5 group-hover:scale-110 transition-transform" />
            <h4 className="text-[10px] tracking-[0.1em] text-white/90 uppercase font-medium mb-2">Natural &amp; Safe</h4>
            <p className="text-[11px] text-white/50 font-light leading-snug">100% pure copper, no harmful coatings</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center text-center px-4 group"
          >
            <Recycle size={24} strokeWidth={1.2} className="text-[var(--color-copper)] mb-3.5 group-hover:scale-110 transition-transform" />
            <h4 className="text-[10px] tracking-[0.1em] text-white/90 uppercase font-medium mb-2">Eco-Friendly</h4>
            <p className="text-[11px] text-white/50 font-light leading-snug">Sustainable metal for a better tomorrow</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center text-center px-4 group"
          >
            <ShieldHalf size={24} strokeWidth={1.2} className="text-[var(--color-copper)] mb-3.5 group-hover:scale-110 transition-transform" />
            <h4 className="text-[10px] tracking-[0.1em] text-white/90 uppercase font-medium mb-2">Long-Lasting</h4>
            <p className="text-[11px] text-white/50 font-light leading-snug">Durable and built to last generations</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center text-center px-4 group"
          >
            <Sparkles size={24} strokeWidth={1.2} className="text-[var(--color-copper)] mb-3.5 group-hover:scale-110 transition-transform" />
            <h4 className="text-[10px] tracking-[0.1em] text-white/90 uppercase font-medium mb-2">Timeless Beauty</h4>
            <p className="text-[11px] text-white/50 font-light leading-snug">Elegant finish that never goes out of style</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
