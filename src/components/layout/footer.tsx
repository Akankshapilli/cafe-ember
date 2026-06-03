"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import Container from "@/components/layout/Container";
import { ClockIcon, MapPinIcon, Wifi } from "lucide-react";

const navigation = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "Menu", href: "/menu" },
      { label: "Gallery", href: "/gallery" },
      { label: "Story", href: "/story" },
    ],
  },
  {
    title: "Experience",
    links: [
      { label: "Reservations", href: "/reservations" },
      { label: "Atmosphere", href: "/experience" },
      { label: "Signature Desserts", href: "/menu" },
      { label: "Coffee Rituals", href: "/story" },
    ],
  },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "#",
    icon: FaFacebookF,
  },
  {
    name: "Twitter",
    href: "#",
    icon: FaXTwitter,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0E221A] text-[#F5EFE6]">
      {/* dark fabric texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "url('/images/textures/texture-dark-fabric.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* cinematic grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "url('/images/textures/texture-vintage-noise.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* ambient glow */}
      <div className="absolute left-1/2 top-0 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#C9A96E]/10 blur-3xl" />

      <Container className="relative z-10 pt-24 pb-10">
        {/* TOP */}
        <div className="grid gap-16 border-b border-[#C9A96E]/10 pb-16 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          {/* BRAND */}
          <div className="max-w-md">
            <Image
              src="/images/logos/nav-logo.png"
              alt="Café Ember"
              width={220}
              height={56}
              className="h-22 w-auto object-contain md:h-26"
            />

            <p className="mt-6 text-sm leading-relaxed text-[#F5EFE6]/65 md:text-base">
              A cinematic artisan café experience blending handcrafted coffee,
              signature desserts, emotional storytelling, and quiet luxury.
            </p>

            <div className="mt-8 flex items-center gap-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A96E]/20 bg-white/5 transition-all duration-300 hover:border-[#C9A96E]/50 hover:bg-[#C9A96E]/10"
                  >
                    <Icon className="h-5 w-5 text-[#C9A96E] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#C9A96E]" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* NAVIGATION */}
          {navigation.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs uppercase tracking-[0.28em] text-[#C9A96E]">
                {group.title}
              </h3>

              <div className="mt-8 flex flex-col gap-4">
                {group.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="w-fit text-sm text-[#F5EFE6]/70 transition-all duration-300 hover:translate-x-1 hover:text-[#C9A96E]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* MIDDLE */}
        <div className="flex flex-col items-center justify-between gap-6 border-b border-[#C9A96E]/10 py-10 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-3">
            <MapPinIcon className="h-5 w-5 text-[#C9A96E]" />

            <p className="text-sm text-[#F5EFE6]/70">
              Banjara Hills, Hyderabad
            </p>
          </div>

          <div className="flex items-center gap-3">
            <ClockIcon className="h-5 w-5 text-[#C9A96E]" />

            <p className="text-sm text-[#F5EFE6]/70">
              Open Daily · 8:00 AM — 11:00 PM
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Wifi className="h-5 w-5 text-[#C9A96E]" />

            <p className="text-sm text-[#F5EFE6]/70">Free High-Speed Wi-Fi</p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-6 pt-8 text-center md:flex-row md:text-left">
          <p className="text-xs tracking-[0.16em] text-[#F5EFE6]/40">
            © 2026 CAFÉ EMBER · ALL RIGHTS RESERVED
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-xs tracking-[0.16em] text-[#F5EFE6]/40 transition-colors duration-300 hover:text-[#C9A96E]"
            >
              PRIVACY
            </Link>

            <Link
              href="/"
              className="text-xs tracking-[0.16em] text-[#F5EFE6]/40 transition-colors duration-300 hover:text-[#C9A96E]"
            >
              TERMS
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
