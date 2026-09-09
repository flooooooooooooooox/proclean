import Link from "next/link";
import ZoneMap from "./ZoneMap";
import { siteConfig } from "@/lib/site-data";

export default function ZoneSection() {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
      <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-navy/8">
        <ZoneMap />
      </div>
      <div>
        <p className="text-sm leading-relaxed text-navy/70">
          {siteConfig.name} intervient dans tout le département du Calvados (14), dans un rayon
          d&apos;environ {siteConfig.serviceRadiusKm} km autour de {siteConfig.city}. De Caen à
          Bayeux, de Lisieux à Honfleur&nbsp;: si votre établissement est dans le Calvados, nous
          pouvons intervenir.
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {siteConfig.areaServed.slice(0, 16).map((city) => (
            <li
              key={city}
              className="rounded-full bg-white px-3 py-1.5 text-[13px] text-navy/70 ring-1 ring-navy/8"
            >
              {city}
            </li>
          ))}
        </ul>
        <Link
          href="/zones-intervention"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark hover:underline"
        >
          Voir toutes les communes desservies
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
