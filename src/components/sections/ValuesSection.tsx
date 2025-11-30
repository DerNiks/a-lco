"use client";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const ValuesSection = () => {
  const { language } = useLanguage();
  const t = translations[language].values;

  return (
    <section id="about-us" className="container mx-auto px-6">
      {/* PERBAIKAN WARNA JUDUL: */}
      {/* text-[#102a3b]: Warna Biru di Mobile (agar kelihatan di background putih) */}
      {/* lg:text-white: Warna Putih di Desktop (saat masuk area oranye) */}
      <h2 className="text-center text-[#102a3b] lg:text-white font-serif text-6xl md:text-8xl mb-16">
        {t.prefix} <span className="italic">{t.title}</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {t.items.map((value, index) => (
          <Card
            key={index}
            className="bg-white/95 backdrop-blur border-none rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <CardContent className="p-10 flex flex-col gap-4">
              <h3 className="font-serif text-[#102a3b] text-4xl md:text-5xl leading-tight">
                {value.title}
              </h3>
              <p className="font-sans text-[#f4690c] text-xl font-medium">
                {value.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
