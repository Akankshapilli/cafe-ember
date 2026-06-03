"use client";

import Image from "next/image";

import { gallery } from "@/data/gallery";

import Container from "@/components/layout/Container";
import { Sparkles } from "lucide-react";

export default function GalleryGrid() {
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
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
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
            Visual Gallery
          </p>

          <h2 className="text-4xl font-light leading-tight text-[#173126] md:text-6xl">
            Moments Inside
            <span className="mt-2 block text-[#C9A96E]">Café Ember</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#173126]/70 md:text-base">
            A cinematic collection of interiors, artisan rituals, emotional
            moments, and luxury café storytelling.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 2xl:grid-cols-3">
          {gallery.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-[32px] border border-[#173126]/8 bg-white/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] ${
                index % 3 === 0 ? "md:row-span-2" : ""
              }`}
            >
              {/* IMAGE */}
              <div
                className={`relative overflow-hidden ${
                  index % 3 === 0
                    ? "h-[620px] md:h-full"
                    : index % 2 === 0
                      ? "h-[460px]"
                      : "h-[520px]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E221A]/85 via-[#0E221A]/10 to-transparent" />

                {/* CATEGORY */}
                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-xl">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#F5EFE6]">
                    {item.category}
                  </p>
                </div>

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-7">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h3 className="text-2xl font-light text-[#F5EFE6] md:text-3xl">
                        {item.title}
                      </h3>

                      <p className="mt-4 max-w-md text-sm leading-relaxed text-[#F5EFE6]/70">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-xl">
                      <Sparkles className="h-5 w-5 text-[#F5EFE6] stroke-[2]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* QUOTE */}
        <div className="mt-24 overflow-hidden rounded-[36px] bg-[#173126] px-8 py-14 text-center text-[#F5EFE6] md:px-16 md:py-16">
          <h3 className="mx-auto max-w-4xl text-3xl font-light leading-relaxed md:text-5xl">
            Every Frame Inside Café Ember
            <span className="mt-2 block text-[#C9A96E]">
              Is Designed To Feel Alive
            </span>
          </h3>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
            Warm lighting, handcrafted textures, emotional storytelling, and
            quiet luxury aesthetics — captured like cinematic memories.
          </p>
        </div>
      </Container>
    </section>
  );
}
