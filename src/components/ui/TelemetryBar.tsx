"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface TelemetryBarProps {
  name: string;
  value: number; // 0 to 100
  delay?: number;
}

export function TelemetryBar({ name, value, delay = 0 }: TelemetryBarProps) {
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <div className="space-y-1 mb-6">
      <div className="flex justify-between items-end font-mono text-sm">
        <span className="text-silver uppercase tracking-wider">{name}</span>
        <span className="text-petronas text-xs">{value}%</span>
      </div>
      <div className="h-[6px] w-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full bg-petronas relative"
          onAnimationComplete={() => setHasAnimated(true)}
        >
          {hasAnimated && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[pulse-teal_2s_infinite]" />
          )}
        </motion.div>
      </div>
    </div>
  );
}
