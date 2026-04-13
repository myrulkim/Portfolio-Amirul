"use client";

import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { 
  ExperienceItem, 
  EducationItem, 
  ProjectItem, 
  SkillCategory,
  SettingsData 
} from "@/types/portfolio";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("hero");

  const { hero, timeline, experience, skills, projects, socials, about, settings, isLoading, saveData, setHero, setTimeline, setExperience, setProjects, setSkills, setSocials, setAbout, setSettings } = usePortfolioData();
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'profile' | 'cv') => {
    const file = e.target.files?.[0];
    if (!file) return;

    console.log(`Starting upload for ${type}:`, file.name);
    setIsUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${type}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `${fileName}`;

      // Upload to 'portfolio' bucket
      const { data, error } = await supabase.storage
        .from('portfolio')
        .upload(filePath, file, {
          upsert: true,
          cacheControl: '3600'
        });

      if (error) {
        console.error("Upload error details:", error);
        if (error.message.includes('bucket not found')) {
          alert("Error: 'portfolio' storage bucket not found. Please create it in your Supabase dashboard and set it to 'Public'.");
        } else {
          alert("Error uploading file: " + error.message);
        }
        return;
      }

      console.log("File uploaded successfully:", data);

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('portfolio')
        .getPublicUrl(filePath);

      console.log("Generated Public URL:", publicUrl);

      if (type === 'profile') {
        const updatedHero = { ...hero, profile_image: publicUrl };
        setHero(updatedHero);
        // Auto-save to database
        await saveData('hero', updatedHero);
      } else {
        const updatedSettings = { ...settings, cv_url: publicUrl };
        setSettings(updatedSettings);
        // Auto-save to database
        await saveData('settings', updatedSettings);
      }
      
      alert(`Success! ${type === 'profile' ? 'Profile image' : 'Resume'} has been uploaded and saved.`);
    } catch (err) {
      console.error("Upload failed exception:", err);
      alert("Something went wrong during upload. Check console for details.");
    } finally {
      setIsUploading(false);
    }
  };

  useEffect(() => {
    document.title = "Admin | Software Engineering";
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput === "amirulhakim6396@gmail.com" && (passwordInput === process.env.NEXT_PUBLIC_ADMIN_PASSWORD || passwordInput === "Ngohmiyo@17")) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect email or password");
    }
  };

  const handleSaveHero = async () => {
    setIsSaving(true);
    const success = await saveData('hero', hero);
    setIsSaving(false);
    if (success) alert("Hero data saved to Supabase!");
  };

  const handleSaveAbout = async () => {
    setIsSaving(true);
    const success = await saveData('about', about);
    setIsSaving(false);
    if (success) alert("About data saved to Supabase!");
  };

  const handleSaveSettings = async () => {
    setIsSaving(true);
    const success = await saveData('settings', settings);
    setIsSaving(false);
    if (success) alert("Site settings saved to Supabase!");
  };

  const handleSaveTimeline = async () => {
    setIsSaving(true);
    const success = await saveData('timeline', timeline);
    setIsSaving(false);
    if (success) alert("Education data saved to Supabase!");
  };

  const handleSaveExperience = async () => {
    setIsSaving(true);
    const success = await saveData('experience', experience);
    setIsSaving(false);
    if (success) alert("Experience data saved to Supabase!");
  };

  const handleSaveProjects = async () => {
    setIsSaving(true);
    const success = await saveData('projects', projects);
    setIsSaving(false);
    if (success) alert("Projects data saved to Supabase!");
  };

  const handleSaveSkills = async () => {
    setIsSaving(true);
    const success = await saveData('skills', skills);
    setIsSaving(false);
    if (success) alert("Skills data saved to Supabase!");
  };

  const handleSaveSocials = async () => {
    setIsSaving(true);
    const success = await saveData('socials', socials);
    setIsSaving(false);
    if (success) alert("Social links saved to Supabase!");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-pure-black px-4">
        <div className="text-center mb-10 space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter text-white">Welcome Amirul Hakim.</h1>
          <p className="text-apple-gray font-medium tracking-tight">Sign in to manage your portfolio</p>
        </div>
        <form onSubmit={handleLogin} className="glass p-8 md:p-10 rounded-3xl space-y-6 w-full max-w-md border border-white/5">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold tracking-widest text-apple-gray uppercase mb-2 ml-1">Email</label>
              <input 
                type="email" 
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter email"
                className="w-full bg-[#1d1d1f] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-apple-blue transition-colors"
              />
            </div>
            
            <div className="relative">
              <label className="block text-xs font-bold tracking-widest text-apple-gray uppercase mb-2 ml-1">Password</label>
              <input 
                type={showPassword ? "text" : "password"} 
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter password"
                className="w-full bg-[#1d1d1f] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-apple-blue transition-colors pr-12"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-[38px] text-apple-gray hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <Button type="submit" size="lg" className="w-full bg-apple-blue hover:bg-apple-blue/90 text-white rounded-full font-bold h-14 text-lg mt-4">
            Continue
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="mb-12 flex items-center justify-between">
        <h1 className="text-4xl font-bold tracking-tighter">Content Manager</h1>
        <Button 
          variant="outline" 
          onClick={() => setIsAuthenticated(false)}
          className="glass rounded-full border-white/10 hover:border-white/20 transition-all text-white"
        >
          Logout
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 mb-8 border-b border-white/10 pb-4 overflow-x-auto">
        {['hero', 'about', 'socials', 'experience', 'education', 'projects', 'skills', 'settings'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full tracking-tight font-medium transition-colors ${
              activeTab === tab 
                ? 'bg-apple-blue text-white' 
                : 'bg-white/5 text-apple-gray hover:text-white'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="glass rounded-3xl p-8 border border-white/5">
        
        {/* Loading State */}
        {isLoading ? (
          <div className="text-center py-20 text-apple-gray">Loading from Supabase...</div>
        ) : (
          <>
            {/* HERO SECTION EDITOR */}
            {activeTab === 'hero' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-2xl font-bold tracking-tight mb-6">Hero Properties</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-apple-gray mb-2">Title Line 1</label>
                    <input 
                      value={hero.title1}
                      onChange={(e) => setHero({...hero, title1: e.target.value})}
                      className="w-full bg-[#1d1d1f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apple-blue transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-apple-gray mb-2">Title Line 2</label>
                    <input 
                      value={hero.title2}
                      onChange={(e) => setHero({...hero, title2: e.target.value})}
                      className="w-full bg-[#1d1d1f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apple-blue transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-apple-gray mb-2">Profession (e.g. Software Engineering)</label>
                    <input 
                      value={hero.profession}
                      onChange={(e) => setHero({...hero, profession: e.target.value})}
                      className="w-full bg-[#1d1d1f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apple-blue transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-apple-gray mb-2">Specialization (e.g. Full Stack Developer)</label>
                    <input 
                      value={hero.specialization}
                      onChange={(e) => setHero({...hero, specialization: e.target.value})}
                      className="w-full bg-[#1d1d1f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apple-blue transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-apple-gray mb-2">Subtitle (Use \n for new lines)</label>
                    <textarea 
                      value={hero.subtitle}
                      onChange={(e) => setHero({...hero, subtitle: e.target.value})}
                      rows={3}
                      className="w-full bg-[#1d1d1f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apple-blue transition-colors resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-apple-gray mb-2">Profile Image</label>
                    <div className="flex gap-4 items-center">
                       <div className="flex-1">
                          <input 
                            value={hero.profile_image}
                            onChange={(e) => setHero({...hero, profile_image: e.target.value})}
                            placeholder="URL Gambar (atau muat naik di sebelah)"
                            className="w-full bg-[#1d1d1f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apple-blue transition-colors text-sm"
                          />
                       </div>
                       <div className="relative">
                          <input 
                            type="file" 
                            onChange={(e) => handleFileUpload(e, 'profile')}
                            className="hidden" 
                            id="profile-upload"
                            accept="image/*"
                          />
                          <label 
                            htmlFor="profile-upload" 
                            className={`cursor-pointer px-6 py-3 rounded-xl border border-white/10 glass flex items-center gap-2 text-sm font-bold hover:border-white/20 transition-all ${isUploading ? 'opacity-50 pointer-events-none' : ''}`}
                          >
                            {isUploading ? "Uploading..." : "Upload File"}
                          </label>
                       </div>
                    </div>
                    <p className="text-[10px] text-apple-gray mt-2 ml-1 italic">Dapatkan link gambar dari Unsplash atau muat naik dari komputer anda.</p>
                  </div>
                </div>

                <div className="pt-6">
                  <Button 
                    onClick={handleSaveHero} 
                    disabled={isSaving}
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 font-medium"
                  >
                    {isSaving ? "Saving..." : "Save to Supabase"}
                  </Button>
                </div>
              </div>
            )}

            {/* ABOUT SECTION EDITOR */}
            {activeTab === 'about' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-2xl font-bold tracking-tight mb-6">About Me Content</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-apple-gray mb-2">Main Headline</label>
                    <input 
                      value={about.headline}
                      onChange={(e) => setAbout({...about, headline: e.target.value})}
                      className="w-full bg-[#1d1d1f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apple-blue transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-apple-gray mb-2">Brief Description</label>
                    <textarea 
                      value={about.description}
                      onChange={(e) => setAbout({...about, description: e.target.value})}
                      rows={5}
                      className="w-full bg-[#1d1d1f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apple-blue transition-colors resize-none"
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <Button 
                    onClick={handleSaveAbout} 
                    disabled={isSaving}
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 font-medium"
                  >
                    {isSaving ? "Saving..." : "Save to Supabase"}
                  </Button>
                </div>
              </div>
            )}

            {/* SOCIALS SECTION EDITOR */}
            {activeTab === 'socials' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-2xl font-bold tracking-tight mb-6">Social Links</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-apple-gray mb-2">Email Address</label>
                    <input 
                      type="email"
                      value={socials.email}
                      onChange={(e) => setSocials({...socials, email: e.target.value})}
                      className="w-full bg-[#1d1d1f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apple-blue transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-apple-gray mb-2">LinkedIn URL</label>
                    <input 
                      value={socials.linkedin}
                      onChange={(e) => setSocials({...socials, linkedin: e.target.value})}
                      className="w-full bg-[#1d1d1f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apple-blue transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-apple-gray mb-2">GitHub URL</label>
                    <input 
                      value={socials.github}
                      onChange={(e) => setSocials({...socials, github: e.target.value})}
                      className="w-full bg-[#1d1d1f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apple-blue transition-colors"
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <Button 
                    onClick={handleSaveSocials} 
                    disabled={isSaving}
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 font-medium"
                  >
                    {isSaving ? "Saving..." : "Save to Supabase"}
                  </Button>
                </div>
              </div>
            )}

            {/* EDUCATION SECTION EDITOR (Using Timeline Hook/DB) */}
            {activeTab === 'education' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold tracking-tight">Education Details</h3>
                  <Button onClick={() => setTimeline([{year: "New Year", title: "Degree", institution: "Institution", description: "Description", status: "done"}, ...timeline])} className="bg-white/10 hover:bg-white/20 text-white rounded-full">Add Entry</Button>
                </div>
                
                <div className="space-y-6">
                  {timeline.map((item: EducationItem, idx: number) => (
                    <div key={idx} className="bg-[#1d1d1f] p-6 rounded-2xl border border-white/5 space-y-4">
                      <div className="flex gap-4">
                        <input value={item.year} onChange={(e) => { const newT = [...timeline]; newT[idx].year = e.target.value; setTimeline(newT); }} placeholder="Year" className="w-1/3 bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-apple-blue transition-colors" />
                        <input value={item.title} onChange={(e) => { const newT = [...timeline]; newT[idx].title = e.target.value; setTimeline(newT); }} placeholder="Degree/Title" className="w-2/3 bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-apple-blue transition-colors" />
                      </div>
                      <input value={item.institution} onChange={(e) => { const newT = [...timeline]; newT[idx].institution = e.target.value; setTimeline(newT); }} placeholder="Institution" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-apple-blue transition-colors" />
                      <textarea value={item.description} onChange={(e) => { const newT = [...timeline]; newT[idx].description = e.target.value; setTimeline(newT); }} placeholder="Description" rows={2} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-apple-blue transition-colors resize-none" />
                      <div className="flex justify-between items-center">
                        <select value={item.status || "done"} onChange={(e) => { const newT = [...timeline]; newT[idx].status = e.target.value as "done" | "in-progress" | "planned"; setTimeline(newT); }} className="bg-black/50 border border-white/10 rounded-lg px-3 py-1 text-sm text-apple-gray outline-none rounded-xl">
                          <option value="done">Done</option>
                          <option value="in-progress">In Progress</option>
                          <option value="planned">Planned</option>
                        </select>
                        <Button variant="ghost" className="text-red-500 hover:text-red-400 hover:bg-red-500/10 h-8 px-3 rounded-full" onClick={() => { const newT = timeline.filter((_: EducationItem, i: number) => i !== idx); setTimeline(newT); }}>Remove</Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <Button onClick={handleSaveTimeline} disabled={isSaving} className="bg-white text-black hover:bg-gray-200 rounded-full px-8 font-medium">
                    {isSaving ? "Saving..." : "Save to Supabase"}
                  </Button>
                </div>
              </div>
            )}

            {/* EXPERIENCE SECTION EDITOR */}
            {activeTab === 'experience' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold tracking-tight">Professional Experience</h3>
                  <Button onClick={() => setExperience([{year: "New Year", title: "Job Title", company: "Company", description: "Description", status: "done"}, ...experience])} className="bg-white/10 hover:bg-white/20 text-white rounded-full">Add Job</Button>
                </div>
                
                <div className="space-y-6">
                  {experience.map((item: ExperienceItem, idx: number) => (
                    <div key={idx} className="bg-[#1d1d1f] p-6 rounded-2xl border border-white/5 space-y-4">
                      <div className="flex gap-4">
                        <input value={item.year} onChange={(e) => { const newE = [...experience]; newE[idx].year = e.target.value; setExperience(newE); }} placeholder="Duration/Year" className="w-1/3 bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-apple-blue transition-colors" />
                        <input value={item.title} onChange={(e) => { const newE = [...experience]; newE[idx].title = e.target.value; setExperience(newE); }} placeholder="Job Title" className="w-2/3 bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-apple-blue transition-colors" />
                      </div>
                      <input value={item.company} onChange={(e) => { const newE = [...experience]; newE[idx].company = e.target.value; setExperience(newE); }} placeholder="Company" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-apple-blue transition-colors" />
                      <textarea value={item.description} onChange={(e) => { const newE = [...experience]; newE[idx].description = e.target.value; setExperience(newE); }} placeholder="Role Description" rows={2} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-apple-blue transition-colors resize-none" />
                      <div className="flex justify-between items-center">
                        <select value={item.status || "done"} onChange={(e) => { const newE = [...experience]; newE[idx].status = e.target.value as "done" | "in-progress" | "planned"; setExperience(newE); }} className="bg-black/50 border border-white/10 rounded-lg px-3 py-1 text-sm text-apple-gray outline-none rounded-xl">
                          <option value="done">Done</option>
                          <option value="in-progress">In Progress</option>
                          <option value="planned">Planned</option>
                        </select>
                        <Button variant="ghost" className="text-red-500 hover:text-red-400 hover:bg-red-500/10 h-8 px-3 rounded-full" onClick={() => { const newE = experience.filter((_: ExperienceItem, i: number) => i !== idx); setExperience(newE); }}>Remove</Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <Button onClick={handleSaveExperience} disabled={isSaving} className="bg-white text-black hover:bg-gray-200 rounded-full px-8 font-medium">
                    {isSaving ? "Saving..." : "Save to Supabase"}
                  </Button>
                </div>
              </div>
            )}

            {/* PROJECTS SECTION EDITOR */}
            {activeTab === 'projects' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold tracking-tight">Projects Gallery</h3>
                  <Button onClick={() => setProjects([{id: Date.now().toString(), title: "New Project", duration: "1 MONTH", features: ["Built completely from scratch"], image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1200", technologies: ["React"], github: "", live: ""}, ...projects])} className="bg-white/10 hover:bg-white/20 text-white rounded-full">Add Project</Button>
                </div>
                
                <div className="space-y-6">
                  {projects.map((project: ProjectItem, idx: number) => (
                    <div key={idx} className="bg-[#1d1d1f] p-6 rounded-2xl border border-white/5 space-y-4">
                      <div className="flex gap-4">
                        <input value={project.title} onChange={(e) => { const newP = [...projects]; newP[idx].title = e.target.value; setProjects(newP); }} placeholder="Project Title" className="w-2/3 bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-apple-blue font-bold text-lg" />
                        <input value={project.duration} onChange={(e) => { const newP = [...projects]; newP[idx].duration = e.target.value; setProjects(newP); }} placeholder="Duration (e.g. 1 MONTH)" className="w-1/3 bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-apple-blue font-bold text-lg" />
                      </div>
                      
                      <textarea value={(project.features || []).join('\n')} onChange={(e) => { const newP = [...projects]; newP[idx].features = e.target.value.split('\n'); setProjects(newP); }} placeholder="Features (1 per line)" rows={3} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-apple-blue resize-none text-sm" />
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                           <label className="text-xs text-apple-gray mb-1 block">Image URL</label>
                           <input value={project.image || ""} onChange={(e) => { const newP = [...projects]; newP[idx].image = e.target.value; setProjects(newP); }} placeholder="https://..." className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-apple-blue text-sm" />
                        </div>
                        <div>
                           <label className="text-xs text-apple-gray mb-1 block">Technologies (comma separated)</label>
                           <input value={(project.technologies || []).join(", ")} onChange={(e) => { const newP = [...projects]; newP[idx].technologies = e.target.value.split(",").map((t:string) => t.trim()); setProjects(newP); }} placeholder="React, Node, Firebase" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-apple-blue text-sm" />
                        </div>
                        <div>
                           <label className="text-xs text-apple-gray mb-1 block">GitHub URL</label>
                           <input value={project.github || ""} onChange={(e) => { const newP = [...projects]; newP[idx].github = e.target.value; setProjects(newP); }} placeholder="https://github.com/..." className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-apple-blue text-sm" />
                        </div>
                        <div>
                           <label className="text-xs text-apple-gray mb-1 block">Live URL (optional)</label>
                           <input value={project.live || ""} onChange={(e) => { const newP = [...projects]; newP[idx].live = e.target.value; setProjects(newP); }} placeholder="https://..." className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-apple-blue text-sm" />
                        </div>
                      </div>

                      <div className="flex justify-end pt-2">
                        <Button variant="ghost" className="text-red-500 hover:text-red-400 hover:bg-red-500/10 h-8 px-3 rounded-full" onClick={() => { const newP = projects.filter((_: ProjectItem, i: number) => i !== idx); setProjects(newP); }}>Remove Project</Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <Button onClick={handleSaveProjects} disabled={isSaving} className="bg-white text-black hover:bg-gray-200 rounded-full px-8 font-medium">
                    {isSaving ? "Saving..." : "Save to Supabase"}
                  </Button>
                </div>
              </div>
            )}

            {/* SKILLS SECTION EDITOR */}
            {activeTab === 'skills' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold tracking-tight">Skills Matrix</h3>
                  <Button onClick={() => setSkills([{title: "New Category", skills: [{name: "New Skill", value: 50}]}, ...skills])} className="bg-white/10 hover:bg-white/20 text-white rounded-full">Add Category</Button>
                </div>
                
                <div className="space-y-6">
                  {skills.map((category: SkillCategory, catIdx: number) => (
                    <div key={catIdx} className="bg-[#1d1d1f] p-6 rounded-2xl border border-white/5 space-y-4">
                      
                      <div className="flex justify-between items-center bg-black/30 p-2 rounded-xl border border-white/5">
                        <input value={category.title} onChange={(e) => { const newS = [...skills]; newS[catIdx].title = e.target.value; setSkills(newS); }} placeholder="Category Title" className="w-1/2 bg-transparent border-none px-4 py-2 text-white font-bold focus:outline-none" />
                        <div className="flex gap-2">
                           <Button variant="ghost" className="text-apple-blue hover:text-white hover:bg-white/10 h-8 px-3 rounded-full" onClick={() => { const newS = [...skills]; newS[catIdx].skills.push({name: "New Skill", value: 50}); setSkills(newS); }}>+ Add Skill</Button>
                           <Button variant="ghost" className="text-red-500 hover:text-red-400 hover:bg-red-500/10 h-8 px-3 rounded-full" onClick={() => { const newS = skills.filter((_: SkillCategory, i: number) => i !== catIdx); setSkills(newS); }}>Remove Category</Button>
                        </div>
                      </div>

                      <div className="pl-4 space-y-3 mt-4 border-l border-white/10">
                         {category.skills.map((skill, skillIdx) => (
                           <div key={skillIdx} className="flex gap-4 items-center">
                              <input value={skill.name} onChange={(e) => { const newS = [...skills]; newS[catIdx].skills[skillIdx].name = e.target.value; setSkills(newS); }} placeholder="Skill Name" className="w-1/2 bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-apple-blue transition-colors text-sm" />
                              <div className="flex items-center gap-2 w-1/3">
                                 <input type="range" min="0" max="100" value={skill.value} onChange={(e) => { const newS = [...skills]; newS[catIdx].skills[skillIdx].value = parseInt(e.target.value); setSkills(newS); }} className="w-full accent-apple-blue" />
                                 <span className="text-xs text-apple-gray w-8 font-mono">{skill.value}%</span>
                              </div>
                              <Button 
                                variant="ghost" 
                                className="text-white/40 hover:text-white bg-transparent h-8 w-8 p-0 rounded-full" 
                                onClick={() => { 
                                  const newS = [...skills]; 
                                  newS[catIdx].skills = newS[catIdx].skills.filter((_, i) => i !== skillIdx); 
                                  setSkills(newS); 
                                }}
                              >
                                x
                              </Button>
                           </div>
                         ))}
                      </div>
                      
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <Button onClick={handleSaveSkills} disabled={isSaving} className="bg-white text-black hover:bg-gray-200 rounded-full px-8 font-medium">
                    {isSaving ? "Saving..." : "Save to Supabase"}
                  </Button>
                </div>
              </div>
            )}

            {/* SETTINGS SECTION EDITOR */}
            {activeTab === 'settings' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-2xl font-bold tracking-tight mb-6">Global Site Settings</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-apple-gray mb-2">Download Resume (CV)</label>
                    <div className="flex gap-4 items-center">
                       <div className="flex-1">
                          <input 
                            value={settings.cv_url}
                            onChange={(e) => setSettings({...settings, cv_url: e.target.value})}
                            placeholder="URL Resume (atau muat naik di sebelah)"
                            className="w-full bg-[#1d1d1f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apple-blue transition-colors text-sm"
                          />
                       </div>
                       <div className="relative">
                          <input 
                            type="file" 
                            onChange={(e) => handleFileUpload(e, 'cv')}
                            className="hidden" 
                            id="cv-upload"
                            accept=".pdf,.doc,.docx"
                          />
                          <label 
                            htmlFor="cv-upload" 
                            className={`cursor-pointer px-6 py-3 rounded-xl border border-white/10 glass flex items-center gap-2 text-sm font-bold hover:border-white/20 transition-all ${isUploading ? 'opacity-50 pointer-events-none' : ''}`}
                          >
                            {isUploading ? "Uploading..." : "Upload File"}
                          </label>
                       </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-apple-gray mb-2">SEO Site Title</label>
                    <input 
                      value={settings.site_title}
                      onChange={(e) => setSettings({...settings, site_title: e.target.value})}
                      className="w-full bg-[#1d1d1f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apple-blue transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-apple-gray mb-2">SEO Meta Description</label>
                    <textarea 
                      value={settings.site_description}
                      onChange={(e) => setSettings({...settings, site_description: e.target.value})}
                      rows={3}
                      className="w-full bg-[#1d1d1f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apple-blue transition-colors resize-none"
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <Button 
                    onClick={handleSaveSettings} 
                    disabled={isSaving}
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 font-medium"
                  >
                    {isSaving ? "Saving..." : "Save to Supabase"}
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
