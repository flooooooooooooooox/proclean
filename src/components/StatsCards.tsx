import Reveal from "./Reveal";

const STATS = [
  { value: "2023", label: "Création de l'entreprise", icon: <path d="M8 2v4 M16 2v4 M3 10h18 M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" /> },
  { value: "6 à 9", label: "Agents formés", icon: <path d="M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20 M9.5 10.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7 M21 20v-1.5a4 4 0 0 0-3-3.87" /> },
  { value: "100%", label: "Clientèle professionnelle", icon: <path d="M20 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" /> },
  { value: "24h", label: "Délai de réponse au devis", icon: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3 2" /> },
  { value: "48h", label: "Mise en place possible", icon: <path d="M13 2L4.5 13H12l-1 9 8.5-11H13l0-9z" /> },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {STATS.map((stat, index) => (
        <Reveal key={stat.label} delay={index * 70}>
          <div className="group relative h-full overflow-hidden rounded-2xl bg-white px-4 pb-6 pt-7 text-center shadow-sm ring-1 ring-navy/8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-brand/40 active:-translate-y-0.5">
            {/* liseré orange en haut */}
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand to-brand-dark"
            />
            {/* halo au survol */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            />
            <span className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-dark text-white shadow-md shadow-brand/25 transition-transform duration-300 group-hover:scale-110">
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {stat.icon}
              </svg>
            </span>
            <p className="relative mt-4 font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              {stat.value}
            </p>
            <p className="relative mt-2 text-[11px] font-semibold uppercase leading-snug tracking-wide text-navy/45">
              {stat.label}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
