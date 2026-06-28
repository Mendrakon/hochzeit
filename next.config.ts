import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Statischer Export für Hosting auf Vercel (kein Backend nötig)
  output: "export",
  images: {
    // next/image braucht unoptimized beim statischen Export
    unoptimized: true,
  },
};

export default nextConfig;
