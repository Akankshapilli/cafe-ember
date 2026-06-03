"use client";

import Container from "@/components/layout/Container";
import { Heart, Sparkles } from "lucide-react";
import Image from "next/image";

const storyMoments = [
  {
    title: "Craftsmanship",
    description:
      "Every coffee and dessert is handcrafted with precision, warmth, and cinematic beauty.",
    image: "/images/story/story-artisan-process.png",
  },
  {
    title: "Human Connection",
    description:
      "Meaningful conversations and emotional warmth shape the soul of Café Ember.",
    image: "/images/story/story-community.png",
  },
  {
    title: "Luxury Identity",
    description:
      "Textures, branding, menus, and packaging designed with quiet elegance.",
    image: "/images/story/story-brand-detail.png",
  },
];

export default function VisualStory() {
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
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
            Visual Storytelling
          </p>

          <h2 className="text-4xl font-light leading-tight text-[#173126] md:text-6xl">
            More Than A Café.
            <span className="block text-[#C9A96E]">A Living Narrative.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-[#173126]/70 md:text-base">
            Café Ember is designed like an unfolding cinematic story — blending
            atmosphere, craftsmanship, emotion, and human connection.
          </p>
        </div>

        {/* story cards */}
        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {storyMoments.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-[36px] border border-[#173126]/8 bg-white/70 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
            >
              {/* image */}
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={900}
                  height={1200}
                  className="h-[620px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0E221A]/80 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 rounded-full border border-[#FFFFFF]/15 bg-[#FFFFFF]/10 px-4 py-2 backdrop-blur-xl">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#F5EFE6]">
                    Café Ember Story
                  </p>
                </div>
              </div>

              {/* content */}
              <div className="p-7">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-3xl font-light text-[#173126]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-[#173126]/70">
                      {item.description}
                    </p>
                  </div>

                  <Sparkles className="h-10 w-10 text-[#C9A96E] stroke-[2]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* cinematic split section */}
        <div className="mt-28 overflow-hidden rounded-[42px] bg-[#173126] text-[#F5EFE6] transition-transform duration-500 hover:scale-[1.01]">
          <div className="grid items-center lg:grid-cols-[1fr_1fr]">
            {/* left content */}
            <div className="p-10 md:p-16">
              <p className="text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
                Signature Philosophy
              </p>

              <h3 className="mt-6 text-4xl font-light leading-tight md:text-5xl">
                Crafted Like
                <span className="block text-[#C9A96E]">A Beautiful Memory</span>
              </h3>

              <p className="mt-8 max-w-xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
                Café Ember exists between storytelling and atmosphere — where
                luxury feels warm, visuals feel emotional, and every detail
                feels intentionally alive.
              </p>

              {/* feature list */}
              <div className="mt-12 space-y-5">
                <div className="flex items-start gap-5 rounded-[28px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-6 backdrop-blur-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFFFFF]/5">
                    <Heart className="h-6 w-6 text-[#C9A96E] fill-[#C9A96E] stroke-[2]" />
                  </div>

                  <div>
                    <h4 className="text-xl font-light text-[#F5EFE6]">
                      Emotional Warmth
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-[#F5EFE6]/65">
                      Spaces designed to feel comforting, intimate, and
                      timeless.
                    </p>
                  </div>
                </div>

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
                      Artisan Rituals
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-[#F5EFE6]/65">
                      Handcrafted experiences rooted in slow living and detail.
                    </p>
                  </div>
                </div>
              </div>

              {/* quote */}
              <div className="mt-14 border-l border-[#C9A96E]/30 pl-6">
                <p className="max-w-xl text-xl font-light leading-relaxed text-[#F5EFE6]/90 md:text-2xl">
                  “Luxury should never feel distant. It should feel deeply
                  human.”
                </p>

                <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#C9A96E]">
                  Café Ember Philosophy
                </p>
              </div>
            </div>

            {/* right image */}
            <div className="group relative h-full min-h-[700px] overflow-hidden">
              <Image
                src="/images/story/story-signature-moment.png"
                alt="Signature Moment"
                fill
                className="object-cover transition-transform duration-[4000ms] group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#173126]/60" />

              {/* floating card */}
              <div className="absolute bottom-8 left-8 right-8 rounded-[30px] border border-[#FFFFFF]/10 bg-[#0E221A]/70 p-6 backdrop-blur-2xl">
                <div className="flex items-center gap-5">
                  <div className="relative h-20 w-20 overflow-hidden rounded-2xl">
                    <Image
                      src="/images/desserts/heaven-glass.png"
                      alt="Heaven in a Glass"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[#C9A96E]">
                      Signature Pairing
                    </p>

                    <h4 className="mt-2 text-2xl font-light text-[#F5EFE6]">
                      Heaven in a Glass
                    </h4>

                    <p className="mt-2 text-sm text-[#F5EFE6]/65">
                      The emotional centerpiece of Café Ember.
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
