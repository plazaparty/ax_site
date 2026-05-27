import {
  industriesExplore,
  stagesExplore,
  tasksExplore,
} from "@/data/discoveryHub";
import {
  industryDetails,
  stageDetails,
  taskDetails,
} from "@/data/detailContent";
import { solutionPillarHubLinks } from "@/data/solutionPillars";

export type ExploreTabId = "industry" | "task" | "stage" | "solution";

export function exploreDetailPath(tab: ExploreTabId, id: string) {
  return `/ax-kt/detail/explore/${tab}/${id}`;
}

export function useCaseDetailPath(id: number) {
  return `/ax-kt/detail/use-case/${id}`;
}

const INDUSTRY_ICON: Record<string, string> = {
  public: "🏛️",
  finance: "🏦",
  manufacturing: "🏭",
  retail: "📦",
  healthcare: "🏥",
  telecom: "📡",
  defense: "🛡️",
  safety: "🏗️",
  services: "🌐",
};

const TASK_ICON: Record<string, string> = {
  "contact-center": "📞",
  documents: "📄",
  quality: "🔬",
  search: "🔍",
  automation: "⚙️",
  analytics: "📊",
};

const STAGE_ICON: Record<string, string> = {
  start: "🔭",
  expand: "📈",
  enterprise: "🏢",
  agent: "🤖",
};

const PILLAR_ICON: Record<string, string> = {
  "ax-readiness": "🎯",
  ai: "🧠",
  cloud: "☁️",
  data: "📊",
};

export type ExploreListItem = {
  id: string;
  title: string;
  desc: string;
  icon: string;
  href: string;
};

export function getExploreList(tab: ExploreTabId): ExploreListItem[] {
  if (tab === "industry") {
    return industriesExplore.map((i) => ({
      id: i.slug,
      title: i.title,
      desc: i.pain,
      icon: INDUSTRY_ICON[i.slug] ?? "🏭",
      href: exploreDetailPath("industry", i.slug),
    }));
  }
  if (tab === "task") {
    return tasksExplore.map((t) => {
      const d = taskDetails[t.slug];
      return {
        id: t.slug,
        title: t.title,
        desc: d?.problem ?? "업무 과제 중심 AX",
        icon: TASK_ICON[t.slug] ?? "⚙️",
        href: exploreDetailPath("task", t.slug),
      };
    });
  }
  if (tab === "stage") {
    return stagesExplore.map((s) => {
      const d = stageDetails[s.slug];
      return {
        id: s.slug,
        title: s.title,
        desc: d?.traits[0] ?? "도입 단계별 AX",
        icon: STAGE_ICON[s.slug] ?? "📈",
        href: exploreDetailPath("stage", s.slug),
      };
    });
  }
  return solutionPillarHubLinks.map((p) => ({
    id: p.slug,
    title: p.title,
    desc: p.subtitle,
    icon: PILLAR_ICON[p.slug] ?? "🧩",
    href: exploreDetailPath("solution", p.slug),
  }));
}

export type ExploreDetail = {
  title: string;
  sections: { heading: string; items: string[] }[];
  solutions: string[];
  useCases: string[];
  href: string;
  cta: string;
};

/** AX.KT 상세는 `/ax-kt/detail/explore/...`, 메인 사이트 풍부 UI는 `mainSiteExploreHref` */
function mainSiteExploreHref(tab: ExploreTabId, id: string): string {
  if (tab === "industry") {
    return industriesExplore.find((i) => i.slug === id)?.href ?? `/ax-explore/industry/${id}`;
  }
  if (tab === "task") {
    return tasksExplore.find((t) => t.slug === id)?.href ?? `/ax-explore/task/${id}`;
  }
  if (tab === "stage") {
    return stagesExplore.find((s) => s.slug === id)?.href ?? `/ax-explore/stage/${id}`;
  }
  const pillar = solutionPillarHubLinks.find((p) => p.slug === id);
  return pillar?.href ?? `/ax-explore/solution/${id}`;
}

export function getExploreDetail(tab: ExploreTabId, id: string): ExploreDetail | null {
  const list = getExploreList(tab);
  const meta = list.find((x) => x.id === id);
  if (!meta) return null;
  const externalHref = mainSiteExploreHref(tab, id);

  if (tab === "industry") {
    const d = industryDetails[id];
    if (!d) return null;
    return {
      title: d.title,
      sections: [
        { heading: "Pain Points", items: d.painPoints },
        { heading: "시나리오", items: d.scenarios },
        { heading: "기대 효과", items: d.effects },
      ],
      solutions: d.solutions,
      useCases: d.useCases,
      href: externalHref,
      cta: "메인 사이트에서 산업 상세 보기",
    };
  }
  if (tab === "task") {
    const d = taskDetails[id];
    if (!d) return null;
    return {
      title: d.title,
      sections: [
        { heading: "문제", items: [d.problem] },
        { heading: "AI 아이디어", items: d.aiIdeas },
        { heading: "실행 단계", items: d.steps },
      ],
      solutions: d.solutions,
      useCases: d.useCases,
      href: externalHref,
      cta: "메인 사이트에서 업무 상세 보기",
    };
  }
  if (tab === "stage") {
    const d = stageDetails[id];
    if (!d) return null;
    return {
      title: d.title,
      sections: [
        { heading: "특징", items: d.traits },
        { heading: "우선순위", items: d.priorities },
        { heading: "Quick Wins", items: d.quickWins },
        { heading: "로드맵", items: [d.horizon] },
      ],
      solutions: d.solutions,
      useCases: d.cases,
      href: externalHref,
      cta: "메인 사이트에서 단계 상세 보기",
    };
  }

  const pillar = solutionPillarHubLinks.find((p) => p.slug === id);
  if (!pillar) return null;
  return {
    title: pillar.title,
    sections: [
      {
        heading: "개요",
        items: [`${pillar.subtitle} — AX 탐색 솔루션 축`],
      },
    ],
    solutions: [pillar.title],
    useCases: ["AX Readiness · AI · Cloud · Data 네 축 중 해당 영역"],
    href: externalHref,
    cta: "메인 사이트에서 솔루션 상세 보기",
  };
}

export const exploreTabs: { id: ExploreTabId; label: string }[] = [
  { id: "industry", label: "산업별 AX" },
  { id: "task", label: "업무별 AX" },
  { id: "stage", label: "도입단계별" },
  { id: "solution", label: "솔루션별" },
];
