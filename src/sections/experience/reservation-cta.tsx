"use client";

import Image from "next/image";
import Link from "next/link";

import Container from "@/components/layout/Container";
import { CalendarDays, Clock, Heart, Star } from "lucide-react";

export default function ReservationCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* TEXTURES */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "url('/images/textures/texture-paper.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "url('/images/textures/texture-light-shadow.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Container className="relative z-10">
        <div className="relative overflow-hidden rounded-[36px] bg-[#0E221A] text-[#F5EFE6]">
          {/* BACKGROUND */}
          <div className="absolute inset-0">
            <Image
              src="/images/moods/mood-date-night.png"
              alt="Reservation Experience"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* OVERLAYS */}
          <div className="absolute inset-0 bg-[#0E221A]/75" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0E221A]/90 via-[#0E221A]/70 to-[#0E221A]/40" />

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "url('/images/textures/texture-vintage-noise.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* GLOW */}
          <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#C9A96E]/10 blur-3xl" />

          {/* CONTENT */}
          <div className="relative z-10 grid gap-14 px-6 py-10 md:px-10 md:py-14 xl:grid-cols-[1fr_0.8fr] xl:px-14 xl:py-20">
            {/* LEFT */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
                <CalendarDays className="h-4 w-4 text-[#C9A96E] stroke-[2]" />

                <p className="text-[10px] uppercase tracking-[0.35em] text-[#C9A96E]">
                  Reserve Your Experience
                </p>
              </div>

              <h2 className="mt-8 text-4xl font-light leading-tight md:text-6xl">
                An Evening
                <span className="mt-2 block text-[#C9A96E]">
                  Worth Staying For
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
                Reserve your table and experience handcrafted coffee, signature
                desserts, glowing candlelight, and cinematic luxury designed for
                meaningful moments.
              </p>

              {/* FEATURES */}
              <div className="mt-12 grid gap-5 sm:grid-cols-3">
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <Clock className="h-4 w-4 text-[#C9A96E] stroke-[2]" />

                  <h3 className="mt-4 text-lg font-light">Open Daily</h3>

                  <p className="mt-2 text-sm text-[#F5EFE6]/60">
                    8:00 AM — 11:00 PM
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <Heart className="h-4 w-4 text-[#C9A96E] fill-[#C9A96E] stroke-[2]" />

                  <h3 className="mt-4 text-lg font-light">Romantic Mood</h3>

                  <p className="mt-2 text-sm text-[#F5EFE6]/60">
                    Warm cinematic atmosphere
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <Star className="h-4 w-4 text-[#C9A96E] fill-[#C9A96E] stroke-[2]" />

                  <h3 className="mt-4 text-lg font-light">Signature Dining</h3>

                  <p className="mt-2 text-sm text-[#F5EFE6]/60">
                    Premium artisan creations
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="rounded-[32px] border border-white/10 bg-[#F5EFE6]/10 p-6 backdrop-blur-2xl md:p-8">
              <div className="flex items-center">
                <Image
                  src="/images/logos/logo-leaf.png"
                  alt="Café Ember"
                  width={84}
                  height={84}
                  className="object-contain"
                />

                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[#C9A96E]">
                    Café Ember
                  </p>

                  <h3 className="mt-2 text-2xl font-light text-[#F5EFE6]">
                    Reserve A Table
                  </h3>
                </div>
              </div>

              <div className="mt-10 space-y-5">
                <div className="rounded-[22px] border border-white/10 bg-white/5 px-5 py-4">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E]">
                    Experience
                  </p>

                  <p className="mt-2 text-sm text-[#F5EFE6]/70">
                    Luxury artisan café atmosphere
                  </p>
                </div>

                <div className="rounded-[22px] border border-white/10 bg-white/5 px-5 py-4">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E]">
                    Perfect For
                  </p>

                  <p className="mt-2 text-sm text-[#F5EFE6]/70">
                    Date nights · Work sessions · Quiet evenings
                  </p>
                </div>

                <div className="rounded-[22px] border border-white/10 bg-white/5 px-5 py-4">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E]">
                    Signature Highlight
                  </p>

                  <p className="mt-2 text-sm text-[#F5EFE6]/70">
                    Heaven in a Glass & Midnight Mocha
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4">
                <Link
                  href="/reservations"
                  className="inline-flex h-16 items-center justify-center gap-3 rounded-full bg-[#C9A96E] text-xs uppercase tracking-[0.25em] text-[#0E221A] transition-all duration-300 hover:bg-[#D8BB86]"
                >
                  Book Your Table
                  <CalendarDays className="h-4 w-4 text-[#0E221A] stroke-[2]" />
                </Link>

                <Link
                  href="/menu"
                  className="inline-flex h-16 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-[0.25em] text-[#F5EFE6] backdrop-blur-xl transition-all duration-300 hover:border-[#C9A96E]/30 hover:bg-white/10"
                >
                  View Signature Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
