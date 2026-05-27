import { notFound } from "next/navigation";
import DetailGlyphBanner from "@/components/DetailGlyphBanner";
import { successStories } from "@/data/useCaseStories";
import AxKtDetailFooter from "@/ax-kt/components/AxKtDetailFooter";
import { USE_CASES } from "@/ax-kt/useCaseData";
import UseCaseDetailView from "@/app/use-case/success/[slug]/UseCaseDetailView";

export default async function UseCaseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const numId = Number(id);
  const uc = USE_CASES.find((u) => u.id === numId);
  if (!uc) notFound();

  const story = successStories[uc.successSlug];
  if (!story) notFound();

  return (
    <article>
      <DetailGlyphBanner glyph="case" />
      <p className="text-xs font-semibold uppercase tracking-wider text-red-600">Use Case</p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">{story.title}</h1>
      <p className="mt-4 text-sm leading-relaxed text-gray-600">
        문제 → AX 적용 → KPI까지 한 흐름으로 정렬했습니다.
      </p>

      <section className="mt-8 space-y-6">
        <UseCaseDetailView slug={uc.successSlug} story={story} />

        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-lg font-semibold text-gray-900">고객 문제</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">{story.customerProblem}</p>
        </div>
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50/80 to-white p-6 shadow-sm md:p-8">
          <h2 className="text-lg font-semibold text-gray-900">적용 KT 솔루션</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">{story.solution}</p>
        </div>
        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-lg font-semibold text-gray-900">구축 과정</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-gray-600">
            {story.process.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ol>
        </div>
        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-lg font-semibold text-gray-900">결과</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">{story.outcome}</p>
        </div>
        <div className="rounded-3xl border border-gray-900 bg-gray-900 p-6 text-white md:p-8">
          <h2 className="text-lg font-semibold">현장 인사이트</h2>
          <blockquote className="mt-4 border-l-2 border-red-400 pl-4 text-sm leading-relaxed text-white/85">
            “{story.quote}”
          </blockquote>
        </div>
        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-lg font-semibold text-gray-900">확장 가능성</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">{story.expansion}</p>
        </div>
      </section>

      <AxKtDetailFooter />
    </article>
  );
}
