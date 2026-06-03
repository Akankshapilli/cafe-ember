"use client";

import Image from "next/image";
import Container from "@/components/layout/Container";
import { CalendarDays, CircleCheck, Heart, Sparkles } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Choose Your Experience",
    description:
      "Select your preferred date, time, and the atmosphere you want to enjoy.",
    icon: CalendarDays,
  },
  {
    step: "02",
    title: "Confirm Your Table",
    description:
      "Our team prepares a warm cinematic setting curated for your reservation.",
    icon: CircleCheck,
  },
  {
    step: "03",
    title: "Arrive & Slow Down",
    description:
      "Enjoy handcrafted coffee rituals, signature desserts, and meaningful moments.",
    icon: Heart,
  },
];

export default function ReservationProcess() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* textures */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "url('/images/textures/texture-paper.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url('/images/textures/texture-light-shadow.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Container className="relative z-10">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
            Reservation Process
          </p>

          <h2 className="text-4xl font-light leading-tight text-[#173126] md:text-6xl">
            Simple, Elegant,
            <span className="block text-[#C9A96E]">Beautifully Smooth</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#173126]/70 md:text-base">
            From booking your table to experiencing Café Ember, every step is
            designed to feel warm, effortless, and intentional.
          </p>
        </div>

        {/* process cards */}
        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.step}
              className="group relative overflow-hidden rounded-[36px] border border-[#173126]/8 bg-[#FFFDF9]/90 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
            >
              {/* number */}
              <div className="absolute right-6 top-6 text-7xl font-light text-[#C9A96E]/30">
                {item.step}
              </div>

              {/* icon */}
              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#173126]">
                {(() => {
                  const Icon = item.icon;

                  return (
                    <Icon
                      className={`h-8 w-8 text-[#C9A96E] stroke-[2] ${
                        item.step === "03" ? "fill-[#C9A96E]" : ""
                      }`}
                    />
                  );
                })()}
              </div>

              {/* content */}
              <div className="relative z-10 mt-10">
                <p className="text-xs uppercase tracking-[0.35em] text-[#C9A96E]">
                  Step {item.step}
                </p>

                <h3 className="mt-5 text-3xl font-light leading-tight text-[#173126]">
                  {item.title}
                </h3>

                <p className="mt-5 text-sm leading-relaxed text-[#173126]/70">
                  {item.description}
                </p>
              </div>

              {/* hover glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-[#C9A96E]/[0.03]" />
              </div>
            </div>
          ))}
        </div>

        {/* bottom cinematic section */}
        <div className="mt-28 overflow-hidden rounded-[42px] bg-[#0E221A] text-[#F5EFE6]">
          <div className="grid items-center lg:grid-cols-[1fr_1fr]">
            {/* left image */}
            <div className="relative h-full min-h-[760px]">
              <Image
                src="/images/gallery/gallery-1.png"
                alt="Reservation Process"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0E221A]/65" />
            </div>

            {/* right content */}
            <div className="p-10 md:p-16">
              <p className="text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
                Signature Hospitality
              </p>

              <h3 className="mt-6 text-4xl font-light leading-tight md:text-5xl">
                Designed Around
                <span className="block text-[#C9A96E]">Human Warmth</span>
              </h3>

              <p className="mt-8 max-w-xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
                Café Ember hospitality blends emotional warmth, elegant service,
                cinematic interiors, and artisan craftsmanship into every
                reservation.
              </p>

              {/* features */}
              <div className="mt-12 space-y-5">
                <div className="flex items-start gap-5 rounded-[28px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-6 backdrop-blur-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFFFFF]/5">
                    <Heart className="h-6 w-6 text-[#C9A96E] fill-[#C9A96E] stroke-[2]" />
                  </div>

                  <div>
                    <h4 className="text-xl font-light text-[#F5EFE6]">
                      Emotional Hospitality
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-[#F5EFE6]/65">
                      Every guest experience is designed to feel intimate and
                      memorable.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 rounded-[28px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-6 backdrop-blur-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFFFFF]/5">
                    <Sparkles className="h-6 w-6 text-[#C9A96E] stroke-[2]" />
                  </div>

                  <div>
                    <h4 className="text-xl font-light text-[#F5EFE6]">
                      Cinematic Atmosphere
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-[#F5EFE6]/65">
                      Warm textures, glowing interiors, and luxury café
                      aesthetics.
                    </p>
                  </div>
                </div>
              </div>

              {/* quote */}
              <div className="mt-14 border-l border-[#C9A96E]/30 pl-6">
                <p className="max-w-xl text-xl font-light leading-relaxed text-[#F5EFE6]/90 md:text-2xl">
                  “The experience begins long before the first sip.”
                </p>

                <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#C9A96E]">
                  Café Ember Philosophy
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
