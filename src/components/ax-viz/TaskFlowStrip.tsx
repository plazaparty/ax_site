import { Fragment } from "react";

export default function TaskFlowStrip({
  problem,
  ideas,
  solutions,
  steps,
}: {
  problem: string;
  ideas: string[];
  solutions: string[];
  steps: string[];
}) {
  const ideaPreview = ideas.slice(0, 2).join(" · ");
  const solPreview = solutions.slice(0, 2).join(" · ");
  const stepPreview = steps.slice(0, 2).join(" · ");

  const nodes = [
    { k: "p", title: "문제", body: problem.length > 80 ? `${problem.slice(0, 80)}…` : problem },
    { k: "i", title: "AI 적용", body: ideaPreview + (ideas.length > 2 ? " …" : "") },
    { k: "s", title: "솔루션", body: solPreview + (solutions.length > 2 ? " …" : "") },
    { k: "t", title: "실행 단계", body: stepPreview + (steps.length > 2 ? " …" : "") },
  ];

  return (
    <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50/80 to-white p-6 shadow-sm md:p-8">
      <h2 className="text-lg font-semibold text-gray-900">과제 → 실행 흐름</h2>
      <p className="mt-2 text-xs text-gray-500">텍스트 블록을 한 줄 도식으로 압축했습니다.</p>
      <div className="mt-6 flex flex-col gap-2 md:flex-row md:items-stretch md:gap-2">
        {nodes.map((n, i) => (
          <Fragment key={n.k}>
            <div className="min-w-0 flex-1 rounded-2xl border border-sky-200/80 bg-white/90 px-3 py-3 shadow-sm md:max-w-[14rem]">
              <p className="text-[10px] font-bold uppercase tracking-wider text-sky-700">{n.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-gray-700">{n.body}</p>
            </div>
            {i < nodes.length - 1 ? (
              <div className="flex justify-center py-0.5 text-sky-400 md:flex md:items-center md:py-0 md:text-base">
                <span className="md:hidden" aria-hidden>
                  ↓
                </span>
                <span className="hidden md:inline" aria-hidden>
                  →
                </span>
              </div>
            ) : null}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
