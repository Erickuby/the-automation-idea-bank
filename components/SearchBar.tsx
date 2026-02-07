import React, { useEffect, useRef } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  query: string;
  setQuery: (q: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative max-w-2xl mx-auto mb-10 group">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <Search className="w-5 h-5 text-slate-400 group-focus-within:text-cyan-600 transition-colors" />
      </div>
      <input
        ref={inputRef}
        type="text"
        aria-label="Search ideas"
        className="w-full py-4 pl-12 pr-4 text-slate-900 transition-all bg-white border rounded-2xl border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 placeholder-slate-400"
        placeholder="Search 200+ ideas, tools, or niches..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
        <kbd className="hidden sm:inline-block px-2 py-1 text-xs font-semibold rounded bg-slate-50 border border-slate-200 text-slate-500">
          CMD + K
        </kbd>
      </div>
    </div>
  );
};

export default SearchBar;
