import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import { caseStudies } from "@/data/caseStudies";

export default function InsightsCaseStudiesPage() {
  return (
    <>
      <PageHero
        glyph="case"
        eyebrow="Insights · Case Studies"
        title="고객 사례로 보는 AX 적용 방식"
        description="도입 방식과 성과 포인트를 짧은 카드로 정리했습니다. 실제 프로젝트에서는 업종/규모/규제 조건에 따라 세부가 달라집니다. (시연용 더미)"
      />

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <SectionTitle
          align="left"
          title="Case Cards"
          subtitle="“무엇을 했는가”보다 “어떻게 운영 가능한 형태로 만들었는가”에 초점을 맞췄습니다."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <article
              key={c.id}
              className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-7"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="inline-flex rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700 ring-1 ring-gray-200">
                  {c.industry}
                </span>
                <span className="text-xs font-medium text-gray-400">
                  demo case
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                {c.summary}
              </p>
              <div className="mt-4 rounded-xl bg-gray-50 p-4">
                <p className="mb-2 text-xs font-semibold text-gray-500">
                  기대 효과
                </p>
                <ul className="space-y-1 text-sm text-gray-700">
                  {c.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/ax-consulting"
            className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-600"
          >
            유사 사례 기반 추천받기
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </section>

      <CTASection
        title="우리 조직에 맞는 ‘현실적인’ 적용 방식을 함께 찾습니다"
        description="AI 컨설턴트가 산업·단계·규제 조건을 함께 고려해 다음 액션을 제안합니다."
        buttonLabel="AI 컨설턴트 시작하기"
        secondaryButtonLabel="상담 연결"
      />
    </>
  );
}

