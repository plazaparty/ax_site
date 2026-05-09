import DiscoveryCard from "@/components/DiscoveryCard";
import SitePageHero from "@/components/SitePageHero";
import { stagesExplore } from "@/data/discoveryHub";
import { portalPanelTone } from "@/data/portalVisual";

export default function UseCaseStagePage() {
  const { pageBg } = portalPanelTone.stairs;

  return (
    <div className={`${pageBg} pb-28 pt-10 md:pb-16`}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SitePageHero
          glyph="stairs"
          eyebrow="도입단계별 사례"
          title="같은 과제도 단계마다 다른 접근"
          description="PoC 성공 사례, 부서 확산, 전사 표준화까지 단계별로 무엇이 바뀌는지 확인합니다. 각 단계 상세는 AX 탐색과 동일한 프레임으로 이어집니다."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {stagesExplore.map((s) => (
            <DiscoveryCard
              key={s.slug}
              href={`/ax-explore/stage/${s.slug}`}
              title={s.title}
              description="추천 과제·기간·운영 포커스를 요약했습니다."
            />
          ))}
        </div>
      </div>
    </div>
  );
}
