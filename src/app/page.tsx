import Image from "next/image";
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

      <main className="flex flex-col w-full items-center overflow-x-hidden bg-white">
        <HeroSection />

        <div className="w-full bg-[linear-gradient(180deg,#FFFFFF_0%,#FFFFFF_20%,#f4690c_45%,#f4690c_80%,#FFFFFF_100%)] pt-48 lg:pt-[450px] pb-24 rounded-t-[4rem] -mt-40 z-20 relative overflow-visible">
          <div className="absolute -bottom-[250px] left-1/2 -translate-x-1/2 w-[808px] h-[700px] z-0 pointer-events-none">
            <Image
              src="/bunga1.png"
              alt="Flower Decoration"
              fill
              className="object-contain object-bottom"
            />
          </div>
          <div className="relative z-10">
            <ValuesSection />
          </div>
        </div>

        <div className="relative z-30 w-full">
          <LawServicesSection />
        </div>

        <div className="w-full bg-[linear-gradient(180deg,#FFFFFF_0%,#f4690c_30%,#f4690c_70%,#FFFFFF_100%)] pt-40 pb-40 -mt-60 z-10 relative">
          <TeamSection />
        </div>
        <div className="relative z-30 w-full">
          <ClientsSection />
        </div>
        <QualitySection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
