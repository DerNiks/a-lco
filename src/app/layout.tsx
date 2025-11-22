import type { Metadata } from "next";
import { Instrument_Serif, Montserrat } from "next/font/google";
import "./globals.css";

// Setup Font
const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "A-LCO Law Firm",
  description: "Highest quality professional service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${montserrat.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
