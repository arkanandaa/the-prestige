
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
    >
      <Link 
        to={`/portfolio/${portfolio.id}`}
        className="group block relative bg-[#111] border border-white/5 rounded-xl overflow-hidden transition-all duration-500 hover:border-[#ff4d00]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
      >
        {/* Image Container */}
        <div className="aspect-[4/5] overflow-hidden relative">
          <img 
            src={portfolio.avatar} 
            alt={portfolio.name} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
          
          {/* Floating Role Tag */}
          <div className="absolute top-4 left-4">
             <span className="px-3 py-1 bg-black/80 backdrop-blur-md border border-white/10 text-[#ff4d00] font-mono text-[8px] uppercase tracking-widest rounded-full">
               {portfolio.role}
             </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 relative">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-serif italic tracking-tight group-hover:text-[#ff4d00] transition-colors">
                {portfolio.name}
              </h3>
              <p className="font-mono text-[9px] text-slate-500 uppercase tracking-widest mt-1">
                Member_ID: {portfolio.id.slice(0, 8)}
              </p>
            </div>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#ff4d00] group-hover:border-[#ff4d00] transition-all duration-500">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
            {portfolio.skills.slice(0, 3).map(skill => (
              <span key={skill} className="font-mono text-[8px] uppercase tracking-widest text-slate-400 bg-white/5 px-2 py-1 rounded-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Hover Highlight */}
        <div className="absolute top-0 left-0 w-full h-1 bg-[#ff4d00] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </Link>
    </motion.div>
  );
};

export default PortfolioCard;
