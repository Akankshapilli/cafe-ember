"use client";

import Container from "@/components/layout/Container";
import { Heart } from "lucide-react";
import Image from "next/image";

export default function StorySignatureMoment() {
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
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A96E]/10 blur-3xl" />

      <Container className="relative z-10">
        <div className="overflow-hidden rounded-[42px] border border-[#FFFFFF]/10 bg-[#173126]/70 backdrop-blur-2xl">
          <div className="grid items-center lg:grid-cols-[1fr_1fr]">
            {/* LEFT CONTENT */}
            <div className="p-10 md:p-16">
              <p className="text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
                Signature Ember Moment
              </p>

              <h2 className="mt-6 text-4xl font-light leading-tight md:text-6xl">
                The Moment
                <span className="block text-[#C9A96E]">
                  Everything Slows Down
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
                There is always a moment inside Café Ember — when the music
                softens, the coffee aroma settles into the air, and time
                suddenly feels slower, warmer, and softer.
              </p>

              <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
                It might happen during a quiet late-night conversation, while
                tasting a signature dessert, or during the first sip of rich
                espresso beneath candlelight.
              </p>

              <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
                That feeling — calm, emotional, cinematic, and deeply human — is
                the soul of Café Ember.
              </p>

              {/* feature cards */}
              <div className="mt-14 space-y-5">
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
                    <h3 className="text-xl font-light text-[#F5EFE6]">
                      Slow Coffee Rituals
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-[#F5EFE6]/65">
                      Rich espresso experiences designed to slow moments down
                      beautifully.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 rounded-[28px] border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 p-6 backdrop-blur-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFFFFF]/5">
                    <Heart className="h-6 w-6 text-[#C9A96E] fill-[#C9A96E] stroke-[2]" />
                  </div>

                  <div>
                    <h3 className="text-xl font-light text-[#F5EFE6]">
                      Emotional Atmosphere
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-[#F5EFE6]/65">
                      Interiors crafted to feel intimate, calm, and emotionally
                      alive.
                    </p>
                  </div>
                </div>
              </div>

              {/* quote */}
              <div className="mt-14 border-l border-[#C9A96E]/30 pl-6">
                <p className="max-w-2xl text-xl font-light leading-relaxed text-[#F5EFE6]/90 md:text-3xl">
                  “Café Ember is not remembered for what people ordered.
                  <span className="mt-3 block">
                    It is remembered for how it made them feel.”
                  </span>
                </p>

                <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#C9A96E]">
                  Signature Ember Philosophy
                </p>
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative h-full min-h-[860px]">
              {/* main image */}
              <Image
                src="/images/moods/mood-candlelight.png"
                alt="Signature Ember Moment"
                fill
                className="object-cover"
              />

              {/* overlays */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#173126]/70" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0E221A]/40 via-transparent to-transparent" />

              {/* floating dessert card */}
              <div className="absolute bottom-8 left-8 right-8 rounded-[32px] border border-[#FFFFFF]/10 bg-[#0E221A]/70 p-6 backdrop-blur-2xl">
                <div className="flex items-center gap-5">
                  <div className="relative h-24 w-24 overflow-hidden rounded-2xl">
                    <Image
                      src="/images/desserts/heaven-glass.png"
                      alt="Heaven in a Glass"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[#C9A96E]">
                      Signature Dessert
                    </p>

                    <h3 className="mt-2 text-2xl font-light text-[#F5EFE6]">
                      Heaven In A Glass
                    </h3>

                    <p className="mt-2 text-sm text-[#F5EFE6]/65">
                      Crafted for unforgettable evenings.
                    </p>
                  </div>
                </div>
              </div>

              {/* top floating badge */}
              <div className="absolute left-8 top-8 rounded-full border border-[#FFFFFF]/10 bg-[#0E221A]/60 px-5 py-3 backdrop-blur-xl">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#F5EFE6]">
                  Cinematic Luxury Atmosphere
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
