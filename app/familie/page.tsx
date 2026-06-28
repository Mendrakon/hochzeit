import type { Metadata } from "next";
import WeddingPage from "@/components/WeddingPage";

export const metadata: Metadata = {
  title: "Andi & Lili · 11. September 2026",
  description:
    "Die Hochzeit von Andi & Lili am 11. September 2026 – Infos für die engsten Verwandten inkl. standesamtlicher Trauung.",
  // Diese Variante soll nicht in Suchmaschinen auftauchen
  robots: { index: false, follow: false },
};

// Variante für die engsten Verwandten (mit standesamtlicher Trauung)
export default function FamiliePage() {
  return <WeddingPage withStandesamt />;
}
