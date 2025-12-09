export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  services: string[];
  client?: string;
  duration?: string;
  location?: string;
  slug: string;
  category: 'residential' | 'commercial' | 'industrial' | 'infrastructure';
  featured?: boolean;
  completedDate?: string;
  size?: string;
  value?: string;
}

export interface ProjectFilter {
  category?: string;
  service?: string;
  featured?: boolean;
}
