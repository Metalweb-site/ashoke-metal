import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';

const products = [
  {
    id: 1,
    name: "Hammered Copper\nWater Bottle",
    price: "1,299",
    image: "/copper-bottle.png"
  },
  {
    id: 2,
    name: "Copper Jug\nwith Glass Set",
    price: "1,899",
    image: "/copper-glass.png"
  },
  {
    id: 3,
    name: "Copper\nDinner Set",
    price: "4,599",
    image: "/dinner-set.png"
  },
  {
    id: 4,
    name: "Lord Ganesha\nCopper Idol",
    price: "2,499",
    image: "/ganesh-idol.png"
  }
];

export default function FeaturedProducts() {
  return (
    <section className="bg-[var(--color-cream-bg)] py-10 pb-24 px-4 relative w-full overflow-hidden">
      
      {/* Container to center everything */}
      <div className="max-w-[1300px] mx-auto relative group/section">
        
        {/* Navigation Arrows */}
        <button className="hidden lg:flex absolute -left-8 xl:-left-16 top-[45%] w-[42px] h-[42px] rounded-full border border-[#ad744c] items-center justify-center text-[#ad744c] hover:bg-[#ad744c] hover:text-white transition-colors z-20 bg-transparent shadow-sm">
          <ChevronLeft strokeWidth={1.5} size={20} />
        </button>
        
        <button className="hidden lg:flex absolute -right-8 xl:-right-16 top-[45%] w-[42px] h-[42px] rounded-full border border-[#ad744c] items-center justify-center text-[#ad744c] hover:bg-[#ad744c] hover:text-white transition-colors z-20 bg-transparent shadow-sm">
          <ChevronRight strokeWidth={1.5} size={20} />
        </button>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 xl:px-0">
          {products.map((product, index) => (
            <motion.div 
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: index * 0.1 }}
                 key={product.id} className="group cursor-pointer flex flex-col h-[380px] bg-[#e4dac6] border border-[#d6bfab] overflow-hidden transition-all duration-300 hover:shadow-lg relative"
                 style={{
                    borderTopLeftRadius: '70px',
                    borderTopRightRadius: '70px',
                    borderBottomLeftRadius: '6px',
                    borderBottomRightRadius: '6px'
                 }}>
              
              {/* Internal Decorative Arch Line (Optional, creates nested arch effect) */}
              <div className="absolute inset-x-2 top-2 bottom-2 border border-[#c2b2a1]/40 pointer-events-none z-20"
                   style={{
                      borderTopLeftRadius: '62px',
                      borderTopRightRadius: '62px',
                      borderBottomLeftRadius: '2px',
                      borderBottomRightRadius: '2px'
                   }}>
              </div>

              {/* Image container */}
              <div className="w-full h-[65%] bg-[#ebe3d5] border-b border-[#d6bfab] relative overflow-hidden shrink-0">
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10 duration-500"></div>
                 <img 
                   src={product.image} 
                   alt={product.name}
                   className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-700" 
                 />
              </div>
              
              {/* Info */}
              <div className="p-5 flex flex-col h-[35%] justify-between relative z-10">
                 <h3 className="text-[13px] text-gray-800 font-medium leading-[1.3] pr-4 max-w-[95%] whitespace-pre-line">{product.name}</h3>
                 <div className="flex items-center justify-between mt-auto pt-2">
                    <span className="font-sans font-bold text-[16px] text-gray-900 tracking-wide">₹{product.price}</span>
                    <button className="w-8 h-8 rounded-full bg-[#874924] hover:bg-[#6c391c] text-white flex items-center justify-center transition-colors shadow-[0_2px_8px_rgba(135,73,36,0.3)] shrink-0">
                       <ShoppingCart size={15} strokeWidth={2} className="-translate-x-0.5" />
                    </button>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
