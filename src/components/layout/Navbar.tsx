import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const navItems = [
  "About Us",
  "Our Team",
  "Practice Area",
  "Our Client",
  "Contact Us",
];

export const Navbar = () => {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="flex items-center justify-between w-full max-w-[1440px]">
        {/* Logo - Pastikan file ada di public */}
        <div className="relative w-24 h-24 md:w-32 md:h-32">
          <Image src="/logo.svg" alt="Logo" fill className="object-contain" />
        </div>

        <nav className="hidden md:flex items-center gap-2 bg-white/80 backdrop-blur-md border-2 border-[#102a3b] rounded-full px-2 py-2 shadow-sm">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`rounded-full px-6 py-2 font-sans font-semibold text-lg h-auto ${
                item === "Contact Us"
                  ? "bg-[#f4690c] text-white hover:bg-[#f4690c]/90"
                  : "text-[#102a3b] hover:bg-gray-100"
              }`}
            >
              {item}
            </Button>
          ))}
        </nav>

        {/* Mobile Menu Button placeholder could go here */}
      </div>
    </header>
  );
};
