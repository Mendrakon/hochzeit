import FadeIn from "./FadeIn";
import FlowerDivider from "./FlowerDivider";

// Der komplette Ablauf des Hochzeitstags (11.09.2026), 10:30–16:00 Uhr.
// Die Vormittags-Punkte (Standesamt, Trauung, Familienfotos) sind nur für die
// engsten Verwandten → familyOnly. Ab 14:30 Uhr sind ALLE Gäste dabei.
// Interne Planungsnotizen (Telefonnummern, Fahrhinweise) bewusst weggelassen.
const schedule = [
  {
    time: "10:30",
    title: "Ankunft im Standesamt Siegendorf",
    familyOnly: true,
  },
  { time: "11:00", title: "Beginn der Trauung", familyOnly: true },
  { time: "11:30", title: "Gratulationen", familyOnly: true },
  {
    time: "12:00",
    title: "Mittagessen für die Gäste",
    note: "Dorfwirt Pachinger, St. Georgen · währenddessen machen wir unsere Hochzeitsfotos",
    familyOnly: true,
  },
  { time: "13:30", title: "Familienfotos im Schlosspark", familyOnly: true },
  { time: "14:30", title: "Ansprache im Königreichssaal Eisenstadt" },
  { time: "15:00", title: "Kaffee & Kuchen im Königreichssaal Eisenstadt" },
  { time: "16:00", title: "Neufeldersee Restaurant" },
];

type ItineraryProps = {
  /** Zeigt zusätzlich den Vormittag (Standesamt/Trauung) – nur /familie */
  withStandesamt?: boolean;
};

export default function Itinerary({ withStandesamt = false }: ItineraryProps) {
  const items = withStandesamt
    ? schedule
    : schedule.filter((item) => !item.familyOnly);

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
                    className="flex items-baseline gap-4 border-b border-sage-light/30 pb-5 last:border-0 last:pb-0 sm:gap-5"
                  >
                    <span className="w-16 shrink-0 font-display text-2xl italic text-sage-deep sm:w-20 sm:text-3xl">
                      {item.time}
                    </span>
                    <span>
                      <span className="label text-xs text-forest/80 sm:text-sm">
                        {item.title}
                      </span>
                      {item.note && (
                        <span className="mt-1 block text-xs font-light leading-relaxed text-forest/55">
                          {item.note}
                        </span>
                      )}
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
