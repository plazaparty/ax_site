export interface IndustryItem {
  id: string;
  name: string;
  useCase: string;
  benefit: string;
  productHint: string;
  imageUrl: string;
  /** ImageCard 한 줄 (대표 적용) */
  tagline: string;
}

export const industries: IndustryItem[] = [
  {
    id: "mfg",
    name: "제조",
    useCase: "불량 검사·설비 예지보전·작업지시 자동화",
    tagline: "현장 품질·가동·안전을 데이터로 묶습니다.",
    imageUrl:
      "/api/placeholder?label=%EC%A0%9C%EC%A1%B0&sub=%EB%B6%88%EB%9F%89%20%EA%B2%80%EC%82%AC%20%C2%B7%20%EC%98%88%EC%A7%80%EB%B3%B4%EC%A0%84%20%C2%B7%20%EC%97%85%EB%AC%B4%EC%9E%90%EB%8F%99%ED%99%94&tone=default",
    benefit: "가동률 향상·불량률 감소·안전 사고 예방",
    productHint: "Vision AI Platform, Work Automation Studio",
  },
  {
    id: "fin",
    name: "금융",
    useCase: "상담 요약·규정 질의·사기 탐지 보조",
    tagline: "규정과 고객 응대를 AI가 함께 짊어집니다.",
    imageUrl:
      "/api/placeholder?label=%EA%B8%88%EC%9C%B5&sub=%EA%B7%9C%EC%A0%95%20%EC%A7%88%EC%9D%98%20%C2%B7%20%EC%83%81%EB%8B%B4%20%EC%9A%94%EC%95%BD%20%C2%B7%20%EA%B0%90%EC%82%AC%20%EB%8C%80%EC%9D%91&tone=blue",
    benefit: "처리 시간 단축·컴플라이언스 강화",
    productHint: "AI Contact Center, Document Intelligence",
  },
  {
    id: "retail",
    name: "유통",
    useCase: "수요 예측·챗봇·매장 영상 분석",
    tagline: "매장·온라인 경험을 한꺼번에 최적화합니다.",
    imageUrl:
      "/api/placeholder?label=%EC%9C%A0%ED%86%B5&sub=%EC%88%98%EC%9A%94%EC%98%88%EC%B8%A1%20%C2%B7%20%EA%B3%A0%EA%B0%9D%EA%B2%BD%ED%97%98%20%C2%B7%20%EC%9A%B4%EC%98%81%20%EC%B5%9C%EC%A0%81%ED%99%94&tone=green",
    benefit: "고객 경험 개선·재고 최적화",
    productHint: "Knowledge Assistant, Vision AI Platform",
  },
  {
    id: "public",
    name: "공공",
    useCase: "민원 응대·행정 문서·지식 검색",
    tagline: "행정의 속도와 투명성을 동시에 끌어올립니다.",
    imageUrl:
      "/api/placeholder?label=%EA%B3%B5%EA%B3%B5&sub=%EB%AF%BC%EC%9B%90%20%EC%9D%91%EB%8C%80%20%C2%B7%20%ED%96%89%EC%A0%95%EB%AC%B8%EC%84%9C%20%C2%B7%20%EC%A7%80%EC%8B%9D%EA%B2%80%EC%83%89&tone=dark",
    benefit: "행정 효율·국민 만족도",
    productHint: "Public AX Assistant, Enterprise AX Suite",
  },
  {
    id: "edu",
    name: "교육",
    useCase: "학습 자료 요약·질의응답·운영 자동화",
    tagline: "교직원과 학습자 모두를 위한 지능형 지원.",
    imageUrl:
      "/api/placeholder?label=%EA%B5%90%EC%9C%A1&sub=%EC%9E%90%EB%A3%8C%20%EC%9A%94%EC%95%BD%20%C2%B7%20Q%26A%20%C2%B7%20%EC%9A%B4%EC%98%81%20%EC%9E%90%EB%8F%99%ED%99%94&tone=default",
    benefit: "교직원 업무 경감·맞춤 학습 지원",
    productHint: "Knowledge Assistant, GenAI Starter Pack",
  },
  {
    id: "health",
    name: "헬스케어",
    useCase: "차트 요약·상담 보조·운영 워크플로",
    tagline: "임상·운영 정보를 안전하게 연결합니다.",
    imageUrl:
      "/api/placeholder?label=%ED%97%AC%EC%8A%A4%EC%BC%80%EC%96%B4&sub=%EC%B0%A8%ED%8A%B8%20%EC%9A%94%EC%95%BD%20%C2%B7%20%EC%83%81%EB%8B%B4%20%EB%B3%B4%EC%A1%B0%20%C2%B7%20%EC%95%88%EC%A0%84%20%EC%97%B0%EA%B2%B0&tone=blue",
    benefit: "의료진 집중 시간 확보·오류 감소",
    productHint: "Document Intelligence, AI Contact Center",
  },
];
