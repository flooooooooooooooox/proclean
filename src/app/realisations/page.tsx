import type { Metadata } from "next";
import Section from "@/components/Section";
import RealisationsGrid from "@/components/RealisationsGrid";
import CtaSection from "@/components/CtaSection";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { realisations, siteConfig } from "@/lib/site-data";
import { getBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Nos réalisations dans le Calvados",
  description: `Les chantiers réalisés par ${siteConfig.name} à Caen et dans le Calvados : écoles, commerces, cabinets médicaux, collectivités, sites industriels et fins de chantier.`,
  alternates: { canonical: "/realisations" },
};

export default function RealisationsPage() {
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Réalisations", path: "/realisations" },
  ];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(crumbs)} />
      <Breadcrumb items={crumbs} />
      <Section
        headingLevel="h1"
        eyebrow="Nos réalisations"
        title="Nos chantiers à Caen et dans le Calvados"
        intro={`${realisations.length} interventions réalisées auprès d'écoles, de commerces, de cabinets médicaux, de collectivités et d'entreprises du département.`}
      >
        <RealisationsGrid items={realisations} />
      </Section>
      <CtaSection />
    </>
  );
}
