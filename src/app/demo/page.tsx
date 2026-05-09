import DiscoveryCard from "@/components/DiscoveryCard";
import SitePageHero from "@/components/SitePageHero";
import { demoEntries } from "@/data/discoveryHub";
import { portalPanelTone } from "@/data/portalVisual";

export default function DemoHubPage() {
  const { pageBg } = portalPanelTone.play;

  return (
    <div className={`${pageBg} pb-28 pt-10 md:pb-16`}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SitePageHero
          glyph="play"
          eyebrow="데모 / 체험"
          title="설명보다 경험으로 이해하기"
          description="실제 연동 전이라도 시나리오 기반으로 ‘문제 → 체험 → 성과’ 흐름을 따라가게 설계했습니다. 각 카드는 전용 체험 화면으로 연결됩니다."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {demoEntries.map((d) => (
            <DiscoveryCard
              key={d.slug}
              href={d.href}
              title={d.title}
              description="샘플 UI로 흐름만 확인할 수 있습니다."
            />
          ))}
        </div>

        <section className="mt-14 rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-900 via-gray-900 to-slate-950 p-8 text-white shadow-xl">
          <h2 className="text-lg font-semibold">데모 이후에는</h2>
          <p className="mt-2 text-sm text-white/70">
            체험에서 확인한 가설을 AX 컨설팅으로 구조화하면 제안·PoC 논의가 훨씬
            빨라집니다. 화면 하단에서 AX 컨설팅 또는 전문가 상담으로 연결할 수 있습니다.
          </p>
        </section>
      </div>
    </div>
  );
}
