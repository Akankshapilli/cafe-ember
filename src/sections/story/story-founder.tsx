"use client";

import Container from "@/components/layout/Container";
import Image from "next/image";

export default function StoryFounder() {
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
        <div className="grid items-center gap-20 lg:grid-cols-[0.95fr_1.05fr]">
          {/* LEFT VISUAL */}
          <div className="relative">
            {/* main image */}
            <div className="overflow-hidden rounded-[42px]">
              <Image
                src="/images/story/story-founder.png"
                alt="Café Ember Founder"
                width={1000}
                height={1300}
                className="h-[760px] w-full object-cover"
              />
            </div>

            {/* floating card */}
            <div className="absolute -bottom-10 left-1/2 w-[85%] -translate-x-1/2 rounded-[30px] border border-[#FFFFFF]/15 bg-[#F5EFE6]/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-2xl">
              <div className="flex items-center gap-5">
                <Image
                  src="/images/logos/logo-leaf.png"
                  alt="Logo"
                  width={74}
                  height={74}
                  className="object-contain"
                />

                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[#C9A96E]">
                    Café Ember Story
                  </p>

                  <h3 className="mt-2 text-2xl font-light text-[#173126]">
                    Built With Emotion
                  </h3>
                </div>
              </div>
            </div>

            {/* floating side image */}
            <div className="absolute -right-10 top-12 hidden overflow-hidden rounded-[28px] border border-[#FFFFFF]/10 shadow-2xl xl:block">
              <Image
                src="/images/story/story-artisan-process.png"
                alt="Artisan Process"
                width={260}
                height={340}
                className="h-72 w-56 object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
              Founder Story
            </p>

            <h2 className="max-w-2xl text-4xl font-light leading-tight text-[#173126] md:text-6xl">
              Café Ember Began
              <span className="block text-[#C9A96E]">As A Feeling</span>
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-relaxed text-[#173126]/70 md:text-base">
              Café Ember was never meant to be just another luxury café. It was
              imagined as a warm emotional escape — a place where people could
              slow down, breathe deeper, and feel genuinely present.
            </p>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#173126]/70 md:text-base">
              Inspired by cinematic evenings, artisan rituals, meaningful
              conversations, and quiet luxury, Café Ember was designed to feel
              intimate, nostalgic, and beautifully human.
            </p>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#173126]/70 md:text-base">
              Every texture, every dessert, every glowing light, and every
              handcrafted drink exists to create moments people emotionally
              remember.
            </p>

            {/* features */}
            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              <div className="rounded-[28px] border border-[#173126]/8 bg-white/70 p-6 backdrop-blur-xl">
                <h3 className="text-xl font-light text-[#173126]">
                  Emotional Warmth
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#173126]/70">
                  Spaces designed to feel personal, comforting, and deeply calm.
                </p>
              </div>

              <div className="rounded-[28px] border border-[#173126]/8 bg-white/70 p-6 backdrop-blur-xl">
                <h3 className="text-xl font-light text-[#173126]">
                  Cinematic Luxury
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#173126]/70">
                  Editorial-inspired interiors layered with warmth and
                  atmosphere.
                </p>
              </div>
            </div>

            {/* quote */}
            <div className="mt-14 border-l border-[#C9A96E]/30 pl-6">
              <p className="max-w-xl text-xl font-light leading-relaxed text-[#173126]/90 md:text-2xl">
                “The dream was never to create a café people simply visit.
                <span className="mt-3 block">
                  The dream was to create a feeling people return to.”
                </span>
              </p>

              <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#C9A96E]">
                Founder Philosophy
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
