import FadeIn from "./FadeIn";
import FlowerDivider from "./FlowerDivider";

export default function Welcome() {
  return (
    <section id="willkommen" className="relative bg-cream py-24 sm:py-32">
      {/* Dezente Blüten-Dekoration oben rechts */}
      <div
        className="pointer-events-none absolute right-6 top-12 text-olive/30 sm:right-16"
        aria-hidden="true"
      >
        <svg
          width="90"
          height="90"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
        >
          <g>
            <ellipse cx="50" cy="28" rx="7" ry="18" />
            <ellipse cx="50" cy="72" rx="7" ry="18" />
            <ellipse cx="28" cy="50" rx="18" ry="7" />
            <ellipse cx="72" cy="50" rx="18" ry="7" />
            <ellipse
              cx="50"
              cy="50"
              rx="7"
              ry="18"
              transform="rotate(45 50 50)"
            />
            <ellipse
              cx="50"
              cy="50"
              rx="7"
              ry="18"
              transform="rotate(-45 50 50)"
            />
            <circle cx="50" cy="50" r="4" />
          </g>
        </svg>
      </div>

      <div className="mx-auto max-w-2xl px-6 text-center">
        <FadeIn>
          <p className="label text-xs text-olive">You are invited</p>
          <h2 className="mt-5 font-display text-4xl italic text-dark sm:text-5xl">
            Wir sagen Ja
          </h2>
        </FadeIn>

        <FadeIn delay={150}>
          <p className="mt-8 font-display text-xl italic leading-relaxed text-dark/80 sm:text-2xl">
            Liebe Familie, liebe Freunde,
          </p>
          <p className="mt-6 text-base font-light leading-loose text-dark/75 sm:text-lg">
            nach all den gemeinsamen Jahren möchten wir den schönsten Tag unseres
            Lebens mit den Menschen feiern, die uns am wichtigsten sind – mit
            euch. Wir freuen uns von Herzen, euch an unserem großen Tag dabei zu
            haben und mit euch zu lachen, zu tanzen und anzustoßen.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="mt-10 font-display text-3xl italic text-olive sm:text-4xl">
            Andi &amp; Lili
          </p>
          <FlowerDivider
            className="mx-auto mt-10 text-olive"
            color="#C9B99A"
          />
        </FadeIn>
      </div>
    </section>
  );
}
