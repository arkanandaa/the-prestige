
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PortfolioItem } from '../types';

interface Props {
  portfolio: PortfolioItem;
  index: number;
  isActive?: boolean;
}

const PortfolioCard: React.FC<Props> = ({ portfolio, index }) => {
  const paddedIndex = (index + 1).toString().padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
    >
      <Link 
        to={`/portfolio/${portfolio.id}`}
        className="group relative flex items-center justify-between py-8 px-6 border-b border-white/5 hover:bg-white/[0.02] transition-all duration-300 overflow-visible"
      >
        {/* Left Side: Index & Name */}
        <div className="flex items-center gap-8 md:gap-16 z-10">
          <span className="font-mono text-[10px] text-slate-700 group-hover:text-[#ff4d00] transition-colors">
            {paddedIndex}
          </span>
          <div>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif italic tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
              {portfolio.name}
            </h3>
            <div className="flex items-center gap-4 mt-2 group-hover:translate-x-4 transition-transform duration-500 delay-75">
               <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-slate-500">
                {portfolio.role}
              </span>
              <div className="h-[1px] w-8 bg-white/10 group-hover:w-16 group-hover:bg-[#ff4d00] transition-all duration-500"></div>
            </div>
          </div>
        </div>

        {/* Right Side: Skills & Action */}
        <div className="hidden md:flex items-center gap-12 z-10">
          <div className="flex gap-3">
            {portfolio.skills.slice(0, 3).map(skill => (
              <span key={skill} className="font-mono text-[8px] uppercase tracking-widest text-slate-600 group-hover:text-slate-400 transition-colors">
                {skill}
              </span>
            ))}
          </div>
          <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#ff4d00] group-hover:border-[#ff4d00] transition-all duration-500">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>

        {/* Hover Image Preview (Floating) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 pointer-events-none opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 z-20 rotate-6 group-hover:rotate-0">
           <div className="w-full h-full border-4 border-white/10 shadow-2xl overflow-hidden">
              <img 
                src={portfolio.avatar} 
                alt={portfolio.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
           </div>
        </div>

        {/* Background Accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff4d00]/0 to-[#ff4d00]/0 group-hover:from-[#ff4d00]/5 transition-all duration-500"></div>
      </Link>
    </motion.div>
  );
};

export default PortfolioCard;
