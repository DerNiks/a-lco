import { HeroSection } from "@/components/sections/HeroSection";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { LawServicesSection } from "@/components/sections/LawServicesSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ClientsSection } from "@/components/sections/ClientsSection"; // (Dari respons sebelumnya)
import { QualitySection } from "@/components/sections/QualitySection"; // (Dari respons sebelumnya)
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection"; // (Dari respons sebelumnya)

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center overflow-x-hidden bg-white">
      <HeroSection />

      {/* Wrapper Gradient untuk Values */}
      <div className="w-full bg-gradient-to-b from-[#ffbd80] to-[#f4690c] pt-10 pb-24 rounded-t-[3rem] -mt-10 z-20">
        <ValuesSection />
      </div>

      <LawServicesSection />
      <TeamSection />
      <ClientsSection />
      <QualitySection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
