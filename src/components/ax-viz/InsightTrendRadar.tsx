"use client";

/** 5축 레이더 스타일 — CSS bar로 모바일 대응 */

export default function InsightTrendRadar({
  axes,
}: {
  axes: readonly { id: string; label: string; value: number }[];
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 md:p-6">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">Trend radar</p>
      <p className="mt-1 text-sm text-gray-600">관심도·투자 시그널 (내부 큐레이션 지수)</p>
      <ul className="mt-6 space-y-3">
        {axes.map((a) => (
          <li key={a.id}>
            <div className="flex justify-between text-xs font-semibold text-gray-800">
              <span>{a.label}</span>
              <span className="tabular-nums text-gray-500">{a.value}</span>
            </div>
            <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-gray-700 to-red-600"
                style={{ width: `${a.value}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
