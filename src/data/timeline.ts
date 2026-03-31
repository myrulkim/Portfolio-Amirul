export type TimelineItemProps = {
  year: string;
  title: string;
  institution: string;
  description: string;
  status?: "done" | "in-progress" | "planned";
};

export const timelineData: TimelineItemProps[] = [
  {
    year: "CURRENT",
    title: "Bachelor of Software Engineering",
    institution: "Universiti Kuala Lumpur (UniKL)",
    description: "Final year student. Specialized in cross-platform development, software testing methodologies, and high-performance system design.",
    status: "in-progress",
  },
  {
    year: "2023 - 2024",
    title: "GoServe App Development",
    institution: "Final Year Project",
    description: "Led the development of a comprehensive booking application. Engineered with Flutter and Firebase to deliver real-time data synchronization and a seamless booking flow.",
    status: "done",
  },
  {
    year: "2022",
    title: "Java & Object-Oriented Principles",
    institution: "Core Foundation",
    description: "Mastered core Java concepts, design patterns, and built several CLI and desktop software utilities to automate academic tasks.",
    status: "done",
  },
];
