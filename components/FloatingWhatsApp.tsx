import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#FF6600] rounded-full shadow-[0_0_20px_rgba(255,102,0,0.5)] text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,102,0,0.7)] group"
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping opacity-75"></div>
      <MessageCircle size={28} className="relative z-10 fill-current" />
      
      {/* Tooltip */}
      <span className="absolute right-16 bg-[#1E1E1E] text-white text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-[#333]">
        Orçamento Rápido
      </span>
    </a>
  );
};

export default FloatingWhatsApp;