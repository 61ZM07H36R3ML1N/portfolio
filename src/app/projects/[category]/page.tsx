import { getProjectsByCategory } from "@/lib/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

// Next.js 15 requires unwrapping dynamic URL parameters asynchronously
interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;

  if (category !== "professional" && category !== "experimental") {
    notFound();
  }

  const projects = await getProjectsByCategory(category);
  const isEnterprise = category === "professional";

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 border-b border-zinc-800 pb-8">
          <Link href="/" className="text-xs font-mono text-zinc-500 hover:text-white uppercase tracking-widest">
            &larr; Back to Nexus
          </Link>
          <h1 className="text-4xl font-black tracking-tighter mt-4 capitalize">
            {category} Deployments
          </h1>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all duration-300 hover:bg-zinc-900/80 ${
                isEnterprise ? "hover:border-blue-500" : "hover:border-purple-500"
              }`}
            >
              <h2 className="text-2xl font-black">
                <Link href={`/projects/${category}/${project.id}`} className="hover:underline">
                  {(project as any).name ?? (project as any).title ?? project.id}
                </Link>
              </h2>
              <p className="text-zinc-400 mt-2 text-sm">{project.description}</p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {((project as any).techStack ?? (project as any).technologies ?? []).map((tech: string) => (
                  <span key={tech} className="rounded bg-zinc-800 px-2 py-1 text-xs font-mono text-zinc-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}