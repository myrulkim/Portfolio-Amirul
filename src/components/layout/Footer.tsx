"use client";

import { usePathname } from "next/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) return null;

  
  return (
    <footer className="w-full border-t border-white/5 bg-pure-black py-12">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-between sm:flex-row gap-6">
        
        <p className="text-sm text-apple-gray font-medium tracking-tight">
          &copy; {currentYear} Amirul. All rights reserved.
        </p>

        <div className="flex items-center space-x-6 text-sm text-apple-gray font-medium tracking-tight">
          <a href="#hero" className="hover:text-white transition-colors">Home</a>
          <a href="#skills" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        </div>
      </div>
    </footer>
  );
}
