import React from "react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Gradient/Slice Simulation */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#fff5eb] -z-20" />

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[100px] leading-[0.9] text-[#102a3b] mb-6">
            <span className="text-[#f4690c] block mb-2 text-4xl md:text-5xl lg:text-6xl font-sans font-medium tracking-widest uppercase">
              A Boutique Law Firm For
            </span>
            Your Needs.
          </h1>

          <p className="font-sans text-[#102a3b] text-lg md:text-xl leading-relaxed max-w-2xl font-medium mt-8">
            Our law firm, Antoni Yeo & Partners (A-LCO), is established to
            assist corporations and resolve legal issues. Specializing in
            business, corporate laws, bankruptcy, criminal law, and more.
          </p>
        </div>

        {/* Image Content */}
        <div className="flex-1 relative w-full max-w-[600px] h-[600px] lg:h-[800px]">
          {/* Lady Justice Image */}
          <Image
            src="/justitia_bunga.png" // Pastikan file ini ada di public
            alt="Lady Justice"
            fill
            className="object-contain object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
};
