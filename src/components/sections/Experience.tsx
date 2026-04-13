"use client";

import { motion } from "framer-motion";
import { Terminal, Layers, CheckCircle2 } from "lucide-react";
import { usePortfolioData } from "@/hooks/usePortfolioData";

export function Experience() {
  const { experience } = usePortfolioData();
  
  return (
    <section id="experience" className="py-32 relative bg-transparent overflow-hidden">
      <div className="container px-6 relative z-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
            Experience
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experience.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="glass-card rounded-[32px] p-8 hover:bg-white/5 transition-all duration-500 group border border-white/5"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-primary/30 transition-colors">
                  {index % 2 === 0 ? <Terminal className="text-primary" size={28} /> : <Layers className="text-secondary" size={28} />}
                </div>
                <span className="px-5 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider border border-primary/20">
                  {item.year}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">{item.title}</h3>
              <p className="text-primary/80 font-bold text-sm mb-6 tracking-wide uppercase">{item.company}</p>
              
              <div className="flex gap-4 text-apple-gray text-lg leading-relaxed">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={18} />
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
