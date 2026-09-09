import Link from "next/link";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Section from "@/components/Section";
import ServicesGrid from "@/components/ServicesGrid";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import RealisationsGrid from "@/components/RealisationsGrid";
import ZoneSection from "@/components/ZoneSection";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { faq, realisations, services, siteConfig } from "@/lib/site-data";
import { getFaqSchema } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <JsonLd data={getFaqSchema()} />
      <Hero />
      <Stats />

      <Section
        eyebrow="Nos prestations"
        title="Des prestations de nettoyage adaptées à chaque secteur"
        intro={`De la salle de réunion au site de production, ${siteConfig.name} adapte son protocole, son matériel et ses horaires à votre activité, à Caen et dans tout le Calvados.`}
      >
        <ServicesGrid items={services.slice(0, 9)} />
        <div className="mt-10 text-center">
          <Link href="/services" className="btn btn-outline">
            Voir les 12 prestations
          </Link>
        </div>
      </Section>

      <div className="bg-white">
        <Section
          eyebrow="Pourquoi nous"
          title={`Pourquoi les professionnels du Calvados choisissent ${siteConfig.name}`}
          intro="Une entreprise locale, structurée et joignable, qui s'engage sur des délais et sur un résultat constant."
        >
          <WhyUs />
        </Section>
      </div>

      <Section
        eyebrow="Nos réalisations"
        title="Des chantiers concrets, partout dans le Calvados"
        intro="Écoles, commerces, cabinets médicaux, sites industriels ou équipements publics : voici quelques-unes de nos interventions récentes."
      >
        <RealisationsGrid items={realisations.slice(0, 6)} />
        <div className="mt-10 text-center">
          <Link href="/realisations" className="btn btn-outline">
            Voir toutes les réalisations
          </Link>
        </div>
      </Section>

      <div className="bg-white">
        <Section
          eyebrow="Zone d'intervention"
          title="Nous intervenons dans tout le Calvados"
          intro={`${siteConfig.name} est basée à ${siteConfig.city} et intervient dans un rayon d'environ ${siteConfig.serviceRadiusKm} km, sur l'ensemble du département.`}
        >
          <ZoneSection />
        </Section>
      </div>

      <Section
        eyebrow="Comment ça se passe"
        title="Trois étapes, et vos locaux sont pris en charge"
        intro="Un parcours simple, sans engagement tant que le devis n'est pas signé."
      >
        <Process />
      </Section>

      <div className="bg-white">
        <Section
          eyebrow="Questions fréquentes"
          title="Vos questions sur le nettoyage professionnel à Caen"
          intro="Vous ne trouvez pas votre réponse ? Appelez-nous, nous répondons directement."
        >
          <div className="mx-auto max-w-3xl">
            <Faq items={faq} />
          </div>
          <Reveal>
            <p className="mt-8 text-center text-sm text-navy/60">
              Une autre question ?{" "}
              <a href={siteConfig.phoneHref} className="font-semibold text-brand-dark hover:underline">
                Appelez le {siteConfig.phone}
              </a>
            </p>
          </Reveal>
        </Section>
      </div>

      <CtaSection />
    </>
  );
}
