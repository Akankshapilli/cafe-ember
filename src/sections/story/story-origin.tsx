"use client";

import Container from "@/components/layout/Container";
import { Sparkles } from "lucide-react";
import Image from "next/image";

const originMoments = [
  {
    title: "The First Vision",
    description:
      "A dream of creating a café that felt emotionally warm instead of simply luxurious.",
    image: "/images/story/story-founder.png",
  },
  {
    title: "Designed Around Feeling",
    description:
      "Every texture, light, aroma, and corner imagined to create emotional comfort.",
    image: "/images/story/story-brand-detail.png",
  },
  {
    title: "Crafted For Slow Living",
    description:
      "A space where people pause, connect, breathe deeply, and feel present again.",
    image: "/images/story/story-community.png",
  },
];

export default function StoryOrigin() {
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
            The Origin Story
          </p>

          <h2 className="text-4xl font-light leading-tight text-[#173126] md:text-6xl">
            Café Ember Started
            <span className="block text-[#C9A96E]">With A Feeling</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#173126]/70 md:text-base">
            The beginning of Café Ember was never about trends or aesthetics
            alone. It began with the desire to create emotional warmth through
            space, atmosphere, and artisan rituals.
          </p>
        </div>

        {/* story cards */}
        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {originMoments.map((item) => (
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
                  className="h-[540px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E221A]/80 via-transparent to-transparent" />

                {/* top tag */}
                <div className="absolute left-5 top-5 rounded-full border border-[#FFFFFF]/15 bg-[#FFFFFF]/10 px-4 py-2 backdrop-blur-xl">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#F5EFE6]">
                    Café Ember Journey
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

        {/* cinematic feature section */}
        <div className="mt-28 overflow-hidden rounded-[42px] bg-[#0E221A] text-[#F5EFE6]">
          <div className="grid items-center lg:grid-cols-[1fr_1fr]">
            {/* left content */}
            <div className="p-10 md:p-16">
              <p className="text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
                The Ember Philosophy
              </p>

              <h3 className="mt-6 text-4xl font-light leading-tight md:text-5xl">
                Luxury Should
                <span className="block text-[#C9A96E]">Feel Personal</span>
              </h3>

              <p className="mt-8 max-w-xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
                Café Ember was created to combine cinematic aesthetics, artisan
                craftsmanship, emotional warmth, and slow living into one
                unforgettable experience.
              </p>

              {/* features */}
              <div className="mt-12 space-y-5">
                <div className="flex items-start gap-5 rounded-[28px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-6 backdrop-blur-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFFFFF]/5">
                    <Sparkles className="h-6 w-6 text-[#C9A96E] stroke-[2]" />
                  </div>

                  <div>
                    <h4 className="text-xl font-light text-[#F5EFE6]">
                      Cinematic Atmosphere
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-[#F5EFE6]/65">
                      Warm shadows, soft lighting, and emotionally rich
                      interiors.
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
                      Handcrafted coffee experiences layered with care and
                      detail.
                    </p>
                  </div>
                </div>
              </div>

              {/* quote */}
              <div className="mt-14 border-l border-[#C9A96E]/30 pl-6">
                <p className="max-w-xl text-xl font-light leading-relaxed text-[#F5EFE6]/90 md:text-2xl">
                  “Café Ember was born from the idea that people deserve spaces
                  that emotionally hold them.”
                </p>

                <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#C9A96E]">
                  The Origin Philosophy
                </p>
              </div>
            </div>

            {/* right image */}
            <div className="relative h-full min-h-[760px]">
              <Image
                src="/images/gallery/gallery-4.png"
                alt="Café Ember Atmosphere"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0E221A]/60" />

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
                      Signature Ritual
                    </p>

                    <h4 className="mt-2 text-2xl font-light text-[#F5EFE6]">
                      Midnight Mocha
                    </h4>

                    <p className="mt-2 text-sm text-[#F5EFE6]/65">
                      Crafted to slow moments down beautifully.
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
