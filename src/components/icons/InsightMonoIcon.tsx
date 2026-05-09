/** 인사이트 허브용 단색 라인 일러스트 (currentColor) */

export type InsightVisualSlug =
  | "hub"
  | "trends"
  | "tech"
  | "news"
  | "events"
  | "reports"
  | "webinars";

const vb = "0 0 56 44" as const;

export default function InsightMonoIcon({
  type,
  className = "text-slate-800",
}: {
  type: InsightVisualSlug;
  className?: string;
}) {
  const s = "currentColor";
  const w = 1.75;

  switch (type) {
    case "hub":
      return (
        <svg viewBox={vb} className={className} aria-hidden width={56} height={44}>
          <circle cx="28" cy="22" r="5" stroke={s} strokeWidth={w} fill="none" />
          <circle cx="12" cy="14" r="3.5" stroke={s} strokeWidth={w} fill="none" />
          <circle cx="44" cy="14" r="3.5" stroke={s} strokeWidth={w} fill="none" />
          <circle cx="12" cy="32" r="3.5" stroke={s} strokeWidth={w} fill="none" />
          <circle cx="44" cy="32" r="3.5" stroke={s} strokeWidth={w} fill="none" />
          <path
            d="M28 22L12 14M28 22L44 14M28 22L12 32M28 22L44 32"
            stroke={s}
            strokeWidth={w}
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      );
    case "trends":
      return (
        <svg viewBox={vb} className={className} aria-hidden width={56} height={44}>
          <path
            d="M8 34h40M10 30l10-14 8 8 10-18 8 12"
            stroke={s}
            strokeWidth={w}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="38" cy="16" r="2.5" fill={s} />
          <path d="M8 10v6M5 13h6" stroke={s} strokeWidth={1.4} strokeLinecap="round" />
        </svg>
      );
    case "tech":
      return (
        <svg viewBox={vb} className={className} aria-hidden width={56} height={44}>
          <rect x="12" y="10" width="32" height="24" rx="3" stroke={s} strokeWidth={w} fill="none" />
          <rect x="18" y="16" width="8" height="6" rx="1" stroke={s} strokeWidth={1.4} fill="none" />
          <rect x="30" y="16" width="8" height="6" rx="1" stroke={s} strokeWidth={1.4} fill="none" />
          <path d="M22 28h12M26 32h4" stroke={s} strokeWidth={1.4} strokeLinecap="round" />
          <path
            d="M28 6v4M22 8h12"
            stroke={s}
            strokeWidth={1.4}
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      );
    case "news":
      return (
        <svg viewBox={vb} className={className} aria-hidden width={56} height={44}>
          <path
            d="M14 8h22l6 8v22H14V8z"
            stroke={s}
            strokeWidth={w}
            strokeLinejoin="round"
            fill="none"
          />
          <path d="M20 8v8h16" stroke={s} strokeWidth={w} strokeLinejoin="round" fill="none" />
          <path d="M18 24h20M18 30h14M18 36h18" stroke={s} strokeWidth={1.4} strokeLinecap="round" />
        </svg>
      );
    case "events":
      return (
        <svg viewBox={vb} className={className} aria-hidden width={56} height={44}>
          <rect x="10" y="12" width="36" height="26" rx="3" stroke={s} strokeWidth={w} fill="none" />
          <path d="M10 20h36M22 8v6M34 8v6" stroke={s} strokeWidth={w} strokeLinecap="round" />
          <circle cx="22" cy="28" r="1.8" fill={s} />
          <circle cx="28" cy="28" r="1.8" fill={s} />
          <circle cx="34" cy="28" r="1.8" fill={s} />
          <circle cx="22" cy="34" r="1.8" fill={s} />
          <circle cx="28" cy="34" r="1.8" fill={s} />
        </svg>
      );
    case "reports":
      return (
        <svg viewBox={vb} className={className} aria-hidden width={56} height={44}>
          <path
            d="M14 10h20l8 8v20H14V10z"
            stroke={s}
            strokeWidth={w}
            strokeLinejoin="round"
            fill="none"
          />
          <path d="M34 10v8h8" stroke={s} strokeWidth={w} strokeLinejoin="round" fill="none" />
          <path d="M18 22h20M18 28h16M18 34h20" stroke={s} strokeWidth={1.4} strokeLinecap="round" />
          <path d="M38 18v-4h4" stroke={s} strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "webinars":
      return (
        <svg viewBox={vb} className={className} aria-hidden width={56} height={44}>
          <rect x="10" y="10" width="28" height="22" rx="3" stroke={s} strokeWidth={w} fill="none" />
          <path d="M22 17l10 6-10 6V17z" fill={s} stroke={s} strokeWidth={1.2} strokeLinejoin="round" />
          <path
            d="M42 14c4 3 4 13 0 16M46 11c6 5 6 17 0 22"
            stroke={s}
            strokeWidth={1.4}
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
        </svg>
      );
    default:
      return null;
  }
}
