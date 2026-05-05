"use client";

import { motion } from "framer-motion";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";

export function Projects() {
  const { projects: projectsData } = usePortfolioData();

  return (
    <section id="projects" className="py-40 relative bg-transparent overflow-hidden">
      <div className="container px-6 relative z-10 mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <span className="text-gray-500 font-bold tracking-[0.4em] uppercase text-xs">Featured Work</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mt-4 text-white">
            Projects.
          </h2>
        </motion.div>

        <div className="space-y-40">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
            >
              {/* Left Column: Text Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                    {project.features[0] || "A high-performance digital solution focused on user experience and scalability."}
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-widest text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button 
                    onClick={() => { if (project.github) window.open(project.github, '_blank') }}
                    className="pill pill-outline flex items-center gap-2 font-bold text-sm"
                  >
                    <IconBrandGithub size={18} />
                    Source Code
                  </button>
                  
                  <button 
                    onClick={() => { if (project.live) window.open(project.live, '_blank') }}
                    className="pill bg-blue-600/20 text-blue-400 border border-blue-500/20 hover:bg-blue-600/30 flex items-center gap-2 font-bold text-sm"
                  >
                    <IconExternalLink size={18} />
                    Live Demo
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Mockup */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative group">
                  {/* Soft glow behind mockup */}
                  <div className="absolute -inset-10 bg-white/5 rounded-full blur-[100px] opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
                  
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent shadow-2xl">
                    <Image 
                      src={project.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200"} 
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Dark gradient overlay at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
