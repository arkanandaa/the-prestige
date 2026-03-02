
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PortfolioItem } from '../types';

interface Props {
  portfolios: PortfolioItem[];
}

const PortfolioDetail: React.FC<Props> = ({ portfolios }) => {
  const { id } = useParams<{ id: string }>();
  const portfolio = portfolios.find(p => p.id === id);

  if (!portfolio) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10 bg-[#080808]">
        <h2 className="text-4xl font-serif italic mb-8">Record Not Found</h2>
        <Link to="/" className="font-mono text-[10px] uppercase tracking-widest text-[#ff4d00] border border-[#ff4d00] px-6 py-3 hover:bg-[#ff4d00] hover:text-white transition-all">
          Return to Archive
        </Link>
      </div>
    );
  }

  return (
    <main className="relative z-10 pt-24 pb-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <Link to="/" className="inline-flex items-center gap-3 font-mono text-[9px] uppercase tracking-widest text-slate-500 hover:text-[#ff4d00] transition-colors mb-12 group">
          <svg className="w-3 h-3 transform group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back_To_Archive
        </Link>

        <div className="bg-white/[0.02] border border-white/5 p-6 md:p-12 rounded-sm shadow-2xl">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 border-b border-white/10 pb-12 mb-12">
            <div className="flex-1">
              <span className="font-mono text-[9px] text-[#ff4d00] uppercase tracking-[0.4em] font-bold block mb-4">Talent_Profile / {portfolio.id}</span>
              <h1 className="text-5xl md:text-7xl font-serif italic tracking-tighter leading-[0.85] mb-4">{portfolio.name}</h1>
              <p className="text-lg font-mono uppercase tracking-[0.2em] text-slate-400 mb-6">{portfolio.role}</p>
              
              {portfolio.externalUrl && (
                <a 
                  href={portfolio.externalUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 px-8 py-4 bg-[#ff4d00] text-white font-mono text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all duration-300 mb-8 group rounded-sm shadow-lg shadow-[#ff4d00]/20"
                >
                  Personal Portfolio
                  <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              )}

              <div className="flex flex-wrap gap-2">
                {portfolio.skills.map(skill => (
                  <span key={skill} className="px-2 py-0.5 bg-white/5 border border-white/10 font-mono text-[8px] uppercase tracking-widest text-slate-400">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full md:w-48 aspect-[3/4] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700 border border-white/10">
              <img 
                src={portfolio.avatar} 
                alt={portfolio.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Left Column: Summary & Education */}
            <div className="lg:col-span-1 space-y-12">
              <section>
                <h3 className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#ff4d00] mb-6 font-bold flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-[#ff4d00]"></span>
                  Summary
                </h3>
                <p className="text-slate-300 font-light leading-relaxed text-base italic">
                  "{portfolio.summary}"
                </p>
              </section>

              <section>
                <h3 className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#ff4d00] mb-6 font-bold flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-[#ff4d00]"></span>
                  Education
                </h3>
                <div className="p-4 bg-white/[0.01] border border-white/5 rounded-sm">
                  <p className="text-slate-300 font-mono text-[10px] uppercase tracking-widest leading-relaxed">
                    {portfolio.education}
                  </p>
                </div>
              </section>

              <section>
                <h3 className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#ff4d00] mb-6 font-bold flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-[#ff4d00]"></span>
                  Stats
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 border border-white/5 text-center">
                    <span className="block text-3xl font-serif italic text-white mb-1">{portfolio.projectsCount}</span>
                    <span className="block font-mono text-[7px] uppercase text-slate-600 tracking-widest">Projects</span>
                  </div>
                  <div className="p-4 border border-white/5 text-center">
                    <span className="block text-3xl font-serif italic text-white mb-1">{portfolio.skills.length}</span>
                    <span className="block font-mono text-[7px] uppercase text-slate-600 tracking-widest">Expertise</span>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column: Experience & Details */}
            <div className="lg:col-span-3 space-y-12">
              <section>
                <h3 className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#ff4d00] mb-10 font-bold flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-[#ff4d00]"></span>
                  Professional_Experience
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {portfolio.experience && portfolio.experience.length > 0 ? (
                    portfolio.experience.map((exp, idx) => (
                      <div key={idx} className="relative pl-8 border-l border-white/10 pb-4">
                        <div className="absolute left-[-4px] top-0 w-1.5 h-1.5 bg-[#ff4d00] rounded-full"></div>
                        <div className="flex flex-col gap-2 mb-3">
                          <div className="flex justify-between items-start">
                            <h4 className="text-xl font-serif italic text-white">{exp.title}</h4>
                            <span className="font-mono text-[8px] text-slate-600 border border-white/10 px-2 py-0.5 rounded-full h-fit">
                              {exp.year}
                            </span>
                          </div>
                          <p className="font-mono text-[9px] uppercase tracking-widest text-slate-500">{exp.company}</p>
                        </div>
                        <p className="text-slate-400 font-light leading-relaxed text-sm">
                          {exp.description}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-slate-600 italic font-serif">No experience records found in cloud archive.</p>
                  )}
                </div>
              </section>

              <section className="pt-12 border-t border-white/10">
                <h3 className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#ff4d00] mb-6 font-bold flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-[#ff4d00]"></span>
                  Extended_Bio
                </h3>
                <p className="text-slate-400 font-light leading-relaxed whitespace-pre-wrap text-base">
                  {portfolio.description}
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PortfolioDetail;
