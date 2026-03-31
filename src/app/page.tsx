import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Timeline } from "@/components/sections/Timeline";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-obsidian selection:bg-petronas/30 selection:text-white">
      {/* 
        The layout wraps everything in a forced dark theme.
        We compose our page using semantic sections mirroring the F1 telemetry concept.
      */}
      <Hero />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
    </div>
  );
}
