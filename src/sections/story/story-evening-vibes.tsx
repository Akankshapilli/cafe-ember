"use client";

import Container from "@/components/layout/Container";
import { Heart } from "lucide-react";
import Image from "next/image";

const eveningVibes = [
  {
    title: "Golden Candlelight",
    description:
      "Soft lighting, warm reflections, and cinematic luxury after sunset.",
    image: "/images/moods/mood-candlelight.png",
  },
  {
    title: "Midnight Conversations",
    description:
      "Rich espresso, emotional talks, and unforgettable late-night moments.",
    image: "/images/moods/mood-night-luxury.png",
  },
  {
    title: "Slow Jazz Atmosphere",
    description:
      "Quiet music, artisan desserts, and beautifully unhurried evenings.",
    image: "/images/gallery/gallery-9.png",
  },
];

export default function StoryEveningVibes() {
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
      <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A96E]/10 blur-3xl" />

      <Container className="relative z-10">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
            Evening Atmosphere
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            Where Evenings
            <span className="block text-[#C9A96E]">Slow Down Beautifully</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
            Café Ember transforms after sunset — becoming warmer, quieter, more
            intimate, and emotionally cinematic.
          </p>
        </div>

        {/* cards */}
        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {eveningVibes.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-[36px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-[#FFFFFF]/8"
            >
              {/* image */}
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={900}
                  height={1200}
                  className="h-[540px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E221A]/90 via-transparent to-transparent" />

                {/* top label */}
                <div className="absolute left-5 top-5 rounded-full border border-[#FFFFFF]/15 bg-[#FFFFFF]/10 px-4 py-2 backdrop-blur-xl">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#F5EFE6]">
                    Ember Evenings
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
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* cinematic feature */}
        <div className="mt-28 overflow-hidden rounded-[42px] border border-[#FFFFFF]/10 bg-[#173126]/70 backdrop-blur-2xl">
          <div className="grid items-center lg:grid-cols-[1fr_1fr]">
            {/* left content */}
            <div className="p-10 md:p-16">
              <p className="text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
                Signature Night Experience
              </p>

              <h3 className="mt-6 text-4xl font-light leading-tight md:text-5xl">
                Luxury Atmosphere
                <span className="block text-[#C9A96E]">After Sunset</span>
              </h3>

              <p className="mt-8 max-w-xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
                Warm candlelight, artisan desserts, rich espresso aromas, and
                emotional conversations shape the soul of Café Ember evenings.
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
                      Rich Coffee Rituals
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-[#F5EFE6]/65">
                      Deep espresso flavors crafted for slow evening moments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 rounded-[28px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-6 backdrop-blur-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFFFFF]/5">
                    <Heart className="h-6 w-6 text-[#C9A96E] fill-[#C9A96E] stroke-[2]" />
                  </div>

                  <div>
                    <h4 className="text-xl font-light text-[#F5EFE6]">
                      Emotional Comfort
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-[#F5EFE6]/65">
                      Intimate interiors designed to feel calm, warm, and
                      personal.
                    </p>
                  </div>
                </div>
              </div>

              {/* quote */}
              <div className="mt-14 border-l border-[#C9A96E]/30 pl-6">
                <p className="max-w-xl text-xl font-light leading-relaxed text-[#F5EFE6]/90 md:text-2xl">
                  “Nighttime at Café Ember feels like a memory unfolding.”
                </p>

                <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#C9A96E]">
                  Café Ember Evenings
                </p>
              </div>
            </div>

            {/* right image */}
            <div className="relative h-full min-h-[760px]">
              <Image
                src="/images/gallery/gallery-12.png"
                alt="Evening Atmosphere"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#173126]/60" />

              {/* floating card */}
              <div className="absolute bottom-8 left-8 right-8 rounded-[30px] border border-[#FFFFFF]/10 bg-[#0E221A]/70 p-6 backdrop-blur-2xl">
                <div className="flex items-center gap-5">
                  <div className="relative h-20 w-20 overflow-hidden rounded-2xl">
                    <Image
                      src="/images/drinks/midnight-mocha.png"
                      alt="Midnight Mocha"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[#C9A96E]">
                      Signature Night Drink
                    </p>

                    <h4 className="mt-2 text-2xl font-light text-[#F5EFE6]">
                      Midnight Mocha
                    </h4>

                    <p className="mt-2 text-sm text-[#F5EFE6]/65">
                      Rich espresso and velvet chocolate warmth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
