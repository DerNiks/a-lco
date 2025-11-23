import React from "react";

export const ClientsSection = () => {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-center font-serif text-6xl md:text-8xl mb-16">
          <span className="text-[#102a3b]">our </span>
          <span className="text-[#f4690c]">Clients</span>
        </h2>

        {/* Grid Placeholder untuk Logo Klien */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-32 bg-[#f4690c] rounded-3xl shadow-md opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center text-white font-sans"
            >
              Logo {i + 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
