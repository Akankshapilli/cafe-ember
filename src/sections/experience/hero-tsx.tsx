"use client";

import Image from "next/image";

import Container from "@/components/layout/Container";

export default function HeroTSX() {
  return (
    <section className="relative overflow-hidden bg-[#0E221A] py-24 text-[#F5EFE6] md:py-32">
      {/* TEXTURES */}
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

      {/* AMBIENT GLOW  */}
      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A96E]/10 blur-3xl" />

      <Container className="relative z-10">
        <div className="grid items-center gap-16 xl:grid-cols-[1fr_1fr]">
          {/* LEFT */}
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
              Cinematic Atmosphere
            </p>

            <h2 className="heading-lg max-w-2xl text-[#F5EFE6]">
              Where Coffee,
              <span className="mt-2 block text-[#C9A96E]">
                Design & Emotion Meet
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
              Café Ember blends handcrafted drinks, warm lighting, artisan
              textures, and emotional storytelling into a luxury café experience
              designed for modern slow living.
            </p>

            {/* FEATURES */}
            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <Image
                  src="/images/icons/icon-cup-hot.png"
                  alt="Coffee"
                  width={40}
                  height={40}
                  className="object-contain"
                />

                <h3 className="mt-5 text-xl font-light">Artisan Coffee</h3>

                <p className="mt-3 text-sm leading-relaxed text-[#F5EFE6]/65">
                  Crafted espresso rituals with premium beans and cinematic
                  presentation.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <Image
                  src="/images/icons/icon-dessert.png"
                  alt="Dessert"
                  width={40}
                  height={40}
                  className="object-contain"
                />

                <h3 className="mt-5 text-xl font-light">Signature Desserts</h3>

                <p className="mt-3 text-sm leading-relaxed text-[#F5EFE6]/65">
                  Luxury dessert experiences designed with elegant textures and
                  warmth.
                </p>
              </div>
            </div>

            {/* QUOTE */}
            <div className="mt-14 border-l border-[#C9A96E]/30 pl-6">
              <p className="max-w-xl text-xl font-light leading-relaxed text-[#F5EFE6]/90 md:text-2xl">
                “Every detail inside Café Ember is designed to feel like a quiet
                luxury memory.”
              </p>

              <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#C9A96E]">
                Ember Experience
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative mx-auto w-full max-w-[620px] xl:max-w-none">
            {/* MAIN IMAGE */}
            <div className="overflow-hidden rounded-[36px] border border-white/10">
              <Image
                src="/images/hero/hero-cafe-interior.png"
                alt="Café Interior"
                width={900}
                height={1200}
                className="h-[520px] w-full object-cover md:h-[760px]"
              />
            </div>

            {/* TOP FLOATING CARD */}
            <div className="absolute left-6 top-6 hidden rounded-[24px] border border-white/10 bg-[#173126]/80 p-5 backdrop-blur-2xl xl:block">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/icons/icon-sparkles.png"
                  alt="Sparkles"
                  width={34}
                  height={34}
                  className="object-contain"
                />

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#C9A96E]">
                    Luxury Atmosphere
                  </p>

                  <p className="mt-1 text-sm text-[#F5EFE6]/65">
                    Cinematic interior design
                  </p>
                </div>
              </div>
            </div>

            {/* BOTTOM CARD */}
            <div className="absolute bottom-6 left-1/2 w-[88%] -translate-x-1/2 rounded-[28px] border border-white/10 bg-[#F5EFE6]/92 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-2xl md:p-6">
              <div className="flex items-center gap-5">
                <div className="relative h-20 w-20 overflow-hidden rounded-2xl">
                  <Image
                    src="/images/drinks/midnight-mocha.png"
                    alt="Midnight Mocha"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[#C9A96E]">
                    Featured Experience
                  </p>

                  <h4 className="mt-2 text-2xl font-light text-[#173126]">
                    Midnight Mocha
                  </h4>

                  <p className="mt-2 text-sm text-[#173126]/65">
                    Rich espresso, dark chocolate, and cinematic evening warmth.
                  </p>
                </div>
              </div>
            </div>

            {/* SIDE IMAGE */}
            <div className="absolute -right-8 top-20 hidden overflow-hidden rounded-[24px] border border-white/10 shadow-2xl 2xl:block">
              <Image
                src="/images/moods/mood-candlelight.png"
                alt="Candlelight Mood"
                width={240}
                height={320}
                className="h-64 w-44 object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
