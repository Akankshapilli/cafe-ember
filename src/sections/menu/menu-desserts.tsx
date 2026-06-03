"use client";

import Container from "@/components/layout/Container";
import Image from "next/image";
import { desserts } from "@/data/desserts";

export default function DessertsMenu() {
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
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url('/images/textures/texture-vintage-noise.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A96E]/10 blur-3xl" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {desserts.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-[34px] border border-[#173126]/8 bg-[#FFFDF9]/90 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
              >
                {/* image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={700}
                    height={900}
                    className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E221A]/70 via-transparent to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full border border-[#FFFFFF]/15 bg-[#C9A96E]/90 px-4 py-2 backdrop-blur-xl">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#173126]">
                      {item.tag}
                    </p>
                  </div>
                </div>

                {/* content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-2xl font-light text-[#173126]">
                        {item.name}
                      </h4>

                      <p className="mt-3 text-sm leading-relaxed text-[#173126]/70">
                        {item.description}
                      </p>
                    </div>

                    <span className="text-sm tracking-[0.18em] text-[#C9A96E]">
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
