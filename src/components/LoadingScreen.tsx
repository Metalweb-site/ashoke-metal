import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;
    let isComplete = false;

    // Fake progress to show some activity while waiting
    const interval = setInterval(() => {
      if (currentProgress < 85 && !isComplete) {
        currentProgress += 1.5;
        setProgress(currentProgress);
      }
    }, 40);

    const finishLoading = () => {
      if (isComplete) return;
      isComplete = true;
      clearInterval(interval);
      setProgress(100);
      setTimeout(onComplete, 500); // Wait a bit after 100% before triggering exit
    };

    // Give the DOM a moment to render `<img />` tags behind the loading screen
    const timer = setTimeout(() => {
      const images = Array.from(document.images);
      
      const bgElements = Array.from(document.querySelectorAll<HTMLElement>('[style*="background-image"]'));
      const bgUrls = bgElements.map(el => {
        const style = el.getAttribute('style') || '';
        const match = style.match(/url\(['"]?(.*?)['"]?\)/);
        return match ? match[1] : null;
      }).filter(Boolean) as string[];

      const allUrls = [...images.map(img => img.src), ...bgUrls].filter(url => url && !url.startsWith('data:'));
      const uniqueUrls = [...new Set(allUrls)];

      if (uniqueUrls.length === 0) {
        if (document.readyState === 'complete') {
          finishLoading();
        } else {
          window.addEventListener('load', finishLoading, { once: true });
        }
        return;
      }

      let loadedCount = 0;
      const total = uniqueUrls.length;

      const incrementLoad = () => {
        loadedCount++;
        if (!isComplete && loadedCount === total) {
          finishLoading();
        }
      };

      uniqueUrls.forEach(url => {
        const img = new Image();
        img.onload = incrementLoad;
        img.onerror = incrementLoad; // Proceed even if an image fails
        img.src = url;
      });

      // Fallback in case images hang forever
      setTimeout(finishLoading, 6000); 

    }, 100);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: "-100vh", opacity: 1, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[100] bg-[#0c0907] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-[var(--color-copper)]/10 blur-[100px] rounded-full pointer-events-none"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Emblem/Logo */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-24 h-24 sm:w-28 sm:h-28 mb-8 relative flex items-center justify-center"
        >
          {/* Inner ring spinning */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-[var(--color-copper)]/40"
          ></motion.div>
          {/* Outer ring pulsing */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-4 rounded-full border border-[var(--color-copper)]/20"
          ></motion.div>
          
          {/* Static Center Logo/Img */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img src="/logo-1.jpg" alt="Ashok Metal Logo" className="w-[85%] h-[85%] object-contain mix-blend-screen opacity-90 scale-125" />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4, duration: 0.8 }}
           className="text-center"
        >
          <h1 className="font-serif text-2xl sm:text-3xl text-[var(--color-cream-bg)] tracking-[0.15em] uppercase mb-2">Ashok <span className="text-[var(--color-copper)]">Metals</span></h1>
          <p className="text-[9px] sm:text-[10px] tracking-[0.3em] font-medium uppercase text-[var(--color-copper)]/70">Purity Forged Through Generations</p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.7, duration: 0.8 }}
           className="w-48 sm:w-64 h-[1px] bg-white/10 mt-12 overflow-hidden relative"
        >
          <motion.div 
            className="absolute top-0 left-0 bottom-0 bg-[var(--color-copper)] shadow-[0_0_8px_var(--color-copper)]"
            style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
          ></motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-4 text-[9px] tracking-[0.2em] text-[var(--color-copper)]/50 font-mono"
        >
          {Math.floor(progress)}%
        </motion.div>

      </div>
    </motion.div>
  );
}
