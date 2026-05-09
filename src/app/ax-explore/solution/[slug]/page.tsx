import { notFound } from "next/navigation";
import ServiceMonoIcon from "@/components/icons/ServiceMonoIcon";
import SolutionDetailViz from "../SolutionDetailViz";
import SolutionPillarPageView from "../SolutionPillarPageView";
import { solutionDetails } from "@/data/detailContent";
import { solutionNarrative } from "@/data/detailNarratives";
import { isSolutionPillarSlug, solutionPillarPages, SOLUTION_PILLAR_SLUGS } from "@/data/solutionPillars";
import { solutionSlugToIcon } from "@/data/solutionIcons";
import { portalPanelTone } from "@/data/portalVisual";

export function generateStaticParams() {
  const legacy = Object.keys(solutionDetails);
  const merged = [...new Set([...legacy, ...SOLUTION_PILLAR_SLUGS])];
  return merged.map((slug) => ({ slug }));
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (isSolutionPillarSlug(slug)) {
    return <SolutionPillarPageView slug={slug} model={solutionPillarPages[slug]} />;
  }

  const d = solutionDetails[slug];
  if (!d) notFound();
  const narrative = solutionNarrative[slug] ?? "";
  const cube = portalPanelTone.cube;

  return (
    <div className="bg-gradient-to-b from-violet-50/50 to-white pb-28 pt-10 md:pb-16">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div
          className={`mb-10 flex h-24 w-full items-center justify-center rounded-3xl border ${cube.border} bg-gradient-to-br ${cube.heroBg} text-slate-900 shadow-inner`}
        >
          <ServiceMonoIcon type={solutionSlugToIcon(slug)} className="h-14 w-20" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-wider text-red-600">솔루션별 AX</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          {d.title}
        </h1>
        {narrative ? (
          <p className="mt-6 text-base leading-relaxed text-gray-700">{narrative}</p>
        ) : null}

        <section className="mt-12 space-y-8">
          <SolutionDetailViz slug={slug} detail={d} />
          <ListCard title="해결 가능한 문제" items={d.problems} />
          <ListCard title="주요 기능" items={d.features} highlight />
          <ListCard title="적용 산업" items={d.industries} />
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">도입 구조</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">{d.architecture}</p>
          </div>
          <ListCard title="기대 효과" items={d.effects} />
          <ListCard title="관련 Use Case" items={d.useCases} />
        </section>
      </div>
    </div>
  );
}

function ListCard({
  title,
  items,
  highlight,
}: {
  title: string;
  items: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl border p-8 shadow-sm ${
        highlight
          ? "border-violet-100 bg-gradient-to-br from-violet-50/90 to-white"
          : "border-gray-100 bg-white"
      }`}
    >
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-gray-600">
        {items.map((x) => (
          <li key={x} className="flex gap-2">
            <span className="text-violet-600">—</span>
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
