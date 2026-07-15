import type { Metadata } from "next";
import WeddingPage from "@/components/WeddingPage";

const familieDescription =
  "Die Hochzeit von Andi & Lili am 11. September 2026 – Infos für die engsten Verwandten inkl. standesamtlicher Trauung.";

export const metadata: Metadata = {
  title: "Andi & Lili · 11. September 2026",
  description: familieDescription,
  // Diese Variante soll nicht in Suchmaschinen auftauchen
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Andi & Lili",
    url: "https://andi-und-lili.at/familie",
    title: "Andi & Lili · 11. September 2026",
    description: familieDescription,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Die Hochzeit von Andi & Lili · 11. September 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andi & Lili · 11. September 2026",
    description: familieDescription,
    images: ["/og.png"],
  },
};

// Variante für die engsten Verwandten (mit standesamtlicher Trauung)
export default function FamiliePage() {
  return <WeddingPage withStandesamt />;
}
