import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import Photo from "@/components/Photo";
import RealisationsGrid from "@/components/RealisationsGrid";
import Reveal from "@/components/Reveal";
import { realisations, siteConfig } from "@/lib/site-data";
import { getBreadcrumbSchema } from "@/lib/structured-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return realisations.map((item) => ({ slug: item.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = realisations.find((r) => r.slug === slug);
  if (!item) return {};

  return {
    title: `${item.title} à ${item.city}`,
    description: `${item.summary} Intervention réalisée par ${siteConfig.name}, entreprise de nettoyage à Caen et dans le Calvados.`,
    alternates: { canonical: `/realisations/${slug}` },
  };
}

export default async function RealisationPage({ params }: Props) {
  const { slug } = await params;
  const item = realisations.find((r) => r.slug === slug);
  if (!item) notFound();

  const others = realisations.filter((r) => r.slug !== slug).slice(0, 3);
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Réalisations", path: "/realisations" },
    { name: item.title, path: `/realisations/${slug}` },
  ];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(crumbs)} />
      <Breadcrumb items={crumbs} />

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand-dark">
              {item.category}
            </span>
            <span className="text-xs font-medium uppercase tracking-wide text-navy/45">
              {item.city}
            </span>
          </div>
          <h1 className="mt-3 font-heading text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
            {item.title} à {item.city}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-navy/70">{item.summary}</p>
        </Reveal>

        <Reveal delay={100}>
          <Photo
            src={item.image}
            alt={`${item.title} à ${item.city} — chantier réalisé par ${siteConfig.name}`}
            label={`${item.title} — ${item.city}`}
            sizes="(max-width: 768px) 100vw, 800px"
            className="mt-8 aspect-[16/9] w-full rounded-3xl ring-1 ring-navy/8"
          />
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-8 rounded-2xl bg-white p-6 ring-1 ring-navy/8">
            <h2 className="font-heading text-lg font-bold text-navy">
              Une intervention similaire à prévoir&nbsp;?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-navy/65">
              {siteConfig.name} intervient à {item.city} et dans tout le Calvados. Décrivez-nous
              vos locaux, nous vous répondons sous 24 heures avec un devis gratuit.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-primary">
                Demander un devis
              </Link>
              <a href={siteConfig.phoneHref} className="btn btn-outline">
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </article>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Reveal>
          <h2 className="mb-6 font-heading text-xl font-extrabold text-navy sm:text-2xl">
            Autres réalisations
          </h2>
        </Reveal>
        <RealisationsGrid items={others} />
        <div className="mt-8 text-center">
          <Link href="/realisations" className="btn btn-outline">
            Voir toutes les réalisations
          </Link>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
