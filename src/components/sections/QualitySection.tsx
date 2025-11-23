import React from "react";

const stats = [
  { value: "$3m+", label: "won for clients" },
  { value: "200+", label: "5 stars reviews" },
  { value: "40%", label: "lower fees" },
];

export const QualitySection = () => {
  return (
    <section className="w-full py-24 px-6 relative">
      {/* Background Image Layer (Optional) */}
      <div className="absolute inset-0 opacity-5 bg-[url('/bg_highest.png')] bg-cover bg-center pointer-events-none" />

      <div className="container mx-auto text-center relative z-10">
        <h2 className="font-serif text-6xl md:text-8xl leading-tight mb-8">
          <span className="text-[#f4690c]">Highest quality </span> <br />
          <span className="text-[#102a3b]">professional service</span>
        </h2>

        <p className="font-sans text-[#102a3b] text-xl md:text-2xl max-w-3xl mx-auto mb-16">
          We work collaboratively for our trusted clients to achieve their
          goals.
        </p>

        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="font-serif text-[#f4690c] text-7xl md:text-9xl font-normal">
                {item.value}
              </span>
              <span className="font-sans text-[#102a3b] text-xl font-medium mt-2">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
