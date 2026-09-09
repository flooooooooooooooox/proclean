import Link from "next/link";
import Particles from "./Particles";
import Photo from "./Photo";
import { siteConfig } from "@/lib/site-data";

const HIGHLIGHTS = [
  "Assuré et déclaré",
  "Réponse sous 24h",
  "Produits éco-responsables",
  "Devis gratuit",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-light via-navy to-navy">
      <Particles />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="animate-drift-a absolute -left-20 -top-10 h-80 w-80 rounded-full bg-brand/30 blur-[110px]" />
        <span className="animate-drift-b absolute -right-10 top-1/3 h-96 w-96 rounded-full bg-brand/20 blur-[130px]" />
        <span className="animate-drift-c absolute -bottom-16 left-1/3 h-72 w-72 rounded-full bg-white/[0.07] blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-hero-in">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/85 backdrop-blur">
            <span className="text-brand" aria-hidden="true">
              ★
            </span>
            {String(siteConfig.googleRating).replace(".", ",")}/5 sur Google · Caen &amp; Calvados
          </p>

          <h1 className="mt-5 font-heading text-3xl font-extrabold leading-[1.12] text-white sm:text-4xl md:text-5xl">
            Entreprise de nettoyage professionnel à Caen et dans tout le Calvados
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
            {siteConfig.name} assure l&apos;entretien de vos locaux professionnels avec rigueur et
            réactivité&nbsp;: bureaux, cabinets médicaux, commerces, restaurants, sites industriels
            et fins de chantier. Un service sur mesure, près de chez vous.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/demande-de-devis" className="btn btn-primary">
              Demander un devis gratuit
            </Link>
            <a href={siteConfig.phoneHref} className="btn btn-ghost">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" strokeLinejoin="round" />
              </svg>
              {siteConfig.phone}
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-1.5 text-[13px] text-white/70">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-brand" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-hero-in [animation-delay:150ms]">
          <Photo
            src={null}
            alt="Équipe PROCLEAN STJ en intervention dans des locaux professionnels à Caen"
            label="Visuel principal — équipe en intervention"
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority
            className="aspect-[4/3] w-full rounded-3xl ring-1 ring-white/20"
          />
        </div>
      </div>
    </section>
  );
}
