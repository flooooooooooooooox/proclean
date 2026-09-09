import Reveal from "./Reveal";

const SEGMENTS = [
  { label: "Bureaux caennais", icon: <path d="M3 21h18 M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16 M15 21V9h2a2 2 0 0 1 2 2v10 M8 7h2 M8 11h2 M8 15h2" /> },
  { label: "Cabinets & agences", icon: <path d="M3 21h18 M4 21V8l8-5 8 5v13 M9 21v-6h6v6" /> },
  { label: "Commerces de centre-ville", icon: <path d="M4 9h16l-1 12H5L4 9z M4 9l1.5-5h13L20 9 M9 13a3 3 0 0 0 6 0" /> },
  { label: "Collectivités locales", icon: <path d="M3 21h18 M5 21V10 M9 21V10 M15 21V10 M19 21V10 M2 10l10-6 10 6" /> },
  { label: "Sites industriels", icon: <path d="M3 21h18 M4 21V11l6 4V11l6 4V7l4-2v16" /> },
];

export default function ClientsBand() {
  return (
    <section className="bg-cream-alt/50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Reveal>
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-navy/40">
            Ils nous font confiance
          </p>
        </Reveal>
        <Reveal delay={80}>
          <ul className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-5">
            {SEGMENTS.map((item) => (
              <li key={item.label} className="flex flex-col items-center gap-2 text-center">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-navy/25" aria-hidden="true">
                  {item.icon}
                </svg>
                <span className="text-[12px] font-medium text-navy/40">{item.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
