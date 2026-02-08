
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Copy, Check, Cpu } from 'lucide-react';
import { AutomationIdea } from '../types';

interface IdeaCardProps {
  idea: AutomationIdea;
  index: number;
}

const IdeaCard: React.FC<IdeaCardProps> = ({ idea, index }) => {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const handleCopy = () => {
    let textToCopy = `${idea.idea}\n\nSolution: ${idea.solution}`;
    if (idea.tools && idea.tools.length > 0) {
      textToCopy += `\n\nTools: ${idea.tools.join(', ')}`;
    }
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getNicheStyles = (niche: string) => {
    switch (niche.toLowerCase()) {
      case 'content creation and editing': return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'marketing and advertising': return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'productivity and project management': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'education and training': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'data and analytics services': return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case 'gaming and interactive media': return 'bg-pink-50 text-pink-700 border-pink-200';
      case 'customer service and virtual assistance': return 'bg-cyan-50 text-cyan-700 border-cyan-200';
      case 'health and wellness': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'finance and investing': return 'bg-slate-50 text-slate-700 border-slate-200';
      case 'travel and hospitality': return 'bg-rose-50 text-rose-700 border-rose-200';
      default: return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.5) }}
      whileHover="hover"
      onClick={() => navigate(`/idea/${idea.id}`)}
      className="relative group p-6 h-full flex flex-col justify-between overflow-hidden bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-cyan-100/40 hover:border-cyan-200 transition-all duration-300 cursor-pointer"
    >
      {/* Animated central glow effect */}
      <motion.div
        variants={{
          hover: {
            scale: 2,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
          }
        }}
        initial={{ scale: 0.5, opacity: 0 }}
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12)_0%,transparent_70%)] z-0"
      />

      {/* Decorative corner glow */}
      <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity z-0" />

      <motion.div
        variants={{
          hover: { y: -6, scale: 1.01 }
        }}
        className="relative z-10 flex flex-col h-full justify-between"
      >
        <div>
          <div className="flex items-start justify-between mb-5">
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${getNicheStyles(idea.niche)} whitespace-normal text-center`}>
              {idea.niche}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCopy();
              }}
              className="p-2 transition-all rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-cyan-300 text-slate-400 hover:text-cyan-600 shadow-sm relative z-20"
              title="Copy to clipboard"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <h3 className="mb-4 text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors leading-tight">
            {idea.idea}
          </h3>

          <p className="mb-8 text-sm leading-relaxed text-slate-500 font-medium line-clamp-3">
            {idea.solution}
          </p>
        </div>

        {idea.tools && idea.tools.length > 0 && (
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-50">
              {idea.tools.map((tool) => (
                <span key={tool} className="flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold text-slate-600 bg-slate-100/50 rounded-lg border border-slate-200/60">
                  <Cpu className="w-3 h-3 text-cyan-600" />
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default IdeaCard;
