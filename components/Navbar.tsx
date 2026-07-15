"use client";

import { useEffect, useState } from "react";

type NavbarProps = {
  /** Zeigt zusätzlich den Trauungs-Link (nur Familien-Variante /familie) */
  withStandesamt?: boolean;
};

export default function Navbar({ withStandesamt = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#start", label: "Start" },
    ...(withStandesamt ? [{ href: "#trauung", label: "Trauung" }] : []),
    { href: "#location", label: "Location" },
    { href: "#ablauf", label: "Ablauf" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-forest/95 py-3 shadow-lg backdrop-blur-sm"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a
          href="#start"
          className="font-display text-2xl italic text-warm-white"
          aria-label="Andi & Lili – zum Start"
        >
          A&nbsp;&amp;&nbsp;L
        </a>

        {/* Desktop-Navigation */}
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="label text-xs text-warm-white/80 transition-colors hover:text-rose"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Burger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          aria-label="Menü öffnen"
          aria-expanded={open}
        >
          <span
            className={`h-px w-6 bg-warm-white transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-warm-white transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-warm-white transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile-Dropdown */}
      <div
        className={`overflow-hidden bg-forest/95 backdrop-blur-sm transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="label text-sm text-warm-white/80 transition-colors hover:text-rose"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
