import ReservationCTA from "@/sections/experience/reservation-cta";
import ReservationExperience from "@/sections/reservations/reservation-experience";
import ReservationHero from "@/sections/reservations/reservation-hero";
import ReservationMoments from "@/sections/reservations/reservation-moments";
import ReservationProcess from "@/sections/reservations/reservation-process";

export default function ReservationsPage() {
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

      <ReservationHero />

      <ReservationExperience />

      <ReservationProcess />

      <ReservationMoments />

      <ReservationCTA />
    </main>
  );
}
