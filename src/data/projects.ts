export type Project = {
  id: string;
  title: string;
  lapTime: string;
  engineSpecs: string[];
  splits: string[]; // key features
  github?: string;
  live?: string;
  image?: string;
};

export const projectsData: Project[] = [
  {
    id: "01",
    title: "GoServe App",
    lapTime: "3 MONTHS",
    engineSpecs: ["Flutter", "Firebase", "Dart", "Provider"],
    splits: [
      "Real-time data sync across multiple connected devices using Firestore.",
      "Engineered a seamless, robust booking flow.",
      "Integrated secure authentication and role-based access control.",
    ],
    github: "https://github.com",
  },
  {
    id: "02",
    title: "Portfolio.sys",
    lapTime: "1 WEEK",
    engineSpecs: ["Next.js", "Tailwind CSS", "Framer Motion", "Shadcn"],
    splits: [
      "F1 Telemetry Dashboard inspired UI with dynamic state switching.",
      "High-performance responsive design with custom animations.",
      "100% Core Web Vitals optimized architecture.",
    ],
    github: "https://github.com",
    live: "https://vercel.com",
  },
];
