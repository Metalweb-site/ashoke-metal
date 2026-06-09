import { ArrowRight, PackageOpen, Boxes } from 'lucide-react';
import { motion } from 'motion/react';

export default function CustomOrders() {
  return (
    <section className="bg-[#f0eade] border-y border-[#d6bfab] relative w-full flex flex-col md:flex-row overflow-hidden">
      
      {/* Background Texture/Mandala (Left Side) */}
      <div className="absolute top-0 left-0 w-full md:w-1/2 h-full opacity-5 pointer-events-none z-0">
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="absolute -left-32 -top-32 w-[600px] h-[600px]">
          <path d="M250,500 C111.9,500 0,388.1 0,250 C0,111.9 111.9,0 250,0 C388.1,0 500,111.9 500,250 C500,388.1 388.1,500 250,500 Z M250,480 C377,480 480,377 480,250 C480,123 377,20 250,20 C123,20 20,123 20,250 C20,377 123,480 250,480 Z M250,450 C139.5,450 50,360.5 50,250 C50,139.5 139.5,50 250,50 C360.5,50 450,139.5 450,250 C450,360.5 360.5,450 250,450 Z M250,430 C349.4,430 430,349.4 430,250 C430,150.6 349.4,70 250,70 C150.6,70 70,150.6 70,250 C70,349.4 150.6,430 250,430 Z M250,390 C172.7,390 110,327.3 110,250 C110,172.7 172.7,110 250,110 C327.3,110 390,172.7 390,250 C390,327.3 327.3,390 250,390 Z M250,370 C316.3,370 370,316.3 370,250 C370,183.7 316.3,130 250,130 C183.7,130 130,183.7 130,250 C130,316.3 183.7,370 250,370 Z M250,330 C205.8,330 170,294.2 170,250 C170,205.8 205.8,170 250,170 C294.2,170 330,205.8 330,250 C330,294.2 294.2,330 250,330 Z M250,310 C283.1,310 310,283.1 310,250 C310,216.9 283.1,190 250,190 C216.9,190 190,216.9 190,250 C190,283.1 216.9,310 250,310 Z" fill="currentColor"/>
          <path d="M250,280 C233.4,280 220,266.6 220,250 C220,233.4 233.4,220 250,220 C266.6,220 280,233.4 280,250 C280,266.6 266.6,280 250,280 Z" fill="currentColor"/>
          {/* Decorative petals */}
          {[...Array(12)].map((_, i) => (
            <path key={i} d={`M 250 250 L 250 180 C 270 180 280 210 250 250`} fill="none" stroke="currentColor" strokeWidth="2" transform={`rotate(${i * 30} 250 250)`} />
          ))}
          {[...Array(24)].map((_, i) => (
            <path key={i} d={`M 250 250 L 250 120 C 280 120 290 190 250 250`} fill="none" stroke="currentColor" strokeWidth="1" transform={`rotate(${i * 15} 250 250)`} />
          ))}
          {[...Array(16)].map((_, i) => (
            <path key={i} d={`M 250 250 L 250 60 C 300 60 320 180 250 250`} fill="none" stroke="currentColor" strokeWidth="1" transform={`rotate(${i * 22.5} 250 250)`} />
          ))}
        </svg>
      </div>

      {/* Left Content */}
      <motion.div 
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full md:w-5/12 py-16 px-6 md:pl-20 xl:pl-32 pr-12 xl:pr-24 relative z-20 flex flex-col justify-center shrink-0"
      >
        <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-serif text-[#332218] mb-4 leading-[1.1] tracking-tight">
          Custom Made.<br/>Exclusively <span className="text-[#a46034]">Yours.</span>
        </h2>
        <p className="text-[13px] sm:text-[14px] text-[#4a3a31] font-medium font-sans leading-[1.6] mb-8 max-w-[380px]">
          From utensils to idols, we craft as per your requirements. Bulk orders & custom designs are our specialty.
        </p>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <button className="bg-[#b16a3a] hover:bg-[#97582f] text-white/95 px-6 py-2.5 flex items-center justify-center gap-2 text-[11px] tracking-wider transition-colors font-semibold rounded-[3px] shadow-[0_2px_10px_rgba(177,106,58,0.3)]">
            ENQUIRE NOW <ArrowRight size={14} className="ml-1" />
          </button>
          
          <div className="flex items-center gap-4 text-[10px] font-bold text-[#5c4a3d] uppercase tracking-wider">
             <span className="flex items-center gap-1.5 whitespace-nowrap">
                <Boxes size={15} strokeWidth={1.5} className="text-[#8c5029]" /> 
                BULK ORDERS
             </span>
             <div className="w-[1px] h-6 bg-[#d6bfab]"></div>
             <span className="flex items-center gap-1.5 whitespace-nowrap">
                <PackageOpen size={15} strokeWidth={1.5} className="text-[#8c5029]" /> 
                CORPORATE ORDERS
             </span>
          </div>
        </div>
      </motion.div>

      {/* Scalloped Divider */}
      <div className="hidden md:block absolute left-[41.666667%] -translate-x-[1px] top-0 h-full w-[100px] xl:w-[130px] z-20 pointer-events-none drop-shadow-[15px_0_25px_rgba(0,0,0,0.25)]">
         <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-[#f0eade] overflow-visible">
            <path d="M-100,0 L80,0 C30,10 30,23 80,33.33 C30,43 30,56 80,66.66 C30,76 30,90 80,100 L-100,100 Z" fill="currentColor"/>
         </svg>
      </div>

      {/* Right Content - Image */}
      <motion.div 
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full md:w-7/12 min-h-[350px] relative z-10 flex overflow-hidden"
      >
         <img 
           src="/custom-design.png" 
           alt="Copper Utensils Display" 
           className="absolute inset-0 w-full h-full object-cover object-center"
         />
      </motion.div>
    </section>
  );
}
