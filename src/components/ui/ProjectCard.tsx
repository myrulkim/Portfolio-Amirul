"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { IconBrandGithub } from "@tabler/icons-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 40, delay: index * 0.15 }}
      whileHover={{ scale: 1.02 }}
      className="group relative h-full flex flex-col"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-tr from-petronas to-transparent opacity-0 group-hover:opacity-30 blur-md transition duration-500 rounded-lg"></div>
      
      <div className="relative glass h-full flex flex-col rounded-sm overflow-hidden border border-white/5 group-hover:border-petronas/50 transition-colors duration-300">
        
        {/* Top Header / Status Bar */}
        <div className="flex justify-between items-center p-4 border-b border-white/5 bg-black/40">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-petronas rounded-full animate-pulse-teal"></span>
            <span className="text-[10px] font-mono tracking-widest text-silver">SYS_STATUS: VALID</span>
          </div>
          <div className="text-[10px] bg-white/10 px-2 py-0.5 font-mono text-silver border border-white/10 group-hover:border-petronas group-hover:text-petronas transition-colors">
            LAP TIME: {project.lapTime}
          </div>
        </div>

        {/* Big Corner Number Accent */}
        <div className="absolute top-12 right-4 text-7xl font-sans font-black italic text-white/5 pointer-events-none z-0 group-hover:text-petronas/5 transition-colors duration-500">
          {project.id}
        </div>

        {/* Content Area */}
        <div className="p-6 flex-1 flex flex-col relative z-10">
          <h3 className="text-3xl font-bold font-sans italic text-white mb-4 group-hover:text-petronas transition-colors">
            {project.title.toUpperCase()}
          </h3>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.engineSpecs.map(tech => (
              <span key={tech} className="text-xs font-mono px-2 py-1 bg-white/5 text-silver border border-white/10 group-hover:border-white/20">
                {tech}
              </span>
            ))}
          </div>

          <div className="space-y-3 flex-1">
            <h4 className="text-[10px] font-mono tracking-widest text-petronas uppercase mb-2">Sector Splits:</h4>
            {project.splits.map((split, i) => (
              <div key={i} className="flex gap-2">
                <span className="text-petronas text-xs leading-5">&gt;</span>
                <p className="text-sm font-sans text-silver font-light leading-relaxed">{split}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex justify-start gap-4 p-6 pt-0 mt-auto z-10">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-mono group/btn">
              <div className="p-2 border border-white/20 bg-black/50 group-hover/btn:border-petronas group-hover/btn:text-petronas transition-all">
                <IconBrandGithub size={16} />
              </div>
              <span className="text-silver group-hover/btn:text-white transition-colors">SOURCE</span>
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-mono group/btn ml-4">
              <div className="p-2 border border-petronas bg-petronas/10 text-petronas group-hover/btn:bg-petronas group-hover/btn:text-obsidian transition-all">
                <ExternalLink size={16} />
              </div>
              <span className="text-silver group-hover/btn:text-white transition-colors">DEPLOY</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
