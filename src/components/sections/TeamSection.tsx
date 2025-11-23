import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const teamMembers = [
  {
    name: "Antoni Yeo",
    role: "Founder & President",
    image: "/anthony.jpg",
    bg: "bg-[#f4690c]",
  },
  {
    name: "Deddy Febryanto Tjhang",
    role: "Senior Partner",
    image: "/dedy.jpg",
    bg: "bg-[#f4690c]",
  },
];

export const TeamSection = () => {
  return (
    <section id="our-team" className="w-full py-24 px-6 bg-[#fff5eb] scroll-mt-24">
      <div className="container mx-auto">
        <h2 className="text-center font-serif text-6xl md:text-9xl text-[#102a3b] mb-16">
          our <span className="italic text-[#f4690c] text-[180px]">Team</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {/* Member Cards */}
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative w-[350px] h-[500px] rounded-4xl overflow-hidden shadow-2xl border-4 border-white"
            >
              {/* Image Background */}
              <div className="absolute inset-0 bg-gray-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info Overlay */}
              <div
                className={`absolute bottom-0 w-full ${member.bg} p-6 flex flex-col text-white transition-all duration-300`}
              >
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-serif text-3xl">{member.name}</h3>
                    <p className="font-sans opacity-90">{member.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* "See All" Card */}
          <div className="w-[350px] h-[500px] rounded-4xl border-4 border-[#f4690c] bg-white flex flex-col items-center justify-center cursor-pointer hover:bg-[#f4690c]/5 transition-colors shadow-xl">
            <div className="w-40 h-40 bg-[#f4690c] rounded-full flex items-center justify-center mb-6 text-white">
              <ArrowRight className="w-20 h-20" />
            </div>
            <h3 className="text-center font-serif text-[#f4690c] text-5xl leading-none">
              <span className="italic block text-3xl">see</span>
              All Team
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
