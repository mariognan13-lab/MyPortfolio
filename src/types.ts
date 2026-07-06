export interface ResearchPaper {
  id: string;
  title: string;
  domain: string;
  abstract: string;
  keyFindings: string[];
  technologies: string[];
  date: string;
  venue: string;
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

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  summary: string;
  content: string; // Markdown supported
  featuredImage?: string;
}

export interface Milestone {
  id: string;
  title: string;
  date: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export interface ReadItem {
  id: string;
  type: 'paper' | 'book' | 'course';
  title: string;
  creator: string; // Author or Instructor
  dateFinished: string;
  summary: string;
  keyInsights: string[];
  rating: number; // 1 to 5
  notes: string;
  category: string;
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
