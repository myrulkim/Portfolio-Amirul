"use client";

import { motion } from "framer-motion";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { ProjectCard } from "../ui/ProjectCard";
import { useState } from "react";

const CATEGORIES = ["ALL", "MOBILE", "WEB", "UI/UX"];

export function Projects() {
  const { projects: projectsData } = usePortfolioData();
  const [activeCategory, setActiveCategory] = useState("ALL WORKS");

  return (
    <section id="projects" className="py-32 relative bg-transparent overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs">Collection</span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
              My Projects
            </h2>
            <p className="max-w-xl text-apple-gray text-xl tracking-tight font-medium">
              A curation of high-fidelity digital experiences, where liquid geometry meets functional elegance.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-end gap-6"
          >
            <a href="#" className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white/50 hover:text-white transition-colors group">
              Explore all projects
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </a>
            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest transition-all border ${
                    activeCategory === cat 
                      ? "bg-white text-black border-white shadow-xl shadow-white/10" 
                      : "bg-transparent text-white/50 border-white/10 hover:border-white/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={`${
                index === 0 ? "md:col-span-8 h-[400px] md:h-[600px]" : 
                index === 1 ? "md:col-span-4 h-[400px] md:h-[600px]" :
                index % 3 === 2 ? "md:col-span-4 h-[400px]" : 
                "md:col-span-4 h-[400px]"
              }`}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
