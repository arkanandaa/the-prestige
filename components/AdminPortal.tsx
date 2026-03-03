
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PortfolioItem } from '../types';
import { db, doc, addDoc, setDoc, deleteDoc, portfoliosRef } from '../firebase';
import { PORTFOLIOS } from '../constants';

interface Props {
  portfolios: PortfolioItem[];
  onClose: () => void;
}

const AdminPortal: React.FC<Props> = ({ portfolios, onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<PortfolioItem>({
    id: '',
    name: '',
    role: '',
    summary: '',
    description: '',
    avatar: '',
    skills: [],
    experience: [],
    education: '',
    projectsCount: 0,
    externalUrl: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'atmin' && password === 'paswut') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('AUTHENTICATION_FAILED: Invalid credentials.');
    }
  };

  const handleEdit = (item: PortfolioItem) => {
    setEditingId(item.id);
    setFormData(item);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to remove this record from the cloud archive?')) {
      try {
        setIsProcessing(true);
        const docRef = doc(db, "portfolios", id);
        await deleteDoc(docRef);
      } catch (err) {
        alert("Delete failed: " + err);
      } finally {
        setIsProcessing(false);
      }
    }
  };

  const handleSyncInitial = async () => {
    if (confirm('This will sync all initial data from constants to the cloud archive. Existing records with same IDs will be updated. Continue?')) {
      setIsProcessing(true);
      try {
        for (const p of PORTFOLIOS) {
          const { id, ...dataWithoutId } = p;
          await setDoc(doc(db, "portfolios", id), dataWithoutId);
        }
        alert('Initial data synchronized successfully.');
      } catch (err) {
        alert('Sync failed: ' + err);
      } finally {
        setIsProcessing(false);
      }
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    try {
      const skillsArray = typeof formData.skills === 'string' 
        ? (formData.skills as string).split(',').map(s => s.trim()).filter(s => s !== '')
        : formData.skills;

      // Handle experience if it's passed as a JSON string from the textarea
      let experienceArray = formData.experience;
      if (typeof experienceArray === 'string') {
        try {
          experienceArray = JSON.parse(experienceArray as string);
        } catch (e) {
          console.error("Experience JSON parse error", e);
          experienceArray = [];
        }
      }

      const dataToSave = {
        name: formData.name || '',
        role: formData.role || '',
        summary: formData.summary || '',
        description: formData.description || '',
        avatar: formData.avatar || '',
        skills: skillsArray || [],
        experience: experienceArray || [],
        education: formData.education || '',
        projectsCount: Number(formData.projectsCount) || 0,
        externalUrl: formData.externalUrl || ''
      };

      if (editingId) {
        const docRef = doc(db, "portfolios", editingId);
        await setDoc(docRef, dataToSave, { merge: true });
      } else {
        await addDoc(portfoliosRef, dataToSave);
      }
      resetForm();
    } catch (err) {
      alert("Save failed: " + err);
    } finally {
      setIsProcessing(false);
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({
      id: '',
      name: '',
      role: '',
      summary: '',
      description: '',
      avatar: '',
      skills: [],
      experience: [],
      education: '',
      projectsCount: 0,
      externalUrl: ''
    });
  };

  if (!isLoggedIn) {
    return (
      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 backdrop-blur-sm"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-md border border-white/10 p-10 bg-[#080808]"
          >
            <div className="mb-10 flex justify-between items-center">
              <h2 className="font-serif italic text-3xl">Portal Login</h2>
              <button onClick={onClose} className="font-mono text-[10px] text-slate-500 hover:text-white interactive">ESC</button>
            </div>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block font-mono text-[9px] text-slate-500 uppercase tracking-widest mb-2">Username</label>
                <input 
                  type="text" 
                  value={username || ''}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-white/5 border-b border-white/10 p-3 font-mono text-sm focus:outline-none focus:border-[#ff4d00] transition-colors"
                  autoComplete="off"
                />
              </div>
              <div>
                <label className="block font-mono text-[9px] text-slate-500 uppercase tracking-widest mb-2">Password</label>
                <input 
                  type="password" 
                  value={password || ''}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border-b border-white/10 p-3 font-mono text-sm focus:outline-none focus:border-[#ff4d00] transition-colors"
                />
              </div>
              {error && <p className="font-mono text-[9px] text-red-500 uppercase">{error}</p>}
              <button type="submit" className="w-full bg-white text-black font-mono text-[10px] font-bold py-4 uppercase tracking-[0.2em] hover:bg-[#ff4d00] hover:text-white transition-all interactive">
                Authenticate
              </button>
            </form>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[100] bg-black flex flex-col md:flex-row overflow-hidden"
    >
      <div className="w-full md:w-1/3 border-r border-white/10 flex flex-col h-full overflow-hidden">
          <div className="p-10 border-b border-white/10 flex justify-between items-center bg-[#0a0a0a]">
            <h2 className="font-serif italic text-2xl tracking-tighter">Archive Manager</h2>
            <div className="flex gap-2">
              <button 
                onClick={handleSyncInitial} 
                disabled={isProcessing}
                className="font-mono text-[9px] border border-white/10 text-slate-500 px-3 py-2 hover:border-[#ff4d00] hover:text-[#ff4d00] transition-all interactive disabled:opacity-20"
              >
                SYNC_INITIAL
              </button>
              <button onClick={onClose} className="font-mono text-[10px] bg-white text-black px-4 py-2 hover:bg-[#ff4d00] hover:text-white interactive">LOGOUT</button>
            </div>
          </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {portfolios.map(p => (
            <div key={p.id} className="group flex items-center justify-between p-4 border border-white/5 hover:border-white/20 transition-all bg-white/[0.02]">
              <div>
                <span className="block font-serif text-lg">{p.name}</span>
                <span className="block font-mono text-[9px] text-slate-600 uppercase">{p.role}</span>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleEdit(p)} 
                  disabled={isProcessing}
                  className="p-2 hover:text-[#ff4d00] interactive disabled:opacity-20"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                </button>
                <button 
                  onClick={() => handleDelete(p.id)} 
                  disabled={isProcessing}
                  className="p-2 hover:text-red-500 interactive disabled:opacity-20"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </button>
              </div>
            </div>
          ))}
          <button 
            onClick={resetForm}
            disabled={isProcessing}
            className="w-full p-6 border-2 border-dashed border-white/10 text-slate-600 hover:border-[#ff4d00] hover:text-[#ff4d00] transition-all font-mono text-[10px] tracking-widest interactive mt-4 disabled:opacity-50"
          >
            + ADD_NEW_RECORD
          </button>
        </div>
      </div>

      <div className="flex-1 p-10 md:p-20 overflow-y-auto bg-[#080808]">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12">
            <span className="font-mono text-[9px] text-[#ff4d00] uppercase tracking-[0.4em] font-bold block mb-4">
              {editingId ? 'Edit_Record' : 'Create_Record'}
            </span>
            <h2 className="text-5xl font-serif italic">{editingId ? 'Modify Talent Profile' : 'Inject New Talent'}</h2>
          </div>

          <form onSubmit={handleSave} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div>
                  <label className="block font-mono text-[9px] text-slate-500 uppercase tracking-widest mb-3 font-bold">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border-b border-white/10 p-4 font-mono text-sm focus:outline-none focus:border-[#ff4d00] transition-colors uppercase"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[9px] text-slate-500 uppercase tracking-widest mb-3 font-bold">Professional Role</label>
                  <input 
                    type="text" 
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    className="w-full bg-white/5 border-b border-white/10 p-4 font-mono text-sm focus:outline-none focus:border-[#ff4d00] transition-colors uppercase"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block font-mono text-[9px] text-slate-500 uppercase tracking-widest mb-3 font-bold">Profile Image (Upload or Drive Link)</label>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <label className="flex-1 cursor-pointer bg-white/5 border border-dashed border-white/20 p-4 text-center hover:border-[#ff4d00] transition-all group">
                        <input 
                          type="file" 
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onloadend = () => {
                                setFormData({...formData, avatar: reader.result as string});
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                        />
                        <span className="font-mono text-[10px] text-slate-500 group-hover:text-[#ff4d00]">UPLOAD_LOCAL_FILE</span>
                      </label>
                      {formData.avatar && (
                        <div className="w-16 h-16 border border-white/10 overflow-hidden rounded-sm">
                          <img src={formData.avatar} alt="Preview" className="w-full h-full object-cover" />
                        </div>
                      )}
                    </div>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="PASTE_GOOGLE_DRIVE_LINK"
                        value={formData.avatar?.startsWith('data:') ? '' : formData.avatar}
                        onChange={(e) => {
                          let val = e.target.value;
                          // Basic Drive link to direct link conversion logic
                          if (val.includes('drive.google.com')) {
                            const match = val.match(/\/d\/(.+?)\//);
                            if (match && match[1]) {
                              val = `https://lh3.googleusercontent.com/d/${match[1]}`;
                            }
                          }
                          setFormData({...formData, avatar: val});
                        }}
                        className="w-full bg-white/5 border-b border-white/10 p-4 font-mono text-[10px] focus:outline-none focus:border-[#ff4d00] transition-colors"
                      />
                      <span className="absolute right-0 bottom-4 font-mono text-[8px] text-slate-700">DRIVE_AUTO_CONVERT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block font-mono text-[9px] text-slate-500 uppercase tracking-widest mb-3 font-bold">Professional Summary (ATS Standard)</label>
              <textarea 
                required
                rows={2}
                value={formData.summary}
                onChange={(e) => setFormData({...formData, summary: e.target.value})}
                className="w-full bg-white/5 border border-white/10 p-6 font-mono text-sm focus:outline-none focus:border-[#ff4d00] transition-colors resize-none"
              />
            </div>

            <div>
              <label className="block font-mono text-[9px] text-slate-500 uppercase tracking-widest mb-3 font-bold">Extended Biography</label>
              <textarea 
                required
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full bg-white/5 border border-white/10 p-6 font-mono text-sm focus:outline-none focus:border-[#ff4d00] transition-colors resize-none"
              />
            </div>

            <div>
              <label className="block font-mono text-[9px] text-slate-500 uppercase tracking-widest mb-3 font-bold">Education (ATS Standard)</label>
              <input 
                type="text" 
                required
                value={formData.education}
                onChange={(e) => setFormData({...formData, education: e.target.value})}
                className="w-full bg-white/5 border-b border-white/10 p-4 font-mono text-sm focus:outline-none focus:border-[#ff4d00] transition-colors uppercase"
              />
            </div>

            <div>
              <label className="block font-mono text-[9px] text-slate-500 uppercase tracking-widest mb-3 font-bold">Professional Experience (JSON Format)</label>
              <textarea 
                rows={6}
                placeholder='[{"year": "2022", "title": "Senior Dev", "company": "Tech", "description": "..."}]'
                value={typeof formData.experience === 'string' ? formData.experience : JSON.stringify(formData.experience, null, 2)}
                onChange={(e) => setFormData({...formData, experience: e.target.value})}
                className="w-full bg-white/5 border border-white/10 p-6 font-mono text-xs focus:outline-none focus:border-[#ff4d00] transition-colors resize-none"
              />
            </div>

            <div>
              <label className="block font-mono text-[9px] text-slate-500 uppercase tracking-widest mb-3 font-bold">Core Skills (Comma Separated)</label>
              <input 
                type="text" 
                placeholder="e.g. React, UI/UX, Security"
                value={Array.isArray(formData.skills) ? formData.skills.join(', ') : formData.skills}
                onChange={(e) => setFormData({...formData, skills: e.target.value})}
                className="w-full bg-white/5 border-b border-white/10 p-4 font-mono text-sm focus:outline-none focus:border-[#ff4d00] transition-colors uppercase"
              />
            </div>

            <div>
              <label className="block font-mono text-[9px] text-slate-500 uppercase tracking-widest mb-3 font-bold">External Portfolio URL</label>
              <input 
                type="url" 
                placeholder="https://your-portfolio.com"
                value={formData.externalUrl}
                onChange={(e) => setFormData({...formData, externalUrl: e.target.value})}
                className="w-full bg-white/5 border-b border-white/10 p-4 font-mono text-sm focus:outline-none focus:border-[#ff4d00] transition-colors"
              />
            </div>

            <div className="flex gap-4 pt-10">
              <button 
                type="submit"
                disabled={isProcessing}
                className="flex-1 bg-white text-black font-mono text-[10px] font-bold py-5 uppercase tracking-[0.3em] hover:bg-[#ff4d00] hover:text-white transition-all interactive disabled:opacity-50"
              >
                {isProcessing ? 'SYNCHRONIZING...' : (editingId ? 'Update_Cloud_Record' : 'Publish_To_Archive')}
              </button>
              {editingId && (
                <button 
                  type="button"
                  onClick={resetForm}
                  className="px-10 border border-white/10 text-slate-500 hover:text-white font-mono text-[10px] uppercase tracking-widest interactive"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminPortal;
