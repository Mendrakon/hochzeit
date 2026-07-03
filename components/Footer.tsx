export default function Footer() {
  return (
    <footer className="bg-forest py-16 text-center text-warm-white">
      {/* A & L Monogramm */}
      <div className="mx-auto flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-rose/40" />
        <span className="font-display text-3xl italic text-rose">
          A&nbsp;&amp;&nbsp;L
        </span>
        <span className="h-px w-10 bg-rose/40" />
      </div>

      <p className="label mt-6 text-[0.65rem] text-warm-white/50">
        © 2026 Andi &amp; Lili
      </p>
    </footer>
  );
}
