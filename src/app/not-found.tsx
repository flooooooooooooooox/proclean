import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <p className="font-heading text-6xl font-extrabold text-brand-dark">404</p>
      <h1 className="mt-4 font-heading text-2xl font-extrabold text-navy sm:text-3xl">
        Cette page n&apos;existe pas
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-navy/65">
        La page que vous cherchez a peut-être été déplacée ou n&apos;a jamais existé. Vous pouvez
        revenir à l&apos;accueil ou nous appeler directement.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn btn-primary">
          Retour à l&apos;accueil
        </Link>
        <a href={siteConfig.phoneHref} className="btn btn-outline">
          {siteConfig.phone}
        </a>
      </div>
    </section>
  );
}
