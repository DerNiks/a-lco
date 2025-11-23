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

        {/* --- WRAPPER OUR VALUES --- */}
        {/* PERUBAHAN 1: 'overflow-hidden' diubah menjadi 'overflow-visible' agar bunga bisa melewati batas bawah */}
        <div className="w-full bg-[linear-gradient(180deg,#FFFFFF_0%,#FFFFFF_20%,#f4690c_45%,#f4690c_80%,#FFFFFF_100%)] pt-48 lg:pt-[450px] pb-24 rounded-t-[4rem] -mt-40 z-20 relative overflow-visible">
          {/* BACKGROUND IMAGE BUNGA */}
          {/* PERUBAHAN 2: Posisi '-bottom-[445px]' (Setengah dari tinggi 890px) */}
          <div className="absolute -bottom-[250px] left-1/2 -translate-x-1/2 w-[808px] h-[700px] z-0 pointer-events-none">
            <Image
              src="/bunga1.png"
              alt="Flower Decoration"
              fill
              className="object-contain object-bottom"
            />
          </div>

          {/* Konten Values */}
          <div className="relative z-10">
            <ValuesSection />
          </div>
        </div>
        {/* -------------------------- */}

        {/* Section ini akan tertimpa oleh setengah bagian bunga */}
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
