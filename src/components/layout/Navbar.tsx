"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].navbar;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: t.about, href: "/" },
    { name: t.team, href: "/team" },
    // { name: t.practice, href: "/#practice-area" },
    { name: t.news, href: "/news" },
    { name: t.gallery, href: "/gallery" },
    { name: t.clients, href: "/#our-client" },
    { name: t.contact, href: "/#contact-us" },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      {/* Wrapper Utama */}
      <div className="flex items-center justify-between w-full max-w-[1440px] relative">
        {/* Logo */}
        <Link
          href="/"
          className="relative w-16 h-16 md:w-32 md:h-32 cursor-pointer z-50"
        >
          <Image src="/logo.svg" alt="Logo" fill className="object-contain" />
        </Link>

        {/* --- DESKTOP MENU (Hidden di Mobile) --- */}
        <div className="hidden md:flex items-center gap-4">
          <nav className="flex items-center gap-2 bg-white/80 backdrop-blur-md border-2 border-[#102a3b] rounded-full px-2 py-2 shadow-sm">
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

          {/* Tombol Bendera Desktop */}
          <button
            onClick={toggleLanguage}
            className="w-12 h-8 overflow-hidden shadow-lg hover:scale-105 transition-transform shrink-0 cursor-pointer"
          >
            <Image
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

        <div className="md:hidden flex items-center gap-4 z-50">
          <button
            onClick={toggleLanguage}
            className="w-12 h-8 overflow-hidden shadow-lg"
          >
            <Image
              src={
                language === "en"
                  ? "/bendera_inggris.svg"
                  : "/bendera_china.svg"
              }
              alt="Language Switcher"
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </button>

          <Button
            size="icon"
            variant="ghost"
            className="bg-white/80 border-2 border-[#102a3b] rounded-full w-12 h-12"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#102a3b]" />
            ) : (
              <Menu className="w-6 h-6 text-[#102a3b]" />
            )}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-20 right-0 w-full md:hidden flex flex-col gap-2 bg-white/95 backdrop-blur-xl border-2 border-[#102a3b] rounded-3xl p-6 shadow-2xl z-40 animate-in slide-in-from-top-10">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                scroll={true}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button
                  variant="ghost"
                  className={`w-full justify-start text-xl py-6 rounded-xl ${
                    index === navItems.length - 1
                      ? "bg-[#f4690c] text-white hover:bg-[#f4690c]/90"
                      : "text-[#102a3b] hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
