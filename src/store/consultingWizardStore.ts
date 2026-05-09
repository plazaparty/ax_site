"use client";

import { create } from "zustand";
import type { MaturityDiagnosis, PocReadiness } from "@/lib/consultingStrategy";

export type WizardStep = 1 | 2 | 3 | 4 | 5 | 6;

export const CUSTOMER_TYPES = [
  "공공기관",
  "대기업",
  "중견기업",
  "중소기업",
  "스타트업",
] as const;

export type CustomerTypeLabel = (typeof CUSTOMER_TYPES)[number];

export const PUBLIC_INDUSTRIES = ["교육", "국방", "행정", "지자체"] as const;
export const ENTERPRISE_INDUSTRIES = [
  "금융",
  "제조",
  "유통",
  "의료",
  "물류",
  "통신",
] as const;

export const AX_LEVELS = [
  "아직 검토 전",
  "일부 업무 적용",
  "부서 단위 활용",
  "전사 확대 중",
  "잘 모르겠음",
] as const;

export const CONCERNS = [
  "업무 자동화",
  "고객 응대 혁신",
  "문서 처리",
  "비용 절감",
  "데이터 활용",
  "품질 향상",
  "AI Agent",
  "생산성 향상",
] as const;

export type ConcernLabel = (typeof CONCERNS)[number];

export const PRIORITY_BY_INDUSTRY: Record<string, readonly string[]> = {
  금융: ["상담", "문서심사", "민원처리", "내부업무"],
  제조: ["품질검사", "생산관리", "현장지원", "예지보전"],
  유통: ["재고·수요 예측", "매장 운영", "물류 최적화", "고객 응대"],
  의료: ["진료 지원", "기록·코딩", "예약·안내", "운영 효율"],
  물류: ["입출고 자동화", "경로 최적화", "창고 관리", "이상 탐지"],
  통신: ["고객케어", "네트워크 운용", "마케팅 개인화", "사내 업무"],
  교육: ["행정 자동화", "학습 지원", "상담·민원", "콘텐츠 관리"],
  국방: ["지휘통제 지원", "장비 정비", "문서·보안", "교육 훈련"],
  행정: ["민원 응대", "문서 처리", "정책 분석", "내부 행정"],
  지자체: ["주민 응대", "복지 서비스", "도시 데이터", "안전·방재"],
};

export interface RecommendedSolution {
  id: string;
  name: string;
  fitPercent: number;
  solves: string;
  effect: string;
  timeline: string;
  phases: string[];
  /** 설명 가능한 추천 */
  whyFit: string;
  businessContext: string;
  evidenceDrivers: string[];
  risks: string[];
  prerequisites: string[];
  kpiOutlook: string;
  deploymentComplexity: "낮음" | "중간" | "높음";
  similarPatterns: string;
  roiReasoning: string;
}

export interface ConsultingMeta {
  maturity: MaturityDiagnosis;
  poc: PocReadiness;
  executiveSummaryLines: string[];
}

export interface ConsultingWizardState {
  step: WizardStep;
  customerType: CustomerTypeLabel | null;
  industry: string | null;
  axLevel: (typeof AX_LEVELS)[number] | null;
  concerns: ConcernLabel[];
  priorityTask: string | null;
  freeText: string;
  recommendations: RecommendedSolution[];
  consultingMeta: ConsultingMeta | null;
  setStep: (s: WizardStep) => void;
  setCustomerType: (v: CustomerTypeLabel) => void;
  setIndustry: (v: string) => void;
  setAxLevel: (v: (typeof AX_LEVELS)[number]) => void;
  toggleConcern: (v: ConcernLabel) => void;
  setPriorityTask: (v: string) => void;
  setFreeText: (v: string) => void;
  setRecommendations: (r: RecommendedSolution[]) => void;
  setConsultingMeta: (m: ConsultingMeta | null) => void;
  reset: () => void;
}

const initial = {
  step: 1 as WizardStep,
  customerType: null as CustomerTypeLabel | null,
  industry: null as string | null,
  axLevel: null as (typeof AX_LEVELS)[number] | null,
  concerns: [] as ConcernLabel[],
  priorityTask: null as string | null,
  freeText: "",
  recommendations: [] as RecommendedSolution[],
  consultingMeta: null as ConsultingMeta | null,
};

export const useConsultingWizardStore = create<ConsultingWizardState>((set) => ({
  ...initial,
  setStep: (step) => set({ step }),
  setCustomerType: (customerType) =>
    set({ customerType, industry: null, priorityTask: null }),
  setIndustry: (industry) => set({ industry, priorityTask: null }),
  setAxLevel: (axLevel) => set({ axLevel }),
  toggleConcern: (c) =>
    set((s) => ({
      concerns: s.concerns.includes(c)
        ? s.concerns.filter((x) => x !== c)
        : [...s.concerns, c],
    })),
  setPriorityTask: (priorityTask) => set({ priorityTask }),
  setFreeText: (freeText) => set({ freeText }),
  setRecommendations: (recommendations) => set({ recommendations }),
  setConsultingMeta: (consultingMeta) => set({ consultingMeta }),
  reset: () => set({ ...initial }),
}));
