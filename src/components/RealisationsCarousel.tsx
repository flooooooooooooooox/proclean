"use client";

import Link from "next/link";
import { useRef } from "react";
import Photo from "./Photo";
import type { Realisation } from "@/lib/site-data";

export default function RealisationsCarousel({ items }: { items: Realisation[] }) {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <div className="relative">
      <ul
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2"
      >
        {items.map((item) => (
          <li
            key={item.slug}
            className="w-[85%] shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
          >
            <Link
              href={`/realisations/${item.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-navy/8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-brand/30"
            >
              <Photo
                src={item.image}
                alt={`${item.title} à ${item.city}`}
                label={`${item.title} — ${item.city}`}
                className="aspect-[4/3] w-full"
              />
              <div className="flex flex-1 flex-col p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-brand px-2.5 py-0.5 text-[11px] font-semibold text-white">
                    {item.category}
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-wide text-navy/45">
                    {item.city}
                  </span>
                </div>
                <h3 className="mt-2.5 font-heading text-[15px] font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-navy/60">
                  {item.summary}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => scrollBy(-1)}
        aria-label="Réalisations précédentes"
        className="absolute -left-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-md ring-1 ring-navy/10 transition-colors hover:text-brand lg:flex"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => scrollBy(1)}
        aria-label="Réalisations suivantes"
        className="absolute -right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-md ring-1 ring-navy/10 transition-colors hover:text-brand lg:flex"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}
