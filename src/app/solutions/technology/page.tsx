import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import ImageCard from "@/components/ImageCard";
import CTASection from "@/components/CTASection";
import { technologyItems } from "@/data/solutionsTechnology";

export default function SolutionsTechnologyPage() {
  return (
    <>
      <PageHero
        glyph="gear"
        eyebrow="Solutions · Technology"
        title="AX를 구현하는 핵심 기술 구성"
        description="인프라·클라우드·모델·데이터·Agent·운영 체계를 ‘실행 구조’로 연결해 소개합니다. (시연용 더미)"
      />

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <SectionTitle
          align="left"
          title="Technology Cards"
          subtitle="기술을 ‘나열’하기보다, 도입과 운영까지 이어지는 구성 요소로 정리했습니다."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technologyItems.map((t, idx) => (
            <ImageCard
              key={t.id}
              title={t.title}
              description={t.tagline}
              imageUrl={t.imageUrl}
              overlayText={`T${idx + 1}`}
              hoverDetail={[t.summary, `키워드: ${t.keywords.join(", ")}`].join(
                "\n"
              )}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/ax-consulting"
            className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-600"
          >
            우리 조직에 맞는 구성 추천받기
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
        title="기술 선택을 ‘도입 구조’로 바꾸면 실행 속도가 빨라집니다"
        description="AI 컨설턴트가 과제·단계·규제 조건을 함께 고려해 제안 후보를 정리합니다."
        buttonLabel="AI 컨설턴트 시작하기"
        secondaryButtonLabel="상담 연결"
      />
    </>
  );
}

