import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-none mb-8 text-white">
            Where ideas <br />
            meet <span className="relative whitespace-nowrap">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-hive-300 to-hive-600">people.</span>
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-2 left-0 h-3 bg-hive-500/20 -skew-x-12 -z-0"
              />
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Stop searching in the dark. ConnectHive uses AI and geolocation to visually bridge the gap between student builders and local talent.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdaFsfkulhRrROUsV2hrIcGvGDS_Sx5AXYcNt0uKDUVgSUCmw/viewform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-10 py-5 bg-hive-500 hover:bg-hive-400 text-black font-bold text-xl rounded-full transition-all shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)] hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.8)] flex items-center gap-2"
          >
            Join Beta
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;