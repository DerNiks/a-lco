import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative w-full bg-[#f4690c] text-white py-20 overflow-hidden mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        {/* Wechat Area */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <div className="relative w-50 h-50">
            <Image
              src="/wechat.png"
              alt="Wechat"
              fill
              className="object-contain"  
            />
          </div>
          <p className="font-sans text-white/80 max-w-xs text-center md:text-left">
            A Boutique Law Firm for Your Needs.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6 items-start md:items-end">
          {/* Phone */}
          <div className="flex items-center gap-4">
            <Phone className="w-8 h-8" />
            <span className="font-sans text-2xl font-medium">
              +62 811 1111 1111
            </span>
          </div>

          {/* Email */}
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
