"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { newsData } from "@/data/news-gallery";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

export default function NewsPage() {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <Navbar />

      <main className="grow pt-32 pb-20 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-6xl md:text-8xl text-[#102a3b] mb-4">
              News & <span className="italic text-[#f4690c]">Articles</span>
            </h1>
            <p className="font-sans text-gray-500 text-lg max-w-2xl mx-auto">
              Latest updates, legal insights, and announcements.
            </p>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((news) => (
              <Link key={news.id} href={`/news/${news.id}`} className="group">
                <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden rounded-3xl bg-white flex flex-col">
                  {/* Thumbnail Image */}
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={news.thumbnail}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#f4690c] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {news.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col grow">
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      {news.date}
                    </div>

                    <h3 className="font-serif text-[#102a3b] text-2xl group-hover:text-[#f4690c] transition-colors mb-4 line-clamp-2">
                      {news.title}
                    </h3>
                    <div className="flex items-center text-[#102a3b] font-medium group-hover:text-[#f4690c] transition-colors mt-auto">
                      Read Article{" "}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
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
