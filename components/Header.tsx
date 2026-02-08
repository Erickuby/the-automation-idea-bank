
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="pt-20 pb-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mb-4"
      >
        <div className="flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wider text-cyan-600 uppercase border rounded-full bg-cyan-50 border-cyan-200">
          <Sparkles className="w-3 h-3" />
          The Blueprint Engine
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl text-slate-900"
      >
        The <span className="text-transparent bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700 bg-clip-text">Automation Business</span> Blueprint
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl mx-auto text-lg leading-relaxed text-slate-600 font-medium"
      >
        Over 200 premium workflows and AI-powered strategies to build your
        empire, eliminate grunt work, and supercharge your revenue.
      </motion.p>
    </header>
  );
};

export default Header;
