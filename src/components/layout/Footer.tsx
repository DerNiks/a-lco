import { Mail, Phone } from "lucide-react";
import Image from "next/image"; // Jika ada background image footer

export const Footer = () => {
  return (
    <footer className="relative w-full bg-[#f4690c] text-white py-20 overflow-hidden mt-20">
      {/* Background decoration if needed */}

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        {/* Logo Area */}
        <div className="flex flex-col gap-4">
          {/* Placeholder logo putih jika ada */}
          <h2 className="font-serif text-4xl">A-LCO</h2>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6 items-start md:items-end">
          <div className="flex items-center gap-4">
            <Phone className="w-8 h-8" />
            <span className="font-sans text-2xl font-medium">
              +62 811 1111 1111
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="w-8 h-8" />
            <span className="font-sans text-2xl font-medium">
              antoniyeooffice@gmail.com
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
