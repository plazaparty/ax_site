/** AX 탐색 허브 — 4축 맵 + 카드 메타 (필터 연동) */

export type AxMapAxis = "industry" | "task" | "stage" | "solution";

export const axMapAxes: {
  id: AxMapAxis;
  title: string;
  subtitle: string;
  href: string;
  accent: string;
}[] = [
  {
    id: "industry",
    title: "산업별 AX",
    subtitle: "규제·가치사슬 맥락",
    href: "/ax-explore#ax-explore-axis-industry",
    accent: "from-sky-500/20 to-blue-600/10",
  },
  {
    id: "task",
    title: "업무별 AX",
    subtitle: "가치사슬 과제 축",
    href: "/ax-explore#ax-explore-axis-task",
    accent: "from-amber-500/15 to-orange-600/10",
  },
  {
    id: "stage",
    title: "도입단계별 AX",
    subtitle: "성숙도 래더",
    href: "/ax-explore#ax-explore-axis-stage",
    accent: "from-emerald-500/15 to-teal-700/10",
  },
  {
    id: "solution",
    title: "솔루션별 AX",
    subtitle: "Readiness · AI · Cloud · Data",
    href: "/ax-explore#ax-explore-axis-solution",
    accent: "from-violet-500/15 to-indigo-700/10",
  },
];

export interface ExploreCardMeta {
  id: string;
  title: string;
  href: string;
  axis: AxMapAxis;
  painPoint: string;
  recommendedSolution: string;
  expectedKpi: string;
  useCase: string;
  difficulty: "낮음" | "중간" | "높음";
}

export const exploreMapCards: ExploreCardMeta[] = [
  {
    id: "pub",
    title: "공공 민원·행정",
    href: "/ax-explore/industry/public",
    axis: "industry",
    painPoint: "민원 증가·근거 추적",
    recommendedSolution: "AICC Plus + Document AI",
    expectedKpi: "처리 리드타임, 재작업률",
    useCase: "지자체 민원 응대",
    difficulty: "높음",
  },
  {
    id: "fin",
    title: "금융 심사·상담",
    href: "/ax-explore/industry/finance",
    axis: "industry",
    painPoint: "문서 심사 병목",
    recommendedSolution: "Document AI + Knowledge AI",
    expectedKpi: "심사 TAT, 검색 실패율",
    useCase: "금융 상담 자동화",
    difficulty: "높음",
  },
  {
    id: "mfg",
    title: "제조 품질·현장",
    href: "/ax-explore/industry/manufacturing",
    axis: "industry",
    painPoint: "숙련 검사 의존",
    recommendedSolution: "Vision AX + Workflow AI",
    expectedKpi: "불량 탐지 리드타임",
    useCase: "품질검사 혁신",
    difficulty: "중간",
  },
  {
    id: "cc",
    title: "고객센터",
    href: "/ax-explore/task/contact-center",
    axis: "task",
    painPoint: "응대 품질 편차",
    recommendedSolution: "AICC Plus + Knowledge AI",
    expectedKpi: "AHT, FCR, CSAT",
    useCase: "콜센터 표준화",
    difficulty: "중간",
  },
  {
    id: "doc",
    title: "문서·계약",
    href: "/ax-explore/task/documents",
    axis: "task",
    painPoint: "비정형 문서 피로도",
    recommendedSolution: "Document AI",
    expectedKpi: "처리량, 오류율",
    useCase: "심사 패키지",
    difficulty: "낮음",
  },
  {
    id: "start",
    title: "AX 시작",
    href: "/ax-explore/stage/start",
    axis: "stage",
    painPoint: "우선순위 불명확",
    recommendedSolution: "AX Consultant",
    expectedKpi: "의사결정 속도",
    useCase: "AX 로드맵 정렬",
    difficulty: "낮음",
  },
  {
    id: "agent",
    title: "Agent 확장",
    href: "/ax-explore/stage/agent",
    axis: "stage",
    painPoint: "툴 연동·감사",
    recommendedSolution: "AI Agent Studio",
    expectedKpi: "업무 커버리지",
    useCase: "내부 업무 Agent",
    difficulty: "높음",
  },
  {
    id: "know",
    title: "KT Knowledge AI",
    href: "/ax-explore/solution/knowledge-ai",
    axis: "solution",
    painPoint: "검색 실패·근거 부족",
    recommendedSolution: "RAG + 권한",
    expectedKpi: "온보딩 시간",
    useCase: "규정 검색",
    difficulty: "중간",
  },
  {
    id: "aicc",
    title: "KT AICC Plus",
    href: "/ax-explore/solution/aicc-plus",
    axis: "solution",
    painPoint: "1차 응답 품질",
    recommendedSolution: "상담 AI + 코칭",
    expectedKpi: "AHT, FCR",
    useCase: "민원·금융 상담",
    difficulty: "중간",
  },
];
