"use client";

import { motion } from "framer-motion";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { Terminal, Cpu, Globe, Database, Smartphone, GitBranch, Code2 } from "lucide-react";
import { Skill } from "@/types/portfolio";

export function Skills() {
  const { skills: skillsData } = usePortfolioData();

  const getIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('language')) return <Code2 size={24} className="text-primary" />;
    if (t.includes('web') || t.includes('frontend')) return <Globe size={24} className="text-secondary" />;
    if (t.includes('mobile')) return <Smartphone size={24} className="text-tertiary" />;
    if (t.includes('backend') || t.includes('database')) return <Database size={24} className="text-primary" />;
    if (t.includes('devops') || t.includes('tool')) return <GitBranch size={24} className="text-secondary" />;
    return <Terminal size={24} className="text-primary" />;
  };

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-transparent">
      <div className="container px-6 relative z-10 mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 text-center"
        >
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs">Technical Skills</span>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mt-2 text-white">
            Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group"
            >
              <div className="glass-card rounded-[32px] p-8 hover:bg-white/5 transition-all duration-500 group border border-white/5 h-full flex flex-col">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/30 transition-colors duration-500">
                    {getIcon(category.title)}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill: Skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-primary/20 transition-all duration-300 cursor-default group/pill hover:-translate-y-1"
                    >
                      <span className="text-xs font-bold tracking-tight text-apple-gray group-hover/pill:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
