import type { Metadata } from "next";
import Section from "@/components/Section";
import ServicesGrid from "@/components/ServicesGrid";
import CtaSection from "@/components/CtaSection";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { services, siteConfig } from "@/lib/site-data";
import { getBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Nos prestations de nettoyage professionnel",
  description: `Les 12 prestations de ${siteConfig.name} à Caen et dans le Calvados : bureaux, médical, EHPAD, commerces, restaurants, industrie, agroalimentaire, fin de chantier, vitres, évacuation de déchets.`,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <Breadcrumb
        items={[
          { name: "Accueil", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
      <Section
        headingLevel="h1"
        eyebrow="Nos prestations"
        title="Nettoyage professionnel à Caen : toutes nos prestations"
        intro={`${siteConfig.name} intervient auprès des entreprises, collectivités et commerces de tout le Calvados. Chaque prestation fait l'objet d'un protocole écrit, adapté à votre activité et à vos horaires.`}
      >
        <ServicesGrid items={services} />
      </Section>
      <CtaSection />
    </>
  );
}
