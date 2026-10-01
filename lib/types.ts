export interface Profile {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  github: string;
}


export interface Project {
  slug: string;
  number: string;
  name: string;
  oneLiner: string;
  problem: string;
  approach: string;
  architecture: string;
  architectureFlow?: string[];
  contribution: string;
  technologies: string[];
  results: string[];
  sourceUrl: string;
  sourceLabel: string;
  demoUrl?: string;
  demoLabel?: string;
  featured?: boolean;
}

export interface SkillGroup {
  category: string;
  items: string[];
}
