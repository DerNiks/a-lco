import React from "react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-48 lg:pt-85 pb-20 overflow-hidden bg-[#fff5eb]/30">
      {/* Background Gradient Halus */}
      <div className="absolute inset-0 bg-linear-to-br from-white via-white to-[#f4690c]/5 -z-20" />

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center h-full relative">
        {/* --- TEXT CONTENT --- */}
        <div className="flex-1 z-20 flex flex-col items-center lg:items-start text-center lg:text-left mt-10 lg:mt-0">
          <h1 className="leading-[0.9] mb-8">
            {/* Baris 1: Font Serif, Orange, Normal */}
            <span className="block font-serif text-[#f4690c] text-5xl md:text-7xl lg:text-[90px] font-normal tracking-wide mb-2">
              A Boutique Law Firm For
            </span>

            {/* Baris 2: Font Serif, Dark Blue, Italic */}
            <span className="block font-serif text-[#102a3b] text-6xl md:text-8xl lg:text-[120px] italic">
              Your Needs.
            </span>
          </h1>

          <p className="font-sans text-[#102a3b] text-lg md:text-xl leading-relaxed max-w-xl font-medium mt-4 lg:ml-2 opacity-90">
            Our law firm, Antoni Yeo & Partners, Law & Consultants Office
            (popularly known as A-LCO) is a law firm established with the means
            to assists corporations and resolve legal issues. Specializing in
            business and corporate laws as well as other areas of law such as:
            bankruptcy law, criminal law, family law, labor law, tax law,
            banking & finance, and contract law as our main area of practice.
          </p>
        </div>

        {/* --- IMAGE CONTENT (JUSTITIA) --- */}
        {/* Posisi tetap dipertahankan sesuai request sebelumnya (Digeser ke kanan -120px) */}
        <div className="relative w-full h-[600px] mt-12 lg:mt-0 lg:absolute lg:right-[-76px] lg:top-1/2 lg:-translate-y-1/2 lg:h-[900px] lg:w-[800px] z-10 pointer-events-none">
          <Image
            src="/justitia_bunga.png"
            alt="Lady Justice"
            fill
            className="object-contain object-center lg:object-right"
            priority
          />
        </div>
      </div>
    </section>
  );
};
