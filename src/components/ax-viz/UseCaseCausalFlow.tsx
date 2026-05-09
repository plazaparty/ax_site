"use client";

export default function UseCaseCausalFlow({
  problem,
  solution,
  effect,
}: {
  problem: string;
  solution: string;
  effect: string;
}) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-stretch">
      {[
        { k: "문제", v: problem, cls: "border-gray-200 bg-gray-50" },
        { k: "솔루션", v: solution, cls: "border-red-200 bg-red-50/60" },
        { k: "효과", v: effect, cls: "border-emerald-200 bg-emerald-50/50" },
      ].map((b, i) => (
        <div key={b.k} className="flex flex-1 items-center gap-2 md:flex-col md:items-stretch">
          <div className={`flex-1 rounded-xl border p-4 ${b.cls}`}>
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">{b.k}</p>
            <p className="mt-2 text-sm font-medium leading-relaxed text-gray-900">{b.v}</p>
          </div>
          {i < 2 ? (
            <span className="hidden text-xl font-bold text-gray-300 md:block md:pt-16" aria-hidden>
              →
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
