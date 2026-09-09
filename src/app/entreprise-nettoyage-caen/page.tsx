import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CtaSection from "@/components/CtaSection";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import ServicesGrid from "@/components/ServicesGrid";
import ZoneSection from "@/components/ZoneSection";
import { faq, services, siteConfig, legalMentions } from "@/lib/site-data";
import { getBreadcrumbSchema, getFaqSchemaFrom } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: { absolute: `Entreprise de nettoyage à Caen | ${siteConfig.name}` },
  description: `${siteConfig.name}, entreprise de nettoyage professionnel à Caen (14000) depuis ${siteConfig.foundingYear}. Bureaux, médical, commerces, industrie, fin de chantier. Devis gratuit sous 24h au ${siteConfig.phone}.`,
  alternates: { canonical: "/entreprise-nettoyage-caen" },
};

const LOCAL_FAQ = [
  {
    question: "Quelle entreprise de nettoyage contacter à Caen ?",
    answer: `${siteConfig.name} est une entreprise de nettoyage professionnel établie au ${legalMentions.headOffice}, immatriculée au ${legalMentions.rcs}. Elle intervient auprès des professionnels de Caen et de tout le Calvados. Devis gratuit sous 24h au ${siteConfig.phone}.`,
  },
  {
    question: "Dans quels quartiers de Caen intervenez-vous ?",
    answer:
      "Nous intervenons dans l'ensemble de Caen et de son agglomération : centre-ville, presqu'île, Chemin Vert, Saint-Jean, Rives de l'Orne, ainsi qu'à Hérouville-Saint-Clair, Mondeville, Ifs, Fleury-sur-Orne, Colombelles, Épron et Carpiquet.",
  },
];

export default function EntrepriseNettoyageCaenPage() {
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Entreprise de nettoyage à Caen", path: "/entreprise-nettoyage-caen" },
  ];

  return (
    <>
      <JsonLd data={[getBreadcrumbSchema(crumbs), getFaqSchemaFrom(LOCAL_FAQ)]} />
      <Breadcrumb items={crumbs} />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-dark">Caen (14000)</p>
          <h1 className="mt-2 max-w-3xl font-heading text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
            Entreprise de nettoyage à Caen
          </h1>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-navy/70">
            <p>
              {siteConfig.name} est une entreprise de nettoyage professionnel basée au{" "}
              {legalMentions.headOffice}, créée en {siteConfig.foundingYear} et immatriculée au{" "}
              {legalMentions.rcs}. Nous intervenons exclusivement auprès des professionnels de Caen
              et de son agglomération.
            </p>
            <p>
              Bureaux, cabinets médicaux, EHPAD, commerces, restaurants, sites industriels,
              copropriétés, chantiers en fin de travaux&nbsp;: chaque type de local a ses
              contraintes et son protocole. Nous adaptons le matériel, les produits et les horaires
              d&apos;intervention à votre activité, y compris tôt le matin, en soirée ou le week-end.
            </p>
            <p>
              Toute demande de devis reçoit une réponse sous 24 heures ouvrées. Appelez-nous au{" "}
              <a href={siteConfig.phoneHref} className="font-semibold text-brand-dark hover:underline">
                {siteConfig.phone}
              </a>{" "}
              ou demandez un devis en ligne, gratuit et sans engagement.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/demande-de-devis" className="btn btn-primary">
              Demander un devis gratuit
            </Link>
            <a href={siteConfig.phoneHref} className="btn btn-outline">
              {siteConfig.phone}
            </a>
          </div>
        </Reveal>
      </section>

      <div className="bg-white">
        <Section
          eyebrow="Nos prestations à Caen"
          title="Toutes nos prestations de nettoyage à Caen"
          intro="Chaque prestation dispose de sa page dédiée, avec le détail de ce qui est inclus."
        >
          <ServicesGrid items={services} />
        </Section>
      </div>

      <Section eyebrow="Zone" title="Caen et l'ensemble du Calvados">
        <ZoneSection />
      </Section>

      <div className="bg-white">
        <Section eyebrow="Questions fréquentes" title="Le nettoyage professionnel à Caen">
          <div className="mx-auto max-w-3xl">
            <Faq items={[...LOCAL_FAQ, ...faq.slice(0, 4)]} />
          </div>
        </Section>
      </div>

      <CtaSection title="Un devis pour vos locaux à Caen ?" />
    </>
  );
}
