import StoryBrandDetail from "@/sections/story/story-brand-detail";
import StoryCommunity from "@/sections/story/story-community";
import StoryDessertCraft from "@/sections/story/story-dessert-craft";
import StoryEveningVibes from "@/sections/story/story-evening-vibes";
import StoryFounder from "@/sections/story/story-founder";
import StoryHero from "@/sections/story/story-hero";
import StoryOrigin from "@/sections/story/story-origin";
import StorySignatureMoment from "@/sections/story/story-signature-moment";

export default function StoryPage() {
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

      {/* soft natural lighting */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "url('/images/textures/texture-light-shadow.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <StoryHero />

      <StoryFounder />

      <StoryOrigin />

      <StoryCommunity />

      <StoryDessertCraft />

      <StoryEveningVibes />

      <StoryBrandDetail />

      <StorySignatureMoment />
    </main>
  );
}
