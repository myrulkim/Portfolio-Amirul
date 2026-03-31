"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { Button } from "../ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-obsidian overflow-hidden">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-petronas/10 border border-petronas/30 mb-8 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] font-mono tracking-widest text-silver uppercase">Status: Open for opportunities</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter text-white mb-6">
              LET'S TALK <br /> <span className="text-petronas">PERFORMANCE.</span>
            </h2>
            <p className="text-silver/70 font-mono text-sm leading-relaxed mb-8 max-w-md">
              &gt; Initialize communication sequence. Whether you have a question or just want to discuss code, racing, or design—I'll get back to you at DRS speed.
            </p>

            <div className="space-y-4 font-mono text-sm">
              <a href="mailto:hello@amiru.dev" className="flex items-center gap-4 text-silver hover:text-petronas transition-colors group p-4 border border-white/5 hover:border-petronas/50 bg-[#111]">
                <Mail className="group-hover:scale-110 transition-transform text-petronas" size={20} />
                hello@amiru.dev
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-silver hover:text-petronas transition-colors group p-4 border border-white/5 hover:border-petronas/50 bg-[#111]">
                <IconBrandLinkedin className="group-hover:scale-110 transition-transform text-petronas" size={20} />
                linkedin.com/in/amiru
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-silver hover:text-petronas transition-colors group p-4 border border-white/5 hover:border-petronas/50 bg-[#111]">
                <IconBrandGithub className="group-hover:scale-110 transition-transform text-petronas" size={20} />
                github.com/amiru
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 relative border-t-4 border-t-petronas shadow-2xl shadow-petronas/5"
          >
            <div className="absolute top-0 right-4 transform -translate-y-1/2">
               <div className="bg-obsidian border border-petronas px-2 py-1 text-[10px] text-petronas font-mono tracking-widest">
                 COMMS_LINK
               </div>
            </div>

            <form className="space-y-6 flex flex-col pt-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1">
                <label className="text-[10px] font-mono tracking-widest text-silver/50 ml-1">DRIVER_NAME</label>
                <input 
                  type="text" 
                  className="w-full bg-[#111] border border-white/10 rounded-none p-4 font-mono text-sm text-white focus:outline-none focus:border-petronas focus:ring-1 focus:ring-petronas transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-mono tracking-widest text-silver/50 ml-1">SECURE_CHANNEL (EMAIL)</label>
                <input 
                  type="email" 
                  className="w-full bg-[#111] border border-white/10 rounded-none p-4 font-mono text-sm text-white focus:outline-none focus:border-petronas focus:ring-1 focus:ring-petronas transition-all"
                  placeholder="name@company.com"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-mono tracking-widest text-silver/50 ml-1">TELEMETRY_DATA (MESSAGE)</label>
                <textarea 
                  rows={4}
                  className="w-full bg-[#111] border border-white/10 rounded-none p-4 font-sans text-sm text-white focus:outline-none focus:border-petronas focus:ring-1 focus:ring-petronas transition-all resize-none"
                  placeholder="How can we collaborate?"
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-white text-obsidian hover:bg-petronas rounded-none font-mono tracking-widest group uppercase">
                <Send className="mr-2 h-4 w-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                Transmit payload
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
