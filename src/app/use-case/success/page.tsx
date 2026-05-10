import DiscoveryCard from "@/components/DiscoveryCard";
import SitePageHero from "@/components/SitePageHero";
import { USE_CASE_SUCCESS_SLUG_ORDER } from "@/data/useCaseLibraryOrder";
import { successStories } from "@/data/useCaseStories";
import { portalPanelTone } from "@/data/portalVisual";

export default function SuccessListPage() {
  const { pageBg } = portalPanelTone.case;

  const items = USE_CASE_SUCCESS_SLUG_ORDER.map((slug) => {
    const st = successStories[slug];
    return {
      slug,
      title: st.title,
      hint: st.metrics.map((m) => `${m.label} ${m.value}`).join(" · "),
    };
  });

  return (
    <div className={`${pageBg} pb-28 pt-10 md:pb-16`}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SitePageHero
          glyph="case"
          eyebrow="고객 성공 사례"
          title="수치와 인터뷰가 함께 있는 스토리"
          description="문제·솔루션·과정·결과·확장까지 한 흐름으로 정리했습니다. 카드를 선택해 상세 스토리라인을 확인하세요."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
