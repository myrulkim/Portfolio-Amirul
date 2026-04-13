"use client";

import { motion } from "framer-motion";
import { Mail, SendHorizonal } from "lucide-react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { Button } from "../ui/button";
import { usePortfolioData } from "@/hooks/usePortfolioData";

export function Contact() {
  const { socials } = usePortfolioData();

  return (
    <section id="contact" className="py-32 relative bg-transparent overflow-hidden">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-16"
          >
            <div className="space-y-6">
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
                Let&apos;s Connect <span className="text-primary">with me.</span>
              </h2>
              <p className="text-apple-gray text-xl tracking-tight font-medium max-w-md leading-relaxed">
                Available for bespoke commissions and strategic collaborations. Reach out to discuss your next high-fidelity vision.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-primary group-hover:scale-110 transition-transform border border-primary/20">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-apple-gray mb-1">Email</p>
                  <a href={`mailto:${socials.email}`} className="text-lg font-bold text-white hover:text-primary transition-colors">
                    {socials.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-primary group-hover:scale-110 transition-transform border border-primary/20">
                  <IconBrandLinkedin size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-apple-gray mb-1">LinkedIn</p>
                  <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-white hover:text-primary transition-colors block break-all">
                    {socials.linkedin}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-primary group-hover:scale-110 transition-transform border border-primary/20">
                  <IconBrandGithub size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-apple-gray mb-1">GitHub</p>
                  <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-white hover:text-primary transition-colors block break-all">
                    {socials.github}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card p-10 md:p-14 rounded-[32px] border border-white/10 shadow-3xl"
          >
            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase ml-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-lg text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/10"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase ml-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-lg text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/10"
                    placeholder="name@example.com"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase ml-1">Subject</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/10 py-4 text-lg text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/10"
                  placeholder="What are we building?"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase ml-1">Your Vision</label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 py-4 text-lg text-white focus:outline-none focus:border-primary transition-all resize-none placeholder:text-white/10 h-32"
                  placeholder="Describe the atmosphere..."
                />
              </div>

              <div className="flex justify-end pt-6">
                <Button type="submit" size="lg" className="bg-primary text-black hover:bg-white rounded-full font-bold tracking-tight py-8 px-12 text-xl transition-all shadow-2xl shadow-primary/20 group">
                  Send Email
                  <SendHorizonal size={24} className="ml-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
