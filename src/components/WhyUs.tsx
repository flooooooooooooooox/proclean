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
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {benefits.map((benefit, index) => (
        <Reveal key={benefit.title} delay={(index % 3) * 90}>
          <div className="h-full rounded-2xl bg-white p-6 ring-1 ring-navy/8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:-translate-y-0.5">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand-dark">
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {ICONS[benefit.icon] ?? ICONS.check}
              </svg>
            </span>
            <h3 className="mt-4 font-heading text-base font-bold text-navy">{benefit.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy/65">{benefit.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
