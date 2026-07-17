import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-black/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <div className="h-3.5 w-3.5 bg-blue-600 rounded-sm group-hover:rotate-45 transition-transform duration-300" />
          <span className="text-lg font-black tracking-tighter uppercase text-white">
            JB LABS<span className="text-blue-600">.</span>
          </span>
        </Link>
        
        <div className="flex items-center gap-x-12 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/projects/professional" className="hover:text-white transition-colors">Enterprise</Link>
          <Link href="/projects/experimental" className="hover:text-white transition-colors">Experimental</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}