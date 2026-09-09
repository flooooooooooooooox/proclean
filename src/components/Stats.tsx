import Reveal from "./Reveal";

const STATS = [
  { value: "2023", label: "Création de l'entreprise" },
  { value: "6 à 9", label: "Agents formés" },
  { value: "Calvados", label: "Zone d'intervention" },
  { value: "24h", label: "Délai de réponse au devis" },
];

export default function Stats() {
  return (
    <section className="border-b border-navy/10 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4">
        {STATS.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 80}>
            <div className="text-center lg:text-left">
              <p className="font-heading text-2xl font-extrabold text-brand-dark sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-navy/55">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
