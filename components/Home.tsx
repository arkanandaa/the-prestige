
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Hero from './Hero';
import PortfolioGrid from './PortfolioGrid';
import { PortfolioItem } from '../types';

const SystemMetrics: React.FC = () => {
  const [metrics, setMetrics] = useState({ cpu: 0, mem: 0, net: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        cpu: Math.floor(Math.random() * 15) + 5,
        mem: Math.floor(Math.random() * 10) + 40,
        net: Math.floor(Math.random() * 100) + 200
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-6 font-mono text-[8px] uppercase tracking-widest text-slate-600">
      <div className="flex items-center gap-2">
        <span className="w-1 h-1 bg-[#ff4d00] rounded-full animate-pulse"></span>
        CPU_LOAD: {metrics.cpu}%
      </div>
      <div className="flex items-center gap-2">
        <span className="w-1 h-1 bg-[#ff4d00] rounded-full animate-pulse"></span>
        MEM_USAGE: {metrics.mem}%
      </div>
      <div className="flex items-center gap-2">
        <span className="w-1 h-1 bg-[#ff4d00] rounded-full animate-pulse"></span>
        NET_TRAFFIC: {metrics.net}KB/S
      </div>
    </div>
  );
};

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
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#ff4d00] font-bold">DIRECTORY_INDEX</span>
              <div className="h-[1px] w-12 bg-white/10"></div>
            </div>
            <h2 className="text-6xl md:text-8xl font-serif italic mb-6 tracking-tighter leading-[0.85]">The Talent</h2>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 leading-relaxed max-w-lg bg-black/30 p-3 rounded-sm backdrop-blur-sm border border-white/5">
              {isOfflineMode 
                ? "NOTICE: Running in Local Fallback Mode. Cloud Sync is disabled until Firebase is configured."
                : "We provide access to elite digital talent—top-tier professionals who are masters of their craft, delivering exceptional results through technical precision and creative excellence."}
            </p>
          </div>
          
          <div className="w-full md:w-auto flex flex-col gap-8">
             <div className="flex border-b border-white/10 pb-4 overflow-x-auto no-scrollbar">
               {categories.map(cat => (
                 <button
                   key={cat}
                   onClick={() => setActiveCategory(cat)}
                   className={`px-5 py-2 text-[10px] font-mono uppercase tracking-widest transition-all whitespace-nowrap relative group ${
                     activeCategory === cat ? 'text-[#ff4d00] font-bold' : 'text-slate-600 hover:text-white'
                   }`}
                 >
                   {cat}
                   {activeCategory === cat && (
                     <motion.div 
                        layoutId="activeCategory"
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ff4d00]"
                     />
                   )}
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

      <section className="px-6 py-32 border-t border-white/5 bg-black overflow-hidden relative">
          {/* Animated Background Accent */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05],
              rotate: [0, 90, 180, 270, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none"
          />

          <div className="max-w-[1600px] mx-auto relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {[
                    {
                      id: '01',
                      title: 'Vetted_Excellence',
                      heading: 'Only the Top 1%',
                      desc: "Every talent in our archive undergoes a rigorous technical and creative evaluation. We only represent those who push the boundaries of what's possible."
                    },
                    {
                      id: '02',
                      title: 'Strategic_Impact',
                      heading: 'Results Driven',
                      desc: "We don't just deliver code or designs; we deliver strategic assets that drive business growth, user engagement, and technical superiority."
                    },
                    {
                      id: '03',
                      title: 'Future_Proof',
                      heading: 'Modern Stack',
                      desc: "Our members are masters of the most advanced digital technologies, ensuring your project is built for the future, not just for today."
                    }
                  ].map((feature, i) => (
                    <motion.div 
                      key={feature.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 }}
                      className="space-y-6 group"
                    >
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-[8px] text-white/30 uppercase tracking-[0.4em]">{feature.id} // {feature.title}</span>
                          <div className="h-[1px] flex-grow bg-white/5 group-hover:bg-[#ff4d00]/30 transition-colors"></div>
                        </div>
                        <h4 className="text-3xl font-serif italic group-hover:text-[#ff4d00] transition-colors">{feature.heading}</h4>
                        <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest leading-relaxed">
                            {feature.desc}
                        </p>
                    </motion.div>
                  ))}
              </div>
          </div>
      </section>

      <section id="about" className="px-6 py-32 border-t border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md relative overflow-hidden">
          {/* Technical Grid Accent */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }}>
          </div>

          <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col justify-between py-2"
              >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-1 h-1 bg-[#ff4d00] rounded-full"></div>
                    <span className="font-mono text-[8px] text-slate-600 uppercase tracking-[0.6em]">EST_MMXXIV</span>
                  </div>
                  <h3 className="text-4xl lg:text-7xl font-serif leading-[0.95] tracking-tighter">
                      We are the embodiment of <span className="italic">infinite curiosity</span>.
                  </h3>
                  <div className="mt-12 lg:mt-0">
                      <p className="text-lg lg:text-xl text-slate-400 font-light leading-relaxed max-w-md">
                          Our mission is simple: To provide inspiration through authentic, minimalist, and functional ICT works.
                      </p>
                  </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                  <div className="grid grid-cols-2 gap-8">
                      <div className="border-l border-white/10 pl-6 group">
                          <span className="block font-serif italic text-3xl mb-2 text-[#ff4d00] group-hover:scale-110 transition-transform origin-left inline-block">{portfolios.length}</span>
                          <span className="block font-mono text-[7px] uppercase text-slate-500 tracking-[0.3em]">DATA_RECORDS</span>
                      </div>
                      <div className="border-l border-white/10 pl-6 group">
                          <span className="block font-serif italic text-3xl mb-2 text-[#ff4d00] group-hover:scale-110 transition-transform origin-left inline-block">
                            {isOfflineMode ? "Local" : "Cloud"}
                          </span>
                          <span className="block font-mono text-[7px] uppercase text-slate-500 tracking-[0.3em]">STORAGE_TYPE</span>
                      </div>
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="p-8 border border-white/5 rounded-sm italic text-slate-500 font-serif text-2xl leading-snug bg-white/[0.01] relative group"
                  >
                      <div className="absolute top-0 left-0 w-1 h-0 bg-[#ff4d00] group-hover:h-full transition-all duration-500"></div>
                      "Good design is not what looks beautiful, but what feels <span className="text-white not-italic font-sans font-bold uppercase text-[10px] tracking-widest">honest</span>."
                  </motion.div>
              </motion.div>
          </div>
      </section>
    </main>
  );
};

export default Home;
