import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResumeSection from "@/components/ResumeSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Your Name | Computer Science Student & QA Enthusiast</title>
        <meta 
          name="description" 
          content="Professional portfolio of a Computer Science student specializing in QA, Software Testing, and Web Development. View my projects, skills, and experience." 
        />
        <meta name="keywords" content="portfolio, computer science, QA, software testing, web developer, junior developer" />
        <link rel="canonical" href="https://yourportfolio.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ResumeSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
