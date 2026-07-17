export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  detailedDescription?: string;
  category: "professional" | "experimental";
  status: "Active" | "In Development" | "Prototype" | "Completed";
  version: string;
  tags: string[];
  engine?: string;
  dice_system?: string;
  githubUrl?: string;
  liveUrl?: string;
  gallery?: string[];
}

export interface Architect {
  id: string;
  name: string;
  role: string;
  bio: string;
  github?: string;
  linkedin?: string;
}