import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from './ProductCard';
import RevealOnScroll from './RevealOnScroll';
import { ProductItem } from '../types';

const ProductGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  // Filtra os produtos e adiciona o card de atacado no final
  const getFilteredProducts = () => {
    let filtered = activeCategory === "Todos" 
        ? [...PRODUCTS] 
        : PRODUCTS.filter(p => p.category === activeCategory);
    
    // Adiciona item de atacado virtualmente
    const wholesaleItem: ProductItem = {
        id: "wholesale",
        title: "Atacado",
        category: "Corporativo",
        image: "",
        description: "",
        isWholesale: true
    };
    
    return [...filtered, wholesaleItem];
  };

  const displayProducts = getFilteredProducts();

  return (
    <section id="catalogo" className="py-20 bg-[#121212] relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-12">
            <RevealOnScroll>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
                  Catálogo de <span className="text-[#FF6600]">Produtos</span>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <p className="text-[#C0C0C0] font-medium max-w-2xl mx-auto">
                  Personalização de alto nível para sua marca. Selecione uma categoria abaixo.
              </p>
            </RevealOnScroll>
        </div>

        {/* Filtros (Chips) */}
        <RevealOnScroll delay={300} className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
                {CATEGORIES.map((category) => {
                    const isActive = activeCategory === category;
                    return (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                                isActive 
                                ? "bg-[#FF6600] text-white border-[#FF6600] shadow-[0_0_15px_rgba(255,102,0,0.4)] scale-105" 
                                : "bg-transparent text-[#C0C0C0] border-[#333] hover:border-[#FF6600] hover:text-white"
                            }`}
                        >
                            {category}
                        </button>
                    )
                })}
            </div>
        </RevealOnScroll>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {displayProducts.map((product, index) => (
            <RevealOnScroll key={product.id} delay={index * 100} className="h-full">
              <ProductCard product={product} />
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductGrid;