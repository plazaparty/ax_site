"use client";

export default function RiskChecklist({
  risks,
  mitigations,
}: {
  risks: string[];
  mitigations: string[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-xl border border-amber-200/80 bg-amber-50/50 p-4 md:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-amber-900">도입 리스크</p>
        <ul className="mt-3 space-y-2 text-sm text-amber-950/90">
          {risks.map((r) => (
            <li key={r} className="flex gap-2">
              <span className="text-amber-600">▸</span>
              {r}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/40 p-4 md:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-900">대응 방안</p>
        <ul className="mt-3 space-y-2 text-sm text-emerald-950/90">
          {mitigations.map((m) => (
            <li key={m} className="flex gap-2">
              <span className="text-emerald-600">✓</span>
              {m}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
