"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase, Sparkles } from "lucide-react";
import { usePortfolioData } from "@/hooks/usePortfolioData";

export function Timeline() {
  const { timeline } = usePortfolioData();
  
  return (
    <section id="timeline" className="py-32 relative bg-transparent overflow-hidden">
      <div className="container px-6 relative z-10 max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <span className="text-secondary font-bold tracking-[0.4em] uppercase text-xs">
            The Journey
          </span>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mt-2 text-white">
            Timeline
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto py-12">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-secondary to-transparent opacity-20" />

          <div className="space-y-24">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center">
                  {/* Timeline Node */}
                  <div className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 ${index % 3 === 0 ? 'border-primary shadow-[0_0_15px_rgba(199,153,255,0.5)]' : index % 3 === 1 ? 'border-secondary shadow-[0_0_15px_rgba(74,248,227,0.5)]' : 'border-tertiary shadow-[0_0_15px_rgba(255,108,149,0.5)]'} z-20`} />
                  
                  {/* Content Container */}
                  <div className={`md:w-1/2 ${isEven ? 'md:pr-24 text-left md:text-right pl-20 md:pl-0' : 'md:hidden pl-20'}`}>
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                      >
                        <span className={`font-bold text-xs tracking-[0.2em] uppercase ${index % 3 === 0 ? 'text-primary' : index % 3 === 1 ? 'text-secondary' : 'text-tertiary'}`}>
                          {item.year}
                        </span>
                        <h4 className="text-2xl font-bold text-white mt-2 tracking-tight">{item.title}</h4>
                        <p className="text-apple-gray text-base mt-2 font-medium leading-relaxed">{item.institution}</p>
                      </motion.div>
                    )}
                  </div>

                  <div className={`md:w-1/2 ${!isEven ? 'md:pl-24 text-left pl-20' : 'hidden md:block'}`}>
                    {!isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                      >
                        <span className={`font-bold text-xs tracking-[0.2em] uppercase ${index % 3 === 0 ? 'text-primary' : index % 3 === 1 ? 'text-secondary' : 'text-tertiary'}`}>
                          {item.year}
                        </span>
                        <h4 className="text-2xl font-bold text-white mt-2 tracking-tight">{item.title}</h4>
                        <p className="text-apple-gray text-base mt-2 font-medium leading-relaxed">{item.institution}</p>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
