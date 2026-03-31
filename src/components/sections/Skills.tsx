"use client";

import { motion } from "framer-motion";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { Terminal, Cpu, Globe, Database, Smartphone, GitBranch } from "lucide-react";

export function Skills() {
  const { skills: skillsData } = usePortfolioData();
  const iconMap = {
    "Java": <Cpu size={20} />,
    "Python": <Terminal size={20} />,
    "Dart": <Smartphone size={20} />,
    "TypeScript": <Globe size={20} />,
    "Spring Boot": <Database size={20} />,
    "Flutter": <Smartphone size={20} />,
    "Next.js": <Globe size={20} />,
    "Firebase": <Database size={20} />,
    "Software Testing": <Terminal size={20} />,
    "JUnit/Selenium": <Terminal size={20} />,
    "Git Workflow": <GitBranch size={20} />,
    "Agile/Scrum": <GitBranch size={20} />,
  } as any;

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-pure-black">
      <div className="container px-4 md:px-6 relative z-10 mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
            Skills.
          </h2>
          <p className="text-apple-gray max-w-2xl mx-auto text-lg tracking-tight">
            A comprehensive matrix of technical capabilities.
          </p>
        </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  scale: 1.02,
                  borderColor: "rgba(0, 113, 227, 0.4)",
                  backgroundColor: "rgba(0, 113, 227, 0.05)",
                  boxShadow: "0 20px 40px -20px rgba(0, 113, 227, 0.15)"
                }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.3 }}
                className="glass rounded-3xl p-8 flex flex-col border border-white/5 transition-all cursor-default"
              >
                <div className="space-y-6">
                  <h3 className="text-xl font-bold tracking-tight text-white">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill: any) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center text-sm font-medium tracking-tight">
                          <span className="text-apple-gray flex items-center gap-2">
                             {iconMap[skill.name] || <Terminal size={14} className="opacity-50" />}
                             {skill.name}
                          </span>
                          <span className="text-apple-blue font-mono">{skill.value}%</span>
                        </div>
                        {/* Progress Bar */}
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-apple-blue rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.value}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + (idx * 0.1), duration: 1, ease: "easeOut" }}
                          />
                        </div>
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
