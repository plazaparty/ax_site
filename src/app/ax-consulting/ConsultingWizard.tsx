"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { ConcernLabel, CustomerTypeLabel, WizardStep } from "@/store/consultingWizardStore";
import {
  AX_LEVELS,
  CONCERNS,
  CUSTOMER_TYPES,
  ENTERPRISE_INDUSTRIES,
  PRIORITY_BY_INDUSTRY,
  PUBLIC_INDUSTRIES,
  useConsultingWizardStore,
} from "@/store/consultingWizardStore";
import { buildRecommendations } from "@/lib/buildRecommendations";
import {
  ANALYSIS_TRANSITIONS,
  STEP_WHY,
  buildMaturityDiagnosis,
  buildPocReadiness,
  executiveSummaryLines,
  insightAfterStep1,
  insightAfterStep2,
  insightAfterStep3,
  insightAfterStep4,
  insightAfterStep5,
} from "@/lib/consultingStrategy";
import ConsultantThinkingPanel from "@/components/ax-viz/ConsultantThinkingPanel";

const TOTAL_STEPS = 6;

const ENGINE_BY_STEP: Partial<Record<number, string>> = {
  2: "산업별 AX 성공 패턴과 비교 중입니다…",
  3: "현재 AX 성숙도를 분석 중입니다…",
  4: "고ROI 업무 후보를 탐색 중입니다…",
  5: "워크스트림 우선순위를 재정렬 중입니다…",
  6: "AX 컨설팅 리포트를 위한 정성 맥락을 수집 중입니다…",
};

export default function ConsultingWizard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const hydratedQuery = useRef(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisIdx, setAnalysisIdx] = useState(0);

  const {
    step,
    customerType,
    industry,
    axLevel,
    concerns,
    priorityTask,
    freeText,
    setStep,
    setCustomerType,
    setIndustry,
    setAxLevel,
    toggleConcern,
    setPriorityTask,
    setFreeText,
    setRecommendations,
    setConsultingMeta,
    reset,
  } = useConsultingWizardStore();

  useEffect(() => {
    if (hydratedQuery.current) return;
    const q = (searchParams.get("query") ?? "").trim();
    if (q) {
      setFreeText(q);
      hydratedQuery.current = true;
    }
  }, [searchParams, setFreeText]);

  useEffect(() => {
    if (!analyzing) return;
    const t = setInterval(() => {
      setAnalysisIdx((i) => (i + 1) % ANALYSIS_TRANSITIONS.length);
    }, 1400);
    return () => clearInterval(t);
  }, [analyzing]);

  const progress = Math.round((step / TOTAL_STEPS) * 100);
  const isPublicOrg = customerType === "공공기관";
  const industries = isPublicOrg ? [...PUBLIC_INDUSTRIES] : [...ENTERPRISE_INDUSTRIES];
  const priorities = industry ? [...(PRIORITY_BY_INDUSTRY[industry] ?? [])] : [];

  function nextFromStep4() {
    if (concerns.length === 0) return;
    setStep(5);
  }

  function finish() {
    setAnalyzing(true);
    window.setTimeout(() => {
      const rec = buildRecommendations({
        industry,
        concerns,
        priorityTask,
        customerType,
        axLevel,
        freeText,
      });
      const maturity = buildMaturityDiagnosis({
        axLevel,
        industry,
        customerType,
      });
      const poc = buildPocReadiness({ axLevel, concerns, freeText });
      const execLines = executiveSummaryLines({
        customerType,
        industry,
        axLevel,
        concerns,
        priorityTask,
      });
      setRecommendations(rec);
      setConsultingMeta({ maturity, poc, executiveSummaryLines: execLines });
      setAnalyzing(false);
      router.push("/ax-consulting/result");
    }, 2200);
  }

  function skipFreeText() {
    finish();
  }

  const dynamicInsight =
    step === 2 && customerType
      ? insightAfterStep1(customerType)
      : step === 3 && industry
        ? insightAfterStep2(industry, isPublicOrg)
        : step === 4 && axLevel
          ? insightAfterStep3(axLevel)
          : step === 5 && concerns.length
            ? insightAfterStep4(concerns)
            : step === 6 && industry && priorityTask
              ? insightAfterStep5(industry, priorityTask)
              : null;

  return (
    <div className="relative flex min-h-[100dvh] flex-col bg-[#070b14] pb-24 text-white md:pb-8">
      {analyzing ? (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[#070b14]/95 px-6 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md text-center"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-red-400/90">
              Strategy synthesis
            </p>
            <motion.p
              key={analysisIdx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="mt-6 text-lg font-medium leading-snug text-white md:text-xl"
            >
              {ANALYSIS_TRANSITIONS[analysisIdx]}
            </motion.p>
            <div className="mx-auto mt-10 h-1 max-w-[200px] overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-red-500 to-orange-400"
                initial={{ width: "12%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.1, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      ) : null}

      <header className="sticky top-0 z-20 border-b border-white/[0.08] bg-[#070b14]/92 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 md:px-8">
          <button
            type="button"
            onClick={() => {
              if (step <= 1) {
                router.push("/");
                return;
              }
              setStep((step - 1) as WizardStep);
            }}
            className="rounded-lg px-3 py-2 text-sm font-medium text-white/65 transition hover:bg-white/[0.06] hover:text-white"
          >
            ← 이전
          </button>
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-red-400/90">
              KT AX Strategy Discovery
            </p>
            <p className="text-xs text-white/40">의사결정 지원 · 비공개 세션</p>
          </div>
          <button
            type="button"
            onClick={() => {
              reset();
              setStep(1);
            }}
            className="rounded-lg px-3 py-2 text-xs font-medium text-white/45 hover:text-white/75"
          >
            세션 재시작
          </button>
        </div>
        <div className="border-t border-white/[0.06] px-4 pb-4 pt-3 md:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-2 flex justify-between text-[10px] font-semibold uppercase tracking-wider text-white/40">
              <span>진행 단계</span>
              <span>
                {step} / {TOTAL_STEPS}
              </span>
            </div>
            <div className="h-[3px] overflow-hidden rounded-full bg-white/[0.07]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-red-600 via-red-500 to-amber-400"
                animate={{ width: `${progress}%` }}
                transition={{ type: "spring", stiffness: 120, damping: 22 }}
              />
            </div>
            <div className="mt-3 hidden gap-1 text-[9px] font-semibold uppercase tracking-wider text-white/35 sm:flex sm:justify-between">
              {["유형", "산업", "성숙도", "관심", "과제", "맥락"].map((lab, i) => (
                <span key={lab} className={i + 1 === step ? "text-red-300" : ""}>
                  {lab}
                </span>
              ))}
            </div>
            {step >= 2 && ENGINE_BY_STEP[step] ? (
              <div className="mt-4 md:hidden">
                <ConsultantThinkingPanel message={ENGINE_BY_STEP[step]!} />
              </div>
            ) : null}
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-4 py-8 md:flex-row md:px-8 md:py-10">
        <aside className="hidden w-[260px] shrink-0 md:block">
          <div className="sticky top-28 space-y-4">
            {step >= 2 && ENGINE_BY_STEP[step] ? (
              <ConsultantThinkingPanel message={ENGINE_BY_STEP[step]!} />
            ) : null}
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 text-[13px] leading-relaxed text-white/55">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/35">진단 프로필</p>
              <ul className="mt-3 space-y-2">
                <li>유형: {customerType ?? "—"}</li>
                <li>산업: {industry ?? "—"}</li>
                <li>성숙도: {axLevel ?? "—"}</li>
                <li>관심: {concerns.length ? concerns.slice(0, 4).join(", ") : "—"}</li>
                <li>우선 과제: {priorityTask ?? "—"}</li>
              </ul>
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <AnimatePresence mode="wait">
            {step >= 1 && step <= 6 ? (
              <motion.div
                key={`why-${step}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 rounded-xl border border-amber-500/25 bg-amber-500/[0.07] px-4 py-3 md:px-5"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-200/90">
                  왜 이 질문인가
                </p>
                <p className="mt-1 text-sm font-semibold text-amber-50/95">
                  {STEP_WHY[step].headline}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-amber-100/75">
                  {STEP_WHY[step].body}
                </p>
              </motion.div>
            ) : null}
          </AnimatePresence>

          {dynamicInsight ? (
            <motion.div
              key={dynamicInsight}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8 border-l-2 border-red-500/60 pl-4 text-[13px] leading-relaxed text-white/60"
            >
              <span className="font-semibold text-white/80">컨설턴트 관찰 · </span>
              {dynamicInsight}
            </motion.div>
          ) : null}

          <AnimatePresence mode="wait">
            {step === 1 ? (
              <StepShell key="s1" title="조직 유형" kicker="Discovery 01">
                <ChoiceGrid
                  items={[...CUSTOMER_TYPES]}
                  onPick={(v) => {
                    setCustomerType(v as CustomerTypeLabel);
                    setStep(2);
                  }}
                />
              </StepShell>
            ) : null}

            {step === 2 ? (
              <StepShell key="s2" title="핵심 산업" kicker="Discovery 02">
                <ChoiceGrid
                  items={industries}
                  onPick={(v) => {
                    setIndustry(v);
                    setStep(3);
                  }}
                />
              </StepShell>
            ) : null}

            {step === 3 ? (
              <StepShell key="s3" title="AX 활용 성숙도" kicker="Maturity signal">
                <ChoiceGrid
                  items={[...AX_LEVELS]}
                  onPick={(v) => {
                    setAxLevel(v as never);
                    setStep(4);
                  }}
                />
              </StepShell>
            ) : null}

            {step === 4 ? (
              <StepShell key="s4" title="경영·현업 압력 축" kicker="Priorities (복수)">
                <MultiGrid items={[...CONCERNS]} selected={concerns} onToggle={(c) => toggleConcern(c)} />
                <motion.button
                  type="button"
                  disabled={concerns.length === 0}
                  whileTap={{ scale: concerns.length ? 0.98 : 1 }}
                  onClick={nextFromStep4}
                  className="mt-10 min-h-[52px] w-full rounded-lg bg-red-600 text-sm font-semibold text-white shadow-lg shadow-red-900/30 disabled:cursor-not-allowed disabled:bg-white/[0.08] disabled:text-white/30"
                >
                  다음 단계
                </motion.button>
              </StepShell>
            ) : null}

            {step === 5 ? (
              <StepShell key="s5" title="우선 워크스트림" kicker={`${industry ?? "산업"} 기준`}>
                {priorities.length ? (
                  <ChoiceGrid
                    items={priorities}
                    onPick={(v) => {
                      setPriorityTask(v);
                      setStep(6);
                    }}
                  />
                ) : (
                  <p className="text-sm text-white/50">산업을 먼저 선택해 주세요.</p>
                )}
              </StepShell>
            ) : null}

            {step === 6 ? (
              <StepShell key="s6" title="추가 맥락 (선택)" kicker="정성 보강">
                <textarea
                  value={freeText}
                  onChange={(e) => setFreeText(e.target.value)}
                  placeholder="예) 특정 레거시 연동, 보안 등급, rollout 일정, 이해관계자 이슈"
                  className="min-h-[140px] w-full rounded-lg border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-red-500/50"
                />
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.98 }}
                    onClick={skipFreeText}
                    className="min-h-[52px] flex-1 rounded-lg border border-white/[0.12] bg-transparent text-sm font-semibold text-white/85 hover:bg-white/[0.04]"
                  >
                    생략하고 결과 보기
                  </motion.button>
                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.98 }}
                    onClick={finish}
                    className="min-h-[52px] flex-1 rounded-lg bg-red-600 text-sm font-semibold text-white shadow-lg shadow-red-900/35"
                  >
                    AX 컨설팅 결과 보기
                  </motion.button>
                </div>
              </StepShell>
            ) : null}
          </AnimatePresence>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-10 border-t border-white/[0.08] bg-[#070b14]/95 px-4 py-3 backdrop-blur-md md:hidden">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-white/35">진단 프로필</p>
        <p className="mt-1 line-clamp-2 text-[11px] text-white/65">
          {[customerType, industry, axLevel].filter(Boolean).join(" · ") || "응답을 선택하면 프로필이 쌓입니다."}
          {concerns.length ? ` · 관심 ${concerns.length}` : ""}
        </p>
      </div>
    </div>
  );
}

function StepShell({
  title,
  kicker,
  children,
}: {
  title: string;
  kicker: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.24 }}
      className="flex flex-1 flex-col pb-12"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-red-400/85">{kicker}</p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-[28px] md:leading-snug">
        {title}
      </h1>
      <div className="mt-10 flex-1">{children}</div>
    </motion.div>
  );
}

function ChoiceGrid({
  items,
  onPick,
}: {
  items: string[];
  onPick: (v: string) => void;
}) {
  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <motion.button
          key={item}
          type="button"
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.03 }}
          whileHover={{ backgroundColor: "rgba(255,255,255,0.06)" }}
          whileTap={{ scale: 0.995 }}
          onClick={() => onPick(item)}
          className="flex min-h-[52px] w-full items-center justify-between rounded-lg border border-white/[0.09] bg-white/[0.03] px-4 py-3.5 text-left text-[15px] font-medium text-white/95 hover:border-red-500/35"
        >
          <span>{item}</span>
          <span className="text-white/25">→</span>
        </motion.button>
      ))}
    </div>
  );
}

function MultiGrid({
  items,
  selected,
  onToggle,
}: {
  items: readonly ConcernLabel[];
  selected: ConcernLabel[];
  onToggle: (v: ConcernLabel) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {items.map((item, i) => {
        const active = selected.includes(item);
        return (
          <motion.button
            key={item}
            type="button"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.02 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => onToggle(item)}
            className={`min-h-[48px] rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors ${
              active
                ? "border-red-500/55 bg-red-600/15 text-white"
                : "border-white/[0.08] bg-white/[0.03] text-white/85 hover:border-white/[0.14]"
            }`}
          >
            {item}
          </motion.button>
        );
      })}
    </div>
  );
}
