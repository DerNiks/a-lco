import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import React from "react";

export const ContactSection = () => {
  return (
    <section className="w-full py-24 px-6">
      <div className="container mx-auto max-w-5xl flex flex-col items-center">
        <h2 className="text-center font-serif text-[#f4690c] text-7xl md:text-9xl mb-16">
          Get in Touch
        </h2>

        <form className="w-full flex flex-col gap-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Full Name */}
            <div className="flex flex-col gap-3">
              <label className="font-serif text-[#102a3b] text-3xl pl-2">
                Full Name
              </label>
              <Input
                placeholder="Full Name"
                className="h-20 rounded-2xl border-4 border-[#f4690c] text-2xl px-6 font-sans italic placeholder:text-black/40 focus-visible:ring-0"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-3">
              <label className="font-serif text-[#102a3b] text-3xl pl-2">
                Email
              </label>
              <Input
                placeholder="Email"
                type="email"
                className="h-20 rounded-2xl border-4 border-[#f4690c] text-2xl px-6 font-sans italic placeholder:text-black/40 focus-visible:ring-0"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-3">
            <label className="font-serif text-[#102a3b] text-3xl pl-2">
              Message
            </label>
            <Textarea
              placeholder="Type your message here"
              className="min-h-[200px] rounded-2xl border-4 border-[#f4690c] text-2xl p-6 font-sans italic placeholder:text-black/40 resize-none focus-visible:ring-0"
            />
          </div>
        </form>

        <Button className="bg-[#f4690c] hover:bg-[#f4690c]/90 text-white rounded-full px-12 py-8 text-2xl font-bold shadow-xl flex items-center gap-4 transition-transform hover:scale-105">
          <Send className="w-8 h-8" />
          Send Message
        </Button>
      </div>
    </section>
  );
};
