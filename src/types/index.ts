export interface SkillGroup {
  title: string;
  iconKey: string; // maps to an icon component in a registry, keeps data decoupled from React
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  status?: string; // e.g. "In development"
  context: string; // honest framing, e.g. "Personal project · live" or "Coursework · Networks"
  stack: string[];
  description: string;
  highlights: string[];
  featured?: boolean;
  links?: {
    github?: string;
    live?: string;
  };
}

export interface ExperienceItem {
  role: string;
  org: string;
  time: string;
  points: string[];
  iconKey: string;
}

export interface EducationInfo {
  degree: string;
  school: string;
  time: string;
  cgpa: string;
  coursework: string[];
  focus: string[];
}

export interface Certificate {
  issuer: string;
  title: string;
}

export interface SocialLink {
  label: string;
  href: string;
  iconKey: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}