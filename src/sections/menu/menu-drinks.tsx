"use client";

import Container from "@/components/layout/Container";
import Image from "next/image";
import { drinks } from "@/data/drinks";

export default function DrinksMenu() {
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
          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {drinks.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-[34px] border border-[#173126]/8 bg-white"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={700}
                  height={900}
                  className="h-[360px] w-full object-cover"
                />

                <div className="p-6">
                  <div className="flex justify-between">
                    <h3 className="text-2xl font-light text-[#173126]">
                      {item.name}
                    </h3>

                    <span className="text-[#C9A96E]">{item.price}</span>
                  </div>

                  <p className="mt-3 text-[#173126]/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
