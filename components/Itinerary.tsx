import FadeIn from "./FadeIn";
import FlowerDivider from "./FlowerDivider";

// TODO: Zeiten und Programmpunkte sind Platzhalter → einfach hier anpassen

// Nur für die engsten Verwandten (Familien-Variante /familie)
const standesamt = { time: "14:00", title: "Standesamtliche Trauung" };

// Programm für alle Gäste
const schedule = [
  { time: "15:00", title: "Sektempfang" },
  { time: "16:30", title: "Fotos" },
  { time: "18:00", title: "Abendessen" },
  { time: "20:00", title: "Tortenanschnitt" },
  { time: "21:00", title: "Party" },
];

type ItineraryProps = {
  /** Fügt die standesamtliche Trauung am Anfang hinzu (nur /familie) */
  withStandesamt?: boolean;
};

export default function Itinerary({ withStandesamt = false }: ItineraryProps) {
  const items = withStandesamt ? [standesamt, ...schedule] : schedule;

  return (
    <section id="ablauf" className="bg-warm-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <FadeIn className="text-center">
          <p className="label text-xs text-sage-deep">Ablauf</p>
          <h2 className="mt-5 font-display text-4xl italic text-forest sm:text-5xl">
            Der Tag im Überblick
          </h2>
        </FadeIn>

        <FadeIn delay={150}>
          {/* Karte mit Spitzenrand-Optik (doppelter Rahmen + Blüten-Divider) */}
          <div className="mt-14 border border-sage-light/70 bg-cream p-2">
            <div className="border border-sage-light/50 px-6 py-12 sm:px-12">
              <FlowerDivider className="mx-auto text-sage-deep" />

              <ul className="mt-10 space-y-7">
                {items.map((item) => (
                  <li
                    key={item.time}
                    className="flex items-baseline gap-5 border-b border-sage-light/30 pb-5 last:border-0 last:pb-0"
                  >
                    <span className="font-display text-2xl italic text-sage-deep sm:text-3xl">
                      {item.time}
                    </span>
                    <span className="label text-xs text-forest/80 sm:text-sm">
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>

              <FlowerDivider className="mx-auto mt-10 text-sage-deep" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
