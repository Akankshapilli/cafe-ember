"use client";

import Container from "@/components/layout/Container";
import { Sparkles, Heart } from "lucide-react";
import Image from "next/image";

const immersiveMoments = [
  {
    title: "Morning Calm",
    description:
      "Soft sunlight, fresh espresso, and peaceful slow-living energy.",
    image: "/images/moods/mood-morning.png",
  },
  {
    title: "Work Sessions",
    description: "A luxury café atmosphere designed for creativity and focus.",
    image: "/images/moods/mood-work-session.png",
  },
  {
    title: "Weekend Brunch",
    description:
      "Elegant pastries, conversations, and warm lifestyle storytelling.",
    image: "/images/moods/mood-weekend-brunch.png",
  },
];

export default function ImmersiveMoments() {
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

      {/* ambient glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A96E]/10 blur-3xl" />

      <Container className="relative z-10">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
            Immersive Atmosphere
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            Experiences Designed
            <span className="block text-[#C9A96E]">Around Emotion</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
            Every hour inside Café Ember carries a unique mood — crafted through
            lighting, textures, sound, warmth, and human connection.
          </p>
        </div>

        {/* cards */}
        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {immersiveMoments.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-[36px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/6 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-[#FFFFFF]/8 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
            >
              {/* image */}
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={1000}
                  className="h-[620px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0E221A]/80 via-transparent to-transparent" />

                {/* floating tag */}
                <div className="absolute left-5 top-5 rounded-full border border-[#FFFFFF]/15 bg-[#FFFFFF]/10 px-4 py-2 backdrop-blur-xl">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#F5EFE6]">
                    Café Ember Mood
                  </p>
                </div>
              </div>

              {/* content */}
              <div className="p-7">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-3xl font-light text-[#F5EFE6]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-[#F5EFE6]/65">
                      {item.description}
                    </p>
                  </div>

                  <Sparkles className="h-6 w-6 text-[#F5EFE6] stroke-[2]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* cinematic feature */}
        <div className="mt-28 overflow-hidden rounded-[42px] border border-[#FFFFFF]/10 bg-[#173126]/70 backdrop-blur-2xl transition-transform duration-500 hover:scale-[1.01]">
          <div className="grid items-center lg:grid-cols-[1fr_1fr]">
            {/* left image */}
            <div className="group relative h-full min-h-[620px] overflow-hidden">
              <Image
                src="/images/moods/mood-date-night.png"
                alt="Date Night"
                fill
                className="object-cover transition-transform duration-[4000ms] group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#173126]/70" />
            </div>

            {/* right content */}
            <div className="p-10 md:p-16">
              <p className="text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
                Signature Atmosphere
              </p>

              <h3 className="mt-6 text-4xl font-light leading-tight md:text-5xl">
                Romantic Evenings
                <span className="block text-[#C9A96E]">& Cinematic Warmth</span>
              </h3>

              <p className="mt-8 max-w-xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
                Golden candlelight, handcrafted desserts, quiet jazz, and
                emotional storytelling — creating a luxury café experience that
                feels timeless.
              </p>

              {/* features */}
              <div className="mt-12 space-y-5">
                <div className="flex items-start gap-5 rounded-[28px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-6 backdrop-blur-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFFFFF]/5">
                    <Heart className="h-6 w-6 text-[#C9A96E] fill-[#C9A96E] stroke-[2]" />
                  </div>

                  <div>
                    <h4 className="text-xl font-light text-[#F5EFE6]">
                      Emotional Luxury
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-[#F5EFE6]/65">
                      Warm interiors and meaningful atmosphere crafted
                      intentionally.
                    </p>
                  </div>
                </div>

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
                      Coffee experiences designed to slow time down beautifully.
                    </p>
                  </div>
                </div>
              </div>

              {/* quote */}
              <div className="mt-14 border-l border-[#C9A96E]/30 pl-6">
                <p className="max-w-xl text-xl font-light leading-relaxed text-[#F5EFE6]/90 md:text-2xl">
                  “The atmosphere isn’t just seen — it’s remembered.”
                </p>

                <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#C9A96E]">
                  Café Ember Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
