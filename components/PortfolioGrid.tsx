
import React, { useState } from 'react';
import PortfolioCard from './PortfolioCard';
import { PortfolioItem } from '../types';
import { Link } from 'react-router-dom';

interface Props {
  portfolios: PortfolioItem[];
}

const PortfolioGrid: React.FC<Props> = ({ portfolios }) => {
  if (portfolios.length === 0) {
    return (
      <div className="py-40 text-center font-serif italic text-4xl text-slate-700">
        No records found.
      </div>
    );
  }

  return (
    <div className="flex flex-col border-t border-white/5 pt-12 space-y-2">
      {portfolios.map((portfolio, idx) => (
        <PortfolioCard 
          key={portfolio.id} 
          portfolio={portfolio} 
          index={idx} 
        />
      ))}
    </div>
  );
};

export default PortfolioGrid;
