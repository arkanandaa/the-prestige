
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { PortfolioItem, ChatMessage } from '../types';

interface Props {
  portfolios: PortfolioItem[];
}

const AIConsultant: React.FC<Props> = ({ portfolios }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'ARCHIVE_BOT CONNECTED. How can I assist your exploration?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = 'gemini-3-flash-preview';
      const portfolioData = portfolios.map(p => ({ name: p.name, role: p.role, skills: p.skills }));
      const systemPrompt = `You are a minimalist AI archive assistant. 
      Help users find talent in this portfolio list: ${JSON.stringify(portfolioData)}.
      Be extremely concise, professional, and slightly robotic (archive-like). Use English.`;

      const response = await ai.models.generateContent({
        model,
        contents: userMsg,
        config: { systemInstruction: systemPrompt, temperature: 0.5 },
      });

      setMessages(prev => [...prev, { role: 'assistant', content: response.text || "NO_DATA_RECOVERED" }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "CONNECTION_ERROR" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[60] font-mono">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-white text-black flex items-center justify-center hover:bg-[#ff4d00] hover:text-white transition-all group"
      >
        {isOpen ? 'CLOSE' : 'SCOUT'}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[320px] bg-black border border-white/20 flex flex-col shadow-2xl">
          <div className="p-4 border-b border-white/10 bg-white/5 flex justify-between items-center">
            <span className="text-[10px] font-bold tracking-widest uppercase">Agent_4.0</span>
            <div className="w-2 h-2 bg-green-500 animate-pulse"></div>
          </div>

          <div ref={scrollRef} className="h-80 overflow-y-auto p-4 space-y-4 text-[11px] leading-relaxed">
            {messages.map((m, idx) => (
              <div key={idx} className={`${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-3 ${m.role === 'user' ? 'bg-[#ff4d00] text-white' : 'bg-white/5 text-slate-400 border border-white/10'}`}>
                  {m.content}
                </span>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-white/10">
            <div className="flex">
              <input 
                type="text"
                placeholder="PROMPT_HERE"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-[#ff4d00] text-xs uppercase"
              />
              <button onClick={handleSend} className="ml-2 text-[#ff4d00]">&gt;</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIConsultant;
