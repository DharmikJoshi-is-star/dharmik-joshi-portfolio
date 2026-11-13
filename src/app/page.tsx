import Hero from "./components/home/Hero";
import SummaryStrip from "./components/home/SummaryStrip";
import ExperienceSection from "./components/experience/ExperienceSection";
import SkillsSection from "./components/skills/SkillsSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import ProjectDemosSection from "./components/projects/ProjectDemosSection";
import LinkedInSection from "./components/linkedin/LinkedInSection";
import AsideSection from "./components/home/AsideSection";
import ContactSection from "./components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <SummaryStrip />
      <ExperienceSection />
      <LinkedInSection />
      <SkillsSection />
      <ProjectsSection />
      <ProjectDemosSection />
      <AsideSection />
      <ContactSection />
    </>
  );
}
