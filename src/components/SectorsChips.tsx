import Link from "next/link";
import Reveal from "./Reveal";
import { services } from "@/lib/site-data";

export default function SectorsChips() {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service, index) => (
        <Reveal key={service.slug} delay={(index % 4) * 60}>
          <li>
            <Link
              href={`/${service.slug}`}
              className="flex h-full items-center gap-3 rounded-xl bg-white px-4 py-3.5 ring-1 ring-navy/8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:ring-brand/40"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <span className="text-[13.5px] font-medium text-navy/80">{service.shortTitle}</span>
            </Link>
          </li>
        </Reveal>
      ))}
    </ul>
  );
}
