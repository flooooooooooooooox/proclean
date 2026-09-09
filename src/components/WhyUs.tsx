import Reveal from "./Reveal";
import { benefits } from "@/lib/site-data";

const ICONS: Record<string, React.ReactNode> = {
  pin: <path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z M12 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />,
  clock: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3 2" />,
  check: <path d="M20 6L9 17l-5-5" />,
  leaf: <path d="M4 20c0-8 6-14 16-14 0 10-6 15-13 15H4v-1z M9 15c2-3 5-5 8-6" />,
  users: <path d="M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20 M9.5 10.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7 M21 20v-1.5a4 4 0 0 0-3-3.87 M16 4.13a4 4 0 0 1 0 7.75" />,
  quote: <path d="M8 7H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 1-2 2 M19 7h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 1-2 2" />,
};

export default function WhyUs() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {benefits.map((benefit, index) => (
        <Reveal key={benefit.title} delay={(index % 3) * 90}>
          <div className="group relative h-full overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-brand/40 active:-translate-y-0.5">
            {/* numéro fantôme */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-1 -top-3 font-heading text-[76px] font-extrabold leading-none text-navy/[0.04] transition-colors duration-300 group-hover:text-brand/10"
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-dark text-white shadow-md shadow-brand/25 transition-transform duration-300 group-hover:scale-110">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {ICONS[benefit.icon] ?? ICONS.check}
              </svg>
            </span>

            <h3 className="relative mt-5 font-heading text-[17px] font-extrabold tracking-tight text-navy">
              {benefit.title}
            </h3>
            <span
              aria-hidden="true"
              className="relative mt-2.5 block h-0.5 w-8 rounded-full bg-brand transition-all duration-300 group-hover:w-14"
            />
            <p className="relative mt-3 text-[14px] leading-relaxed text-navy/60">{benefit.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
