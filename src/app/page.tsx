import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { LawServicesSection } from "@/components/sections/LawServicesSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { QualitySection } from "@/components/sections/QualitySection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <Navbar />

      <main className="grow">
        <HeroSection />
        <ValuesSection />
        <LawServicesSection />
        <TeamSection />
        <ClientsSection />
        <QualitySection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
