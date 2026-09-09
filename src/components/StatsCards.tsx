import Reveal from "./Reveal";
import { keyFigures } from "@/lib/site-data";

const ICONS: Record<string, React.ReactNode> = {
  users: <path d="M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20 M9.5 10.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7 M21 20v-1.5a4 4 0 0 0-3-3.87 M16 4.13a4 4 0 0 1 0 7.75" />,
  team: <path d="M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20 M9.5 10.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7 M21 20v-1.5a4 4 0 0 0-3-3.87" />,
  case: <path d="M20 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />,
  clock: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3 2" />,
  bolt: <path d="M13 2L4.5 13H12l-1 9 8.5-11H13l0-9z" />,
  calendar: <path d="M8 2v4 M16 2v4 M3 10h18 M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />,
};

export default function StatsCards() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {keyFigures.map((stat, index) => (
        <Reveal key={stat.label} delay={index * 70}>
          <div className="group h-full rounded-2xl bg-white px-4 py-7 text-center shadow-sm ring-1 ring-navy/8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-brand/35">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand/[0.13] text-brand ring-1 ring-brand/20 transition-all duration-300 group-hover:bg-brand/20 group-hover:ring-brand/35">
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {ICONS[stat.icon] ?? ICONS.clock}
              </svg>
            </span>
            <p className="mt-4 font-heading text-[26px] font-bold leading-none tracking-tight text-navy/80 sm:text-[29px]">
              {stat.value}
            </p>
            <span
              aria-hidden="true"
              className="mx-auto mt-3 block h-0.5 w-6 rounded-full bg-brand/60 transition-all duration-300 group-hover:w-10 group-hover:bg-brand"
            />
            <p className="mt-3 text-[11px] font-semibold uppercase leading-snug tracking-wide text-navy/45">
              {stat.label}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
