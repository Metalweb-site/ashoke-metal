import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionDivider from './components/SectionDivider';
import Collections from './components/Collections';
import PromiseSection from './components/Promise';
import FeaturedProducts from './components/FeaturedProducts';
import WhyChoose from './components/WhyChoose';
import CustomOrders from './components/CustomOrders';
import FooterFeatures from './components/FooterFeatures';
import LoadingScreen from './components/LoadingScreen';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // When isLoading is true, we prevent scrolling by hiding overflow on body.
  React.useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Wait for the LoadingScreen to slide up
    setTimeout(() => {
      setIsLoaded(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-cream-bg">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <Navbar isLoaded={isLoaded} />
        <Hero isLoaded={isLoaded} />
        <SectionDivider title="EXPLORE OUR COLLECTIONS" />
        <Collections />
        <PromiseSection />
        <SectionDivider title="FEATURED PRODUCTS" />
        <FeaturedProducts />
        <WhyChoose />
        <CustomOrders />
        <FooterFeatures />
        {/* Simple footer placeholder so end isn't abrupt */}
        <footer className="bg-[#0a0908] text-center py-6 text-xs text-white/40">
           &copy; 2026 Ashok Metals. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

