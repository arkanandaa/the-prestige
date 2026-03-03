
import React from 'react';
import { motion } from 'motion/react';

const BackgroundVectors: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden select-none">
      {/* Blueprint Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '80px 80px' 
        }}
      ></div>

      {/* Subtle Dot Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.05]" 
           style={{ backgroundImage: 'radial-gradient(circle, #ff4d00 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Large Outlined Circles */}
      <svg className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] text-white opacity-[0.02]" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.1" />
        <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="1 2" />
      </svg>

      {/* Bottom Left Technical Shapes */}
      <svg className="absolute bottom-[5%] left-[-2%] w-[30vw] h-[30vw] text-[#ff4d00] opacity-[0.03] rotate-12" viewBox="0 0 100 100">
        <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="0.2" />
        <path d="M0 50 L100 50 M50 0 L50 100" fill="none" stroke="currentColor" strokeWidth="0.1" />
      </svg>

      {/* Floating Data Nodes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.03, 0.08, 0.03],
            y: [0, -30, 0],
            x: [0, 15, 0]
          }}
          transition={{ 
            duration: 8 + i, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: i * 1.5
          }}
          className="absolute"
          style={{ 
            top: `${10 + (i * 12)}%`, 
            left: `${5 + (i * 12)}%` 
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-1 h-1 bg-[#ff4d00] rounded-full shadow-[0_0_5px_rgba(255,77,0,0.5)]"></div>
            <div className="h-[1px] w-16 bg-gradient-to-r from-[#ff4d00] to-transparent opacity-20"></div>
            <span className="font-mono text-[6px] uppercase tracking-[0.3em] text-slate-800">Node_0{i+1}</span>
          </div>
        </motion.div>
      ))}

      {/* Technical Vertical Rails */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white opacity-[0.01]"></div>
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white opacity-[0.01]"></div>

      {/* Floating Crosshairs / Markers */}
      <div className="absolute top-[20%] left-[15%] w-12 h-12 text-white opacity-[0.05]">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-current"></div>
        <div className="absolute left-1/2 top-0 w-[1px] h-full bg-current"></div>
      </div>

      <div className="absolute bottom-[30%] right-[10%] w-8 h-8 text-[#ff4d00] opacity-[0.08]">
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-current"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-current"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current"></div>
      </div>

      {/* Faint Technical Labels */}
      <div className="absolute top-1/3 -left-16 rotate-90 font-mono text-[7px] uppercase tracking-[1.5em] text-white/5 select-none">
        System_Architecture_V.4.0
      </div>
      <div className="absolute bottom-1/3 -right-16 -rotate-90 font-mono text-[7px] uppercase tracking-[1.5em] text-white/5 select-none">
        Encrypted_Data_Stream
      </div>

      {/* Subtle Moving Particles (Animated Outlines) */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 border border-white/5 rounded-full animate-[spin_60s_linear_infinite]"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 border border-[#ff4d00]/5 rounded-full animate-[spin_90s_linear_infinite_reverse]"></div>
    </div>
  );
};

export default BackgroundVectors;
