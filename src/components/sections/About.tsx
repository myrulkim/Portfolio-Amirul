"use client";

import { motion } from "framer-motion";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import Image from "next/image";

export function About() {
  const { about, hero } = usePortfolioData();
  
  return (
    <section id="about" className="py-24 relative bg-transparent overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10 mx-auto max-w-4xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <span className="text-secondary font-bold tracking-[0.4em] uppercase text-xs">
              Personal Biography
            </span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
              About <span className="text-gradient-liquid">Me.</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-apple-gray font-medium tracking-tight leading-relaxed">
              {about.description}
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
