"use client";

import Image from "next/image";

import { desserts } from "@/data/desserts";

import Container from "@/components/layout/Container";
import { Heart, Sparkles } from "lucide-react";

export default function SignatureDesserts() {
  const featuredDesserts = desserts.slice(0, 4);

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
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "url('/images/textures/texture-vintage-noise.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Container className="relative z-10">
        {/* HEADING */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
            Signature Desserts
          </p>

          <h2 className="text-4xl font-light leading-tight text-[#173126] md:text-6xl">
            Crafted To Feel
            <span className="mt-2 block text-[#C9A96E]">Like A Memory</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#173126]/70 md:text-base">
            Elegant textures, cinematic presentation, and handcrafted sweetness
            — designed to become the emotional centerpiece of the Café Ember
            experience.
          </p>
        </div>

        {/* FEATURE */}
        <div className="mt-20 grid items-center gap-10 xl:mt-24 xl:grid-cols-[1.05fr_0.95fr] xl:gap-14">
          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-[36px]">
            <Image
              src="/images/desserts/heaven-glass.png"
              alt="Heaven in a Glass"
              width={1200}
              height={1500}
              className="h-[520px] w-full object-cover md:h-[680px] xl:h-[760px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0E221A]/75 via-transparent to-transparent" />

            {/* LABEL */}
            <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-xl md:left-8 md:top-8">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#F5EFE6]">
                Signature Dessert
              </p>
            </div>

            {/* INFO */}
            <div className="absolute bottom-6 left-6 right-6 rounded-[28px] border border-white/10 bg-[#173126]/70 p-5 backdrop-blur-2xl md:bottom-8 md:left-8 md:right-8 md:p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-light text-[#F5EFE6] md:text-3xl">
                    Heaven in a Glass
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#F5EFE6]/65">
                    Layers of espresso crumble, silky chocolate mousse, velvety
                    textures, and emotional luxury presentation.
                  </p>
                </div>

                <span className="text-lg tracking-[0.18em] text-[#C9A96E]">
                  ₹580
                </span>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#C9A96E]">
              Dessert Philosophy
            </p>

            <h3 className="mt-6 text-4xl font-light leading-tight text-[#173126] md:text-5xl">
              Sweetness Designed
              <span className="mt-2 block text-[#C9A96E]">With Emotion</span>
            </h3>

            <p className="mt-8 max-w-xl text-sm leading-relaxed text-[#173126]/70 md:text-base">
              Every dessert inside Café Ember is styled like an editorial moment
              — balancing elegance, comfort, texture, and cinematic beauty.
            </p>

            {/* FEATURES */}
            <div className="mt-12 space-y-5">
              <div className="flex items-start gap-5 rounded-[28px] border border-[#173126]/8 bg-white/70 p-6 backdrop-blur-xl">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#173126]">
                  <Sparkles className="h-6 w-6 text-[#C9A96E] stroke-[2]" />
                </div>

                <div>
                  <h4 className="text-xl font-light text-[#173126]">
                    Cinematic Presentation
                  </h4>

                  <p className="mt-2 text-sm leading-relaxed text-[#173126]/70">
                    Styled with elegant plating, warm tones, and luxury
                    composition.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 rounded-[28px] border border-[#173126]/8 bg-white/70 p-6 backdrop-blur-xl">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#173126]">
                  <Heart className="h-6 w-6 text-[#C9A96E] fill-[#C9A96E] stroke-[2]" />
                </div>

                <div>
                  <h4 className="text-xl font-light text-[#173126]">
                    Emotional Warmth
                  </h4>

                  <p className="mt-2 text-sm leading-relaxed text-[#173126]/70">
                    Crafted to feel nostalgic, comforting, and beautifully
                    memorable.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 rounded-[28px] border border-[#173126]/8 bg-white/70 p-6 backdrop-blur-xl">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#173126]">
                  <Image
                    src="/images/icons/icon-desser.png"
                    alt="Dessert"
                    width={44}
                    height={44}
                    className="object-contain"
                  />
                </div>

                <div>
                  <h4 className="text-xl font-light text-[#173126]">
                    Artisan Craftsmanship
                  </h4>

                  <p className="mt-2 text-sm leading-relaxed text-[#173126]/70">
                    Handmade textures and premium ingredients in every creation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {featuredDesserts.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-[32px] border border-[#173126]/8 bg-[#FFFDF9] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={700}
                  height={900}
                  className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[360px]"
                />

                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#C9A96E]/90 px-4 py-2 backdrop-blur-xl">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#173126]">
                    {item.tag}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-2xl font-light text-[#173126]">
                      {item.name}
                    </h4>

                    <p className="mt-3 text-sm leading-relaxed text-[#173126]/70">
                      {item.description}
                    </p>
                  </div>

                  <span className="shrink-0 text-sm tracking-[0.15em] text-[#C9A96E]">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
