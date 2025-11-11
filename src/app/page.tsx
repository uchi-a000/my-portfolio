import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { WorksSection } from "@/components/works/works-section";
import { ThankYouSection } from "@/components/thank-you-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorksSection />
      <ThankYouSection />
    </main>
  );
}
