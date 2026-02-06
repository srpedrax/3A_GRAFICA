import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans selection:bg-[#FF6600] selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;