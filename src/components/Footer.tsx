import Link from "next/link";
import Logo from "./Logo";
import { services, siteConfig } from "@/lib/site-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-navy/65">
              Entreprise de nettoyage professionnel basée à {siteConfig.city}, au service des
              entreprises, collectivités et commerces de tout le Calvados depuis{" "}
              {siteConfig.foundingYear}.
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-navy">
              <span className="text-brand-dark" aria-hidden="true">
                ★★★★★
              </span>
              {String(siteConfig.googleRating).replace(".", ",")}/5
              {siteConfig.googleReviewCount ? (
                <span className="font-normal text-navy/55">
                  ({siteConfig.googleReviewCount} avis Google)
                </span>
              ) : null}
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-navy">
              Nos prestations
            </h3>
            <ul className="mt-4 space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="text-sm text-navy/65 transition-colors hover:text-brand-dark"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-navy">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-navy/65">
              <li>{siteConfig.serviceArea}</li>
              <li>
                <a href={siteConfig.phoneHref} className="font-semibold text-navy hover:text-brand-dark">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-dark">
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.hours.display}</li>
            </ul>
            <ul className="mt-5 space-y-2 text-sm">
              <li>
                <Link href="/realisations" className="text-navy/65 hover:text-brand-dark">
                  Nos réalisations
                </Link>
              </li>
              <li>
                <Link href="/entreprise-nettoyage-caen" className="text-navy/65 hover:text-brand-dark">
                  Entreprise de nettoyage à Caen
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-navy/65 hover:text-brand-dark">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/demande-de-devis" className="text-navy/65 hover:text-brand-dark">
                  Demander un devis
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-navy">
              Zone d&apos;intervention
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-navy/65">
              Tout le Calvados (14) : {siteConfig.areaServed.slice(0, 10).join(", ")} et
              l&apos;ensemble des communes du département.
            </p>
            <Link
              href="/zones-intervention"
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-dark hover:underline"
            >
              Voir toutes les communes
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-navy/10 pt-6 text-xs text-navy/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Tous droits réservés.
          </p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Liens légaux">
            <Link href="/mentions-legales" className="hover:text-navy">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="hover:text-navy">
              Politique de confidentialité
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
