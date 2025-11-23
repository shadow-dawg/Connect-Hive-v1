import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Map, MessageCircle, Layers, Sparkles, GitBranch, Shield, ChevronDown } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    title: "Map-Based Discovery",
    description: "Interactive map visualizing talent density. Filter by skills, interests, and availability.",
    icon: Map,
  },
  {
    title: "Auto-Forums",
    description: "Hyperlocal communities created automatically when density reaches critical mass.",
    icon: MessageCircle,
  },
  {
    title: "Cross-Career Ops",
    description: "Break the silo. Connect developers with filmmakers, writers, and designers nearby.",
    icon: Layers,
  },
  {
    title: "AI Matchmaker",
    description: "Our Gemini-powered engine suggests projects and teammates based on skill overlap.",
    icon: Sparkles,
  },
  {
    title: "Workflow Integration",
    description: "One-click repo generation. Integrates seamlessly with GitHub, Notion, and Figma.",
    icon: GitBranch,
  },
  {
    title: "Privacy Controls",
    description: "You control your visibility. Mask your exact location to neighborhood or city level.",
    icon: Shield,
  },
];

const Features: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Determine grid span based on index to create a bento/zig-zag layout
  const getGridClass = (idx: number) => {
    // Large screens: Cards 0, 3, 5 span 2 columns.
    // Medium screens: Cards 0, 3 span 2 columns.
    if (idx === 0 || idx === 3) return "md:col-span-2 lg:col-span-2";
    if (idx === 5) return "lg:col-span-2";
    return "";
  };

  return (
    <section id="features" className="py-32 relative">
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            Built for <span className="text-hive-400">Builders</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl">
            Everything you need to go from "hello" to "shipped" in record time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => {
            const isSelected = selectedIdx === idx;
            const spanClass = getGridClass(idx);
            
            return (
              <motion.div
                key={idx}
                layout
                onClick={() => setSelectedIdx(isSelected ? null : idx)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, layout: { duration: 0.3 } }}
                animate={isSelected ? "selected" : "initial"}
                whileHover="hover"
                className={`relative p-10 rounded-3xl overflow-hidden group cursor-pointer border transition-all duration-500 ${spanClass} ${
                  isSelected 
                    ? 'bg-hive-900/10 border-hive-500/60 shadow-[0_0_30px_-10px_rgba(245,158,11,0.3)]' 
                    : 'bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/10'
                }`}
              >
                {/* Hover/Selected Glow Background */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-hive-500/10 transition-opacity duration-500 ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                />
                
                {/* Tech/Status Indicator - Top Right */}
                <div className="absolute top-6 right-6 flex gap-1.5">
                  <motion.div 
                    variants={{
                      initial: { backgroundColor: "rgba(255, 255, 255, 0.1)", boxShadow: "none" },
                      hover: { backgroundColor: "#f59e0b", boxShadow: "0 0 8px rgba(245, 158, 11, 0.8)" },
                      selected: { backgroundColor: "#f59e0b", boxShadow: "0 0 8px rgba(245, 158, 11, 0.8)" }
                    }}
                    className="w-2 h-2 rounded-full transition-colors duration-300"
                  />
                  <motion.div 
                    variants={{
                       initial: { backgroundColor: "rgba(255, 255, 255, 0.05)", opacity: 1 },
                      hover: { backgroundColor: "#f59e0b", opacity: 0.5 },
                      selected: { backgroundColor: "#f59e0b", opacity: 0.5 }
                    }}
                    className="w-2 h-2 rounded-full transition-colors duration-300 delay-75"
                  />
                </div>

                <div className="flex justify-between items-start mb-8 relative z-10">
                    <motion.div 
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                          isSelected ? 'bg-hive-500/10 border-hive-500 shadow-lg shadow-hive-500/20' : 'bg-black border-white/10'
                      }`}
                      variants={{
                        initial: { scale: 1, rotate: 0 },
                        hover: { 
                          scale: 1.1, 
                          borderColor: "rgba(245, 158, 11, 0.6)",
                          backgroundColor: "rgba(245, 158, 11, 0.1)",
                          rotate: 0,
                          transition: { duration: 0.3, ease: "easeOut" }
                        },
                        selected: {
                            scale: 1.1,
                            borderColor: "#f59e0b",
                            backgroundColor: "rgba(245, 158, 11, 0.1)",
                        }
                      }}
                    >
                      <feature.icon className={`transition-colors duration-300 ${isSelected ? 'text-hive-400' : 'text-gray-400 group-hover:text-hive-400'}`} size={28} />
                    </motion.div>

                     {/* Chevron for interactivity hint */}
                     <motion.div
                        animate={{ rotate: isSelected ? 180 : 0 }}
                        className={`p-2 rounded-full transition-colors ${isSelected ? 'bg-hive-500/20 text-hive-400' : 'text-gray-600 group-hover:text-white'}`}
                    >
                        <ChevronDown size={24} />
                    </motion.div>
                </div>

                <h3 className={`text-2xl font-bold mb-2 relative z-10 transition-colors duration-300 ${isSelected ? 'text-hive-400' : 'text-white group-hover:text-hive-100'}`}>
                  {feature.title}
                </h3>

                {/* Animated Description Reveal */}
                <motion.div
                    initial={false}
                    animate={{ 
                        height: isSelected ? 'auto' : 0,
                        opacity: isSelected ? 1 : 0,
                        marginTop: isSelected ? 16 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden relative z-10"
                >
                    <p className="leading-relaxed text-base text-gray-200">
                        {feature.description}
                    </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;