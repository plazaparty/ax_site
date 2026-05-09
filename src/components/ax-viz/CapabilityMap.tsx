"use client";

import Link from "next/link";

/** 솔루션 역량 맵 — 2x2 간단 쿼드런트 */
export default function CapabilityMap({
  items,
}: {
  items: { id: string; label: string; x: number; y: number; href?: string }[];
}) {
  return (
    <div className="relative aspect-[16/11] w-full max-w-2xl rounded-xl border border-gray-200 bg-gradient-to-br from-slate-50 to-white p-4 md:p-6">
      <div className="absolute inset-8 rounded-lg border border-dashed border-gray-200/80 md:inset-10" />
      <span className="absolute left-3 top-2 text-[9px] font-semibold uppercase tracking-wider text-gray-400 md:left-4 md:top-3">
        통합 복잡도 ↑
      </span>
      <span className="absolute bottom-2 right-3 text-[9px] font-semibold uppercase tracking-wider text-gray-400 md:bottom-3 md:right-4">
        비즈니스 임팩트 →
      </span>
      {items.map((it) => (
        <Link
          key={it.id}
          href={it.href ?? "/ax-explore#ax-explore-axis-solution"}
          className="absolute flex max-w-[38%] -translate-x-1/2 -translate-y-1/2 flex-col rounded-lg border border-gray-200 bg-white px-2 py-1.5 text-center text-[10px] font-semibold text-gray-800 shadow-sm transition hover:border-red-300 hover:shadow md:max-w-[32%] md:px-3 md:py-2 md:text-xs"
          style={{ left: `${20 + it.x * 60}%`, top: `${22 + (1 - it.y) * 56}%` }}
        >
          {it.label}
        </Link>
      ))}
    </div>
  );
}
