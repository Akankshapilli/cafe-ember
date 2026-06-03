"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { ArrowRight, Sparkles } from "lucide-react";

const experiences = [
  {
    title: "Morning Rituals",
    description:
      "Fresh espresso, soft sunlight, and peaceful luxury to begin the day slowly.",
    image: "/images/moods/mood-morning.png",
  },
  {
    title: "Creative Afternoons",
    description:
      "A calm café atmosphere designed for work, creativity, and quiet focus.",
    image: "/images/moods/mood-work-session.png",
  },
  {
    title: "Cinematic Nights",
    description:
      "Golden candlelight, desserts, and emotional conversations after sunset.",
    image: "/images/moods/mood-night-luxury.png",
  },
];

export default function HomeExperience() {
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
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A96E]/10 blur-3xl" />

      <Container className="relative z-10">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
            The Café Ember Experience
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            Crafted Around
            <span className="block text-[#C9A96E]">Emotion & Atmosphere</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
            Every moment inside Café Ember is designed to feel cinematic, warm,
            intimate, and deeply human.
          </p>
        </div>

        {/* cards */}
        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {experiences.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-[36px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-[#FFFFFF]/8 hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)]"
            >
              {/* image */}
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={900}
                  height={1200}
                  className="h-[520px] w-full object-cover transition-transform duration-[4000ms] group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0E221A]/85 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 rounded-full border border-[#FFFFFF]/15 bg-[#FFFFFF]/10 px-4 py-2 backdrop-blur-xl">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#F5EFE6]">
                    Ember Experience
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

                  <Sparkles className="h-8 w-8 text-[#C9A96E] stroke-[2]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* cinematic split section */}
        <div className="mt-28 overflow-hidden rounded-[42px] border border-[#FFFFFF]/10 bg-[#173126]/70 backdrop-blur-2xl">
          <div className="grid items-center lg:grid-cols-[1fr_1fr]">
            {/* left content */}
            <div className="p-10 md:p-16">
              <p className="text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
                Signature Atmosphere
              </p>

              <h3 className="mt-6 text-4xl font-light leading-tight md:text-5xl">
                A Space That
                <span className="block text-[#C9A96E]">Feels Like Home</span>
              </h3>

              <p className="mt-8 max-w-xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
                Warm interiors, artisan coffee rituals, emotional storytelling,
                and luxury textures — designed to slow life down beautifully.
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
                      Emotional Warmth
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-[#F5EFE6]/65">
                      Spaces crafted to feel intimate, calm, and deeply
                      comforting.
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
                      Artisan Coffee Rituals
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-[#F5EFE6]/65">
                      Handcrafted espresso experiences layered with cinematic
                      detail.
                    </p>
                  </div>
                </div>
              </div>

              {/* button */}
              <div className="mt-12">
                <Link
                  href="/experience"
                  className="inline-flex items-center gap-3 rounded-full bg-[#C9A96E] px-8 py-4 text-xs uppercase tracking-[0.25em] text-[#0E221A] transition-all duration-300 hover:scale-[1.03] hover:bg-[#D8BB86]"
                >
                  Explore Experience
                  <ArrowRight className="h-4 w-4 text-[#0E221A] stroke-[2]" />
                </Link>
              </div>
            </div>

            {/* right image */}
            <div className="relative h-full min-h-[720px] overflow-hidden">
              <Image
                src="/images/gallery/gallery-12.png"
                alt="Café Atmosphere"
                fill
                className="object-cover transition-transform duration-[5000ms] hover:scale-105"
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
                      Featured Experience
                    </p>

                    <h4 className="mt-2 text-2xl font-light text-[#F5EFE6]">
                      Midnight Mocha
                    </h4>

                    <p className="mt-2 text-sm text-[#F5EFE6]/65">
                      Rich espresso and cinematic evening warmth.
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
