import { getProjectsByCategory } from "@/lib/projects";
import ProjectGallery from "@/app/projects/project-gallery";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectDetailProps {
  params: Promise<{ category: string; id: string }>;
}

// Local narrowed Project shape for this page (avoids importing shared types)
type LocalProject = {
  id: string;
  name: string;
  gallery: any[];
  description: string;
  status: string;
  version: string;
  roles: Record<string, string>;
};

export default async function ProjectDetailPage({ params }: ProjectDetailProps) {
  // 1. Unwrap the params Promise (Next.js 15 standard)
  const { category, id } = await params;
  
  // 2. Strict validation guard to filter out invalid categories
  if (category !== "professional" && category !== "experimental") {
    notFound();
  }

  // 3. Cast the validated category to our custom type safety layout
  const validatedCategory = category as "professional" | "experimental";
  const projects = await getProjectsByCategory(validatedCategory);
  const project = projects.find((p) => p.id === id) as LocalProject | undefined;

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10">
          <Link 
            href={`/projects/${validatedCategory}`} 
            className="text-xs font-mono text-zinc-500 hover:text-white uppercase tracking-widest transition-colors"
          >
            &larr; Return to {validatedCategory} Division
          </Link>
          <h1 className="text-5xl font-black tracking-tighter mt-4 text-white md:text-6xl">
            {project.name}
          </h1>
          <p className="text-zinc-500 font-mono text-sm mt-2">
            Build Status: <span className="text-green-500">{project.status}</span> | Version: {project.version}
          </p>
        </header>

        {/* Dynamic Split Layout: Real Gallery on Left, Core Specs on Right */}
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7">
            <ProjectGallery 
              images={project.gallery} 
              projectName={project.name} 
              category={validatedCategory} 
            />
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-xl border border-zinc-900 bg-zinc-950 p-6">
              <h3 className="text-lg font-bold uppercase tracking-widest text-zinc-400">Core Narrative</h3>
              <p className="text-zinc-300 mt-3 leading-relaxed text-sm">{project.description}</p>
            </div>

            <div className="rounded-xl border border-zinc-900 bg-zinc-950 p-6">
              <h3 className="text-lg font-bold uppercase tracking-widest text-zinc-400 mb-4">Collaborative Architects</h3>
              <div className="space-y-3">
                {Object.entries(project.roles).map(([architect, role]) => (
                  <div key={architect} className="flex justify-between border-b border-zinc-900 pb-2 text-sm">
                    <span className="font-bold text-white">{architect}</span>
                    <span className="text-zinc-400 font-mono">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}