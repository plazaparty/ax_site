export interface SuccessStory {
  title: string;
  customerProblem: string;
  solution: string;
  process: string[];
  outcome: string;
  metrics: { label: string; value: string }[];
  quote: string;
  expansion: string;
  /** 스토리형 상세 · 시각화 */
  legacyProcess?: string[];
  modernProcess?: string[];
  axApplicationPoints?: string[];
  operationModel?: string;
  architectureFlow?: [string, string, string];
  similarIndustries?: string[];
  industryTags?: string[];
  taskTags?: string[];
  solutionTags?: string[];
  difficulty?: "낮음" | "중간" | "높음";
  implementationPeriod?: string;
  kpiTags?: string[];
}

export const successStories: Record<string, SuccessStory> = {
  "manufacturing-quality": {
    title: "제조 품질검사 혁신",
    customerProblem:
      "외관 검사에 숙련 검사원이 과도하게 투입되고, 표준화된 판정 근거가 부족했습니다.",
    solution: "KT Vision AX + Workflow AI로 검사 이미지 분류와 예외 라우팅을 자동화",
    process: [
      "소량 라벨링으로 베이스라인 확보",
      "현장 카메라 각도·조명 표준화",
      "불확실 케이스만 사람에게 전달하는 HITL 운영",
    ],
    outcome:
      "불량 탐지 리드타임이 단축되고, 검사원은 고난도 판정에 집중할 수 있게 되었습니다.",
    metrics: [
      { label: "불량 탐지 리드타임", value: "−35%" },
      { label: "재작업 비용", value: "−18%" },
    ],
    quote:
      "‘판정 근거가 남는다’는 점이 현장 설득력이 컸습니다. 숫자보다 운영 신뢰가 먼저였어요.",
    expansion: "공정 데이터와 연계해 예지보전 시나리오로 확장 중입니다.",
    legacyProcess: ["육안 검사·이중 확인", "종이/엑셀 판정 기록", "불량 발생 후 공정 정지"],
    modernProcess: ["카메라 표준 촬영", "모델 판정 + 신뢰도 점수", "저신뢰만 HITL 라우팅"],
    axApplicationPoints: ["영상 표준화", "불량 클래스 정의", "예외 워크플로 자동 분기"],
    operationModel: "현장 라인장 승인 + 품질팀 주간 리뷰 + 모델 버전 변경관리",
    architectureFlow: ["라인 카메라·MES", "Vision AX + 추론", "MES·알림·대시보드"],
    similarIndustries: ["전자부품", "자동차 부품", "식품 포장"],
    industryTags: ["제조"],
    taskTags: ["품질"],
    solutionTags: ["Vision AX", "Workflow AI"],
    difficulty: "중간",
    implementationPeriod: "8–14주",
    kpiTags: ["리드타임", "재작업"],
  },
  "public-civic": {
    title: "공공 민원 AI",
    customerProblem:
      "민원 유형이 세분화되면서 1차 응대 품질 편차가 커지고, 상담원 교육 비용이 증가했습니다.",
    solution: "KT AICC Plus + Knowledge AI로 근거 기반 응답과 상담 코칭 체계 구축",
    process: [
      "민원 시나리오·FAQ 정합성 정비",
      "권한이 반영된 지식 검색(RAG) 파일럿",
      "품질 관측 지표 합의 및 개선 루프",
    ],
    outcome:
      "1차 응답 만족도가 향상되었고, 반복 문의에 대한 상담 준비 시간이 줄었습니다.",
    metrics: [
      { label: "1차 응답 만족도", value: "+22pt" },
      { label: "평균 처리 준비 시간", value: "−28%" },
    ],
    quote:
      "시민에게는 ‘정확한 안내’, 현장에는 ‘교육 가능한 피드백’이 동시에 필요했습니다.",
    expansion: "부서 간 지식 그래프 확장으로 다부처 협업 시나리오를 검토 중입니다.",
    legacyProcess: ["수기 스크립트", "부서별 상이한 FAQ", "사후 녹취 분석"],
    modernProcess: ["근거 링크 응답", "실시간 코칭", "품질 대시보드"],
    axApplicationPoints: ["지식 최신화", "권한별 검색", "상담 품질 KPI"],
    operationModel: "상담센터장 주관 품질회의 + IT 보안 심의 병행",
    architectureFlow: ["민원 DB·문서", "Knowledge AI + AICC", "상담 UI·CRM"],
    similarIndustries: ["지자체", "교육청", "복지 상담"],
    industryTags: ["공공"],
    taskTags: ["민원", "상담"],
    solutionTags: ["AICC Plus", "Knowledge AI"],
    difficulty: "높음",
    implementationPeriod: "10–18주",
    kpiTags: ["만족도", "준비 시간"],
  },
  "finance-advisory": {
    title: "금융 상담 자동화",
    customerProblem:
      "상품·약관 변경이 잦아 상담 준비 시간이 길고, 상담 중 검색 실패가 발생했습니다.",
    solution: "KT Knowledge AI + Agent형 상담 보조로 최신 규정 반영 응답을 제공",
    process: [
      "문서 버전 관리와 변경 알림 체계 도입",
      "상담 로그 기반 품질 평가 세트 구축",
      "민감 정보 마스킹·감사 로그 표준화",
    ],
    outcome:
      "상담 준비 시간이 줄고, 신규 상담원 온보딩 기간이 단축되었습니다.",
    metrics: [
      { label: "상담 준비 시간", value: "−40%" },
      { label: "검색 실패율", value: "−52%" },
    ],
    quote:
      "기술보다 ‘운영 가능한 지식 관리’가 성패를 가름했습니다.",
    expansion: "심사 문서 자동 요약으로 업무 범위를 확대하는 계획입니다.",
    legacyProcess: ["분산된 PDF·위키", "수동 업데이트 알림", "상담 중 개별 검색"],
    modernProcess: ["버전드 문서 소스", "변경 알림→지식 반영", "상담 보조 Agent"],
    axApplicationPoints: ["규정 변경 파이프라인", "마스킹·감사 로그", "품질 평가 세트"],
    operationModel: "준법·상담운영 Co-governance, 릴리즈 게이트",
    architectureFlow: ["문서·상품 DB", "Knowledge AI + Agent", "상담 채널·CRM"],
    similarIndustries: ["카드", "은행", "보험"],
    industryTags: ["금융"],
    taskTags: ["상담", "문서"],
    solutionTags: ["Knowledge AI", "Agent Studio"],
    difficulty: "높음",
    implementationPeriod: "8–16주",
    kpiTags: ["준비 시간", "검색 실패"],
  },
};
