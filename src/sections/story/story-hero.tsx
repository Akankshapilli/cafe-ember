"use client";

import Image from "next/image";
import Link from "next/link";

import Container from "@/components/layout/Container";
import { CalendarDays, Heart } from "lucide-react";

export default function StoryHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0E221A] pt-28 text-[#F5EFE6] md:pt-32">
      {/* background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/story/story-founder.png"
          alt="Café Ember Story"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* overlays */}
      <div className="absolute inset-0 bg-[#0E221A]/75" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#0E221A]/25 via-[#0E221A]/50 to-[#0E221A]/95" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "url('/images/textures/texture-vintage-noise.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* ambient glow */}
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A96E]/10 blur-3xl" />

      <Container className="relative z-10">
        <div className="max-w-5xl">
          {/* TOP TAG */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
            <Heart className="h-4 w-4 text-[#C9A96E] fill-[#C9A96E] stroke-[2]" />

            <p className="text-[10px] uppercase tracking-[0.35em] text-[#C9A96E]">
              The Story Behind Café Ember
            </p>
          </div>

          {/* heading */}
          <h1 className="max-w-5xl text-5xl font-light leading-[0.92] tracking-[-0.05em] md:text-7xl xl:text-[7.5rem]">
            Built Around
            <span className="mt-2 block text-[#C9A96E]">
              Feeling & Atmosphere
            </span>
          </h1>

          {/* description */}
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-lg">
            Café Ember was created as more than a destination. It was imagined
            as an emotional escape — where slow living, artisan rituals, and
            cinematic warmth come together beautifully.
          </p>

          {/* actions */}
          <div className="mt-12 flex flex-col gap-5 sm:flex-row">
            <Link
              href="/reservations"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C9A96E] px-8 py-4 text-xs uppercase tracking-[0.25em] text-[#0E221A] transition-all duration-300 hover:scale-[1.03] hover:bg-[#D8BB86]"
            >
              Reserve Your Experience
              <CalendarDays className="h-4 w-4 text-[#0E221A] stroke-[2]" />
            </Link>

            <Link
              href="/gallery"
              className="inline-flex items-center justify-center rounded-full border border-[#FFFFFF]/15 bg-[#FFFFFF]/5 px-8 py-4 text-xs uppercase tracking-[0.25em] text-[#F5EFE6] backdrop-blur-xl transition-all duration-300 hover:border-[#C9A96E]/40 hover:bg-[#FFFFFF]/10"
            >
              Explore Gallery
            </Link>
          </div>

          {/* stats */}
          <div className="mt-20 grid max-w-4xl gap-5 sm:grid-cols-3">
            <div className="rounded-[30px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-6 backdrop-blur-xl">
              <h3 className="text-4xl font-light text-[#F5EFE6]">Human</h3>

              <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-[#C9A96E]">
                Emotional Design
              </p>
            </div>

            <div className="rounded-[30px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-6 backdrop-blur-xl">
              <h3 className="text-4xl font-light text-[#F5EFE6]">Artisan</h3>

              <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-[#C9A96E]">
                Crafted Rituals
              </p>
            </div>

            <div className="rounded-[30px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-6 backdrop-blur-xl">
              <h3 className="text-4xl font-light text-[#F5EFE6]">Cinematic</h3>

              <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-[#C9A96E]">
                Luxury Atmosphere
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#0E221A] to-transparent" />
    </section>
  );
}
