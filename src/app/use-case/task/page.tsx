import DiscoveryCard from "@/components/DiscoveryCard";
import SitePageHero from "@/components/SitePageHero";
import { tasksExplore } from "@/data/discoveryHub";
import { portalPanelTone } from "@/data/portalVisual";

export default function UseCaseTaskPage() {
  const { pageBg } = portalPanelTone.clipboard;

  return (
    <div className={`${pageBg} pb-28 pt-10 md:pb-16`}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SitePageHero
          glyph="clipboard"
          eyebrow="업무별 사례"
          title="업무 과제 관점의 스토리"
          description="동일 업무 영역에서도 산업·규제·데이터 성숙도에 따라 접근이 달라집니다. 과제 카드를 선택해 AX 탐색 상세와 연결된 맥락을 확인하세요."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tasksExplore.map((t) => (
            <DiscoveryCard
              key={t.slug}
              href={`/ax-explore/task/${t.slug}`}
              title={`${t.title} AX`}
              description="업무 관점 Pain Point와 적용 AI를 빠르게 확인합니다."
            />
          ))}
        </div>
      </div>
    </div>
  );
}
