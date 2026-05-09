import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

export default function ResourcesContactPage() {
  return (
    <>
      <PageHero
        glyph="envelope"
        eyebrow="Resources · Contact Us"
        title="도입 문의"
        description="조직 상황을 간단히 남기면, 적합한 흐름으로 빠르게 연결해 드립니다. (시연용 더미)"
      />

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <SectionTitle
          align="left"
          title="문의 정보 (mock)"
          subtitle="실서비스에서는 리드 수집/CRM 연동/보안 정책을 적용할 수 있습니다."
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold text-gray-600">
                  회사명
                </label>
                <input
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-red-300"
                  placeholder="예: KT"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600">
                  담당자
                </label>
                <input
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-red-300"
                  placeholder="예: 홍길동"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600">
                  이메일
                </label>
                <input
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-red-300"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600">
                  연락처
                </label>
                <input
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-red-300"
                  placeholder="010-0000-0000"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-xs font-semibold text-gray-600">
                문의 내용
              </label>
              <textarea
                className="mt-2 min-h-[140px] w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-red-300"
                placeholder="예: AX 도입 단계 / 목표 / 관심 과제 / 규제 환경 등을 간단히 남겨주세요."
              />
            </div>
            <button
              type="button"
              className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-red-500 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-red-600"
            >
              문의 제출 (mock)
            </button>
            <p className="mt-3 text-xs leading-relaxed text-gray-500">
              시연용 화면입니다. 실제 제출/저장은 동작하지 않습니다.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-7">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              추천 흐름
            </p>
            <h3 className="mt-2 text-lg font-semibold text-gray-900">
              “탐색 → 이해 → 추천 → 상담”
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              먼저 AI 컨설턴트로 관심 과제와 도입 단계를 정리한 뒤, 필요한 경우
              담당자 상담으로 자연스럽게 이어지는 흐름을 권장합니다.
            </p>
            <div className="mt-5 rounded-xl bg-gray-50 p-4">
              <p className="text-xs font-semibold text-gray-500">
                빠른 연결 (mock)
              </p>
              <p className="mt-1 text-sm text-gray-700">
                ax-sales@kt.com / 1588-0000
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="AI 컨설턴트로 먼저 정리하면 상담이 훨씬 빨라집니다"
        description="입력한 내용을 기반으로 추천을 시작하고, 필요 시 담당자 연결까지 안내합니다."
        buttonLabel="AI 컨설턴트 시작하기"
        secondaryButtonLabel="상담 연결"
      />
    </>
  );
}

