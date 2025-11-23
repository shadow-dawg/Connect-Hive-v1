import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VisualStory from './components/VisualStory';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-void text-white selection:bg-hive-500 selection:text-black transition-opacity duration-1000 opacity-100">
        
        {/* Global Fixed Background */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
             {/* Base Void */}
             <div className="absolute inset-0 bg-void"></div>
             
             {/* Interactive Spotlight */}
             <div 
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(245, 158, 11, 0.15), transparent 40%)`,
                }}
            />

            {/* Grain & Grid */}
            <div className="absolute inset-0 bg-grain opacity-20"></div>
            <div className="absolute inset-0 honeycomb-grid opacity-10"></div>
            
             {/* Floating Orbs */}
             <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-hive-600/20 rounded-full blur-[128px]" 
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{ duration: 10, repeat: Infinity, delay: 1 }}
              className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]" 
            />
        </div>

        <div className="relative z-10 w-full">
            <Navbar />
            <main className="w-full">
              <Hero />
              <ProblemSolution />
              <VisualStory />
              <Features />
            </main>
            <Footer />
        </div>
      </div>
    </>
  );
};

export default App;