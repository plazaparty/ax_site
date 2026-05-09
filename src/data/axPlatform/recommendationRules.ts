/**
 * 추천 근거 설명용 — buildRecommendations 로직과 별개로
 * UI에서 ‘룰 요약’을 보여줄 때 사용 (교체 가능).
 */
export const recommendationRulesSummary = [
  {
    id: "industry",
    title: "산업 프리셋",
    body: "산업별로 자주 등장하는 병목·규제 축을 가중합니다.",
  },
  {
    id: "maturity",
    title: "AX 성숙도",
    body: "전사 확산 단계에서는 표준화·거버넌스 솔루션 가중.",
  },
  {
    id: "concern",
    title: "관심 과제",
    body: "문서·콜·Agent·데이터 등 선택 관심사와 솔루션 매핑.",
  },
  {
    id: "priority",
    title: "우선 워크스트림",
    body: "상담/품질/민원 등 핵심 업무 키워드로 추가 가중.",
  },
  {
    id: "org",
    title: "조직 유형",
    body: "공공은 감사·근거, 대기업은 CoE·표준 축을 반영.",
  },
] as const;
