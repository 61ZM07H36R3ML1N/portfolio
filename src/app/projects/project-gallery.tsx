"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectGalleryProps {
  images?: string[];
  projectName: string;
  category: "professional" | "experimental";
}

export default function ProjectGallery({ images = [], projectName, category }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // High-performance placeholder mockups matching each division
  const fallbacks = category === "professional" 
    ? ["/gallery/enterprise-dashboard-placeholder.png", "/gallery/workflow-mockup-placeholder.png"]
    : ["/gallery/vtt-combat-placeholder.png", "/gallery/blackjack-dice-placeholder.png"];

  const activeImages = images.length > 0 ? images : fallbacks;
  const isEnterprise = category === "professional";

  return (
    <div className="flex flex-col gap-4">
      {/* 1. Main Viewport */}
      <div className={`relative aspect-video w-full overflow-hidden rounded-2xl border bg-zinc-950 transition-colors duration-300 ${
        isEnterprise ? "border-zinc-800 focus-within:border-blue-500" : "border-zinc-800 focus-within:border-purple-500"
      }`}>
        <div className="absolute top-3 left-3 z-10 rounded bg-black/70 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-zinc-400 backdrop-blur-sm">
          Screen {activeIndex + 1} // {activeImages.length}
        </div>
        
        {/* Under the hood, next/image handles instant WebP conversion & lazy loading */}
        <Image
          src={activeImages[activeIndex]}
          alt={`${projectName} Interface Showcase ${activeIndex + 1}`}
          fill
          className="object-cover object-center p-2 rounded-2xl transition-all duration-500 hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {/* 2. Horizontal Interactive Thumbnail Row */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-track-transparent">
        {activeImages.map((src, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={src}
              onClick={() => setActiveIndex(index)}
              className={`relative aspect-video w-24 shrink-0 overflow-hidden rounded-lg border transition-all duration-200 ${
                isActive 
                  ? isEnterprise 
                    ? "border-blue-500 ring-2 ring-blue-500/20 scale-95" 
                    : "border-purple-500 ring-2 ring-purple-500/20 scale-95"
                  : "border-zinc-800 hover:border-zinc-600 opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={src}
                alt={`Thumbnail selector ${index + 1}`}
                fill
                className="object-cover p-0.5 rounded-lg"
                sizes="96px"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}