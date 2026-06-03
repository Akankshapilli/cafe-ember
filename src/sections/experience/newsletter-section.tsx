"use client";

import Image from "next/image";

import Container from "@/components/layout/Container";
import { CalendarDays, Mail, Lock, Heart } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="relative overflow-hidden bg-[#0E221A] py-24 text-[#F5EFE6] md:py-32">
      {/* TEXTURES */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "url('/images/textures/texture-dark-fabric.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "url('/images/textures/texture-vintage-noise.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* GLOW */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A96E]/10 blur-3xl" />

      <Container className="relative z-10">
        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-[#173126]/60 backdrop-blur-2xl">
          <div className="grid items-center xl:grid-cols-[0.9fr_1.1fr]">
            {/* LEFT */}
            <div className="relative h-full">
              <Image
                src="/images/moods/mood-work-session.png"
                alt="Newsletter Mood"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#0E221A]/20 to-[#0E221A]/75" />

              {/* FLOATING CARD */}
              <div className="absolute bottom-6 left-6 rounded-[24px] border border-white/10 bg-white/10 p-5 backdrop-blur-xl md:bottom-8 md:left-8">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#C9A96E]">
                      Ember Journal
                    </p>

                    <p className="mt-1 text-sm text-[#F5EFE6]/65">
                      Curated moods, coffee & stories.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="p-8 md:p-12 xl:p-16">
              <p className="text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
                Stay Connected
              </p>

              <h2 className="mt-6 text-4xl font-light leading-tight md:text-6xl">
                Join The
                <span className="mt-2 block text-[#C9A96E]">
                  Café Ember Journal
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
                Receive curated coffee stories, seasonal menu launches,
                exclusive reservation moments, and cinematic inspiration
                directly from Café Ember.
              </p>

              {/* FORM */}
              <form className="mt-12 flex flex-col gap-5 sm:flex-row">
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="h-16 w-full rounded-full border border-white/10 bg-white/5 px-7 pr-16 text-sm text-[#F5EFE6] placeholder:text-[#F5EFE6]/35 backdrop-blur-xl transition-all duration-300 focus:border-[#C9A96E]/40"
                  />

                  <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2">
                    <Mail className="h-6 w-6 text-[#C9A96E] stroke-[2]" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex h-16 items-center justify-center gap-3 rounded-full bg-[#C9A96E] px-8 text-xs uppercase tracking-[0.25em] text-[#0E221A] transition-all duration-300 hover:bg-[#D8BB86]"
                >
                  Subscribe
                  <CalendarDays className="h-4 w-4 text-[#0E221A] stroke-[2]" />
                </button>
              </form>

              {/* INFO */}
              <div className="mt-10 flex flex-col gap-5 md:flex-row md:items-center md:gap-10">
                <div className="flex items-center gap-4">
                  <Lock className="h-6 w-6 text-[#C9A96E] stroke-[2]" />

                  <p className="text-sm text-[#F5EFE6]/60">
                    Your information stays private.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <Heart className="h-6 w-6 text-[#C9A96E] stroke-[2]" />

                  <p className="text-sm text-[#F5EFE6]/60">
                    Crafted with warmth & intention.
                  </p>
                </div>
              </div>

              {/* QUOTE */}
              <div className="mt-14 border-l border-[#C9A96E]/30 pl-6">
                <p className="max-w-xl text-xl font-light leading-relaxed text-[#F5EFE6]/90 md:text-2xl">
                  “A little corner of warmth delivered quietly to your inbox.”
                </p>

                <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#C9A96E]">
                  Café Ember Journal
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
