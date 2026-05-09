import InsightContentCard from "@/components/InsightContentCard";
import InsightsPageHero from "@/components/InsightsPageHero";
import { insightPanelTone } from "@/data/insightVisual";

const news = [
  {
    title: "KT AX 플랫폼 업데이트 노트",
    hint: "Discovery UX 개편과 컨설팅 플로우 소개",
  },
  {
    title: "파트너십 스냅샷",
    hint: "생태계 연계로 확장되는 실행력",
  },
  {
    title: "산업 뉴스 큐레이션",
    hint: "AI 규제·투자 흐름 하이라이트",
  },
  {
    title: "AX 거버넌스 브리프",
    hint: "데이터·모델·Agent 운영 체크리스트 요약",
  },
];

export default function NewsPage() {
  const { pageBg } = insightPanelTone.news;

  return (
    <div className={`${pageBg} pb-28 pt-10 md:pb-16`}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <InsightsPageHero
          visual="news"
          label="뉴스"
          title="빠른 업데이트"
          description="장문 기사 대신 의사결정에 필요한 팩트와 맥락만 남겼습니다. 실제 서비스에서는 CMS나 뉴스룸과 연동할 수 있습니다."
          layout="simple"
        />
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {news.map((n) => (
            <InsightContentCard
              key={n.title}
              href="/insights-hub/news"
              title={n.title}
              description={n.hint}
              visual="news"
              showIcon={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
