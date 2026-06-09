import { Truck, ShieldCheck, RefreshCcw, HeadphonesIcon } from 'lucide-react';
import { motion } from 'motion/react';

export default function FooterFeatures() {
  return (
    <section className="bg-[#0c0906] text-white py-12 border-b border-white/5">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, staggerChildren: 0.1 }}
        className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x divide-white/10"
      >
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 px-2 lg:px-6 pl-0"
        >
          <Truck size={30} strokeWidth={1.2} className="text-[var(--color-copper)] shrink-0" />
          <div className="pt-0.5">
            <h4 className="text-[10px] tracking-[0.1em] uppercase font-semibold mb-1 text-white/90">Pan India Delivery</h4>
            <p className="text-[11px] text-white/50 font-light">Safe &amp; timely delivery</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-4 px-2 lg:px-6"
        >
          <ShieldCheck size={30} strokeWidth={1.2} className="text-[var(--color-copper)] shrink-0" />
          <div className="pt-0.5">
            <h4 className="text-[10px] tracking-[0.1em] uppercase font-semibold mb-1 text-white/90">Secure Payment</h4>
            <p className="text-[11px] text-white/50 font-light">100% safe &amp; secure</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4 px-2 lg:px-6"
        >
          <RefreshCcw size={30} strokeWidth={1.2} className="text-[var(--color-copper)] shrink-0" />
          <div className="pt-0.5">
            <h4 className="text-[10px] tracking-[0.1em] uppercase font-semibold mb-1 text-white/90">Easy Returns</h4>
            <p className="text-[11px] text-white/50 font-light">Hassle free returns</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-4 px-2 lg:px-6"
        >
          <HeadphonesIcon size={30} strokeWidth={1.2} className="text-[var(--color-copper)] shrink-0" />
          <div className="pt-0.5">
            <h4 className="text-[10px] tracking-[0.1em] uppercase font-semibold mb-1 text-white/90">Customer Support</h4>
            <p className="text-[11px] text-white/50 font-light">+91 98765 43210</p>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
