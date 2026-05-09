import InsightContentCard from "@/components/InsightContentCard";
import InsightsPageHero from "@/components/InsightsPageHero";
import { insightPanelTone } from "@/data/insightVisual";

const trends = [
  {
    title: "Enterprise GenAI 성숙도 곡선",
    hint: "도입 단계별 예산·조직·데이터 전제 정리",
  },
  {
    title: "AI Agent 상용화 트렌드",
    hint: "라이브러리 경쟁을 넘어 운영 패턴이 핵심",
  },
  {
    title: "산업별 규제 업데이트 큐레이션",
    hint: "금융·의료·공공의 최근 가이드 변화 스냅샷",
  },
  {
    title: "제조 현장 데이터 성숙도",
    hint: "센서·영상·MES 연계 수준에 따른 AX 우선순위",
  },
];

export default function TrendsPage() {
  const { pageBg } = insightPanelTone.trends;

  return (
    <div className={`${pageBg} pb-28 pt-10 md:pb-16`}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <InsightsPageHero
          visual="trends"
          label="산업 트렌드"
          title="시장의 방향, 짧게 읽기"
          description="기술 키워드보다 규제·비용·고객 기대가 어떻게 움직이는지에 초점을 맞췄습니다. 각 카드는 브리프 형태로 내부 공유에 활용할 수 있는 요약입니다."
          layout="simple"
        />
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {trends.map((t) => (
            <InsightContentCard
              key={t.title}
              href="/insights-hub/trends"
              title={t.title}
              description={t.hint}
              visual="trends"
              showIcon={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
