"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const navT = translations[language].navbar;
  const servicesT = translations[language].services;

  const navLinks = [
    { name: navT.about, href: "/#about-us" },
    { name: navT.team, href: "/#our-team" },
    { name: navT.practice, href: "/#practice-area" },
    { name: navT.clients, href: "/#our-client" },
    { name: navT.contact, href: "/#contact-us" },
  ];

  return (
    <footer className="bg-[#102a3b] text-white overflow-hidden relative -mt-10 z-30">
      <div className="container mx-auto px-6 py-16 md:py-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="relative w-32 h-32 mb-2 block">
              <Image
                src="/logo.svg"
                alt="A-LCO Logo"
                fill
                className="object-contain invert brightness-0"
              />
            </Link>
            <p className="text-gray-300 font-sans leading-relaxed max-w-md">
              {t.desc}
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl mb-6 text-[#f4690c]">{t.nav}</h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-[#f4690c] transition-colors font-sans"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl mb-6 text-[#f4690c]">
              {t.practice}
            </h3>
            <ul className="flex flex-col gap-3">
              {servicesT.items.slice(0, 5).map((item) => (
                <li
                  key={item}
                  className="text-gray-300 font-sans cursor-default"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="font-serif text-2xl mb-2 text-[#f4690c]">
              {t.contact}
            </h3>
            <div className="flex flex-col gap-4 text-gray-300">
              <a
                href="mailto:antoniyeooffice@gmail.com"
                className="hover:text-[#f4690c] transition-colors font-sans"
              >
                antoniyeooffice@gmail.com
              </a>
              <a
                href="https://wa.me/628116666676"
                className="hover:text-[#f4690c] transition-colors font-sans"
              >
                +62 811 6666 676 (WhatsApp)
              </a>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <Image
                src="/wechat.png"
                alt="WeChat"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-4 font-sans text-sm text-gray-400 relative z-10">
          <p>
            © {new Date().getFullYear()} {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};
