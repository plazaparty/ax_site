export interface EventItem {
  id: string;
  date: string;
  title: string;
  description: string;
  type: "event" | "news" | "insight";
}

export const upcomingEvents: EventItem[] = [
  {
    id: "e1",
    date: "2026.05.14",
    title: "AX 웨비나 2026 — Enterprise GenAI 실전",
    description:
      "RAG 설계부터 운영 거버넌스까지, 기업 도입 사례를 중심으로 살펴봅니다.",
    type: "event",
  },
  {
    id: "e2",
    date: "2026.05.28",
    title: "산업별 AX 전략 세미나 (제조·공공)",
    description:
      "현장 데이터와 규제 환경을 고려한 AX 로드맵 워크숍 형식으로 진행됩니다.",
    type: "event",
  },
];

export const latestNews: EventItem[] = [
  {
    id: "n1",
    date: "2026.04.02",
    title: "KT AX 솔루션 업데이트 노트",
    description:
      "문서 지능·상담 AI 모듈의 성능 개선과 보안 옵션 확장 소식입니다.",
    type: "news",
  },
  {
    id: "n2",
    date: "2026.03.18",
    title: "Enterprise AI 도입 인사이트 리포트",
    description:
      "국내 주요 기업의 PoC·상용화 단계별 과제와 성공 요인을 정리했습니다.",
    type: "insight",
  },
];

export const featuredInsight: EventItem = {
  id: "f1",
  date: "2026.04.10",
  title: "Featured Insight — AX 성숙도 체크리스트",
  description:
    "탐색부터 고도화까지, 단계별 점검 항목과 KT 권장 액션을 한 장으로 요약했습니다.",
  type: "insight",
};
