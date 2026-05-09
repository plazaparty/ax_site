import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import { brochures } from "@/data/brochures";

export default function ResourcesBrochuresPage() {
  return (
    <>
      <PageHero
        glyph="book"
        eyebrow="Resources · Brochures"
        title="소개 자료 다운로드"
        description="내부 공유와 검토를 위한 요약 자료입니다. 실제 서비스에서는 권한/로그 기반으로 다운로드 이력을 관리할 수 있습니다. (시연용 더미)"
      />

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <SectionTitle
          align="left"
          title="Brochure Cards"
          subtitle="필요한 자료를 빠르게 내려받고, 팀과 공유해 보세요."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {brochures.map((b) => (
            <article
              key={b.id}
              className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-7"
            >
              <h3 className="text-lg font-semibold text-gray-900">{b.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                {b.description}
              </p>
              <button
                type="button"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-50"
                aria-label={`${b.title} 다운로드 (mock)`}
              >
                {b.fileLabel}
                <svg
                  className="h-4 w-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v12m0 0l4-4m-4 4l-4-4M4 17v3h16v-3"
                  />
                </svg>
              </button>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="자료를 보고 나니, 우리 조직 상황에 맞춘 정리가 필요하신가요?"
        description="AI 컨설턴트가 도입 단계와 과제를 바탕으로 제안 후보를 정리해 드립니다."
        buttonLabel="AI 컨설턴트 시작하기"
        secondaryButtonLabel="상담 연결"
      />
    </>
  );
}

