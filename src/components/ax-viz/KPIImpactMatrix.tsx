"use client";

/** 간단 KPI 임팩트 매트릭스: 행=과제, 열=효과 강도(색) */

const cols = ["비용", "속도", "품질", "리스크"] as const;

export default function KPIImpactMatrix({
  rows,
}: {
  rows: { label: string; cells: ("낮음" | "중간" | "높음")[] }[];
}) {
  const tone: Record<string, string> = {
    낮음: "bg-gray-100 text-gray-500",
    중간: "bg-amber-100 text-amber-900",
    높음: "bg-emerald-200 text-emerald-950",
  };
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
      <table className="w-full min-w-[320px] text-left text-xs md:text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-900 text-[10px] font-semibold uppercase tracking-wider text-white/90">
            <th className="px-3 py-3 md:px-4">관점</th>
            {cols.map((c) => (
              <th key={c} className="px-2 py-3 text-center font-semibold">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label} className="border-b border-gray-100 last:border-0">
              <td className="px-3 py-3 font-semibold text-gray-900 md:px-4">{r.label}</td>
              {r.cells.map((cell, i) => (
                <td key={cols[i]} className="px-2 py-2 text-center">
                  <span className={`inline-block min-w-[3.25rem] rounded-md px-2 py-1 text-[10px] font-bold md:text-xs ${tone[cell]}`}>
                    {cell}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
