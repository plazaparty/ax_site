import DemoExperience from "@/components/DemoExperience";

export default function DemoAgentPage() {
  return (
    <DemoExperience
      eyebrow="데모 / 체험 · AI Agent"
      title="업무 단위 Agent 체험"
      problem="서로 다른 시스템과 도구를 사람이 오가며 처리하는 반복 업무가 있습니다."
      experienceHint="간단한 목표를 입력하면 Agent가 단계를 나누고 도구 호출을 시뮬레이션합니다. (샘플)"
      industries={["금융", "제조", "통신"]}
      effects={["처리 시간 단축", "예외 케이스 표준화", "운영 가시성 확보"]}
      useCaseHref="/use-case/success/finance-advisory"
      useCaseLabel="금융 상담 자동화 사례"
    />
  );
}
