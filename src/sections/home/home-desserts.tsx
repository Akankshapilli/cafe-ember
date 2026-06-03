"use client";

import Image from "next/image";
import Link from "next/link";
import { desserts } from "@/data/desserts";
import Container from "@/components/layout/Container";
import { ArrowRight, Heart, Sparkles } from "lucide-react";

export default function HomeDesserts() {
  const featuredDesserts = desserts.slice(1, 5);

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
            Signature Desserts
          </p>

          <h2 className="text-4xl font-light leading-tight text-[#173126] md:text-6xl">
            Sweetness Crafted
            <span className="block text-[#C9A96E]">Like Art</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#173126]/70 md:text-base">
            Elegant textures, handcrafted layers, and cinematic presentation —
            every dessert is designed to feel emotional, luxurious, and
            unforgettable.
          </p>
        </div>

        {/* featured layout */}
        <div className="mt-24 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          {/* left hero */}
          <div className="relative overflow-hidden rounded-[42px] bg-[#173126] text-[#F5EFE6]">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/images/desserts/heaven-glass.png"
                alt="Heaven in a Glass"
                fill
                className="object-cover transition-transform duration-[5000ms] hover:scale-105"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#0E221A]/90 via-[#0E221A]/20 to-transparent" />

            <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-12">
              <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[#FFFFFF]/10 bg-[#FFFFFF]/10 px-5 py-3 backdrop-blur-xl">
                <Sparkles className="h-4 w-4 text-[#FFFFFF] stroke-[2]" />

                <p className="text-[10px] uppercase tracking-[0.35em] text-[#FFFFFF]">
                  Signature Creation
                </p>
              </div>

              <h3 className="mt-8 text-4xl font-light md:text-6xl">
                Heaven
                <span className="block text-[#C9A96E]">In A Glass</span>
              </h3>

              <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
                Silky chocolate mousse, espresso crumble, velvety textures, and
                cinematic dessert presentation — crafted as the emotional
                centerpiece of Café Ember.
              </p>

              <div className="mt-10 flex items-center justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#C9A96E]">
                    Signature Dessert
                  </p>

                  <p className="mt-2 text-3xl font-light text-[#F5EFE6]">
                    ₹580
                  </p>
                </div>

                <Link
                  href="/menu"
                  className="inline-flex items-center gap-3 rounded-full bg-[#C9A96E] px-7 py-4 text-xs uppercase tracking-[0.22em] text-[#0E221A] transition-all duration-300 hover:scale-[1.03] hover:bg-[#D8BB86]"
                >
                  Explore Menu
                  <ArrowRight className="h-4 w-4 text-[#0E221A] stroke-[2]" />
                </Link>
              </div>
            </div>
          </div>

          {/* right cards */}
          <div className="grid gap-8 sm:grid-cols-2">
            {featuredDesserts.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-[34px] border border-[#173126]/8 bg-[#FFFDF9] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
              >
                {/* image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={700}
                    height={900}
                    className="h-[320px] w-full object-cover transition-transform duration-[4000ms] group-hover:scale-105"
                  />

                  <div className="absolute left-5 top-5 rounded-full border border-[#FFFFFF]/15 bg-[#C9A96E]/90 px-4 py-2 backdrop-blur-xl">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#173126]">
                      {item.tag}
                    </p>
                  </div>
                </div>

                {/* content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-light text-[#173126]">
                        {item.name}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-[#173126]/70">
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
        </div>

        {/* bottom banner */}
        <div className="mt-28 overflow-hidden rounded-[42px] bg-[#0E221A] text-[#F5EFE6]">
          <div className="grid items-center lg:grid-cols-[1fr_1fr]">
            {/* left content */}
            <div className="p-10 md:p-16">
              <p className="text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
                Dessert Philosophy
              </p>

              <h3 className="mt-6 text-4xl font-light leading-tight md:text-5xl">
                Designed To Feel
                <span className="block text-[#C9A96E]">Warm & Memorable</span>
              </h3>

              <p className="mt-8 max-w-xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
                Café Ember desserts blend cinematic presentation, emotional
                warmth, handcrafted detail, and luxury café aesthetics into
                every plate.
              </p>

              {/* features */}
              <div className="mt-12 flex flex-col gap-5">
                <div className="flex items-start gap-5 rounded-[28px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-6 backdrop-blur-xl transition-all duration-500 hover:bg-[#FFFFFF]/8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFFFFF]/5">
                    <Sparkles className="h-5 w-5 text-[#C9A96E] stroke-[2]" />
                  </div>

                  <div>
                    <h4 className="text-xl font-light text-[#F5EFE6]">
                      Cinematic Presentation
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-[#F5EFE6]/65">
                      Styled like editorial moments with luxury textures and
                      warmth.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 rounded-[28px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-6 backdrop-blur-xl transition-all duration-500 hover:bg-[#FFFFFF]/8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFFFFF]/5">
                    <Heart className="h-5 w-5 text-[#C9A96E] fill-[#C9A96E] stroke-[2]" />
                  </div>

                  <div>
                    <h4 className="text-xl font-light text-[#F5EFE6]">
                      Emotional Comfort
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-[#F5EFE6]/65">
                      Crafted to feel nostalgic, intimate, and beautifully
                      human.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* right image */}
            <div className="relative h-full min-h-[680px] overflow-hidden">
              <Image
                src="/images/desserts/signature-platter.png"
                alt="Signature Dessert Platter"
                fill
                className="object-cover transition-transform duration-[5000ms] hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0E221A]/60" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
