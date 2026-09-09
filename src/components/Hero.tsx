import Link from "next/link";
import Photo from "./Photo";
import { siteConfig } from "@/lib/site-data";

const STATS = [
  { value: "2023", label: "Création de l'entreprise" },
  { value: "Calvados", label: "Zone d'intervention" },
  { value: "24h", label: "Délai de réponse" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 85% 15%, rgba(244,81,30,0.07), transparent 45%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-hero-in">
          <p className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3.5 py-1.5 text-[13px] font-semibold text-brand-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
            Entreprise de nettoyage dans le Calvados
          </p>

          <h1 className="mt-6 font-heading text-[2.15rem] font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl">
            Entreprise
            <br />
            de nettoyage
            <br />
            professionnel
            <br />à <span className="text-brand">Caen</span> et dans
            <br />
            tout le Calvados
          </h1>

          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-navy/60">
            {siteConfig.name} assure la propreté de vos locaux professionnels avec rigueur et
            réactivité dans tout le département du Calvados. Bureaux, cabinets médicaux, commerces
            — un service sur mesure, près de chez vous.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/demande-de-devis" className="btn btn-primary">
              Demander un devis gratuit
              <span aria-hidden="true">→</span>
            </Link>
            <a href={siteConfig.phoneHref} className="btn btn-outline">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" strokeLinejoin="round" />
              </svg>
              Nous appeler
            </a>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="font-heading text-xl font-extrabold text-brand sm:text-2xl">
                  {stat.value}
                </dt>
                <dd className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-navy/45">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-hero-in relative [animation-delay:150ms]">
          <Photo
            src={null}
            alt={`${siteConfig.name}, entreprise de nettoyage professionnel à Caen`}
            label="Visuel principal (photo de Caen ou équipe en intervention)"
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority
            className="aspect-[4/3] w-full rounded-2xl shadow-lg ring-1 ring-navy/8"
          />
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg ring-1 ring-navy/8 sm:left-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand" aria-hidden="true">
              ★
            </span>
            <span className="leading-tight">
              <span className="block font-heading text-sm font-extrabold text-navy">
                {String(siteConfig.googleRating).replace(".", ",")}/5 de satisfaction
              </span>
              <span className="block text-[11px] text-navy/50">
                Avis clients Google
                {siteConfig.googleReviewCount ? ` (${siteConfig.googleReviewCount})` : ""}
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
