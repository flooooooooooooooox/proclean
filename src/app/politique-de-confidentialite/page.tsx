import type { Metadata } from "next";
import { legalMentions, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Politique de confidentialité et traitement des données personnelles — ${legalMentions.companyName}.`,
  alternates: { canonical: "/politique-de-confidentialite" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-heading text-3xl font-extrabold text-navy">
        Politique de confidentialité
      </h1>
      <p className="mt-3 text-sm text-navy/60">
        Conformément au Règlement général sur la protection des données (RGPD) et à la loi
        Informatique et Libertés.
      </p>

      <h2 className="mt-10 font-heading text-xl font-bold text-navy">Responsable du traitement</h2>
      <p className="mt-3 text-sm leading-relaxed text-navy/70">
        {legalMentions.companyName}, {legalMentions.headOffice}. Contact&nbsp;:{" "}
        <a className="underline hover:text-brand-dark" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
        </a>{" "}
        — {siteConfig.phone}.
      </p>

      <h2 className="mt-10 font-heading text-xl font-bold text-navy">Données collectées</h2>
      <p className="mt-3 text-sm leading-relaxed text-navy/70">
        Via le formulaire de demande de devis&nbsp;: nom, nom de l&apos;entreprise, adresse email,
        numéro de téléphone, ville et code postal, prestation souhaitée et contenu du message.
        Aucune donnée n&apos;est collectée à votre insu et aucun profilage n&apos;est réalisé.
      </p>

      <h2 className="mt-10 font-heading text-xl font-bold text-navy">Finalité et base légale</h2>
      <p className="mt-3 text-sm leading-relaxed text-navy/70">
        Ces données sont utilisées uniquement pour répondre à votre demande et établir un devis.
        La base légale est l&apos;exécution de mesures précontractuelles prises à votre demande
        (article 6.1.b du RGPD).
      </p>

      <h2 className="mt-10 font-heading text-xl font-bold text-navy">Destinataires</h2>
      <p className="mt-3 text-sm leading-relaxed text-navy/70">
        Vos données sont destinées aux seules personnes habilitées de {legalMentions.companyName}.
        Elles ne sont ni vendues, ni cédées, ni transmises à des tiers à des fins commerciales.
        L&apos;acheminement des emails est assuré par notre prestataire technique d&apos;envoi, qui
        agit en qualité de sous-traitant.
      </p>

      <h2 className="mt-10 font-heading text-xl font-bold text-navy">Durée de conservation</h2>
      <p className="mt-3 text-sm leading-relaxed text-navy/70">
        Les demandes sans suite sont conservées 12 mois maximum. Les données liées à une relation
        commerciale sont conservées pendant la durée du contrat, puis archivées conformément aux
        obligations légales et comptables applicables.
      </p>

      <h2 className="mt-10 font-heading text-xl font-bold text-navy">Vos droits</h2>
      <p className="mt-3 text-sm leading-relaxed text-navy/70">
        Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de
        limitation, d&apos;opposition et de portabilité de vos données. Pour les exercer, écrivez à{" "}
        <a className="underline hover:text-brand-dark" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
        </a>
        . Vous pouvez également introduire une réclamation auprès de la CNIL (
        <a
          className="underline hover:text-brand-dark"
          href="https://www.cnil.fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.cnil.fr
        </a>
        ).
      </p>

      <h2 className="mt-10 font-heading text-xl font-bold text-navy">Cookies</h2>
      <p className="mt-3 text-sm leading-relaxed text-navy/70">
        Ce site ne dépose aucun cookie de mesure d&apos;audience, de publicité ou de réseaux
        sociaux. Seuls des cookies strictement nécessaires à son bon fonctionnement peuvent être
        déposés, sans consentement préalable requis. La carte de la zone d&apos;intervention
        utilise OpenStreetMap, qui ne dépose pas de cookie publicitaire.
      </p>
    </article>
  );
}
