/** 홈·Use Case 허브에서 순차 큐레이션용 */

import { successStories } from "./useCaseStories";
import { USE_CASE_SUCCESS_SLUG_ORDER, type UseCaseSuccessSlug } from "./useCaseLibraryOrder";

export type UseCaseJourneyStageSlug = "start" | "expand" | "enterprise" | "agent";

/** 산업 필터 — 10개 이내 대표 축 */
export const USE_CASE_INDUSTRY_BUCKETS = [
  "금융",
  "공공",
  "제조",
  "유통·물류",
  "통신·미디어",
  "의료·제약",
  "에너지",
  "건설·부동산",
  "서비스·교육",
  "기타",
] as const;

export type UseCaseIndustryBucket = (typeof USE_CASE_INDUSTRY_BUCKETS)[number];

const SLUG_INDUSTRY_GROUP: Record<UseCaseSuccessSlug, UseCaseIndustryBucket> = {
  "manufacturing-quality": "제조",
  "public-civic": "공공",
  "finance-advisory": "금융",
  "logistics-route-optimization": "유통·물류",
  "retail-demand-forecasting": "유통·물류",
  "health-medical-records-summary": "의료·제약",
  "telecom-network-triage": "통신·미디어",
  "insurance-fnol-triage": "금융",
  "utility-field-inspection-vision": "에너지",
  "education-admissions-assistant": "서비스·교육",
  "legal-contract-screening": "서비스·교육",
  "hr-policy-assistant": "서비스·교육",
  "ecommerce-search-and-reco": "유통·물류",
  "media-subtitle-and-metadata": "통신·미디어",
  "construction-safety-vision": "건설·부동산",
  "agritech-pest-detection": "제조",
  "pharma-deviation-classification": "의료·제약",
  "airline-disruption-comms": "서비스·교육",
  "real-estate-lease-abstraction": "건설·부동산",
  "automotive-supplier-quality": "제조",
  "broadcast-sales-proposal": "통신·미디어",
  "hospitality-guest-requests": "서비스·교육",
  "bank-suspicious-txn-summary": "금융",
};

export interface CuratedUseCase {
  id: string;
  order: number;
  title: string;
  subtitle: string;
  tag: string;
  href: string;
  /** 짧은 리드 (카드 뉴스 톤) */
  dek: string;
  /** 필터용 대표 산업 (10개 버킷 중 하나) */
  industryGroup: UseCaseIndustryBucket;
  industries: string[];
  tasks: string[];
  solutions: string[];
  /** AX 탐색 도입 단계 축과 동일한 슬러그 */
  stageSlug: UseCaseJourneyStageSlug;
  kpis: string[];
  difficulty: "낮음" | "중간" | "높음";
  period: string;
}

/** 슬러그별 허브 필터·톤 보강 (미정의 시 아래 buildDefault에서 채움) */
const CURATION: Partial<
  Record<
    string,
    Pick<
      CuratedUseCase,
      | "id"
      | "subtitle"
      | "tag"
      | "dek"
      | "industries"
      | "tasks"
      | "solutions"
      | "stageSlug"
      | "kpis"
      | "difficulty"
      | "period"
      | "industryGroup"
    >
  >
> = {
  "manufacturing-quality": {
    id: "mfg",
    subtitle: "Vision + 워크플로",
    tag: "제조",
    dek: "판정 근거가 남는 검사 프로세스로 현장 설득과 확장을 동시에 잡은 사례입니다.",
    industries: ["제조"],
    tasks: ["품질"],
    solutions: ["Vision AX", "Workflow AI"],
    stageSlug: "expand",
    kpis: ["리드타임", "재작업"],
    difficulty: "중간",
    period: "8–14주",
    industryGroup: "제조",
  },
  "public-civic": {
    id: "public",
    subtitle: "지식연동 상담",
    tag: "공공",
    dek: "민원 유형을 구조화하고 1차 응답 품질을 끌어올린 운영형 도입 스토리입니다.",
    industries: ["공공"],
    tasks: ["민원", "상담"],
    solutions: ["AICC Plus", "Knowledge AI"],
    stageSlug: "enterprise",
    kpis: ["만족도", "준비 시간"],
    difficulty: "높음",
    period: "10–18주",
    industryGroup: "공공",
  },
  "finance-advisory": {
    id: "finance",
    subtitle: "RAG + 코칭",
    tag: "금융",
    dek: "규정 변경이 잦은 환경에서 상담 준비 시간을 줄이고 검색 실패를 줄였습니다.",
    industries: ["금융"],
    tasks: ["상담", "문서"],
    solutions: ["Knowledge AI", "Agent Studio"],
    stageSlug: "expand",
    kpis: ["준비 시간", "검색 실패"],
    difficulty: "높음",
    period: "8–16주",
    industryGroup: "금융",
  },
  "logistics-route-optimization": {
    id: "logi",
    subtitle: "배차·ETA",
    tag: "물류",
    dek: "수기 배차와 통화 의존을 줄이고 운행 재조정 비용을 낮춘 사례입니다.",
    industries: ["물류", "유통"],
    tasks: ["운영", "배차"],
    solutions: ["Workflow AI", "Knowledge AI"],
    stageSlug: "expand",
    kpis: ["재배차", "안내 리드타임"],
    difficulty: "중간",
    period: "8–14주",
    industryGroup: "유통·물류",
  },
  "education-admissions-assistant": {
    id: "edu",
    subtitle: "규정 Q&A",
    tag: "교육",
    dek: "규정 변경에 맞춘 FAQ와 상담 채널 정합성을 동시에 맞춘 사례입니다.",
    industries: ["교육", "공공"],
    tasks: ["상담", "문서"],
    solutions: ["Knowledge AI"],
    stageSlug: "enterprise",
    kpis: ["1차 해결", "FAQ 갱신"],
    difficulty: "중간",
    period: "8–12주",
    industryGroup: "서비스·교육",
  },
  "legal-contract-screening": {
    id: "legal",
    subtitle: "조항 매핑",
    tag: "법무",
    dek: "표준 대비 차이를 빠르게 찾아 계약 검토 리드타임을 줄였습니다.",
    industries: ["법무", "IT서비스"],
    tasks: ["문서"],
    solutions: ["Document AI", "Workflow AI"],
    stageSlug: "expand",
    kpis: ["검토 시간", "예외 적발"],
    difficulty: "높음",
    period: "8–16주",
    industryGroup: "서비스·교육",
  },
};

function buildCurated(slug: (typeof USE_CASE_SUCCESS_SLUG_ORDER)[number], order: number): CuratedUseCase {
  const st = successStories[slug];
  const c = CURATION[slug];
  const industries = c?.industries ?? (st.similarIndustries?.length ? [...st.similarIndustries].slice(0, 2) : ["엔터프라이즈"]);
  const tasks = c?.tasks ?? ["운영개선"];
  const solutions = c?.solutions ?? ["KT AX"];
  const tag = c?.tag ?? industries[0] ?? "사례";
  const industryGroup = c?.industryGroup ?? SLUG_INDUSTRY_GROUP[slug] ?? "기타";

  return {
    id: c?.id ?? slug,
    order,
    title: st.title,
    subtitle: c?.subtitle ?? "AX 실행",
    tag,
    href: `/use-case/success/${slug}`,
    dek: c?.dek ?? st.outcome,
    industryGroup,
    industries,
    tasks,
    solutions,
    stageSlug: c?.stageSlug ?? "expand",
    kpis: c?.kpis ?? st.metrics.map((m) => m.label),
    difficulty: c?.difficulty ?? "중간",
    period: c?.period ?? "8–14주",
  };
}

export const curatedUseCases: CuratedUseCase[] = USE_CASE_SUCCESS_SLUG_ORDER.map((slug, i) =>
  buildCurated(slug, i + 1),
);
