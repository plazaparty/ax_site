/** 포털 공통 — 단색 라인 글리프 (currentColor) */

export type PortalGlyph =
  | "spark"
  | "stack"
  | "building"
  | "chart"
  | "megaphone"
  | "book"
  | "envelope"
  | "compass"
  | "clipboard"
  | "users"
  | "cube"
  | "stairs"
  | "gear"
  | "case"
  | "strategy"
  | "play";

const vb = "0 0 56 44" as const;
const w = 1.75;
const s = "currentColor";

export default function PortalMonoIcon({
  glyph,
  className = "text-slate-800",
}: {
  glyph: PortalGlyph;
  className?: string;
}) {
  switch (glyph) {
    case "spark":
      return (
        <svg viewBox={vb} className={className} width={56} height={44} aria-hidden>
          <path
            d="M28 6l2 8 8 2-8 2-2 8-2-8-8-2 8-2 2-8z"
            stroke={s}
            strokeWidth={w}
            strokeLinejoin="round"
            fill="none"
          />
          <path d="M12 22h6M38 22h6M28 32v6" stroke={s} strokeWidth={1.4} strokeLinecap="round" />
        </svg>
      );
    case "stack":
      return (
        <svg viewBox={vb} className={className} width={56} height={44} aria-hidden>
          <path
            d="M8 30l20 8 20-8M8 22l20 8 20-8M8 14l20 8 20-8"
            stroke={s}
            strokeWidth={w}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path d="M28 6v4" stroke={s} strokeWidth={1.4} strokeLinecap="round" />
        </svg>
      );
    case "building":
      return (
        <svg viewBox={vb} className={className} width={56} height={44} aria-hidden>
          <path d="M16 38V14h12v24M28 38V10h16v28H16" stroke={s} strokeWidth={w} fill="none" strokeLinejoin="round" />
          <path d="M20 20h4M32 20h4M32 26h4M32 32h4" stroke={s} strokeWidth={1.3} strokeLinecap="round" />
        </svg>
      );
    case "chart":
      return (
        <svg viewBox={vb} className={className} width={56} height={44} aria-hidden>
          <path d="M8 36h40M10 32l10-16 8 10 10-20 8 14" stroke={s} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="40" cy="12" r="2.5" fill={s} />
        </svg>
      );
    case "megaphone":
      return (
        <svg viewBox={vb} className={className} width={56} height={44} aria-hidden>
          <path d="M14 16h8l14-4v24l-14-4h-8V16z" stroke={s} strokeWidth={w} fill="none" strokeLinejoin="round" />
          <path d="M36 14v18M10 22H8a4 4 0 004 4h2" stroke={s} strokeWidth={1.5} strokeLinecap="round" fill="none" />
        </svg>
      );
    case "book":
      return (
        <svg viewBox={vb} className={className} width={56} height={44} aria-hidden>
          <path d="M12 8h14a6 6 0 016 6v24H12V8z" stroke={s} strokeWidth={w} fill="none" />
          <path d="M26 8h14v26H20" stroke={s} strokeWidth={w} fill="none" />
          <path d="M16 16h8M16 22h12M16 28h10" stroke={s} strokeWidth={1.3} strokeLinecap="round" />
        </svg>
      );
    case "envelope":
      return (
        <svg viewBox={vb} className={className} width={56} height={44} aria-hidden>
          <rect x="8" y="12" width="40" height="24" rx="3" stroke={s} strokeWidth={w} fill="none" />
          <path d="M8 16l20 14 20-14" stroke={s} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
    case "compass":
      return (
        <svg viewBox={vb} className={className} width={56} height={44} aria-hidden>
          <circle cx="28" cy="22" r="16" stroke={s} strokeWidth={w} fill="none" />
          <path d="M28 14l3 8 8 3-8 3-3 8-3-8-8-3 8-3 3-8z" stroke={s} strokeWidth={1.4} strokeLinejoin="round" fill="none" />
          <circle cx="28" cy="22" r="2" fill={s} />
        </svg>
      );
    case "clipboard":
      return (
        <svg viewBox={vb} className={className} width={56} height={44} aria-hidden>
          <path d="M18 8h6a4 4 0 018 0h6v30H18V8z" stroke={s} strokeWidth={w} fill="none" strokeLinejoin="round" />
          <path d="M22 14h12" stroke={s} strokeWidth={1.5} strokeLinecap="round" />
          <path d="M22 22h20M22 28h16M22 34h20" stroke={s} strokeWidth={1.3} strokeLinecap="round" />
        </svg>
      );
    case "users":
      return (
        <svg viewBox={vb} className={className} width={56} height={44} aria-hidden>
          <circle cx="20" cy="16" r="5" stroke={s} strokeWidth={w} fill="none" />
          <circle cx="36" cy="16" r="5" stroke={s} strokeWidth={w} fill="none" />
          <path d="M10 38c2-10 10-12 18-12s16 2 18 12M28 38c2-8 8-10 14-10" stroke={s} strokeWidth={w} strokeLinecap="round" fill="none" />
        </svg>
      );
    case "cube":
      return (
        <svg viewBox={vb} className={className} width={56} height={44} aria-hidden>
          <path
            d="M28 8l16 9v18l-16 9-16-9V17l16-9z"
            stroke={s}
            strokeWidth={w}
            strokeLinejoin="round"
            fill="none"
          />
          <path d="M12 17l16 9 16-9M28 26v18" stroke={s} strokeWidth={1.4} strokeLinecap="round" fill="none" />
        </svg>
      );
    case "stairs":
      return (
        <svg viewBox={vb} className={className} width={56} height={44} aria-hidden>
          <path d="M10 38h10V28h10V18h10V8h6v30H10z" stroke={s} strokeWidth={w} fill="none" strokeLinejoin="round" />
          <path d="M14 34h4M24 24h4M34 14h4" stroke={s} strokeWidth={1.2} strokeLinecap="round" />
        </svg>
      );
    case "gear":
      return (
        <svg viewBox={vb} className={className} width={56} height={44} aria-hidden>
          <circle cx="28" cy="22" r="8" stroke={s} strokeWidth={w} fill="none" />
          <path
            d="M28 10v4M28 30v4M40.5 22h-4M19.5 22h-4M37 14l-3 3M22 27l-3 3M37 30l-3-3M22 17l-3-3"
            stroke={s}
            strokeWidth={1.4}
            strokeLinecap="round"
          />
        </svg>
      );
    case "case":
      return (
        <svg viewBox={vb} className={className} width={56} height={44} aria-hidden>
          <rect x="10" y="14" width="36" height="22" rx="2" stroke={s} strokeWidth={w} fill="none" />
          <path d="M18 14v-4a6 6 0 0112 0v4" stroke={s} strokeWidth={w} fill="none" strokeLinecap="round" />
          <path d="M20 24h16M20 30h10" stroke={s} strokeWidth={1.3} strokeLinecap="round" />
        </svg>
      );
    case "strategy":
      return (
        <svg viewBox={vb} className={className} width={56} height={44} aria-hidden>
          <circle cx="16" cy="18" r="6" stroke={s} strokeWidth={w} fill="none" />
          <circle cx="40" cy="14" r="5" stroke={s} strokeWidth={w} fill="none" />
          <circle cx="34" cy="32" r="7" stroke={s} strokeWidth={w} fill="none" />
          <path d="M21 22l10 6M35 19l-4 10M22 30l8-4" stroke={s} strokeWidth={1.3} strokeLinecap="round" />
        </svg>
      );
    case "play":
      return (
        <svg viewBox={vb} className={className} width={56} height={44} aria-hidden>
          <rect x="10" y="10" width="28" height="24" rx="3" stroke={s} strokeWidth={w} fill="none" />
          <path d="M24 17l10 6-10 6V17z" fill={s} stroke={s} strokeWidth={1} strokeLinejoin="round" />
          <path d="M42 14c4 3 4 13 0 16" stroke={s} strokeWidth={1.3} strokeLinecap="round" fill="none" opacity="0.85" />
        </svg>
      );
    default:
      return null;
  }
}
