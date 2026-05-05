"use client";

import { motion, type Variants } from "framer-motion";
import { Download } from "lucide-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { usePortfolioData } from "@/hooks/usePortfolioData";

export function Hero() {
  const { hero, settings, socials } = usePortfolioData();
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center space-y-10"
      >
        {/* Availability Badge */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">Available for Work</span>
        </motion.div>

        {/* Headline */}
        <motion.div variants={itemVariants} className="space-y-4 max-w-5xl">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.8] uppercase">
            {hero.title1} <br className="hidden md:block" /> {hero.title2}
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-medium tracking-tight max-w-3xl mx-auto pt-4">
            {hero.profession} — {hero.specialization}
          </p>
        </motion.div>

        {/* Description */}
        <motion.p 
          variants={itemVariants}
          className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Final Year at UniKL MIIT | Bachelor in Information Technology (Hons.) in Software Engineering | Seeking Intership Opportunities.
        </motion.p>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button 
            onClick={() => { window.open(settings.cv_url, '_blank') }}
            className="pill pill-primary flex items-center gap-2 font-bold"
          >
            <Download size={18} />
            Download Resume
          </button>
          
          <button 
            onClick={() => { window.open(socials.github, '_blank') }}
            className="pill pill-outline flex items-center gap-2 font-bold"
          >
            <IconBrandGithub size={18} />
            GitHub
          </button>
        </motion.div>
      </motion.div>

      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none -z-10" />
    </section>
  );
}
