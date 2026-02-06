import React from 'react';
import { Facebook, Instagram, Twitter, Printer } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-[#0f0f0f] border-t border-[#333] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
               <Printer className="text-[#FF6600]" size={24} />
               <span className="text-2xl font-black text-white">3A Gráfica</span>
            </div>
            <p className="text-[#888] text-sm leading-relaxed max-w-sm mb-6">
              Sua parceira ideal para impressões digitais, brindes personalizados e materiais gráficos de alta performance. Entregamos qualidade que você pode sentir.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1E1E1E] flex items-center justify-center text-[#C0C0C0] hover:bg-[#FF6600] hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1E1E1E] flex items-center justify-center text-[#C0C0C0] hover:bg-[#FF6600] hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1E1E1E] flex items-center justify-center text-[#C0C0C0] hover:bg-[#FF6600] hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#hero" className="text-[#888] hover:text-[#FF6600] text-sm transition-colors">Início</a></li>
              <li><a href="#produtos" className="text-[#888] hover:text-[#FF6600] text-sm transition-colors">Produtos</a></li>
              <li><a href="#galeria" className="text-[#888] hover:text-[#FF6600] text-sm transition-colors">Galeria</a></li>
              <li><a href="#" className="text-[#888] hover:text-[#FF6600] text-sm transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-[#888]">
              <li className="flex items-start gap-3">
                <span className="text-[#FF6600]">📍</span>
                Teixeira de Freitas, BA
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF6600]">📞</span>
                (73) 99999-9999
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF6600]">📧</span>
                contato@3agrafica.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#222] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#666] text-xs">
                &copy; {new Date().getFullYear()} 3A Gráfica Digital. Todos os direitos reservados.
            </p>
            <p className="text-[#666] text-xs flex items-center gap-1">
                Feito com <span className="text-[#FF6600]">⚡</span> e React
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;