"use client";

import { motion } from "framer-motion";
import { ExternalLink, Info } from "lucide-react";
import { IconBrandGithub } from "@tabler/icons-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-32 w-full mb-20 last:mb-0"
    >
      <div className="group relative overflow-hidden rounded-[32px] bg-midnight-gray border border-white/5 aspect-[16/10] sm:aspect-[21/9] flex transition-all duration-700 hover:border-white/10 shadow-2xl">
        
        {/* Background Image/Media */}
        <div className="absolute inset-0 z-0">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pure-black/90 via-pure-black/40 to-transparent" />
        </div>

        {/* Content Sidebar - Frosted Glass */}
        <div className="relative z-10 w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-between glass border-y-0 border-l-0">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-apple-blue font-bold tracking-tight uppercase text-xs">
                <Info size={14} />
                Technical Highlight
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-none">
                {project.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="text-xs font-semibold px-3 py-1 bg-white/5 text-apple-gray rounded-full border border-white/5">
                  {tech}
                </span>
              ))}
            </div>

            <div className="space-y-3">
              {project.features.map((feature, i) => (
                <div key={i} className="flex gap-3 text-apple-gray">
                  <span className="text-apple-blue font-bold">•</span>
                  <p className="text-sm/relaxed font-medium tracking-tight font-sans">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6 pt-8">
             {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-white hover:text-apple-blue transition-colors group/btn">
                <IconBrandGithub size={20} className="group-hover/btn:scale-110 transition-transform" />
                <span>Source</span>
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-white hover:text-apple-blue transition-colors group/btn">
                <ExternalLink size={20} className="group-hover/btn:scale-110 transition-transform" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Floating ID Tag */}
        <div className="absolute top-8 right-8 z-20">
           <span className="text-sm font-mono font-bold text-white/20 bg-white/5 px-4 py-2 rounded-full border border-white/5 backdrop-blur-md italic">
             REV_{project.id}
           </span>
        </div>
      </div>
    </motion.div>
  );
}
