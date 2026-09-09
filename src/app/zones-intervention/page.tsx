import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import ZoneSection from "@/components/ZoneSection";
import CtaSection from "@/components/CtaSection";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { services, siteConfig } from "@/lib/site-data";
import { getBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Zone d'intervention : Caen et tout le Calvados",
  description: `${siteConfig.name} intervient à Caen, Hérouville-Saint-Clair, Mondeville, Ifs, Bayeux, Lisieux, Vire, Falaise, Honfleur et dans toutes les communes du Calvados.`,
  alternates: { canonical: "/zones-intervention" },
};

export default function ZonesPage() {
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Zones d'intervention", path: "/zones-intervention" },
  ];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(crumbs)} />
      <Breadcrumb items={crumbs} />
      <Section
        headingLevel="h1"
        eyebrow="Zone d'intervention"
        title="Nettoyage professionnel dans tout le Calvados"
        intro={`Basée à ${siteConfig.city} (${siteConfig.postalCode}), ${siteConfig.name} intervient dans un rayon d'environ ${siteConfig.serviceRadiusKm} km, ce qui couvre l'ensemble du département du Calvados (14).`}
      >
        <ZoneSection />
      </Section>

      <div className="bg-white">
        <Section
          eyebrow="Communes"
          title="Les communes que nous desservons"
          intro="Cette liste n'est pas limitative : si votre établissement se situe dans le Calvados, appelez-nous pour vérifier."
        >
          <Reveal>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {siteConfig.areaServed.map((city) => (
                <li
                  key={city}
                  className="rounded-xl bg-cream px-4 py-3 text-sm font-medium text-navy/75 ring-1 ring-navy/8"
                >
                  {city}
                </li>
              ))}
            </ul>
          </Reveal>
        </Section>
      </div>

      <Section
        eyebrow="Prestations"
        title="Toutes nos prestations sont disponibles dans le département"
      >
        <div className="flex flex-wrap gap-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-navy/75 ring-1 ring-navy/10 transition-all hover:-translate-y-0.5 hover:text-brand-dark hover:ring-brand/40"
            >
              {service.title}
            </Link>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
