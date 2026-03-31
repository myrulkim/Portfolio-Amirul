"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";
import { TelemetryBar } from "../ui/TelemetryBar";

export function Skills() {
  return (
    <section id="skills" className="py-24 relative border-t border-white/5 bg-[#0a0a0a]">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#111_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-l-2 border-petronas pl-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold italic tracking-tighter text-silver">
            TELEMETRY <span className="text-petronas font-mono text-xl md:text-3xl not-italic ml-2">// SKILL_MATRIX</span>
          </h2>
          <p className="font-mono text-muted-foreground mt-4 max-w-2xl text-sm">
            &gt; SYSTEM_DIAGNOSTICS: Analyzing technical proficiencies across core engineering verticals. All systems nominal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-1">
          {skillsData.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 50 }}
              className="glass p-8 border-t-2 border-t-petronas/50 hover:border-t-petronas transition-colors group bg-gradient-to-b from-white/5 to-transparent"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 bg-petronas rounded-full animate-pulse-teal" />
                <h3 className="font-mono tracking-widest text-lg font-bold text-white group-hover:text-petronas transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, j) => (
                  <TelemetryBar 
                    key={skill.name} 
                    name={skill.name} 
                    value={skill.value} 
                    delay={0.2 + (j * 0.1) + (i * 0.1)} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
