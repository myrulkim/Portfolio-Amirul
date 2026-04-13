"use client";

import { usePathname } from "next/navigation";
import { usePortfolioData } from "@/hooks/usePortfolioData";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const { socials } = usePortfolioData();

  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="w-full border-t border-white/5 bg-transparent py-14">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="flex flex-col items-center md:items-start space-y-2">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-white">
            Amirul Hakim
          </p>
          <p className="text-xs uppercase tracking-widest text-white/30">
            &copy; {currentYear} Amirul Hakim. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex items-center space-x-8 text-xs font-bold tracking-widest uppercase">
            <a href={`mailto:${socials.email}`} className="text-white/40 hover:text-primary transition-colors">{socials.email}</a>
          </div>
          <div className="flex items-center space-x-8 text-xs font-bold tracking-widest uppercase text-white/40">
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
