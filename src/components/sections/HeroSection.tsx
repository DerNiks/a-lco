import React from "react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-32 md:pt-40 pb-12 overflow-visible z-30 bg-[#fff5eb]/20">
      <div className="absolute inset-0 bg-linear-to-br from-white via-white to-[#f4690c]/5 -z-20" />

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between h-full relative">
        <div className="w-full lg:w-[75%] flex flex-col items-center lg:items-start text-center lg:text-left z-20 mb-20 lg:mb-0 mt-20 lg:mt-0">
          <h1 className="leading-[1.1] md:leading-none mb-6">
            <span className="block font-serif text-[#f4690c] text-5xl md:text-[64px] font-normal tracking-wide text-right">
              A Boutique Law Firm For
            </span>
            <span className="block font-serif text-[#102a3b] text-6xl md:text-[180px] italic mt-2 whitespace-nowrap">
              Your Needs.
            </span>
          </h1>

          <p className="font-sans text-[#102a3b] text-lg md:text-xl leading-relaxed max-w-3xl font-medium opacity-90 text-justify">
            Our law firm, Antoni Yeo & Partners, Law & Consultants Office
            (popularly known as A-LCO) is a law firm established with the means
            to assists corporations and resolve legal issues. Specializing in
            business and corporate laws as well as other areas of law such as:
            bankruptcy law, criminal law, family law, labor law, tax law,
            banking & finance, and contract law as our main area of practice.
          </p>
        </div>

        {/* --- IMAGE CONTENT (Kanan - Overlapping) --- */}
        <div className="relative w-full h-[600px] lg:absolute lg:right-[-6%] lg:top-[-10%] lg:w-[60vw] lg:h-[135vh] z-50 pointer-events-none">
          <Image
            src="/justitia_bunga.png"
            alt="Lady Justice"
            fill
            className="object-contain object-center lg:object-top-right"
            priority
          />
        </div>
      </div>
    </section>
  );
};
