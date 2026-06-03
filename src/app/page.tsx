import HomeAbout from "@/sections/home/home-about";
import HomeCommunity from "@/sections/home/home-community";
import HomeDesserts from "@/sections/home/home-desserts";
import HomeExperience from "@/sections/home/home-experience";
import HomeGalleryPreview from "@/sections/home/home-gallery-preview";
import HomeHero from "@/sections/home/home-hero";
import HomeMood from "@/sections/home/home-mood";
import HomeReservations from "@/sections/home/home-reservations";
import HomeSignature from "@/sections/home/home-signature";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-[#F5EFE6] text-[#173126]">
      {/* luxury paper texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "url('/images/textures/texture-paper.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* cinematic grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply"
        style={{
          backgroundImage: "url('/images/textures/texture-vintage-noise.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* soft ambient lighting */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "url('/images/textures/texture-light-shadow.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <HomeHero />

      <HomeSignature />

      <HomeAbout />

      <HomeDesserts />

      <HomeExperience />

      <HomeMood />

      <HomeCommunity />

      <HomeGalleryPreview />

      <HomeReservations />
    </main>
  );
}
