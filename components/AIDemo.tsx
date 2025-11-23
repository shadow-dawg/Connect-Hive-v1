import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Loader2, User, Heart } from 'lucide-react';
import { generateMatchmakingSuggestion } from '../services/geminiService';
import { AIResponse } from '../types';

const AIDemo: React.FC = () => {
  const [skills, setSkills] = useState('');
  const [interests, setInterests] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIResponse | null>(null);

  const handleMatch = async () => {
    if (!skills || !interests) return;
    setLoading(true);
    setResult(null);
    try {
      const response = await generateMatchmakingSuggestion(skills, interests);
      setResult(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-demo" className="py-32 relative border-t border-white/5 bg-transparent">
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hive-500/10 text-hive-400 text-sm font-bold mb-6 border border-hive-500/20">
            <Sparkles size={16} />
            <span>Powered by Gemini 2.5</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Test the <span className="text-hive-400">Matchmaker</span>
          </h2>
          <p className="text-gray-400 text-xl">
            Enter your skills and interests to see how ConnectHive pairs you with projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 bg-black/40 backdrop-blur-xl p-10 md:p-14 rounded-[3rem] border border-white/10">
          {/* Input Side */}
          <div className="space-y-8">
            <div>
              <label className="block text-lg font-medium text-gray-300 mb-3 flex items-center gap-2">
                <User size={20} className="text-hive-500"/> Your Skills
              </label>
              <input
                type="text"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                placeholder="e.g., React, Python, Video Editing"
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white text-lg placeholder-gray-600 focus:outline-none focus:border-hive-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-300 mb-3 flex items-center gap-2">
                <Heart size={20} className="text-red-500"/> Your Interests
              </label>
              <input
                type="text"
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
                placeholder="e.g., Sustainability, Music, Fintech"
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white text-lg placeholder-gray-600 focus:outline-none focus:border-hive-500 transition-colors"
              />
            </div>
            <button
              onClick={handleMatch}
              disabled={loading || !skills || !interests}
              className="w-full py-5 bg-hive-600 hover:bg-hive-500 disabled:bg-gray-800 disabled:cursor-not-allowed text-white font-bold text-lg rounded-2xl transition-all flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={20} />}
              {loading ? 'Consulting the Hive Mind...' : 'Find My Hive'}
            </button>
          </div>

          {/* Output Side */}
          <div className="min-h-[400px] bg-white/5 rounded-3xl p-8 border border-dashed border-white/10 flex flex-col justify-center">
            {result ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                <div>
                  <h4 className="text-sm text-hive-400 uppercase tracking-widest font-bold mb-2">Suggested Project</h4>
                  <p className="text-3xl font-display font-bold text-white">{result.projectIdea}</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-3">Team Needed</h4>
                  <div className="flex flex-wrap gap-3">
                    {result.teamStructure.map((role, i) => (
                      <span key={i} className="px-4 py-2 bg-hive-900/30 border border-hive-500/20 rounded-lg text-sm text-hive-300">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-6 border-t border-white/5">
                  <p className="text-lg text-gray-400 italic">"{result.reasoning}"</p>
                </div>
              </motion.div>
            ) : (
              <div className="text-center text-gray-600">
                {loading ? (
                   <div className="flex flex-col items-center gap-4">
                     <div className="w-16 h-16 border-2 border-hive-500 border-t-transparent rounded-full animate-spin"></div>
                     <p className="text-lg animate-pulse">Analyzing skills synergy...</p>
                   </div>
                ) : (
                  <p className="text-lg">Results will appear here...</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDemo;