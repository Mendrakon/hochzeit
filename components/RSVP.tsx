"use client";

import { useState, type FormEvent } from "react";
import FadeIn from "./FadeIn";

// TODO: Durch echten Formspree-Endpoint ersetzen (https://formspree.io/f/XXXXXXXX)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/XXXXXXXX";

type Status = "idle" | "submitting" | "success" | "error";

export default function RSVP() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full border border-warm-white/30 bg-warm-white/10 px-4 py-3 text-warm-white placeholder:text-warm-white/40 focus:border-sand focus:outline-none transition-colors";

  return (
    <section
      id="rsvp"
      className="py-24 sm:py-32"
      // Olivgrün abgedunkelt
      style={{ backgroundColor: "#4a4a2a" }}
    >
      <div className="mx-auto max-w-xl px-6 text-warm-white">
        <FadeIn className="text-center">
          <p className="label text-xs text-sand">RSVP</p>
          <h2 className="mt-5 font-display text-4xl italic sm:text-5xl">
            Seid ihr dabei?
          </h2>
          <p className="mt-6 text-sm font-light leading-loose text-warm-white/80">
            Wir würden uns sehr freuen, mit euch zu feiern. Bitte gebt uns bis
            zum <span className="text-sand">31. Juli 2026</span> Bescheid.
          </p>
        </FadeIn>

        {status === "success" ? (
          <FadeIn className="mt-12 border border-sand/50 p-10 text-center">
            <p className="font-display text-3xl italic text-sand">Danke!</p>
            <p className="mt-4 text-sm font-light text-warm-white/80">
              Eure Anmeldung ist bei uns angekommen. Wir freuen uns auf euch!
            </p>
          </FadeIn>
        ) : (
          <FadeIn delay={150}>
            <form onSubmit={handleSubmit} className="mt-12 space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="label text-xs text-sand">
                  Name <span aria-hidden="true">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Vor- und Nachname"
                  className={`mt-2 ${inputClass}`}
                />
              </div>

              {/* Anzahl Personen */}
              <div>
                <label htmlFor="personen" className="label text-xs text-sand">
                  Anzahl Personen
                </label>
                <select
                  id="personen"
                  name="anzahl_personen"
                  defaultValue="1"
                  className={`mt-2 ${inputClass}`}
                >
                  <option value="1" className="text-dark">
                    1 Person
                  </option>
                  <option value="2" className="text-dark">
                    2 Personen
                  </option>
                </select>
              </div>

              {/* Anwesenheit */}
              <fieldset>
                <legend className="label text-xs text-sand">Anwesenheit</legend>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:gap-8">
                  <label className="flex cursor-pointer items-center gap-3 text-sm font-light">
                    <input
                      type="radio"
                      name="anwesenheit"
                      value="Ich komme"
                      defaultChecked
                      className="accent-sand"
                    />
                    Ich komme
                  </label>
                  <label className="flex cursor-pointer items-center gap-3 text-sm font-light">
                    <input
                      type="radio"
                      name="anwesenheit"
                      value="Ich kann leider nicht"
                      className="accent-sand"
                    />
                    Ich kann leider nicht
                  </label>
                </div>
              </fieldset>

              {/* Essenswünsche / Allergien */}
              <div>
                <label htmlFor="essen" className="label text-xs text-sand">
                  Essenswünsche / Allergien
                </label>
                <textarea
                  id="essen"
                  name="essenswuensche"
                  rows={2}
                  placeholder="z.B. vegetarisch, Nussallergie …"
                  className={`mt-2 ${inputClass}`}
                />
              </div>

              {/* Anmerkungen */}
              <div>
                <label htmlFor="anmerkungen" className="label text-xs text-sand">
                  Anmerkungen
                </label>
                <textarea
                  id="anmerkungen"
                  name="anmerkungen"
                  rows={2}
                  placeholder="Was wir sonst noch wissen sollten"
                  className={`mt-2 ${inputClass}`}
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-sand">
                  Da ist leider etwas schiefgelaufen. Bitte versucht es erneut
                  oder meldet euch direkt bei uns.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="label w-full border border-sand bg-sand px-6 py-4 text-xs text-dark transition-colors hover:bg-transparent hover:text-sand disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting"
                  ? "Wird gesendet …"
                  : "Anmeldung absenden"}
              </button>
            </form>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
