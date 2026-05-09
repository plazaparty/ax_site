"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { mailtoConsult } from "@/data/siteNav";
import { roadmapPhases } from "@/lib/buildRecommendations";
import { useConsultingWizardStore } from "@/store/consultingWizardStore";

function buildBriefMarkdown(): string {
  const s = useConsultingWizardStore.getState();
  const lines: string[] = [];
  lines.push("# KT AX Strategy Brief");
  lines.push("");
  lines.push(`- 고객 유형: ${s.customerType ?? "—"}`);
  lines.push(`- 산업: ${s.industry ?? "—"}`);
  lines.push(`- AX 성숙도: ${s.axLevel ?? "—"}`);
  lines.push(`- 관심 과제: ${s.concerns.length ? s.concerns.join(", ") : "—"}`);
  lines.push(`- 우선 업무: ${s.priorityTask ?? "—"}`);
  if (s.freeText.trim()) lines.push(`- 추가 맥락: ${s.freeText.trim()}`);
  lines.push("");
  if (s.consultingMeta?.executiveSummaryLines?.length) {
    lines.push("## Executive summary");
    s.consultingMeta.executiveSummaryLines.forEach((l) => lines.push(`- ${l}`));
    lines.push("");
  }
  if (s.consultingMeta?.maturity) {
    const m = s.consultingMeta.maturity;
    lines.push("## AX maturity");
    lines.push(`- Stage: ${m.stageLabel} (${m.stageIndex}/5)`);
    lines.push(`- 조직 준비도: ${m.organizationalReadiness}`);
    lines.push(`- 전환 갭: ${m.transformationGap}`);
    lines.push("- 다음 단계:");
    m.nextStageRoadmap.forEach((x) => lines.push(`  - ${x}`));
    lines.push("");
  }
  const timeline = roadmapPhases({ axLevel: s.axLevel, industry: s.industry });
  lines.push("## Execution timeline (illustrative)");
  timeline.forEach((p) => {
    lines.push(`- **${p.title}** (${p.weeks}): ${p.detail}`);
  });
  lines.push("");

  if (s.consultingMeta?.poc) {
    const p = s.consultingMeta.poc;
    lines.push("## PoC readiness");
    lines.push(`- Score: ${p.score}/100`);
    lines.push(`- ${p.headline}`);
    lines.push("- 가속 요인:");
    p.enablers.forEach((e) => lines.push(`  - ${e}`));
    lines.push("- 주의 요인:");
    p.blockers.forEach((e) => lines.push(`  - ${e}`));
    lines.push("");
  }
  lines.push("## Recommended solutions (ranked)");
  s.recommendations.forEach((r, i) => {
    lines.push(`### ${i + 1}. ${r.name} (적합 ${r.fitPercent}%)`);
    lines.push(r.whyFit);
    lines.push("");
    lines.push(`- 비즈니스 맥락: ${r.businessContext}`);
    lines.push(`- 해결 초점: ${r.solves}`);
    lines.push(`- KPI 전망: ${r.kpiOutlook}`);
    lines.push(`- 효과: ${r.effect}`);
    lines.push(`- 배포 복잡도: ${r.deploymentComplexity}`);
    lines.push(`- 일정 감각: ${r.timeline}`);
    lines.push("- 근거 축:");
    r.evidenceDrivers.forEach((e) => lines.push(`  - ${e}`));
    lines.push("- 리스크:");
    r.risks.forEach((e) => lines.push(`  - ${e}`));
    lines.push("- 선행 조건:");
    r.prerequisites.forEach((e) => lines.push(`  - ${e}`));
    lines.push(`- ROI 논리: ${r.roiReasoning}`);
    lines.push(`- 유사 패턴: ${r.similarPatterns}`);
    lines.push("- 단계:");
    r.phases.forEach((p) => lines.push(`  - ${p}`));
    lines.push("");
  });
  lines.push("---");
  lines.push("_본 문서는 세션 입력 기반 자동 초안입니다. 최종 제안은 KT AX 컨설턴트 검토 후 확정됩니다._");
  return lines.join("\n");
}

export default function ConsultingBriefPage() {
  const router = useRouter();
  const {
    recommendations,
    consultingMeta,
    customerType,
    industry,
    axLevel,
    concerns,
    priorityTask,
    freeText,
  } = useConsultingWizardStore();

  useEffect(() => {
    if (!recommendations.length) router.replace("/ax-consulting");
  }, [recommendations.length, router]);

  if (!recommendations.length) return null;

  const maturity = consultingMeta?.maturity;
  const poc = consultingMeta?.poc;
  const execLines = consultingMeta?.executiveSummaryLines ?? [];

  const downloadMd = () => {
    const blob = new Blob([buildBriefMarkdown()], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `KT-AX-Strategy-Brief-${new Date().toISOString().slice(0, 10)}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const printPdf = () => {
    window.print();
  };

  const handoffBody = encodeURIComponent(
    `AX Strategy Brief 요청\n\n${execLines.map((l) => `· ${l}`).join("\n")}\n\n상세: /ax-consulting/brief 에서보낸 마크다운 첨부 예정`
  );
  const handoffHref = `${mailtoConsult}&body=${handoffBody}`;

  return (
    <div className="min-h-[100dvh] bg-[#f4f5f7] pb-32 pt-8 text-gray-900 print:bg-white print:pb-8 md:pb-16 md:pt-10">
      <div className="mx-auto max-w-3xl px-4 md:px-8 print:max-w-none">
        <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-red-600">Export</p>
            <h1 className="mt-1 text-xl font-semibold md:text-2xl">AX Strategy Brief</h1>
            <p className="mt-1 text-sm text-gray-600">
              인쇄(PDF 저장) 또는 마크다운 다운로드. 내부 공유·RFP 부록용 초안입니다.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={downloadMd}
              className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold shadow-sm hover:bg-gray-50"
            >
              .md 다운로드
            </button>
            <button
              type="button"
              onClick={printPdf}
              className="rounded-lg bg-gray-900 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-800"
            >
              PDF로 저장 (인쇄)
            </button>
            <a
              href={handoffHref}
              className="inline-flex items-center rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-800 hover:bg-red-100"
            >
              컨설턴트 핸드오프
            </a>
            <Link
              href="/ax-consulting/result"
              className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900"
            >
              ← 결과
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm print:border-0 print:shadow-none md:p-10">
          <header className="border-b border-gray-200 pb-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">KT Enterprise AX</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">AX Strategy Brief</h2>
            <p className="mt-2 text-sm text-gray-600">세션 입력 기반 자동 초안 · {new Date().toLocaleDateString("ko-KR")}</p>
          </header>

          <section className="mt-8">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">Discovery inputs</h3>
            <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-gray-500">고객 유형</dt>
                <dd className="font-medium text-gray-900">{customerType ?? "—"}</dd>
              </div>
              <div>
                <dt className="text-gray-500">산업</dt>
                <dd className="font-medium text-gray-900">{industry ?? "—"}</dd>
              </div>
              <div>
                <dt className="text-gray-500">AX 성숙도</dt>
                <dd className="font-medium text-gray-900">{axLevel ?? "—"}</dd>
              </div>
              <div>
                <dt className="text-gray-500">우선 업무</dt>
                <dd className="font-medium text-gray-900">{priorityTask ?? "—"}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-gray-500">관심 과제</dt>
                <dd className="font-medium text-gray-900">{concerns.length ? concerns.join(" · ") : "—"}</dd>
              </div>
              {freeText.trim() ? (
                <div className="sm:col-span-2">
                  <dt className="text-gray-500">추가 맥락</dt>
                  <dd className="text-gray-800">{freeText.trim()}</dd>
                </div>
              ) : null}
            </dl>
          </section>

          {execLines.length ? (
            <section className="mt-10">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">Executive summary</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-800">
                {execLines.map((l) => (
                  <li key={l}>· {l}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {maturity ? (
            <section className="mt-10">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">AX maturity diagnosis</h3>
              <p className="mt-2 text-lg font-semibold text-gray-900">
                {maturity.stageLabel}{" "}
                <span className="text-sm font-normal text-gray-500">Stage {maturity.stageIndex}/5</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">{maturity.organizationalReadiness}</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">{maturity.transformationGap}</p>
              <h4 className="mt-5 text-xs font-semibold uppercase tracking-wider text-gray-500">Next-stage roadmap</h4>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-gray-800">
                {maturity.nextStageRoadmap.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ol>
            </section>
          ) : null}

          <section className="mt-10">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Execution timeline (illustrative)
            </h3>
            <ol className="mt-3 space-y-3 text-sm text-gray-800">
              {roadmapPhases({ axLevel, industry }).map((p) => (
                <li key={p.title} className="border-l-2 border-red-200 pl-4">
                  <span className="font-semibold text-gray-900">{p.title}</span>
                  <span className="ml-2 text-xs font-semibold text-red-700">{p.weeks}</span>
                  <p className="mt-1 text-gray-600">{p.detail}</p>
                </li>
              ))}
            </ol>
          </section>

          {poc ? (
            <section className="mt-10 rounded-lg border border-gray-100 bg-gray-50 p-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">PoC readiness</h3>
              <p className="mt-2 text-3xl font-semibold tabular-nums text-gray-900">{poc.score}</p>
              <p className="text-xs text-gray-500">/ 100</p>
              <p className="mt-3 text-sm text-gray-700">{poc.headline}</p>
              <div className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
                <div>
                  <p className="text-[11px] font-semibold uppercase text-emerald-800">Enablers</p>
                  <ul className="mt-1 space-y-1 text-gray-700">
                    {poc.enablers.map((e) => (
                      <li key={e}>+ {e}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase text-amber-800">Blockers</p>
                  <ul className="mt-1 space-y-1 text-gray-700">
                    {poc.blockers.map((e) => (
                      <li key={e}>− {e}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ) : null}

          <section className="mt-10 break-inside-avoid">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">Recommended solutions</h3>
            <div className="mt-4 space-y-8">
              {recommendations.map((r, i) => (
                <article key={r.id} className="border-t border-gray-100 pt-6 first:border-t-0 first:pt-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-base font-semibold text-gray-900">
                      {i + 1}. {r.name}
                    </h4>
                    <span className="text-sm font-semibold text-red-700">적합 {r.fitPercent}% · 복잡도 {r.deploymentComplexity}</span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-800">{r.whyFit}</p>
                  <p className="mt-2 text-sm text-gray-700">{r.businessContext}</p>
                  <div className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
                    <div>
                      <p className="text-[11px] font-semibold uppercase text-gray-500">Evidence</p>
                      <ul className="mt-1 list-disc space-y-0.5 pl-4 text-gray-700">
                        {r.evidenceDrivers.map((e) => (
                          <li key={e}>{e}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase text-gray-500">ROI & KPI</p>
                      <p className="mt-1 text-gray-800">{r.roiReasoning}</p>
                      <p className="mt-2 font-medium text-gray-900">{r.kpiOutlook}</p>
                      <p className="text-gray-600">{r.effect}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase text-amber-800">Risks</p>
                      <ul className="mt-1 list-disc space-y-0.5 pl-4 text-gray-700">
                        {r.risks.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase text-emerald-800">Prerequisites</p>
                      <ul className="mt-1 list-disc space-y-0.5 pl-4 text-gray-700">
                        {r.prerequisites.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-600">
                    <span className="font-semibold text-gray-700">유사 패턴:</span> {r.similarPatterns}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    <span className="font-semibold text-gray-700">일정:</span> {r.timeline}
                  </p>
                  <ol className="mt-2 list-decimal space-y-0.5 pl-5 text-sm text-gray-700">
                    {r.phases.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ol>
                </article>
              ))}
            </div>
          </section>

          <footer className="mt-12 border-t border-gray-200 pt-6 text-xs text-gray-500">
            본 브리핑은 의사결정 보조용입니다. 규제·데이터·보안 요건은 별도 실사가 필요합니다.
          </footer>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
