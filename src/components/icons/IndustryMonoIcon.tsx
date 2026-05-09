/** 단색 심플 라인 일러스트 — 산업별 (currentColor 사용) */

export type IndustryVisualSlug =
  | "public"
  | "finance"
  | "manufacturing"
  | "retail"
  | "healthcare"
  | "telecom";

const SIZE = { w: 56, h: 44, vb: "0 0 56 44" as const };

export default function IndustryMonoIcon({
  industry,
  className = "text-slate-800",
}: {
  industry: IndustryVisualSlug;
  className?: string;
}) {
  const stroke = "currentColor";
  const fill = "none";

  switch (industry) {
    case "finance":
      return (
        <svg
          viewBox={SIZE.vb}
          className={className}
          width={SIZE.w}
          height={SIZE.h}
          aria-hidden
        >
          <rect x="6" y="8" width="44" height="28" rx="3" stroke={stroke} strokeWidth="1.8" fill={fill} />
          <path d="M14 16h28M14 22h20M14 28h24" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="40" cy="14" r="5" fill={stroke} opacity="0.15" />
          <path d="M38 12v4M36 14h4" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case "public":
      return (
        <svg viewBox={SIZE.vb} className={className} width={SIZE.w} height={SIZE.h} aria-hidden>
          <path
            d="M10 36V18L28 10l18 8v18H10z"
            stroke={stroke}
            strokeWidth="1.8"
            fill={fill}
            strokeLinejoin="round"
          />
          <path d="M22 36V26h12v10" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
          <path d="M28 18v5" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "manufacturing":
      return (
        <svg viewBox={SIZE.vb} className={className} width={SIZE.w} height={SIZE.h} aria-hidden>
          <path
            d="M8 34h40M12 34V20l8-4v8l8-6v10l8-5v11"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={fill}
          />
          <rect x="30" y="12" width="10" height="10" rx="1" stroke={stroke} strokeWidth="1.5" fill={fill} />
        </svg>
      );
    case "retail":
      return (
        <svg viewBox={SIZE.vb} className={className} width={SIZE.w} height={SIZE.h} aria-hidden>
          <path
            d="M14 14h28l-2 18H16L14 14z"
            stroke={stroke}
            strokeWidth="1.8"
            fill={fill}
            strokeLinejoin="round"
          />
          <path d="M18 14V12a6 6 0 0112 0v2" stroke={stroke} strokeWidth="1.6" fill={fill} strokeLinecap="round" />
          <circle cx="22" cy="30" r="2" fill={stroke} />
          <circle cx="34" cy="30" r="2" fill={stroke} />
        </svg>
      );
    case "healthcare":
      return (
        <svg viewBox={SIZE.vb} className={className} width={SIZE.w} height={SIZE.h} aria-hidden>
          <rect x="10" y="10" width="36" height="26" rx="4" stroke={stroke} strokeWidth="1.8" fill={fill} />
          <path d="M28 18v10M23 23h10" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "telecom":
      return (
        <svg viewBox={SIZE.vb} className={className} width={SIZE.w} height={SIZE.h} aria-hidden>
          <path
            d="M8 28c6-10 34-10 40 0"
            stroke={stroke}
            strokeWidth="1.8"
            fill={fill}
            strokeLinecap="round"
          />
          <path d="M14 22c4-6 24-6 28 0" stroke={stroke} strokeWidth="1.6" fill={fill} strokeLinecap="round" />
          <path d="M20 16c3-3 13-3 16 0" stroke={stroke} strokeWidth="1.4" fill={fill} strokeLinecap="round" />
          <circle cx="28" cy="32" r="3" fill={stroke} opacity="0.25" />
        </svg>
      );
    default:
      return null;
  }
}
