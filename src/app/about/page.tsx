import Link from "next/link";

export const metadata = {
  title: "About the Architects | JB Labs",
  description: "Meet Grem and RJ, the core architects behind JB Labs.",
};

export default function AboutPage() {
  const architects = [
    {
      name: "Brian \"Grem\" Jamiel",
      role: "Lead Developer & Database Architect",
      bio: "Focuses on system structural integrity, real-time sync architectures, robust Firestore integrations, and mathematical engines (such as the custom Roll-Under Blackjack mechanics powering Astro Inferno). Brian translates design vision into high-performance, bulletproof codebases.",
      track: "Enterprise & Systems",
      color: "text-blue-500",
      borderColor: "border-blue-500/20",
      hoverBorder: "hover:border-blue-500",
      specialties: ["Next.js Server Actions", "Real-Time Firestore Sync", "Vite Production Bundling", "TypeScript Architecture"],
    },
    {
      name: "RJ",
      role: "Co-Developer & Co-Founder",
      bio: "Focuses on high-impact visual design, user flow optimization, creative gameplay systems, and deep world building. RJ crafts the tactical interfaces, mobile layout structures, and narrative elements that make our experimental projects immersive.",
      track: "Design & Narrative",
      color: "text-purple-500",
      borderColor: "border-purple-500/20",
      hoverBorder: "hover:border-purple-500",
      specialties: ["Interactive Prototypes", "Responsive Mobile UX", "Game Mechanics Design", "Narrative Architecture"],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Terminal */}
        <header className="mb-16 max-w-3xl border-b border-zinc-900 pb-10">
          <div className="inline-block rounded bg-zinc-900 px-2.5 py-1 text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
            SYSTEM DOSSIER // JB.LABS
          </div>
          <h1 className="text-5xl font-black tracking-tighter md:text-6xl">
            THE <span className="text-blue-500">ARCHITECTS</span>
          </h1>
          <p className="mt-6 text-zinc-400 leading-relaxed text-lg">
            JB Labs is a collaborative engineering lab operated by Brian and RJ. Together, we build production-grade professional utilities, complex gaming systems.
          </p>
        </header>

        {/* The Architects Grid */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {architects.map((arc) => (
            <div 
              key={arc.name}
              className={`group rounded-2xl border ${arc.borderColor} bg-zinc-950 p-8 transition-all duration-300 ${arc.hoverBorder}`}
            >
              <span className={`text-xs font-mono uppercase tracking-widest ${arc.color}`}>
                {arc.track}
              </span>
              <h2 className="text-4xl font-black tracking-tight mt-3 text-white">
                {arc.name}
              </h2>
              <p className="text-zinc-500 font-mono text-sm mt-1">
                {arc.role}
              </p>

              <p className="text-zinc-400 mt-6 text-sm leading-relaxed">
                {arc.bio}
              </p>

              {/* Specialties */}
              <div className="mt-8 border-t border-zinc-900 pt-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4 font-mono">
                  Core Telemetry
                </h4>
                <div className="flex flex-wrap gap-2">
                  {arc.specialties.map((spec) => (
                    <span 
                      key={spec} 
                      className="rounded bg-zinc-900 border border-zinc-800/50 px-2.5 py-1 text-xs font-mono text-zinc-300 group-hover:border-zinc-800 transition-all"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Operational Philosophy Section */}
        <section className="rounded-2xl border border-zinc-900 bg-zinc-950 p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-12 items-center">
            <div className="md:col-span-5">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-600">
                LAB PARAMETERS
              </span>
              <h3 className="text-3xl font-black tracking-tight text-white mt-2">
                Why We Build Separately, Together
              </h3>
              <p className="text-zinc-400 mt-4 text-sm leading-relaxed">
                We believe software developers shouldn't have to sacrifice creative, experimental side projects to prove they are enterprise professionals—nor should they compromise structural, type-safe security for fun. 
              </p>
              <p className="text-zinc-400 mt-4 text-sm leading-relaxed">
                We split our catalog so clients can instantly review our corporate workflows (Enterprise), while game players can run our automated, real-time Virtual Tabletops (Experimental).
              </p>
            </div>

            {/* Tactical Metagame Display */}
            <div className="md:col-span-7 grid gap-4 grid-cols-2">
              <div className="rounded-xl border border-zinc-900 bg-black p-5 font-mono">
                <span className="text-[10px] text-zinc-500 block uppercase">
                  Active Sync Pipeline
                </span>
                <span className="text-2xl font-black text-blue-500 mt-2 block">
                  100% LIVE
                </span>
                <span className="text-[11px] text-zinc-400 mt-1 block">
                  Zero local hardcoded mock dependencies.
                </span>
              </div>
              <div className="rounded-xl border border-zinc-900 bg-black p-5 font-mono">
                <span className="text-[10px] text-zinc-500 block uppercase">
                  Rendering Engine
                </span>
                <span className="text-2xl font-black text-purple-500 mt-2 block">
                  Next.js 16
                </span>
                <span className="text-[11px] text-zinc-400 mt-1 block">
                  Zero Cumulative Layout Shifts (CLS).
                </span>
              </div>
              <div className="rounded-xl border border-zinc-900 bg-black p-5 font-mono">
                <span className="text-[10px] text-zinc-500 block uppercase">
                  Styling Compiler
                </span>
                <span className="text-2xl font-black text-white mt-2 block">
                  Tailwind v4
                </span>
                <span className="text-[11px] text-zinc-400 mt-1 block">
                  Lightning CSS compilation.
                </span>
              </div>
              <div className="rounded-xl border border-zinc-900 bg-black p-5 font-mono">
                <span className="text-[10px] text-zinc-500 block uppercase">
                  Hosting Infrastructure
                </span>
                <span className="text-2xl font-black text-zinc-500 mt-2 block">
                  Firebase CDN
                </span>
                <span className="text-[11px] text-zinc-400 mt-1 block">
                  Fast Edge-distributed global assets.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic CTA Footer */}
        <footer className="mt-16 text-center border-t border-zinc-900 pt-12">
          <p className="text-zinc-500 text-sm font-mono">
            Looking to commission custom software, a private utility dashboard, or an interactive companion engine?
          </p>
          <div className="mt-6">
            <Link 
              href="/contact" 
              className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-black transition-all hover:bg-zinc-200"
            >
              Consult the Architects
            </Link>
          </div>
        </footer>

      </div>
    </main>
  );
}