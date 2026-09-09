import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site-data";
import { getBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Demander un devis gratuit",
  description: `Contactez ${siteConfig.name} pour un devis de nettoyage à Caen ou dans le Calvados. Réponse sous 24h, devis gratuit et sans engagement. Tél. ${siteConfig.phone}.`,
  alternates: { canonical: "/demande-de-devis" },
};

const REASSURANCE = [
  "Réponse sous 24 heures ouvrées",
  "Visite de vos locaux avant chiffrage",
  "Devis gratuit et sans engagement",
  "Un interlocuteur dédié dès le premier contact",
];

export default function ContactPage() {
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Contact", path: "/demande-de-devis" },
  ];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(crumbs)} />
      <Breadcrumb items={crumbs} />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-dark">
                Contact
              </p>
              <h1 className="mt-2 font-heading text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
                Demandez votre devis gratuit
              </h1>
              <p className="mt-4 text-base leading-relaxed text-navy/70">
                Décrivez-nous vos locaux et vos besoins&nbsp;: nous revenons vers vous sous 24
                heures avec une proposition adaptée à votre activité et à votre budget.
              </p>

              <ul className="mt-8 space-y-3">
                {REASSURANCE.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-navy/70">
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

              <div className="mt-10 space-y-4 rounded-2xl bg-white p-6 ring-1 ring-navy/8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-navy/45">
                    Téléphone
                  </p>
                  <a
                    href={siteConfig.phoneHref}
                    className="mt-1 block font-heading text-xl font-extrabold text-navy hover:text-brand-dark"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-navy/45">
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 block text-sm text-navy/80 hover:text-brand-dark"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-navy/45">
                    Horaires
                  </p>
                  <p className="mt-1 text-sm text-navy/80">{siteConfig.hours.display}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-navy/45">
                    Zone d&apos;intervention
                  </p>
                  <p className="mt-1 text-sm text-navy/80">{siteConfig.serviceArea}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-navy/8 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
