"use client";

import Image from "next/image";

import Container from "@/components/layout/Container";
import { desserts } from "@/data/desserts";
import { drinks } from "@/data/drinks";

export default function BestSellers() {
  const featuredDrinks = drinks.filter((item) => item.featured).slice(0, 3);

  const featuredDesserts = desserts.slice(0, 3);

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "url('/images/textures/texture-paper.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Container className="relative z-10">
        {/* HEADING */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
            Most Loved
          </p>

          <h2 className="text-4xl font-light leading-tight text-[#173126] md:text-6xl">
            Best Sellers Crafted
            <span className="mt-2 block text-[#C9A96E]">For Slow Moments</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#173126]/70 md:text-base">
            Signature coffees, luxury desserts, and the flavors guests return
            for again and again at Café Ember.
          </p>
        </div>

        {/* DRINKS */}
        <div className="mt-20 md:mt-24">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#C9A96E]">
                Signature Drinks
              </p>

              <h3 className="mt-3 text-2xl font-light text-[#173126] md:text-3xl">
                Coffee Experiences
              </h3>
            </div>

            <Image
              src="/images/icons/icon-cup-hot.png"
              alt="Coffee"
              width={48}
              height={48}
              className="hidden h-18 w-18 object-contain md:block"
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {featuredDrinks.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-[28px] border border-[#173126]/8 bg-white/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={700}
                    height={900}
                    className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[420px]"
                  />

                  <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#173126]/70 px-4 py-2 backdrop-blur-xl">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#F5EFE6]">
                      {item.category}
                    </p>
                  </div>
                </div>

                <div className="p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-light text-[#173126] md:text-2xl">
                        {item.name}
                      </h4>

                      <p className="mt-4 text-sm leading-relaxed text-[#173126]/70">
                        {item.description}
                      </p>
                    </div>

                    <span className="shrink-0 text-sm tracking-[0.18em] text-[#C9A96E]">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DESSERTS */}
        <div className="mt-24 md:mt-28">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#C9A96E]">
                Signature Desserts
              </p>

              <h3 className="mt-3 text-2xl font-light text-[#173126] md:text-3xl">
                Sweet Luxury
              </h3>
            </div>

            <Image
              src="/images/icons/icon-cake-slice.png"
              alt="Dessert"
              width={48}
              height={48}
              className="hidden h-18 w-18 object-contain md:block"
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {featuredDesserts.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-[28px] border border-[#173126]/8 bg-[#FFFDF9] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={700}
                    height={900}
                    className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[420px]"
                  />

                  <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#C9A96E]/90 px-4 py-2 backdrop-blur-xl">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#173126]">
                      {item.tag}
                    </p>
                  </div>
                </div>

                <div className="p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-light text-[#173126] md:text-2xl">
                        {item.name}
                      </h4>

                      <p className="mt-4 text-sm leading-relaxed text-[#173126]/70">
                        {item.description}
                      </p>
                    </div>

                    <span className="shrink-0 text-sm tracking-[0.18em] text-[#C9A96E]">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
