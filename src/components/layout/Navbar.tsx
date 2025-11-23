import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link"; // Import Link
import React from "react";

const navItems = [
  { name: "About Us", href: "#about-us" }, // Target: ValuesSection
  { name: "Our Team", href: "#our-team" }, // Target: TeamSection
  { name: "Practice Area", href: "#practice-area" }, // Target: LawServicesSection
  { name: "Our Client", href: "#our-client" }, // Target: ClientsSection
  { name: "Contact Us", href: "#contact-us" }, // Target: ContactSection
];

export const Navbar = () => {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="flex items-center justify-between w-full max-w-[1440px] pointer-events-auto">
        {/* Logo */}
        <Link
          href="/"
          className="relative w-24 h-24 md:w-32 md:h-32 cursor-pointer"
        >
          <Image src="/logo.svg" alt="Logo" fill className="object-contain" />
        </Link>

        <nav className="hidden md:flex items-center gap-2 bg-white/80 backdrop-blur-md border-2 border-[#102a3b] rounded-full px-2 py-2 shadow-sm">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href} passHref>
              <Button
                variant="ghost"
                className={`rounded-full px-6 py-2 font-sans font-semibold text-lg h-auto ${
                  item.name === "Contact Us"
                    ? "bg-[#f4690c] text-white hover:bg-[#f4690c]/90"
                    : "text-[#102a3b] hover:bg-gray-100"
                }`}
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
