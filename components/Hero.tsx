import React from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Gradient & Effects */}
      <div className="absolute inset-0 bg-[#121212]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#FF6600] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[100px] opacity-10"></div>
      </div>

      {/* Content Stack */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-8">
        
        <RevealOnScroll>
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#FF6600]/30 bg-[#FF6600]/10 text-[#FF6600] text-sm font-semibold tracking-wide mb-2">
            🚀 Qualidade Premium em Cada Detalhe
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight max-w-4xl drop-shadow-2xl">
            A Melhor <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6600] to-[#FF9933]">Impressão</span> para o seu Negócio
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={400}>
          <p className="text-lg md:text-xl text-[#C0C0C0] max-w-2xl font-light mx-auto">
            Transforme suas ideias em produtos reais com acabamento impecável. 
            De camisas personalizadas a materiais gráficos profissionais.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={600} className="w-full flex justify-center">
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <Button className="h-14 text-lg shadow-[0_4px_14px_0_rgba(255,102,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,102,0,0.6)]">
              Pedir Orçamento <ArrowRight size={20} />
            </Button>
            <Button variant="outline" className="h-14 text-lg">
              Ver Catálogo
            </Button>
          </div>
        </RevealOnScroll>

        {/* Stats or Trust Indicators */}
        <RevealOnScroll delay={800} className="w-full">
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 border-t border-[#333] pt-8">
              <div>
                  <p className="text-3xl font-bold text-white">+10k</p>
                  <p className="text-sm text-[#C0C0C0]">Clientes Felizes</p>
              </div>
              <div>
                  <p className="text-3xl font-bold text-white">24h</p>
                  <p className="text-sm text-[#C0C0C0]">Produção Rápida</p>
              </div>
              <div className="hidden md:block">
                  <p className="text-3xl font-bold text-white">4.9</p>
                  <p className="text-sm text-[#C0C0C0]">Avaliação Média</p>
              </div>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
};

export default Hero;