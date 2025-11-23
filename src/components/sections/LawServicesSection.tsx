import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const expertiseData = [
  "Company Law",
  "Labor Law",
  "Tax Law",
  "Contract Law",
  "Intellectual Property",
  "Immigration Law",
];

export const LawServicesSection = () => {
  return (
    <section
      id="practice-area"
      className="w-full py-24 px-6 bg-transparent relative z-30 scroll-mt-24"
    >
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="w-full flex flex-row items-baseline justify-center gap-6 font-serif text-[#102a3b] mb-20 leading-none whitespace-nowrap">
          <span className="text-[128px]">Our</span>
          <span className="text-[#f4690c] italic text-[180px]">
            Fields of Expertise
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {expertiseData.map((title, index) => (
            <Card
              key={index}
              className="bg-white border-2 border-gray-100 hover:border-[#f4690c] rounded-3xl shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
            >
              <CardContent className="p-8 flex flex-col h-full justify-between gap-6">
                <div className="flex justify-between items-start">
                  <h3 className="font-serif text-[#102a3b] text-4xl leading-tight group-hover:text-[#f4690c] transition-colors">
                    {title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
