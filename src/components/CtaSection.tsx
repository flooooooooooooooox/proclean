import Link from "next/link";
import Particles from "./Particles";
import { siteConfig } from "@/lib/site-data";

export default function CtaSection({
  title = "Prêt à confier l'entretien de vos locaux ?",
  text = "Décrivez-nous votre besoin : nous vous répondons sous 24 heures avec une proposition adaptée.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-dark via-navy-light to-navy px-6 py-12 text-center shadow-xl sm:px-12">
        <Particles />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-heading text-2xl font-extrabold text-white sm:text-3xl">{title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">{text}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/demande-de-devis" className="btn btn-primary">
              Demander un devis gratuit
            </Link>
            <a href={siteConfig.phoneHref} className="btn btn-ghost">
              {siteConfig.phone}
            </a>
          </div>
          <p className="mt-5 text-xs text-white/55">
            Devis gratuit et sans engagement · Réponse sous 24h · {siteConfig.hours.short}
          </p>
        </div>
      </div>
    </section>
  );
}
