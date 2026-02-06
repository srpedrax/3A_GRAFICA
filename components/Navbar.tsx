import React, { useState } from 'react';
import { Menu, X, Printer } from 'lucide-react';
import { NAV_LINKS, COLORS } from '../constants';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#121212]/90 backdrop-blur-md border-b border-[#333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6600] to-[#CC5200] flex items-center justify-center text-white shadow-lg">
              <Printer size={20} />
            </div>
            <span className="text-2xl font-black text-white tracking-tighter">
              3A <span className="text-[#FF6600]">Gráfica</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#C0C0C0] hover:text-[#FF6600] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="outline" className="ml-4 py-2 px-6 text-sm">
                Orçamento
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#C0C0C0] hover:text-white hover:bg-[#333] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1E1E1E] border-b border-[#333]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[#C0C0C0] hover:text-[#FF6600] block px-3 py-3 rounded-md text-base font-medium text-center"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 px-3 pb-3">
               <Button fullWidth onClick={() => setIsOpen(false)}>
                 Pedir Orçamento
               </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;