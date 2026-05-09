/** 미니멀 벡터 일러스트 — 상세 페이지 상단 장식용 */

type Variant =
  | "industry"
  | "task"
  | "stage"
  | "solution"
  | "usecase"
  | "insight"
  | "events";

export default function PageIllustration({
  variant,
  className = "",
}: {
  variant: Variant;
  className?: string;
}) {
  const palettes: Record<
    Variant,
    { a: string; b: string; c: string; stroke: string }
  > = {
    industry: { a: "#fecaca", b: "#f87171", c: "#1e293b", stroke: "#e11d48" },
    task: { a: "#bae6fd", b: "#38bdf8", c: "#0f172a", stroke: "#0284c7" },
    stage: { a: "#fde68a", b: "#fbbf24", c: "#1e293b", stroke: "#d97706" },
    solution: { a: "#e9d5ff", b: "#c084fc", c: "#0f172a", stroke: "#9333ea" },
    usecase: { a: "#bbf7d0", b: "#4ade80", c: "#14532d", stroke: "#16a34a" },
    insight: { a: "#e2e8f0", b: "#94a3b8", c: "#0f172a", stroke: "#64748b" },
    events: { a: "#fed7aa", b: "#fb923c", c: "#431407", stroke: "#ea580c" },
  };
  const p = palettes[variant];

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 400 200"
        className="h-auto w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`g-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={p.a} />
            <stop offset="55%" stopColor={p.b} />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
        <rect width="400" height="200" fill={`url(#g-${variant})`} />
        <circle cx="72" cy="48" r="36" fill={p.b} opacity="0.35" />
        <rect
          x="220"
          y="36"
          width="140"
          height="88"
          rx="16"
          fill="white"
          opacity="0.9"
          stroke={p.stroke}
          strokeWidth="1.5"
        />
        <rect x="240" y="58" width="72" height="8" rx="4" fill={p.c} opacity="0.15" />
        <rect x="240" y="76" width="100" height="8" rx="4" fill={p.c} opacity="0.1" />
        <rect x="240" y="94" width="56" height="8" rx="4" fill={p.c} opacity="0.12" />
        <path
          d="M48 148 Q120 108 200 132 T360 124"
          fill="none"
          stroke={p.stroke}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.45"
        />
        <circle cx="320" cy="152" r="10" fill={p.stroke} opacity="0.5" />
        <circle cx="348" cy="140" r="6" fill={p.c} opacity="0.2" />
      </svg>
    </div>
  );
}
