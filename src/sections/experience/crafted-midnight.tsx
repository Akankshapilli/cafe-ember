"use client";

import Image from "next/image";

import Container from "@/components/layout/Container";
import { AlarmSmoke } from "lucide-react";
import { TbCandleFilled } from "react-icons/tb";

export default function CraftedMidnight() {
  return (
    <section className="relative overflow-hidden bg-[#0E221A] py-24 text-[#F5EFE6] md:py-32">
      {/* textures */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "url('/images/textures/texture-dark-fabric.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "url('/images/textures/texture-vintage-noise.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A96E]/10 blur-3xl" />

      <Container className="relative z-10">
        <div className="grid items-center gap-16 xl:grid-cols-[0.95fr_1.05fr]">
          {/* LEFT */}
          <div className="relative mx-auto w-full max-w-[620px] xl:max-w-none">
            {/* MAIN IMAGE */}
            <div className="overflow-hidden rounded-[36px] border border-[#C9A96E]/10">
              <Image
                src="/images/drinks/midnight-mocha.png"
                alt="Midnight Mocha"
                width={900}
                height={1200}
                className="h-[520px] w-full object-cover md:h-[760px]"
              />
            </div>

            {/* FLOATING CARD */}
            <div className="absolute bottom-6 left-1/2 w-[88%] -translate-x-1/2 rounded-[28px] border border-white/10 bg-[#173126]/80 p-5 backdrop-blur-2xl md:p-6">
              <div className="flex items-center gap-4">
                <AlarmSmoke className="h-10 w-10 rotate-180 text-[#C9A96E] fill-[#C9A96E] stroke-[2]" />

                <div>
                  <h4 className="text-lg font-light text-[#F5EFE6]">
                    Crafted For Evenings
                  </h4>

                  <p className="mt-1 text-sm text-[#F5EFE6]/65">
                    Rich mocha warmth layered with cinematic atmosphere.
                  </p>
                </div>
              </div>
            </div>

            {/* SIDE IMAGE */}
            <div className="absolute -right-8 top-10 hidden overflow-hidden rounded-[24px] border border-white/10 shadow-2xl 2xl:block">
              <Image
                src="/images/moods/mood-night-luxury.png"
                alt="Night Luxury"
                width={400}
                height={600}
                className="h-56 w-44 object-cover"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
              Midnight Collection
            </p>

            <h3 className="mt-6 text-4xl font-light leading-tight md:text-5xl">
              Slow Evenings.
              <span className="block text-[#C9A96E]">Deep Coffee Rituals.</span>
            </h3>

            <p className="mt-8 max-w-xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
              As daylight fades, Café Ember transforms into a calm cinematic
              escape filled with glowing lights, handcrafted drinks, soft jazz,
              and conversations that linger long after midnight.
            </p>

            {/* FEATURES */}
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              <div className="rounded-[28px] border border-white/8 bg-white/5 p-6 backdrop-blur-xl">
                <Image
                  src="/images/icons/icon-cup-hot.png"
                  alt="Coffee"
                  width={48}
                  height={48}
                  className="h-16 w-16 object-contain"
                />

                <h3 className="text-xl font-light">Signature Coffee</h3>

                <p className="mt-3 text-sm leading-relaxed text-[#F5EFE6]/65">
                  Slow-crafted espresso drinks layered with bold depth and
                  velvety textures.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/8 bg-white/5 p-6 backdrop-blur-xl">
                <TbCandleFilled className="h-10 w-10 text-[#C9A96E] fill-[#C9A96E]" />

                <h3 className="mt-5 text-xl font-light">
                  Cinematic Atmosphere
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#F5EFE6]/65">
                  Warm lighting, emerald textures, candle glow, and emotional
                  luxury aesthetics.
                </p>
              </div>
            </div>

            {/* QUOTE */}
            <div className="mt-14 border-l border-[#C9A96E]/30 pl-6">
              <p className="max-w-xl text-xl font-light leading-relaxed text-[#F5EFE6]/90 md:text-2xl">
                “The best conversations happen after sunset — somewhere between
                espresso and silence.”
              </p>

              <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#C9A96E]">
                Café Ember Philosophy
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
