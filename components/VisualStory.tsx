import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Scan, Users, Radio, Zap, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    id: 'spark',
    title: 'The Spark',
    description: 'It starts with an idea. You drop a beacon on the map.',
    icon: Zap,
    color: 'text-yellow-500',
    bg: 'bg-yellow-500'
  },
  {
    id: 'scan',
    title: 'The Scan',
    description: 'ConnectHive scans your immediate vicinity for compatible skills.',
    icon: Scan,
    color: 'text-blue-500',
    bg: 'bg-blue-500'
  },
  {
    id: 'connect',
    title: 'The Squad',
    description: 'Builders are identified. Invites sent. Your local team is ready.',
    icon: Users,
    color: 'text-green-500',
    bg: 'bg-green-500'
  }
];

const VisualStory: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-advance steps every 5 seconds if not interacting
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            From Idea to <span className="text-hive-500">Reality</span>
          </h2>
          <p className="text-gray-400 text-xl">Watch how the hive comes alive.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Narrative Controls */}
          <div className="space-y-8">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <motion.div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`p-8 rounded-3xl border cursor-pointer transition-all duration-500 ${
                    isActive 
                      ? 'bg-white/10 border-hive-500/50 shadow-[0_0_30px_-10px_rgba(245,158,11,0.3)]' 
                      : 'bg-white/5 border-white/5 hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-6">
                    <div className={`p-4 rounded-2xl ${isActive ? 'bg-hive-500 text-black' : 'bg-white/10 text-gray-400'}`}>
                      <step.icon size={28} />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${isActive ? 'text-white' : 'text-gray-400'}`}>
                        {step.title}
                      </h3>
                      <AnimatePresence>
                        {isActive && (
                          <motion.p 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-gray-300 mt-3 text-base leading-relaxed"
                          >
                            {step.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  {/* Progress Bar for Active Step */}
                  {isActive && (
                    <motion.div 
                      className="h-1 bg-hive-500 mt-6 rounded-full"
                      layoutId="progressBar"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 4, ease: "linear" }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Right: Visual Simulation */}
          <div className="relative aspect-square md:aspect-video lg:aspect-square bg-void/50 rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center backdrop-blur-sm">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

            {/* Central User Node */}
            <motion.div 
              className="absolute z-20"
              animate={{ scale: activeStep === 0 ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-8 h-8 bg-hive-500 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.8)] relative">
                 <div className="absolute inset-0 bg-hive-500 rounded-full animate-ping opacity-50" />
              </div>
              <div className="absolute top-10 left-1/2 -translate-x-1/2 text-white text-sm font-mono whitespace-nowrap">
                YOU (Idea)
              </div>
            </motion.div>

            {/* Phase 1: Radar Scan */}
            {activeStep >= 1 && (
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0.2, 0], scale: 4 }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute w-40 h-40 border border-hive-500 rounded-full"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0.2, 0], scale: 4 }}
                  transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                  className="absolute w-40 h-40 border border-hive-500 rounded-full"
                />
              </>
            )}

            {/* Phase 2 & 3: Found Nodes & Connections */}
            <AnimatePresence>
              {activeStep >= 1 && (
                <>
                  {[
                    { x: -100, y: -80, role: 'Dev', delay: 0.2 },
                    { x: 120, y: -50, role: 'Design', delay: 0.5 },
                    { x: -50, y: 110, role: 'Video', delay: 0.8 },
                  ].map((node, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ delay: node.delay }}
                      style={{ x: node.x, y: node.y }}
                      className="absolute z-20 flex flex-col items-center"
                    >
                      <div className={`w-4 h-4 rounded-full ${activeStep === 2 ? 'bg-green-400 shadow-[0_0_10px_#4ade80]' : 'bg-gray-500'}`} />
                      {activeStep === 2 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="mt-2 px-3 py-1 bg-white/10 rounded text-xs text-white font-mono backdrop-blur-sm border border-white/10"
                        >
                          {node.role}
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </>
              )}
            </AnimatePresence>

            {/* Phase 3: Lines Connecting */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <AnimatePresence>
                {activeStep === 2 && (
                  <>
                    <motion.line
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.4 }}
                      exit={{ opacity: 0 }}
                      x1="50%" y1="50%" x2="calc(50% - 100px)" y2="calc(50% - 80px)"
                      stroke="#f59e0b" strokeWidth="2"
                    />
                    <motion.line
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.4 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.2 }}
                      x1="50%" y1="50%" x2="calc(50% + 120px)" y2="calc(50% - 50px)"
                      stroke="#f59e0b" strokeWidth="2"
                    />
                    <motion.line
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.4 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.4 }}
                      x1="50%" y1="50%" x2="calc(50% - 50px)" y2="calc(50% + 110px)"
                      stroke="#f59e0b" strokeWidth="2"
                    />
                  </>
                )}
              </AnimatePresence>
            </svg>

          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualStory;