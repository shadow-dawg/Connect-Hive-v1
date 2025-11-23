import React from 'react';
import { Twitter, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 py-16 relative overflow-hidden bg-black/20 backdrop-blur-md">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-hive-500/50 to-transparent"></div>
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center gap-2 group select-none cursor-default">
                  <span className="font-display font-bold text-lg text-white">connecthive</span>
                </div>
                <p className="text-gray-500 text-sm">© 2025 ConnectHive. Built for the future.</p>
            </div>

            <div className="flex gap-6">
                <a href="#" className="text-gray-500 hover:text-hive-400 transition-colors"><Twitter size={20}/></a>
                <a href="https://github.com/shadow-dawg" className="text-gray-500 hover:text-hive-400 transition-colors"><Github size={20}/></a>
                <a href="#" className="text-gray-500 hover:text-hive-400 transition-colors"><Linkedin size={20}/></a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;