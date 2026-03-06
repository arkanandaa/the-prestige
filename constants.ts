
import { PortfolioItem } from './types';

export const PORTFOLIOS: PortfolioItem[] = [
  {
    id: '1',
    name: 'Arka Ananda Al Fatih',
    role: 'Computer Science Scholar | Full-Stack Product Engineer | Creative Technologist',
    summary: 'Positioned at the intersection of robust engineering and intuitive design, building immersive end-to-end digital ecosystems.',
    description: 'Arka is a Computer Science student at Universitas Indonesia (UI) who positions himself at the intersection of robust engineering and intuitive design. He doesn\'t just write code; he designs end-to-end digital ecosystems focused on scalability, speed, and immersive user experiences. As a Creative Technologist, he bridges avant-garde design with high performance, using modern frameworks to create complex animations and interactive storytelling without sacrificing accessibility.',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&h=400&auto=format&fit=crop',
    skills: ['React', 'Next.js', 'TypeScript', 'Framer Motion', 'Three.js', 'Node.js', 'NestJS', 'PostgreSQL', 'Prisma', 'Docker', 'Kubernetes', 'GraphQL', 'gRPC'],
    experience: [
      {
        year: '2024',
        title: 'Lead Developer',
        company: 'Ochre-UI',
        description: 'Developed a component library focused on accessibility and high-performance interactions.'
      },
      {
        year: '2023',
        title: 'Security Engineer',
        company: 'Sentinel',
        description: 'Built an automated security audit tool for identifying vulnerabilities in cloud-native applications.'
      },
      {
        year: '2023',
        title: 'Product Engineer',
        company: 'Lumina',
        description: 'Designed and implemented a SaaS-based productivity dashboard with real-time data synchronization.'
      }
    ],
    education: 'B.S. in Computer Science, Universitas Indonesia (UI)',
    projectsCount: 24,
    externalUrl: 'https://arka-ochre.vercel.app'
  },
  {
    id: '2',
    name: 'Muhammad Kasyfi Alhamiz',
    role: 'Physics Scholar | Computational Researcher | Technical Consultant',
    summary: 'Exploring the fundamental laws of the universe through digital tools, bridging theoretical physics and computational technology.',
    description: 'Kasyfi is a high-achieving student from ITB (Class of 2022) focusing on theoretical physics and computational instruments. He combines theoretical physics with computational technology to bridge science and industrial applications. He is a Research Intern at CERN and a Technical Consultant at Quantum Solutions Ltd.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=400&auto=format&fit=crop',
    skills: ['Quantum Mechanics', 'Computational Modeling', 'Python', 'C++', 'MATLAB', 'Instrumentation & IoT', 'Scientific Data Analysis'],
    experience: [
      {
        year: '2025 - Present',
        title: 'Research Intern',
        company: 'CERN (Geneva, Switzerland)',
        description: 'Involved in the CMS experiment analyzing Higgs Boson decay data.'
      },
      {
        year: '2023 - Present',
        title: 'Technical Consultant',
        company: 'Quantum Solutions Ltd.',
        description: 'Providing mathematical modeling and simulation for industry, including heat transfer analysis using COMSOL.'
      },
      {
        year: '2023 - 2024',
        title: 'Laboratory Assistant',
        company: 'Basic Physics Laboratory, ITB',
        description: 'Assisting in laboratory sessions and student research.'
      },
      {
        year: '2022 - 2026',
        title: 'Physics Undergraduate',
        company: 'Institut Teknologi Bandung',
        description: 'Focusing on Theoretical Physics with a 3.9/4.0 GPA.'
      }
    ],
    education: 'B.S. in Physics, Institut Teknologi Bandung',
    projectsCount: 18,
    externalUrl: 'https://kaspi-rho.vercel.app/'
  },
  {
    id: '3',
    name: 'Khalifa Mazaya Ramadhan',
    role: 'Engineering Student | Mine Planner | Reservoir Specialist',
    summary: 'Dedicated to bridging engineering theory with practical field optimization in the Mining and Petroleum sectors.',
    description: 'Khalifa is an ITB student dedicated to bridging engineering theory with practical field optimization. He has a unique dual focus on Mining and Petroleum sectors, with a vision to create sustainable energy solutions. He is an expert in mine planning and reservoir simulation.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop',
    skills: ['Surpac', 'Whittle', 'Petrel', 'AutoCAD', 'Python (Engineering Data Analysis)', 'Project Management'],
    experience: [
      {
        year: '2024',
        title: 'EOR Feasibility Analysis',
        company: 'Institut Teknologi Bandung',
        description: 'Evaluating Enhanced Oil Recovery (EOR) potential via CO2 injection for a mature oil field in Sumatra.'
      },
      {
        year: '2023',
        title: 'Open Pit Optimization Study',
        company: 'Institut Teknologi Bandung',
        description: 'Maximizing NPV for a gold mine in Kalimantan using the Lerchs-Grossmann algorithm.'
      }
    ],
    education: 'B.S. in Mining & Petroleum Engineering, Institut Teknologi Bandung',
    projectsCount: 16,
    externalUrl: 'https://khalifa-eta.vercel.app/'
  },
  {
    id: '4',
    name: 'Raffi Darmawan',
    role: 'Actor, Producer & Creative Visionary',
    summary: 'A 17-year-old Indonesian Actor, Producer, and Creative Visionary who has broken into the international market.',
    description: 'Raffi Darmawan is a 17-year-old Indonesian Actor, Producer, and Creative Visionary who has broken into the international market. Starting his career from local theater in Jakarta, he is now known as one of the most influential young talents who has successfully bridged the Eastern (Indonesia) and Western (Hollywood) film industries.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&auto=format&fit=crop',
    skills: ['Method Acting', 'Stage Combat', 'Improvisation', 'Muay Thai', 'Boxing', 'Photography', 'Contemporary Dance'],
    experience: [
      {
        year: '2029',
        title: 'Kai (Recurring Role)',
        company: 'Stranger Things (Netflix)',
        description: 'First Indonesian actor in a major Netflix Sci-Fi franchise. Portrayed Kai in Season 10.'
      },
      {
        year: '2028',
        title: 'Julian (Guest Star)',
        company: 'Wednesday (Netflix)',
        description: 'Guest star appearance in Season 5 of the hit series Wednesday.'
      },
      {
        year: '2027',
        title: 'Aris (Lead Role)',
        company: 'The Silent Horizon',
        description: 'Lead actor in an independent film. Nominated for Best Newcomer at Festival Film Indonesia (2027) and named Rising Stars to Watch by Variety Asia (2028).'
      },
      {
        year: '2026',
        title: 'Young Budi',
        company: 'Jakarta Midnight',
        description: 'Award-winning short film performance in a prestigious short film.'
      }
    ],
    education: 'Jakarta Local Theater & International Acting Workshops',
    projectsCount: 12,
    externalUrl: 'https://portfolioraffidarma.vercel.app/'
  },
  {
    id: '5',
    name: 'Zahran Maulana Malik',
    role: 'Entrepreneur | Businessman | Aviation Scholar',
    summary: 'Building the future of industry through innovation, discipline, and a global perspective.',
    description: 'Zahran is a young entrepreneur focused on industrial innovation with high discipline and a global perspective. He is building his career at the intersection of world-class aviation management and strategic business management through his holding entity, Malik Industries.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&h=400&auto=format&fit=crop',
    skills: ['Entrepreneurship', 'Business Strategy', 'Aviation Management', 'Innovation', 'Strategic Consulting'],
    experience: [
      {
        year: '2022 - Present',
        title: 'Founder & CEO',
        company: 'Malik Industries',
        description: 'Leading a diversified holding entity focused on identifying and scaling high-potential business opportunities.'
      }
    ],
    education: 'B.Sc. in Aviation Management, Emirates Aviation University (Dubai, UAE)',
    projectsCount: 15,
    externalUrl: 'https://zahran-maulana.vercel.app/'
  }
];
