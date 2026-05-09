import InsightContentCard from "@/components/InsightContentCard";
import InsightsPageHero from "@/components/InsightsPageHero";
import { insightPanelTone } from "@/data/insightVisual";

const reports = [
  {
    title: "제조 AX 가이드 2026",
    hint: "현장 데이터 성숙도별 우선 과제와 파일럿 체크리스트",
  },
  {
    title: "공공 AI 전략 브리프",
    hint: "민원·행정·보안 트레이드오프를 ROI 관점으로 재정렬",
  },
  {
    title: "금융 AI Agent 도입 보고서",
    hint: "컴플라이언스 내 Agent 운영 시 필요한 거버넌스 패키지",
  },
];

export default function ReportsPage() {
  const { pageBg } = insightPanelTone.reports;

  return (
    <div className={`${pageBg} pb-28 pt-10 md:pb-16`}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <InsightsPageHero
          visual="reports"
          label="AX 리포트"
          title="실행형 리포트"
          description="각 카드는 실제 PDF 연동 전 UX 자리표시자입니다. 비즈니스 의사결정 포인트만 남겼습니다."
          layout="simple"
        />
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {reports.map((r) => (
            <InsightContentCard
              key={r.title}
              href="/insights-hub/reports"
              title={r.title}
              description={r.hint}
              visual="reports"
              showIcon={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
