import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { WorksSection } from "@/components/works/works-section";
import { ThankYouSection } from "@/components/thank-you-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <div id="works">
        <WorksSection />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <ThankYouSection />
    </main>
  );
}
