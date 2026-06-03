"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Container from "@/components/layout/Container";

import { navigation } from "@/data/navigation";
import { CalendarDays } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Defer closing the mobile menu when the pathname changes to avoid
    // synchronous setState calls during effect execution.
    if (!mobileMenu) return;

    const raf = requestAnimationFrame(() => setMobileMenu(false));

    return () => cancelAnimationFrame(raf);
  }, [pathname, mobileMenu]);

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenu]);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-[#C9A96E]/10 bg-[#0E221A]/85 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <Container className="flex h-24 items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="relative z-50 flex shrink-0 items-center">
            <Image
              src="/images/logos/nav-logo.png"
              alt="Café Ember"
              width={220}
              height={56}
              priority
              className="h-22 w-auto object-contain md:h-26"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 xl:gap-10 lg:flex">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group relative text-xs uppercase tracking-[0.24em] transition-colors duration-300 ${
                    isActive ? "text-[#C9A96E]" : "text-[#F5EFE6]"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute -bottom-2 left-0 h-px bg-[#C9A96E] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* RIGHT CTA */}
          <div className="hidden lg:flex">
            <Link
              href="/reservations"
              className="inline-flex items-center gap-3 rounded-full border border-[#C9A96E]/20 bg-[#C9A96E] px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[#0E221A] transition-all duration-300 hover:bg-[#D8BB86]"
            >
              Reserve Table
              <CalendarDays className="h-4 w-4 text-[#0E221A] stroke-[2]" />
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileMenu((prev) => !prev)}
            aria-label="Toggle Menu"
            className="relative z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A96E]/15 bg-[#0E221A]/70 backdrop-blur-xl lg:hidden"
          >
            <Image
              src="/images/icons/icon-menu.png"
              alt="Menu"
              width={20}
              height={20}
              className={`h-5 w-5 object-contain transition-transform duration-300 ${
                mobileMenu ? "rotate-90" : ""
              }`}
            />
          </button>
        </Container>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileMenu
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* background */}
        <div className="absolute inset-0 bg-[#0E221A]" />

        {/* texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "url('/images/textures/texture-dark-fabric.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* grain */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "url('/images/textures/texture-vintage-noise.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <Container className="relative z-10 flex min-h-screen flex-col justify-center py-24">
          <div className="flex flex-col items-start gap-8">
            {navigation.map((item, index) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-4 text-3xl font-light tracking-[-0.03em] transition-all duration-300 ${
                    isActive ? "text-[#C9A96E]" : "text-[#F5EFE6]"
                  }`}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  <span className="text-sm text-[#C9A96E]/50">
                    0{index + 1}
                  </span>

                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/reservations"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#C9A96E]/20 bg-[#C9A96E] px-7 py-4 text-xs uppercase tracking-[0.22em] text-[#0E221A] transition-all duration-300 hover:bg-[#D8BB86]"
            >
              Reserve Table
              <CalendarDays className="h-4 w-4 text-[#0E221A] stroke-[2]" />
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}
