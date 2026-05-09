export interface TechnologyItem {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  imageUrl: string;
  keywords: string[];
}

export const technologyItems: TechnologyItem[] = [
  {
    id: "ai-infra-cloud",
    title: "AI Infra · Cloud",
    tagline: "운영 가능한 기반부터 설계",
    summary:
      "AIDC/CT 기반 AI 인프라와 멀티·하이브리드 클라우드를 결합해 성능·비용·보안을 함께 최적화합니다.",
    imageUrl:
      "/api/placeholder?label=AI%20Infra%20%C2%B7%20Cloud&sub=Hybrid%20%C2%B7%20AIDC%20%C2%B7%20%EC%9A%B4%EC%98%81%20%EC%95%88%EC%A0%95%EC%84%B1&tone=blue",
    keywords: ["Hybrid", "AIDC", "운영", "보안"],
  },
  {
    id: "data-for-ai",
    title: "Data for AI",
    tagline: "RAG/검색·요약으로 실행력 강화",
    summary:
      "Enterprise Search와 RAG로 내부 지식을 연결해, 현장에서 ‘답이 나오는’ 업무 흐름을 만듭니다.",
    imageUrl:
      "/api/placeholder?label=Data%20for%20AI&sub=RAG%20%C2%B7%20Enterprise%20Search%20%C2%B7%20%EA%B6%8C%ED%95%9C%2F%EA%B0%90%EC%82%AC&tone=green",
    keywords: ["RAG", "검색", "요약", "권한/감사"],
  },
  {
    id: "ai-model-layer",
    title: "AI Model Layer",
    tagline: "업무에 맞는 모델 선택과 운영",
    summary:
      "모델 성능만이 아니라 비용·거버넌스·평가 체계를 포함해 엔터프라이즈 운영 관점으로 설계합니다.",
    imageUrl:
      "/api/placeholder?label=AI%20Model%20Layer&sub=%ED%8F%89%EA%B0%80%20%C2%B7%20%EA%B1%B0%EB%B2%84%EB%84%8C%EC%8A%A4%20%C2%B7%20%EB%B9%84%EC%9A%A9%20%EC%B5%9C%EC%A0%81%ED%99%94&tone=default",
    keywords: ["평가", "거버넌스", "비용", "안정성"],
  },
  {
    id: "agent-builder",
    title: "Agent Builder",
    tagline: "업무 단위로 조합하는 실행 구조",
    summary:
      "표준 템플릿과 워크플로우 구성으로, PoC부터 확산까지 빠르게 적용 가능한 Agent 구성을 지원합니다.",
    imageUrl:
      "/api/placeholder?label=Agent%20Builder&sub=%ED%85%9C%ED%94%8C%EB%A6%BF%20%C2%B7%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0%20%C2%B7%20%ED%99%95%EC%82%B0&tone=red",
    keywords: ["워크플로우", "템플릿", "확장", "운영"],
  },
  {
    id: "managed-ax-coe",
    title: "Managed AX & AX CoE",
    tagline: "확산 가능한 운영 체계",
    summary:
      "조직 차원의 운영 조직(CoE), 표준화, 모니터링, 변경관리까지 포함해 지속 가능한 AX를 만듭니다.",
    imageUrl:
      "/api/placeholder?label=Managed%20AX%20%26%20CoE&sub=%ED%91%9C%EC%A4%80%ED%99%94%20%C2%B7%20%EB%AA%A8%EB%8B%88%ED%84%B0%EB%A7%81%20%C2%B7%20%EB%B3%80%ED%99%94%EA%B4%80%EB%A6%AC&tone=dark",
    keywords: ["CoE", "표준화", "운영", "확산"],
  },
  {
    id: "security-sovereign",
    title: "Security · Sovereignty · Regulation",
    tagline: "승인되고 운영되는 AX",
    summary:
      "보안/개인정보, 데이터·인프라 주권, CSAP 등 규제 환경을 전제로 설계해 ‘현실에서 돌아가는’ 도입을 지향합니다.",
    imageUrl:
      "/api/placeholder?label=Security%20%C2%B7%20Sovereignty%20%C2%B7%20Regulation&sub=%EB%B3%B4%EC%95%88%20%C2%B7%20%EC%86%8C%EB%B2%84%EB%A6%B0%20%C2%B7%20CSAP%20%EB%8C%80%EC%9D%91&tone=blue",
    keywords: ["보안", "소버린", "규제", "CSAP"],
  },
];

