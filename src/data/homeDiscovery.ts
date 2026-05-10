import { insightExamples } from "./insightExamples";

export const axExploreHubTiles = [
  {
    title: "산업별 AX",
    href: "/ax-explore#ax-explore-axis-industry",
    hint: "공공·금융·제조 등 맥락별 출발점",
  },
  {
    title: "업무별 AX",
    href: "/ax-explore#ax-explore-axis-task",
    hint: "고객센터·문서·검색 등 과제 중심",
  },
  {
    title: "도입단계별 AX",
    href: "/ax-explore#ax-explore-axis-stage",
    hint: "시작·확장·전사·Agent",
  },
  {
    title: "솔루션별 AX",
    href: "/ax-explore#ax-explore-axis-solution",
    hint: "Readiness · AI · Cloud · Data",
  },
];

export const scenarioCards = [
  {
    title: "고객센터 혁신",
    href: "/ax-explore/task/contact-center",
  },
  {
    title: "업무 자동화",
    href: "/ax-explore/task/automation",
  },
  {
    title: "문서 AI",
    href: "/ax-explore/task/documents",
  },
  {
    title: "품질검사",
    href: "/ax-explore/task/quality",
  },
  {
    title: "AI 검색",
    href: "/ax-explore/task/search",
  },
  {
    title: "AI Agent",
    href: "/ax-explore/stage/agent",
  },
];

export { featuredUseCases } from "./useCaseFeatured";

/** 홈 우측 인사이트 카드 — 예시 기사 페이지로 연결 */
export const insightHighlightSlugs = [
  "genai-maturity-2026",
  "rag-vs-agent-roadmap",
  "ax-platform-release-notes",
  "discovery-live-session",
  "agent-governance-checklist",
  "data-lineage-for-ai",
  "contact-center-quality-ops",
  "poc-exit-criteria",
  "security-llm-deployment",
  "value-framework-kpi",
  "multimodal-use-cases",
  "hybrid-cloud-for-ax",
] as const;

export const insightHighlights = insightHighlightSlugs.map((slug) => {
  const x = insightExamples[slug];
  return {
    title: x.title,
    tag: x.tag,
    href: `/insights/example/${slug}`,
  };
});
