"use client";

import { motion } from "framer-motion";
import { usePortfolioData } from "@/hooks/usePortfolioData";

export function Timeline() {
  const { timeline } = usePortfolioData();
  
  return (
    <section id="education" className="py-40 relative bg-transparent overflow-hidden">
      <div className="container px-6 relative z-10 mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <span className="text-gray-500 font-bold tracking-[0.4em] uppercase text-xs">Academic History</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mt-4 text-white">
            Education.
          </h2>
        </motion.div>

        <div className="space-y-0">
          {timeline.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-b border-white/10 group hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-xl"
            >
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-base font-medium group-hover:translate-x-2 transition-transform duration-500 delay-75">
                  {item.institution}
                </p>
              </div>
              
              <div className="mt-4 md:mt-0">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-600">
                  {item.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
