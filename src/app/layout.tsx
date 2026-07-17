import { Navbar } from "src/components/portfolio/navbar.tsx";
import "@/app/globals.css"; // Ensure your Tailwind v4/v3 entry is imported

export const metadata = {
  title: "JB Labs | Custom Software & Tabletop Toolkits",
  description: "The collaborative dev portfolio of Grem and RJ.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-zinc-100 antialiased min-h-screen flex flex-col selection:bg-blue-500/30">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <footer className="border-t border-zinc-900 bg-zinc-950/20 py-12">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase">
              © 2026 JB Labs // System Status: Active
            </span>
            <span className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase">
              Built by Grem & RJ
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}