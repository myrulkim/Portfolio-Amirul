import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { timelineData as initialTimelineData } from '@/data/timeline';
import { skillsData as initialSkillsData } from '@/data/skills';
import { projectsData as initialProjectsData } from '@/data/projects';
import { experienceData as initialExperienceData } from '@/data/experience';
import { 
  HeroData, 
  SocialsData, 
  ExperienceItem, 
  EducationItem, 
  SkillCategory, 
  ProjectItem, 
  AboutData,
  SettingsData
} from '@/types/portfolio';

// Fetch specific data from Supabase, or fall back to default
export function usePortfolioData() {
  const [timeline, setTimeline] = useState<EducationItem[]>(initialTimelineData); // Education
  const [experience, setExperience] = useState<ExperienceItem[]>(initialExperienceData);
  const [skills, setSkills] = useState<SkillCategory[]>(initialSkillsData);
  const [projects, setProjects] = useState<ProjectItem[]>(initialProjectsData);
  const [hero, setHero] = useState<HeroData>({
    title1: "MUHAMMAD",
    title2: "AMIRUL HAKIM",
    profession: "Software Engineering",
    specialization: "Full Stack Developer | Cloud & Automation",
    subtitle: "I build scalable software solutions, modern web applications, and automation tools that improve developer workflows and user experiences.",
    profile_image: ""
  });
  const [socials, setSocials] = useState<SocialsData>({
    email: "amirulhakim6396@gmail.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  });
  const [about, setAbout] = useState<AboutData>({
    headline: "I'm a passionate Software Engineering Student driven by curiosity and problem-solving.",
    description: "With a deep appreciation for precision design, I strive to write clean, maintainable code that delivers robust and seamless digital experiences. Every project is an opportunity to learn, optimize, and build something exceptional."
  });
  const [settings, setSettings] = useState<SettingsData>({
    cv_url: "",
    site_title: "Amirul | Software Engineer",
    site_description: "Senior Product Design & Software Engineering Portfolio"
  });
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from('portfolio_content')
          .select('section, data');
          
        if (error) {
          console.warn("Supabase fetch error (expected if tables are not initialized):", error.message);
          return;
        }

        if (data && data.length > 0) {
          const heroRow = data.find(r => r.section === 'hero');
          if (heroRow?.data) setHero(heroRow.data);
          
          const timelineRow = data.find(r => r.section === 'timeline'); // Education
          if (timelineRow?.data) setTimeline(timelineRow.data);
          
          const experienceRow = data.find(r => r.section === 'experience');
          if (experienceRow?.data) setExperience(experienceRow.data);
          
          const skillsRow = data.find(r => r.section === 'skills');
          if (skillsRow?.data) setSkills(skillsRow.data);

          const projectsRow = data.find(r => r.section === 'projects');
          if (projectsRow?.data) setProjects(projectsRow.data);

          const socialsRow = data.find(r => r.section === 'socials');
          if (socialsRow?.data) setSocials(socialsRow.data);

          const aboutRow = data.find(r => r.section === 'about');
          if (aboutRow?.data) setAbout(aboutRow.data);

          const settingsRow = data.find(r => r.section === 'settings');
          if (settingsRow?.data) setSettings(settingsRow.data);
        }
      } catch (err) {
        console.error("Failed to load portfolio data from Supabase", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  // Save specific section data to Supabase
  const saveData = async (
    section: string, 
    payload: HeroData | SocialsData | ExperienceItem[] | EducationItem[] | SkillCategory[] | ProjectItem[] | AboutData | SettingsData
  ) => {
    try {
      const { error } = await supabase
        .from('portfolio_content')
        .upsert({ section, data: payload }, { onConflict: 'section' });

      if (error) {
        console.error("Supabase Error saving", section, error);
        return false;
      }
      return true;
    } catch (err) {
      console.error("Exception saving", section, err);
      return false;
    }
  };

  return { hero, timeline, experience, skills, projects, socials, about, settings, isLoading, saveData, setHero, setTimeline, setExperience, setSkills, setProjects, setSocials, setAbout, setSettings };
}
