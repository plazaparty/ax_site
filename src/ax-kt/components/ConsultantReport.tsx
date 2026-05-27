// @ts-nocheck
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { INDUSTRY_SLUG_LABELS, solutionLineHref } from "../consultantLinks";
import { G } from "../theme";
import { USE_CASES } from "../useCaseData";
import ExpertConsultForm from "./ExpertConsultForm";

const SOLUTIONS = {
  AI: {
    name: "AI 솔루션",
    code: "AI",
    color: "#E8002D",
    items: [
      "KT AI Studio",
      "KT AI Agent Studio",
      "KT Knowledge AI",
      "KT Document AI",
      "KT Workflow AI",
      "KT AICC Plus",
      "KT Vision AX",
    ],
  },
  Cloud: {
    name: "Cloud 솔루션",
    code: "CL",
    color: "#0284C7",
    items: ["KT Cloud", "클라우드 마이그레이션"],
  },
  Data: {
    name: "Data 솔루션",
    code: "DT",
    color: "#7C3AED",
    items: ["빅데이터 플랫폼", "KT Data Insight AI"],
  },
  Readiness: {
    name: "AX Readiness",
    code: "AX",
    color: "#059669",
    items: ["AX 진단 서비스", "KT AX Consultant"],
  },
};

const TECH_LABEL: Record<string, string> = {
  llm: "LLM",
  vision: "비전",
  mlops: "MLOps",
  cloud: "클라우드",
  data_platform: "데이터 플랫폼",
  edge: "엣지",
  security: "보안",
  readiness: "AX 진단·전략",
};

const NEEDS_LABEL: Record<string, string> = {
  cost: "비용 절감",
  quality: "품질 향상",
  speed: "속도 향상",
  cx: "고객경험",
  data: "데이터 활용",
  infra: "인프라 현대화",
};

function pickAISolutionItems(ans: Record<string, unknown>) {
  const tech = Array.isArray(ans.tech) ? ans.tech : [];
  const out = new Set<string>();
  out.add("KT AI Studio");
  out.add("KT AI Agent Studio");
  if (tech.includes("llm")) {
    out.add("KT Knowledge AI");
    out.add("KT Document AI");
    out.add("KT Workflow AI");
  }
  if (tech.includes("vision")) out.add("KT Vision AX");
  if (tech.includes("mlops")) out.add("KT AI Studio");
  if (tech.includes("edge")) out.add("KT Vision AX");
  if (tech.includes("security")) out.add("KT Knowledge AI");
  const needs = Array.isArray(ans.needs) ? ans.needs : [];
  if (needs.includes("cx")) out.add("KT AICC Plus");
  if (needs.includes("speed")) out.add("KT Workflow AI");
  if (needs.includes("quality")) out.add("KT Document AI");
  return Array.from(out);
}

function buildAIStrategySection(ans: Record<string, unknown>) {
  const tech = Array.isArray(ans.tech) ? ans.tech : [];
  const needs = Array.isArray(ans.needs) ? ans.needs : [];
  const techLabels = tech.map((t) => TECH_LABEL[t]).filter(Boolean);
  const kpis = [
    needs.includes("cost") ? "처리 비용·인건비 절감" : null,
    needs.includes("quality") ? "정확도·불량/오류율" : null,
    needs.includes("speed") ? "리드타임·처리시간" : null,
    needs.includes("cx") ? "FCR·CSAT·AHT" : null,
    needs.includes("data") ? "데이터 활용률·분석 리드타임" : null,
    needs.includes("infra") ? "가용성·배포 주기" : null,
  ].filter(Boolean);

  return {
    subtitle: techLabels.length ? `관심 기술 · ${techLabels.join(" · ")}` : "현업 성과 중심 제안",
    bullets: [
      {
        h: "우선 적용 시나리오",
        v: "업무 1~2개를 선정해 파일럿을 구성하고, 4~8주 내 운영 KPI로 성공 여부를 검증합니다.",
      },
      {
        h: "필수 데이터·연동",
        v: "문서·상담·업무시스템 데이터를 권한·마스킹 정책과 함께 연결하고, 결과를 CRM·ERP·포털로 라우팅합니다.",
      },
      {
        h: "운영 모델 (HITL)",
        v: "저신뢰·예외 케이스는 담당자에게 전달하고, 품질 평가셋·모델/프롬프트 버전 관리를 운영 절차로 고정합니다.",
      },
      {
        h: "성과 지표 (KPI)",
        v: kpis.length ? kpis.join(" · ") : "정확도 · 처리시간 · 운영비 · 사용자 만족도",
      },
    ],
  };
}

function buildExecutiveSummary(
  industryLabel: string,
  sizeLabel: string,
  maturityLabel: string,
  ans: Record<string, unknown>
) {
  const needs = (Array.isArray(ans.needs) ? ans.needs : [])
    .map((n) => NEEDS_LABEL[n])
    .filter(Boolean);
  const needsPhrase = needs.length ? `${needs.slice(0, 2).join("·")}에 초점을 맞춰` : "핵심 과제에 초점을 맞춰";
  return `${industryLabel} ${sizeLabel}의 ${maturityLabel} 단계 특성을 반영해, ${needsPhrase} AI·플랫폼·운영 거버넌스를 한 흐름으로 설계했습니다. 파일럿 → 검증 → 전사 확산 순으로 투자 리스크를 통제하면서 KPI를 단계별로 달성하는 구조입니다.`;
}

function ReportSection({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="ax-kt-report__section">
      <div className="ax-kt-report__section-head">
        <span className="ax-kt-report__section-num">{num}</span>
        <h4 className="ax-kt-report__section-title">{title}</h4>
      </div>
      {children}
    </section>
  );
}

function MetaTag({ children, tone = "neutral" }: { children: React.ReactNode; tone?: string }) {
  const styles =
    tone === "accent"
      ? "border-red-200/80 bg-red-50/80 text-red-700"
      : tone === "green"
        ? "border-emerald-200/80 bg-emerald-50/80 text-emerald-800"
        : tone === "purple"
          ? "border-violet-200/80 bg-violet-50/80 text-violet-800"
          : "border-gray-200 bg-gray-50 text-gray-700";
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${styles}`}>
      {children}
    </span>
  );
}

export default function ConsultantReport({
  answers,
  onRestart,
}: {
  answers: Record<string, unknown>;
  onRestart: () => void;
}) {
  const [compact, setCompact] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const ans = answers;
  const sizeMap: Record<string, string> = {
    startup: "스타트업",
    smb: "중소기업",
    mid: "중견기업",
    large: "대기업",
    enterprise: "대규모 기업",
  };
  const matMap: Record<string, string> = {
    exploring: "탐색",
    piloting: "파일럿",
    scaling: "확산",
    optimizing: "최적화",
  };
  const score = { exploring: 22, piloting: 45, scaling: 68, optimizing: 85 }[ans.maturity as string] || 30;
  const recSols =
    (ans.tech as string[] | undefined)?.includes("cloud")
      ? ["Cloud", "AI"]
      : (ans.tech as string[] | undefined)?.includes("data_platform")
        ? ["Data", "AI"]
        : ["AI", "Readiness"];

  const industryLabel = INDUSTRY_SLUG_LABELS[ans.industry as string] || String(ans.industry || "");
  const sizeLabel = sizeMap[ans.size as string] || "기업";
  const maturityLabel = matMap[ans.maturity as string] || "탐색";

  const reportId = useMemo(() => {
    const slug = String(ans.industry || "ax").slice(0, 3).toUpperCase();
    const d = new Date();
    const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
    return `KT-AX-${slug}-${ymd}`;
  }, [ans.industry]);

  const relUC = USE_CASES.filter(
    (u) => u.industrySlug === ans.industry || recSols.includes(u.solution)
  ).slice(0, compact ? 3 : 5);

  const budget =
    {
      startup: "3천만~1억",
      smb: "1억~5억",
      mid: "5억~20억",
      large: "20억~80억",
      enterprise: "80억~",
    }[ans.size as string] || "5억~";

  const roadmap = [
    {
      ph: "Phase 1",
      period: "0–4주",
      title: "진단·전략 수립",
      tasks: ["GAP 분석", "우선 과제", "파일럿 범위"],
      color: G.accent,
    },
    {
      ph: "Phase 2",
      period: "1–3개월",
      title: "파일럿·검증",
      tasks: ["MVP 구축", "KPI 측정", "피드백 반영"],
      color: G.purple,
    },
    {
      ph: "Phase 3",
      period: "3–6개월",
      title: "확산·고도화",
      tasks: ["전사 배포", "운영 자동화", "로드맵"],
      color: G.green,
    },
  ];

  const aiSection = buildAIStrategySection(ans);
  const executiveSummary = buildExecutiveSummary(industryLabel, sizeLabel, maturityLabel, ans);

  return (
    <>
      <article className="ax-kt-report">
        <div className="ax-kt-report__stripe" aria-hidden />

        <header className="ax-kt-report__masthead">
          <div className="ax-kt-report__meta">
            <span>KT AX Strategy</span>
            <span>{reportId}</span>
          </div>

          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <h3 className="ax-kt-report__title">
                {industryLabel} {sizeLabel}
                <br />
                <span className="ax-kt-report__title-accent">맞춤형 AX 전략 리포트</span>
              </h3>
              <p className="ax-kt-report__lede">
                5단계 진단 응답을 바탕으로 추천 스택·AI 실행안·로드맵·참고 사례를 1페이지로 정리했습니다.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <MetaTag tone="accent">{industryLabel}</MetaTag>
                <MetaTag tone="purple">{sizeLabel}</MetaTag>
                <MetaTag tone="green">{maturityLabel} 단계</MetaTag>
              </div>
            </div>

            <div
              className="ax-kt-report__score"
              style={{ ["--score-pct" as string]: String(score) }}
              title="AX 성숙도 지수"
            >
              <div className="ax-kt-report__score-ring">
                <span className="ax-kt-report__score-val">{score}</span>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-500">성숙도</span>
            </div>
          </div>
        </header>

        <div className="ax-kt-report__body">
          <ReportSection num="01" title="Executive Summary">
            <p className="ax-kt-report__exec">{executiveSummary}</p>
          </ReportSection>

          <div className="grid gap-5 lg:grid-cols-12">
            <div className="space-y-5 lg:col-span-7">
              <ReportSection num="02" title="추천 AX 솔루션 스택">
                <div className="space-y-2.5">
                  {recSols.map((key) => {
                    const sol = SOLUTIONS[key];
                    const items = key === "AI" ? pickAISolutionItems(ans) : sol.items;
                    const showItems = compact ? items.slice(0, 3) : items;
                    return (
                      <div key={key} className="ax-kt-report__pillar">
                        <div className="flex items-start gap-3">
                          <span
                            className="ax-kt-report__pillar-badge shrink-0"
                            style={{ background: sol.color }}
                          >
                            {sol.code}
                          </span>
                          <div className="min-w-0 flex-1">
                            <Link
                              href={solutionLineHref(sol.name, key)}
                              className="text-[13px] font-bold text-gray-900 no-underline hover:text-red-600"
                            >
                              {sol.name}
                              <span className="ml-1 text-gray-400">→</span>
                            </Link>
                            <ul className="mt-2 grid gap-x-4 gap-y-1 sm:grid-cols-2">
                              {showItems.map((item) => (
                                <li key={item} className="list-none text-[12px] leading-relaxed">
                                  <Link
                                    href={solutionLineHref(item, key)}
                                    className="text-gray-600 no-underline hover:text-red-600"
                                  >
                                    <span className="mr-1.5 text-gray-300">—</span>
                                    {item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </ReportSection>

              {!compact && (
                <ReportSection num="03" title="AI 솔루션 실행 제안">
                  <p className="mb-3 text-[12px] leading-relaxed text-gray-500">{aiSection.subtitle}</p>
                  <div className="rounded-xl border border-gray-200 bg-white px-1 py-0.5">
                    {aiSection.bullets.map((b) => (
                      <div key={b.h} className="ax-kt-report__dl-row">
                        <dt className="ax-kt-report__dl-term">{b.h}</dt>
                        <dd className="ax-kt-report__dl-desc">{b.v}</dd>
                      </div>
                    ))}
                  </div>
                </ReportSection>
              )}
            </div>

            <div className="space-y-5 lg:col-span-5">
              <ReportSection num={compact ? "03" : "04"} title="실행 로드맵">
                <div className="ax-kt-report__timeline">
                  {roadmap.map((r) => (
                    <div key={r.ph} className="ax-kt-report__phase">
                      <p className="ax-kt-report__phase-label" style={{ color: r.color }}>
                        {r.ph} · {r.period}
                      </p>
                      <p className="ax-kt-report__phase-title">{r.title}</p>
                      <p className="ax-kt-report__phase-tasks">{r.tasks.join(" · ")}</p>
                    </div>
                  ))}
                </div>
              </ReportSection>

              {!compact && (
                <>
                  <ReportSection num="05" title="투자·거버넌스">
                    <dl className="rounded-xl border border-gray-200 bg-white px-3 py-1">
                      {[
                        ["초기 구축", budget],
                        ["연간 운영", "초기의 20–30%"],
                        ["예상 ROI", "투자 대비 3–5배"],
                        ["거버넌스", "데이터·보안·품질 KPI"],
                      ].map(([label, value]) => (
                        <div key={label} className="flex justify-between gap-3 border-b border-gray-100 py-2.5 text-[12px] last:border-0">
                          <dt className="text-gray-500">{label}</dt>
                          <dd className="font-semibold text-gray-900">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </ReportSection>

                  <ReportSection num="06" title="리스크·완화">
                    <ul className="space-y-2 text-[12px] leading-relaxed text-gray-600">
                      {[
                        "파일럿 전 데이터 품질·접근 권한·감사 로그 합의",
                        "좁은 범위 PoC로 회귀 비용·일정 리스크 통제",
                        "운영 KPI를 성공 기준에 포함해 확산 게이트 설정",
                      ].map((line) => (
                        <li key={line} className="flex gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red-500" />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </ReportSection>
                </>
              )}

              <ReportSection num={compact ? "04" : "07"} title="참고 Use Case">
                <div className="space-y-2">
                  {relUC.map((uc) => (
                    <Link key={uc.id} href={`/ax-kt/detail/use-case/${uc.id}`} className="ax-kt-report__uc-row">
                      <span className="text-xl leading-none" aria-hidden>
                        {uc.img}
                      </span>
                      <div className="min-w-0">
                        <p className="text-[13px] font-semibold leading-snug text-gray-900">{uc.title}</p>
                        <p className="mt-0.5 text-[11px] font-semibold text-red-600">{uc.roi}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </ReportSection>
            </div>
          </div>
        </div>

        <footer className="ax-kt-report__footer">
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="flex-1 rounded-xl py-2.5 text-[13px] font-bold text-white shadow-sm"
            style={{ background: G.accent }}
          >
            전문가 상담 신청
          </button>
          <button
            type="button"
            onClick={() => setCompact((c) => !c)}
            className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-[13px] font-semibold text-gray-700"
          >
            {compact ? "전체 보기" : "요약 보기"}
          </button>
          <button
            type="button"
            onClick={onRestart}
            className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-[13px] font-semibold text-gray-500"
          >
            처음으로
          </button>
          <p className="ax-kt-report__footnote">
            본 리포트는 진단 응답 기반 자동 생성 초안이며, 실제 도입 범위·예산·일정은 전문가 상담 후 확정됩니다.
          </p>
        </footer>
      </article>

      {showForm ? <ExpertConsultForm onClose={() => setShowForm(false)} /> : null}
    </>
  );
}
