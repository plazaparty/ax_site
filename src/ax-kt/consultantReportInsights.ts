import { INDUSTRY_SLUG_LABELS } from "./consultantLinks";

export type IndustryTrendInsight = {
  narrative: string;
  adoptionStage: string;
  revenueLift: string;
  metrics: { label: string; value: string }[];
};

const INDUSTRY_TRENDS: Record<string, IndustryTrendInsight> = {
  public: {
    adoptionStage: "생성형 AI·지식 검색 기반 민원 자동화",
    revenueLift: "18",
    narrative:
      "글로벌 공공기관의 62%가 생성형 AI·지식 검색 기반 민원·행정 자동화 파일럿을 운영 중이며, 선도 사례는 민원 처리 리드타임을 평균 35% 단축했습니다.",
    metrics: [
      { label: "AX 도입 공공기관", value: "62%" },
      { label: "민원 리드타임", value: "−35%" },
      { label: "감사 추적 준수", value: "98%+" },
    ],
  },
  finance: {
    adoptionStage: "AI 상담·이상거래 탐지·규정 준수 자동화",
    revenueLift: "22",
    narrative:
      "동종 글로벌 금융사의 71%가 AI 상담·이상거래 탐지·규정 준수 자동화 단계에 진입했으며, 상담·컴플라이언스 비용 대비 매출·수익성 개선 효과가 뚜렷합니다.",
    metrics: [
      { label: "AI 상담 도입", value: "71%" },
      { label: "이상거래 탐지 정확도", value: "99%+" },
      { label: "상담 비용", value: "−28%" },
    ],
  },
  manufacturing: {
    adoptionStage: "비전 AI·예지보전·공정 최적화",
    revenueLift: "34",
    narrative:
      "제조 글로벌 선도사는 비전 AI·예지보전·공정 최적화를 본격 도입했고, 품질·가동률 개선으로 매출 기여도가 크게 확대되고 있습니다.",
    metrics: [
      { label: "비전 AI 라인", value: "58%" },
      { label: "불량률", value: "−40%" },
      { label: "가동률", value: "+12%p" },
    ],
  },
  retail: {
    adoptionStage: "수요예측·개인화·물류 최적화",
    revenueLift: "26",
    narrative:
      "유통·물류 글로벌 기업은 수요예측·개인화·물류 최적화 AX를 확산 단계로 옮기며, 재고·마케팅 ROI를 동시에 끌어올리고 있습니다.",
    metrics: [
      { label: "수요예측 정확도", value: "+18%p" },
      { label: "재고 비용", value: "−22%" },
      { label: "전환율", value: "+2.1x" },
    ],
  },
  healthcare: {
    adoptionStage: "의료영상 AI·기록 요약·운영 효율",
    revenueLift: "19",
    narrative:
      "의료 분야는 영상 판독·기록 요약·운영 효율 AX가 표준화 단계에 접어들었고, 진료·운영 리드타임 단축이 수익·접근성 개선으로 이어지고 있습니다.",
    metrics: [
      { label: "판독 시간", value: "−45%" },
      { label: "기록 요약", value: "−60%" },
      { label: "병상 가동", value: "+8%p" },
    ],
  },
  defense: {
    adoptionStage: "데이터 통합·의사결정 지원 AI",
    revenueLift: "15",
    narrative:
      "국방·보안 영역은 데이터 통합·의사결정 지원 AI를 단계적으로 도입하며, 임무 대응 속도와 운영 효율을 동시에 높이고 있습니다.",
    metrics: [
      { label: "분석 리드타임", value: "−30%" },
      { label: "임무 준비", value: "+20%" },
      { label: "보안 준수", value: "100%" },
    ],
  },
  safety: {
    adoptionStage: "현장 안전·설비 모니터링 AI",
    revenueLift: "21",
    narrative:
      "안전·건설 글로벌 기업은 현장 안전·설비 모니터링 AI를 확산하며, 사고 예방과 공정 지연 비용 절감으로 실질 성과를 내고 있습니다.",
    metrics: [
      { label: "사고 예방", value: "−55%" },
      { label: "현장 점검", value: "−40%" },
      { label: "공정 지연", value: "−18%" },
    ],
  },
  services: {
    adoptionStage: "지식 AI·업무 자동화·고객 경험",
    revenueLift: "24",
    narrative:
      "서비스·IT 글로벌 기업은 지식 AI·업무 자동화·고객 경험 AX를 운영 표준으로 삼으며, 인당 매출·고객 만족을 함께 끌어올리고 있습니다.",
    metrics: [
      { label: "업무 자동화", value: "45%" },
      { label: "고객 만족", value: "+15%p" },
      { label: "인건비", value: "−25%" },
    ],
  },
};

const DEFAULT_TREND: IndustryTrendInsight = {
  adoptionStage: "생성형 AI·데이터 플랫폼·업무 자동화",
  revenueLift: "20",
  narrative:
    "동종 글로벌 기업의 다수가 생성형 AI·데이터 플랫폼·업무 자동화 단계로 진입했으며, AX 투자 대비 매출·비용 개선 효과가 가속화되고 있습니다.",
  metrics: [
    { label: "AX 도입 가속", value: "68%" },
    { label: "운영 비용", value: "−20%" },
    { label: "매출 기여", value: "+20%" },
  ],
};

const HORIZON_PERIOD: Record<string, string> = {
  short: "3개월 이내",
  mid_term: "6개월~1년",
  long: "1년 이상",
  quick_win: "2~4주(퀵 윈)",
};

const HORIZON_EFFECT: Record<string, { metric: string; range: string }> = {
  short: { metric: "운영비·처리시간", range: "15~25%" },
  mid_term: { metric: "매출·생산성", range: "20~30%" },
  long: { metric: "구조적 수익성", range: "25~40%" },
  quick_win: { metric: "즉시 비용·업무 효율", range: "10~18%" },
};

const PILLAR_PRIMARY: Record<string, string> = {
  AI: "KT AI·Agent·Knowledge AI",
  Cloud: "KT Cloud·마이그레이션",
  Data: "Data Insight AI·데이터 플랫폼",
  Readiness: "AX Readiness·컨설팅",
};

export function getIndustryTrend(industrySlug: string): IndustryTrendInsight {
  return INDUSTRY_TRENDS[industrySlug] ?? DEFAULT_TREND;
}

export function buildIndustryTrendNarrative(industrySlug: string): string {
  const label = INDUSTRY_SLUG_LABELS[industrySlug] || "해당";
  const t = getIndustryTrend(industrySlug);
  return `귀사와 같은 ${label} 산업의 글로벌 기업은 이미 ${t.adoptionStage} 활용 단계로 접어들고 있으며, 평균 ${t.revenueLift}% 수준의 매출·수익성 향상을 통해 AX로 앞서가고 있습니다. ${t.narrative}`;
}

export function buildQuantitativeOutcomeLine(
  industrySlug: string,
  horizonKey: string,
  pillarKeys: string[]
): string {
  const label = INDUSTRY_SLUG_LABELS[industrySlug] || "귀사";
  const period = HORIZON_PERIOD[horizonKey] || "기대 기간";
  const effect = HORIZON_EFFECT[horizonKey] || HORIZON_EFFECT.mid_term;
  const stack =
    pillarKeys.length > 0
      ? pillarKeys.map((k) => PILLAR_PRIMARY[k] || k).join(" + ")
      : "KT AX 솔루션 스택";
  return `${label} 맞춤형 AX 솔루션은 기대하시는 ${period} 동안 ${stack}으로 ${effect.metric} ${effect.range} 수준의 정량적 효과 확인이 가능합니다.`;
}
