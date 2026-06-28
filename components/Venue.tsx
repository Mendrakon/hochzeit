import FadeIn from "./FadeIn";

export default function Venue() {
  return (
    <section id="location" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="text-center">
          <p className="label text-xs text-olive">Location</p>
          <h2 className="mt-5 font-display text-4xl italic text-dark sm:text-5xl">
            Wo wir feiern
          </h2>
        </FadeIn>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Linke Spalte: Fotos im Polaroid-Stil */}
          <FadeIn className="flex flex-wrap items-center justify-center gap-6">
            {/* TODO: echte Location-Fotos einsetzen (public/venue-1.jpg ...) */}
            {[-4, 5].map((rotation, i) => (
              <div
                key={i}
                className="bg-warm-white p-3 pb-12 shadow-xl"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                <div
                  className="flex h-48 w-44 items-center justify-center sm:h-56 sm:w-52"
                  style={{
                    background:
                      "linear-gradient(135deg, #C9B99A 0%, #6B6B3A 100%)",
                  }}
                >
                  <span className="label text-[0.6rem] text-warm-white/80">
                    Foto folgt
                  </span>
                </div>
              </div>
            ))}
          </FadeIn>

          {/* Rechte Spalte: Infos + Karte */}
          <FadeIn delay={150}>
            {/* TODO: Venue-Name & Adresse eintragen, sobald bekannt */}
            <h3 className="font-display text-3xl italic text-dark">
              [Name der Location]
            </h3>
            <p className="mt-4 text-base font-light leading-loose text-dark/75">
              [Straße &amp; Hausnummer]
              <br />
              [PLZ Ort], Österreich
            </p>
            <p className="mt-6 text-sm font-light leading-loose text-dark/60">
              {/* TODO: Hinweise zu Parken / Anreise ergänzen */}
              Parkplätze sind direkt vor Ort vorhanden. Details zur Anreise
              folgen rechtzeitig vor dem Fest.
            </p>

            {/* Statisches Map-Embed (Default: Wiener Neustadt) – später Adresse anpassen */}
            <div className="mt-8 overflow-hidden border border-sand/60 shadow-md">
              <iframe
                title="Karte zur Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=16.20%2C47.79%2C16.30%2C47.84&layer=mapnik&marker=47.8149%2C16.2407"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-3 text-center text-[0.7rem] font-light text-dark/40">
              Vorläufige Kartenansicht (Raum Wiener Neustadt)
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
