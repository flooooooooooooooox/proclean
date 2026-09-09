import Link from "next/link";
import Photo from "./Photo";
import Reveal from "./Reveal";
import type { Service } from "@/lib/site-data";

export default function ServicesGrid({ items }: { items: Service[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((service, index) => (
        <Reveal key={service.slug} delay={(index % 3) * 90}>
          <Link
            href={`/${service.slug}`}
            className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-navy/8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-brand/30 active:-translate-y-0.5"
          >
            <Photo
              src={service.image}
              alt={`${service.title} à Caen`}
              label={service.shortTitle}
              className="aspect-[16/10] w-full"
            />
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-heading text-base font-bold text-navy">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/65">
                {service.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark">
                En savoir plus
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
