export interface TrendItem {
  id: string;
  title: string;
  description: string;
  whyItMatters: string;
}

export const trendItems: TrendItem[] = [
  {
    id: "egenai",
    title: "Enterprise GenAI",
    description:
      "생성형 AI를 업무 시스템·데이터 거버넌스와 함께 설계하는 흐름이 표준화되고 있습니다.",
    whyItMatters:
      "도입 속도와 리스크를 동시에 잡으려면 RAG·권한·감사 로그가 핵심입니다.",
  },
  {
    id: "agent",
    title: "AI Agent",
    description:
      "도구 호출·다단계 추론으로 업무를 대신 수행하는 에이전트 패턴이 확산 중입니다.",
    whyItMatters:
      "단순 챗봇을 넘어, 실제 워크플로와 연결될 때 생산성 효과가 극대화됩니다.",
  },
  {
    id: "hyper",
    title: "Hyper Automation",
    description:
      "RPA와 AI·API를 묶어 end-to-end 프로세스를 자동화하는 접근이 주류입니다.",
    whyItMatters:
      "반복 업무 비용을 줄이면서도 예외 상황은 사람에게 넘기는 설계가 필요합니다.",
  },
  {
    id: "multi",
    title: "Multimodal AI",
    description:
      "텍스트·이미지·음성·영상을 함께 이해하는 멀티모달 모델이 현장 과제에 적용됩니다.",
    whyItMatters:
      "현장 데이터 형태가 다양한 산업일수록 단일 모달만으로는 한계가 있습니다.",
  },
  {
    id: "industry",
    title: "Industry-Specific AI",
    description:
      "규제·도메인 지식을 반영한 산업 특화 모델·템플릿 수요가 커지고 있습니다.",
    whyItMatters:
      "범용 모델만으로는 규정 준수·전문 용어 정확도에서 갭이 발생하기 쉽습니다.",
  },
  {
    id: "gov",
    title: "AI Governance",
    description:
      "모델·데이터·접근 통제에 대한 거버넌스 프레임이 도입 전제가 되고 있습니다.",
    whyItMatters:
      "신뢰할 수 있는 AX는 기술과 제도 설계가 함께 가야 지속 가능합니다.",
  },
];
