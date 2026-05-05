"use client";

import { motion } from "framer-motion";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { 
  IconBrandTypescript, 
  IconBrandNextjs, 
  IconBrandPython, 
  IconBrandFlutter, 
  IconBrandFirebase, 
  IconBrandGit,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandReactNative,
  IconBrandVercel,
  IconDatabase,
  IconCoffee,
  IconTestPipe
} from "@tabler/icons-react";

export function Skills() {
  const { skills: skillsData } = usePortfolioData();

  // Flatten skills and map icons
  const allSkills = skillsData.flatMap(category => 
    category.skills.map(skill => ({
      ...skill,
      category: category.title
    }))
  );

  const getIcon = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('typescript')) return <IconBrandTypescript size={32} className="text-[#3178C6]" />;
    if (n.includes('next.js')) return <IconBrandNextjs size={32} className="text-white" />;
    if (n.includes('python')) return <IconBrandPython size={32} className="text-[#3776AB]" />;
    if (n.includes('flutter')) return <IconBrandFlutter size={32} className="text-[#02569B]" />;
    if (n.includes('firebase')) return <IconBrandFirebase size={32} className="text-[#FFCA28]" />;
    if (n.includes('git')) return <IconBrandGit size={32} className="text-[#F05032]" />;
    if (n.includes('tailwind')) return <IconBrandTailwind size={32} className="text-[#06B6D4]" />;
    if (n.includes('node')) return <IconBrandNodejs size={32} className="text-[#339933]" />;
    if (n.includes('react')) return <IconBrandReactNative size={32} className="text-[#61DAFB]" />;
    if (n.includes('vercel')) return <IconBrandVercel size={32} className="text-white" />;
    if (n.includes('java')) return <IconCoffee size={32} className="text-[#ED8B00]" />;
    if (n.includes('database')) return <IconDatabase size={32} className="text-blue-400" />;
    if (n.includes('test') || n.includes('junit')) return <IconTestPipe size={32} className="text-red-400" />;
    return <IconBrandNextjs size={32} className="text-white" />; // Fallback
  };

  // Duplicate for infinite effect
  const marqueeItems = [...allSkills, ...allSkills, ...allSkills];

  return (
    <section id="skills" className="py-40 relative overflow-hidden bg-transparent">
      <div className="container px-6 relative z-10 mx-auto max-w-7xl mb-24 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gray-500 font-bold tracking-[0.4em] uppercase text-xs">Technical Stack</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mt-4 text-white">
            Expertise.
          </h2>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden py-10 select-none cursor-grab active:cursor-grabbing">
        <motion.div 
          drag="x"
          dragConstraints={{ left: -1000, right: 1000 }} // Large constraints to allow sliding
          dragElastic={0.1}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 40, 
            repeat: Infinity 
          }}
          whileTap={{ cursor: "grabbing" }}
          className="flex gap-8 px-4 items-center"
        >
          {marqueeItems.map((skill, idx) => (
            <motion.div
              key={`${skill.name}-${idx}`}
              animate={{ y: [0, -8, 0] }}
              transition={{ 
                duration: 4 + (idx % 2), 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: idx * 0.2
              }}
              className="flex-shrink-0 group"
            >
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-white/5 bg-white/[0.02] flex flex-col items-center justify-center gap-2 transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.05] group-hover:scale-110">
                <div className="transition-all duration-500 group-hover:scale-110 scale-90">
                  {getIcon(skill.name)}
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-600 group-hover:text-gray-300 transition-colors duration-500">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />
    </section>
  );
}
