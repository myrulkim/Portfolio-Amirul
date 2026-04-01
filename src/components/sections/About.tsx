"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-32 relative bg-pure-black overflow-hidden border-t border-white/5">
      <div className="container px-4 md:px-6 relative z-10 mx-auto max-w-5xl text-center flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-apple-gray">
            About Me
          </h2>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-tight">
            I&apos;m a passionate Software Engineering Student driven by curiosity and problem-solving.
          </h3>
          <p className="max-w-2xl mx-auto text-xl text-apple-gray font-medium tracking-tight pt-8 leading-relaxed">
            With a deep appreciation for precision design, I strive to write clean, maintainable code that delivers robust and seamless digital experiences. Every project is an opportunity to learn, optimize, and build something exceptional.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
