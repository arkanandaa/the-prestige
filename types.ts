
export interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  name: string;
  role: string;
  summary: string;
  description: string;
  avatar: string;
  skills: string[];
  experience: Experience[];
  education: string;
  projectsCount: number;
  externalUrl?: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
