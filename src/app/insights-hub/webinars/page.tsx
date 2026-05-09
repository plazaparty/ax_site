import InsightContentCard from "@/components/InsightContentCard";
import InsightsPageHero from "@/components/InsightsPageHero";
import { insightPanelTone } from "@/data/insightVisual";

const webinars = [
  {
    title: "예정: AX Discovery 라이브 세션",
    hint: "선택형 진단 데모와 Q&A",
  },
  {
    title: "다시보기: 금융 문서 AI 파일럿 사례",
    hint: "PoC 범위·평가지표·거버넌스 논의",
  },
  {
    title: "발표자료 허브",
    hint: "내부 공유용 요약 슬라이드 번들",
  },
];

export default function WebinarsPage() {
  const { pageBg } = insightPanelTone.webinars;

  return (
    <div className={`${pageBg} pb-28 pt-10 md:pb-16`}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <InsightsPageHero
          visual="webinars"
          label="웨비나"
          title="함께 논의하는 장"
          description="라이브 세션과 다시보기·자료를 한곳에서 찾을 수 있도록 정리했습니다. VOD·슬라이드는 운영 환경에 맞게 연동할 수 있습니다."
          layout="simple"
        />
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {webinars.map((w) => (
            <InsightContentCard
              key={w.title}
              href="/insights-hub/webinars"
              title={w.title}
              description={w.hint}
              visual="webinars"
              showIcon={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
