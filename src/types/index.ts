import { ReactNode } from 'react';

export type ResourceType = 'github' | 'youtube' | 'book' | 'pdf' | 'course' | 'stream' | 'database' | 'website';

export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  type: ResourceType;
  categories: string[];
  author?: string;
  stars?: number;
  image?: string;
  tags?: string[];
  dateAdded: string;
  language?: string;
  approved?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: ReactNode;
  description?: string;
}

export interface Language {
  id: string;
  name: string;
}