"use client";

import { motion } from "framer-motion";
import { ExternalLink, Info } from "lucide-react";
import { IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { ProjectItem } from "@/types/portfolio";

export function ProjectCard({ project }: { project: ProjectItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full h-full"
    >
      <div className="group relative w-full h-full overflow-hidden rounded-[32px] bg-secondary border border-white/5 transition-all duration-700 hover:border-primary/30 shadow-2xl">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={project.image || "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1200"} 
            alt={project.title}
            fill
            className="object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-70 group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
        </div>

        {/* Top Right Icon */}
        <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
              <ExternalLink size={18} className="text-white" />
           </div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-8 md:p-10 flex flex-col justify-end">
          <div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary/80">
              {project.technologies[0] || "Innovation"}
            </span>
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white leading-none">
              {project.title}
            </h3>
            <p className="text-sm md:text-base text-apple-gray max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              {project.features[0] || "Next-generation digital solution."}
            </p>
          </div>
        </div>

        <Link 
          href={project.live || "#"} 
          target="_blank" 
          className="absolute inset-0 z-20 cursor-pointer"
          aria-label={`View ${project.title}`}
        />
      </div>
    </motion.div>
  );
}
