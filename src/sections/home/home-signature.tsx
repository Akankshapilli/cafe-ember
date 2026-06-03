"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { ArrowRight, Heart, Sparkles } from "lucide-react";

export default function HomeSignature() {
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

      {/* glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A96E]/10 blur-3xl" />

      <Container className="relative z-10">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
            Signature Experience
          </p>

          <h2 className="text-4xl font-light leading-tight text-[#173126] md:text-6xl">
            The Heart Of
            <span className="block text-[#C9A96E]">Café Ember</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#173126]/70 md:text-base">
            Our signature creations blend emotional storytelling, artisan
            craftsmanship, and cinematic luxury into unforgettable moments.
          </p>
        </div>

        {/* main signature layout */}
        <div className="mt-24 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* left large feature */}
          <div className="relative overflow-hidden rounded-[42px] bg-[#0E221A] text-[#F5EFE6]">
            {/* image */}
            <div className="absolute inset-0">
              <Image
                src="/images/drinks/midnight-mocha.png"
                alt="Midnight Mocha"
                fill
                priority
                className="object-cover transition-transform duration-[7000ms] hover:scale-105"
              />
            </div>

            {/* overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E221A]/95 via-[#0E221A]/40 to-transparent" />

            <div className="absolute inset-0 bg-[#0E221A]/25" />

            {/* content */}
            <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-12">
              <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[#FFFFFF]/10 bg-[#FFFFFF]/10 px-5 py-3 backdrop-blur-xl">
                <Sparkles className="h-4 w-4 text-[#C9A96E] stroke-[2]" />

                <p className="text-[10px] uppercase tracking-[0.35em] text-[#C9A96E]">
                  Signature Drink
                </p>
              </div>

              <h3 className="mt-8 text-5xl font-light leading-[0.95] md:text-7xl">
                Midnight
                <span className="block text-[#C9A96E]">Mocha</span>
              </h3>

              <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
                Rich espresso, velvety chocolate, warm textures, and cinematic
                presentation — crafted for slow evenings and meaningful
                conversations.
              </p>

              {/* info row */}
              <div className="mt-10 flex flex-wrap items-center gap-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#C9A96E]">
                    Experience
                  </p>

                  <p className="mt-2 text-2xl font-light text-[#F5EFE6]">
                    Emotional Luxury
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#C9A96E]">
                    Signature Price
                  </p>

                  <p className="mt-2 text-2xl font-light text-[#F5EFE6]">
                    ₹420
                  </p>
                </div>
              </div>

              {/* button */}
              <div className="mt-12">
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-3 rounded-full bg-[#C9A96E] px-8 py-4 text-xs uppercase tracking-[0.25em] text-[#0E221A] transition-all duration-300 hover:scale-[1.03] hover:bg-[#D8BB86]"
                >
                  Explore Full Menu
                  <ArrowRight className="h-4 w-4 text-[#0E221A] stroke-[2]" />
                </Link>
              </div>
            </div>
          </div>

          {/* right stacked cards */}
          <div className="flex flex-col gap-8">
            {/* dessert card */}
            <div className="group overflow-hidden rounded-[36px] border border-[#173126]/8 bg-[#FFFDF9] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]">
              <div className="grid md:grid-cols-[0.9fr_1.1fr]">
                {/* image */}
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/desserts/heaven-glass.png"
                    alt="Heaven in a Glass"
                    width={700}
                    height={900}
                    className="h-full min-h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-5 top-5 rounded-full border border-[#FFFFFF]/15 bg-[#C9A96E]/90 px-4 py-2 backdrop-blur-xl">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#173126]">
                      Signature Dessert
                    </p>
                  </div>
                </div>

                {/* content */}
                <div className="flex flex-col justify-center p-8">
                  <h3 className="text-4xl font-light leading-tight text-[#173126]">
                    Heaven
                    <span className="block text-[#C9A96E]">In A Glass</span>
                  </h3>

                  <p className="mt-5 text-sm leading-relaxed text-[#173126]/70">
                    Silky chocolate mousse, espresso crumble, and handcrafted
                    textures layered like a cinematic memory.
                  </p>

                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-xl font-light text-[#173126]">
                      ₹580
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#173126] transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight className="h-4 w-4 text-[#C9A96E] stroke-[3]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* atmosphere card */}
            <div className="overflow-hidden rounded-[36px] bg-[#173126] text-[#F5EFE6]">
              <div className="grid items-center md:grid-cols-[1fr_1fr]">
                {/* content */}
                <div className="p-8">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#C9A96E]">
                    Signature Atmosphere
                  </p>

                  <h3 className="mt-5 text-4xl font-light leading-tight">
                    Candlelight
                    <span className="block text-[#C9A96E]">Evenings</span>
                  </h3>

                  <p className="mt-5 text-sm leading-relaxed text-[#F5EFE6]/70">
                    Warm jazz, glowing interiors, artisan desserts, and
                    emotional storytelling after sunset.
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <Heart className="h-7 w-7 text-[#C9A96E] fill-[#C9A96E] stroke-[2]" />

                    <p className="text-sm text-[#F5EFE6]/65">
                      Crafted for meaningful moments
                    </p>
                  </div>
                </div>

                {/* image */}
                <div className="relative h-full min-h-[360px] overflow-hidden">
                  <Image
                    src="/images/moods/mood-candlelight.png"
                    alt="Candlelight Mood"
                    fill
                    className="object-cover transition-transform duration-[6000ms] hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#173126]/50" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom quote */}
        <div className="mt-28 overflow-hidden rounded-[42px] bg-[#0E221A] px-8 py-16 text-center text-[#F5EFE6] md:px-16">
          <h3 className="mx-auto max-w-4xl text-3xl font-light leading-relaxed md:text-5xl">
            Every Signature Creation
            <span className="block text-[#C9A96E]">Tells A Story</span>
          </h3>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
            From handcrafted coffee rituals to luxury desserts, Café Ember
            exists to create experiences people emotionally remember.
          </p>
        </div>
      </Container>
    </section>
  );
}
