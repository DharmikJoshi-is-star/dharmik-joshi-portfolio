import React from "react";
import Hero from "./components/home/Hero";
import TechStack from "./components/home/TechStack";
import ProjectsSection from "./components/projects/ProjectsSection";
import ResumeSection from "./components/resume/ResumeSection";
import TestimonialsSection from "./components/testimonials/TestimonialsSection";
import ContactSection from "./components/contact/ContactSection";
import YouTubeSection from "./components/youtube/YouTubeSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <ProjectsSection />
      <ResumeSection />
      <TestimonialsSection />
      <YouTubeSection />
      <ContactSection />
    </>
  );
}
