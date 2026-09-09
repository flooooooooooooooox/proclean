import type { Metadata } from "next";
import Section from "@/components/Section";
import CtaSection from "@/components/CtaSection";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import WhyUs from "@/components/WhyUs";
import { legalMentions, siteConfig } from "@/lib/site-data";
import { getBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "À propos de l'entreprise",
  description: `${siteConfig.name}, entreprise de nettoyage professionnel créée en ${siteConfig.foundingYear} et basée à ${siteConfig.city}. Une équipe formée au service des professionnels du Calvados.`,
  alternates: { canonical: "/a-propos" },
};

export default function AboutPage() {
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/a-propos" },
  ];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(crumbs)} />
      <Breadcrumb items={crumbs} />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-dark">
                À propos
              </p>
              <h1 className="mt-2 font-heading text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
                Une entreprise de nettoyage caennaise au service des professionnels
              </h1>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-navy/70">
                <p>
                  {siteConfig.name} est une entreprise de nettoyage professionnel créée en{" "}
                  {siteConfig.foundingYear} et basée au {legalMentions.headOffice}. Nous
                  intervenons exclusivement auprès des professionnels&nbsp;: entreprises,
                  commerces, établissements de santé, collectivités et acteurs du bâtiment.
                </p>
                <p>
                  Une entreprise propre inspire confiance. C&apos;est vrai pour un cabinet médical
                  comme pour un entrepôt&nbsp;: la propreté des locaux dit quelque chose du sérieux
                  de celui qui les occupe. C&apos;est ce que nous prenons en charge, pour que vous
                  n&apos;ayez plus à y penser.
                </p>
                <p>
                  Nos agents sont formés aux protocoles propres à chaque secteur, du nettoyage
                  médical à l&apos;agroalimentaire. Chaque client dispose d&apos;un interlocuteur
                  dédié, joignable, qui connaît son site et son cahier des charges.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Photo
              src={null}
              alt={`L'équipe de ${siteConfig.name} à ${siteConfig.city}`}
              label="Photo de l'équipe"
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="aspect-[4/3] w-full rounded-3xl ring-1 ring-navy/8"
            />
          </Reveal>
        </div>
      </section>

      <div className="bg-white">
        <Section
          eyebrow="Nos engagements"
          title="Ce sur quoi nous nous engageons"
          intro="Des engagements simples, tenus sur chaque intervention."
        >
          <WhyUs />
        </Section>
      </div>

      <Section eyebrow="L'entreprise" title="Informations sur la société">
        <Reveal>
          <dl className="grid gap-x-10 gap-y-5 rounded-2xl bg-white p-6 ring-1 ring-navy/8 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-navy/45">
                Dénomination
              </dt>
              <dd className="mt-1 text-sm text-navy/80">{legalMentions.companyName}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-navy/45">
                Forme juridique
              </dt>
              <dd className="mt-1 text-sm text-navy/80">{legalMentions.legalForm}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-navy/45">
                Année de création
              </dt>
              <dd className="mt-1 text-sm text-navy/80">{siteConfig.foundingYear}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-navy/45">
                Immatriculation
              </dt>
              <dd className="mt-1 text-sm text-navy/80">{legalMentions.rcs}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-navy/45">Siège</dt>
              <dd className="mt-1 text-sm text-navy/80">{legalMentions.headOffice}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-navy/45">
                Zone d&apos;intervention
              </dt>
              <dd className="mt-1 text-sm text-navy/80">{siteConfig.serviceArea}</dd>
            </div>
          </dl>
        </Reveal>
      </Section>

      <CtaSection />
    </>
  );
}
