import { siteConfig } from "@/lib/site-data";

/**
 * Logo textuel provisoire, en attendant le logo fourni par le client.
 * Remplacer par <Image src="/images/logo.webp" ... /> dès réception.
 */
export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const main = variant === "light" ? "text-white" : "text-navy";
  const accent = variant === "light" ? "text-white/70" : "text-brand-dark";

  return (
    <span className="flex items-center gap-2.5">
      <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-brand to-brand-dark shadow-sm">
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" aria-hidden="true">
          <path d="M12 3l1.9 4.6L18.5 9l-4.6 1.4L12 15l-1.9-4.6L5.5 9l4.6-1.4L12 3z" strokeLinejoin="round" />
          <path d="M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9L18 15z" strokeLinejoin="round" />
        </svg>
        <span className="animate-shine-sweep pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-white/35" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-heading text-[15px] font-extrabold tracking-tight ${main}`}>
          {siteConfig.name}
        </span>
        <span className={`text-[10px] font-medium uppercase tracking-[0.14em] ${accent}`}>
          Nettoyage professionnel
        </span>
      </span>
    </span>
  );
}
