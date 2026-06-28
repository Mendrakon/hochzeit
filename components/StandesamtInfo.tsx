import FadeIn from "./FadeIn";
import FlowerDivider from "./FlowerDivider";

/**
 * Eigener Infoblock zur standesamtlichen Trauung – wird nur auf der
 * Familien-Variante (/familie) angezeigt, da nur die engsten Verwandten
 * dabei sind.
 */
export default function StandesamtInfo() {
  return (
    <section id="trauung" className="bg-warm-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <FadeIn>
          <p className="label text-xs text-olive">Im engsten Kreis</p>
          <h2 className="mt-5 font-display text-4xl italic text-dark sm:text-5xl">
            Standesamtliche Trauung
          </h2>
          <p className="mt-6 text-sm font-light leading-loose text-dark/70">
            Den offiziellen Teil feiern wir im kleinen Kreis mit unseren engsten
            Verwandten – wir freuen uns sehr, dass ihr dabei seid.
          </p>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="mt-12 border border-sand/70 bg-cream p-2">
            <div className="border border-sand/50 px-6 py-10 sm:px-12">
              <p className="font-display text-4xl italic text-olive">14:00 Uhr</p>

              <FlowerDivider className="mx-auto my-8 text-olive" color="#C9B99A" />

              {/* TODO: Name & Adresse des Standesamts eintragen, sobald bekannt */}
              <h3 className="font-display text-2xl italic text-dark">
                [Name des Standesamts]
              </h3>
              <p className="mt-3 text-sm font-light leading-loose text-dark/75">
                [Straße &amp; Hausnummer]
                <br />
                [PLZ Ort], Österreich
              </p>

              {/* TODO: Treffpunkt / Hinweis zur Uhrzeit anpassen */}
              <p className="mt-6 text-sm font-light leading-loose text-dark/60">
                Bitte seid spätestens um 13:45 Uhr vor Ort. Im Anschluss geht es
                gemeinsam weiter zum Sektempfang.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
