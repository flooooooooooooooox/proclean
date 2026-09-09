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
  align?: "center" | "left";
  action?: ReactNode;
  tone?: "light" | "dark";
};

export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
  headingLevel = "h2",
  align = "center",
  action,
  tone = "light",
}: Props) {
  const Heading = headingLevel;
  const centered = align === "center";
  const titleColor = tone === "dark" ? "text-white" : "text-navy";
  const introColor = tone === "dark" ? "text-white/70" : "text-navy/60";

  return (
    <section id={id} className={`mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20 ${className}`}>
      <Reveal>
        <div
          className={
            centered
              ? "mx-auto max-w-2xl text-center"
              : "flex flex-wrap items-end justify-between gap-4"
          }
        >
          <div className={centered ? "" : "max-w-2xl"}>
            {eyebrow && (
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">{eyebrow}</p>
            )}
            <Heading
              className={`mt-2 font-heading text-2xl font-extrabold tracking-tight sm:text-3xl md:text-[2.1rem] ${titleColor}`}
            >
              {title}
            </Heading>
            {intro && (
              <p className={`mt-4 text-[15px] leading-relaxed ${introColor}`}>{intro}</p>
            )}
          </div>
          {action}
        </div>
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  );
}
