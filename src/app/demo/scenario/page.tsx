import DemoExperience from "@/components/DemoExperience";

export default function DemoScenarioPage() {
  return (
    <DemoExperience
      eyebrow="데모 / 체험 · 시나리오"
      title="엔드투엔드 시나리오 체험"
      problem="단일 기능 데모로는 ‘운영까지 가는 길’이 보이지 않습니다."
      experienceHint="민원 접수 → 문서 분석 → 워크플로 라우팅까지 한 흐름을 연속 재생합니다."
      industries={["공공", "금융"]}
      effects={["부서 간 연결 가시화", "운영 지표 설계 논의 촉발"]}
      useCaseHref="/use-case/success/public-civic"
      useCaseLabel="공공 민원 자동화 사례"
    />
  );
}
