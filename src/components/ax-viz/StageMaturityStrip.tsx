const STAGES = [
  { slug: "start", label: "시작" },
  { slug: "expand", label: "확장" },
  { slug: "enterprise", label: "전사" },
  { slug: "agent", label: "Agent" },
] as const;

export default function StageMaturityStrip({ activeSlug }: { activeSlug: string }) {
  const idx = STAGES.findIndex((s) => s.slug === activeSlug);

  return (
    <div className="rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50/90 to-white p-6 shadow-sm md:p-8">
      <h2 className="text-lg font-semibold text-gray-900">성숙도 래더에서의 위치</h2>
      <p className="mt-2 text-xs text-gray-500">
        현재 페이지 단계를 강조했습니다. 실제 조직 성숙도는 AX 컨설팅 진단으로 보정합니다.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        {STAGES.flatMap((s, i) => {
          const on = i === idx;
          const past = idx >= 0 && i < idx;
          const pill = (
            <div
              key={s.slug}
              className={`min-w-[4.5rem] rounded-2xl border px-3 py-3 text-center sm:min-w-[5.5rem] ${
                on
                  ? "border-amber-500 bg-white shadow-md ring-2 ring-amber-200/80"
                  : past
                    ? "border-amber-200/80 bg-amber-50/70 text-gray-800"
                    : "border-gray-200/90 bg-white/90 text-gray-500"
              }`}
            >
              <p className="text-[10px] font-bold uppercase tracking-wider text-amber-800/70">단계 {i + 1}</p>
              <p className={`mt-1 text-sm font-semibold ${on ? "text-gray-900" : ""}`}>{s.label}</p>
            </div>
          );
          if (i === STAGES.length - 1) return [pill];
          return [
            pill,
            <span key={`sep-${s.slug}`} className="text-lg font-light text-amber-400" aria-hidden>
              →
            </span>,
          ];
        })}
      </div>
    </div>
  );
}
