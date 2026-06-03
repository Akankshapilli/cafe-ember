"use client";

import Image from "next/image";
import Container from "@/components/layout/Container";
import { Sparkles } from "lucide-react";

const seasonalItems = [
  {
    title: "Winter Ember Latte",
    description:
      "Velvety espresso, cinnamon warmth, and toasted caramel notes.",
    image: "/images/drinks/winter-ember-latte.png",
    tag: "Seasonal Coffee",
    price: "₹460",
  },
  {
    title: "Golden Citrus Tiramisu",
    description:
      "Soft mascarpone layers with bright citrus and delicate textures.",
    image: "/images/desserts/golden-citrus-tiramisu.png",
    tag: "Seasonal Dessert",
    price: "₹540",
  },
  {
    title: "Rose Vanilla Cloud",
    description: "Floral cold foam layered over silky vanilla espresso cream.",
    image: "/images/drinks/rose-vanilla-cloud.png",
    tag: "Limited Edition",
    price: "₹490",
  },
];

export default function SeasonalSelection() {
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
            Seasonal Selection
          </p>

          <h2 className="text-4xl font-light leading-tight text-[#173126] md:text-6xl">
            Limited Creations
            <span className="block text-[#C9A96E]">For The Season</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#173126]/70 md:text-base">
            Curated seasonal drinks and desserts inspired by atmosphere,
            emotion, and the changing rhythm of the year.
          </p>
        </div>

        {/* cards */}
        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {seasonalItems.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-[36px] border border-[#173126]/8 bg-[#FFFDF9]/80 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
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

                <div className="absolute inset-0 bg-gradient-to-t from-[#0E221A]/75 via-transparent to-transparent" />

                {/* tag */}
                <div className="absolute left-5 top-5 rounded-full border border-[#FFFFFF]/15 bg-[#C9A96E]/90 px-4 py-2 backdrop-blur-xl">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#173126]">
                    {item.tag}
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

                  <span className="text-sm tracking-[0.18em] text-[#C9A96E]">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* feature banner */}
        <div className="mt-28 overflow-hidden rounded-[42px] bg-[#0E221A] text-[#F5EFE6]">
          <div className="grid items-center lg:grid-cols-[1fr_1fr]">
            {/* left content */}
            <div className="p-10 md:p-16">
              <p className="text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
                Seasonal Philosophy
              </p>

              <h3 className="mt-6 text-4xl font-light leading-tight md:text-5xl">
                Crafted Around
                <span className="block text-[#C9A96E]">Mood & Season</span>
              </h3>

              <p className="mt-8 max-w-xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
                Café Ember seasonal creations are designed to capture the
                emotional feeling of each season through flavor, texture, aroma,
                and cinematic presentation.
              </p>

              {/* features */}
              <div className="mt-12 space-y-5">
                <div className="flex items-start gap-5 rounded-[28px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-6 backdrop-blur-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFFFFF]/5">
                    <Image
                      src="/images/icons/icon-leaf.png"
                      alt="Leaf"
                      width={44}
                      height={44}
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h4 className="text-xl font-light text-[#F5EFE6]">
                      Seasonal Ingredients
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-[#F5EFE6]/65">
                      Inspired by fresh flavors and changing atmospheres.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 rounded-[28px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-6 backdrop-blur-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFFFFF]/5">
                    <Sparkles className="h-5 w-5 text-[#C9A96E] stroke-[2]" />
                  </div>

                  <div>
                    <h4 className="text-xl font-light text-[#F5EFE6]">
                      Limited Experiences
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-[#F5EFE6]/65">
                      Curated creations available for a short seasonal window.
                    </p>
                  </div>
                </div>
              </div>

              {/* quote */}
              <div className="mt-14 border-l border-[#C9A96E]/30 pl-6">
                <p className="max-w-xl text-xl font-light leading-relaxed text-[#F5EFE6]/90 md:text-2xl">
                  “Every season deserves its own atmosphere.”
                </p>

                <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#C9A96E]">
                  Café Ember Seasonal Collection
                </p>
              </div>
            </div>

            {/* right image */}
            <div className="relative h-full min-h-[720px]">
              <Image
                src="/images/moods/mood-golden-hour.png"
                alt="Seasonal Mood"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0E221A]/60" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
