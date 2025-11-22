import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const faqItems = [
  {
    id: "item-1",
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive range of legal services including Company Law, Labor Law, Tax Law, and more tailored to your business needs.",
  },
  {
    id: "item-2",
    question: "How can I schedule a consultation?",
    answer:
      "You can schedule a consultation by filling out the contact form below or calling us directly at the number provided.",
  },
  {
    id: "item-3",
    question: "Do you handle international cases?",
    answer:
      "Yes, we have expertise in Immigration Law and International Contract Law to assist with cross-border legal matters.",
  },
];

export const FAQSection = () => {
  return (
    <section className="w-full py-24 px-6 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-center font-serif text-brand-orange text-7xl md:text-9xl mb-16">
          FAQ
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-6">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="bg-white border-l-4 border-brand-orange rounded-r-xl shadow-sm px-6 data-[state=open]:shadow-md transition-all"
            >
              <AccordionTrigger className="font-sans text-brand-blue text-xl md:text-2xl font-medium hover:no-underline py-6">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="font-sans text-gray-600 text-lg pb-6 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};