import React from "react";
import Image from "next/image";

const metrics = [
    { value: "$3m+", label: "won for clients" },
    { value: "200+", label: "5 stars reviews" },
    { value: "40%", label: "lower fees" },
];

export const QualitySection = () => {
    return (
        <section className="relative w-full py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-10">
            <Image
            src="/bg_highest.png"
            alt="Background Pattern"
            fill
            className="object-cover object-center"
            />
        </div>

        <div className="container mx-auto flex flex-col items-center gap-12 text-center">
            {/* Judul */}
            <h2 className="font-serif text-6xl md:text-8xl leading-tight max-w-4xl">
            <span className="text-brand-orange">Highest quality </span>
            <span className="text-brand-blue">professional service</span>
            </h2>

            <p className="font-sans text-brand-blue text-xl md:text-2xl max-w-3xl">
            We work collaboratively for our trusted clients to achieve their
            goals.
            </p>

            <div className="flex flex-wrap justify-center gap-12 md:gap-24 mt-8">
            {metrics.map((metric, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                <span className="font-serif text-brand-orange text-7xl md:text-8xl">
                    {metric.value}
                </span>
                <span className="font-sans text-brand-blue text-xl md:text-2xl">
                    {metric.label}
                </span>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};
