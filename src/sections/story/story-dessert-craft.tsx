"use client";

import Container from "@/components/layout/Container";
import { Heart, Sparkles } from "lucide-react";
import Image from "next/image";

const dessertCrafts = [
  {
    title: "Layered By Hand",
    description:
      "Every dessert is assembled slowly with precision, texture, and emotional detail.",
    image: "/images/story/story-dessert-craft.png",
  },
  {
    title: "Editorial Presentation",
    description:
      "Styled like cinematic still frames with warmth, elegance, and visual storytelling.",
    image: "/images/desserts/heaven-glass.png",
  },
  {
    title: "Luxury Ingredients",
    description:
      "Premium chocolate, artisan cream, espresso notes, and handcrafted finishing touches.",
    image: "/images/desserts/signature-platter.png",
  },
];

export default function StoryDessertCraft() {
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
          backgroundImage: "url('/images/textures/texture-coffee-stains.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Container className="relative z-10">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
            Dessert Craftsmanship
          </p>

          <h2 className="text-4xl font-light leading-tight text-[#173126] md:text-6xl">
            Crafted Like
            <span className="block text-[#C9A96E]">Edible Art</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#173126]/70 md:text-base">
            Café Ember desserts are designed through texture, emotion,
            presentation, and artisan craftsmanship — turning every plate into a
            cinematic experience.
          </p>
        </div>

        {/* cards */}
        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {dessertCrafts.map((item) => (
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
                    Artisan Dessert Craft
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

        {/* cinematic split section */}
        <div className="mt-28 overflow-hidden rounded-[42px] bg-[#0E221A] text-[#F5EFE6]">
          <div className="grid items-center lg:grid-cols-[1fr_1fr]">
            {/* left image */}
            <div className="relative h-full min-h-[760px]">
              <Image
                src="/images/desserts/heaven-glass.png"
                alt="Dessert Craft"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0E221A]/65" />
            </div>

            {/* right content */}
            <div className="p-10 md:p-16">
              <p className="text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
                Signature Dessert Philosophy
              </p>

              <h3 className="mt-6 text-4xl font-light leading-tight md:text-5xl">
                Every Layer
                <span className="block text-[#C9A96E]">Holds Emotion</span>
              </h3>

              <p className="mt-8 max-w-xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
                Café Ember desserts are created to feel nostalgic, luxurious,
                intimate, and visually unforgettable — blending flavor with
                atmosphere and storytelling.
              </p>

              {/* features */}
              <div className="mt-12 space-y-5">
                <div className="flex items-start gap-5 rounded-[28px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-6 backdrop-blur-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFFFFF]/5">
                    <Sparkles className="h-6 w-6 text-[#C9A96E] stroke-[2]" />
                  </div>

                  <div>
                    <h4 className="text-xl font-light text-[#F5EFE6]">
                      Cinematic Presentation
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-[#F5EFE6]/65">
                      Styled like editorial luxury with warmth and elegance.
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
                      Crafted to create warmth, nostalgia, and memorable
                      moments.
                    </p>
                  </div>
                </div>
              </div>

              {/* quote */}
              <div className="mt-14 border-l border-[#C9A96E]/30 pl-6">
                <p className="max-w-xl text-xl font-light leading-relaxed text-[#F5EFE6]/90 md:text-2xl">
                  “Desserts should not only taste beautiful. They should feel
                  beautiful too.”
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
