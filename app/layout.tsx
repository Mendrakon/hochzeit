import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

// Display-Schrift für Überschriften & Namen (elegant, mit Italic-Varianten)
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// Body-Schrift für Fließtext, Labels & Navigation
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://andi-und-lili.at"),
  title: "Andi & Lili · 11. September 2026",
  description:
    "Die Hochzeit von Andi & Lili am 11. September 2026. Alle Infos zu Ablauf, Location und Anreise.",
  // Private Hochzeitsseite – nicht in Suchmaschinen indexieren
  robots: { index: false, follow: false },
  // Vorschau beim Teilen (WhatsApp, Signal, iMessage …).
  // Statisches Bild aus public/og.png – zuverlässig ausgeliefert.
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Andi & Lili",
    url: "https://andi-und-lili.at",
    title: "Andi & Lili · 11. September 2026",
    description:
      "Die Hochzeit von Andi & Lili am 11. September 2026. Alle Infos zu Ablauf, Location und Anreise.",
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
    description:
      "Die Hochzeit von Andi & Lili am 11. September 2026. Alle Infos zu Ablauf, Location und Anreise.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-forest font-body">
        {children}
      </body>
    </html>
  );
}
