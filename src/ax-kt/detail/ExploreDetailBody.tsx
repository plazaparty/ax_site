"use client";

import { notFound } from "next/navigation";
import QualitativeImpactBars from "@/components/ax-viz/QualitativeImpactBars";
import StageMaturityStrip from "@/components/ax-viz/StageMaturityStrip";
import TaskFlowStrip from "@/components/ax-viz/TaskFlowStrip";
import DetailGlyphBanner from "@/components/DetailGlyphBanner";
import IndustryMonoIcon from "@/components/icons/IndustryMonoIcon";
import ServiceMonoIcon from "@/components/icons/ServiceMonoIcon";
import EnterprisePillarPage from "@/components/solution-pillars/EnterprisePillarPage";
import {
  industryDetails,
  solutionDetails,
  stageDetails,
  taskDetails,
} from "@/data/detailContent";
import {
  industryNarrative,
  solutionNarrative,
  stageNarrative,
  taskNarrative,
} from "@/data/detailNarratives";
import { getEnterprisePillarContent } from "@/data/enterprisePillar";
import { industryPanelTone, slugToIndustryVisual } from "@/data/industryVisual";
import { portalPanelTone } from "@/data/portalVisual";
import { isSolutionPillarSlug } from "@/data/solutionPillars";
import { solutionSlugToIcon } from "@/data/solutionIcons";
import SolutionDetailViz from "@/app/ax-explore/solution/SolutionDetailViz";
import type { ExploreTabId } from "../exploreContent";

export default function ExploreDetailBody({
  tab,
  slug,
}: {
  tab: ExploreTabId;
  slug: string;
}) {
  if (tab === "industry") {
    const d = industryDetails[slug];
    if (!d) notFound();
    const narrative = industryNarrative[slug] ?? "";
    const vis = slugToIndustryVisual(slug);
    const tone = industryPanelTone[vis];

    return (
      <>
        <div
          className={`mb-8 flex flex-col items-center justify-center gap-4 rounded-3xl border bg-gradient-to-br px-6 py-8 md:flex-row ${tone.border} ${tone.bg}`}
        >
          <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-sm">
            <IndustryMonoIcon industry={vis} className={`h-16 w-20 ${tone.icon}`} />
          </div>
        </div>
        <p className="text-xs font-semibold uppercase tracking-wider text-red-600">산업별 AX</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">{d.title}</h1>
        {narrative ? <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">{narrative}</p> : null}
        <section className="mt-10 space-y-6">
          <CardBlock title="주요 Pain Point" items={d.painPoints} />
          <CardBlock title="추천 AX 시나리오" items={d.scenarios} />
          <CardBlock title="추천 솔루션" items={d.solutions} accent />
          <QualitativeImpactBars title="기대 효과" items={d.effects} tone="rose" salt={slug} />
          <CardBlock title="관련 Use Case" items={d.useCases} />
        </section>
      </>
    );
  }

  if (tab === "task") {
    const d = taskDetails[slug];
    if (!d) notFound();
    const narrative = taskNarrative[slug] ?? "";

    return (
      <>
        <DetailGlyphBanner glyph="clipboard" />
        <p className="text-xs font-semibold uppercase tracking-wider text-red-600">업무별 AX</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">{d.title}</h1>
        {narrative ? <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">{narrative}</p> : null}
        <section className="mt-10 space-y-6">
          <TaskFlowStrip problem={d.problem} ideas={d.aiIdeas} solutions={d.solutions} steps={d.steps} />
          <CardBlock title="문제 정의" items={[d.problem]} />
          <QualitativeImpactBars
            title="추천 솔루션 (상대 적합)"
            subtitle="포트폴리오 축별로 상대 비중을 시각화한 데모입니다."
            items={d.solutions}
            tone="sky"
            salt={`${slug}-sol`}
          />
          <CardBlock title="적용 가능한 AI" items={d.aiIdeas} />
          <CardBlock title="추천 단계" items={d.steps} />
          <CardBlock title="Use Case" items={d.useCases} />
        </section>
      </>
    );
  }

  if (tab === "stage") {
    const d = stageDetails[slug];
    if (!d) notFound();
    const narrative = stageNarrative[slug] ?? "";

    return (
      <>
        <DetailGlyphBanner glyph="stairs" />
        <p className="text-xs font-semibold uppercase tracking-wider text-red-600">도입단계별 AX</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">{d.title}</h1>
        {narrative ? <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">{narrative}</p> : null}
        <section className="mt-10 space-y-6">
          <StageMaturityStrip activeSlug={slug} />
          <div className="grid gap-6 lg:grid-cols-2">
            <QualitativeImpactBars
              title="추천 우선 과제"
              subtitle="단계 내에서 먼저 자원을 넣을 영역(데모 상대 스케일)입니다."
              items={d.priorities}
              tone="amber"
              salt={`${slug}-pri`}
            />
            <QualitativeImpactBars
              title="빠른 성공 전략"
              subtitle="PoC·파일럿에서 가시성을 빠르게 내는 축입니다."
              items={d.quickWins}
              tone="amber"
              salt={`${slug}-qw`}
            />
          </div>
          <CardBlock title="현재 특징" items={d.traits} />
          <CardBlock title="추천 솔루션" items={d.solutions} />
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">예상 기간</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">{d.horizon}</p>
          </div>
          <CardBlock title="관련 사례 힌트" items={d.cases} />
        </section>
      </>
    );
  }

  if (tab === "solution") {
    if (isSolutionPillarSlug(slug)) {
      const pillar = getEnterprisePillarContent(slug);
      if (!pillar) notFound();
      return <EnterprisePillarPage content={pillar} />;
    }

    const d = solutionDetails[slug];
    if (!d) notFound();
    const narrative = solutionNarrative[slug] ?? "";
    const cube = portalPanelTone.cube;

    return (
      <>
        <div
          className={`mb-8 flex h-20 w-full items-center justify-center rounded-3xl border ${cube.border} bg-gradient-to-br ${cube.heroBg} shadow-inner`}
        >
          <ServiceMonoIcon type={solutionSlugToIcon(slug)} className="h-12 w-16" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-wider text-red-600">솔루션별 AX</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">{d.title}</h1>
        {narrative ? <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">{narrative}</p> : null}
        <section className="mt-10 space-y-6">
          <SolutionDetailViz slug={slug} detail={d} />
          <CardBlock title="해결 가능한 문제" items={d.problems} />
          <CardBlock title="주요 기능" items={d.features} accent />
          <CardBlock title="적용 산업" items={d.industries} />
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-lg font-semibold text-gray-900">도입 구조</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">{d.architecture}</p>
          </div>
          <CardBlock title="기대 효과" items={d.effects} />
          <CardBlock title="관련 Use Case" items={d.useCases} />
        </section>
      </>
    );
  }

  notFound();
}

function CardBlock({
  title,
  items,
  accent,
}: {
  title: string;
  items: string[];
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl border p-6 shadow-sm md:p-8 ${
        accent
          ? "border-red-100 bg-gradient-to-br from-red-50/80 to-white"
          : "border-gray-100 bg-white"
      }`}
    >
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-gray-600">
        {items.map((x) => (
          <li key={x} className="flex gap-2">
            <span className="font-medium text-red-600">—</span>
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
