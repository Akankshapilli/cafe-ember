"use client";

import Container from "@/components/layout/Container";
import { Sparkles } from "lucide-react";
import Image from "next/image";

const moods = [
  {
    title: "Golden Hour",
    description:
      "Soft sunlight, warm coffee, and cinematic calmness flowing through the café.",
    image: "/images/moods/mood-golden-hour.png",
  },
  {
    title: "Rainy Evenings",
    description:
      "Quiet conversations, glowing interiors, and emotional comfort during the rain.",
    image: "/images/moods/mood-rainy-evening.png",
  },
  {
    title: "Night Luxury",
    description:
      "Candlelight, artisan desserts, and rich espresso moments after sunset.",
    image: "/images/moods/mood-night-luxury.png",
  },
];

export default function HomeMood() {
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
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
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
            Mood & Atmosphere
          </p>

          <h2 className="text-4xl font-light leading-tight text-[#173126] md:text-6xl">
            Every Hour Has
            <span className="block text-[#C9A96E]">A Different Feeling</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#173126]/70 md:text-base">
            Café Ember transforms throughout the day — carrying different moods,
            emotions, and cinematic energy in every moment.
          </p>
        </div>

        {/* cards */}
        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {moods.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-[36px] border border-[#173126]/8 bg-white/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
            >
              {/* image */}
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={900}
                  height={1200}
                  className="h-[560px] w-full object-cover transition-transform duration-[4000ms] group-hover:scale-105"
                />

                {/* overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E221A]/85 via-transparent to-transparent" />

                {/* tag */}
                <div className="absolute left-5 top-5 rounded-full border border-[#FFFFFF]/15 bg-[#FFFFFF]/10 px-4 py-2 backdrop-blur-xl">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#F5EFE6]">
                    Ember Mood
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

                  <Sparkles className="h-10 w-10 text-[#C9A96E] stroke-[2]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* cinematic feature */}
        <div className="mt-28 overflow-hidden rounded-[42px] bg-[#173126] text-[#F5EFE6]">
          <div className="grid items-center lg:grid-cols-[1fr_1fr]">
            {/* left content */}
            <div className="p-10 md:p-16">
              <p className="text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
                Signature Feeling
              </p>

              <h3 className="mt-6 text-4xl font-light leading-tight md:text-5xl">
                Designed To Feel
                <span className="block text-[#C9A96E]">Warm & Cinematic</span>
              </h3>

              <p className="mt-8 max-w-xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
                Every texture, shadow, coffee aroma, and glowing light inside
                Café Ember exists to create emotional calmness and quiet luxury.
              </p>

              {/* features */}
              <div className="mt-12 space-y-5">
                <div className="flex items-start gap-5 rounded-[28px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-6 backdrop-blur-xl transition-all duration-500 hover:bg-[#FFFFFF]/8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFFFFF]/5">
                    <Image
                      src="/images/icons/icon-heart.png"
                      alt="Heart"
                      width={38}
                      height={38}
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h4 className="text-xl font-light text-[#F5EFE6]">
                      Emotional Atmosphere
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-[#F5EFE6]/65">
                      Interiors crafted to feel intimate, calming, and deeply
                      human.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 rounded-[28px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-6 backdrop-blur-xl transition-all duration-500 hover:bg-[#FFFFFF]/8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFFFFF]/5">
                    <Image
                      src="/images/icons/icon-cup-hot.png"
                      alt="Coffee"
                      width={34}
                      height={34}
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h4 className="text-xl font-light text-[#F5EFE6]">
                      Slow Coffee Rituals
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-[#F5EFE6]/65">
                      Handcrafted drinks designed to slow moments down
                      beautifully.
                    </p>
                  </div>
                </div>
              </div>

              {/* quote */}
              <div className="mt-14 border-l border-[#C9A96E]/30 pl-6">
                <p className="max-w-xl text-xl font-light leading-relaxed text-[#F5EFE6]/90 md:text-2xl">
                  “Some places change your mood. Café Ember changes your pace.”
                </p>

                <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#C9A96E]">
                  Café Ember Philosophy
                </p>
              </div>
            </div>

            {/* right image */}
            <div className="relative h-full min-h-[720px] overflow-hidden">
              <Image
                src="/images/moods/mood-candlelight.png"
                alt="Candlelight Mood"
                fill
                className="object-cover transition-transform duration-[6000ms] hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#173126]/60" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
