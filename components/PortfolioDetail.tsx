
import React from 'react';
import { motion } from 'motion/react';
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
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex flex-col items-center justify-center p-10 bg-[#080808]"
      >
        <h2 className="text-4xl font-serif italic mb-8">Record Not Found</h2>
        <Link to="/" className="font-mono text-[10px] uppercase tracking-widest text-[#ff4d00] border border-[#ff4d00] px-6 py-3 hover:bg-[#ff4d00] hover:text-white transition-all">
          Return to Archive
        </Link>
      </motion.div>
    );
  }

  return (
    <main className="relative z-10 pt-24 pb-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <Link to="/" className="inline-flex items-center gap-3 font-mono text-[9px] uppercase tracking-widest text-slate-500 hover:text-[#ff4d00] transition-colors mb-12 group">
            <svg className="w-3 h-3 transform group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back_To_Archive
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="bg-white/[0.02] border border-white/5 p-6 md:p-12 rounded-sm shadow-2xl"
        >
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 border-b border-white/10 pb-12 mb-12">
            <div className="flex-1">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="h-[1px] w-8 bg-[#ff4d00]"></div>
                <span className="font-mono text-[8px] text-white/40 uppercase tracking-[0.6em]">
                  ARCHIVE_REF_{portfolio.id.slice(0,8)}
                </span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-5xl md:text-7xl font-serif italic tracking-tighter leading-[0.85] mb-4"
              >
                {portfolio.name}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg font-mono uppercase tracking-[0.2em] text-slate-400 mb-6"
              >
                {portfolio.role}
              </motion.p>
              
              {portfolio.externalUrl && (
                <motion.a 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  href={portfolio.externalUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 px-8 py-4 bg-[#ff4d00] text-white font-mono text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all duration-300 mb-8 group rounded-sm shadow-lg shadow-[#ff4d00]/20"
                >
                  Personal Portfolio
                  <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              )}

              <div className="flex flex-wrap gap-2">
                {portfolio.skills.map((skill, idx) => (
                  <motion.span 
                    key={skill} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + (idx * 0.05) }}
                    className="px-2 py-0.5 bg-white/5 border border-white/10 font-mono text-[8px] uppercase tracking-widest text-slate-400"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-full md:w-48 aspect-[3/4] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700 border border-white/10"
            >
              <img 
                src={portfolio.avatar} 
                alt={portfolio.name} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Left Column: Summary & Education */}
            <div className="lg:col-span-1 space-y-12">
              <motion.section
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#ff4d00] mb-6 font-bold flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-[#ff4d00]"></span>
                  Summary
                </h3>
                <p className="text-slate-300 font-light leading-relaxed text-base italic">
                  "{portfolio.summary}"
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#ff4d00] mb-6 font-bold flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-[#ff4d00]"></span>
                  Education
                </h3>
                <div className="p-4 bg-white/[0.01] border border-white/5 rounded-sm">
                  <p className="text-slate-300 font-mono text-[10px] uppercase tracking-widest leading-relaxed">
                    {portfolio.education}
                  </p>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
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
              </motion.section>
            </div>

            {/* Right Column: Experience & Details */}
            <div className="lg:col-span-3 space-y-12">
              <section>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#ff4d00] mb-10 font-bold flex items-center gap-3"
                >
                  <span className="w-6 h-[1px] bg-[#ff4d00]"></span>
                  Professional_Experience
                </motion.h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {portfolio.experience && portfolio.experience.length > 0 ? (
                    portfolio.experience.map((exp, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative pl-8 border-l border-white/10 pb-4"
                      >
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
                      </motion.div>
                    ))
                  ) : (
                    <p className="text-slate-600 italic font-serif">No experience records found in cloud archive.</p>
                  )}
                </div>
              </section>

              <motion.section 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="pt-12 border-t border-white/10"
              >
                <h3 className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#ff4d00] mb-6 font-bold flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-[#ff4d00]"></span>
                  Extended_Bio
                </h3>
                <p className="text-slate-400 font-light leading-relaxed whitespace-pre-wrap text-base mb-12">
                  {portfolio.description}
                </p>

                <div className="p-12 border border-[#ff4d00]/20 bg-[#ff4d00]/5 rounded-sm text-center">
                  <h4 className="text-4xl font-serif italic mb-4">Ready to elevate your project?</h4>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-8 max-w-xl mx-auto">
                    This talent is currently available for high-impact collaborations. Secure this expertise before the archive entry is locked.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href={`mailto:hire@kelompok4.studio?subject=Inquiry: ${portfolio.name}`}
                      className="px-10 py-4 bg-white text-black font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-[#ff4d00] hover:text-white transition-all"
                    >
                      Initialize_Contact
                    </a>
                    {portfolio.externalUrl && (
                      <a 
                        href={portfolio.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-4 border border-white/10 text-white font-mono text-[10px] font-bold uppercase tracking-widest hover:border-[#ff4d00] hover:text-[#ff4d00] transition-all"
                      >
                        View_External_Work
                      </a>
                    )}
                  </div>
                </div>
              </motion.section>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default PortfolioDetail;
