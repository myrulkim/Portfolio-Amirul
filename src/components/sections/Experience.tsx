"use client";

import { motion } from "framer-motion";
import { usePortfolioData } from "@/hooks/usePortfolioData";

export function Experience() {
  const { experience } = usePortfolioData();
  
  return (
    <section id="experience" className="py-40 relative bg-transparent overflow-hidden">
      <div className="container px-6 relative z-10 mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <span className="text-gray-500 font-bold tracking-[0.4em] uppercase text-xs">Professional Path</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mt-4 text-white">
            Experience.
          </h2>
        </motion.div>

        <div className="relative space-y-12">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-[1px] bg-white/10" />

          {experience.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative pl-12 group"
            >
              {/* Glowing Dot Indicator */}
              <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full bg-[#050505] border-2 border-white/20 z-10 group-hover:border-white transition-colors duration-500">
                <div className="absolute inset-0 rounded-full bg-white/20 blur-[4px] group-hover:bg-white/40 transition-all duration-500" />
              </div>

              {/* Experience Card */}
              <div className="space-y-4 pb-12">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
                    {item.year}
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-lg font-medium text-gray-400">
                    {item.company}
                  </p>
                </div>
                <p className="text-base text-gray-500 leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
