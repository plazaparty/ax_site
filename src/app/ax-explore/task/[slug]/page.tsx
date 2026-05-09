import { notFound } from "next/navigation";
import QualitativeImpactBars from "@/components/ax-viz/QualitativeImpactBars";
import TaskFlowStrip from "@/components/ax-viz/TaskFlowStrip";
import DetailGlyphBanner from "@/components/DetailGlyphBanner";
import { taskDetails } from "@/data/detailContent";
import { taskNarrative } from "@/data/detailNarratives";

export function generateStaticParams() {
  return Object.keys(taskDetails).map((slug) => ({ slug }));
}

export default async function TaskDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = taskDetails[slug];
  if (!d) notFound();
  const narrative = taskNarrative[slug] ?? "";

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white pb-28 pt-10 md:pb-16">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <DetailGlyphBanner glyph="clipboard" />
        <p className="text-xs font-semibold uppercase tracking-wider text-red-600">
          업무별 AX
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          {d.title}
        </h1>
        {narrative ? (
          <p className="mt-6 text-base leading-relaxed text-gray-700">{narrative}</p>
        ) : null}

        <section className="mt-12 space-y-8">
          <TaskFlowStrip problem={d.problem} ideas={d.aiIdeas} solutions={d.solutions} steps={d.steps} />
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">문제 정의</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">{d.problem}</p>
          </div>
          <QualitativeImpactBars
            title="추천 솔루션 (상대 적합)"
            subtitle="포트폴리오 축별로 상대 비중을 시각화한 데모입니다."
            items={d.solutions}
            tone="sky"
            salt={`${slug}-sol`}
          />
          <ListCard title="적용 가능한 AI" items={d.aiIdeas} />
          <ListCard title="추천 단계" items={d.steps} />
          <ListCard title="Use Case" items={d.useCases} />
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
          ? "border-sky-100 bg-gradient-to-br from-sky-50/90 to-white"
          : "border-gray-100 bg-white"
      }`}
    >
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-gray-600">
        {items.map((x) => (
          <li key={x} className="flex gap-2">
            <span className="text-sky-600">—</span>
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
