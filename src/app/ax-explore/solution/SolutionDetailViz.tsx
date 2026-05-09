"use client";

import QualitativeImpactBars from "@/components/ax-viz/QualitativeImpactBars";
import RoadmapTimeline from "@/components/ax-viz/RoadmapTimeline";
import SolutionArchitectureMini from "@/components/ax-viz/SolutionArchitectureMini";
import type { SolutionDetail } from "@/data/detailContent";

const deployPhases = [
  { title: "범위·지표 합의", weeks: "1–2주", detail: "성공 정의와 데이터 접근 범위를 고정합니다." },
  { title: "연동·파일럿", weeks: "4–10주", detail: "핵심 유스케이스를 끝까지 연결해 품질을 검증합니다." },
  { title: "운영 이관", weeks: "2–4주", detail: "모니터링·변경관리·교육을 표준화합니다." },
];

export default function SolutionDetailViz({
  slug,
  detail,
}: {
  slug: string;
  detail: SolutionDetail;
}) {
  const arch: [string, string, string] =
    slug.includes("document") || slug.includes("knowledge")
      ? ["문서·지식 소스", "추론·RAG 레이어", "업무 앱·워크플로"]
      : slug.includes("aicc")
        ? ["채널·CRM", "상담 AI·코칭", "지식·품질 관측"]
        : slug.includes("vision")
          ? ["카메라·센서", "비전 추론", "MES·알림"]
          : ["이벤트·API", "오케스트레이션", "코어 시스템"];

  return (
    <div className="space-y-8">
      <SolutionArchitectureMini labels={arch} />

      <div className="grid gap-4 md:grid-cols-3">
        {[
          { t: "Data flow", d: "원천 → 정제 → 권한 반영 → 응답/자동화 출력" },
          { t: "Integration map", d: "표준 API·이벤트 버스·보안 게이트웨이로 연결" },
          { t: "KPI impact", d: detail.effects.slice(0, 2).join(" · ") },
        ].map((x) => (
          <div key={x.t} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">{x.t}</p>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">{x.d}</p>
          </div>
        ))}
      </div>

      <QualitativeImpactBars
        title="기대 효과 · 운영 지표"
        items={detail.effects}
        tone="violet"
        salt={slug}
      />

      <div className="rounded-xl border border-gray-900 bg-gray-900 p-5 text-white md:p-6">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-red-300/90">Deployment timeline</p>
        <div className="mt-4">
          <RoadmapTimeline phases={deployPhases} />
        </div>
      </div>

      <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-4 text-sm text-gray-700">
        <p className="font-semibold text-gray-900">Fit score logic</p>
        <p className="mt-2 leading-relaxed">
          산업 프리셋 + 관심 과제 + AX 성숙도 + 우선 워크스트림을 입력으로, 솔루션별 가중 스코어를 합산합니다. 세션 기반 맞춤 점수는 AX 컨설팅 진단에서 확인할 수 있습니다.
        </p>
      </div>
    </div>
  );
}
