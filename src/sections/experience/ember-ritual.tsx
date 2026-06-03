"use client";

import Image from "next/image";

import Container from "@/components/layout/Container";
import { Sparkles } from "lucide-react";

export default function EmberRitual() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
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
        {/* HEADING */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
            The Ember Ritual
          </p>

          <h2 className="text-4xl font-light leading-tight text-[#173126] md:text-6xl">
            Coffee Crafted
            <span className="mt-2 block text-[#C9A96E]">
              Like A Slow Ceremony
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#173126]/70 md:text-base">
            Every pour, every texture, every detail inside Café Ember is
            designed to slow time down and create emotional warmth through
            handcrafted ritual.
          </p>
        </div>

        {/* LAYOUT */}
        <div className="mt-20 grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT */}
          <div className="flex flex-col gap-8">
            {/* CARD */}
            <div className="group overflow-hidden rounded-[32px] border border-[#173126]/8 bg-white/60 backdrop-blur-xl">
              <div className="overflow-hidden">
                <Image
                  src="/images/moods/mood-artisan-brewing.png"
                  alt="Artisan Brewing"
                  width={700}
                  height={900}
                  className="h-[520px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[700px] xl:h-[780px]"
                />
              </div>

              <div className="p-6 md:p-7">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-2xl font-light text-[#173126]">
                      Handcrafted Brewing
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#173126]/70">
                      Slow pours, rising steam, and precise coffee
                      craftsmanship.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* QUOTE */}
            <div className="rounded-[32px] bg-[#173126] p-8 text-[#F5EFE6] md:p-10">
              <p className="mt-2 text-xl font-light leading-relaxed md:text-2xl">
                “Luxury is not loud. It’s warmth, atmosphere, and the feeling of
                staying longer.”
              </p>

              <div className="mt-6 h-px w-20 bg-[#C9A96E]/30" />

              <p className="mt-5 text-xs uppercase tracking-[0.28em] text-[#C9A96E]">
                Café Ember Philosophy
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative overflow-hidden rounded-[36px]">
            <Image
              src="/images/story/story-artisan-process.png"
              alt="Artisan Process"
              width={1000}
              height={1400}
              className="h-full min-h-[700px] w-full object-cover xl:min-h-[950px]"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E221A]/90 via-[#0E221A]/25 to-transparent" />

            {/* CONTENT */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 xl:p-12">
              <div className="max-w-xl">
                <p className="text-xs uppercase tracking-[0.35em] text-[#C9A96E]">
                  Signature Experience
                </p>

                <h3 className="mt-5 text-3xl font-light leading-tight text-[#F5EFE6] md:text-5xl">
                  Precision In
                  <span className="block text-[#C9A96E]">Every Detail</span>
                </h3>

                <p className="mt-6 text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
                  From espresso extraction to final presentation, every Café
                  Ember creation is designed with cinematic beauty, emotional
                  calmness, and artisan intention.
                </p>

                {/* RITUAL CARDS */}
                <div className="mt-10 grid gap-5 sm:grid-cols-2">
                  <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                    <Image
                      src="/images/icons/icon-coffee-bean.png"
                      alt="Coffee Bean"
                      width={22}
                      height={22}
                      className="h-12 w-12 object-contain"
                    />

                    <h4 className="text-lg font-light text-[#F5EFE6]">
                      Premium Beans
                    </h4>

                    <p className="mt-2 text-sm text-[#F5EFE6]/60">
                      Ethically sourced beans with deep roasted complexity.
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                    <Sparkles className="h-6 w-6 text-[#C9A96E] stroke-[2]" />

                    <h4 className="mt-4 text-lg font-light text-[#F5EFE6]">
                      Cinematic Atmosphere
                    </h4>

                    <p className="mt-2 text-sm text-[#F5EFE6]/60">
                      Warm lighting, elegant interiors, and emotional luxury.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
