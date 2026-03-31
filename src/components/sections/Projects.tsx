"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "../ui/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-[#0a0a0a] border-t border-white/5">
      {/* Abstract F1 Corner Track Background */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute right-[-200px] top-1/4 w-[600px] h-[600px] rounded-full border-[40px] border-petronas/10"></div>
        <div className="absolute right-[-100px] top-1/3 w-[400px] h-[400px] rounded-full border-[20px] border-white/5"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl border-l-4 border-petronas pl-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-petronas text-xs tracking-[0.3em] uppercase bg-petronas/10 px-2 py-1">Race_Sessions</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold italic tracking-tighter text-silver">
            GRAND PRIX <span className="text-white block mt-2">GALLERY.</span>
          </h2>
          <p className="mt-4 font-mono text-muted-foreground text-sm">
            &gt; PERFORMANCE DATA LOGGED. ARCHIVE: RECENT_MILESTONES.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
