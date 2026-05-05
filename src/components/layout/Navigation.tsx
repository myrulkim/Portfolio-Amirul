"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname?.startsWith("/admin")) return null;

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <motion.div
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "w-full max-w-5xl rounded-full border border-white/10 bg-black/50 backdrop-blur-xl transition-all duration-500",
            isScrolled ? "py-2 px-4 shadow-2xl shadow-black" : "py-3 px-6"
          )}
        >
          <div className="flex h-12 items-center justify-between gap-4 md:h-14">
            {/* Logo */}
            <Link
              href="/"
              className="group flex min-w-0 items-center rounded-full px-3 py-2 transition-colors hover:bg-white/[0.055]"
            >
              <span className="text-base font-semibold tracking-tight text-pro-text transition-colors group-hover:text-white md:text-lg">
                Portfolio
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-2 md:flex">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative px-4 py-2 text-[13px] font-bold uppercase tracking-widest text-gray-500 transition-all duration-300 hover:text-white"
                >
                  {link.name}
                  <span className="absolute inset-x-4 -bottom-px h-px scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              ))}
            </nav>

            {/* Hire Me Button */}
            <div className="hidden md:block">
              <Link href="#contact">
                <Button
                  size="sm"
                  className="h-10 rounded-full border border-white/10 bg-white text-black px-6 text-sm font-semibold tracking-normal shadow-inner-hairline transition-all duration-300 hover:bg-pro-text hover:shadow-glass-soft"
                >
                  Hire Me
                </Button>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="glass-hairline flex size-10 items-center justify-center rounded-full bg-white/[0.045] text-white/70 transition-colors hover:bg-white/[0.08] hover:text-white md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card fixed inset-x-4 top-24 z-40 flex rounded-[2rem] p-4 md:hidden"
          >
            <nav className="flex w-full flex-col gap-2 text-center">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="rounded-2xl px-5 py-4 text-lg font-semibold tracking-tight text-pro-muted transition-all duration-300 hover:bg-white/[0.06] hover:text-pro-text"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="h-12 w-full rounded-full border border-white/10 bg-white px-8 text-base font-semibold tracking-normal text-black shadow-inner-hairline transition-all duration-300 hover:bg-pro-text">
                  Hire Me
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
