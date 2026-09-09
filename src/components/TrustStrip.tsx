import Reveal from "./Reveal";

const ITEMS = [
  { label: "Assuré et déclaré", icon: <path d="M12 3l8 3v6c0 4.4-3.2 8-8 9-4.8-1-8-4.6-8-9V6l8-3z M9 12l2 2 4-4" /> },
  { label: "Réactivité 24h", icon: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3 2" /> },
  { label: "Qualité garantie", icon: <path d="M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10z M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5" /> },
  { label: "Produits éco-responsables", icon: <path d="M4 20c0-8 6-14 16-14 0 10-6 15-13 15H4v-1z M9 15c2-3 5-5 8-6" /> },
  { label: "Devis gratuit", icon: <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z M14 3v5h5 M9 13h6 M9 17h4" /> },
  { label: "Équipe formée", icon: <path d="M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20 M9.5 10.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7 M21 20v-1.5a4 4 0 0 0-3-3.87" /> },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-navy/8 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 md:grid-cols-3 lg:grid-cols-6">
        {ITEMS.map((item, index) => (
          <Reveal key={item.label} delay={index * 60}>
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {item.icon}
                </svg>
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wide text-navy/55">
                {item.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
