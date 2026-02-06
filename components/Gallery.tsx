import React from 'react';
import { GALLERY_ITEMS } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const Gallery: React.FC = () => {
  return (
    <section id="galeria" className="py-24 bg-[#181818] relative overflow-hidden">
      
      {/* Background Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF6600] to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                      Galeria <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6600] to-yellow-500">Geek</span>
                  </h2>
                  <p className="text-[#C0C0C0]">Os posters e quadros mais insanos do momento.</p>
              </div>
              <a href="#" className="text-[#FF6600] font-semibold hover:underline hidden md:block">
                  Ver todos os modelos &rarr;
              </a>
          </div>
        </RevealOnScroll>

        {/* Scrollable Container for Mobile, Grid for Desktop */}
        <div className="flex overflow-x-auto gap-6 pb-8 md:grid md:grid-cols-4 md:overflow-visible hide-scroll">
            {GALLERY_ITEMS.map((item, index) => (
                <div key={item.id} className="flex-shrink-0 w-[260px] md:w-auto h-full">
                  <RevealOnScroll delay={index * 100} className="h-full">
                    <div 
                        className="group relative rounded-xl overflow-hidden border border-[#333] transition-all duration-500 hover:scale-105 hover:z-10 h-full"
                    >
                        {/* Neon Shadow Effect Container */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6600] to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        
                        <div className="relative h-[380px] w-full rounded-xl overflow-hidden bg-[#121212]">
                             <img 
                                src={item.imageUrl} 
                                alt={item.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            />
                            
                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-[#FF6600] text-xs font-bold uppercase tracking-wider mb-1 shadow-black drop-shadow-md">{item.category}</span>
                                <h4 className="text-white text-xl font-bold drop-shadow-md">{item.title}</h4>
                            </div>
                        </div>
                    </div>
                  </RevealOnScroll>
                </div>
            ))}
        </div>
        
        <RevealOnScroll>
          <div className="mt-4 md:hidden text-center">
              <a href="#" className="text-[#FF6600] font-semibold hover:underline">
                  Ver todos os modelos &rarr;
              </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Gallery;