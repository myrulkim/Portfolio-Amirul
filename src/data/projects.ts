export type Project = {
  id: string;
  title: string;
  duration: string;
  technologies: string[];
  features: string[];
  github?: string;
  live?: string;
  image?: string;
};

export const projectsData: Project[] = [
  {
    id: "01",
    title: "GoServe App",
    duration: "3 MONTHS",
    technologies: ["Flutter", "Firebase", "Dart", "Provider"],
    features: [
      "Real-time data sync across multiple connected devices using Firestore.",
      "Engineered a seamless, robust booking flow.",
      "Integrated secure authentication and role-based access control.",
    ],
    github: "https://github.com",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "02",
    title: "Pro Portfolio",
    duration: "1 WEEK",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Shadcn"],
    features: [
      "Apple Pro inspired UI with dynamic state switching and optical blurs.",
      "High-performance responsive design with custom motion physics.",
      "Highly optimized architecture with clean technical specs.",
    ],
    github: "https://github.com",
    live: "https://vercel.com",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
  },
];
