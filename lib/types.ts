export interface SocialIcon {
  icon: React.ReactNode;
  link: string;
  name?: string;
}

export interface NavMenuItem {
  name: string;
  navURL: string;
}

export interface StatItem {
  number: string;
  name: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  message: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  organization?: string;
  content: string;
  image?: string;
  rating?: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  link?: string;
  date: string;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image?: string;
  publishedAt: string;
  tags: string[];
  readTime?: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  organization?: string;
  image?: string;
}

export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}