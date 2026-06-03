import GalleryGrid from "@/sections/gallery/gallery-grid";
import GalleryHero from "@/sections/gallery/gallery-hero";
import ImmersiveMoments from "@/sections/gallery/immersive-moments";
import VisualStory from "@/sections/gallery/visual-story";

export default function GalleryPage() {
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

      <GalleryHero />

      <GalleryGrid />

      <ImmersiveMoments />

      <VisualStory />
    </main>
  );
}
