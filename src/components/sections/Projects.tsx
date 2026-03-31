"use client";

import { motion } from "framer-motion";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { ProjectCard } from "../ui/ProjectCard";

export function Projects() {
  const { projects: projectsData } = usePortfolioData();
  return (
    <section id="projects" className="py-32 relative bg-pure-black overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10 mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-24 space-y-4"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-apple-blue font-bold tracking-[0.2em] uppercase text-xs">Featured Gallery</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            Projects.
          </h2>
          <p className="max-w-xl text-apple-gray text-lg tracking-tight font-medium">
            A showcase of precision-engineered digital products and experimental prototypes.
          </p>
        </motion.div>

        <div className="flex flex-col gap-0">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
