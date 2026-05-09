export interface AxValueItem {
  id:
    | "foundation"
    | "model-data"
    | "agents"
    | "alliance"
    | "experts"
    | "governance";
  title: string;
  summary: string;
  description: string;
  keywords: string[];
  relatedCTA: {
    label: string;
    href: string;
  };
}

export const axValueItems: AxValueItem[] = [
  {
    id: "foundation",
    title: "인프라 · 클라우드 기반",
    summary: "AI 인프라부터 하이브리드 클라우드까지, 운영 가능한 기반을 먼저 설계합니다.",
    description:
      "AX는 ‘모델’만으로 완성되지 않습니다. AI 인프라(AIDC/CT)와 AI Cloud(Multi/Hybrid)를 바탕으로 보안·성능·비용을 함께 고려한 운영 기반을 마련합니다.",
    keywords: ["AI 인프라", "AI Cloud", "Hybrid", "운영 안정성"],
    relatedCTA: { label: "운영형 도입 상담하기", href: "/ax-consulting" },
  },
  {
    id: "model-data",
    title: "AI 모델 · Data for AI",
    summary: "데이터가 연결될 때, AX는 ‘실행력’을 갖습니다.",
    description:
      "Data for AI(RAG/검색·요약·지식화)와 AI 모델 계층을 함께 설계해, 업무 흐름에서 ‘답’이 나오도록 만듭니다. 사내 데이터의 권한·감사·품질을 포함해 엔터프라이즈 요구에 맞춰 구성합니다.",
    keywords: ["Data for AI", "RAG", "Enterprise Search", "AI 모델"],
    relatedCTA: { label: "지식/문서 과제 추천받기", href: "/ax-consulting" },
  },
  {
    id: "agents",
    title: "산업별 Agent 확장",
    summary: "금융·제조·유통 등 산업별 시나리오로 빠르게 구체화합니다.",
    description:
      "Agent Builder 위에서 산업별 Agent(금융/제조/유통 …)를 조합해, 현장 문제를 바로 ‘업무 단위’로 풀어냅니다. 표준 템플릿 + 커스터마이징으로 PoC부터 확산까지 지원합니다.",
    keywords: ["Agent Builder", "산업별 Agent", "확장성", "시나리오 기반"],
    relatedCTA: { label: "산업 맞춤 추천받기", href: "/ax-industry" },
  },
  {
    id: "alliance",
    title: "Alliance 생태계",
    summary: "전략·솔루션·기술·딜리버리까지, 검증된 파트너와 함께 제공합니다.",
    description:
      "Alliance 플랫폼을 통해 고객 맞춤 조합을 빠르게 구성합니다. 기술 검증, 구축/운영, 변화관리까지 ‘도입 과정’ 전체를 단절 없이 연결하는 것이 목표입니다.",
    keywords: ["Alliance", "파트너", "딜리버리", "변화관리"],
    relatedCTA: { label: "AX 로드맵 상담하기", href: "/ax-consulting" },
  },
  {
    id: "experts",
    title: "Expert 지원 체계",
    summary: "데이터·변화관리·산업AX·AX 아키텍처 전문가 풀을 제공합니다.",
    description:
      "Expert 플랫폼은 각 분야 전문가의 경험과 방법론을 모아, 고객의 내부 역량과 실행 속도를 동시에 끌어올립니다. 설계-구축-운영의 의사결정을 돕는 ‘지원 조직’으로 기능합니다.",
    keywords: ["전문가 Pool", "방법론", "CoE", "거버넌스"],
    relatedCTA: { label: "세일즈 담당자 연결", href: "/ax-consulting" },
  },
  {
    id: "governance",
    title: "보안 · 소버린 · 규제",
    summary: "현실 제약을 전제로, 신뢰할 수 있는 AX를 만듭니다.",
    description:
      "보안(개인정보/정보보안), 소버린(인프라·데이터 주권), 규제(CSAP 등) 대응을 기반으로 설계합니다. ‘가능한 것’이 아니라 ‘승인되고 운영되는 것’을 목표로 합니다.",
    keywords: ["보안", "소버린", "규제", "CSAP"],
    relatedCTA: { label: "규제 환경 상담하기", href: "/ax-consulting" },
  },
];

