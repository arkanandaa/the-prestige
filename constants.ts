
import { PortfolioItem } from './types';

export const PORTFOLIOS: PortfolioItem[] = [
  {
    id: '1',
    name: 'Arka Ananda Al Fatih',
    role: 'Full Stack Developer',
    summary: 'Innovative Full Stack Developer with 5+ years of experience in building scalable web applications. Expert in React, Node.js, and Cloud Architecture.',
    description: 'Focused on delivering high-performance, secure, and user-centric digital solutions. Proven track record of leading development teams and optimizing system performance. Active contributor to open-source projects and a regular speaker at local tech meetups.',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&h=400&auto=format&fit=crop',
    skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    experience: [
      {
        year: '2022 - Present',
        title: 'Senior Developer',
        company: 'TechFlow Solutions',
        description: 'Led the migration of legacy systems to a modern microservices architecture, improving system uptime by 40%. Mentored junior developers and implemented CI/CD pipelines.'
      },
      {
        year: '2020 - 2022',
        title: 'Full Stack Developer',
        company: 'Digital Pulse',
        description: 'Developed and maintained 15+ client projects using React and Node.js, ensuring 99.9% deployment success rate. Optimized database queries reducing load times by 30%.'
      }
    ],
    education: 'B.S. in Computer Science, Universitas Indonesia',
    projectsCount: 12
  },
  {
    id: '2',
    name: 'Muhammad Kasyfi Alhamiz',
    role: 'UI/UX Designer',
    summary: 'Creative UI/UX Designer dedicated to crafting intuitive and aesthetically pleasing digital experiences. Specialist in design systems and user research.',
    description: 'Passionate about bridging the gap between user needs and business goals through data-driven design and rapid prototyping. Awarded "Best Mobile Design" at the 2023 National Design Awards. Member of the International Association of Designers.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=400&auto=format&fit=crop',
    skills: ['Figma', 'Prototyping', 'Visual Design', 'User Research', 'Adobe XD', 'Tailwind CSS'],
    experience: [
      {
        year: '2021 - Present',
        title: 'Lead UI/UX Designer',
        company: 'Creative Studio 4',
        description: 'Established a comprehensive design system that reduced design-to-development time by 30%. Conducted over 50 user testing sessions to refine product usability.'
      }
    ],
    education: 'B.A. in Visual Communication Design, ITB',
    projectsCount: 8
  },
  {
    id: '3',
    name: 'Khalifa Mazaya Ramadhan',
    role: 'Mobile App Developer',
    summary: 'Mobile Application Specialist with a focus on cross-platform development using Flutter. Expert in high-performance animations and responsive UI.',
    description: 'Committed to building seamless mobile experiences that engage users and deliver measurable business value. Developed several top-rated apps on the Play Store. Active member of the Flutter Indonesia community.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop',
    skills: ['Flutter', 'Dart', 'Firebase', 'State Management', 'iOS/Android', 'Git'],
    experience: [
      {
        year: '2022 - Present',
        title: 'Senior Mobile Developer',
        company: 'AppVantage',
        description: 'Developed a fintech application with over 100k active users, maintaining a 4.8-star rating on App Store. Integrated complex payment gateways and biometric authentication.'
      }
    ],
    education: 'B.S. in Informatics Engineering, Telkom University',
    projectsCount: 15
  },
  {
    id: '4',
    name: 'Raffi Darmawan',
    role: 'Data Scientist',
    summary: 'Data Scientist with expertise in Python, Machine Learning, and Big Data Analytics. Skilled in transforming raw data into actionable business insights.',
    description: 'Analytical thinker with a strong background in statistical modeling and data visualization to drive strategic decision-making. Published researcher in the field of Predictive Analytics. Volunteer data analyst for non-profit environmental organizations.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&auto=format&fit=crop',
    skills: ['Python', 'Pandas', 'Scikit-learn', 'Power BI', 'SQL', 'TensorFlow'],
    experience: [
      {
        year: '2021 - Present',
        title: 'Data Analyst',
        company: 'Insight Corp',
        description: 'Automated data reporting processes, saving the marketing team 20 hours of manual work per week. Developed predictive models for customer churn with 85% accuracy.'
      }
    ],
    education: 'B.S. in Mathematics, Gadjah Mada University',
    projectsCount: 6
  },
  {
    id: '5',
    name: 'Zahraan Maulana Malik',
    role: 'Cybersecurity Analyst',
    summary: 'Cybersecurity professional focused on system security and digital risk mitigation. Expert in encryption and secure network architecture.',
    description: 'Dedicated to protecting organizational assets through proactive threat hunting, vulnerability assessment, and incident response. Certified Ethical Hacker (CEH) and CISSP candidate. Lead organizer for the university cybersecurity club.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&h=400&auto=format&fit=crop',
    skills: ['Security', 'Ethical Hacking', 'Linux', 'Networking', 'SIEM', 'Cloud Security'],
    experience: [
      {
        year: '2022 - Present',
        title: 'Security Consultant',
        company: 'CyberGuard',
        description: 'Conducted 50+ security audits for enterprise clients, identifying and mitigating critical vulnerabilities. Developed security awareness training programs for over 500 employees.'
      }
    ],
    education: 'B.S. in Computer Engineering, Binus University',
    projectsCount: 9
  }
];
