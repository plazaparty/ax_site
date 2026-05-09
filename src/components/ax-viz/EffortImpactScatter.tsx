"use client";

/** 도입 난이도(복잡도) vs 기대효과 2x2 — 점 위치는 휴리스틱 */

export default function EffortImpactScatter({
  points,
}: {
  points: { id: string; label: string; effort: number; impact: number; note?: string }[];
}) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-4 md:p-5">
      <div className="absolute left-4 right-4 top-4 text-[9px] font-semibold uppercase text-gray-400 md:left-5 md:right-5 md:top-5">
        <span className="float-left">난이도 낮음</span>
        <span className="float-right">난이도 높음</span>
      </div>
      <div className="absolute bottom-4 left-4 top-12 flex flex-col justify-between text-[9px] font-semibold uppercase text-gray-400 md:bottom-5 md:left-5 md:top-14">
        <span>효과 높음</span>
        <span>효과 보통</span>
        <span>효과 낮음</span>
      </div>
      <div className="absolute inset-10 rounded-lg border border-dashed border-gray-200 bg-white/60 md:inset-12" />
      <div className="absolute inset-10 md:inset-12">
        {points.map((p) => (
          <div
            key={p.id}
            title={p.note}
            className="absolute flex min-w-[4.5rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-full border border-gray-900 bg-gray-900 px-2 py-1 text-center text-[9px] font-bold text-white shadow-md md:min-w-[5.5rem] md:px-3 md:text-[10px]"
            style={{
              left: `${12 + p.effort * 76}%`,
              top: `${12 + (1 - p.impact) * 76}%`,
            }}
          >
            <span className="line-clamp-2 leading-tight">{p.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
