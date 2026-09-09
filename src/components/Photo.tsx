import Image from "next/image";

type Props = {
  src: string | null;
  alt: string;
  /** Libellé affiché dans le bloc gris tant que la photo n'est pas fournie */
  label?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Affiche la photo si elle existe, sinon un bloc gris en attente de la photo client.
 * Permet de valider la mise en page avant réception des visuels.
 */
export default function Photo({
  src,
  alt,
  label,
  className = "",
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
}: Props) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Photo à venir : ${alt}`}
      className={`photo-placeholder relative flex flex-col items-center justify-center gap-2 overflow-hidden p-4 text-center ${className}`}
    >
      <svg
        aria-hidden="true"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-navy/30"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8.5" cy="9.5" r="1.5" />
        <path d="M21 16l-5-5-4.5 4.5L9 13l-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-[11px] font-semibold uppercase tracking-wide text-navy/40">
        Photo à venir
      </span>
      {label && <span className="text-xs leading-snug text-navy/35">{label}</span>}
    </div>
  );
}
