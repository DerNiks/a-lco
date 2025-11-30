import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { teamMembers } from "@/data/team"; // Pastikan path ini benar

export const TeamSection = () => {
  // Ambil 3 anggota pertama
  const featuredMembers = teamMembers.slice(0, 3);

  return (
    <section
      id="our-team"
      className="w-full py-24 px-6 bg-transparent scroll-mt-24"
    >
      <div className="container mx-auto flex flex-col items-center gap-16">
        <h2 className="text-center font-serif text-6xl md:text-8xl text-white">
          our <span className="italic text-white">Team</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8 w-full">
          {featuredMembers.map((member) => (
            // PERBAIKAN: Pindahkan 'w-full max-w-[350px]' ke Link agar layout Flexbox stabil
            <Link
              key={member.id}
              href={`/team/${member.id}`}
              className="w-full max-w-[350px] group block"
            >
              {/* Card sekarang mengikuti ukuran Link (h-full/w-full) */}
              <Card className="h-[500px] rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl relative bg-white transition-transform duration-300 group-hover:-translate-y-2">
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
                  <Button
                    size="icon"
                    className="absolute top-[-20px] right-6 rounded-full bg-white text-brand-blue hover:bg-gray-100 shadow-lg w-12 h-12"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </Card>
            </Link>
          ))}

          {/* PERBAIKAN: Terapkan juga sizing pada Link 'See All Team' */}
          <Link href="/team" className="w-full max-w-[350px] block">
            <Card className="h-[500px] rounded-[2rem] border-4 border-brand-orange bg-white shadow-xl flex flex-col items-center justify-center gap-6 cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:bg-gray-50">
              <div className="w-40 h-40 rounded-full bg-brand-orange flex items-center justify-center">
                <ThumbsUp className="w-20 h-20 text-white" strokeWidth={1.5} />
              </div>
              <div className="text-center font-serif text-brand-orange text-5xl leading-none">
                <span className="italic block text-3xl mb-2">see</span>
                All Team
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
};
