export interface ResearchPaper {
  id: string;
  title: string;
  domain: string;
  abstract: string;
  keyFindings: string[];
  technologies: string[];
  date: string;
  venue: string;
  credentialUrl?: string;
  impactMetrics?: {
    citations?: number;
    stars?: number;
    downloadCount?: number;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'Algorithms' | 'Systems' | 'AI' | 'Data Science' | 'Web Development';
  techStack: string[];
  github: string;
  demoUrl: string;
  highlighted?: boolean;
}

export interface Milestone {
  id: string;
  title: string;
  date: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export interface KnowledgeNode {
  id: string;
  label: string;
  category: 'core' | 'algorithms' | 'systems' | 'ai-ml' | 'math' | 'languages';
  description: string;
  x: number;
  y: number;
  details: string[];
}

export interface KnowledgeLink {
  source: string;
  target: string;
}
