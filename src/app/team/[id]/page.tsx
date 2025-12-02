"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { teamMembers } from "@/data/team";
import { notFound, useParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function TeamDetailPage() {
  const params = useParams();
  const { id } = params;
  const { language } = useLanguage();
  const t = translations[language].team;

  const member = teamMembers.find((m) => m.id === id);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Member Not Found
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <Navbar />

      <main className="grow pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10">
            <Link href="/team">
              <Button
                variant="ghost"
                className="gap-2 text-[#102a3b] hover:text-[#f4690c] p-0 text-lg font-sans"
              >
                <ArrowLeft className="w-6 h-6" /> {t.backToAll}
              </Button>
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <div className="w-full lg:w-1/3 shrink-0">
              <div className="relative w-full aspect-3/4 rounded-4xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            <div className="w-full lg:w-2/3 flex flex-col gap-8">
              <div>
                <h1 className="font-serif text-[#f4690c] text-6xl md:text-6xl leading-tight mb-2">
                  {member.name}
                </h1>
                <h2 className="font-serif text-[#f4690c] text-5xl md:text-5xl leading-tight mb-2">
                  {member.cname}
                </h2>
                <p className="font-sans text-[#102a3b] text-2xl md:text-3xl font-medium">
                  {member.title[language]}
                </p>
                <div className="w-full h-1 bg-gray-200 mt-6 rounded-full" />
              </div>

              <p className="font-sans text-gray-600 text-lg leading-relaxed">
                {member.bio[language]}
              </p>

              <div className="space-y-4">
                <h3 className="font-serif text-[#102a3b] text-3xl md:text-4xl">
                  {t.practiceAreas}
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                  {member.practiceAreas[language]?.map((area, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 font-sans text-gray-600 text-lg"
                    >
                      <span className="text-[#f4690c] mt-1.5 w-2 h-2 rounded-full bg-[#f4690c] shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Education */}
              <div className="space-y-4">
                <h3 className="font-serif text-[#102a3b] text-3xl md:text-4xl">
                  {t.education}
                </h3>
                <ul className="space-y-2">
                  {member.education[language]?.map((edu, index) => (
                    <li
                      key={index}
                      className="font-sans text-gray-600 text-lg pl-5 border-l-4 border-[#f4690c]/30"
                    >
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
