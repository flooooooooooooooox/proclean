import type { Metadata } from "next";
import Link from "next/link";
import { legalMentions, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site ${siteConfig.url} — ${legalMentions.companyName}.`,
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

function Row({ label, value }: { label: string; value: string }) {
  const missing = value.startsWith("[");
  return (
    <div className="border-b border-navy/8 py-3 last:border-0 sm:grid sm:grid-cols-[220px_1fr] sm:gap-6">
      <dt className="text-sm font-semibold text-navy">{label}</dt>
      <dd className={`mt-1 text-sm sm:mt-0 ${missing ? "text-red-600" : "text-navy/70"}`}>
        {value}
      </dd>
    </div>
  );
}

export default function LegalPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-heading text-3xl font-extrabold text-navy">Mentions légales</h1>
      <p className="mt-3 text-sm text-navy/60">
        Conformément à l&apos;article 6-III de la loi n° 2004-575 du 21 juin 2004 pour la confiance
        dans l&apos;économie numérique (LCEN).
      </p>

      <h2 className="mt-10 font-heading text-xl font-bold text-navy">Éditeur du site</h2>
      <dl className="mt-4">
        <Row label="Dénomination sociale" value={legalMentions.companyName} />
        <Row label="Forme juridique" value={legalMentions.legalForm} />
        <Row label="Capital social" value={legalMentions.capital} />
        <Row label="Siège social" value={legalMentions.headOffice} />
        <Row label="SIREN" value={legalMentions.siren} />
        <Row label="SIRET (siège)" value={legalMentions.siret} />
        <Row label="Immatriculation" value={legalMentions.rcs} />
        <Row label="N° TVA intracommunautaire" value={legalMentions.vatNumber} />
        <Row label="Téléphone" value={siteConfig.phone} />
        <Row label="Email" value={siteConfig.email} />
        <Row label="Directeur de la publication" value={legalMentions.publicationDirector} />
      </dl>

      <h2 className="mt-10 font-heading text-xl font-bold text-navy">Assurance professionnelle</h2>
      <dl className="mt-4">
        <Row label="Responsabilité civile pro" value={legalMentions.insurance} />
        <Row label="Couverture géographique" value={legalMentions.insuranceArea} />
        <Row label="Qualifications" value={legalMentions.qualifications} />
      </dl>

      <h2 className="mt-10 font-heading text-xl font-bold text-navy">Hébergeur du site</h2>
      <p className="mt-3 text-sm leading-relaxed text-navy/70">{legalMentions.host}</p>

      <h2 className="mt-10 font-heading text-xl font-bold text-navy">Médiation de la consommation</h2>
      <p className="mt-3 text-sm leading-relaxed text-navy/70">
        {legalMentions.companyName} exerce son activité auprès d&apos;une clientèle exclusivement
        professionnelle (B2B). Le dispositif de médiation de la consommation prévu aux articles
        L.616-1 et R.616-1 du Code de la consommation ne s&apos;applique donc pas.
      </p>
      <p className="mt-3 text-sm leading-relaxed text-red-600">
        {legalMentions.consumerMediator}
      </p>

      <h2 className="mt-10 font-heading text-xl font-bold text-navy">Propriété intellectuelle</h2>
      <p className="mt-3 text-sm leading-relaxed text-navy/70">
        L&apos;ensemble des contenus présents sur ce site (textes, images, logo, mise en page) est
        protégé par le droit d&apos;auteur. Toute reproduction, représentation ou diffusion, totale
        ou partielle, sans autorisation écrite préalable de {legalMentions.companyName} est
        interdite.
      </p>

      <h2 className="mt-10 font-heading text-xl font-bold text-navy">Données personnelles</h2>
      <p className="mt-3 text-sm leading-relaxed text-navy/70">
        Le traitement des données transmises via le formulaire de contact est détaillé dans notre{" "}
        <Link className="underline hover:text-brand-dark" href="/politique-de-confidentialite">
          politique de confidentialité
        </Link>
        .
      </p>

      <h2 className="mt-10 font-heading text-xl font-bold text-navy">Cookies</h2>
      <p className="mt-3 text-sm leading-relaxed text-navy/70">
        Ce site ne dépose aucun cookie de mesure d&apos;audience ni de publicité. Seuls des cookies
        strictement nécessaires à son fonctionnement peuvent être utilisés, pour lesquels le
        consentement préalable n&apos;est pas requis. La carte de la zone d&apos;intervention
        s&apos;appuie sur OpenStreetMap et ne dépose pas de cookie publicitaire.
      </p>
    </article>
  );
}
