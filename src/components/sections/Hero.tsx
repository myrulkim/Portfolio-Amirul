"use client";

import { motion, type Variants } from "framer-motion";
import { Download, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePortfolioData } from "@/hooks/usePortfolioData";

export function Hero() {
  const { hero } = usePortfolioData();
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0, filter: "blur(10px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 70, damping: 20 }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden"
    >
      <div className="container px-4 md:px-6 z-10 flex flex-col items-center justify-center">
        <motion.div
          className="flex flex-col items-center text-center space-y-8 max-w-5xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Headline */}
          <motion.div variants={itemVariants} className="space-y-4 relative w-full">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] py-2">
              <span className="text-gradient-shimmer">
                {hero.title1}
                <br />
                {hero.title2}
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
              className="mt-8"
            >
              <p className="text-xl md:text-2xl lg:text-3xl text-apple-gray max-w-3xl mx-auto font-medium tracking-tight leading-relaxed whitespace-pre-line">
                {hero.subtitle}
              </p>
            </motion.div>
          </motion.div>

          {/* CTAs */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row gap-4 pt-10 items-center justify-center w-full"
          >
            <Button
              className="bg-apple-blue text-white hover:bg-apple-blue/90 transition-all duration-300 tracking-tight rounded-full h-12 px-10 text-lg w-full sm:w-auto shadow-lg shadow-apple-blue/20"
              size="lg"
              onClick={() => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              View Projects
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-white/10 bg-white/5 hover:bg-white/10 text-foreground transition-all duration-300 tracking-tight rounded-full h-12 px-10 text-lg w-full sm:w-auto glass"
              size="lg"
              onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              <Download className="mr-2 h-5 w-5 opacity-70" />
              Download CV
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-apple-gray/50"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
