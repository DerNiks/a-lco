"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import React, { useState, useTransition } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { submitContactForm } from "@/app/actions/contact"; // Import action

export const ContactSection = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const [isPending, startTransition] = useTransition();
  const [formState, setFormState] = useState<{
    success?: boolean;
    message?: string;
    errors?: any;
  } | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      const result = await submitContactForm(null, formData);
      setFormState(result);

      // Reset form jika sukses
      if (result.success) {
        (event.target as HTMLFormElement).reset();
      }
    });
  };

  return (
    <section id="contact-us" className="w-full py-24 px-6 scroll-mt-24">
      <div className="container mx-auto max-w-5xl flex flex-col items-center">
        <h2 className="text-center font-serif text-[#f4690c] text-7xl md:text-9xl mb-16">
          {t.title}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-8 mb-12"
        >
          {/* Honeypot Field (Hidden & Anti-Spam) */}
          <input
            type="text"
            name="honeypot"
            className="hidden"
            autoComplete="off"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <label className="font-serif text-[#102a3b] text-3xl pl-2">
                {t.name}
              </label>
              <Input
                name="name"
                required
                placeholder={t.name}
                className="h-20 rounded-2xl border-4 border-[#f4690c] text-2xl px-6 font-sans italic placeholder:text-black/40 focus-visible:ring-0"
              />
              {formState?.errors?.name && (
                <p className="text-red-500 text-sm pl-2">
                  {formState.errors.name[0]}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <label className="font-serif text-[#102a3b] text-3xl pl-2">
                {t.email}
              </label>
              <Input
                name="email"
                type="email"
                required
                placeholder={t.email}
                className="h-20 rounded-2xl border-4 border-[#f4690c] text-2xl px-6 font-sans italic placeholder:text-black/40 focus-visible:ring-0"
              />
              {formState?.errors?.email && (
                <p className="text-red-500 text-sm pl-2">
                  {formState.errors.email[0]}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label className="font-serif text-[#102a3b] text-3xl pl-2">
              {t.message}
            </label>
            <Textarea
              name="message"
              required
              placeholder={t.message}
              className="min-h-[200px] rounded-2xl border-4 border-[#f4690c] text-2xl p-6 font-sans italic placeholder:text-black/40 resize-none focus-visible:ring-0"
            />
            {formState?.errors?.message && (
              <p className="text-red-500 text-sm pl-2">
                {formState.errors.message[0]}
              </p>
            )}
          </div>

          {/* Feedback Message */}
          {formState && (
            <div
              className={`p-4 rounded-xl flex items-center gap-3 text-lg ${
                formState.success
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {formState.success ? (
                <CheckCircle className="w-6 h-6" />
              ) : (
                <AlertCircle className="w-6 h-6" />
              )}
              {formState.message}
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              type="submit"
              disabled={isPending}
              className="bg-[#f4690c] hover:bg-[#f4690c]/90 text-white rounded-full px-12 py-8 text-2xl font-bold shadow-xl flex items-center gap-4 transition-transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isPending ? (
                <>
                  <Loader2 className="w-8 h-8 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-8 h-8" />
                  {t.send}
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
