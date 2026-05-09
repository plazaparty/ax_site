import { notFound } from "next/navigation";
import QualitativeImpactBars from "@/components/ax-viz/QualitativeImpactBars";
import StageMaturityStrip from "@/components/ax-viz/StageMaturityStrip";
import DetailGlyphBanner from "@/components/DetailGlyphBanner";
import { stageDetails } from "@/data/detailContent";
import { stageNarrative } from "@/data/detailNarratives";

export function generateStaticParams() {
  return Object.keys(stageDetails).map((slug) => ({ slug }));
}

export default async function StageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = stageDetails[slug];
  if (!d) notFound();
  const narrative = stageNarrative[slug] ?? "";

  return (
    <div className="bg-gradient-to-b from-amber-50/40 to-white pb-28 pt-10 md:pb-16">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <DetailGlyphBanner glyph="stairs" />
        <p className="text-xs font-semibold uppercase tracking-wider text-red-600">
          도입단계별 AX
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          {d.title}
        </h1>
        {narrative ? (
          <p className="mt-6 text-base leading-relaxed text-gray-700">{narrative}</p>
        ) : null}

        <section className="mt-12 space-y-8">
          <StageMaturityStrip activeSlug={slug} />
          <div className="grid gap-8 lg:grid-cols-2">
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
          <Block title="현재 특징" items={d.traits} />
          <Block title="추천 솔루션" items={d.solutions} />
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">예상 기간</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">{d.horizon}</p>
          </div>
          <Block title="관련 사례 힌트" items={d.cases} />
        </section>
      </div>
    </div>
  );
}

function Block({
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
          ? "border-amber-100 bg-gradient-to-br from-amber-50/90 to-white"
          : "border-gray-100 bg-white"
      }`}
    >
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-gray-600">
        {items.map((x) => (
          <li key={x} className="flex gap-2">
            <span className="text-amber-600">—</span>
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
