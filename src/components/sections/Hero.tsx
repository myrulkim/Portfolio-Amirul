"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Download, ChevronRight, Terminal } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [drsEnabled, setDrsEnabled] = useState(false); // DRS = Developer Mode

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden carbon-fiber"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-petronas/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[128px] pointer-events-none" />

      {/* Floating Telemetry Badge */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="absolute top-28 right-4 md:right-12 glass px-4 py-2 flex items-center gap-3 border-petronas/30 z-10 hidden sm:flex"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-petronas opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-petronas"></span>
        </span>
        <span className="font-mono text-xs text-silver tracking-widest">
          SYS.ONLINE // {new Date().getFullYear()}
        </span>
      </motion.div>

      <div className="container px-4 md:px-6 z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-end justify-between">
          
          <motion.div 
            className="flex-1 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* DRS Toggle */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <div className="glass px-4 py-2 inline-flex items-center gap-3 rounded-full">
                <Switch 
                  id="drs-mode" 
                  checked={drsEnabled} 
                  onCheckedChange={setDrsEnabled}
                  className="data-[state=checked]:bg-petronas"
                />
                <label 
                  htmlFor="drs-mode" 
                  className="text-xs font-mono tracking-wider cursor-pointer flex items-center gap-2 text-silver"
                >
                  <Terminal size={14} className={drsEnabled ? "text-petronas" : "text-muted-foreground"} />
                  DRS: {drsEnabled ? "DEV_MODE" : "USER_MODE"}
                </label>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-4 relative">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-silver/50">
                ENGINEERED
                <br />
                TO PERFORM.
              </h1>
              
              {/* Conditional Subtitle based on DRS */}
              <div className="h-16">
                {drsEnabled ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-mono text-sm md:text-base text-petronas bg-petronas/10 p-4 border-l-2 border-petronas inline-block"
                  >
                    <span>&gt; class <span className="text-white">Amiru</span> extends Engineer</span>
                    <br/>
                    <span className="text-muted-foreground">&gt; Initializing high-performance web systems... [OK]</span>
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xl md:text-2xl text-silver max-w-xl font-light"
                  >
                    Hi, I'm <span className="text-petronas font-semibold italic">Amiru</span>. A software engineering student building fast, 
                    scalable, and precision-driven applications.
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="bg-petronas text-obsidian hover:bg-white hover:text-obsidian transition-colors font-mono tracking-wider group rounded-none"
                size="lg"
                onClick={() => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                [VIEW_PROJECTS]
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                className="border-white/20 hover:bg-white/10 text-silver font-mono tracking-wider rounded-none glass"
                size="lg"
                onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                <Download className="mr-2 h-4 w-4" />
                [DOWNLOAD_CV]
              </Button>
            </motion.div>
          </motion.div>

          {/* Telemetry Graphic (Only visible in Dev Mode or Desktop) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: drsEnabled ? 1 : 0.4, 
              scale: drsEnabled ? 1 : 0.95,
              filter: drsEnabled ? "grayscale(0%)" : "grayscale(100%)"
            }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block w-[400px] xl:w-[500px] aspect-square relative"
          >
            {/* Minimalist F1 Steering/Telemetry UI representation */}
            <div className="absolute inset-0 glass rounded-full border-petronas/20 flex items-center justify-center overflow-hidden">
               {/* Grid background */}
               <div className="absolute inset-0 bg-[radial-gradient(#00A19B_1px,transparent_1px)] [background-size:20px_20px] opacity-10 blur-[1px]"></div>
               
               <div className="relative text-center space-y-6 w-full px-12">
                  <div className="flex justify-between items-end border-b border-white/10 pb-2">
                    <div className="text-left">
                      <div className="text-[10px] text-muted-foreground font-mono">REACT_RPM</div>
                      <div className="text-2xl font-mono text-petronas font-bold">15<span className="text-sm">k</span></div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-muted-foreground font-mono">NEXT_GEAR</div>
                      <div className="text-4xl font-mono text-white font-bold italic">15</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-petronas w-[85%] relative">
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-transparent to-white/50 animate-pulse-teal"></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
                      <span>PERFORMANCE</span>
                      <span className="text-petronas">99%</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-4">
                    {["TS", "TW", "FM"].map((tech, i) => (
                      <div key={tech} className="bg-white/5 border border-white/10 p-2 text-center">
                        <span className="text-xs font-mono text-silver">{tech}</span>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
