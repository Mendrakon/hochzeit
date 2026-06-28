import FadeIn from "./FadeIn";

export default function InfoCards() {
  return (
    <section id="infos" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="text-center">
          <p className="label text-xs text-olive">Gut zu wissen</p>
          <h2 className="mt-5 font-display text-4xl italic text-dark sm:text-5xl">
            Weitere Infos
          </h2>
        </FadeIn>

        <div className="mx-auto mt-16 grid max-w-3xl gap-10 sm:grid-cols-2">
          {/* Unterkunft */}
          <FadeIn className="border border-sand/50 bg-warm-white p-8 text-center">
            <h3 className="font-display text-2xl italic text-dark">Unterkunft</h3>
            <p className="mt-4 text-sm font-light leading-loose text-dark/75">
              {/* TODO: Hotelempfehlungen in der Nähe ergänzen */}
              Für alle, die übernachten möchten, folgen in Kürze Empfehlungen für
              Hotels und Pensionen in der Umgebung.
            </p>
            <p className="label mt-6 text-[0.65rem] text-olive">
              Empfehlungen folgen
            </p>
          </FadeIn>

          {/* Transport */}
          <FadeIn
            delay={150}
            className="border border-sand/50 bg-warm-white p-8 text-center"
          >
            <h3 className="font-display text-2xl italic text-dark">Transport</h3>
            <p className="mt-4 text-sm font-light leading-loose text-dark/75">
              {/* TODO: Hinweis zu Shuttle / Parken ergänzen */}
              Vor Ort stehen ausreichend Parkplätze zur Verfügung. Informationen
              zu einem möglichen Shuttle-Service folgen.
            </p>
            <p className="label mt-6 text-[0.65rem] text-olive">Details folgen</p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
