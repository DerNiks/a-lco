"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { newsData } from "@/data/news-gallery";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { useParams, notFound } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function NewsDetailPage() {
  const params = useParams();
  const id = params.id;

  // Cari berita berdasarkan ID
  const news = newsData.find((item) => item.id === id);

  if (!news) {
    return notFound();
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <Navbar />

      <main className="grow pt-40 pb-20 px-6">
        <article className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/news">
              <Button
                variant="ghost"
                className="h-10pl-0 hover:bg-transparent hover:text-[#f4690c] text-[#102a3b] gap-2 font-sans text-lg"
              >
                <ArrowLeft className="w-5 h-5" /> Back to News
              </Button>
            </Link>
          </div>

          {/* Header Berita */}
          <div className="mb-10">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="bg-gray-100 text-[#102a3b] px-3 py-1 rounded-full font-medium">
                {news.category}
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {news.date}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Admin A-LCO
              </div>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl text-[#102a3b] leading-tight mb-8">
              {news.title}
            </h1>

            {/* Main Image */}
            <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl mb-12">
              <Image
                src={news.thumbnail}
                alt={news.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Konten Artikel */}
          <div
            className="prose prose-lg max-w-none font-sans text-gray-700
            prose-headings:font-serif prose-headings:text-[#102a3b]
            prose-a:text-[#f4690c] prose-blockquote:border-l-[#f4690c]
            leading-relaxed text-justify"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
