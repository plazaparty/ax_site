import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import ImageCard from "@/components/ImageCard";
import CTASection from "@/components/CTASection";
import { industries } from "@/data/axIndustry";

function industryHoverDetail(ind: (typeof industries)[0]) {
  return [
    `대표 적용: ${ind.useCase}`,
    `기대 효과: ${ind.benefit}`,
    `추천 상품 예시: ${ind.productHint}`,
  ].join("\n");
}

export default function SolutionsIndustryPage() {
  return (
    <>
      <PageHero
        glyph="building"
        eyebrow="Solutions · Industry Solutions"
        title="산업 맥락에 맞는 AX 적용"
        description="규제·데이터·고객 접점이 다른 산업별로, 대표 시나리오와 기대 효과를 이미지 중심 카드로 정리했습니다."
      />

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <SectionTitle
          align="left"
          title="Industry Solutions"
          subtitle="산업별 요구를 ‘업무 단위’로 쪼개고, Agent·Data for AI·운영 체계를 함께 제안합니다."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <ImageCard
              key={ind.id}
              title={ind.name}
              description={ind.tagline}
              imageUrl={ind.imageUrl}
              overlayText="Industry"
              hoverDetail={industryHoverDetail(ind)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/ax-consulting"
            className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-600"
          >
            우리 산업에 맞는 추천받기
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
        title="산업 특화 요구를 반영한 맞춤 제안이 필요하신가요?"
        description="AI 컨설턴트가 산업·단계·규제 조건을 묶어 상담 연결까지 안내합니다."
        buttonLabel="AI 컨설턴트 시작하기"
        secondaryButtonLabel="상담 연결"
      />
    </>
  );
}

