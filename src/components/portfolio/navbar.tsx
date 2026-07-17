import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Brand */}
        <Link href="/" className="font-black tracking-widest text-white text-xl">
          JB <span className="text-blue-500">LABS</span>
        </Link>

        {/* Unified, perfectly-spaced links */}
        <nav className="flex items-center gap-x-10 text-sm font-semibold text-zinc-400">
          <Link href="/projects/professional" className="transition hover:text-blue-500">
            Enterprise
          </Link>
          <Link href="/projects/experimental" className="transition hover:text-purple-500">
            Experimental
          </Link>
          <Link href="/about" className="transition hover:text-white">
            About
          </Link>
          <Link href="/contact" className="transition hover:text-white">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}