import React from 'react';
import { ProductItem } from '../types';
import { MessageCircle, Star } from 'lucide-react';
import Button from './Button';
import { WHATSAPP_LINK } from '../constants';

interface ProductCardProps {
  product: ProductItem;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  
  // Card Especial de Atacado
  if (product.isWholesale) {
    return (
      <div id="atacado-card" className="relative group bg-gradient-to-br from-[#1E1E1E] to-[#252525] rounded-3xl p-1 border border-[#FF6600] h-full overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6600] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
        
        <div className="bg-[#121212] rounded-[20px] h-full p-6 flex flex-col justify-center items-center text-center relative z-10">
            <div className="w-16 h-16 rounded-full bg-[#FF6600]/20 flex items-center justify-center mb-4">
                <Star className="text-[#FF6600]" size={32} fill="#FF6600" />
            </div>
            <h3 className="text-2xl font-black text-white mb-2">Pedidos em Atacado</h3>
            <p className="text-[#C0C0C0] text-sm mb-6">
                Preços especiais para grandes quantidades. Ideal para empresas e eventos.
            </p>
            <Button fullWidth onClick={() => window.open(WHATSAPP_LINK, '_blank')}>
                Falar com Consultor
            </Button>
        </div>
      </div>
    );
  }

  // Card Padrão
  return (
    <div className="group relative bg-[#1E1E1E] rounded-3xl border border-[#333] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,102,0,0.5)] flex flex-col h-full">
        
        {/* Imagem com ClipRRect e Badge */}
        <div className="relative h-48 w-full overflow-hidden">
            <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
            />
            {/* Badge de Qualidade */}
            <div className="absolute top-3 right-3 bg-[#FF6600] text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg uppercase tracking-wide flex items-center gap-1">
                <Star size={10} fill="white" /> Premium
            </div>
            {/* Overlay gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] to-transparent opacity-60"></div>
        </div>

        {/* Conteúdo */}
        <div className="p-5 flex flex-col flex-grow">
            <span className="text-[#FF6600] text-xs font-bold uppercase mb-1">{product.category}</span>
            <h3 className="text-lg font-bold text-white mb-2 leading-tight">{product.title}</h3>
            <p className="text-[#888] text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>
            
            <div className="mt-auto pt-4 border-t border-[#333]">
                <button 
                    onClick={() => window.open(WHATSAPP_LINK, '_blank')}
                    className="w-full py-2.5 rounded-xl bg-[#2A2A2A] text-white text-sm font-semibold hover:bg-[#FF6600] transition-colors duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
                >
                    <MessageCircle size={16} />
                    Orçar via WhatsApp
                </button>
            </div>
        </div>
    </div>
  );
};

export default ProductCard;