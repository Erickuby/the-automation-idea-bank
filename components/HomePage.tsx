import React, { useState, useMemo } from 'react';
import { automationData } from '../data';
import { NicheType } from '../types';
import Header from './Header';
import SearchBar from './SearchBar';
import FilterPills from './FilterPills';
import IdeaCard from './IdeaCard';
import { LayoutGrid, AlertCircle, Info } from 'lucide-react';

const HomePage: React.FC = () => {
    const [query, setQuery] = useState('');
    const [activeNiche, setActiveNiche] = useState<NicheType>('All');

    const filteredIdeas = useMemo(() => {
        return automationData.filter((item) => {
            const matchesSearch =
                item.idea.toLowerCase().includes(query.toLowerCase()) ||
                item.solution.toLowerCase().includes(query.toLowerCase()) ||
                (item.tools && item.tools.some(tool => tool.toLowerCase().includes(query.toLowerCase())));

            const matchesNiche = activeNiche === 'All' || item.niche === activeNiche;

            return matchesSearch && matchesNiche;
        });
    }, [query, activeNiche]);

    return (
        <div className="min-h-screen pb-20 bg-slate-50/50 selection:bg-cyan-100 selection:text-cyan-900">
            {/* Subtle light mode decorative background glows */}
            <div className="fixed top-0 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-100/30 rounded-full blur-[140px] -z-10 pointer-events-none" />
            <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-purple-100/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <main className="container px-4 mx-auto max-w-7xl">
                <Header />

                <div className="sticky top-0 z-50 pt-4 pb-6 bg-white/80 backdrop-blur-2xl">
                    <SearchBar query={query} setQuery={setQuery} />
                    <FilterPills activeNiche={activeNiche} setActiveNiche={setActiveNiche} />
                </div>

                <div className="flex items-center justify-between mb-10 border-b border-slate-200 pb-5">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-cyan-100 rounded-lg">
                            <LayoutGrid className="w-5 h-5 text-cyan-600" />
                        </div>
                        <div>
                            <span className="text-sm font-bold text-slate-900 block leading-tight">
                                {filteredIdeas.length} Proven Business Models
                            </span>
                            <span className="text-xs text-slate-500 font-medium">Curated for high-performance teams</span>
                        </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-[10px] text-slate-500 uppercase tracking-widest font-bold border border-slate-200">
                        <Info className="w-3 h-3" />
                        Directory Live Update 2.4
                    </div>
                </div>

                {filteredIdeas.length > 0 ? (
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredIdeas.map((idea, index) => (
                            <IdeaCard key={idea.id} idea={idea} index={index} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-40 text-center">
                        <div className="p-6 bg-slate-100 rounded-3xl mb-6 shadow-inner">
                            <AlertCircle className="w-12 h-12 text-slate-400" />
                        </div>
                        <h3 className="text-3xl font-extrabold text-slate-900 mb-3">No blueprints found</h3>
                        <p className="text-slate-500 max-w-sm text-lg leading-relaxed mb-8">
                            We couldn't find any ideas matching "{query}". Try a different niche or simpler search term.
                        </p>
                        <button
                            onClick={() => { setQuery(''); setActiveNiche('All'); }}
                            className="px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl shadow-xl transition-all"
                        >
                            Reset Search Filter
                        </button>
                    </div>
                )}
            </main>

            <footer className="container px-4 mx-auto max-w-7xl mt-32 pt-12 border-t border-slate-200 text-center">
                <div className="mb-4 flex justify-center gap-6">
                    <a href="#" className="text-slate-400 hover:text-cyan-600 transition-colors text-sm font-bold">Documentation</a>
                    <a href="#" className="text-slate-400 hover:text-cyan-600 transition-colors text-sm font-bold">Submit Idea</a>
                    <a href="#" className="text-slate-400 hover:text-cyan-600 transition-colors text-sm font-bold">API Reference</a>
                </div>
                <p className="text-slate-400 text-sm font-medium">
                    &copy; 2025 The Automation Business Blueprint. Built for engineers and visionaries.
                </p>
            </footer>
        </div>
    );
};

export default HomePage;
