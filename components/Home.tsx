
import React from 'react';
import Hero from './Hero';
import PortfolioGrid from './PortfolioGrid';
import { PortfolioItem } from '../types';

interface Props {
  portfolios: PortfolioItem[];
  filteredPortfolios: PortfolioItem[];
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  activeCategory: string;
  setActiveCategory: (val: string) => void;
  isLoading: boolean;
  isOfflineMode: boolean;
}

const Home: React.FC<Props> = ({ 
  portfolios, 
  filteredPortfolios, 
  searchTerm, 
  setSearchTerm, 
  activeCategory, 
  setActiveCategory, 
  isLoading, 
  isOfflineMode 
}) => {
  const categories = ['All', 'Developer', 'Designer', 'Mobile', 'Scientist', 'Security'];

  return (
    <main className="relative z-10">
      <Hero />
      
      <div className="bg-[#ff4d00] py-5 overflow-hidden border-y border-black relative z-10 shadow-2xl">
        <div className="marquee">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-black font-bold uppercase tracking-[0.5em] text-[10px] mx-10">
                Crafting Digital Excellence
              </span>
              <span className="w-2 h-2 bg-black rotate-45"></span>
              <span className="text-black font-bold uppercase tracking-[0.5em] text-[10px] mx-10">
                Selected Works — The Prestige
              </span>
              <span className="w-2 h-2 bg-black rotate-45"></span>
            </div>
          ))}
        </div>
      </div>

      <section id="explore" className="max-w-[1600px] mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-10">
          <div className="max-w-xl">
            <div className="inline-block px-3 py-1 border border-white/10 mb-4 bg-black/50 backdrop-blur-sm">
               <span className="font-mono text-[9px] uppercase tracking-widest text-[#ff4d00]">Archive_Listing</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-serif italic mb-6 tracking-tighter leading-[0.85]">The Talent</h2>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 leading-relaxed max-w-lg bg-black/30 p-3 rounded-sm backdrop-blur-sm border border-white/5">
              {isOfflineMode 
                ? "NOTICE: Running in Local Fallback Mode. Cloud Sync is disabled until Firebase is configured."
                : "Our members are specialized in various digital disciplines. Managed via secure administrative protocols on Firebase."}
            </p>
          </div>
          
          <div className="w-full md:w-auto flex flex-col gap-8">
             <div className="flex border-b border-white/10 pb-4 overflow-x-auto no-scrollbar">
               {categories.map(cat => (
                 <button
                   key={cat}
                   onClick={() => setActiveCategory(cat)}
                   className={`px-5 py-2 text-[10px] font-mono uppercase tracking-widest transition-all whitespace-nowrap ${
                     activeCategory === cat ? 'text-[#ff4d00] font-bold' : 'text-slate-600 hover:text-white'
                   }`}
                 >
                   {cat}
                 </button>
               ))}
             </div>
             <div className="relative">
               <input 
                  type="text" 
                  placeholder="SEARCH_INDEX" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-transparent border-b border-white/10 text-white font-mono text-[11px] py-4 w-full focus:outline-none focus:border-[#ff4d00] transition-colors uppercase tracking-[0.3em] placeholder:text-slate-800"
               />
               <div className="absolute right-0 bottom-4 font-mono text-[9px] text-slate-800">
                  STATUS: {isLoading ? 'SYNCING...' : (isOfflineMode ? 'LOCAL_DATA' : `CLOUD_INDEX [${filteredPortfolios.length}]`)}
               </div>
             </div>
          </div>
        </div>

        {isLoading ? (
          <div className="py-40 text-center font-mono text-[10px] uppercase tracking-[0.5em] text-[#ff4d00] animate-pulse">
            Initializing_Cloud_Sync...
          </div>
        ) : (
          <PortfolioGrid portfolios={filteredPortfolios} />
        )}
      </section>

      <section id="about" className="px-6 py-24 border-t border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="flex flex-col justify-between py-2">
                  <h3 className="text-4xl lg:text-7xl font-serif leading-[0.95] tracking-tighter">
                      We are the embodiment of <span className="italic">infinite curiosity</span>.
                  </h3>
                  <div className="mt-12 lg:mt-0">
                      <span className="block font-mono text-[10px] text-slate-600 uppercase mb-4 tracking-[0.4em] font-bold">Est. MMXXIV</span>
                      <p className="text-lg lg:text-xl text-slate-400 font-light leading-relaxed max-w-md">
                          Our mission is simple: To provide inspiration through authentic, minimalist, and functional ICT works.
                      </p>
                  </div>
              </div>
              <div className="space-y-12">
                  <div className="grid grid-cols-2 gap-8">
                      <div className="border-l border-white/10 pl-6">
                          <span className="block font-serif italic text-3xl mb-2 text-[#ff4d00]">{portfolios.length}</span>
                          <span className="block font-mono text-[8px] uppercase text-slate-500 tracking-widest">Records Found</span>
                      </div>
                      <div className="border-l border-white/10 pl-6">
                          <span className="block font-serif italic text-3xl mb-2 text-[#ff4d00]">
                            {isOfflineMode ? "Local" : "Cloud"}
                          </span>
                          <span className="block font-mono text-[8px] uppercase text-slate-500 tracking-widest">Database Type</span>
                      </div>
                  </div>
                  <div className="p-8 border border-white/5 rounded-sm italic text-slate-500 font-serif text-2xl leading-snug bg-white/[0.01]">
                      "Good design is not what looks beautiful, but what feels <span className="text-white not-italic font-sans font-bold uppercase text-[10px] tracking-widest">honest</span>."
                  </div>
              </div>
          </div>
      </section>
    </main>
  );
};

export default Home;
