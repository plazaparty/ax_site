"use client";

export default function PrerequisiteChecklist({ items }: { items: string[] }) {
  return (
    <div className="rounded-xl border border-emerald-200/70 bg-emerald-50/30 p-4 md:p-5">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-900">선행 준비사항</p>
      <ul className="mt-3 space-y-2">
        {items.map((x) => (
          <li key={x} className="flex gap-2 text-sm text-emerald-950/90">
            <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border border-emerald-600/40 bg-white text-[10px] font-bold text-emerald-800">
              ✓
            </span>
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
}
