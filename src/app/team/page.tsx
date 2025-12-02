"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/data/team";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function TeamPage() {
  const { language } = useLanguage();
  const t = translations[language].team;

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow pt-40 pb-20 px-6">
        <div className="container mx-auto flex flex-col items-center gap-10">
          <div className="w-full max-w-[1400px] flex justify-start">
            <Link href="/#our-team">
              <Button
                variant="outline"
                className="gap-2 rounded-full border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> {t.backToHome}
              </Button>
            </Link>
          </div>

          <h1 className="text-center font-serif text-6xl md:text-8xl text-[#102a3b] mb-10">
            {t.prefix} <span className="italic text-[#f4690c]">{t.title}</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full">
            {teamMembers.map((member) => (
              <Link
                key={member.id}
                href={`/team/${member.id}`}
                className="block group w-full"
              >
                <Card className="w-full h-[500px] rounded-[2rem] overflow-hidden border-4 border-gray-100 hover:border-brand-orange shadow-lg hover:shadow-2xl relative bg-white transition-all group-hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gray-200">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 right-0 ${member.bgColor} p-8 flex flex-col gap-2`}
                  >
                    <h3 className="font-serif text-white text-3xl leading-none">
                      {member.name}
                    </h3>
                    <h3 className="font-serif text-white text-3xl leading-none">
                      {member.cname}
                    </h3>
                    {/* Mengakses title dengan [language] agar sesuai data bilingual */}
                    <p className="font-sans text-white/90 text-base">
                      {member.title[language]}
                    </p>
                    <Button
                      size="icon"
                      className="absolute top-[-20px] right-6 rounded-full bg-white text-brand-blue hover:bg-gray-100 shadow-lg w-10 h-10"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
