import FadeIn from "./FadeIn";

export default function Venue() {
  return (
    <section id="location" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="text-center">
          <p className="label text-xs text-sage-deep">Location</p>
          <h2 className="mt-5 font-display text-4xl italic text-forest sm:text-5xl">
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
                      "linear-gradient(135deg, #A7B4A2 0%, #556B4E 100%)",
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
            {/* TODO: genaue Straße/Hausnummer des Seerestaurants ergänzen, falls gewünscht */}
            <h3 className="font-display text-3xl italic text-forest">
              Neufelder See
            </h3>
            <p className="mt-4 text-base font-light leading-loose text-forest/75">
              2491 Neufeld an der Leitha
              <br />
              Burgenland, Österreich
            </p>
            <p className="mt-6 text-sm font-light leading-loose text-forest/60">
              Wir feiern ab 16:00 Uhr direkt am Neufelder See. Parkplätze sind
              vor Ort vorhanden – Details zur Anreise folgen rechtzeitig vor dem
              Fest.
            </p>

            {/* Karten-Embed – zentriert auf den Neufelder See (aus dem Maps-Link) */}
            <div className="mt-8 overflow-hidden border border-sage-light/60 shadow-md">
              <iframe
                title="Karte zum Neufelder See"
                src="https://www.openstreetmap.org/export/embed.html?bbox=16.3667%2C47.8634%2C16.4067%2C47.8834&layer=mapnik&marker=47.8734339%2C16.3867401"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-3 text-center text-[0.7rem] font-light text-forest/40">
              <a
                href="https://www.google.com/maps/place/Neufelder+See/@47.8734339,16.3867401,15z"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-sage-deep"
              >
                Neufelder See · in Google Maps öffnen
              </a>
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
