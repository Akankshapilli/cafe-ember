"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { ArrowRight } from "lucide-react";

export default function HomeAbout() {
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
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
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
            <div className="group overflow-hidden rounded-[42px]">
              <Image
                src="/images/story/story-founder.png"
                alt="Founder Story"
                width={1000}
                height={1300}
                className="h-[820px] w-full object-cover transition-transform duration-[4000ms] group-hover:scale-105"
              />
            </div>

            {/* floating card */}
            <div className="absolute -bottom-10 left-1/2 w-[85%] -translate-x-1/2 rounded-[30px] border border-[#FFFFFF]/15 bg-[#F5EFE6]/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-2xl">
              <div className="flex items-center gap-5">
                <Image
                  src="/images/logos/logo-leaf.png"
                  alt="Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />

                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[#C9A96E]">
                    Café Ember
                  </p>

                  <h3 className="mt-2 text-2xl font-light text-[#173126]">
                    Crafted With Emotion
                  </h3>
                </div>
              </div>
            </div>

            {/* floating side image */}
            <div className="absolute -right-10 top-12 hidden overflow-hidden rounded-[28px] border border-[#FFFFFF]/10 shadow-2xl xl:block">
              <Image
                src="/images/story/story-brand-detail.png"
                alt="Brand Detail"
                width={260}
                height={340}
                className="h-72 w-56 object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
              About Café Ember
            </p>

            <h2 className="max-w-3xl text-4xl font-light leading-tight text-[#173126] md:text-6xl">
              A Luxury Café
              <span className="block text-[#C9A96E]">Built Around Feeling</span>
            </h2>

            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[#173126]/70 md:text-base">
              Café Ember was created as more than a coffee destination. It was
              designed to feel warm, cinematic, emotional, and deeply human —
              where every detail slows time down beautifully.
            </p>

            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#173126]/70 md:text-base">
              From handcrafted desserts to glowing interiors, every experience
              is shaped through artisan craftsmanship, storytelling, and quiet
              luxury aesthetics.
            </p>

            {/* features */}
            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              <div className="rounded-[28px] border border-[#173126]/8 bg-white/70 p-6 pt-3 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                <Image
                  src="/images/icons/icon-heart.png"
                  alt="Heart"
                  width={58}
                  height={58}
                  className="object-contain"
                />

                <h3 className="text-xl font-light text-[#173126]">
                  Emotional Warmth
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#173126]/70">
                  Designed to feel intimate, calm, and beautifully memorable.
                </p>
              </div>

              <div className="rounded-[28px] border border-[#173126]/8 bg-white/70 p-6 pt-3 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                <Image
                  src="/images/icons/icon-coffee-bean.png"
                  alt="Coffee Bean"
                  width={58}
                  height={58}
                  className="object-contain"
                />

                <h3 className="text-xl font-light text-[#173126]">
                  Artisan Craft
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#173126]/70">
                  Handcrafted coffee rituals and premium dessert experiences.
                </p>
              </div>
            </div>

            {/* quote */}
            <div className="mt-14 border-l border-[#C9A96E]/30 pl-6">
              <p className="max-w-2xl text-xl font-light leading-relaxed text-[#173126]/90 md:text-2xl">
                “Luxury should feel warm, personal, emotional, and
                unforgettable.”
              </p>

              <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#C9A96E]">
                Café Ember Philosophy
              </p>
            </div>

            {/* button */}
            <div className="mt-12">
              <Link
                href="/story"
                className="inline-flex items-center gap-3 rounded-full bg-[#173126] px-8 py-4 text-xs uppercase tracking-[0.25em] text-[#F5EFE6] transition-all duration-300 hover:scale-[1.03] hover:bg-[#254738] hover:shadow-[0_16px_40px_rgba(23,49,38,0.18)]"
              >
                Explore Our Story
                <ArrowRight className="h-4 w-4 text-[#F5EFE6] stroke-[2]" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
