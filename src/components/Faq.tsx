import Reveal from "./Reveal";

type Item = { question: string; answer: string };

export default function Faq({ items }: { items: Item[] }) {
  if (!items.length) return null;

  return (
    <div className="divide-y divide-navy/10 overflow-hidden rounded-2xl bg-white ring-1 ring-navy/8">
      {items.map((item, index) => (
        <Reveal key={item.question} delay={index * 50}>
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-navy transition-colors hover:bg-cream-alt/40 sm:px-6">
              {item.question}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
                className="shrink-0 text-brand-dark transition-transform duration-300 group-open:rotate-45"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </summary>
            <p className="px-5 pb-5 text-sm leading-relaxed text-navy/70 sm:px-6">{item.answer}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
