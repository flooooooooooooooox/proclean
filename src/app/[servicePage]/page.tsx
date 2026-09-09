import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import CtaSection from "@/components/CtaSection";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { services, servicePages, siteConfig } from "@/lib/site-data";
import {
  getBreadcrumbSchema,
  getFaqSchemaFrom,
  getServiceSchema,
} from "@/lib/structured-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ servicePage: service.slug }));
}

type Props = { params: Promise<{ servicePage: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { servicePage } = await params;
  const content = servicePages[servicePage];
  if (!content) return {};

  return {
    title: { absolute: `${content.metaTitle} | ${siteConfig.name}` },
    description: content.metaDescription,
    alternates: { canonical: `/${servicePage}` },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `${siteConfig.url}/${servicePage}`,
    },
  };
}

export default async function ServicePageRoute({ params }: Props) {
  const { servicePage } = await params;
  const content = servicePages[servicePage];
  const service = services.find((item) => item.slug === servicePage);
  if (!content || !service) notFound();

  const others = services.filter((item) => item.slug !== servicePage).slice(0, 6);
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/${servicePage}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          getServiceSchema(service.title, content.metaDescription, `/${servicePage}`),
          getBreadcrumbSchema(crumbs),
          getFaqSchemaFrom(content.faq),
        ]}
      />
      <Breadcrumb items={crumbs} />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-dark">
                {service.shortTitle}
              </p>
              <h1 className="mt-2 font-heading text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
                {content.h1}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-navy/70">{content.intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn btn-primary">
                  Demander un devis gratuit
                </Link>
                <a href={siteConfig.phoneHref} className="btn btn-outline">
                  {siteConfig.phone}
                </a>
              </div>
              <p className="mt-4 text-xs text-navy/50">
                Réponse sous 24h · Intervention dans tout le Calvados · {siteConfig.hours.short}
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Photo
              src={service.image}
              alt={`${service.title} à ${siteConfig.city}`}
              label={service.title}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="aspect-[4/3] w-full rounded-3xl ring-1 ring-navy/8"
            />
          </Reveal>
        </div>
      </section>

      <div className="bg-white">
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div>
                <h2 className="font-heading text-xl font-extrabold text-navy sm:text-2xl">
                  Ce que comprend la prestation
                </h2>
                <ul className="mt-5 space-y-3">
                  {content.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-navy/70">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="mt-0.5 shrink-0 text-brand-dark"
                        aria-hidden="true"
                      >
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl bg-cream-alt/60 p-6 ring-1 ring-navy/8">
                <h2 className="font-heading text-xl font-extrabold text-navy sm:text-2xl">
                  Pour qui&nbsp;?
                </h2>
                <ul className="mt-5 space-y-2.5">
                  {content.forWho.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-navy/70">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-navy/10 pt-5 text-sm leading-relaxed text-navy/65">
                  {siteConfig.name} est une entreprise de nettoyage basée à {siteConfig.city}{" "}
                  ({siteConfig.postalCode}), intervenant dans un rayon d&apos;environ{" "}
                  {siteConfig.serviceRadiusKm} km sur l&apos;ensemble du Calvados.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <Reveal>
          <h2 className="font-heading text-xl font-extrabold text-navy sm:text-2xl">
            Communes desservies pour cette prestation
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <ul className="mt-5 flex flex-wrap gap-2">
            {siteConfig.areaServed.map((city) => (
              <li
                key={city}
                className="rounded-full bg-white px-3 py-1.5 text-[13px] text-navy/70 ring-1 ring-navy/8"
              >
                {city}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <div className="bg-white">
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal>
            <h2 className="mb-8 font-heading text-xl font-extrabold text-navy sm:text-2xl">
              Questions fréquentes
            </h2>
          </Reveal>
          <div className="max-w-3xl">
            <Faq items={content.faq} />
          </div>
        </section>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <Reveal>
          <h2 className="font-heading text-xl font-extrabold text-navy sm:text-2xl">
            Nos autres prestations à Caen
          </h2>
        </Reveal>
        <div className="mt-6 flex flex-wrap gap-3">
          {others.map((item) => (
            <Link
              key={item.slug}
              href={`/${item.slug}`}
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-navy/75 ring-1 ring-navy/10 transition-all hover:-translate-y-0.5 hover:text-brand-dark hover:ring-brand/40"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </section>

      <CtaSection
        title={`Besoin d'un devis pour ${service.title.toLowerCase()} ?`}
        text="Décrivez-nous vos locaux : nous vous répondons sous 24 heures avec une proposition chiffrée."
      />
    </>
  );
}
