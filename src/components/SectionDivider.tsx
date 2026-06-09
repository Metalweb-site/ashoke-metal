import { motion } from 'motion/react';

export default function SectionDivider({ title }: { title: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center py-12 md:py-16"
    >
      <div className="flex items-center gap-4 px-4 w-full justify-center max-w-4xl mx-auto">
        {/* Decorative pattern left */}
        <div className="flex-1 hidden sm:flex items-center justify-end gap-1 opacity-70">
           <div className="w-8 h-[1px] bg-[var(--color-copper)]"></div>
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-copper)" strokeWidth="1" className="shrink-0">
             <path d="M12 2L15 12L22 12L16 18L18 24L12 20L6 24L8 18L2 12L9 12L12 2Z" fill="currentColor" stroke="none" opacity="0.3"/>
             <circle cx="12" cy="12" r="3" fill="var(--color-copper)" />
           </svg>
           <div className="w-16 h-[1px] bg-[var(--color-copper)]"></div>
        </div>
        
        {/* Title */}
        <h2 className="font-serif text-[22px] md:text-3xl text-gray-800 tracking-wide text-center shrink-0 uppercase px-2">
          {title}
        </h2>
        
        {/* Decorative pattern right */}
        <div className="flex-1 hidden sm:flex items-center gap-1 opacity-70">
           <div className="w-16 h-[1px] bg-[var(--color-copper)]"></div>
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-copper)" strokeWidth="1" className="shrink-0">
             <path d="M12 2L15 12L22 12L16 18L18 24L12 20L6 24L8 18L2 12L9 12L12 2Z" fill="currentColor" stroke="none" opacity="0.3"/>
             <circle cx="12" cy="12" r="3" fill="var(--color-copper)" />
           </svg>
           <div className="w-8 h-[1px] bg-[var(--color-copper)]"></div>
        </div>
      </div>
    </motion.div>
  );
}
