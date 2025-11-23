import React from "react";
import Image from "next/image";

const row1Logos = ["/pt1.jpg", "/pt2.jpg", "/pt3.jpg", "/pt4.jpg"];
const row2Logos = ["/pt5.jpg", "/pt6.jpg", "/pt7.jpg"];

export const ClientsSection = () => {
  return (
    <section
      id="our-client"
      className="w-full py-24 bg-white overflow-hidden scroll-mt-24"
    >
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-center font-serif text-6xl md:text-8xl">
          <span className="text-[#102a3b] text-[128px]">our </span>
          <span className="text-[#f4690c] text-[180px]">Clients</span>
        </h2>
      </div>

      <div className="flex flex-col gap-10">
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max min-w-full gap-8 animate-scroll-right">
            {[...row1Logos, ...row1Logos, ...row1Logos, ...row1Logos].map(
              (logo, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center w-[200px] h-[100px] md:w-[250px] md:h-[120px] bg-gray-50 rounded-2xl border-2 border-transparent hover:border-[#f4690c]/30 hover:shadow-lg transition-all p-6"
                >
                  <div className="relative w-[400px] h-[130px]">
                    <Image
                      src={logo}
                      alt={`Client Logo ${i}`}
                      fill
                      className="object-contain duration-300"
                    />
                  </div>
                </div>
              )
            )}
          </div>

          <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white to-transparent z-10" />
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex w-max min-w-full gap-8 animate-scroll-left">
            {[...row2Logos, ...row2Logos, ...row2Logos, ...row2Logos].map(
              (logo, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center w-[200px] h-[100px] md:w-[250px] md:h-[120px] bg-gray-50 rounded-2xl border-2 border-transparent hover:border-[#f4690c]/30 hover:shadow-lg transition-all p-6"
                >
                  <div className="relative w-[400px] h-[130px]">
                    <Image
                      src={logo}
                      alt={`Client Logo ${i}`}
                      fill
                      className="object-contain duration-300"
                    />
                  </div>
                </div>
              )
            )}
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};
