/** 홈·Use Case 허브에서 순차 큐레이션용 */

export type UseCaseJourneyStageSlug = "start" | "expand" | "enterprise" | "agent";

export interface CuratedUseCase {
  id: string;
  order: number;
  title: string;
  subtitle: string;
  tag: string;
  href: string;
  /** 짧은 리드 (카드 뉴스 톤) */
  dek: string;
  industries: string[];
  tasks: string[];
  solutions: string[];
  /** AX 탐색 도입 단계 축과 동일한 슬러그 */
  stageSlug: UseCaseJourneyStageSlug;
  kpis: string[];
  difficulty: "낮음" | "중간" | "높음";
  period: string;
}

export const curatedUseCases: CuratedUseCase[] = [
  {
    id: "mfg",
    order: 1,
    title: "제조 품질검사 혁신",
    subtitle: "Vision + 워크플로",
    tag: "제조",
    href: "/use-case/success/manufacturing-quality",
    dek: "판정 근거가 남는 검사 프로세스로 현장 설득과 확장을 동시에 잡은 사례입니다.",
    industries: ["제조"],
    tasks: ["품질"],
    solutions: ["Vision AX", "Workflow AI"],
    stageSlug: "expand",
    kpis: ["리드타임", "재작업"],
    difficulty: "중간",
    period: "8–14주",
  },
  {
    id: "public",
    order: 2,
    title: "공공 민원 AI",
    subtitle: "지식연동 상담",
    tag: "공공",
    href: "/use-case/success/public-civic",
    dek: "민원 유형을 구조화하고 1차 응답 품질을 끌어올린 운영형 도입 스토리입니다.",
    industries: ["공공"],
    tasks: ["민원", "상담"],
    solutions: ["AICC Plus", "Knowledge AI"],
    stageSlug: "enterprise",
    kpis: ["만족도", "준비 시간"],
    difficulty: "높음",
    period: "10–18주",
  },
  {
    id: "finance",
    order: 3,
    title: "금융 상담 자동화",
    subtitle: "RAG + 코칭",
    tag: "금융",
    href: "/use-case/success/finance-advisory",
    dek: "규정 변경이 잦은 환경에서 상담 준비 시간을 줄이고 검색 실패를 줄였습니다.",
    industries: ["금융"],
    tasks: ["상담", "문서"],
    solutions: ["Knowledge AI", "Agent Studio"],
    stageSlug: "expand",
    kpis: ["준비 시간", "검색 실패"],
    difficulty: "높음",
    period: "8–16주",
  },
  {
    id: "doc",
    order: 4,
    title: "문서 자동화 PoC",
    subtitle: "심사·계약 패키지",
    tag: "문서",
    href: "/use-case/task",
    dek: "문서 유형을 먼저 고정하고 HITL로 정확도를 담보한 PoC에서 전사 확장으로 이어진 흐름입니다.",
    industries: ["금융", "공공"],
    tasks: ["문서"],
    solutions: ["Document AI"],
    stageSlug: "start",
    kpis: ["처리량", "오류"],
    difficulty: "중간",
    period: "6–10주",
  },
  {
    id: "cc",
    order: 5,
    title: "고객센터 응대 표준화",
    subtitle: "AICC + 품질 관측",
    tag: "고객센터",
    href: "/use-case/industry",
    dek: "산업별 응대 시나리오를 모듈화해 온보딩과 품질 관리 비용을 동시에 낮춘 사례입니다.",
    industries: ["금융", "통신", "유통"],
    tasks: ["상담"],
    solutions: ["AICC Plus"],
    stageSlug: "expand",
    kpis: ["AHT", "FCR"],
    difficulty: "중간",
    period: "8–14주",
  },
];
