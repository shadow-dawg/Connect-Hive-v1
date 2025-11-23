import React from 'react';
import { motion } from 'framer-motion';
import { SearchX, Zap, ShieldAlert, WifiOff, Network } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section id="problem" className="py-32 relative overflow-hidden">
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
              The <span className="text-red-500">Disconnect</span> vs The <span className="text-hive-500">Hive</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-xl">
              Talent is everywhere, but opportunity is often invisible. We're flipping the switch.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* The Problem Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative p-10 md:p-14 rounded-[3rem] bg-gradient-to-b from-zinc-900/90 to-black/90 border border-zinc-800 overflow-hidden hover:border-red-900/50 transition-colors duration-500 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-red-900/5 group-hover:bg-red-900/10 transition-colors duration-500" />
            
            {/* Floating scattered icons */}
            <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity group-hover:translate-x-2 duration-700 rotate-12">
                <WifiOff size={140} className="text-red-500" />
            </div>

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-red-500/10 flex items-center justify-center mb-10 border border-red-500/20 group-hover:scale-110 transition-transform duration-300">
                <SearchX className="text-red-500" size={40} />
              </div>
              
              <h3 className="text-4xl font-display font-bold text-white mb-8">
                Lost in the Noise
              </h3>
              
              <ul className="space-y-8">
                <li className="flex items-start gap-5 text-gray-400 group/item text-lg">
                    <div className="mt-1 min-w-[24px] opacity-50 group-hover/item:opacity-100 transition-opacity"><ShieldAlert size={24} className="text-red-500/50" /></div>
                    <p>University campuses are siloed. Developers don't meet designers; filmmakers don't meet writers.</p>
                </li>
                <li className="flex items-start gap-5 text-gray-400 group/item text-lg">
                    <div className="mt-1 min-w-[24px] opacity-50 group-hover/item:opacity-100 transition-opacity"><ShieldAlert size={24} className="text-red-500/50" /></div>
                    <p>LinkedIn is too formal. Instagram is too casual. There's no map for "who is building right now."</p>
                </li>
                <li className="flex items-start gap-5 text-gray-400 group/item text-lg">
                    <div className="mt-1 min-w-[24px] opacity-50 group-hover/item:opacity-100 transition-opacity"><ShieldAlert size={24} className="text-red-500/50" /></div>
                    <p>Cold DMing strangers feels awkward and rarely results in meaningful collaboration.</p>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* The Solution Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative p-10 md:p-14 rounded-[3rem] bg-gradient-to-b from-zinc-900/90 to-black/90 border border-hive-500/30 overflow-hidden backdrop-blur-sm"
          >
             {/* Glowing background effect */}
            <div className="absolute inset-0 bg-hive-500/5 group-hover:bg-hive-500/10 transition-colors duration-500" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-hive-500/20 rounded-full blur-[100px] group-hover:bg-hive-500/30 transition-all duration-700" />

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-hive-500 flex items-center justify-center mb-10 shadow-[0_0_30px_-5px_rgba(245,158,11,0.5)] group-hover:scale-110 transition-transform duration-300">
                <Zap className="text-black" size={40} />
              </div>
              
              <h3 className="text-4xl font-display font-bold text-white mb-8">
                Hyperlocal Synergy
              </h3>
              
              <ul className="space-y-8">
                <li className="flex items-start gap-5 text-gray-300 group/item text-lg">
                    <div className="mt-1 min-w-[24px]"><Network size={24} className="text-hive-500 group-hover/item:scale-125 transition-transform" /></div>
                    <p><span className="text-hive-400 font-bold">Proximity First:</span> See who is active within 5 miles of your dorm or workspace.</p>
                </li>
                <li className="flex items-start gap-5 text-gray-300 group/item text-lg">
                    <div className="mt-1 min-w-[24px]"><Network size={24} className="text-hive-500 group-hover/item:scale-125 transition-transform" /></div>
                    <p><span className="text-hive-400 font-bold">Skill Mapping:</span> Filter the real world like a video game. "Show me React devs nearby."</p>
                </li>
                <li className="flex items-start gap-5 text-gray-300 group/item text-lg">
                    <div className="mt-1 min-w-[24px]"><Network size={24} className="text-hive-500 group-hover/item:scale-125 transition-transform" /></div>
                    <p><span className="text-hive-400 font-bold">Instant Squads:</span> AI suggests the perfect teammates based on your project idea.</p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;