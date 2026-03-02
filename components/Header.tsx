
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface Props {
  onOpenAdmin: () => void;
}

const Header: React.FC<Props> = ({ onOpenAdmin }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference py-8 px-10">
      <div className="max-w-[1800px] mx-auto flex items-center justify-between uppercase tracking-[0.3em] text-[10px] font-bold">
        <div 
          className="cursor-pointer group flex items-center gap-4 interactive"
          onClick={handleLogoClick}
        >
          <span className="w-8 h-[1px] bg-white group-hover:w-12 transition-all"></span>
          <span>The Prestige / Archive</span>
        </div>
        
        <nav className="flex items-center gap-12">
          {location.pathname === '/' ? (
            <>
              <a href="#explore" className="hover:text-[#ff4d00] transition-colors underline-offset-8 hover:underline interactive">Selected Works</a>
              <a href="#about" className="hover:text-[#ff4d00] transition-colors underline-offset-8 hover:underline interactive">Profile</a>
            </>
          ) : (
            <Link to="/" className="hover:text-[#ff4d00] transition-colors underline-offset-8 hover:underline interactive">Home</Link>
          )}
          <button 
            onClick={onOpenAdmin}
            className="bg-white text-black px-5 py-2 rounded-full hover:bg-[#ff4d00] hover:text-white transition-all transform active:scale-95 interactive font-mono text-[9px] tracking-widest"
          >
            MEMBER_PORTAL
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
