import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const valuesData = [
  {
    title: "Integrity & Honesty",
    description: "Upholding the highest ethical standards in every action.",
  },
  {
    title: "Co-Development",
    description: "Growing together with our clients and partners.",
  },
  {
    title: "Clients' Satisfaction",
    description: "Prioritizing client needs and delivering results.",
  },
  {
    title: "Excellence",
    description: "Striving for perfection in legal practice.",
  },
];

export const ValuesSection = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#ffbd80] to-[#f4690c] rounded-t-[50px] -mt-10 relative z-20">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-white font-serif text-6xl md:text-8xl mb-16">
          Our <span className="italic">Values</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {valuesData.map((value, index) => (
            <Card
              key={index}
              className="bg-white/95 backdrop-blur border-none rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <CardContent className="p-10 flex flex-col gap-4">
                <h3 className="font-serif text-[#102a3b] text-4xl md:text-5xl leading-tight">
                  {value.title}
                </h3>
                <p className="font-sans text-[#f4690c] text-xl font-medium">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
