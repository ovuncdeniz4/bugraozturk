"use client";

import Link from "next/link";
import { useState } from "react";
import { AppointmentLink } from "@/components/AppointmentLink";
import { LeafMark } from "@/components/Icons";
import { navItems, site } from "@/lib/site";
import { btnGhost, btnPrimary } from "@/lib/styles";

/** Sabit üst menü — randevu WhatsApp’a gider. */
export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-sand/80 bg-cream/90 backdrop-blur-md">
      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-sage focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        İçeriğe geç
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex min-h-11 items-center gap-3">
          <LeafMark className="h-10 w-10" />
          <span className="leading-tight">
            <span className="block font-serif text-base text-sage-dark">
              {site.shortName}
            </span>
            <span className="block text-xs text-muted">Aydın diyetisyen</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Ana menü">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={btnGhost}>
              {item.label}
            </Link>
          ))}
          <AppointmentLink className={`${btnPrimary} ml-2`}>
            Randevu Al
          </AppointmentLink>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-sand lg:hidden"
          aria-expanded={open}
          aria-controls="mobil-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menüyü aç</span>
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span className="block h-0.5 w-5 bg-sage-dark" />
            <span className="block h-0.5 w-5 bg-sage-dark" />
            <span className="block h-0.5 w-5 bg-sage-dark" />
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobil-menu"
          className="border-t border-sand px-4 py-3 lg:hidden"
          aria-label="Mobil menü"
        >
          <div className="flex flex-col gap-1 pb-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${btnGhost} justify-start`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <AppointmentLink className={`${btnPrimary} mt-2`}>
              Randevu Al
            </AppointmentLink>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
