"use client";

import Image from "next/image";
import Link from "next/link";

import Container from "@/components/layout/Container";
import { Sparkles, CalendarDays } from "lucide-react";

export default function ExperienceHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0E221A] pt-28 text-[#F5EFE6] md:pt-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-evening-vibes.png"
          alt="Café Ember Experience"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-[#0E221A]/60" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#0E221A]/20 via-[#0E221A]/35 to-[#0E221A]/90" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "url('/images/textures/texture-vintage-noise.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* AMBIENT GLOW */}
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A96E]/10 blur-3xl" />

      <Container className="relative z-10">
        <div className="max-w-5xl">
          {/* TOP TAG */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-[#C9A96E] stroke-[2]" />

            <p className="text-[10px] uppercase tracking-[0.35em] text-[#C9A96E]">
              The Café Ember Experience
            </p>
          </div>

          {/* HEADING */}
          <h1 className="max-w-5xl text-5xl font-light leading-[0.92] tracking-[-0.05em] md:text-7xl xl:text-[7.5rem]">
            Crafted Atmosphere
            <span className="mt-2 block text-[#C9A96E]">For Slow Living</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[#F5EFE6]/72 md:text-lg">
            Warm coffee rituals, cinematic interiors, signature desserts, and
            emotional storytelling — designed to feel like a beautiful pause
            from the outside world.
          </p>

          {/* ACTIONS */}
          <div className="mt-12 flex flex-col gap-5 sm:flex-row">
            <Link
              href="/reservations"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C9A96E] px-8 py-4 text-xs uppercase tracking-[0.25em] text-[#0E221A] transition-all duration-300 hover:bg-[#D8BB86]"
            >
              Reserve Your Table
              <CalendarDays className="h-4 w-4 text-[#C9A96E] stroke-[2]" />
            </Link>

            <Link
              href="/gallery"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-xs uppercase tracking-[0.25em] text-[#F5EFE6] backdrop-blur-xl transition-all duration-300 hover:border-[#C9A96E]/40 hover:bg-white/10"
            >
              Explore Gallery
            </Link>
          </div>

          {/* STATS */}
          <div className="mt-20 grid max-w-3xl gap-5 sm:grid-cols-3">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-3xl font-light text-[#F5EFE6]">12k+</h3>

              <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-[#C9A96E]">
                Monthly Guests
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-3xl font-light text-[#F5EFE6]">40+</h3>

              <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-[#C9A96E]">
                Signature Creations
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-3xl font-light text-[#F5EFE6]">4.9★</h3>

              <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-[#C9A96E]">
                Experience Rating
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
