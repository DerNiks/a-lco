import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Import ArrowLeft
import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/data/team";

export default function TeamPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <Navbar />

      <main className="grow pt-40 pb-20 px-6">
        <div className="container mx-auto flex flex-col items-center gap-10">
          {/* TOMBOL KEMBALI */}
          <div className="w-full max-w-[1400px] flex justify-start">
            <Link href="/#our-team">
              <Button
                variant="outline"
                className="gap-2 rounded-full border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Button>
            </Link>
          </div>

          {/* Header */}
          <h1 className="text-center font-serif text-6xl md:text-8xl text-[#102a3b] mb-10">
            Our <span className="italic text-[#f4690c]">Team</span>
          </h1>

          {/* Grid Semua Anggota */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full">
            {teamMembers.map((member) => (
              <Link
                key={member.id}
                href={`/team/${member.id}`}
                className="block group w-full"
              >
                <Card className="w-full h-[500px] rounded-4xl overflow-hidden border-4 border-gray-100 hover:border-brand-orange shadow-lg hover:shadow-2xl relative bg-white transition-all group-hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gray-200">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 right-0 ${member.bgColor} p-8 flex flex-col gap-2`}
                  >
                    <h3 className="font-serif text-white text-3xl leading-none">
                      {member.name}
                    </h3>
                    <p className="font-sans text-white/90 text-base">
                      {member.title}
                    </p>
                    <Button
                      size="icon"
                      className="absolute -top-5 right-6 rounded-full bg-white text-brand-blue hover:bg-gray-100 shadow-lg w-10 h-10"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
