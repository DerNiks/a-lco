import React from "react";
import Image from "next/image"; // Gunakan ini jika sudah ada file logo

// Data Dummy Logo (Ganti dengan path gambar asli Anda nanti)
// Saya bagi menjadi 2 baris agar variatif
const row1Logos = [
  "Google",
  "Tokopedia",
  "Gojek",
  "Traveloka",
  "Shopee",
  "Lazada",
  "Blibli",
  "Tiket.com",
];

const row2Logos = [
  "Bank BCA",
  "Bank Mandiri",
  "Telkomsel",
  "Indosat",
  "Unilever",
  "Indofood",
  "Astra",
  "Sampoerna",
];

export const ClientsSection = () => {
  return (
    <section
      id="our-client"
      className="w-full py-24 bg-white overflow-hidden scroll-mt-24"
    >
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-center font-serif text-6xl md:text-8xl">
          <span className="text-[#102a3b]">our </span>
          <span className="text-[#f4690c]">Clients</span>
        </h2>
      </div>

      <div className="flex flex-col gap-10">
        {/* --- BARIS PERTAMA: Kiri ke Kanan (Left to Right) --- */}
        {/* Container Utama dengan lebar tak terbatas */}
        <div className="relative w-full overflow-hidden">
          {/* Track yang bergerak: Width fit content */}
          <div className="flex w-max min-w-full gap-8 animate-scroll-right hover:paused">
            {/* Kita render 2 KALI (Original + Duplicate) agar looping seamless */}
            {[...row1Logos, ...row1Logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center w-[200px] h-[100px] md:w-[250px] md:h-[120px] bg-gray-50 rounded-2xl border-2 border-transparent hover:border-[#f4690c]/30 hover:shadow-lg transition-all"
              >
                {/* GANTI INI DENGAN <Image /> JIKA SUDAH ADA FILE */}
                <span className="font-sans text-[#102a3b] text-xl font-bold opacity-50">
                  {logo}
                </span>
              </div>
            ))}
          </div>

          {/* Gradient Overlay untuk efek pudar di kiri kanan (Opsional) */}
          <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white to-transparent z-10" />
        </div>

        {/* --- BARIS KEDUA: Kanan ke Kiri (Right to Left) --- */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max min-w-full gap-8 animate-scroll-left hover:paused">
            {/* Render 2 KALI juga */}
            {[...row2Logos, ...row2Logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center w-[200px] h-[100px] md:w-[250px] md:h-[120px] bg-gray-50 rounded-2xl border-2 border-transparent hover:border-[#f4690c]/30 hover:shadow-lg transition-all"
              >
                <span className="font-sans text-[#102a3b] text-xl font-bold opacity-50">
                  {logo}
                </span>
              </div>
            ))}
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};
