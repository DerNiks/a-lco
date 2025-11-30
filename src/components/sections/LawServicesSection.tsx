"use client";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const LawServicesSection = () => {
  const { language } = useLanguage();
  const t = translations[language].services;

  return (
    <section
      id="practice-area"
      className="w-full py-24 px-6 bg-transparent relative z-30 scroll-mt-24"
    >
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="w-full flex flex-row items-baseline justify-center gap-6 font-serif text-[#102a3b] mb-20 leading-none whitespace-nowrap">
          <span className="text-8xl">{t.prefix}</span>
          <span className="text-[#f4690c] italic text-8xl">{t.title}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {t.items.map((title, index) => (
            <Card
              key={index}
              className="bg-white border-2 border-gray-100 hover:border-[#f4690c] rounded-3xl shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
            >
              <CardContent className="p-8 flex flex-col h-full justify-between gap-6">
                <div className="flex justify-between items-start">
                  <h3 className="font-serif text-[#102a3b] text-4xl leading-tight group-hover:text-[#f4690c] transition-colors">
                    {title}
                  </h3>
                  <div className="w-12 h-12 rounded-full bg-gray-50 group-hover:bg-[#f4690c] flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-6 h-6 text-[#102a3b] group-hover:text-white" />
                  </div>
                </div>
                <p className="font-sans text-gray-500 text-lg">{t.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
