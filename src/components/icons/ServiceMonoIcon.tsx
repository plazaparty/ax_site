/** KT AX 서비스 단색 아이콘 (큐레이션 카드용) */

export type ServiceIconSlug =
  | "document"
  | "aicc"
  | "agent"
  | "vision"
  | "knowledge"
  | "workflow";

const vb = "0 0 48 40";

export default function ServiceMonoIcon({
  type,
  className = "text-slate-800",
}: {
  type: ServiceIconSlug;
  className?: string;
}) {
  const s = "currentColor";
  switch (type) {
    case "document":
      return (
        <svg viewBox={vb} width="48" height="40" className={className} aria-hidden>
          <path
            d="M10 6h20l8 8v22H10V6z"
            fill="none"
            stroke={s}
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path d="M16 18h16M16 24h12M16 30h14" stroke={s} strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "aicc":
      return (
        <svg viewBox={vb} width="48" height="40" className={className} aria-hidden>
          <path
            d="M10 22c4-8 24-8 28 0"
            fill="none"
            stroke={s}
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <rect x="18" y="10" width="12" height="8" rx="2" stroke={s} strokeWidth="1.6" fill="none" />
          <circle cx="24" cy="28" r="3" fill={s} opacity="0.2" />
        </svg>
      );
    case "agent":
      return (
        <svg viewBox={vb} width="48" height="40" className={className} aria-hidden>
          <circle cx="24" cy="14" r="6" stroke={s} strokeWidth="1.6" fill="none" />
          <path d="M12 32c2-8 22-8 24 0" stroke={s} strokeWidth="1.6" fill="none" strokeLinecap="round" />
          <path d="M18 22h4M26 22h4" stroke={s} strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "vision":
      return (
        <svg viewBox={vb} width="48" height="40" className={className} aria-hidden>
          <rect x="8" y="12" width="32" height="20" rx="3" stroke={s} strokeWidth="1.7" fill="none" />
          <circle cx="24" cy="22" r="5" stroke={s} strokeWidth="1.5" fill="none" />
          <path d="M14 10l4-3M34 10l-4-3" stroke={s} strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "knowledge":
      return (
        <svg viewBox={vb} width="48" height="40" className={className} aria-hidden>
          <ellipse cx="24" cy="14" rx="14" ry="5" stroke={s} strokeWidth="1.6" fill="none" />
          <path d="M10 14v10c0 3 6 5 14 5s14-2 14-5V14" stroke={s} strokeWidth="1.6" fill="none" />
          <path d="M18 22v8M30 22v8" stroke={s} strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "workflow":
      return (
        <svg viewBox={vb} width="48" height="40" className={className} aria-hidden>
          <circle cx="12" cy="20" r="4" stroke={s} strokeWidth="1.6" fill="none" />
          <circle cx="24" cy="12" r="4" stroke={s} strokeWidth="1.6" fill="none" />
          <circle cx="36" cy="20" r="4" stroke={s} strokeWidth="1.6" fill="none" />
          <path d="M16 20h4M28 14l6 4M32 22l-6 4" stroke={s} strokeWidth="1.4" fill="none" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}
