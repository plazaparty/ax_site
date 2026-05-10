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
    subtitle: "Consulting & Experience",
    href: "/ax-explore/solution/ax-readiness",
  },
  {
    slug: "ai",
    title: "AI",
    subtitle: "Intelligence & Development",
    href: "/ax-explore/solution/ai",
  },
  {
    slug: "cloud",
    title: "Cloud",
    subtitle: "Platform & Security",
    href: "/ax-explore/solution/cloud",
  },
  {
    slug: "data",
    title: "Data",
    subtitle: "Asset & Analytics",
    href: "/ax-explore/solution/data",
  },
] as const;
