import React from "react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-b from-white via-white to-[#fff5eb] px-6 pt-20">
      <div className="container mx-auto flex flex-col items-center z-10">
        {/* Tagline Utama */}
        <h1 className="text-center font-serif text-7xl md:text-9xl text-brand-blue leading-[0.9] mb-6">
          A boutique Law Firm for <br />
          <span className="italic text-brand-orange">Your Needs.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-center font-sans text-brand-blue/80 text-xl max-w-2xl mb-10">
          We work collaboratively for our trusted clients to achieve their goals
          with integrity and professional excellence.
        </p>

        {/* Gambar Justitia (Pastikan file ada di public/justitia_bunga.png) */}
        <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]">
          <Image
            src="/justitia_bunga.png"
            alt="Justitia Statue"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};
