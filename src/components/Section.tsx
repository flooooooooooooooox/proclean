import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
  headingLevel?: "h2" | "h1";
};

export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
  headingLevel = "h2",
}: Props) {
  const Heading = headingLevel;

  return (
    <section id={id} className={`mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20 ${className}`}>
      <Reveal>
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-dark">
              {eyebrow}
            </p>
          )}
          <Heading className="mt-2 font-heading text-2xl font-extrabold text-navy sm:text-3xl md:text-4xl">
            {title}
          </Heading>
          {intro && <p className="mt-4 text-base leading-relaxed text-navy/65">{intro}</p>}
        </div>
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}
