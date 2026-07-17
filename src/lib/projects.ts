import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";
import { Project } from "@/types";

// Fallback static data to protect production deployments from credential gaps
const fallbackProjects: Project[] = [
  {
    id: "studio-crm",
    title: "Studio CRM & Billing App",
    category: "professional",
    description: "Enterprise utility mapping client onboarding and payment schedules.",
    tags: ["crm", "billing"],
    techStack: ["Next.js", "Tailwind CSS v4", "PostgreSQL"],
    collaborators: ["Brian", "RJ"],
    roles: { Brian: "Database Architecture", RJ: "UI/UX Layouts" },
    status: "In Development",
    version: "v1.2.0"
  },
  {
    id: "astro-inferno",
    title: "Astro Inferno",
    category: "experimental",
    description: "A dark, gritty TTRPG VTT companion application with automated combat tracking.",
    tags: ["ttrpg", "vtt"],
    techStack: ["React", "Vite 6", "Firebase", "Tailwind CSS v4"],
    collaborators: ["Brian", "RJ"],
    roles: { Brian: "Lead Developer", RJ: "Game Design & Narrative" },
    status: "Prototype",
    version: "v4.0.0",
    dice_system: "Real-time d20 Roll-Under Blackjack",
    engine: "Blackjack Engine"
  }
];

export async function getProjectsByCategory(category: "professional" | "experimental"): Promise<Project[]> {
  try {
    const q = query(collection(db, "projects"), where("category", "==", category));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) return fallbackProjects.filter(p => p.category === category);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Project));
  } catch (error) {
    console.error("Firestore error, serving static fallbacks:", error);
    return fallbackProjects.filter(p => p.category === category);
  }
}