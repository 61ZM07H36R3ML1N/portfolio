import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="text-5xl font-black tracking-tighter md:text-7xl">
          EXPERIMENTAL <span className="text-blue-500">LABS</span>
        </h1>
        <p className="mt-6 text-lg text-zinc-400">
          Collaborative engineering by Grem and RJ. We build robust corporate solutions and gritty interactive gaming systems.
        </p>
      </section>

      {/* Track Divisions */}
      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 pb-24 md:grid-cols-2">
        {/* Enterprise */}
        <Link 
          href="/projects/professional" 
          className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition hover:border-blue-500"
        >
          <div className="absolute top-4 right-4 text-xs font-mono text-blue-500 uppercase tracking-widest">
            Division 01
          </div>
          <h2 className="text-3xl font-black tracking-tight group-hover:text-blue-400">
            Enterprise
          </h2>
          <p className="mt-4 text-zinc-400">
            Production-grade business portals, pricing utilities, database architectures, and custom client workflows.
          </p>
          <span className="mt-8 inline-block text-sm font-bold text-blue-500 group-hover:underline">
            View Professional Track &rarr;
          </span>
        </Link>

        {/* Experimental */}
        <Link 
          href="/projects/experimental" 
          className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition hover:border-purple-500"
        >
          <div className="absolute top-4 right-4 text-xs font-mono text-purple-500 uppercase tracking-widest">
            Division 02
          </div>
          <h2 className="text-3xl font-black tracking-tight group-hover:text-purple-400">
            Experimental
          </h2>
          <p className="mt-4 text-zinc-400">
            Dark-fantasy RPG utilities, virtual tabletops, positivity walls, and custom physical hardware sync integrations.
          </p>
          <span className="mt-8 inline-block text-sm font-bold text-purple-500 group-hover:underline">
            Launch Creative Track &rarr;
          </span>
        </Link>
      </section>
    </main>
  );
}