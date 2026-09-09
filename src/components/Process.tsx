import Reveal from "./Reveal";
import { processSteps } from "@/lib/site-data";

const ICONS = [
  <path key="a" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />,
  <path key="b" d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z M14 3v5h5 M9 13h6 M9 17h4" />,
  <path key="c" d="M12 3l1.9 4.6L18.5 9l-4.6 1.4L12 15l-1.9-4.6L5.5 9l4.6-1.4L12 3z M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9L18 15z" />,
];

export default function Process() {
  return (
    <ol className="grid gap-8 md:grid-cols-3">
      {processSteps.map((step, index) => (
        <Reveal key={step.title} delay={index * 110}>
          <li className="text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {ICONS[index] ?? ICONS[0]}
              </svg>
            </span>
            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
              Étape {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-1.5 font-heading text-base font-bold text-navy">{step.title}</h3>
            <p className="mx-auto mt-2 max-w-xs text-[13.5px] leading-relaxed text-navy/60">
              {step.text}
            </p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
