"use client";

const defaultStages = [
  "탐색",
  "파일럿",
  "부서 확산",
  "전사 표준",
  "Agent 운영",
];

export default function AXMaturityLadder({
  currentStage,
  stageIndex,
  labels = defaultStages,
}: {
  currentStage: string;
  stageIndex: number;
  labels?: readonly string[];
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-5 md:p-6">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">AX maturity ladder</p>
      <p className="mt-2 text-lg font-semibold text-gray-900">
        {currentStage}
        <span className="ml-2 text-sm font-normal text-gray-500">· Stage {stageIndex}/{labels.length}</span>
      </p>
      <ol className="relative mt-6 space-y-0 pl-1">
        <div className="absolute bottom-2 left-[11px] top-2 w-px bg-gradient-to-b from-red-300 via-gray-200 to-gray-100" />
        {labels.map((lab, i) => {
          const active = i + 1 === stageIndex;
          const past = i + 1 < stageIndex;
          return (
            <li key={lab} className="relative flex items-start gap-4 pb-5 last:pb-0">
              <span
                className={`relative z-[1] mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold ${
                  active
                    ? "border-red-600 bg-red-600 text-white shadow-md shadow-red-500/30"
                    : past
                      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                      : "border-gray-200 bg-white text-gray-400"
                }`}
              >
                {i + 1}
              </span>
              <div>
                <p className={`text-sm font-semibold ${active ? "text-gray-900" : "text-gray-600"}`}>{lab}</p>
                {active ? <p className="mt-1 text-xs text-red-700">현재 진단 위치</p> : null}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
