"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const FAQSection = () => {
  const { language } = useLanguage();
  const t = translations[language].faq;

  return (
    <section
      id="practice-area"
      className="w-full py-24 bg-white scroll-mt-24 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-center font-serif text-brand-orange text-7xl md:text-9xl mb-4">
          {t.title}
        </h2>
        <p className="text-center font-sans text-gray-500 text-xl mb-12">
          {t.subtitle}
        </p>

        <Accordion type="single" collapsible className="w-full space-y-6">
          {t.items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border-l-4 border-brand-orange rounded-r-xl shadow-sm px-6 data-[state=open]:shadow-md transition-all"
            >
              <AccordionTrigger className="font-serif text-[#102a3b] text-xl md:text-2xl font-medium hover:no-underline py-6 text-left">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="font-sans text-gray-600 text-lg pb-6 leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
