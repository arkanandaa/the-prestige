
import React from 'react';

import { motion } from 'motion/react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex flex-col justify-center px-6 pt-24 pb-12">
      <div className="max-w-[1600px] mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="flex justify-between items-start mb-8"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#ff4d00] font-bold">Volume 01 — 2024 Release</span>
          <div className="hidden md:flex gap-8 font-mono text-[8px] text-slate-600 uppercase tracking-widest">
            <span>Lat: -6.2088</span>
            <span>Lng: 106.8456</span>
            <span>Enc: AES-256</span>
          </div>
        </motion.div>
        
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-9"
          >
            <h1 className="text-[10vw] lg:text-[12vw] leading-[0.8] font-serif italic tracking-tighter">
              The <br />
              <span className="ml-[5vw] not-italic text-outline hover:text-white transition-all duration-700">Prestige</span>
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-3 pb-4"
          >
            <p className="font-mono text-[10px] leading-relaxed text-slate-500 uppercase tracking-widest border-l border-[#ff4d00] pl-6">
              The elite digital repository. We don't just build; we engineer legacies. Every talent here is a master of their craft, vetted for excellence and driven by innovation.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="mt-16 flex justify-between items-center border-t border-white/10 pt-8"
        >
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <div className="w-1.5 h-1.5 bg-[#ff4d00] rounded-full animate-pulse"></div>
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-slate-500">System.Status: Active</span>
            </div>
            <div className="h-4 w-[1px] bg-white/10"></div>
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-slate-800 hidden sm:block">Buffer_Loaded: 100%</span>
          </div>
          
          <div>
            <a href="#explore" className="group relative inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-[#ff4d00] transition-colors">
              <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#ff4d00] group-hover:border-[#ff4d00] transition-all duration-500 transform group-hover:-translate-y-1">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7-7v14" />
                </svg>
              </span>
              <span className="hidden sm:inline">Explore_Archive</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Background Decor */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.02 }}
        transition={{ duration: 2 }}
        className="absolute top-1/2 right-0 -translate-y-1/2 -z-10 select-none pointer-events-none"
      >
          <span className="text-[50vw] font-bold leading-none">04</span>
      </motion.div>
    </section>
  );
};

export default Hero;
