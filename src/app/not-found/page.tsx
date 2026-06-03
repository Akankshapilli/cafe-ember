import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0E221A] px-6 py-20 text-[#F5EFE6]">
      {/* emerald texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "url('/images/textures/texture-emerald-surface.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* cinematic grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-screen"
        style={{
          backgroundImage: "url('/images/textures/texture-vintage-noise.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* ambient glow */}
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A96E]/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#C9A96E]">
          Café Ember
        </p>

        <h1 className="text-7xl font-light leading-none tracking-[-0.05em] md:text-[8rem]">
          404
        </h1>

        <div className="mt-6 h-px w-24 bg-[#C9A96E]/30" />

        <h2 className="mt-8 text-3xl font-light leading-tight md:text-5xl">
          This page wandered away.
        </h2>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#F5EFE6]/70 md:text-base">
          The atmosphere you’re looking for may have moved, disappeared, or
          never existed in the first place. But there’s still warmth waiting
          inside Café Ember.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-[#C9A96E]/25 bg-[#C9A96E] px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-[#0E221A] transition-all duration-300 hover:bg-[#D6B57B]"
          >
            Return Home
          </Link>

          <Link
            href="/menu"
            className="inline-flex items-center justify-center rounded-full border border-[#F5EFE6]/15 bg-transparent px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-[#F5EFE6] transition-all duration-300 hover:border-[#C9A96E]/40 hover:bg-[#FFFFFF]/5"
          >
            Explore Menu
          </Link>
        </div>

        <div className="mt-16 flex items-center gap-4 opacity-70">
          <div className="h-px w-16 bg-[#C9A96E]/30" />

          <Image
            src="/images/logos/logo-symbol.png"
            alt="Café Ember Symbol"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            priority
          />

          <div className="h-px w-16 bg-[#C9A96E]/30" />
        </div>
      </div>
    </main>
  );
}
