import Reveal from "./Reveal";
import { processSteps } from "@/lib/site-data";

const ICONS = [
  <path key="a" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />,
  <path key="b" d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z M14 3v5h5 M9 13h6 M9 17h4" />,
  <path key="c" d="M12 3l1.9 4.6L18.5 9l-4.6 1.4L12 15l-1.9-4.6L5.5 9l4.6-1.4L12 3z M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9L18 15z" />,
];

export default function Process() {
  return (
    <div className="relative">
      {/* Fil conducteur entre les étapes (desktop) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[52px] hidden md:block"
      >
        <div className="mx-auto flex max-w-4xl items-center px-24">
          <span className="h-px flex-1 bg-[repeating-linear-gradient(to_right,rgba(244,81,30,0.35)_0_6px,transparent_6px_12px)]" />
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mx-2 shrink-0 text-brand/40">
            <path d="M9 6l6 6-6 6" />
          </svg>
          <span className="h-px flex-1 bg-[repeating-linear-gradient(to_right,rgba(244,81,30,0.35)_0_6px,transparent_6px_12px)]" />
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mx-2 shrink-0 text-brand/40">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </div>
      </div>

      <ol className="relative grid gap-6 md:grid-cols-3">
        {processSteps.map((step, index) => (
          <Reveal key={step.title} delay={index * 130}>
            <li className="group relative h-full rounded-2xl bg-white px-6 pb-7 pt-8 text-center shadow-sm ring-1 ring-navy/8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-brand/35">
              <span className="relative mx-auto flex h-[68px] w-[68px] items-center justify-center rounded-full bg-brand/[0.13] text-brand ring-1 ring-brand/20 transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:ring-brand group-hover:shadow-lg group-hover:shadow-brand/30">
                <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {ICONS[index] ?? ICONS[0]}
                </svg>
                {/* pastille numérotée */}
                <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-white font-heading text-[12px] font-extrabold text-brand shadow-sm ring-1 ring-brand/25 transition-colors duration-300 group-hover:bg-navy group-hover:text-white group-hover:ring-navy">
                  {index + 1}
                </span>
              </span>

              <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
                Étape {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1.5 font-heading text-[17px] font-extrabold tracking-tight text-navy">
                {step.title}
              </h3>
              <span
                aria-hidden="true"
                className="mx-auto mt-3 block h-0.5 w-7 rounded-full bg-brand/60 transition-all duration-300 group-hover:w-12 group-hover:bg-brand"
              />
              <p className="mx-auto mt-3 max-w-xs text-[13.5px] leading-relaxed text-navy/60">
                {step.text}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
