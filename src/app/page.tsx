import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Timeline } from "@/components/sections/Timeline";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-pure-black selection:bg-apple-blue/30 selection:text-white">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Timeline />
      <Projects />
      <Contact />
    </div>
  );
}
