import Link from "next/link";
import Photo from "./Photo";
import Reveal from "./Reveal";
import type { Realisation } from "@/lib/site-data";

export default function RealisationsGrid({ items }: { items: Realisation[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <Reveal key={item.slug} delay={(index % 3) * 80}>
          <Link
            href={`/realisations/${item.slug}`}
            className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-navy/8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-brand/30 active:-translate-y-0.5"
          >
            <Photo
              src={item.image}
              alt={`${item.title} à ${item.city}`}
              label={`${item.title} — ${item.city}`}
              className="aspect-[4/3] w-full"
            />
            <div className="flex flex-1 flex-col p-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-[11px] font-semibold text-brand-dark">
                  {item.category}
                </span>
                <span className="text-[11px] font-medium uppercase tracking-wide text-navy/45">
                  {item.city}
                </span>
              </div>
              <h3 className="mt-2.5 font-heading text-base font-bold text-navy">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/65">{item.summary}</p>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
