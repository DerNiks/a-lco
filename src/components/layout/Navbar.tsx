"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].navbar;

  const navItems = [
    { name: t.about, href: "/#about-us" },
    { name: t.team, href: "/#our-team" },
    { name: t.practice, href: "/#practice-area" },
    { name: t.clients, href: "/#our-client" },
    { name: t.contact, href: "/#contact-us" },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="flex items-center justify-between w-full max-w-[1440px] pointer-events-auto">
        <Link
          href="/"
          className="relative w-24 h-24 md:w-32 md:h-32 cursor-pointer"
        >
          <Image src="/logo.svg" alt="Logo" fill className="object-contain" />
        </Link>

        {/* Container Flex untuk Navigasi + Bendera */}
        <div className="flex items-center gap-4">
          {/* Navigasi Utama (Pill Shape) */}
          <nav className="hidden md:flex items-center gap-2 bg-white/80 backdrop-blur-md border-2 border-[#102a3b] rounded-full px-2 py-2 shadow-sm">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href} scroll={true}>
                <Button
                  variant="ghost"
                  className={`rounded-full px-6 py-2 font-sans font-semibold text-lg h-auto ${
                    index === navItems.length - 1
                      ? "bg-[#f4690c] text-white hover:bg-[#f4690c]/90"
                      : "text-[#102a3b] hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>

          {/* TOMBOL BENDERA (DI SAMPING NAVBAR, DI LUAR PILL) */}
          <button
            onClick={toggleLanguage}
            className="w-12 h-8 overflow-hidden shadow-lg hover:scale-105 transition-transform shrink-0 cursor-pointer"
            title={
              language === "en" ? "Switch to Chinese" : "Switch to English"
            }
          >
            <Image
              // Logika: Tampilkan bendera saat ini. Klik untuk ganti.
              src={
                language === "en"
                  ? "/bendera_inggris.svg"
                  : "/bendera_china.svg"
              }
              alt="Language Switcher"
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </button>
        </div>
      </div>
    </header>
  );
};
