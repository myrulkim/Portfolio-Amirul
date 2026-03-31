"use client";

import { motion } from "framer-motion";
import { timelineData } from "@/data/timeline";

export function Timeline() {
  return (
    <section id="timeline" className="py-24 relative bg-obsidian">
      <div className="container px-4 md:px-6 relative z-10 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold italic tracking-tighter text-silver">
            THE PIT WALL <span className="text-petronas font-mono text-xl md:text-3xl not-italic ml-2 block sm:inline mt-2 sm:mt-0">// TIMELINE</span>
          </h2>
          <div className="w-24 h-1 bg-petronas mx-auto mt-6" />
        </motion.div>

        <div className="relative">
          {/* Vertical Track / Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-petronas/0 via-petronas to-petronas/0 md:-ml-0.5 rounded-full" />

          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index}
                className={`relative flex items-center justify-start md:justify-between w-full mb-16 last:mb-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="hidden md:block w-5/12" /> {/* Spacer */}
                
                {/* Checkpoint Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                  className="absolute left-[12px] md:left-1/2 w-4 h-4 rounded-full border-4 border-obsidian bg-petronas z-10 md:transform md:-translate-x-1/2 ring-2 ring-petronas/30"
                />

                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 50, delay: 0.1 }}
                  className="w-full md:w-5/12 pl-12 md:pl-0 z-10"
                >
                  <div className={`glass p-6 border-l-4 ${item.status === 'in-progress' ? 'border-petronas' : 'border-white/20'} relative group overflow-hidden`}>
                    
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-petronas/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="font-mono text-xs tracking-widest text-petronas mb-2 px-2 py-1 bg-petronas/10 inline-block uppercase mt-1 md:mt-0">
                      LAP {index + 1} :: {item.year}
                    </div>
                    
                    <h3 className="text-xl font-bold font-sans text-white mb-1 group-hover:text-petronas transition-colors">
                      {item.title}
                    </h3>
                    <h4 className="text-sm font-bold font-mono text-silver/70 mb-4">
                      {item.institution}
                    </h4>
                    
                    <p className="text-silver text-sm/relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
