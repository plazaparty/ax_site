import Link from "next/link";
import { notFound } from "next/navigation";
import DetailGlyphBanner from "@/components/DetailGlyphBanner";
import { INSIGHT_EXAMPLE_SLUGS, getInsightExample } from "@/data/insightExamples";

export function generateStaticParams() {
  return INSIGHT_EXAMPLE_SLUGS.map((slug) => ({ slug }));
}

export default async function InsightExamplePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getInsightExample(slug);
  if (!article) notFound();

  return (
    <article className="bg-gradient-to-b from-slate-50 to-white pb-28 pt-10 md:pb-16">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <DetailGlyphBanner glyph="book" />
        <p className="text-xs font-semibold uppercase tracking-wider text-red-600">인사이트 · 예시</p>
        <p className="mt-2 text-[11px] font-medium text-gray-500">
          {article.published} · {article.readTime}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">{article.title}</h1>
        <span className="mt-4 inline-block rounded-full bg-red-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-red-800">
          {article.tag}
        </span>
        <p className="mt-6 text-base leading-relaxed text-gray-700">{article.dek}</p>

        <div className="mt-12 space-y-10">
          {article.sections.map((sec) => (
            <section key={sec.heading} className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">{sec.heading}</h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">{sec.body}</p>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-3xl border border-gray-900 bg-gray-900 p-8 text-white">
          <h2 className="text-lg font-semibold">핵심 정리</h2>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/85">
            {article.takeaways.map((t) => (
              <li key={t} className="flex gap-2">
                <span className="text-red-400">·</span>
                {t}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/ax-consulting"
            className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-2xl bg-gray-900 px-5 text-sm font-semibold text-white hover:bg-gray-800 sm:flex-none"
          >
            AX 컨설팅
          </Link>
          <Link
            href="/"
            className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-2xl border border-gray-200 px-5 text-sm font-semibold text-gray-900 hover:bg-gray-50 sm:flex-none"
          >
            홈으로
          </Link>
        </div>
      </div>
    </article>
  );
}
