
import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, input, .interactive, .list-item-hover');

      if (isInteractive) {
        document.body.classList.add('cursor-active');
      } else {
        document.body.classList.remove('cursor-active');
      }
    };

    let animationFrameId: number;

    const updateCursor = () => {
      // Smooth interpolation
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.2;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.2;
      
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.1;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.1;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(updateCursor);
    };

    window.addEventListener('mousemove', onMouseMove);
    animationFrameId = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div 
        ref={dotRef} 
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block mix-blend-difference"
      >
        <div className="w-1.5 h-1.5 bg-[#ff4d00] rounded-full shadow-[0_0_10px_rgba(255,77,0,0.5)]"></div>
      </div>
      <div 
        ref={ringRef} 
        className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:block border border-[#ff4d00]/30 w-8 h-8 rounded-full transition-size duration-300" 
      />
    </>
  );
};

export default CustomCursor;
