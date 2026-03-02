
import React, { useState, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import PortfolioDetail from './components/PortfolioDetail';
import AIConsultant from './components/AIConsultant';
import CustomCursor from './components/CustomCursor';
import AdminPortal from './components/AdminPortal';
import BackgroundVectors from './components/BackgroundVectors';
import { db, portfoliosRef, onSnapshot, query, orderBy, doc, setDoc } from './firebase';
import { PORTFOLIOS as INITIAL_PORTFOLIOS } from './constants';
import { PortfolioItem } from './types';

const App: React.FC = () => {
  const [portfolios, setPortfolios] = useState<PortfolioItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isOfflineMode, setIsOfflineMode] = useState(false);

  // Subscribe to Firestore real-time updates with Fallback
  useEffect(() => {
    let unsubscribe = () => {};

    try {
      const q = query(portfoliosRef, orderBy('name', 'asc'));
      unsubscribe = onSnapshot(q, 
        (snapshot) => {
          const data = snapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
          })) as PortfolioItem[];
          
          if (data.length === 0 && !isOfflineMode) {
            // Jika database kosong, kita bisa isi dengan data awal DAN upload ke Firestore
            setPortfolios(INITIAL_PORTFOLIOS);
            
            // Auto-sync initial data to Firestore
            INITIAL_PORTFOLIOS.forEach(async (p) => {
              try {
                const { id, ...dataWithoutId } = p;
                // Ensure externalUrl is included if it exists
                await setDoc(doc(db, "portfolios", id), dataWithoutId);
                console.log(`Synced ${p.name} to Firestore`);
              } catch (err) {
                console.error(`Error syncing ${p.name}:`, err);
              }
            });
          } else {
            setPortfolios(data);
          }
          setIsLoading(false);
          setIsOfflineMode(false);
        }, 
        (error) => {
          console.warn("Firebase Connection Error. Entering Fallback/Offline Mode:", error.message);
          // FALLBACK: Jika Firebase gagal (API belum aktif/config salah), gunakan data lokal
          setPortfolios(INITIAL_PORTFOLIOS);
          setIsLoading(false);
          setIsOfflineMode(true);
        }
      );
    } catch (err) {
      console.error("Critical Sync Error:", err);
      setPortfolios(INITIAL_PORTFOLIOS);
      setIsLoading(false);
      setIsOfflineMode(true);
    }

    return () => unsubscribe();
  }, []);

  const filteredPortfolios = useMemo(() => {
    return portfolios.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            p.role.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || p.role.includes(activeCategory);
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory, portfolios]);

  return (
    <Router>
      <div className="relative min-h-screen selection:bg-[#ff4d00] selection:text-white bg-[#080808]">
        <CustomCursor />
        <BackgroundVectors />
        <Header onOpenAdmin={() => setIsAdminOpen(true)} />
        
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                portfolios={portfolios}
                filteredPortfolios={filteredPortfolios}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                isLoading={isLoading}
                isOfflineMode={isOfflineMode}
              />
            } 
          />
          <Route 
            path="/portfolio/:id" 
            element={<PortfolioDetail portfolios={portfolios} />} 
          />
        </Routes>

        <footer className="px-10 py-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 bg-black/90 backdrop-blur-sm relative z-10">
            <div className="font-mono text-[9px] uppercase tracking-[0.5em] text-slate-700">
                © ARCHIVE_2024 / KELOMPOK_4_STUDIO
            </div>
            <div className="flex gap-12">
                <a href="#" className="font-mono text-[9px] uppercase tracking-[0.3em] hover:text-[#ff4d00] transition-colors">Instagram</a>
                <a href="#" className="font-mono text-[9px] uppercase tracking-[0.3em] hover:text-[#ff4d00] transition-colors">GitHub</a>
                <a href="#" className="font-mono text-[9px] uppercase tracking-[0.3em] hover:text-[#ff4d00] transition-colors">LinkedIn</a>
            </div>
        </footer>

        {isAdminOpen && (
          <AdminPortal 
            portfolios={portfolios} 
            onClose={() => setIsAdminOpen(false)} 
          />
        )}

        <AIConsultant portfolios={portfolios} />
      </div>
    </Router>
  );
};

export default App;
