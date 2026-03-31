export type ExperienceItemProps = {
  year: string;
  title: string;
  company: string;
  description: string;
  status?: "done" | "in-progress" | "planned";
};

export const experienceData: ExperienceItemProps[] = [
  {
    year: "CURRENT",
    title: "Software Engineer Intern",
    company: "Tech Company",
    description: "Developing robust mobile applications using Flutter and Firebase.",
    status: "in-progress",
  }
];
