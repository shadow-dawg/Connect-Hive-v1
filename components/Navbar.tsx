import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileOpen(false);
    }
  };

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#problem' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-void/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3 group select-none cursor-default">
          <span className="font-display font-bold text-2xl tracking-tight text-white">
            connecthive
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-sm font-medium text-gray-300 hover:text-hive-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdaFsfkulhRrROUsV2hrIcGvGDS_Sx5AXYcNt0uKDUVgSUCmw/viewform" 
            className="bg-hive-500 hover:bg-hive-400 text-black px-5 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105"
          >
            Join the Hive
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-void border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-gray-300 hover:text-hive-400 text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdaFsfkulhRrROUsV2hrIcGvGDS_Sx5AXYcNt0uKDUVgSUCmw/viewform"
                className="bg-hive-500 text-black py-3 rounded-lg font-bold mt-4 text-center block"
              >
                Join Waitlist
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;