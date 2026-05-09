/** 정성 항목(효과·과제 등)을 상대 막대로 표현 — 데모용, 항목 문자열 기반 일관된 길이 */

const tones = {
  rose: { bar: "from-red-500 to-red-600", track: "bg-red-100/80" },
  sky: { bar: "from-sky-500 to-sky-600", track: "bg-sky-100/80" },
  amber: { bar: "from-amber-500 to-amber-600", track: "bg-amber-100/80" },
  violet: { bar: "from-violet-500 to-violet-600", track: "bg-violet-100/80" },
  emerald: { bar: "from-emerald-500 to-emerald-600", track: "bg-emerald-100/80" },
} as const;

export type QualitativeBarTone = keyof typeof tones;

function stablePercent(label: string, salt: string, index: number): number {
  const s = `${salt}:${index}:${label}`;
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const u = Math.abs(h) % 10000;
  return 48 + (u % 42);
}

export default function QualitativeImpactBars({
  title,
  subtitle = "막대 길이는 항목별 상대 강도(데모)이며, 실제 도입 시에는 KPI로 교체합니다.",
  items,
  tone = "rose",
  salt = "",
  surface = "light",
}: {
  title: string;
  subtitle?: string;
  items: string[];
  tone?: QualitativeBarTone;
  salt?: string;
  surface?: "light" | "dark";
}) {
  const t = tones[tone];
  if (!items.length) return null;

  const shell =
    surface === "dark"
      ? "rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-none md:p-8"
      : "rounded-3xl border border-gray-100 bg-gradient-to-br from-white to-gray-50/80 p-6 shadow-sm md:p-8";
  const h2 = surface === "dark" ? "text-lg font-semibold text-white" : "text-lg font-semibold text-gray-900";
  const sub = surface === "dark" ? "text-xs leading-relaxed text-white/50" : "text-xs leading-relaxed text-gray-500";
  const label = surface === "dark" ? "text-sm font-medium leading-snug text-white/90" : "text-sm font-medium leading-snug text-gray-900";
  const trackDark = "bg-white/[0.08]";
  const idxCls = surface === "dark" ? "text-[10px] font-semibold tabular-nums text-white/40" : "text-[10px] font-semibold tabular-nums text-gray-400";

  return (
    <div className={shell}>
      <h2 className={h2}>{title}</h2>
      <p className={sub}>{subtitle}</p>
      <ul className="mt-6 space-y-5">
        {items.map((labelText, i) => {
          const pct = stablePercent(labelText, salt, i);
          return (
            <li key={`${i}-${labelText.slice(0, 48)}`}>
              <p className={label}>{labelText}</p>
              <div
                className={`mt-2 h-2.5 overflow-hidden rounded-full ${surface === "dark" ? trackDark : t.track}`}
              >
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${t.bar}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <p className={`mt-1 ${idxCls}`}>상대 지수 {pct}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
