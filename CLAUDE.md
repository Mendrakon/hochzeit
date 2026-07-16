# Hochzeitswebseite – Andi & Lili

## Projektübersicht

Hochzeitswebseite für **Andreas & Lili**, Hochzeit am **11. September 2026**.
Gebaut mit Next.js + Tailwind CSS, deployed auf Vercel.

Die Seite ist eine reine **Informationsseite** – alle Gäste haben bereits über
WhatsApp zugesagt, daher gibt es **kein RSVP-Formular**.

### Zwei Einladungsvarianten (zwei Routen)

Beim Standesamt sind nur die engsten Freunde und Verwandten dabei. Deshalb
gibt es zwei Versionen derselben Seite, die sich einen gemeinsamen Aufbau
teilen (`components/WeddingPage.tsx`):

| Route         | Für wen                       | Besonderheit                                              |
|---------------|-------------------------------|-----------------------------------------------------------|
| `/`           | Alle Gäste                    | Ablauf ab Sektempfang, **ohne** Standesamt                |
| `/standesamt` | Engste Freunde & Verwandte    | Zusätzlich Standesamt im Ablauf **und** eigener Infoblock |

Der `/standesamt`-Link wird **nirgends öffentlich verlinkt** (und ist auf
`noindex` gesetzt) – er wird gezielt an die betreffenden Gäste verschickt.

---

## Tech Stack

- **Framework:** Next.js 16 (App Router, `output: 'export'` für statisches Hosting)
- **Styling:** Tailwind CSS v4 (CSS-basierte Konfiguration via `@theme` in `globals.css` – **keine** `tailwind.config.js`)
- **Fonts:** Google Fonts – `Cormorant Garamond` (Display/Script-Feeling, für Überschriften) + `Jost` (Body, Caps-Labels)
- **Sprache:** Deutsch
- **Hosting:** Vercel (statischer Export)
- **RSVP:** entfällt (Zusagen erfolgen über WhatsApp)

---

## Design-Richtlinien

### Farbpalette

Salbeigrün-dominiert mit Creme/Blush und **Bordeaux nur als sparsamer Akzent**
(nach Moodboard). Definiert per `@theme` in `app/globals.css`.

| Token (`--color-…`) | Hex       | Verwendung                                   |
|---------------------|-----------|----------------------------------------------|
| `wine`              | `#6E2A38` | Bordeaux – **nur sparsame Akzente** (Blüten-Mittelpunkt im Divider) |
| `sage`              | `#8B9A84` | Salbeigrün (Gradients, Deko)                 |
| `sage-light`        | `#A7B4A2` | Helles Salbei – dünne Linien, Rahmen, Divider |
| `rose`              | `#D6B2A6` | Altrosa/Blush – Akzente auf dunklen Sektionen, Monogramm, Hover |
| `cream`             | `#F3EAE2` | Heller Hintergrund                           |
| `sage-deep`         | `#556B4E` | Tiefes Salbei – Akzenttext, Labels, Buttons (guter Kontrast) |
| `forest`            | `#36433A` | Dunkle Sektionen (Navbar, Countdown, Footer) **und** Fließ-/Überschriftentext |
| `warm-white`        | `#FAF6F1` | Hellster Ton – Karten, Text auf Dunkel       |

### Typografie

- **Display (Überschriften, Namen):** `Cormorant Garamond` – Italic, 600–700 weight, großzügiges Letter-Spacing
- **Labels / Nav / Caps:** `Jost` – 300–400 weight, `letter-spacing: 0.2em`, UPPERCASE
- **Fließtext:** `Jost` – 300 weight, angenehme Zeilenhöhe (1.8)

### Stil

- Salbeigrün, Creme & Blush, organisch, elegant – kein greller Kontrast; Bordeaux sehr sparsam
- Scroll-triggered Fade-in Animationen (subtle, `IntersectionObserver`)
- Mobile-first, vollständig responsiv
- Sparsame Dekoelemente: dünne Linien, kleine Blüten-SVGs als Divider
- Kein Overdesign – Eleganz durch Whitespace

---

## Seitenstruktur

### 1. Hero Section
- Vollbild-Hintergrundbild (aktuell: Placeholder-Gradient in Salbeigrün → dunkles Salbei)
- Overlay-Text:
  ```
  DIE HOCHZEIT VON
  Andi & Lili
  11. September 2026 · [Ort]
  ```
- Sticky Navbar oben: `START | LOCATION | ABLAUF | INFOS`
  (Standesamt-Variante zusätzlich: `TRAUUNG`)
- Scroll-Down-Arrow (animiert)

### 2. Willkommen / "You are invited"
- Heller Cremehintergrund
- Kursiver Einladungstext (auf Deutsch, persönlich und warm)
- Kleine Blüten-Dekoration rechts (SVG oder CSS)
- Unterschrift: *Andi & Lili*

### 3. Countdown
- Dunkler Hintergrund (`forest`)
- Überschrift: *„Noch"* oder *„Unser großer Tag in..."*
- Live-Countdown in Tagen / Stunden / Minuten / Sekunden
- Zieldatum: `2026-09-11T00:00:00`

### 4. Location / Venue
- Zweispaltig: links Fotos (Polaroid-Stil mit leichter Rotation), rechts Google Maps Embed
- Name der Location, Adresse
- Hinweis zu Parken / Anreise
- **Placeholder:** Ort noch nicht bekannt – Platzhalter-Text + statisches Map-Embed (Wien/Wiener Neustadt Bereich als Default)

### 5. Ablauf / Itinerary
- Stil: Karte mit Spitzenrand-Optik (CSS border-image oder SVG-Frame)
- Zeitplan-Tabelle:
  ```
  14:00  Standesamtliche Trauung   ← nur Standesamt-Variante (/standesamt)
  15:00  Sektempfang
  16:30  Fotos
  18:00  Abendessen
  20:00  Tortenanschnitt
  21:00  Party
  ```
- Der `14:00`-Eintrag wird via `withStandesamt`-Prop nur auf `/standesamt` gezeigt
- Zeiten und Programmpunkte sind Platzhalter → einfach anpassbar (in `components/Itinerary.tsx`)

### 5b. Standesamt-Info (nur `/standesamt`)
- Eigene Sektion `components/StandesamtInfo.tsx`, wird nur in der Standesamt-Variante gerendert
- Eingebettet zwischen Countdown und Location
- Inhalt: Uhrzeit (14:00), Name & Adresse des Standesamts (Platzhalter), Treffpunkt-Hinweis
- Kein Dresscode (gibt es nicht)

### 6. Weitere Infos
- Einzelne, zentrierte Karte:
  - **Unterkunft:** Hinweis, sich bei Bedarf rechtzeitig bei Andi & Lili zu melden (keine Hotel-Empfehlungen auf der Seite)
- **Kein Dresscode** (gibt es nicht), **kein RSVP** (Zusagen über WhatsApp) und **kein Transport-Block** (wurde entfernt)

### 8. Footer
- Kleines `A & L` Monogramm (CSS oder SVG)
- `© 2026 Andi & Lili`
- Keine Social-Media-Links

---

## Dateistruktur

```
/
├── app/
│   ├── layout.tsx          # Root layout, Google Fonts, Metadata
│   ├── page.tsx            # Route "/"        → <WeddingPage />
│   ├── standesamt/
│   │   └── page.tsx        # Route "/standesamt" → <WeddingPage withStandesamt />
│   └── globals.css         # Tailwind v4 @theme (Farben, Fonts) + Custom CSS
├── components/
│   ├── WeddingPage.tsx     # Gemeinsamer Seitenaufbau beider Varianten
│   ├── Navbar.tsx          # Prop: withStandesamt (zeigt Trauungs-Link)
│   ├── Hero.tsx
│   ├── Welcome.tsx
│   ├── Countdown.tsx
│   ├── StandesamtInfo.tsx  # Nur Standesamt-Variante
│   ├── Venue.tsx
│   ├── Itinerary.tsx       # Prop: withStandesamt (zeigt 14:00-Eintrag)
│   ├── InfoCards.tsx
│   ├── FadeIn.tsx          # Scroll-Fade-in via IntersectionObserver
│   ├── FlowerDivider.tsx   # Dekorativer Blüten-Divider (inline SVG)
│   └── Footer.tsx
├── public/
│   └── flower-divider.svg      # Dekorative Blüte als Divider (statische Datei)
├── next.config.ts              # output: 'export', images.unoptimized
└── CLAUDE.md                   # Diese Datei
```

> Hinweis: Tailwind v4 nutzt **keine** `tailwind.config.js` mehr – Farben und
> Fonts sind per `@theme` in `app/globals.css` definiert.

---

## Wichtige Hinweise für Claude Code

- **Keine Datenbank**, kein API-Backend, **kein RSVP** – alles statisch
- **Zwei Routen** teilen sich `components/WeddingPage.tsx`; Unterschiede laufen über das `withStandesamt`-Prop
- **Hero-Bild** ist aktuell ein CSS-Gradient-Placeholder → später durch echtes Foto ersetzen (`public/hero.jpg`)
- **Location** (Venue-Name, Adresse, Maps-Link) ist Platzhalter → wird nachgetragen
- **Standesamt** (Name, Adresse, Treffpunkt in `StandesamtInfo.tsx`) ist Platzhalter → wird nachgetragen
- **Zeiten im Ablauf** sind Platzhalter → werden nachgetragen
- Alle Platzhalter sind mit `{/* TODO: ... */}` Kommentaren im Code markiert
- Scroll-Animationen: `IntersectionObserver` in einem `useEffect` Hook, kein externes Animations-Package nötig
- `next/image` für alle Bilder verwenden
- Tailwind v4: Custom Colors/Fonts per `@theme` in `globals.css` definieren (nicht Inline-Hex-Werte verwenden)
- Responsive: Mobile-first, Breakpoints `sm` und `lg`

---

## Was der Nutzer noch liefern muss

| Was                          | Wann          |
|------------------------------|---------------|
| Hero-Foto                    | Später        |
| Venue-Name & Adresse         | Später        |
| Standesamt-Name & Adresse    | Später        |
| Genauer Ablauf / Zeiten      | Später        |
| Domain (z.B. andi-und-lili.at) | Bei Vercel-Setup |
