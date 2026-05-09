"use client";

/** 미니 아키텍처: 소스 → AX 레이어 → 업무 시스템 */
export default function SolutionArchitectureMini({ labels }: { labels: [string, string, string] }) {
  const [left, mid, right] = labels;
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900 p-4 text-white md:p-5">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-red-300/90">Architecture mini</p>
      <div className="mt-4 flex flex-col items-stretch gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex-1 rounded-lg border border-white/15 bg-white/5 px-3 py-3 text-center text-xs font-semibold">{left}</div>
        <span className="hidden text-white/30 md:block">→</span>
        <div className="flex-1 rounded-lg border border-red-500/40 bg-red-500/15 px-3 py-3 text-center text-xs font-semibold text-red-100">
          {mid}
        </div>
        <span className="hidden text-white/30 md:block">→</span>
        <div className="flex-1 rounded-lg border border-white/15 bg-white/5 px-3 py-3 text-center text-xs font-semibold">{right}</div>
      </div>
    </div>
  );
}
