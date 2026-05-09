export type ContentKind = "리포트" | "사례" | "이벤트" | "가이드";

export interface RecommendedContent {
  id: string;
  kind: ContentKind;
  title: string;
  description: string;
  href: string;
  meta?: string;
}

export interface IndustryItem {
  id: string;
  label: string;
  description: string;
  imageUrl: string;
  href: string;
}

export interface InsightItem {
  id: string;
  title: string;
  description: string;
  whyItMatters: string;
  href: string;
}

export const recommendedContents: RecommendedContent[] = [
  {
    id: "r-2024-ax-report",
    kind: "리포트",
    title: "2024 AX 전환 트렌드 리포트",
    description:
      "산업별 도입 우선순위와 성공 요인을 10분 안에 파악할 수 있도록 정리했습니다.",
    href: "/insights/trends",
    meta: "업데이트: 2026.04",
  },
  {
    id: "r-cc-ai-case",
    kind: "사례",
    title: "컨택센터 상담 자동화: 운영 지표 개선",
    description:
      "대화 요약·후처리 자동화로 상담 품질을 올리고 운영 비용을 줄인 패턴을 소개합니다.",
    href: "/insights/case-studies",
    meta: "사례 요약",
  },
  {
    id: "r-ax-webinar",
    kind: "이벤트",
    title: "AX Value Framework 웨비나",
    description:
      "도입 구조를 한 장으로 정리하고, 조직별 적용 방식을 Q&A로 안내합니다.",
    href: "/resources/events",
    meta: "무료 신청",
  },
  {
    id: "r-ax-journey-guide",
    kind: "가이드",
    title: "AX Journey: PoC에서 확산까지",
    description:
      "탐색 → PoC → 도입 → 확산 → 고도화 단계에서 필요한 체크리스트를 제공합니다.",
    href: "/solutions/ax-journey",
    meta: "체크리스트",
  },
  {
    id: "r-tech-quickstart",
    kind: "가이드",
    title: "RAG/Enterprise Search 빠른 시작",
    description:
      "Data for AI 관점으로 ‘현장에서 답이 나오는’ 구조를 빠르게 설계하는 방법을 정리했습니다.",
    href: "/solutions/technology",
    meta: "10분 가이드",
  },
];

export const industries: IndustryItem[] = [
  {
    id: "finance",
    label: "금융",
    description: "규제·보안·감사를 전제로 한 업무형 Agent 적용",
    imageUrl:
      "/api/placeholder?label=%EA%B8%88%EC%9C%B5&sub=%EA%B7%9C%EC%A0%9C%C2%B7%EB%B3%B4%EC%95%88%C2%B7%EA%B0%90%EC%82%AC%20%EA%B8%B0%EB%B0%98&tone=blue",
    href: "/solutions/industry",
  },
  {
    id: "manufacturing",
    label: "제조",
    description: "현장 데이터 기반 예지·품질·업무 자동화 시나리오",
    imageUrl:
      "/api/placeholder?label=%EC%A0%9C%EC%A1%B0&sub=%ED%98%84%EC%9E%A5%20%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EA%B8%B0%EB%B0%98%20%EC%9E%90%EB%8F%99%ED%99%94&tone=default",
    href: "/solutions/industry",
  },
  {
    id: "retail",
    label: "유통",
    description: "수요·재고·고객경험을 연결하는 운영형 AX",
    imageUrl:
      "/api/placeholder?label=%EC%9C%A0%ED%86%B5&sub=%EC%9A%B4%EC%98%81%ED%98%95%20AX%20%EC%B5%9C%EC%A0%81%ED%99%94&tone=green",
    href: "/solutions/industry",
  },
  {
    id: "public",
    label: "공공",
    description: "소버린·CSAP 등 현실 제약을 전제로 한 도입 설계",
    imageUrl:
      "/api/placeholder?label=%EA%B3%B5%EA%B3%B5&sub=%EC%86%8C%EB%B2%84%EB%A6%B0%C2%B7CSAP%20%ED%99%98%EA%B2%BD%20%EB%8C%80%EC%9D%91&tone=dark",
    href: "/solutions/industry",
  },
  {
    id: "energy",
    label: "에너지",
    description: "안정성·효율을 함께 보는 운영 최적화 중심 접근",
    imageUrl:
      "/api/placeholder?label=%EC%97%90%EB%84%88%EC%A7%80&sub=%EC%9A%B4%EC%98%81%20%EC%B5%9C%EC%A0%81%ED%99%94%20%EC%A4%91%EC%8B%AC&tone=blue",
    href: "/solutions/industry",
  },
];

export const insights: InsightItem[] = [
  {
    id: "i-trends-1",
    title: "‘모델’에서 ‘운영’으로: 엔터프라이즈 AX의 중심 이동",
    description:
      "도입 성패는 기능보다 운영 체계(거버넌스/보안/품질)에서 갈리는 경우가 많습니다.",
    whyItMatters:
      "조직 내 승인과 확산이 가능한 구조를 먼저 설계해야, PoC가 실사용으로 이어집니다.",
    href: "/insights/trends",
  },
  {
    id: "i-strategy-1",
    title: "산업별 Agent 설계: ‘업무 단위’로 쪼개면 빨라집니다",
    description:
      "산업 시나리오를 업무 단위로 정의하고, Agent Builder로 조합해 적용 속도를 높입니다.",
    whyItMatters:
      "현장 적용은 ‘기술 선택’보다 ‘업무 흐름 설계’가 더 큰 차이를 만듭니다.",
    href: "/insights/industry-strategy",
  },
  {
    id: "i-case-1",
    title: "도입 확산의 키: Data for AI 품질과 권한 설계",
    description:
      "RAG는 지식의 ‘접근권한/감사/품질’이 준비될 때 실무 가치가 급격히 커집니다.",
    whyItMatters:
      "보안·감사 요구를 만족해야 실제 사용자 확대(확산) 단계로 넘어갈 수 있습니다.",
    href: "/insights/case-studies",
  },
];

