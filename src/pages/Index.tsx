import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import ParticlesBackground from "@/components/ParticlesBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CertificatesSection from "@/components/CertificatesSection";
import ResumeSection from "@/components/ResumeSection";
import CallToAction from "@/components/CallToAction";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ExperienceSection from "@/components/ExperienceSection";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen"
    >
      <ParticlesBackground />
      <Navigation />

      <main>

        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ResumeSection />
        <CertificatesSection />
        <CallToAction />
        <ContactSection />
      </main>

      <Footer />
      <ScrollToTop />
    </motion.div>
  );
};

export default Index;
