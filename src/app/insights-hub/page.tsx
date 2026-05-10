import Link from "next/link";
import InsightsPageHero from "@/components/InsightsPageHero";
import InsightChannelCard from "@/components/InsightChannelCard";
import { insightHighlights } from "@/data/homeDiscovery";
import { insightPanelTone } from "@/data/insightVisual";
import type { InsightVisualSlug } from "@/components/icons/InsightMonoIcon";

const groups: {
  title: string;
  href: string;
  hint: string;
  visual: InsightVisualSlug;
}[] = [
  {
    title: "산업 트렌드",
    href: "/insights-hub/trends",
    hint: "규제·비즈니스 모델·산업별 변화",
    visual: "trends",
  },
  {
    title: "기술 인사이트",
    href: "/insights-hub/tech",
    hint: "가치·적용 조건 중심의 기술 해설",
    visual: "tech",
  },
  {
    title: "뉴스",
    href: "/insights-hub/news",
    hint: "KT AX 및 산업 동향",
    visual: "news",
  },
  {
    title: "이벤트",
    href: "/insights-hub/events",
    hint: "세미나·웨비나·오프라인 세션",
    visual: "events",
  },
  {
    title: "AX 리포트",
    href: "/insights-hub/reports",
    hint: "실행형 PDF·브리프 자료",
    visual: "reports",
  },
  {
    title: "웨비나",
    href: "/insights-hub/webinars",
    hint: "라이브·다시보기·발표자료",
    visual: "webinars",
  },
];

export default function InsightsHubPage() {
  const bg = insightPanelTone.hub.pageBg;

  return (
    <div className={`${bg} pb-28 pt-10 md:pb-16`}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <InsightsPageHero
          visual="hub"
          label="인사이트"
          title="AX 전략 리더십 허브"
          description="채널별로 자료를 나누어 두었습니다. 필요한 주제로 들어가 살펴보세요."
          layout="simple"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <InsightChannelCard
              key={g.href}
              href={g.href}
              title={g.title}
              description={g.hint}
              visual={g.visual}
              showIcon={false}
            />
          ))}
        </div>

        <section className="mt-16 rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-sm md:p-8">
          <h2 className="text-lg font-semibold text-gray-900">예시 브리프</h2>
          <p className="mt-2 text-sm text-gray-600">
            짧은 형태의 전략·기술 브리프입니다. 카드를 누르면 예시 상세 페이지로 이동합니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {insightHighlights.map((it) => (
              <li key={it.href}>
                <Link
                  href={it.href}
                  className="flex h-full flex-col rounded-2xl border border-gray-100 bg-gray-50 px-4 py-4 transition-colors hover:border-red-200 hover:bg-white"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-700">{it.tag}</span>
                  <span className="mt-2 text-sm font-semibold leading-snug text-gray-900">{it.title}</span>
                  <span className="mt-3 text-xs font-semibold text-gray-500">읽기 →</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
