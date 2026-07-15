export default function Hero() {
  return (
    <section
      id="start"
      className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden"
    >
      {/* TODO: Hero-Bild ersetzen – aktuell ein Salbeigrün-Gradient-Placeholder.
          Später echtes Foto unter public/hero.jpg ablegen und hier als <Image fill /> einbinden. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 120% at 50% 20%, #8B9A84 0%, #556B4E 45%, #36433A 100%)",
        }}
        aria-hidden="true"
      />
      {/* Abdunkelndes Overlay für bessere Textlesbarkeit */}
      <div className="absolute inset-0 bg-forest/30" aria-hidden="true" />

      <div className="relative z-10 px-6 text-center text-warm-white">
        <p className="label mb-6 text-xs text-rose sm:text-sm">
          Die Hochzeit von
        </p>
        <h1 className="font-display text-6xl italic leading-none sm:text-7xl lg:text-8xl">
          Andi <span className="not-italic text-rose">&amp;</span> Lili
        </h1>
        <div className="mx-auto mt-8 flex max-w-xs items-center justify-center gap-4">
          <span className="h-px flex-1 bg-warm-white/40" />
          <p className="label whitespace-nowrap text-xs sm:text-sm">
            11. September 2026
          </p>
          <span className="h-px flex-1 bg-warm-white/40" />
        </div>
        <p className="label mt-4 text-[0.7rem] text-warm-white/70 sm:text-xs">
          Neufelder See · Neufeld an der Leitha
        </p>
      </div>

      {/* Scroll-Down-Pfeil */}
      <a
        href="#willkommen"
        aria-label="Nach unten scrollen"
        className="animate-bounce-down absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-warm-white/80"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
