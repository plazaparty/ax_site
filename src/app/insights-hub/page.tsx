import InsightsPageHero from "@/components/InsightsPageHero";
import InsightChannelCard from "@/components/InsightChannelCard";
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
      </div>
    </div>
  );
}
