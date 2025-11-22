import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import React from "react";

const services = [
  {
    title: "Company Law",
    description:
      "Comprehensive legal solutions for corporate governance and compliance.",
  },
  {
    title: "Labor Law",
    description:
      "Protecting rights and ensuring fair practices in the workplace.",
  },
  {
    title: "Tax Law",
    description: "Strategic tax planning and dispute resolution services.",
  },
  {
    title: "Contract Law",
    description: "Drafting and reviewing agreements to secure your interests.",
  },
  {
    title: "Intellectual Property",
    description: "Safeguarding your innovations and creative works.",
  },
  {
    title: "Immigration Law",
    description: "Assisting with visa, residency, and citizenship matters.",
  },
];

export const LawServicesSection = () => {
  return (
    <section className="w-full py-24 px-6 bg-white">
      <div className="container mx-auto flex flex-col items-center gap-16">
        <h2 className="text-center font-serif text-6xl md:text-8xl leading-tight text-brand-blue">
          Our{" "}
          <span className="text-brand-orange italic">Fields of Expertise</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-brand-orange/30 rounded-3xl bg-white"
            >
              <CardContent className="flex flex-col gap-6 p-8">
                <div className="flex items-start justify-between w-full">
                  <h3 className="font-serif text-brand-blue text-3xl leading-tight group-hover:text-brand-orange transition-colors">
                    {service.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                    <ArrowRight className="w-5 h-5 text-brand-blue group-hover:text-white" />
                  </div>
                </div>
                <p className="font-sans text-gray-500 text-lg leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
