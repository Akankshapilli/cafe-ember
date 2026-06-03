import ExperienceHero from "@/sections/experience/experience-hero";
import BestSellers from "@/sections/experience/best-sellers";
import CommunitySection from "@/sections/experience/community-section";
import CraftedMidnight from "@/sections/experience/crafted-midnight";
import EmberRitual from "@/sections/experience/ember-ritual";
import MoodExperience from "@/sections/experience/mood-experience";
import NewsletterSection from "@/sections/experience/newsletter-section";
import ReservationCTA from "@/sections/experience/reservation-cta";
import SignatureDesserts from "@/sections/experience/signature-desserts";

export default function ExperiencePage() {
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

      <ExperienceHero />

      <BestSellers />

      <SignatureDesserts />

      <EmberRitual />

      <MoodExperience />

      <CraftedMidnight />

      <CommunitySection />

      <ReservationCTA />

      <NewsletterSection />
    </main>
  );
}
