import DiscoveryCard from "@/components/DiscoveryCard";
import SitePageHero from "@/components/SitePageHero";
import { industriesExplore } from "@/data/discoveryHub";
import { portalPanelTone } from "@/data/portalVisual";

const highlights = [
  {
    title: "제조 품질 혁신",
    description: "비전 검사와 워크플로 결합으로 판정 근거를 표준화",
    href: "/use-case/success/manufacturing-quality",
  },
  {
    title: "금융 AI 상담",
    description: "지식 검색·상담 보조로 준비 시간과 검색 실패를 동시에 감소",
    href: "/use-case/success/finance-advisory",
  },
  {
    title: "공공 민원 자동화",
    description: "민원 유형별 근거 응답과 코칭 루프로 현장 역량 강화",
    href: "/use-case/success/public-civic",
  },
];

export default function UseCaseIndustryPage() {
  const { pageBg } = portalPanelTone.building;

  return (
    <div className={`${pageBg} pb-28 pt-10 md:pb-16`}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SitePageHero
          glyph="building"
          eyebrow="산업별 사례"
          title="산업 맥락의 현실적인 성공 스토리"
          description="대표 시나리오부터 시작해 같은 산업의 다른 과제로 확장할 수 있습니다. 아래 하이라이트와 AX 탐색 산업 카드로 교차 확인해 보세요."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {highlights.map((h) => (
            <DiscoveryCard
              key={h.href}
              href={h.href}
              title={h.title}
              description={h.description}
            />
          ))}
        </div>

        <h2 className="mt-16 text-xl font-semibold text-gray-900">
          산업별 AX와 교차 보기
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          과제 정의와 솔루션 매핑은 AX 탐색 페이지와 함께 보시면 이해가 빠릅니다.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industriesExplore.map((i) => (
            <DiscoveryCard
              key={i.slug}
              href={i.href}
              title={i.title}
              description={i.pain}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
