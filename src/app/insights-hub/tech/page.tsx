import InsightContentCard from "@/components/InsightContentCard";
import InsightsPageHero from "@/components/InsightsPageHero";
import { insightPanelTone } from "@/data/insightVisual";

const ideas = [
  {
    title: "AI Agent란 무엇인가 (CXO용)",
    hint: "기술 나열 대신 권한·감사·평가 관점에서 설명",
  },
  {
    title: "RAG 활용 전략",
    hint: "언제 지식 검색이 최선인지/fine-tuning과 비교 기준",
  },
  {
    title: "업무 자동화 패턴 라이브러리",
    hint: "반복 업무를 워크플로와 Agent로 나누는 실무 규칙",
  },
  {
    title: "모델 평가와 운영 가드레일",
    hint: "프롬프트가 아니라 회귀 테스트·로그 설계가 장기 성능을 좌우",
  },
];

export default function TechInsightsPage() {
  const { pageBg } = insightPanelTone.tech;

  return (
    <div className={`${pageBg} pb-28 pt-10 md:pb-16`}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <InsightsPageHero
          visual="tech"
          label="기술 인사이트"
          title="비즈니스 렌즈로 보는 기술"
          description="스택 나열 대신 “언제 쓰고, 무엇을 지표로 관리할지”에 집중했습니다. 각 카드는 내부 교육·제안서에 바로 붙일 수 있는 한 장 분량입니다."
          layout="simple"
        />
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {ideas.map((i) => (
            <InsightContentCard
              key={i.title}
              href="/insights-hub/tech"
              title={i.title}
              description={i.hint}
              visual="tech"
              showIcon={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
