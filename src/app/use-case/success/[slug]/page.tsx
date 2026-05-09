import Link from "next/link";
import { notFound } from "next/navigation";
import DetailGlyphBanner from "@/components/DetailGlyphBanner";
import { successStories } from "@/data/useCaseStories";
import UseCaseDetailView from "./UseCaseDetailView";

export function generateStaticParams() {
  return Object.keys(successStories).map((slug) => ({ slug }));
}

export default async function SuccessDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = successStories[slug];
  if (!s) notFound();

  return (
    <article className="bg-gradient-to-b from-emerald-50/30 to-white pb-28 pt-10 md:pb-16">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <DetailGlyphBanner glyph="case" />
        <p className="text-xs font-semibold uppercase tracking-wider text-red-600">스토리형 케이스 라이브러리</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">{s.title}</h1>
        <p className="mt-6 text-sm leading-relaxed text-gray-600">
          문제 → AX 적용 → KPI까지 한 흐름으로 정렬했습니다. 아래 도식을 먼저 보고 세부 서술로 내려가세요.
        </p>

        <section className="mt-10 space-y-8">
          <UseCaseDetailView slug={slug} story={s} />

          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">고객 문제</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">{s.customerProblem}</p>
          </div>
          <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50/80 to-white p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">적용 KT 솔루션</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">{s.solution}</p>
          </div>
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">구축 과정</h2>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-gray-600">
              {s.process.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ol>
          </div>
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">결과</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">{s.outcome}</p>
          </div>
          <div className="rounded-3xl border border-gray-900 bg-gray-900 p-8 text-white">
            <h2 className="text-lg font-semibold">현장 인사이트</h2>
            <blockquote className="mt-5 border-l-2 border-red-400 pl-5 text-sm leading-relaxed text-white/85">
              “{s.quote}”
            </blockquote>
          </div>
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">확장 가능성</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">{s.expansion}</p>
          </div>
        </section>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/ax-consulting"
            className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-2xl bg-gray-900 px-5 text-sm font-semibold text-white hover:bg-gray-800 sm:flex-none"
          >
            AX 컨설팅
          </Link>
          <Link
            href="/use-case"
            className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-2xl border border-gray-200 px-5 text-sm font-semibold text-gray-900 hover:bg-gray-50 sm:flex-none"
          >
            다른 사례 보기
          </Link>
        </div>
      </div>
    </article>
  );
}
