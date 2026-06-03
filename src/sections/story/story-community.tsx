"use client";

import Container from "@/components/layout/Container";
import { Heart } from "lucide-react";
import Image from "next/image";

const communityStories = [
  {
    title: "Late Night Conversations",
    description:
      "Meaningful talks, warm drinks, and emotional moments shared under soft candlelight.",
    image: "/images/story/story-community.png",
  },
  {
    title: "Creative Gatherings",
    description:
      "Designers, writers, and dreamers finding inspiration inside calm luxury spaces.",
    image: "/images/moods/mood-work-session.png",
  },
  {
    title: "Slow Weekend Rituals",
    description:
      "Brunches, laughter, artisan desserts, and beautifully unhurried mornings.",
    image: "/images/moods/mood-weekend-brunch.png",
  },
];

export default function StoryCommunity() {
  return (
    <section className="relative overflow-hidden bg-[#0E221A] py-32 text-[#F5EFE6]">
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

      {/* ambient glow */}
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A96E]/10 blur-3xl" />

      <Container className="relative z-10">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
            Community & Connection
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            Built Around
            <span className="block text-[#C9A96E]">Human Moments</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
            Café Ember was never designed to be just a café. It was created as a
            space where people feel seen, calm, connected, and emotionally
            present.
          </p>
        </div>

        {/* cards */}
        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {communityStories.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-[36px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-[#FFFFFF]/8"
            >
              {/* image */}
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={900}
                  height={1200}
                  className="h-[540px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E221A]/85 via-transparent to-transparent" />

                {/* top label */}
                <div className="absolute left-5 top-5 rounded-full border border-[#FFFFFF]/15 bg-[#FFFFFF]/10 px-4 py-2 backdrop-blur-xl">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#F5EFE6]">
                    Ember Community
                  </p>
                </div>
              </div>

              {/* content */}
              <div className="p-7">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-3xl font-light text-[#F5EFE6]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-[#F5EFE6]/65">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* cinematic split section */}
        <div className="mt-28 overflow-hidden rounded-[42px] border border-[#FFFFFF]/10 bg-[#173126]/70 backdrop-blur-2xl">
          <div className="grid items-center lg:grid-cols-[1fr_1fr]">
            {/* left image */}
            <div className="relative h-full min-h-[760px]">
              <Image
                src="/images/gallery/gallery-12.png"
                alt="Community Atmosphere"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#173126]/65" />
            </div>

            {/* right content */}
            <div className="p-10 md:p-16">
              <p className="text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
                The Ember Feeling
              </p>

              <h3 className="mt-6 text-4xl font-light leading-tight md:text-5xl">
                Luxury Spaces
                <span className="block text-[#C9A96E]">With A Soul</span>
              </h3>

              <p className="mt-8 max-w-xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
                Café Ember blends cinematic interiors, artisan coffee rituals,
                emotional warmth, and intentional atmosphere into experiences
                people remember deeply.
              </p>

              {/* features */}
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
                      Interiors designed to feel comforting, intimate, and calm.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 rounded-[28px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-6 backdrop-blur-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFFFFF]/5">
                    <Image
                      src="/images/icons/icon-cup-hot.png"
                      alt="Coffee"
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
                      Slow-crafted coffee experiences layered with detail and
                      care.
                    </p>
                  </div>
                </div>
              </div>

              {/* quote */}
              <div className="mt-14 border-l border-[#C9A96E]/30 pl-6">
                <p className="max-w-xl text-xl font-light leading-relaxed text-[#F5EFE6]/90 md:text-2xl">
                  “People may come for coffee, but they stay for the feeling.”
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
