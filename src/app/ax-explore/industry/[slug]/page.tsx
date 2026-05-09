import { notFound } from "next/navigation";
import QualitativeImpactBars from "@/components/ax-viz/QualitativeImpactBars";
import IndustryMonoIcon from "@/components/icons/IndustryMonoIcon";
import { industryDetails } from "@/data/detailContent";
import { industryNarrative } from "@/data/detailNarratives";
import { industryPanelTone, slugToIndustryVisual } from "@/data/industryVisual";

export function generateStaticParams() {
  return Object.keys(industryDetails).map((slug) => ({ slug }));
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = industryDetails[slug];
  if (!d) notFound();
  const narrative = industryNarrative[slug] ?? "";
  const vis = slugToIndustryVisual(slug);
  const tone = industryPanelTone[vis];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white pb-28 pt-10 md:pb-16">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div
          className={`mb-10 flex flex-col items-center justify-center gap-4 rounded-3xl border bg-gradient-to-br px-8 py-10 md:flex-row md:py-12 ${tone.border} ${tone.bg}`}
        >
          <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-white shadow-sm">
            <IndustryMonoIcon industry={vis} className={`h-20 w-24 ${tone.icon}`} />
          </div>
          <p className="max-w-xs text-center text-xs text-gray-600 md:text-left">
            단색 라인 아이콘으로 산업 맥락을 표현했습니다. 금융은 문서·지표 형태를,
            제조는 설비 실루엣을 강조합니다.
          </p>
        </div>
        <p className="text-xs font-semibold uppercase tracking-wider text-red-600">
          산업별 AX
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          {d.title}
        </h1>
        {narrative ? (
          <p className="mt-6 text-base leading-relaxed text-gray-700">{narrative}</p>
        ) : null}

        <section className="mt-12 space-y-8">
          <CardBlock title="주요 Pain Point" items={d.painPoints} />
          <CardBlock title="추천 AX 시나리오" items={d.scenarios} />
          <CardBlock title="추천 솔루션" items={d.solutions} accent />
          <QualitativeImpactBars title="기대 효과" items={d.effects} tone="rose" salt={slug} />
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              관련 Use Case
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-gray-700">
              {d.useCases.map((u) => (
                <li key={u} className="flex gap-2">
                  <span className="text-red-500">·</span>
                  <span>{u}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
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
      className={`rounded-3xl border p-8 shadow-sm ${
        accent
          ? "border-red-100 bg-gradient-to-br from-red-50/80 to-white"
          : "border-gray-100 bg-white"
      }`}
    >
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-gray-600">
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
