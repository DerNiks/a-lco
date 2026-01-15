"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { galleryData } from "@/data/news-gallery";
import Image from "next/image";
import { X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { language } = useLanguage();

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-serif text-6xl md:text-8xl text-[#102a3b] mb-4">
              {language === "en" ? "Our" : "我司"}{" "}
              <span className="italic text-[#f4690c]">
                {language === "en" ? "Gallery" : "画廊"}
              </span>
            </h1>
            <p className="font-sans text-gray-500 text-lg max-w-2xl mx-auto">
              {language === "en"
                ? "Capturing moments of our dedication, teamwork, and client engagements."
                : "捕捉我们奉献、团队合作和客户参与的时刻。"}
            </p>
          </div>

          {/* Masonry Layout Gallery */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryData.map((item, index) => (
              <div
                key={index}
                className="relative group cursor-pointer break-inside-avoid rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(item.src)}
              >
                {/* Image */}
                <div className="relative w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-[#102a3b]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-serif text-2xl px-4 text-center">
                    {item.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox Modal (Zoom Image) */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-100 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:text-[#f4690c] transition-colors">
            <X className="w-10 h-10" />
          </button>
          <div className="relative w-full max-w-5xl max-h-[90vh] aspect-video">
            <Image
              src={selectedImage}
              alt="Full view"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
