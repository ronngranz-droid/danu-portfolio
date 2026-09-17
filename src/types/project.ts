export type ProjectStatus = 'Active Development' | 'Production' | 'Prototype' | 'Experimental' | 'Completed';

export type SkillLevel = 'Used in Projects' | 'Comfortable With' | 'Currently Learning' | 'Exploring';

export interface Project {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  role: string[];
  technologies: string[];
  keyFeatures: string[];
  problemSolved: {
    problem: string;
    solution: string;
  };
  demoUrl?: string;
  githubUrl?: string;
  isFlagship?: boolean;
  featuredOrder: number;
  overview: string;
  goals: string[];
  challenges: {
    title: string;
    description: string;
    solution: string;
  }[];
  architecture: {
    frontend: string;
    backend?: string;
    database?: string;
    apis?: string[];
    description: string;
  };
  learningOutcomes: string[];
  nextImprovements: string[];
  mockupType: 'kelana' | 'danatrail' | 'classhub' | 'danewai';
  imageUrl?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: SkillLevel;
    note?: string;
  }[];
}

export interface JourneyMilestone {
  step: string;
  title: string;
  description: string;
  focus: string;
  badge?: string;
}

export interface Certificate {
  id: string;
  name: string;
  provider: string;
  date: string;
  credentialUrl?: string;
  category: string;
  skillsLearned: string[];
}

export interface Experiment {
  id: string;
  title: string;
  category: 'UI Experiments' | 'JavaScript Experiments' | 'API Experiments' | 'AI Experiments' | 'Database Experiments';
  description: string;
  tech: string[];
  status: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface Principle {
  id: string;
  number: string;
  title: string;
  summary: string;
  description: string;
}
