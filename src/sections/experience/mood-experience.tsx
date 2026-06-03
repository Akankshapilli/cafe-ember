"use client";

import Image from "next/image";
import { Heart, Sparkles } from "lucide-react";
import Container from "@/components/layout/Container";

const moods = [
  {
    title: "Golden Hour",
    description:
      "Dreamy sunset light flowing softly through the café atmosphere.",
    image: "/images/moods/mood-golden-hour.png",
  },
  {
    title: "Rainy Evenings",
    description:
      "Warm interiors, rain reflections, and emotional café comfort.",
    image: "/images/moods/mood-rainy-evening.png",
  },
  {
    title: "Night Luxury",
    description: "Candles, glowing ambience, and cinematic nightlife energy.",
    image: "/images/moods/mood-night-luxury.png",
  },
];

export default function MoodExperience() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* TEXTURES */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "url('/images/textures/texture-paper.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "url('/images/textures/texture-light-shadow.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Container className="relative z-10">
        {/* HEADING */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
            Atmosphere & Emotion
          </p>

          <h2 className="text-4xl font-light leading-tight text-[#173126] md:text-6xl">
            Designed Around
            <span className="mt-2 block text-[#C9A96E]">Mood & Feeling</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#173126]/70 md:text-base">
            Every hour inside Café Ember carries a different emotional tone —
            from peaceful mornings to cinematic midnight conversations.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {moods.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-[32px] border border-[#173126]/8 bg-white/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={700}
                  height={900}
                  className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[520px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0E221A]/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-xl">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[#F5EFE6]">
                      Café Ember Mood
                    </p>
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-light text-[#173126]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-[#173126]/70">
                      {item.description}
                    </p>
                  </div>

                  <Sparkles className="h-6 w-6 text-[#C9A96E] stroke-[2]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM FEATURE */}
        <div className="mt-24 overflow-hidden rounded-[36px] bg-[#173126] text-[#F5EFE6]">
          <div className="grid items-center xl:grid-cols-[1fr_1fr]">
            {/* LEFT */}
            <div className="p-8 md:p-12 xl:p-16">
              <p className="text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
                Signature Atmosphere
              </p>

              <h3 className="mt-6 text-3xl font-light leading-tight md:text-5xl">
                A Café Experience
                <span className="mt-2 block text-[#C9A96E]">
                  That Feels Cinematic
                </span>
              </h3>

              <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
                Warm emerald interiors, soft jazz, artisan desserts, cinematic
                lighting, and handcrafted coffee rituals — designed to create
                emotional calmness and quiet luxury.
              </p>

              <div className="mt-10 flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <Heart className="h-6 w-6 text-[#C9A96E] fill-[#C9A96E] stroke-[2]" />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-[#C9A96E]">
                    Emotional Luxury
                  </p>

                  <p className="mt-1 text-sm text-[#F5EFE6]/60">
                    Crafted for meaningful moments.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative min-h-[420px] xl:min-h-[560px]">
              <Image
                src="/images/moods/mood-candlelight.png"
                alt="Candlelight Mood"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#173126]/60" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
