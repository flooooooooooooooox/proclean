"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { services, siteConfig } from "@/lib/site-data";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/zones-intervention", label: "Zones d'intervention" },
  { href: "/a-propos", label: "À propos" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`animate-header-in sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-navy/10 bg-cream/90 shadow-sm backdrop-blur"
          : "border-transparent bg-cream/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" aria-label={`${siteConfig.name} — accueil`}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-navy/75 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-brand after:transition-all hover:text-navy hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-brand-dark"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" strokeLinejoin="round" />
            </svg>
            {siteConfig.phone}
          </a>
          <Link href="/contact" className="btn btn-primary btn-sm">
            Demander un devis
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy/15 text-navy lg:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-navy/10 bg-cream lg:hidden">
          <nav className="mx-auto max-w-6xl px-4 py-4 sm:px-6" aria-label="Navigation mobile">
            <ul className="space-y-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-navy hover:bg-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 px-3 text-[11px] font-semibold uppercase tracking-wide text-navy/40">
              Nos prestations
            </p>
            <ul className="mt-1 grid grid-cols-2 gap-1">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-[13px] text-navy/75 hover:bg-white hover:text-navy"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-col gap-2">
              <a href={siteConfig.phoneHref} className="btn btn-outline w-full">
                {siteConfig.phone}
              </a>
              <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-primary w-full">
                Demander un devis gratuit
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
