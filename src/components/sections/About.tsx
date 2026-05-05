"use client";

import { motion } from "framer-motion";
import { usePortfolioData } from "@/hooks/usePortfolioData";

export function About() {
  const { about } = usePortfolioData();
  
  return (
    <section id="about" className="py-40 relative bg-transparent overflow-hidden">
      <div className="container px-6 relative z-10 mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <span className="text-gray-500 font-bold tracking-[0.4em] uppercase text-xs">The Narrative</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mt-4 text-white">
            About Me.
          </h2>
        </motion.div>

        <div className="relative group">
          {/* Subtle Cyan Glow behind the card */}
          <div className="absolute -inset-4 bg-cyan-500/10 rounded-[40px] blur-3xl group-hover:bg-cyan-500/15 transition-all duration-700 pointer-events-none" />
          
          {/* The White Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-white rounded-[2rem] p-12 md:p-20 shadow-2xl shadow-black/5"
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black leading-tight">
                  A bit about <br />
                  <span className="text-gray-400">myself.</span>
                </h2>
              </div>
              
              <div className="space-y-6 max-w-4xl">
                <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed tracking-tight">
                  {about.description}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Focusing on the intersection of design and engineering to create digital products that feel as good as they look.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                {["System Design", "Product Strategy", "Fullstack Dev"].map((skill) => (
                  <span key={skill} className="px-5 py-2 rounded-full bg-gray-100 text-gray-600 text-[11px] font-bold uppercase tracking-widest border border-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
