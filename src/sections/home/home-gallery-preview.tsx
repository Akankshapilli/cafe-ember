"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { ArrowRight, Heart, Sparkles } from "lucide-react";

const galleryPreview = [
  {
    image: "/images/gallery/gallery-1.png",
    title: "Luxury Interior",
  },
  {
    image: "/images/gallery/gallery-4.png",
    title: "Coffee Ritual",
  },
  {
    image: "/images/gallery/gallery-7.png",
    title: "Signature Pairing",
  },
  {
    image: "/images/gallery/gallery-12.png",
    title: "Cinematic Atmosphere",
  },
];

export default function HomeGalleryPreview() {
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
          backgroundImage: "url('/images/textures/texture-vintage-noise.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Container className="relative z-10">
        {/* heading */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
              Visual Gallery
            </p>

            <h2 className="text-4xl font-light leading-tight text-[#173126] md:text-6xl">
              A Cinematic Look
              <span className="block text-[#C9A96E]">Into Café Ember</span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#173126]/70 md:text-base">
              Warm interiors, artisan rituals, emotional moments, and luxury
              textures captured like timeless memories.
            </p>
          </div>

          <Link
            href="/gallery"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-[#173126] px-8 py-4 text-xs uppercase tracking-[0.25em] text-[#F5EFE6] transition-all duration-300 hover:scale-[1.03] hover:bg-[#254738]"
          >
            Explore Gallery
            <ArrowRight className="h-4 w-4 text-[#F5EFE6] stroke-[2]" />
          </Link>
        </div>

        {/* gallery grid */}
        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {galleryPreview.map((item, index) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-t-[36px] rounded-b-[56px] ${
                index % 2 === 0 ? "xl:mt-12" : ""
              }`}
            >
              {/* image */}
              <div className="relative overflow-hidden rounded-t-[36px] rounded-b-[56px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={700}
                  height={1000}
                  className="h-[520px] w-full object-cover transition-transform duration-[4000ms] group-hover:scale-105"
                />

                {/* overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E221A]/90 via-[#0E221A]/10 to-transparent" />

                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[#C9A96E]/10" />
                </div>

                {/* floating tag */}
                <div className="absolute left-5 top-5 rounded-full border border-[#FFFFFF]/15 bg-[#FFFFFF]/10 px-4 py-2 backdrop-blur-xl">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#F5EFE6]">
                    Café Ember
                  </p>
                </div>

                {/* content */}
                <div className="absolute bottom-0 left-0 w-full p-7">
                  <div className="flex items-end justify-between gap-5">
                    <div>
                      <h3 className="text-3xl font-light text-[#F5EFE6]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm text-[#F5EFE6]/65">
                        Cinematic artisan atmosphere
                      </p>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#FFFFFF]/10 bg-[#FFFFFF]/10 backdrop-blur-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowRight className="h-4 w-4 text-[#F5EFE6] stroke-[3]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* bottom cinematic section */}
        <div className="mt-28 overflow-hidden rounded-[42px] bg-[#0E221A] text-[#F5EFE6]">
          <div className="grid items-center lg:grid-cols-[0.95fr_1.05fr]">
            {/* left image */}
            <div className="relative h-full min-h-[700px] overflow-hidden">
              <Image
                src="/images/gallery/gallery-9.png"
                alt="Editorial Table"
                fill
                className="object-cover transition-transform duration-[5000ms] hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0E221A]/70" />
            </div>

            {/* right content */}
            <div className="p-10 md:p-16">
              <p className="text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
                Visual Storytelling
              </p>

              <h3 className="mt-6 text-4xl font-light leading-tight md:text-5xl">
                Designed Like
                <span className="block text-[#C9A96E]">A Living Editorial</span>
              </h3>

              <p className="mt-8 max-w-xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
                Café Ember blends luxury interiors, artisan coffee rituals,
                emotional warmth, and cinematic visuals into a café experience
                that feels timeless and deeply immersive.
              </p>

              {/* features */}
              <div className="mt-12 space-y-5">
                <div className="flex items-start gap-5 rounded-[28px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-6 backdrop-blur-xl transition-all duration-500 hover:bg-[#FFFFFF]/8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFFFFF]/5">
                    <Sparkles className="h-6 w-6 text-[#C9A96E] stroke-[2]" />
                  </div>

                  <div>
                    <h4 className="text-xl font-light text-[#F5EFE6]">
                      Cinematic Visuals
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-[#F5EFE6]/65">
                      Warm lighting, emotional framing, and editorial luxury
                      aesthetics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 rounded-[28px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-6 backdrop-blur-xl transition-all duration-500 hover:bg-[#FFFFFF]/8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFFFFF]/5">
                    <Heart className="h-6 w-6 text-[#C9A96E] fill-[#C9A96E] stroke-[2]" />
                  </div>

                  <div>
                    <h4 className="text-xl font-light text-[#F5EFE6]">
                      Emotional Atmosphere
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-[#F5EFE6]/65">
                      Every detail designed to feel warm, intimate, and
                      memorable.
                    </p>
                  </div>
                </div>
              </div>

              {/* quote */}
              <div className="mt-14 border-l border-[#C9A96E]/30 pl-6">
                <p className="max-w-xl text-xl font-light leading-relaxed text-[#F5EFE6]/90 md:text-2xl">
                  “The beauty of Café Ember lives in the details.”
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
