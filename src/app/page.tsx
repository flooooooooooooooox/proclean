import Link from "next/link";
import ClientsBand from "@/components/ClientsBand";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import OrangeCta from "@/components/OrangeCta";
import Process from "@/components/Process";
import RealisationsCarousel from "@/components/RealisationsCarousel";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import SectorsChips from "@/components/SectorsChips";
import ServicesGrid from "@/components/ServicesGrid";
import StatsCards from "@/components/StatsCards";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import TrustStrip from "@/components/TrustStrip";
import ZoneSection from "@/components/ZoneSection";
import { faq, realisations, services, siteConfig } from "@/lib/site-data";
import { getFaqSchema } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <JsonLd data={getFaqSchema()} />
      <Hero />
      <TrustStrip />
      <ClientsBand />

      <Section
        eyebrow="En chiffres"
        title={`${siteConfig.name} en chiffres`}
        intro="Des repères concrets sur l'entreprise et son engagement auprès des professionnels du Calvados."
      >
        <StatsCards />
      </Section>

      <div className="bg-white">
        <Section
          eyebrow="Nos prestations"
          title="Nos services de nettoyage professionnel"
          intro="Des prestations adaptées à chaque secteur d'activité, avec un seul objectif : la propreté irréprochable de vos locaux à Caen et dans le Calvados."
        >
          <ServicesGrid items={services.slice(0, 9)} />
          <Reveal>
            <div className="mt-10 text-center">
              <Link href="/services" className="btn btn-outline">
                Voir les 12 prestations
              </Link>
            </div>
          </Reveal>
        </Section>
      </div>

      <Section
        eyebrow="Pourquoi nous"
        title={`Pourquoi choisir ${siteConfig.name} ?`}
        intro="Une entreprise de nettoyage locale, fiable et engagée auprès des professionnels du Calvados."
      >
        <WhyUs />
      </Section>

      <div className="bg-white">
        <Section
          eyebrow="Secteurs"
          title="Les secteurs que nous servons"
          intro="PROCLEAN STJ accompagne les professionnels de tous horizons à Caen, Mondeville, Ifs, Hérouville-Saint-Clair et dans toute l'agglomération."
        >
          <SectorsChips />
        </Section>
      </div>

      <OrangeCta />

      <Section
        align="left"
        eyebrow="Nos réalisations"
        title="Nos réalisations"
        intro="Des chantiers concrets menés à Caen et dans tout le Calvados."
        action={
          <Link
            href="/realisations"
            className="text-sm font-semibold text-brand-dark hover:underline"
          >
            Voir toutes les réalisations →
          </Link>
        }
      >
        <RealisationsCarousel items={realisations} />
      </Section>

      <div className="bg-white">
        <Section
          align="left"
          eyebrow="Zone d'intervention"
          title="Notre zone d'intervention dans le Calvados"
          intro={`Nous intervenons dans tout le département du Calvados (14) pour garantir un service de proximité et une réactivité optimale. De Caen à Bayeux, de Lisieux à Honfleur — votre entreprise est dans le Calvados ? Nous sommes là.`}
        >
          <ZoneSection />
        </Section>
      </div>

      <Section
        eyebrow="Comment ça marche"
        title="Comment ça marche ?"
        intro="Trois étapes simples pour des locaux impeccables."
      >
        <Process />
        <Reveal>
          <div className="mt-12 text-center">
            <Link href="/demande-de-devis" className="btn btn-primary">
              Demander un devis gratuit
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </Section>

      <Testimonials />

      <div className="bg-white">
        <Section
          eyebrow="Questions fréquentes"
          title="Questions fréquentes"
          intro="Retrouvez les réponses aux questions les plus courantes sur nos prestations de nettoyage."
        >
          <div className="mx-auto max-w-3xl">
            <Faq items={faq} />
          </div>
          <Reveal>
            <p className="mt-8 text-center text-sm text-navy/55">
              Une autre question ?{" "}
              <a href={siteConfig.phoneHref} className="font-semibold text-brand-dark hover:underline">
                Appelez le {siteConfig.phone}
              </a>
            </p>
          </Reveal>
        </Section>
      </div>

      <Section
        id="devis"
        eyebrow="Devis gratuit"
        title="Demandez votre devis gratuit"
        intro="Décrivez vos besoins, nous vous répondons sous 24h avec une proposition sur mesure."
      >
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-3xl bg-white p-6 shadow-sm ring-1 ring-navy/8 sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </Section>

      <OrangeCta
        title="Prêt à bénéficier d'une propreté professionnelle ?"
        text="Demandez votre devis gratuit en quelques clics. Réponse garantie sous 24h."
      />
    </>
  );
}