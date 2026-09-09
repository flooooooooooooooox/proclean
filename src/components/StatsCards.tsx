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
          <div className="group h-full rounded-2xl bg-white px-4 py-7 text-center shadow-sm ring-1 ring-navy/8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-brand/25">
            <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand/15">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {stat.icon}
              </svg>
            </span>
            <p className="mt-4 font-heading text-[28px] font-extrabold leading-none tracking-tight text-navy sm:text-[32px]">
              {stat.value}
            </p>
            <p className="mt-2.5 text-[11px] font-medium uppercase leading-snug tracking-wide text-navy/45">
              {stat.label}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
