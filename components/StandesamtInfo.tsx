import FadeIn from "./FadeIn";
import FlowerDivider from "./FlowerDivider";

/**
 * Kompakter Infoblock zur standesamtlichen Trauung – wird nur auf der
 * Standesamt-Variante (/standesamt) angezeigt, da nur die engsten Freunde
 * und Verwandten dabei sind. Der vollständige Ablauf des Tages steht im
 * Ablauf-Bereich (siehe <Itinerary />, Vormittags-Punkte nur auf /standesamt).
 */
export default function StandesamtInfo() {
  return (
    <section id="trauung" className="bg-warm-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <FadeIn>
          <p className="label text-xs text-sage-deep">Im engsten Kreis</p>
          <h2 className="mt-5 font-display text-4xl italic text-forest sm:text-5xl">
            Standesamtliche Trauung
          </h2>
          <p className="mt-6 text-sm font-light leading-loose text-forest/70">
            Den offiziellen Teil feiern wir am Vormittag im kleinen Kreis mit
            unseren engsten Freunden und Verwandten – wir freuen uns sehr, dass
            ihr dabei seid. Ab 14:30 Uhr stoßen dann alle Gäste dazu.
          </p>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="mt-12 border border-sage-light/70 bg-cream p-2">
            <div className="border border-sage-light/50 px-6 py-10 sm:px-12">
              <p className="font-display text-4xl italic text-sage-deep">
                11:00 Uhr
              </p>

              <FlowerDivider className="mx-auto my-8 text-sage-deep" />

              {/* TODO: Straße & Hausnummer des Standesamts Siegendorf ergänzen */}
              <h3 className="font-display text-2xl italic text-forest">
                Standesamt Siegendorf
              </h3>
              <p className="mt-3 text-sm font-light leading-loose text-forest/75">
                7011 Siegendorf, Österreich
              </p>

              <p className="mt-6 text-sm font-light leading-loose text-forest/60">
                Bitte seid bis <strong className="font-normal">10:45 Uhr</strong>{" "}
                vor Ort, damit alle vor der Braut Platz genommen haben. Den
                genauen Ablauf des Tages findet ihr weiter unten.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
