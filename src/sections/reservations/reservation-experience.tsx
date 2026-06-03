"use client";

import Container from "@/components/layout/Container";
import { Sparkles } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    title: "Date Night Evenings",
    description:
      "Warm candlelight, handcrafted desserts, and cinematic conversations.",
    image: "/images/moods/mood-date-night.png",
  },
  {
    title: "Creative Work Sessions",
    description:
      "Quiet luxury interiors designed for focus, inspiration, and slow productivity.",
    image: "/images/moods/mood-work-session.png",
  },
  {
    title: "Weekend Brunch Rituals",
    description:
      "Artisan coffee, elegant pastries, and beautifully unhurried mornings.",
    image: "/images/moods/mood-weekend-brunch.png",
  },
];

export default function ReservationExperience() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* textures */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "url('/images/textures/texture-menu-paper.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url('/images/textures/texture-vintage-noise.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Container className="relative z-10">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
            Reservation Experience
          </p>

          <h2 className="text-4xl font-light leading-tight text-[#173126] md:text-6xl">
            More Than
            <span className="block text-[#C9A96E]">Just A Reservation</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#173126]/70 md:text-base">
            Every reservation at Café Ember is designed around atmosphere,
            emotion, artisan craftsmanship, and unforgettable slow moments.
          </p>
        </div>

        {/* cards */}
        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {experiences.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-[36px] border border-[#173126]/8 bg-[#FFFDF9]/90 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
            >
              {/* image */}
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={900}
                  height={1200}
                  className="h-[520px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0E221A]/80 via-transparent to-transparent" />

                {/* tag */}
                <div className="absolute left-5 top-5 rounded-full border border-[#FFFFFF]/15 bg-[#FFFFFF]/10 px-4 py-2 backdrop-blur-xl">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#F5EFE6]">
                    Café Ember Experience
                  </p>
                </div>
              </div>

              {/* content */}
              <div className="p-7">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-3xl font-light text-[#173126]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-[#173126]/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* bottom feature */}
        <div className="mt-28 overflow-hidden rounded-[42px] bg-[#0E221A] text-[#F5EFE6]">
          <div className="grid items-center lg:grid-cols-[1fr_1fr]">
            {/* left image */}
            <div className="relative h-full min-h-[720px]">
              <Image
                src="/images/gallery/gallery-12.png"
                alt="Reservation Atmosphere"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0E221A]/65" />
            </div>

            {/* right content */}
            <div className="p-10 md:p-16">
              <p className="text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
                Signature Atmosphere
              </p>

              <h3 className="mt-6 text-4xl font-light leading-tight md:text-5xl">
                Crafted For
                <span className="block text-[#C9A96E]">Meaningful Moments</span>
              </h3>

              <p className="mt-8 max-w-xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
                Café Ember blends cinematic interiors, artisan coffee rituals,
                emotional warmth, and elegant luxury into every reserved
                experience.
              </p>

              {/* features */}
              <div className="mt-12 space-y-5">
                <div className="flex items-start gap-5 rounded-[28px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-6 backdrop-blur-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFFFFF]/5">
                    <Image
                      src="/images/icons/icon-cup-hot.png"
                      alt="Coffee"
                      width={44}
                      height={44}
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h4 className="text-xl font-light text-[#F5EFE6]">
                      Artisan Rituals
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-[#F5EFE6]/65">
                      Handcrafted coffee experiences layered with warmth and
                      detail.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 rounded-[28px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-6 backdrop-blur-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFFFFF]/5">
                    <Sparkles className="h-6 w-6 text-[#C9A96E] stroke-[2]" />
                  </div>

                  <div>
                    <h4 className="text-xl font-light text-[#F5EFE6]">
                      Cinematic Luxury
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-[#F5EFE6]/65">
                      Warm lighting, luxury textures, and emotionally rich
                      interiors.
                    </p>
                  </div>
                </div>
              </div>

              {/* quote */}
              <div className="mt-14 border-l border-[#C9A96E]/30 pl-6">
                <p className="max-w-xl text-xl font-light leading-relaxed text-[#F5EFE6]/90 md:text-2xl">
                  “The best evenings begin with the right atmosphere.”
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
