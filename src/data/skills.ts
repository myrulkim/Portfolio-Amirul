// src/data/skills.ts

export type SkillCategory = {
  title: string;
  skills: Array<{ name: string; value: number }>;
};

export const skillsData: SkillCategory[] = [
  {
    title: "ENGINE",
    skills: [
      { name: "Java", value: 90 },
      { name: "Python", value: 85 },
      { name: "Dart", value: 80 },
      { name: "TypeScript", value: 75 },
    ],
  },
  {
    title: "CHASSIS",
    skills: [
      { name: "Spring Boot", value: 90 },
      { name: "Flutter", value: 85 },
      { name: "Next.js", value: 70 },
      { name: "Firebase", value: 80 },
    ],
  },
  {
    title: "AERODYNAMICS",
    skills: [
      { name: "Software Testing", value: 85 },
      { name: "JUnit/Selenium", value: 80 },
      { name: "Git Workflow", value: 95 },
      { name: "Agile/Scrum", value: 90 },
    ],
  },
];
