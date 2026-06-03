"use client";

import Image from "next/image";
import Container from "@/components/layout/Container";
import { Heart, Sparkles } from "lucide-react";

const communityMoments = [
  {
    title: "Creative Work Sessions",
    description:
      "Designers, writers, and dreamers building ideas over handcrafted coffee.",
    image: "/images/moods/mood-work-session.png",
  },
  {
    title: "Meaningful Conversations",
    description:
      "Warm laughter, emotional connection, and moments that stay with you.",
    image: "/images/story/story-community.png",
  },
  {
    title: "Slow Weekend Gatherings",
    description:
      "Luxury brunches, artisan desserts, and beautifully unhurried mornings.",
    image: "/images/moods/mood-weekend-brunch.png",
  },
];

export default function HomeCommunity() {
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
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A96E]/10 blur-3xl" />

      <Container className="relative z-10">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
            Community & Atmosphere
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            Spaces Designed
            <span className="block text-[#C9A96E]">For Human Connection</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
            Café Ember is where conversations linger longer, ideas come alive,
            and slow moments turn into memories.
          </p>
        </div>

        {/* cards */}
        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {communityMoments.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-[36px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-[#FFFFFF]/8 hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)]"
            >
              {/* image */}
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={900}
                  height={1200}
                  className="h-[520px] w-full object-cover transition-transform duration-[4000ms] group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0E221A]/85 via-[#0E221A]/10 to-transparent" />

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

                  <Heart className="h-10 w-10 text-[#F5EFE6] fill-[#F5EFE6] stroke-[2]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* bottom feature section */}
        <div className="mt-28 overflow-hidden rounded-[42px] border border-[#FFFFFF]/10 bg-[#173126]/70 backdrop-blur-2xl">
          <div className="grid items-center lg:grid-cols-[1fr_1fr]">
            {/* left image */}
            <div className="relative h-full min-h-[680px] overflow-hidden">
              <Image
                src="/images/moods/mood-date-night.png"
                alt="Community Experience"
                fill
                className="object-cover transition-transform duration-[5000ms] hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#173126]/70" />
            </div>

            {/* right content */}
            <div className="p-10 md:p-16">
              <p className="text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
                The Ember Feeling
              </p>

              <h3 className="mt-6 text-4xl font-light leading-tight md:text-5xl">
                More Than
                <span className="block text-[#C9A96E]">Just A Café</span>
              </h3>

              <p className="mt-8 max-w-xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
                Café Ember was built to feel emotionally alive — blending luxury
                interiors, artisan rituals, and meaningful human moments into
                one cinematic experience.
              </p>

              {/* features */}
              <div className="mt-12 space-y-5">
                <div className="flex items-start gap-5 rounded-[28px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-6 backdrop-blur-xl transition-all duration-500 hover:bg-[#FFFFFF]/8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFFFFF]/5">
                    <Image
                      src="/images/icons/icon-cup-hot.png"
                      alt="Coffee"
                      width={34}
                      height={34}
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h4 className="text-xl font-light text-[#F5EFE6]">
                      Artisan Coffee Rituals
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-[#F5EFE6]/65">
                      Slow-crafted coffee experiences designed with care and
                      detail.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 rounded-[28px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-6 backdrop-blur-xl transition-all duration-500 hover:bg-[#FFFFFF]/8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFFFFF]/5">
                    <Sparkles className="h-6 w-6 text-[#C9A96E] stroke-[2]" />
                  </div>

                  <div>
                    <h4 className="text-xl font-light text-[#F5EFE6]">
                      Cinematic Atmosphere
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-[#F5EFE6]/65">
                      Warm lighting, luxury textures, and emotionally rich
                      interiors.
                    </p>
                  </div>
                </div>
              </div>

              {/* quote */}
              <div className="mt-14 border-l border-[#C9A96E]/30 pl-6">
                <p className="max-w-xl text-xl font-light leading-relaxed text-[#F5EFE6]/90 md:text-2xl">
                  “Some places simply serve coffee. Others become part of your
                  story.”
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
