"use client";

import Image from "next/image";
import Link from "next/link";

import Container from "@/components/layout/Container";
import { CalendarDays, Sparkles } from "lucide-react";

export default function GalleryHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0E221A] pt-28 text-[#F5EFE6]">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/images/gallery/gallery-12.png"
          alt="Café Ember Gallery"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-[#0E221A]/65" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#0E221A]/30 via-[#0E221A]/50 to-[#0E221A]/90" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "url('/images/textures/texture-vintage-noise.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* GLOW */}
      <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A96E]/10 blur-3xl" />

      <Container className="relative z-10 py-20">
        <div className="max-w-4xl">
          {/* TOP TAG */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-[#C9A96E] stroke-[2]" />

            <p className="text-[10px] uppercase tracking-[0.35em] text-[#C9A96E]">
              Cinematic Visual Storytelling
            </p>
          </div>

          {/* HEADING */}
          <h1 className="max-w-5xl text-5xl font-light leading-[0.95] tracking-[-0.04em] md:text-7xl xl:text-[7rem]">
            Captured
            <span className="mt-2 block text-[#C9A96E]">Like A Memory</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-lg">
            A visual journey through warm interiors, artisan rituals, emotional
            moments, and the cinematic atmosphere that defines the Café Ember
            experience.
          </p>

          {/* ACTIONS */}
          <div className="mt-12 flex flex-col gap-5 sm:flex-row">
            <Link
              href="/reservations"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C9A96E] px-8 py-4 text-xs uppercase tracking-[0.25em] text-[#0E221A] transition-all duration-300 hover:bg-[#D8BB86]"
            >
              Reserve Your Experience
              <CalendarDays className="h-4 w-4 text-[#0E221A] stroke-[2]" />
            </Link>

            <Link
              href="/menu"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-xs uppercase tracking-[0.25em] text-[#F5EFE6] backdrop-blur-xl transition-all duration-300 hover:border-[#C9A96E]/40 hover:bg-white/10"
            >
              Explore Menu
            </Link>
          </div>

          {/* STATS */}
          <div className="mt-16 grid max-w-3xl gap-5 sm:grid-cols-3 xl:mt-20">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-3xl font-light text-[#F5EFE6]">120+</h3>

              <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-[#C9A96E]">
                Curated Moments
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-3xl font-light text-[#F5EFE6]">4K</h3>

              <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-[#C9A96E]">
                Cinematic Visuals
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-3xl font-light text-[#F5EFE6]">100%</h3>

              <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-[#C9A96E]">
                Artisan Atmosphere
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#0E221A] to-transparent" />
    </section>
  );
}
