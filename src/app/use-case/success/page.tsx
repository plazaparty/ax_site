import DiscoveryCard from "@/components/DiscoveryCard";
import SitePageHero from "@/components/SitePageHero";
import { portalPanelTone } from "@/data/portalVisual";

const items = [
  {
    slug: "manufacturing-quality",
    title: "제조 품질검사 혁신",
    hint: "불량 탐지 리드타임 · 재작업 비용 개선",
  },
  {
    slug: "public-civic",
    title: "공공 민원 AI",
    hint: "1차 응답 만족도 · 상담 준비 시간",
  },
  {
    slug: "finance-advisory",
    title: "금융 상담 자동화",
    hint: "상담 준비 시간 · 검색 실패율",
  },
];

export default function SuccessListPage() {
  const { pageBg } = portalPanelTone.case;

  return (
    <div className={`${pageBg} pb-28 pt-10 md:pb-16`}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SitePageHero
          glyph="case"
          eyebrow="고객 성공 사례"
          title="수치와 인터뷰가 함께 있는 스토리"
          description="문제·솔루션·과정·결과·확장까지 한 흐름으로 정리했습니다. 카드를 선택해 상세 스토리라인을 확인하세요."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {items.map((i) => (
            <DiscoveryCard
              key={i.slug}
              href={`/use-case/success/${i.slug}`}
              title={i.title}
              description={i.hint}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
