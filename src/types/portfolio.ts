export type HeroData = {
  title1: string;
  title2: string;
  profession: string;
  specialization: string;
  subtitle: string;
  profile_image: string;
};

export type SocialsData = {
  email: string;
  linkedin: string;
  github: string;
};

export type ExperienceItem = {
  year: string;
  title: string;
  company: string;
  description: string;
  status?: "done" | "in-progress" | "planned";
};

export type EducationItem = {
  year: string;
  title: string;
  institution: string;
  description: string;
  status?: "done" | "in-progress" | "planned";
};

export type Skill = {
  name: string;
  value: number;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export type ProjectItem = {
  id: string;
  title: string;
  duration: string;
  features: string[];
  image?: string;
  technologies: string[];
  github?: string;
  live?: string;
};

export type AboutData = {
  headline: string;
  description: string;
};

export type SettingsData = {
  cv_url: string;
  site_title: string;
  site_description: string;
};
