import Link from "next/link";
import ZoneExplorer from "./ZoneExplorer";
import { siteConfig } from "@/lib/site-data";

export default function ZoneSection() {
  return (
    <div>
      <ZoneExplorer />
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-navy/8 pt-6">
        <p className="max-w-2xl text-[13.5px] leading-relaxed text-navy/55">
          {siteConfig.name} intervient dans tout le département du Calvados (14), dans un rayon
          d&apos;environ {siteConfig.serviceRadiusKm} km autour de {siteConfig.city}. Votre commune
          n&apos;apparaît pas&nbsp;? Appelez-nous, elle est probablement couverte.
        </p>
        <Link
          href="/zones-intervention"
          className="text-sm font-semibold text-brand-dark hover:underline"
        >
          Voir toutes les communes desservies →
        </Link>
      </div>
    </div>
  );
}
