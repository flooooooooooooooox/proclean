import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

export default function OrangeCta({
  title = "Besoin d'une entreprise de nettoyage fiable dans le Calvados ?",
  text = `${siteConfig.name} accompagne les professionnels du Calvados pour l'entretien de leurs locaux. Devis gratuit sous 24h.`,
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-gradient-to-br from-brand to-brand-dark">
      <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6">
        <h2 className="font-heading text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-white/85">{text}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/demande-de-devis"
            className="btn border border-white/70 bg-transparent text-white transition-colors hover:bg-white hover:text-brand-dark"
          >
            Demander un devis gratuit
            <span aria-hidden="true">→</span>
          </Link>
          <a
            href={siteConfig.phoneHref}
            className="btn bg-white text-brand-dark hover:bg-white/90"
          >
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
