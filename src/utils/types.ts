// Define types here since we can't modify types.ts directly

// Content management types
export interface Testimonial {
  id: string;
  author: string;
  position: string;
  quote: string;
  avatar: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientName: string;
  erpSystem: string;
  coverImage?: string;
  summary: string;
  challenge?: string;
  solution?: string;
  results?: string;
  tags?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  photo: string;
}

export interface HeroContent {
  id: string;
  page: string;
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundImage?: string;
}

export interface ContactInfo {
  id: string;
  email: string;
  phone: string;
  address?: string;
}

export interface ERPLogo {
  id: string;
  name: string;
  logo: string;
}

export interface MediaResponse {
  id: string;
  filename: string;
  contentType: string;
  url: string;
  createdAt: string;
}

export interface MediaListResponse {
  items: MediaResponse[];
}

export interface AuthResponse {
  success: boolean;
  message: string;
}