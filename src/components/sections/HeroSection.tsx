"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="relative w-full min-h-screen flex items-center pt-32 md:pt-40 pb-12 overflow-visible z-30 bg-[#fff5eb]/20">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#f4690c]/5 -z-20" />

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between h-full relative">
        <div className="w-full lg:w-[75%] flex flex-col items-center lg:items-start text-center lg:text-left z-20 mb-20 lg:mb-0 mt-20 lg:mt-0">
          <h1 className="leading-[1.1] md:leading-none mb-6">
            <span className="block font-serif text-[#f4690c] text-5xl md:text-[64px] font-normal tracking-wide">
              {t.title1}
            </span>
            <span className="block font-serif text-[#102a3b] text-6xl md:text-[180px] italic mt-2 whitespace-nowrap">
              {t.title2}
            </span>
          </h1>

          <p className="font-sans text-[#102a3b] text-lg md:text-xl leading-relaxed max-w-4xl font-medium opacity-90 text-justify">
            {t.desc}
          </p>
        </div>

        {/* PERBAIKAN: Tambahkan 'lg:max-h-[1200px]' agar gambar tidak terlalu besar saat zoom out */}
        <div className="relative w-full h-[600px] lg:absolute lg:right-[-6%] lg:top-[-10%] lg:w-[60vw] lg:h-[135vh] lg:max-h-[1200px] z-50 pointer-events-none">
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
