"use client";

import Image from "next/image";

import Container from "@/components/layout/Container";

export default function CommunitySection() {
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
        <div className="grid items-center gap-16 xl:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT */}
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
              Community & Connection
            </p>

            <h2 className="text-4xl font-light leading-tight text-[#173126] md:text-6xl">
              More Than Coffee.
              <span className="block text-[#C9A96E]">A Place To Belong.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#173126]/70 md:text-base">
              Café Ember was designed to feel warm, emotional, and alive. A
              quiet luxury space where conversations linger, stories unfold, and
              every table holds a moment worth remembering.
            </p>

            {/* STATS */}
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              <div className="rounded-[28px] border border-[#173126]/8 bg-white/60 p-6 backdrop-blur-xl">
                <h3 className="text-3xl font-light text-[#173126] md:text-4xl">
                  12k+
                </h3>

                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[#173126]/60">
                  Monthly Guests
                </p>
              </div>

              <div className="rounded-[28px] border border-[#173126]/8 bg-white/60 p-6 backdrop-blur-xl">
                <h3 className="text-3xl font-light text-[#173126] md:text-4xl">
                  40+
                </h3>

                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[#173126]/60">
                  Signature Creations
                </p>
              </div>

              <div className="rounded-[28px] border border-[#173126]/8 bg-white/60 p-6 backdrop-blur-xl">
                <h3 className="text-3xl font-light text-[#173126] md:text-4xl">
                  4.9
                </h3>

                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[#173126]/60">
                  Guest Experience
                </p>
              </div>
            </div>

            {/* QUOTE */}
            <div className="mt-14 rounded-[32px] border border-[#C9A96E]/15 bg-[#173126] p-8 text-[#F5EFE6]">
              <p className="mt-6 text-lg font-light leading-relaxed md:text-2xl">
                “The atmosphere feels cinematic yet deeply comforting — like
                slowing down inside a beautiful memory.”
              </p>

              <div className="mt-6 h-px w-16 bg-[#C9A96E]/30" />

              <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#C9A96E]">
                Café Ember Guest
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative mx-auto w-full max-w-[620px] xl:max-w-none">
            {/* MAIN IMAGE */}
            <div className="overflow-hidden rounded-[36px]">
              <Image
                src="/images/story/story-community.png"
                alt="Community"
                width={900}
                height={1200}
                className="h-[520px] w-full object-cover md:h-[700px]"
              />
            </div>

            {/* FLOATING CARD */}
            <div className="absolute bottom-6 left-1/2 w-[88%] -translate-x-1/2 rounded-[28px] border border-white/15 bg-[#F5EFE6]/92 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-2xl md:p-6">
              <div className="flex items-center gap-4">
                <div>
                  <h4 className="text-lg font-medium text-[#173126]">
                    Crafted Human Moments
                  </h4>

                  <p className="mt-1 text-sm text-[#173126]/65">
                    Conversations, warmth, and slow-living energy.
                  </p>
                </div>
              </div>
            </div>

            {/* SIDE IMAGE */}
            <div className="absolute -left-10 top-10 hidden w-44 overflow-hidden rounded-[24px] border border-white/15 shadow-2xl 2xl:block">
              <Image
                src="/images/gallery/gallery-3.png"
                alt="People"
                width={400}
                height={600}
                className="h-64 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
