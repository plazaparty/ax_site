export interface MaturityStage {
  id: string;
  title: string;
  summary: string;
  traits: string;
  actions: string;
  exampleServices: string;
  imageUrl: string;
  /** ImageCard 한 줄 */
  tagline: string;
}

export const maturityStages: MaturityStage[] = [
  {
    id: "explore",
    title: "탐색 단계",
    summary: "AX 필요성을 정의하고 옵션을 비교하는 시기입니다.",
    tagline: "과제를 정의하고, 가능한 방향을 좁혀 갑니다.",
    imageUrl:
      "/api/placeholder?label=%ED%83%90%EC%83%89&sub=%EA%B3%BC%EC%A0%9C%20%EC%A0%95%EC%9D%98%20%C2%B7%20ROI%20%EA%B0%80%EC%84%A4%20%C2%B7%20%EB%B2%94%EC%9C%84%20%EC%88%98%EB%A0%B4&tone=default",
    traits: "과제·ROI 가설 수립, 벤더·레퍼런스 조사",
    actions: "워크숍·기술 세미나, 범위 좁히기",
    exampleServices: "GenAI Starter Pack, AX 로드맵 컨설팅",
  },
  {
    id: "poc",
    title: "PoC 단계",
    summary: "핵심 시나리오로 가치를 검증하는 파일럿입니다.",
    tagline: "좁은 범위에서 가설을 시험하고 측정합니다.",
    imageUrl:
      "/api/placeholder?label=PoC&sub=%EA%B0%80%EC%B9%98%20%EA%B2%80%EC%A6%9D%20%C2%B7%20KPI%20%C2%B7%20%EC%9A%B4%EC%98%81%20%EC%A1%B0%EA%B1%B4&tone=green",
    traits: "데이터·보안 요건 정리, KPI 설계",
    actions: "PoC 범위·기간 합의, 성과 측정",
    exampleServices: "Document Intelligence, Knowledge Assistant PoC",
  },
  {
    id: "adoption",
    title: "도입 검토 단계",
    summary: "상용 전환과 확산 계획을 구체화합니다.",
    tagline: "아키텍처와 계약, 운영 체계를 확정합니다.",
    imageUrl:
      "/api/placeholder?label=%EB%8F%84%EC%9E%85&sub=%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98%20%C2%B7%20SLA%20%C2%B7%20%EA%B0%90%EC%82%AC%20%EB%8C%80%EC%9D%91&tone=blue",
    traits: "TCO·운영 조직, SLA·감사 대응",
    actions: "아키텍처 확정, 계약·이행 일정",
    exampleServices: "Enterprise AX Suite, AI Contact Center",
  },
  {
    id: "scale",
    title: "운영 확산 단계",
    summary: "부서·지역으로 서비스를 넓히며 표준화합니다.",
    tagline: "조직 전반으로 표준과 거버넌스를 확장합니다.",
    imageUrl:
      "/api/placeholder?label=%ED%99%95%EC%82%B0&sub=CoE%20%C2%B7%20%ED%91%9C%EC%A4%80%ED%99%94%20%C2%B7%20%EA%B5%90%EC%9C%A1%20%EB%B3%80%ED%99%94%EA%B4%80%EB%A6%AC&tone=default",
    traits: "센터오브엑설런스, 교육·변경관리",
    actions: "템플릿·가이드 정착, 모니터링",
    exampleServices: "Work Automation Studio, Vision AI Platform",
  },
  {
    id: "optimize",
    title: "고도화 단계",
    summary: "모델·프로세스를 지속 개선해 경쟁력을 유지합니다.",
    tagline: "운영 데이터로 모델과 비용을 미세 조정합니다.",
    imageUrl:
      "/api/placeholder?label=%EA%B3%A0%EB%8F%84%ED%99%94&sub=%ED%92%88%EC%A7%88%20%C2%B7%20%EB%B9%84%EC%9A%A9%20%C2%B7%20%EC%A7%80%EC%86%8D%20%EA%B0%9C%EC%84%A0%20%EB%A3%A8%ED%94%84&tone=dark",
    traits: "MLOps, 품질·편향 점검, 비용 최적화",
    actions: "A/B 테스트, 파인튜닝·재학습 주기",
    exampleServices: "맞춤 모델 운영, AX 거버넌스 패키지",
  },
];
