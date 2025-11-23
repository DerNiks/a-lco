"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

// --- DATA & LOGIC (Tetap Sama) ---
const stats = [
  { value: "$3m+", label: "won for clients" },
  { value: "200+", label: "5 stars reviews" },
  { value: "40%", label: "lower fees" },
];

function useCounter(
  end: number,
  duration: number = 2000,
  start: boolean = false
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const easeOut = 1 - (1 - percentage) * (1 - percentage);

      setCount(Math.floor(easeOut * end));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, start]);

  return count;
}

const StatItem = ({ value, label }: { value: string; label: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const match = value.match(/^([^0-9]*)([0-9]+)(.*)$/);
  const prefix = match ? match[1] : "";
  const targetNumber = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] : "";

  const count = useCounter(targetNumber, 2000, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <span className="font-serif text-[#f4690c] text-7xl md:text-9xl font-normal">
        {prefix}
        {count}
        {suffix}
      </span>
      <span className="font-sans text-[#102a3b] text-xl font-medium mt-2">
        {label}
      </span>
    </div>
  );
};

// --- PERBAIKAN KOMPONEN UTAMA ---
export const QualitySection = () => {
  return (
    <section className="relative w-full py-24 px-6 overflow-hidden">
      {/* 1. BACKGROUND GAMBAR (Layer paling bawah, z-0) */}
      {/* Hapus '-z-20' dan ganti dengan 'z-0', pastikan parent section 'relative' */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/bg_highest.png"
          alt="Background Pattern"
          fill
          className="object-cover object-center" // Naikkan opacity sedikit agar lebih terlihat
          priority
        />
        {/* Overlay putih transparan agar teks tetap kontras */}
        <div className="absolute inset-0 bg-white/50" />
      </div>

      {/* 2. KONTEN UTAMA (Layer di atas gambar, z-10) */}
      <div className="container mx-auto text-center relative z-10">
        <h2 className="font-serif text-6xl md:text-8xl leading-tight mb-8">
          <span className="text-[#f4690c]">Highest quality </span> <br />
          <span className="text-[#102a3b]">professional service</span>
        </h2>

        <p className="font-sans text-[#102a3b] text-xl md:text-2xl max-w-3xl mx-auto mb-16">
          We work collaboratively for our trusted clients to achieve their
          goals.
        </p>

        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          {stats.map((item, index) => (
            <StatItem key={index} value={item.value} label={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
};
