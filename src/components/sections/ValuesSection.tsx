import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const valuesData = [
  {
    title: "Integrity & Honesty",
    description: "We pride ourselves in being truthful to our clients and \"doing the right thing\".",
  },
  {
    title: "Co-Development",
    description: "We grow with our clients by being adaptive and collaborative. Clients are part of the family!",
  },
  {
    title: "Clients' Satisfaction",
    description: "Our services are client-oriented, meaning that we care about your needs and satisfication!",
  },
  {
    title: "Excellence",
    description: "We recognize that our clients must have total trust and confidence in us. Therefore, we strive to be consistent and excellent.",
  },
];

export const ValuesSection = () => {
  return (
    <section id="about-us" className="container mx-auto px-6">
      <h2 className="text-center text-white font-serif text-[128px] md:text-8xl mb-16">
        Our <span className="italic text-[200px]">Values</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-30 gap-y-15 max-w-6xl mx-auto">
        {valuesData.map((value, index) => (
          <Card
            key={index}
            className="w-[590px] h-[200px] bg-white/95 backdrop-blur border-none rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <CardContent className="flex flex-col gap-4">
              <h3 className="font-serif text-[#102a3b] text-4xl md:text-5xl leading-tight">
                {value.title}
              </h3>
              <p className="font-sans text-[#f4690c] text-xl font-medium text-justify">
                {value.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
