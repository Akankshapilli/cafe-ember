import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "Café Ember — Luxury Artisan Café",
  description:
    "A luxury artisan café experience blending handcrafted coffee, signature desserts, cinematic interiors, and warm community storytelling.",

  keywords: [
    "Café Ember",
    "Luxury Café",
    "Artisan Coffee",
    "Premium Desserts",
    "Coffee Shop",
    "Cinematic Café",
    "Luxury Branding",
    "Next.js Website",
  ],

  authors: [
    {
      name: "Akanksha Pilli",
    },
  ],

  openGraph: {
    title: "Café Ember",
    description:
      "Luxury artisan café experience with cinematic storytelling and premium desserts.",

    type: "website",

    images: [
      {
        url: "/images/hero/hero-main.png",
        width: 1200,
        height: 630,
        alt: "Café Ember",
      },
    ],
  },

  icons: {
    icon: "/images/logos/favicon-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden bg-[#F5EFE6] text-[#173126] antialiased">
        <div
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.04]"
          style={{
            backgroundImage: "url('/images/textures/texture-paper.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* cinematic grain */}
        <div
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.03] mix-blend-multiply"
          style={{
            backgroundImage:
              "url('/images/textures/texture-vintage-noise.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* ambient natural lighting */}
        <div
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.04]"
          style={{
            backgroundImage: "url('/images/textures/texture-light-shadow.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <Navbar />

        <div className="relative z-10">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
