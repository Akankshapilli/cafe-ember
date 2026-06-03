import DessertsMenu from "@/sections/menu/menu-desserts";
import MenuHeroDesserts from "@/sections/menu/menu-hero-desserts";

export default function DessertsPage() {
  return (
    <main className="relative overflow-hidden bg-[#F5EFE6] text-[#173126]">
      {/* luxury menu paper texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "url('/images/textures/texture-menu-paper.png')",
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

      <MenuHeroDesserts />

      <DessertsMenu />
    </main>
  );
}
