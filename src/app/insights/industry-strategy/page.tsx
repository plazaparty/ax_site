import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import InsightCard from "@/components/InsightCard";
import CTASection from "@/components/CTASection";

const strategyItems = [
  {
    id: "s1",
    title: "산업 전략 1: 규제/보안 요구를 ‘설계 조건’으로 고정",
    description:
      "보안·감사·개인정보 요구를 나중에 맞추면 비용이 커집니다. 시작부터 운영 설계에 포함해야 합니다.",
    whyItMatters:
      "승인과 확산이 가능한 구조를 만들어야 PoC가 실사용으로 이어집니다.",
  },
  {
    id: "s2",
    title: "산업 전략 2: ‘업무 단위’로 쪼개서 Agent를 조합",
    description:
      "산업별 시나리오를 업무 단위로 정의하고, Agent Builder로 조합하면 적용 속도가 빨라집니다.",
    whyItMatters:
      "현장 적용은 ‘기술’보다 ‘업무 흐름 설계’가 더 큰 차이를 만듭니다.",
  },
  {
    id: "s3",
    title: "산업 전략 3: Data for AI 품질과 권한 설계가 승부처",
    description:
      "RAG 기반 지식검색/요약은 권한·감사·품질이 준비될 때 실무 가치가 급격히 커집니다.",
    whyItMatters:
      "데이터 통제와 신뢰가 확보되어야 사용자 확대(확산) 단계로 넘어갈 수 있습니다.",
  },
] as const;

export default function InsightsIndustryStrategyPage() {
  return (
    <>
      <PageHero
        glyph="strategy"
        eyebrow="Insights · Industry Strategy"
        title="산업별 AX 전략 포인트"
        description="산업 특성(규제·데이터·업무 흐름)에 따라 전략의 무게중심이 달라집니다. 핵심 원칙만 카드로 정리했습니다. (시연용 더미)"
      />

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <SectionTitle
          align="left"
          title="Strategy Cards"
          subtitle="한 번에 읽히도록 ‘결정 포인트’ 중심으로 정리했습니다."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {strategyItems.map((t) => (
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
            전략 기반 추천받기
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
        title="전략을 실행 계획으로 바꾸는 것이 AX의 핵심입니다"
        description="AI 컨설턴트가 산업·단계·기술 선택을 한 흐름으로 정리합니다."
        buttonLabel="AI 컨설턴트 시작하기"
        secondaryButtonLabel="상담 연결"
      />
    </>
  );
}

