import { testimonials } from "@/lib/site-data";
import Reveal from "./Reveal";

/**
 * Section avis — fond sombre.
 * Masquée automatiquement tant qu'aucun avis VÉRIFIABLE n'a été fourni par le client.
 * Ne jamais y placer de témoignage inventé.
 */
export default function Testimonials() {
  if (!testimonials.length) return null;

  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">Avis clients</p>
            <h2 className="mt-2 font-heading text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-[2.1rem]">
              Ce que disent nos clients
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/60">
              La satisfaction de nos clients à Caen et dans le Calvados est notre meilleure carte
              de visite.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={`${item.name}-${index}`} delay={(index % 3) * 80}>
              <figure className="flex h-full flex-col rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10">
                <div className="flex gap-0.5 text-brand" aria-label={`${item.rating} sur 5`}>
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i} aria-hidden="true">
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/80">
                  « {item.quote} »
                </blockquote>
                <figcaption className="mt-5 flex items-end justify-between gap-3 border-t border-white/10 pt-4">
                  <span>
                    <span className="block text-sm font-semibold text-white">{item.name}</span>
                    {item.context && (
                      <span className="block text-xs text-white/50">{item.context}</span>
                    )}
                  </span>
                  {item.date && (
                    <span className="shrink-0 text-[11px] text-white/40">{item.date}</span>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
