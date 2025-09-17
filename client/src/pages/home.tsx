import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { FeatureHighlights } from "@/components/feature-highlights";
import { DashboardPreview } from "@/components/dashboard-preview";
import { HowItWorks } from "@/components/how-it-works";
import { LiveDemo } from "@/components/live-demo";
import { TechStack } from "@/components/tech-stack";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <FeatureHighlights />
      <DashboardPreview />
      <HowItWorks />
      <LiveDemo />
      <TechStack />
      <ContactSection />
      <Footer />
    </div>
  );
}
