
import React from 'react';
import { NicheType } from '../types';
import { NICHES } from '../constants';

interface FilterPillsProps {
  activeNiche: NicheType;
  setActiveNiche: (n: NicheType) => void;
}

const niches: NicheType[] = [...NICHES];

const FilterPills: React.FC<FilterPillsProps> = ({ activeNiche, setActiveNiche }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {niches.map((niche) => (
        <button
          key={niche}
          onClick={() => setActiveNiche(niche)}
          aria-pressed={activeNiche === niche}
          className={`px-4 py-2 text-sm font-semibold transition-all rounded-full border ${activeNiche === niche
            ? 'bg-cyan-600 border-cyan-700 text-white shadow-md shadow-cyan-200'
            : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200 hover:border-slate-300'
            }`}
        >
          {niche}
        </button>
      ))}
    </div>
  );
};

export default FilterPills;
