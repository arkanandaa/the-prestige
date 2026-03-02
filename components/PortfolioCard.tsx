
import React from 'react';
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
    <Link 
      to={`/portfolio/${portfolio.id}`}
      className="group relative flex flex-col bg-[#0a0a0a] border border-white/5 hover:border-[#ff4d00]/30 transition-all duration-500 rounded-sm overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={portfolio.avatar} 
          alt={portfolio.name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
        
        {/* Index Tag */}
        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-2 py-1 border border-white/10">
          <span className="font-mono text-[9px] text-[#ff4d00] font-bold tracking-widest">{paddedIndex}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="text-lg md:text-xl font-serif italic tracking-tighter group-hover:text-[#ff4d00] transition-colors line-clamp-1">
            {portfolio.name}
          </h3>
          <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-500 mt-0.5">
            {portfolio.role}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {portfolio.skills.slice(0, 2).map(skill => (
            <span key={skill} className="px-1.5 py-0.5 bg-white/5 border border-white/5 text-[6px] font-mono text-slate-500 uppercase tracking-tighter">
              {skill}
            </span>
          ))}
        </div>

        <div className="pt-3 border-t border-white/5 flex justify-between items-center">
          <span className="font-mono text-[7px] text-slate-800 uppercase tracking-widest">Archive_Entry</span>
          <div className="w-5 h-5 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#ff4d00] group-hover:border-[#ff4d00] transition-all group-hover:rotate-45">
            <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Hover Accent */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ff4d00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </Link>
  );
};

export default PortfolioCard;
