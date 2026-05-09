/** 성공 사례 KPI를 막대 + 원문 값으로 표현 */

function barWidth(label: string, value: string): number {
  const s = `${label}|${value}`;
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 33 + s.charCodeAt(i)) | 0;
  const mag = Math.abs(h) % 55;
  return 38 + mag;
}

export default function KpiStoryBars({
  metrics,
}: {
  metrics: { label: string; value: string }[];
}) {
  if (!metrics.length) return null;

  return (
    <div className="mt-6 space-y-6">
      {metrics.map((m) => {
        const w = barWidth(m.label, m.value);
        return (
          <div key={m.label}>
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{m.label}</p>
              <p className="text-2xl font-semibold tabular-nums tracking-tight text-emerald-950">{m.value}</p>
            </div>
            <div className="mt-2 h-3 overflow-hidden rounded-full bg-emerald-100/80">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-600"
                style={{ width: `${w}%` }}
              />
            </div>
            <p className="mt-1 text-[10px] text-gray-400">표시 강도는 데모용 상대 스케일입니다.</p>
          </div>
        );
      })}
    </div>
  );
}
