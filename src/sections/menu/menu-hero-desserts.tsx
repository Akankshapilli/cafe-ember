"use client";

import Container from "@/components/layout/Container";
import Image from "next/image";

export default function MenuHeroDesserts() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0E221A] text-[#F5EFE6]">
      {/* background image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/gallery/gallery-5.png"
          alt="Café Ember Menu"
          fill
          priority
          className="object-cover object-center transition-transform duration-[7000ms] hover:scale-105"
        />
      </div>

      {/* overlays */}
      <div className="absolute inset-0 bg-[#0E221A]/70" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#0E221A]/30 via-[#0E221A]/45 to-[#0E221A]/95" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "url('/images/textures/texture-vintage-noise.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* ambient glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A96E]/10 blur-3xl" />

      <Container className="relative z-10">
        <div className="max-w-5xl">
          {/* top tag */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 px-5 py-1 backdrop-blur-xl">
            <Image
              src="/images/icons/icon-cake-slice.png"
              alt="Dessert"
              width={38}
              height={38}
              className="object-contain"
            />

            <p className="text-[10px] uppercase tracking-[0.35em] text-[#C9A96E]">
              Artisan Desserts
            </p>
          </div>

          {/* heading */}
          <h1 className="max-w-4xl text-5xl font-light leading-[0.92] tracking-[-0.05em] md:text-7xl xl:text-[6.5rem]">
            Café Ember Desserts
            <span className="block text-[#C9A96E]">
              Artisan Dessert Rituals
            </span>
          </h1>

          {/* description */}
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-lg">
            Discover our complete collection of handcrafted desserts, signature
            treats and seasonal creations.
          </p>
        </div>
      </Container>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#0E221A] to-transparent" />
    </section>
  );
}
