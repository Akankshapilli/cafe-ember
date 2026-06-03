"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { CalendarDays, Sparkles } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0E221A] text-[#F5EFE6]">
      {/* background image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero/hero-cafe-interior.png"
          alt="Café Ember"
          fill
          priority
          className="object-cover object-center scale-105 animate-[slowZoom_18s_ease-in-out_infinite_alternate]"
        />
      </div>

      {/* overlays */}
      <div className="absolute inset-0 bg-[#0E221A]/72" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#0E221A]/20 via-[#0E221A]/40 to-[#0E221A]/95" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "url('/images/textures/texture-vintage-noise.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* ambient glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A96E]/10 blur-3xl" />

      <Container className="relative z-10">
        <div className="max-w-5xl">
          {/* top tag */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 px-5 py-3 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-[#C9A96E] stroke-[2]" />

            <p className="text-[10px] uppercase tracking-[0.35em] text-[#C9A96E]">
              Luxury Artisan Café Experience
            </p>
          </div>

          {/* hero heading */}
          <h1 className="max-w-4xl text-5xl font-light leading-[0.92] tracking-[-0.05em] md:text-7xl xl:text-[6.5rem]">
            Slow Living,
            <span className="block text-[#C9A96E]">Crafted Beautifully</span>
          </h1>

          {/* description */}
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-lg">
            Warm coffee rituals, cinematic interiors, handcrafted desserts, and
            emotional storytelling — designed to feel like a beautiful pause
            from the outside world.
          </p>

          {/* actions */}
          <div className="mt-12 flex flex-col gap-5 sm:flex-row">
            <Link
              href="/reservations"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C9A96E] px-8 py-4 text-xs uppercase tracking-[0.25em] text-[#0E221A] transition-all duration-300 hover:scale-[1.03] hover:bg-[#D8BB86]"
            >
              Reserve Your Table
              <CalendarDays className="h-4 w-4 text-[#0E221A] stroke-[2]" />
            </Link>

            <Link
              href="/menu"
              className="inline-flex items-center justify-center rounded-full border border-[#FFFFFF]/15 bg-[#FFFFFF]/5 px-8 py-4 text-xs uppercase tracking-[0.25em] text-[#F5EFE6] backdrop-blur-xl transition-all duration-300 hover:border-[#C9A96E]/40 hover:bg-[#FFFFFF]/10"
            >
              Explore Menu
            </Link>
          </div>
        </div>
      </Container>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#0E221A] to-transparent" />
    </section>
  );
}
