"use client";

import Container from "@/components/layout/Container";
import { CalendarDays, Clock, Heart, SquareMenu, Wifi } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomeReservations() {
  return (
    <section className="relative overflow-hidden bg-[#0E221A] py-32 text-[#F5EFE6]">
      {/* textures */}
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

      {/* glow */}
      <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A96E]/10 blur-3xl" />

      <Container className="relative z-10">
        <div className="overflow-hidden rounded-[42px] border border-[#FFFFFF]/10 bg-[#173126]/70 backdrop-blur-2xl">
          <div className="grid items-center lg:grid-cols-[1.05fr_0.95fr]">
            {/* LEFT CONTENT */}
            <div className="p-10 md:p-16">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 px-5 py-3 backdrop-blur-xl">
                <CalendarDays className="h-4 w-4 text-[#C9A96E] stroke-[2]" />

                <p className="text-[10px] uppercase tracking-[0.35em] text-[#C9A96E]">
                  Reserve Your Experience
                </p>
              </div>

              <h2 className="mt-8 text-4xl font-light leading-tight md:text-6xl">
                A Table Waiting
                <span className="block text-[#C9A96E]">Just For You</span>
              </h2>

              <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
                Reserve your place inside Café Ember and experience handcrafted
                coffee rituals, signature desserts, cinematic interiors, and
                meaningful slow moments.
              </p>

              {/* reservation details */}
              <div className="mt-14 grid gap-5 sm:grid-cols-2">
                <div className="rounded-[28px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-6 backdrop-blur-xl transition-all duration-500 hover:bg-[#FFFFFF]/8">
                  <div className="flex items-center gap-4">
                    <Clock className="h-6 w-6 text-[#C9A96E] stroke-[2]" />

                    <div>
                      <h3 className="text-lg font-light text-[#F5EFE6]">
                        Opening Hours
                      </h3>

                      <p className="mt-1 text-sm text-[#F5EFE6]/60">
                        8:00 AM — 11:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[28px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-6 backdrop-blur-xl transition-all duration-500 hover:bg-[#FFFFFF]/8">
                  <div className="flex items-center gap-4">
                    <Heart className="h-6 w-6 text-[#C9A96E] fill-[#C9A96E] stroke-[2]" />

                    <div>
                      <h3 className="text-lg font-light text-[#F5EFE6]">
                        Perfect For
                      </h3>

                      <p className="mt-1 text-sm text-[#F5EFE6]/60">
                        Date nights & slow evenings
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[28px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-6 backdrop-blur-xl transition-all duration-500 hover:bg-[#FFFFFF]/8">
                  <div className="flex items-center gap-4">
                    <SquareMenu className="h-6 w-6 text-[#C9A96E] stroke-[2]" />

                    <div>
                      <h3 className="text-lg font-light text-[#F5EFE6]">
                        Signature Menu
                      </h3>

                      <p className="mt-1 text-sm text-[#F5EFE6]/60">
                        Artisan coffee & desserts
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[28px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-6 backdrop-blur-xl transition-all duration-500 hover:bg-[#FFFFFF]/8">
                  <div className="flex items-center gap-4">
                    <Wifi className="h-6 w-6 text-[#C9A96E] stroke-[2]" />

                    <div>
                      <h3 className="text-lg font-light text-[#F5EFE6]">
                        Cozy Atmosphere
                      </h3>

                      <p className="mt-1 text-sm text-[#F5EFE6]/60">
                        Work-friendly luxury space
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 flex flex-col gap-5 sm:flex-row">
                <Link
                  href="/reservations"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C9A96E] px-8 py-4 text-xs uppercase tracking-[0.25em] text-[#0E221A] transition-all duration-300 hover:scale-[1.03] hover:bg-[#D8BB86]"
                >
                  Book A Table
                  <CalendarDays className="h-4 w-4 text-[#0E221A] stroke-[2]" />
                </Link>

                <Link
                  href="/menu"
                  className="inline-flex items-center justify-center rounded-full border border-[#FFFFFF]/15 bg-[#FFFFFF]/5 px-8 py-4 text-xs uppercase tracking-[0.25em] text-[#F5EFE6] backdrop-blur-xl transition-all duration-300 hover:border-[#C9A96E]/40 hover:bg-[#FFFFFF]/10"
                >
                  Explore Menu
                </Link>
              </div>

              {/* quote */}
              <div className="mt-14 border-l border-[#C9A96E]/30 pl-6">
                <p className="max-w-xl text-xl font-light leading-relaxed text-[#F5EFE6]/90 md:text-2xl">
                  “Some evenings deserve a beautiful setting.”
                </p>

                <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#C9A96E]">
                  Café Ember Experience
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative h-full min-h-[780px] overflow-hidden">
              <Image
                src="/images/moods/mood-date-night.png"
                alt="Reservation Experience"
                fill
                className="object-cover transition-transform duration-[6000ms] hover:scale-105"
              />

              {/* overlays */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#173126]/70" />

              {/* floating card */}
              <div className="absolute bottom-8 left-8 right-8 rounded-[30px] border border-[#FFFFFF]/10 bg-[#0E221A]/70 p-6 backdrop-blur-2xl">
                <div className="flex items-center gap-5">
                  <div className="relative h-20 w-20 overflow-hidden rounded-2xl">
                    <Image
                      src="/images/desserts/heaven-glass.png"
                      alt="Heaven in a Glass"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[#C9A96E]">
                      Signature Pairing
                    </p>

                    <h3 className="mt-2 text-2xl font-light text-[#F5EFE6]">
                      Heaven In A Glass
                    </h3>

                    <p className="mt-2 text-sm text-[#F5EFE6]/65">
                      Crafted for unforgettable evenings.
                    </p>
                  </div>
                </div>
              </div>

              {/* floating top label */}
              <div className="absolute left-8 top-8 rounded-full border border-[#FFFFFF]/10 bg-[#0E221A]/60 px-5 py-3 backdrop-blur-xl">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#F5EFE6]">
                  Cinematic Atmosphere
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
