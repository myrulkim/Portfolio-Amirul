"use client";

import { motion } from "framer-motion";
import { usePortfolioData } from "@/hooks/usePortfolioData";

export function Experience() {
  const { experience } = usePortfolioData();
  
  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="py-32 relative bg-pure-black overflow-hidden border-t border-white/5">
      <div className="container px-4 md:px-6 relative z-10 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
            Experience.
          </h2>
          <p className="text-apple-gray max-w-2xl mx-auto text-lg tracking-tight font-medium">
            Professional roles and industry impact.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Thread - 1px thin */}
          <div className="absolute left-4 md:left-[50%] top-0 bottom-0 w-[1px] bg-white/10 md:-ml-[0.5px]" />

          <div className="space-y-24">
            {experience.map((item: any, index: number) => {
              const isEven = index % 2 !== 0; // Flip sides compared to timeline
              return (
                <div 
                  key={index}
                  className={`relative flex items-start justify-start md:justify-between w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="hidden md:block w-[45%]" /> {/* Spacer */}
                  
                  {/* Glowing Node */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
                    className="absolute left-[12px] md:left-[50%] w-3 h-3 rounded-full bg-apple-blue md:transform md:-translate-x-1/2 z-20 shadow-[0_0_15px_#0071e3]"
                  />

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full md:w-[45%] pl-12 md:pl-0 z-10"
                  >
                    <div className="space-y-4 glass p-8 rounded-3xl border border-white/5">
                      <div className="font-mono text-sm tracking-tight text-apple-blue font-bold">
                        {item.year}
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold tracking-tight text-white">
                          {item.title}
                        </h3>
                        <h4 className="text-lg font-medium tracking-tight text-apple-gray flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-white/20" />
                          {item.company}
                        </h4>
                      </div>
                      
                      <p className="text-apple-gray/80 text-lg/relaxed tracking-tight font-normal">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
