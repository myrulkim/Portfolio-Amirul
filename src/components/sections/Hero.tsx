"use client";

import { motion, type Variants } from "framer-motion";
import { Download, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import Image from "next/image";

export function Hero() {
  const { hero, settings } = usePortfolioData();
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
      className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden"
    >
      <div className="container relative z-10 mx-auto px-6 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full pt-20">
          
          {/* Left Column: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-8 text-left"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                Hi, I'm <br />
                <span className="text-gradient-liquid">MUHAMMAD <br /> AMIRUL HAKIM</span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-2xl md:text-3xl font-semibold text-white/90 tracking-tight">
                  {hero.profession}
                </p>
                <p className="text-xl md:text-2xl font-medium text-white/60 tracking-tight">
                  {hero.specialization}
                </p>
              </div>

              <p className="text-lg md:text-xl text-apple-gray max-w-lg font-medium tracking-tight leading-relaxed opacity-80 whitespace-pre-line">
                {hero.subtitle}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 pt-4">
              <Button 
                size="lg" 
                className="bg-primary text-black hover:bg-white rounded-xl font-bold tracking-tight py-6 px-10 text-lg transition-all shadow-xl shadow-primary/20 flex items-center gap-3"
                onClick={() => { window.open(settings.cv_url, '_blank') }}
              >
                <div className="w-6 h-6 rounded bg-black/10 flex items-center justify-center">
                  <Download size={16} />
                </div>
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
              {/* Outer Border Square-round */}
              <div className="absolute inset-0 rounded-[48px] border-2 border-primary/30 scale-105" />
              
              {/* Image Container Square-round */}
              <div className="w-full h-full rounded-[48px] overflow-hidden border-4 border-primary/10 shadow-2xl relative z-10 bg-white/5">
                {(hero.profile_image && hero.profile_image.trim() !== "") ? (
                  <Image 
                    src={hero.profile_image}
                    alt="Muhammad Amirul Hakim"
                    fill
                    priority
                    className="object-cover transition-all duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 via-transparent to-liquid-cyan/20">
                    <div className="text-primary/20 scale-[4]">
                    </div>
                  </div>
                )}
              </div>

              {/* Decorative Liquid Blobs behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/10 rounded-[60px] blur-[80px] -z-10 animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/40"
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
