export interface CaseStudyItem {
  id: string;
  industry: string;
  title: string;
  summary: string;
  outcomes: string[];
}

export const caseStudies: CaseStudyItem[] = [
  {
    id: "cs-cc",
    industry: "컨택센터",
    title: "상담 요약·후처리 자동화로 운영 효율 개선",
    summary:
      "상담 요약/분류를 자동화해 상담원 후처리 시간을 줄이고, 품질 편차를 낮춘 시나리오입니다. (시연용)",
    outcomes: ["후처리 시간 단축", "품질 편차 감소", "감사/분석 활용성 향상"],
  },
  {
    id: "cs-knowledge",
    industry: "전사 공통",
    title: "사내 문서 지식검색(RAG)으로 답변 정확도 향상",
    summary:
      "권한 기반 문서 검색·요약을 도입해, 현장에서 필요한 답을 더 빨리 찾도록 만든 사례입니다. (시연용)",
    outcomes: ["검색 시간 단축", "답변 품질 향상", "권한/감사 체계 정착"],
  },
  {
    id: "cs-manufacturing",
    industry: "제조",
    title: "현장 점검 자동화로 안전·품질 프로세스 표준화",
    summary:
      "점검 기록을 표준화하고 예외 상황을 자동 분류해, 운영 프로세스를 정교하게 만든 시나리오입니다. (시연용)",
    outcomes: ["점검 리드타임 단축", "표준화 수준 향상", "현장 대응 속도 개선"],
  },
];

