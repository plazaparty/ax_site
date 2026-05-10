/** AX Transformation Solution Map — 4-Pillar (허브 네비 + 상세 앵커) */

export const SOLUTION_PILLAR_SLUGS = ["ax-readiness", "ai", "cloud", "data"] as const;
export type SolutionPillarSlug = (typeof SOLUTION_PILLAR_SLUGS)[number];

export function isSolutionPillarSlug(slug: string): slug is SolutionPillarSlug {
  return (SOLUTION_PILLAR_SLUGS as readonly string[]).includes(slug);
}

/** 허브 4번째 칸 — 필러 4개만 노출 (하위 구조는 상세 페이지) */
export const solutionPillarHubLinks = [
  {
    slug: "ax-readiness",
    title: "AX Readiness",
    subtitle: "컨설팅·혁신 허브",
    href: "/ax-explore/solution/ax-readiness",
  },
  {
    slug: "ai",
    title: "AI",
    subtitle: "지능·개발·에이전트",
    href: "/ax-explore/solution/ai",
  },
  {
    slug: "cloud",
    title: "Cloud",
    subtitle: "플랫폼·보안·인프라",
    href: "/ax-explore/solution/cloud",
  },
  {
    slug: "data",
    title: "Data",
    subtitle: "자산·분석·지식",
    href: "/ax-explore/solution/data",
  },
] as const;
