"use client";

import Link from "next/link";
import BeforeAfterProcess from "@/components/ax-viz/BeforeAfterProcess";
import KpiStoryBars from "@/components/ax-viz/KpiStoryBars";
import SolutionArchitectureMini from "@/components/ax-viz/SolutionArchitectureMini";
import UseCaseCausalFlow from "@/components/ax-viz/UseCaseCausalFlow";
import { type SuccessStory } from "@/data/useCaseStories";

export default function UseCaseDetailView({ slug, story }: { slug: string; story: SuccessStory }) {
  const before = story.legacyProcess ?? ["수기·분산 시스템", "표준 부족", "사후 대응"];
  const after = story.modernProcess ?? ["자동화·표준", "근거 축적", "선제 대응"];
  const arch = story.architectureFlow ?? ["데이터 소스", "KT AX 레이어", "업무 시스템"];
  const similar = story.similarIndustries ?? [];

  return (
    <>
      <UseCaseCausalFlow problem={story.customerProblem} solution={story.solution} effect={story.outcome} />

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-gray-900">Before / After 프로세스</h2>
        <p className="mt-2 text-sm text-gray-600">운영 관점에서 무엇이 바뀌었는지 압축했습니다.</p>
        <div className="mt-6">
          <BeforeAfterProcess before={before} after={after} />
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-gray-900 bg-gray-900 p-6 text-white">
        <h2 className="text-lg font-semibold">적용 솔루션 구조</h2>
        <div className="mt-4">
          <SolutionArchitectureMini labels={arch} />
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">AX 적용 포인트</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {(story.axApplicationPoints ?? story.process).map((p) => (
              <li key={p} className="flex gap-2">
                <span className="font-bold text-red-600">·</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">운영 방식</h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-700">{story.operationModel ?? story.quote}</p>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50/80 to-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">KPI 변화</h2>
        <p className="mt-2 text-sm text-gray-600">지표별 변화 방향을 막대 길이로 함께 표시했습니다.</p>
        <KpiStoryBars metrics={story.metrics} />
      </section>

      {similar.length ? (
        <section className="mt-10 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">유사 산업</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {similar.map((x) => (
              <span key={x} className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-800">
                {x}
              </span>
            ))}
          </div>
        </section>
      ) : null}

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href={`/ax-consulting?ref=${encodeURIComponent(slug)}`}
          className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-2xl bg-gray-900 px-5 text-sm font-semibold text-white hover:bg-gray-800 sm:flex-none"
        >
          이 사례와 유사한 내 상황 진단하기
        </Link>
        <Link href="/use-case" className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-2xl border border-gray-200 px-5 text-sm font-semibold text-gray-900 hover:bg-gray-50 sm:flex-none">
          사례 라이브러리
        </Link>
      </div>
    </>
  );
}
