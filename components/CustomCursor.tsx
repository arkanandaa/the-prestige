
import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      
      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top = `${y}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${x}px`;
        ringRef.current.style.top = `${y}px`;
      }

      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, input, .interactive, .list-item-hover');

      if (isInteractive) {
        document.body.classList.add('cursor-active');
      } else {
        document.body.classList.remove('cursor-active');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <>
      <div 
        ref={dotRef} 
        className="fixed pointer-events-none z-[9999] hidden md:block mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div className="relative flex items-center justify-center">
          {/* Small Center Dot */}
          <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_8px_rgba(255,77,0,0.8)]"></div>
          
          {/* Technical Crosshair Lines */}
          <div className="absolute w-4 h-[1px] bg-white/40"></div>
          <div className="absolute h-4 w-[1px] bg-white/40"></div>
          
          {/* Corner Accents */}
          <div className="absolute -top-2 -left-2 w-1 h-1 border-t border-l border-[#ff4d00]"></div>
          <div className="absolute -top-2 -right-2 w-1 h-1 border-t border-r border-[#ff4d00]"></div>
          <div className="absolute -bottom-2 -left-2 w-1 h-1 border-b border-l border-[#ff4d00]"></div>
          <div className="absolute -bottom-2 -right-2 w-1 h-1 border-b border-r border-[#ff4d00]"></div>
        </div>
      </div>
      <div 
        ref={ringRef} 
        className="cursor-ring hidden md:block border-[#ff4d00]/20 w-8 h-8" 
      />
    </>
  );
};

export default CustomCursor;
