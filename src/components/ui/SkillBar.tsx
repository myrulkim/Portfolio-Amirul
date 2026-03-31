"use client";

import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  value: number; // 0 to 100
  delay?: number;
}

export function SkillBar({ name, value, delay = 0 }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-end">
        <span className="text-apple-gray text-sm font-medium tracking-tight uppercase">{name}</span>
        <span className="text-foreground text-xs font-mono">{value}%</span>
      </div>
      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full bg-apple-blue relative rounded-full"
        />
      </div>
    </div>
  );
}
