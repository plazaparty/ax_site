import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import InsightCard from "@/components/InsightCard";
import CTASection from "@/components/CTASection";
import { trendItems } from "@/data/axTrends";

export default function InsightsTrendsPage() {
  return (
    <>
      <PageHero
        glyph="chart"
        eyebrow="Insights · Trends"
        title="시장이 주목하는 AX·AI 흐름"
        description="엔터프라이즈 의사결정에 영향을 주는 주제를 짧은 인사이트 카드로 모았습니다. (시연용 더미)"
      />

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <SectionTitle
          align="left"
          title="Trend Insights"
          subtitle="핵심만 빠르게 파악할 수 있도록 요약했습니다."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {trendItems.map((t) => (
            <InsightCard
              key={t.id}
              title={t.title}
              description={t.description}
              whyItMatters={t.whyItMatters}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/ax-consulting"
            className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-600"
          >
            트렌드 기반 추천받기
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
        title="트렌드와 조직 상황을 함께 놓고 보면 우선순위가 선명해집니다"
        description="AI 컨설턴트가 과제·기술·거버넌스 조건을 함께 정리합니다."
        buttonLabel="AI 컨설턴트 시작하기"
        secondaryButtonLabel="상담 연결"
      />
    </>
  );
}

