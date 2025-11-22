import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const values = [
    {
        title: "Integrity & Honesty",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        title: "Co-Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        title: "Clients' Satisfaction",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        title: "Excellence",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];

export const ValuesSection = () => {
    return (
        <section className="w-full px-6 pb-20">
        <div className="container mx-auto">
            {/* Judul Section */}
            <header className="w-full flex flex-col md:flex-row items-center justify-center py-12 gap-2">
            <span className="font-serif text-white text-6xl md:text-8xl">
                Our
            </span>
            <span className="font-serif italic text-white text-6xl md:text-8xl opacity-90">
                Values
            </span>
            </header>

            {/* Grid Kartu Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((item, index) => (
                <Card
                key={index}
                className="border-none shadow-lg rounded-3xl bg-white/95 backdrop-blur"
                >
                <CardContent className="flex flex-col items-start gap-4 p-8">
                    <h3 className="font-serif text-brand-blue text-4xl md:text-5xl leading-tight">
                    {item.title}
                    </h3>
                    <p className="font-sans text-brand-orange text-lg">
                    {item.description}
                    </p>
                </CardContent>
                </Card>
            ))}
            </div>
        </div>
        </section>
    );
};
