import React from "react";

export const ClientsSection = () => {
    return (
        <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
            <h2 className="text-center font-serif text-6xl md:text-8xl mb-16">
            <span className="text-brand-blue">our </span>
            <span className="text-brand-orange">Clients</span>
            </h2>

            {/* Grid Logo Klien (Placeholder Kotak Oranye) */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
                <div
                key={i}
                className="h-32 bg-brand-orange rounded-2xl shadow-md opacity-80 hover:opacity-100 transition-opacity"
                />
            ))}
            </div>
        </div>
        </section>
    );
};
