import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { timelineData as initialTimelineData } from '@/data/timeline';
import { skillsData as initialSkillsData } from '@/data/skills';
import { projectsData as initialProjectsData } from '@/data/projects';
import { experienceData as initialExperienceData } from '@/data/experience';

// Fetch specific data from Supabase, or fall back to default
export function usePortfolioData() {
  const [timeline, setTimeline] = useState(initialTimelineData); // Education
  const [experience, setExperience] = useState<any[]>(initialExperienceData);
  const [skills, setSkills] = useState(initialSkillsData);
  const [projects, setProjects] = useState(initialProjectsData);
  const [hero, setHero] = useState({
    title1: "MUHAMMAD",
    title2: "AMIRUL HAKIM",
    subtitle: "Software Engineering Student.\nBuilding precision-driven applications with optical clarity."
  });
  const [socials, setSocials] = useState({
    email: "amirulhakim6396@gmail.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  });
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        // We'll fetch from a generic 'portfolio_content' table
        // We'll expect rows with 'section' column (hero, timeline, skills, projects)
        // and a 'data' JSONB column.
        const { data, error } = await supabase
          .from('portfolio_content')
          .select('section, data');
          
        if (error) {
          // If table doesn't exist yet or other error, it just falls back to initial data array
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
  const saveData = async (section: string, payload: any) => {
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

  return { hero, timeline, experience, skills, projects, socials, isLoading, saveData, setHero, setTimeline, setExperience, setSkills, setProjects, setSocials };
}
