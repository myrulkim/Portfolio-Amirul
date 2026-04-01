"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { Button } from "../ui/button";
import { usePortfolioData } from "@/hooks/usePortfolioData";

export function Contact() {
  const { socials } = usePortfolioData();
  
  return (
    <section id="contact" className="py-32 relative bg-pure-black overflow-hidden">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
              Connect.
            </h2>
            <p className="text-apple-gray text-lg md:text-xl tracking-tight font-medium max-w-xl mx-auto leading-relaxed">
              Whether you have a vision for a specific project or just want to discuss software engineering—I&apos;m always open to new connections and interesting conversations.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 py-4">
            <a href={`mailto:${socials.email}`} className="flex items-center gap-3 text-white hover:text-apple-blue transition-colors font-semibold tracking-tight group">
              <Mail size={24} className="group-hover:scale-110 transition-transform" />
              <span>Email</span>
            </a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-apple-blue transition-colors font-semibold tracking-tight group">
              <IconBrandLinkedin size={24} className="group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>
            <a href={socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-apple-blue transition-colors font-semibold tracking-tight group">
              <IconBrandGithub size={24} className="group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[32px] border-white/5 shadow-2xl text-left"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest text-apple-gray uppercase ml-1">Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm text-white focus:outline-none focus:border-apple-blue focus:ring-1 focus:ring-apple-blue transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest text-apple-gray uppercase ml-1">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm text-white focus:outline-none focus:border-apple-blue focus:ring-1 focus:ring-apple-blue transition-all"
                    placeholder="name@company.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-apple-gray uppercase ml-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-3xl p-4 text-sm text-white focus:outline-none focus:border-apple-blue focus:ring-1 focus:ring-apple-blue transition-all resize-none"
                  placeholder="How can we collaborate?"
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-foreground text-background hover:bg-apple-blue hover:text-white rounded-full font-bold tracking-tight py-6 text-lg transition-all duration-300">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
