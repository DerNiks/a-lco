import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, Phone, Mail } from "lucide-react";
import React from "react";

export const ContactSection = () => {
    return (
        <section className="w-full py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-center font-serif text-brand-orange text-7xl md:text-9xl mb-16">
            Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-4">
                <Label
                htmlFor="name"
                className="font-serif text-brand-blue text-3xl md:text-4xl"
                >
                Full Name
                </Label>
                <Input
                id="name"
                placeholder="Your Name"
                className="h-16 text-xl border-4 border-brand-orange rounded-2xl px-6 font-sans italic placeholder:text-gray-400"
                />
            </div>
            <div className="space-y-4">
                <Label
                htmlFor="email"
                className="font-serif text-brand-blue text-3xl md:text-4xl"
                >
                Email
                </Label>
                <Input
                id="email"
                type="email"
                placeholder="Your Email"
                className="h-16 text-xl border-4 border-brand-orange rounded-2xl px-6 font-sans italic placeholder:text-gray-400"
                />
            </div>
            </div>
            <div className="space-y-4 mb-12">
            <Label
                htmlFor="message"
                className="font-serif text-brand-blue text-3xl md:text-4xl"
            >
                Message
            </Label>
            <Textarea
                id="message"
                placeholder="Type your message here..."
                className="min-h-[200px] text-xl border-4 border-brand-orange rounded-2xl p-6 font-sans italic placeholder:text-gray-400 resize-none"
            />
            </div>
            <div className="flex justify-center mb-24">
            <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full px-10 py-8 text-xl font-bold shadow-lg flex items-center gap-3">
                <Send className="w-6 h-6" />
                Send Message
            </Button>
            </div>
            <div className="w-full bg-brand-orange rounded-3xl p-12 relative overflow-hidden shadow-2xl">
            <div className="flex flex-col md:flex-row justify-end gap-12 text-white relative z-10">
                <div className="flex items-center gap-4">
                <Phone className="w-8 h-8" />
                <span className="font-sans text-2xl font-medium">
                    +62 811 1111 1111
                </span>
                </div>
                <div className="flex items-center gap-4">
                <Mail className="w-8 h-8" />
                <span className="font-sans text-2xl font-medium">
                    antoniyeooffice@gmail.com
                </span>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};
