"use client";

import Image from "next/image";
import { drinks } from "@/data/drinks";
import { desserts } from "@/data/desserts";
import Container from "@/components/layout/Container";
import { ArrowRight, Heart } from "lucide-react";
import Link from "next/link";

export default function SignatureMenu() {
  const featuredDrinks = drinks.slice(0, 4);
  const featuredDesserts = desserts.slice(0, 4);

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
          backgroundImage: "url('/images/textures/texture-coffee-stains.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Container className="relative z-10">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
            Signature Menu
          </p>

          <h2 className="text-4xl font-light leading-tight text-[#173126] md:text-6xl">
            Handcrafted
            <span className="block text-[#C9A96E]">With Intention</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#173126]/70 md:text-base">
            Explore artisan coffee rituals, cinematic desserts, and emotional
            flavor experiences curated for slow living.
          </p>
        </div>

        {/* drinks section */}
        <div className="mt-24">
          <div className="mb-12 flex items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#C9A96E]">
                Signature Drinks
              </p>

              <h3 className="mt-4 text-4xl font-light text-[#173126]">
                Artisan Coffee Rituals
              </h3>
            </div>

            <div className="hidden h-[1px] flex-1 bg-[#173126]/10 lg:block" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {featuredDrinks.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-[34px] border border-[#173126]/8 bg-[#FFFDF9]/90 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
              >
                {/* image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={700}
                    height={900}
                    className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E221A]/70 via-transparent to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full border border-[#FFFFFF]/15 bg-[#C9A96E]/90 px-4 py-2 backdrop-blur-xl">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#173126]">
                      {item.category}
                    </p>
                  </div>
                </div>

                {/* content */}
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

                    <span className="text-sm tracking-[0.18em] text-[#C9A96E]">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <Link
              href="/drinks"
              className="inline-flex items-center gap-3 rounded-full border border-[#173126]/10 bg-[#173126] px-8 py-4 text-xs uppercase tracking-[0.25em] text-[#C9A96E] transition-all duration-300 hover:scale-[1.03] hover:bg-[#0E221A]"
            >
              Explore All Drinks
              <ArrowRight className="h-4 w-4 text-[#C9A96E] stroke-[2]" />
            </Link>
          </div>
        </div>

        {/* desserts section */}
        <div className="mt-32">
          <div className="mb-12 flex items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#C9A96E]">
                Signature Desserts
              </p>

              <h3 className="mt-4 text-4xl font-light text-[#173126]">
                Cinematic Sweet Creations
              </h3>
            </div>

            <div className="hidden h-[1px] flex-1 bg-[#173126]/10 lg:block" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {featuredDesserts.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-[34px] border border-[#173126]/8 bg-[#FFFDF9]/90 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
              >
                {/* image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={700}
                    height={900}
                    className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E221A]/70 via-transparent to-transparent" />

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
                      <h4 className="text-2xl font-light text-[#173126]">
                        {item.name}
                      </h4>

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
          <div className="mt-14 flex justify-center">
            <Link
              href="/desserts"
              className="inline-flex items-center gap-3 rounded-full border border-[#173126]/10 bg-[#173126] px-8 py-4 text-xs uppercase tracking-[0.25em] text-[#C9A96E] transition-all duration-300 hover:scale-[1.03] hover:bg-[#0E221A]"
            >
              Explore All Desserts
              <ArrowRight className="h-4 w-4 text-[#C9A96E] stroke-[2]" />
            </Link>
          </div>
        </div>

        {/* bottom feature */}
        <div className="mt-32 overflow-hidden rounded-[42px] bg-[#0E221A] text-[#F5EFE6]">
          <div className="grid items-center lg:grid-cols-[1fr_1fr]">
            {/* left image */}
            <div className="relative h-full min-h-[720px]">
              <Image
                src="/images/gallery/gallery-4.png"
                alt="Signature Coffee Ritual"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0E221A]/60" />
            </div>

            {/* right content */}
            <div className="p-10 md:p-16">
              <p className="text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
                Menu Philosophy
              </p>

              <h3 className="mt-6 text-4xl font-light leading-tight md:text-5xl">
                Crafted Beyond
                <span className="block text-[#C9A96E]">Just Flavor</span>
              </h3>

              <p className="mt-8 max-w-xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
                Every item inside Café Ember is designed to feel emotional,
                cinematic, and beautifully intentional — from the textures to
                the atmosphere surrounding it.
              </p>

              {/* features */}
              <div className="mt-12 space-y-5">
                <div className="flex items-start gap-5 rounded-[28px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-6 backdrop-blur-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFFFFF]/5">
                    <Image
                      src="/images/icons/icon-coffee-bean.png"
                      alt="Coffee Bean"
                      width={44}
                      height={44}
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h4 className="text-xl font-light text-[#F5EFE6]">
                      Artisan Craftsmanship
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-[#F5EFE6]/65">
                      Carefully layered flavors and handcrafted preparation
                      rituals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 rounded-[28px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-6 backdrop-blur-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFFFFF]/5">
                    <Heart className="h-5 w-5 text-[#C9A96E] fill-[#C9A96E] stroke-[2]" />
                  </div>

                  <div>
                    <h4 className="text-xl font-light text-[#F5EFE6]">
                      Emotional Experience
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-[#F5EFE6]/65">
                      Designed to create comfort, nostalgia, and memorable
                      moments.
                    </p>
                  </div>
                </div>
              </div>

              {/* quote */}
              <div className="mt-14 border-l border-[#C9A96E]/30 pl-6">
                <p className="max-w-xl text-xl font-light leading-relaxed text-[#F5EFE6]/90 md:text-2xl">
                  “The menu should feel like part of the atmosphere.”
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
