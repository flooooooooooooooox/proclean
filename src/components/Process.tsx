import Reveal from "./Reveal";
import { processSteps } from "@/lib/site-data";

export default function Process() {
  return (
    <ol className="grid gap-6 md:grid-cols-3">
      {processSteps.map((step, index) => (
        <Reveal key={step.title} delay={index * 110}>
          <li className="relative h-full rounded-2xl bg-white p-6 pt-8 ring-1 ring-navy/8">
            <span className="absolute -top-4 left-6 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-dark font-heading text-sm font-bold text-white shadow-md">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-heading text-base font-bold text-navy">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy/65">{step.text}</p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
