"use client";

import { useEffect, useState } from "react";

// Zieldatum der Hochzeit
const TARGET = new Date("2026-09-11T00:00:00").getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const units: { key: keyof TimeLeft; label: string }[] = [
  { key: "days", label: "Tage" },
  { key: "hours", label: "Stunden" },
  { key: "minutes", label: "Minuten" },
  { key: "seconds", label: "Sekunden" },
];

export default function Countdown() {
  // Start null, um Hydration-Mismatch (Server vs. Client) zu vermeiden
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    // Erste Berechnung im rAF-Callback (nicht synchron im Effect-Body),
    // um Hydration-Mismatch zu vermeiden und gleichzeitig sofort zu starten.
    const raf = requestAnimationFrame(() => setTime(getTimeLeft()));
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(id);
    };
  }, []);

  return (
    <section className="bg-forest py-24 text-warm-white sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="label text-xs text-rose">Unser großer Tag in</p>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4">
          {units.map(({ key, label }) => (
            <div key={key} className="flex flex-col items-center">
              <span
                className="font-display text-5xl tabular-nums text-warm-white sm:text-6xl lg:text-7xl"
                suppressHydrationWarning
              >
                {time ? String(time[key]).padStart(2, "0") : "––"}
              </span>
              <span className="label mt-3 text-[0.65rem] text-rose sm:text-xs">
                {label}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-12 font-display text-2xl italic text-warm-white/80 sm:text-3xl">
          11. September 2026
        </p>
      </div>
    </section>
  );
}
