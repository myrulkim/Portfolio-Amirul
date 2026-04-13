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
  { name: "Timeline", href: "#timeline" },
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
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={cn(
            "w-full max-w-5xl glass-pill rounded-full border border-white/10 shadow-3xl transition-all duration-500",
            isScrolled ? "py-2 px-4 md:px-8" : "py-4 px-6 md:px-10"
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <span className="text-2xl font-extrabold tracking-tighter bg-gradient-to-r from-primary to-liquid-cyan bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                Portfolio
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold uppercase tracking-[0.1em] text-white/60 hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Hire Me Button */}
            <div className="hidden md:block">
              <Link href="#contact">
                <Button size="sm" className="bg-primary text-black hover:bg-white rounded-full px-8 font-bold tracking-tight h-10 text-sm">
                  Hire Me
                </Button>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white/70 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="md:hidden fixed inset-4 top-24 z-40 glass rounded-[40px] border border-white/10 flex flex-col items-center justify-center p-6 shadow-4xl backdrop-blur-3xl"
          >
            <nav className="flex flex-col space-y-8 text-center">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-bold tracking-tighter text-white/60 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="bg-primary text-black rounded-full px-10 py-5 text-lg font-bold">
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
