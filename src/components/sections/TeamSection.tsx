import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const teamMembers = [
  {
    name: "Antoni Yeo",
    title: "Founder & President",
    image: "/anthony.jpg",
    bgColor: "bg-brand-orange",
  },
  {
    name: "Dedy Suwito",
    title: "Senior Partner",
    image: "/dedy.jpg",
    bgColor: "bg-brand-blue",
  },
];

export const TeamSection = () => {
  return (
    <section
      id="our-team"
      // Background sudah dihandle oleh wrapper di page.tsx, jadi di sini transparan
      className="w-full py-24 px-6 bg-transparent scroll-mt-24"
    >
      <div className="container mx-auto flex flex-col items-center gap-16">
        {/* PERUBAHAN DISINI: */}
        {/* Mengubah warna teks menjadi 'text-white' agar terbaca di atas background oranye */}
        <h2 className="text-center font-serif text-6xl md:text-9xl text-white">
          our <span className="italic text-[180px]">Team</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8 w-full">
          {/* Kartu Anggota Tim */}
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="w-full max-w-[350px] h-[500px] rounded-4xl overflow-hidden border-4 border-white shadow-2xl relative group bg-white"
            >
              <div className="absolute inset-0 bg-gray-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div
                className={`absolute bottom-0 left-0 right-0 ${member.bgColor} p-8 flex flex-col gap-2 transition-all duration-300 translate-y-2 group-hover:translate-y-0`}
              >
                <h3 className="font-serif text-white text-4xl leading-none">
                  {member.name}
                </h3>
                <p className="font-sans text-white/90 text-lg">
                  {member.title}
                </p>
              </div>
            </Card>
          ))}

          {/* Kartu "See All Team" */}
          {/* Kartu ini tetap menggunakan style aslinya (putih/oranye) karena kontrasnya sudah bagus sebagai elemen interaktif */}
          <Card className="w-full max-w-[350px] h-[500px] rounded-4xl border-4 border-brand-orange bg-[#102a3b] shadow-xl flex flex-col items-center justify-center gap-6 cursor-pointer hover:bg-[#2e4554] transition-colors">
            <div className="w-40 h-40 rounded-full bg-brand-orange flex items-center justify-center">
              <ArrowRight className="w-20 h-20 text-white" strokeWidth={1.5} />
            </div>
            <div className="text-center font-serif text-white text-5xl leading-none">
              <span className="italic block text-3xl mb-2">see</span>
              All Team
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
