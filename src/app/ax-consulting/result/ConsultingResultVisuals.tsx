"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AXMaturityLadder from "@/components/ax-viz/AXMaturityLadder";
import KPIImpactMatrix from "@/components/ax-viz/KPIImpactMatrix";
import PrerequisiteChecklist from "@/components/ax-viz/PrerequisiteChecklist";
import RiskChecklist from "@/components/ax-viz/RiskChecklist";
import RoadmapTimeline from "@/components/ax-viz/RoadmapTimeline";
import SolutionFitBar from "@/components/ax-viz/SolutionFitBar";
import { useConsultModal } from "@/context/ConsultModalContext";
import { roadmapPhases } from "@/lib/buildRecommendations";
import { useConsultingWizardStore } from "@/store/consultingWizardStore";

export default function ConsultingResultVisuals() {
  const { open: openConsultModal } = useConsultModal();
  const router = useRouter();
  const {
    recommendations,
    consultingMeta,
    customerType,
    industry,
    axLevel,
    concerns,
    priorityTask,
    reset,
  } = useConsultingWizardStore();
  const [openId, setOpenId] = useState<string | null>(recommendations[0]?.id ?? null);

  useEffect(() => {
    if (!recommendations.length) router.replace("/ax-consulting");
  }, [recommendations.length, router]);

  if (!recommendations.length) return null;

  const maturity = consultingMeta?.maturity;
  const execLines = consultingMeta?.executiveSummaryLines ?? [];
  const phases = roadmapPhases({ axLevel, industry });

  const matrixRows = useMemo(() => {
    const patterns: ("낮음" | "중간" | "높음")[][] = [
      ["높음", "높음", "중간", "중간"],
      ["중간", "높음", "높음", "중간"],
      ["중간", "중간", "높음", "높음"],
    ];
    return recommendations.map((r, i) => ({
      label: r.name.replace(/^KT\s*/, ""),
      cells: patterns[i % patterns.length],
    }));
  }, [recommendations]);

  const mergedRisks = useMemo(
    () => [...new Set(recommendations.flatMap((r) => r.risks))].slice(0, 6),
    [recommendations]
  );
  const mergedPre = useMemo(
    () => [...new Set(recommendations.flatMap((r) => r.prerequisites))].slice(0, 6),
    [recommendations]
  );
  const mitigations = [
    "데이터 거버넌스·접근 정책을 파일럿 전에 합의",
    "좁은 범위·명확한 성공 지표로 회귀 비용 통제",
    "품질·감사 로그를 운영 KPI에 포함",
    "CoE·변경관리 프로세스를 병행 설계",
  ];

  return (
    <div className="min-h-[100dvh] bg-[#eef0f3] pb-32 pt-8 text-gray-900 md:pb-28 md:pt-10">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <header className="border-b border-gray-300/60 pb-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-red-700">AX Strategy Output</p>
          <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">AX 컨설팅 진단 결과</h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-[15px]">
                입력 신호를 구조화해 <strong className="font-semibold text-gray-800">설명 가능한 추천</strong>과 실행
                로드맵을 한 화면에 배치했습니다.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/ax-consulting/brief"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-gray-300 bg-white px-4 text-sm font-semibold text-gray-900 shadow-sm hover:border-gray-400"
              >
                리포트 다운로드
              </Link>
              <button
                type="button"
                onClick={openConsultModal}
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-gray-900 px-4 text-sm font-semibold text-white hover:bg-gray-800"
              >
                AX 전문가와 상담
              </button>
            </div>
          </div>
        </header>

        <section className="mt-8">
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">선택 요약 프로필</p>
            <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <dt className="text-xs text-gray-500">조직</dt>
                <dd className="font-semibold text-gray-900">{customerType ?? "—"}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">산업</dt>
                <dd className="font-semibold text-gray-900">{industry ?? "—"}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">AX 성숙도</dt>
                <dd className="font-semibold text-gray-900">{axLevel ?? "—"}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">우선 워크스트림</dt>
                <dd className="font-semibold text-gray-900">{priorityTask ?? "—"}</dd>
              </div>
              <div className="sm:col-span-2 lg:col-span-3">
                <dt className="text-xs text-gray-500">관심 과제</dt>
                <dd className="font-medium text-gray-800">{concerns.length ? concerns.join(" · ") : "—"}</dd>
              </div>
            </dl>
          </div>
        </section>

        {execLines.length > 0 ? (
          <section className="mt-6 rounded-xl border border-gray-900 bg-gray-900 px-5 py-5 text-white md:px-6 md:py-6">
            <h2 className="text-[10px] font-semibold uppercase tracking-wider text-red-300/90">Executive snapshot</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/85">
              {execLines.map((line) => (
                <li key={line}>· {line}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {maturity ? (
          <section className="mt-6 grid gap-4 lg:grid-cols-2">
            <AXMaturityLadder currentStage={maturity.stageLabel} stageIndex={maturity.stageIndex} />
            <div className="rounded-xl border border-gray-200 bg-white p-5 md:p-6">
              <h2 className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">조직 국면</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">{maturity.organizationalReadiness}</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">{maturity.transformationGap}</p>
              <h3 className="mt-5 text-[10px] font-semibold uppercase tracking-wider text-gray-500">다음 전환</h3>
              <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-sm text-gray-800">
                {maturity.nextStageRoadmap.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ol>
            </div>
          </section>
        ) : null}

        <section className="mt-10 rounded-xl border border-gray-200 bg-white p-5 md:p-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">추천 솔루션 Top 3</h2>
              <p className="mt-1 text-sm text-gray-600">적합도 막대 · 복잡도는 배포 관점 휴리스틱입니다.</p>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            {recommendations.map((r, i) => (
              <SolutionFitBar key={r.id} name={r.name} percent={r.fitPercent} delay={i * 0.08} />
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">KPI impact matrix</h2>
          <p className="mt-1 text-xs text-gray-500">비용·속도·품질·리스크 관점의 상대 강도입니다.</p>
          <div className="mt-4 max-w-3xl">
            <KPIImpactMatrix rows={matrixRows} />
          </div>
        </section>

        <section className="mt-10 space-y-3">
          <h2 className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">상세 스택</h2>
          {recommendations.map((r, i) => {
            const open = openId === r.id;
            return (
              <motion.article
                key={r.id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(open ? null : r.id)}
                  className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-red-700">Rank {i + 1}</span>
                    <h3 className="mt-1 text-lg font-semibold text-gray-900">{r.name}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-gray-600">{r.whyFit}</p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-1">
                    <span className="rounded-full bg-gray-900 px-2.5 py-1 text-xs font-bold text-white">
                      적합 {r.fitPercent}%
                    </span>
                    <span className="text-[11px] text-gray-500">복잡도 {r.deploymentComplexity}</span>
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-gray-100 bg-[#f7f8fa]"
                    >
                      <div className="grid gap-6 px-5 py-5 md:grid-cols-2 md:px-6 md:py-6">
                        <div className="space-y-4 text-sm">
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">추천 이유</p>
                            <p className="mt-1 text-gray-800">{r.whyFit}</p>
                          </div>
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">기대 효과</p>
                            <p className="mt-1 font-medium text-gray-900">{r.kpiOutlook}</p>
                            <p className="mt-1 text-gray-600">{r.effect}</p>
                          </div>
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">해결 초점</p>
                            <p className="mt-1 text-gray-700">{r.solves}</p>
                          </div>
                        </div>
                        <div className="space-y-4 text-sm">
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">근거 축</p>
                            <ul className="mt-1 list-disc space-y-1 pl-4 text-gray-700">
                              {r.evidenceDrivers.map((e) => (
                                <li key={e}>{e}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">유사 패턴</p>
                            <p className="mt-1 text-gray-700">{r.similarPatterns}</p>
                          </div>
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">일정</p>
                            <p className="mt-1 text-gray-700">{r.timeline}</p>
                            <ol className="mt-2 list-decimal space-y-1 pl-4 text-gray-600">
                              {r.phases.map((p) => (
                                <li key={p}>{p}</li>
                              ))}
                            </ol>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-5 md:p-6">
            <h2 className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">실행 로드맵</h2>
            <div className="mt-4">
              <RoadmapTimeline phases={phases} />
            </div>
          </div>
          <div className="space-y-4">
            <PrerequisiteChecklist items={mergedPre} />
            <RiskChecklist risks={mergedRisks} mitigations={mitigations} />
          </div>
        </section>

        <section className="mt-10 rounded-xl border border-gray-200 bg-white p-5 md:p-6">
          <h2 className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">관련 Use Case</h2>
          <ul className="mt-4 flex flex-wrap gap-3 text-sm">
            {[
              ["/use-case/success/manufacturing-quality", "제조 품질검사"],
              ["/use-case/success/public-civic", "공공 민원 AI"],
              ["/use-case/success/finance-advisory", "금융 상담"],
            ].map(([href, lab]) => (
              <li key={href}>
                <Link className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 font-semibold text-gray-900 hover:border-red-200 hover:bg-red-50" href={href}>
                  {lab}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => {
              reset();
              router.push("/ax-consulting");
            }}
            className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-lg border border-gray-300 bg-white text-sm font-semibold text-gray-800 hover:bg-gray-50"
          >
            세션 재시작
          </button>
        </div>
      </div>
    </div>
  );
}
