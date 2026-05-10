import type { SuccessStory } from "./useCaseStoryModel";

function s(p: {
  title: string;
  customerProblem: string;
  solution: string;
  process?: string[];
  outcome: string;
  metrics: { label: string; value: string }[];
  quote?: string;
  expansion?: string;
  legacyProcess?: string[];
  modernProcess?: string[];
  axApplicationPoints?: string[];
  operationModel?: string;
  architectureFlow?: [string, string, string];
  similarIndustries?: string[];
}): SuccessStory {
  return {
    title: p.title,
    customerProblem: p.customerProblem,
    solution: p.solution,
    process: p.process ?? ["요구·데이터 범위 합의", "PoC 및 품질 기준 설정", "운영 전환·모니터링"],
    outcome: p.outcome,
    metrics: p.metrics,
    quote: p.quote ?? "기술보다 운영 규율과 증적 설계가 성패를 가름했습니다.",
    expansion: p.expansion ?? "인접 업무 프로세스로 단계적 확장을 검토 중입니다.",
    legacyProcess: p.legacyProcess ?? ["수기·엑셀", "표준 부족", "사후 대응"],
    modernProcess: p.modernProcess ?? ["자동 분류·요약", "근거 링크", "품질 대시보드"],
    axApplicationPoints: p.axApplicationPoints ?? ["데이터 범위", "HITL", "감사 로그"],
    operationModel: p.operationModel ?? "현업 오너 + IT + 준법 주간 리뷰",
    architectureFlow: p.architectureFlow ?? ["원천 데이터", "KT AX 레이어", "업무 시스템"],
    similarIndustries: p.similarIndustries ?? [],
  };
}

/** 기존 3건 외 추가 예시 스토리 (데모·레퍼런스용 합성 서술) */
export const moreSuccessStories: Record<string, SuccessStory> = {
  "logistics-route-optimization": s({
    title: "물류 배차·ETA 최적화",
    customerProblem: "수기 배차와 통화 의존으로 지연 통보가 늦고, 운행 재조정 비용이 컸습니다.",
    solution: "KT Workflow AI + Knowledge AI로 주문·차량·도로 이벤트를 묶어 배차 시나리오 제안",
    outcome: "재배차 횟수와 공차 운행이 줄고, 고객 안내 리드타임이 단축되었습니다.",
    metrics: [
      { label: "재배차 건수", value: "−22%" },
      { label: "평균 안내 리드타임", value: "−31%" },
    ],
    similarIndustries: ["3PL", "식품 유통", "이커머스 물류"],
    axApplicationPoints: ["실시간 이벤트 연동", "제약 조건 모델링", "상담사 확인 게이트"],
  }),
  "retail-demand-forecasting": s({
    title: "유통 수요 예측·보충",
    customerProblem: "프로모션·날씨 변수를 반영하지 못해 품절과 폐기가 동시에 발생했습니다.",
    solution: "데이터 플랫폼과 예측 모델을 연계한 수요 시그널 + 매장 보추천",
    outcome: "품절률과 폐기율이 동시에 개선되고, 매장 운영 회의 시간이 줄었습니다.",
    metrics: [
      { label: "품절률", value: "−19%" },
      { label: "폐기율", value: "−14%" },
    ],
    similarIndustries: ["편의점", "패션", "H&B"],
  }),
  "health-medical-records-summary": s({
    title: "의료 기록 요약·진료 준비",
    customerProblem: "전원 진료 시 이전 기록 확인에 시간이 많이 들고, 필수 항목 누락이 발생했습니다.",
    solution: "민감정보 통제 하에 진료 요약과 체크리스트를 생성하는 RAG형 보조",
    outcome: "진료 준비 시간이 줄고, 누락 재작업이 감소했습니다.",
    metrics: [
      { label: "진료 준비 시간", value: "−27%" },
      { label: "누락 재작업", value: "−35%" },
    ],
    similarIndustries: ["병원", "검진센터", "원격 진료"],
    quote: "환자 안전이 우선이라 사람 확인 단계를 명확히 둔 것이 신뢰를 만들었습니다.",
  }),
  "telecom-network-triage": s({
    title: "통신망 장애 분석 보조",
    customerProblem: "알람 폭주 시 원인 후보 정리에 시간이 걸려 복구 착수가 늦어졌습니다.",
    solution: "로그·토폴로지를 통합해 장애 후보와 권장 조치 초안을 제시하는 운영 보조",
    outcome: "1차 분류 시간이 단축되고, 반복 장애에 대한 지식 축적이 빨라졌습니다.",
    metrics: [
      { label: "1차 분류 시간", value: "−33%" },
      { label: "재발 장애 건수", value: "−12%" },
    ],
    similarIndustries: ["통신", "IDC", "클라우드 MSP"],
  }),
  "insurance-fnol-triage": s({
    title: "손해 접수(FNOL) 1차 분류",
    customerProblem: "접수 서류 형식이 제각각이라 심사 준비가 길고, 고객 안내 편차가 컸습니다.",
    solution: "문서 AI + AICC로 접수 패키지 정합성 검사와 안내 스크립트 표준화",
    outcome: "보완 요청 라운드가 줄고, 접수 처리 리드타임이 개선되었습니다.",
    metrics: [
      { label: "보완 요청", value: "−24%" },
      { label: "접수 리드타임", value: "−29%" },
    ],
    similarIndustries: ["손해보험", "생명보험"],
  }),
  "utility-field-inspection-vision": s({
    title: "에너지 현장 점검 영상 보조",
    customerProblem: "광역 현장 점검 사진 판독이 숙련 의존이고, 표준 근거가 부족했습니다.",
    solution: "Vision AX로 결함 유형 태깅과 보고서 초안 생성, 이상 케이스만 현장 확인",
    outcome: "점검 리포트 작성 시간이 줄고, 동일 기준 재현성이 높아졌습니다.",
    metrics: [
      { label: "보고서 작성 시간", value: "−38%" },
      { label: "재현성(감사 샘플)", value: "+21%" },
    ],
    similarIndustries: ["전력", "가스", "신재생"],
  }),
  "education-admissions-assistant": s({
    title: "대학 입학·행정 Q&A",
    customerProblem: "규정 변경 시 FAQ 갱신이 늦고, 상담 채널별 답변이 엇갈렸습니다.",
    solution: "Knowledge AI 기반 근거 응답과 변경 알림 파이프라인",
    outcome: "반복 문의 응답 일관성이 높아지고, 상담 부담이 감소했습니다.",
    metrics: [
      { label: "1차 해결률", value: "+18pt" },
      { label: "FAQ 갱신 지연", value: "−41%" },
    ],
    similarIndustries: ["대학", "교육청", "평생교육원"],
  }),
  "legal-contract-screening": s({
    title: "법무 계약 조항 스크리닝",
    customerProblem: "표준 계약과의 차이를 수작업으로 찾아 검토 기간이 길었습니다.",
    solution: "Document AI로 조항 매핑·리스크 플래그 생성, 검토자 확인 워크플로",
    outcome: "1차 검토 시간이 단축되고, 놓치기 쉬운 예외 조항 적발이 늘었습니다.",
    metrics: [
      { label: "1차 검토 시간", value: "−36%" },
      { label: "예외 조항 적발", value: "+28%" },
    ],
    similarIndustries: ["제조", "IT서비스", "유통"],
  }),
  "hr-policy-assistant": s({
    title: "인사 규정·복리 질의 응대",
    customerProblem: "내부 규정이 분산되어 직원 문의 응답이 제각각이었습니다.",
    solution: "권한 반영 RAG와 승인형 답변으로 내부 HR 코파일럿 구축",
    outcome: "문의 처리 시간이 줄고, HR 데스크 반복 부담이 완화되었습니다.",
    metrics: [
      { label: "평균 응답 시간", value: "−32%" },
      { label: "재문의율", value: "−21%" },
    ],
    similarIndustries: ["대기업", "금융", "공공기관"],
  }),
  "ecommerce-search-and-reco": s({
    title: "이커머스 검색·추천 전환",
    customerProblem: "동의어·속성 검색 품질이 낮아 이탈이 발생하고, 캠페인 반영이 늦었습니다.",
    solution: "카탈로그 시맨틱 + 검색 로그 피드백으로 쿼리 이해 및 랭킹 개선",
    outcome: "검색 세션 전환과 캠페인 반영 리드타임이 개선되었습니다.",
    metrics: [
      { label: "검색 전환율", value: "+9%" },
      { label: "캠페인 반영 리드타임", value: "−44%" },
    ],
    similarIndustries: ["온라인 리테일", "마켓플레이스"],
  }),
  "media-subtitle-and-metadata": s({
    title: "방송 자막·메타데이터 자동화",
    customerProblem: "편성 전 자막·태깅 작업이 수작업 중심이라 마감 압박이 컸습니다.",
    solution: "음성·영상 파이프라인과 검수 게이트가 있는 자동 초안 + 편집자 보정",
    outcome: "초안 생성 시간이 줄고, 마감 리스크가 완화되었습니다.",
    metrics: [
      { label: "초안 생성 시간", value: "−40%" },
      { label: "마감 지연 건수", value: "−52%" },
    ],
    similarIndustries: ["방송", "OTT", "크리에이터 플랫폼"],
  }),
  "construction-safety-vision": s({
    title: "건설 현장 안전 PPE 점검",
    customerProblem: "점검 주기 대비 현장 커버리지가 부족하고, 기록 표준화가 어려웠습니다.",
    solution: "Vision AX + 모바일 업로드로 PPE 위반 후보 탐지와 현장 확인 워크플로",
    outcome: "점검 커버리지가 넓어지고, 사고 예방 회의의 논의 속도가 빨라졌습니다.",
    metrics: [
      { label: "점검 커버리지", value: "+26%" },
      { label: "현장 확인 리드타임", value: "−30%" },
    ],
    similarIndustries: ["건설", "플랜트", "인프라"],
  }),
  "agritech-pest-detection": s({
    title: "스마트팜 병해충 이미지 조기 경보",
    customerProblem: "초기 징후를 놓치면 확산 피해가 커지고, 전문가 방문 비용이 높았습니다.",
    solution: "현장 이미지 분류 모델과 날씨·작기 데이터를 결합한 알림",
    outcome: "조기 대응 건수가 늘고, 불필요한 농약 사용이 줄었습니다.",
    metrics: [
      { label: "조기 대응 건수", value: "+34%" },
      { label: "농약 비용", value: "−11%" },
    ],
    similarIndustries: ["시설원예", "노지작물", "스마트팜"],
  }),
  "pharma-deviation-classification": s({
    title: "제약 일탈(deviation) 보고서 분류",
    customerProblem: "보고서 형식이 다양해 분류·우선순위에 시간이 많이 들었습니다.",
    solution: "Document AI로 유형 태깅과 규정 매핑 초안, QA 검토 워크플로",
    outcome: "분류 리드타임이 단축되고, 감사 샘플 대응이 수월해졌습니다.",
    metrics: [
      { label: "분류 리드타임", value: "−37%" },
      { label: "재작업률", value: "−23%" },
    ],
    similarIndustries: ["제약", "바이오", "의료기기"],
  }),
  "airline-disruption-comms": s({
    title: "항공 불편 운항 고객 커뮤니케이션",
    customerProblem: "돌발 운항 변경 시 안내 문구·채널 편차로 VOC가 급증했습니다.",
    solution: "AICC + Knowledge AI로 정책 반영 스크립트와 다채널 동시 배포",
    outcome: "불만 재문의 비율이 줄고, 상담 처리량이 안정되었습니다.",
    metrics: [
      { label: "불만 재문의", value: "−19%" },
      { label: "평균 처리 시간", value: "−24%" },
    ],
    similarIndustries: ["항공", "여행", "교통"],
  }),
  "real-estate-lease-abstraction": s({
    title: "부동산 임대 계약 핵심 추출",
    customerProblem: "계약서마다 표현이 달라 주요 조건 정리에 시간이 걸렸습니다.",
    solution: "Document AI로 임대료·갱신·해지 조건 추출과 검토 체크리스트 생성",
    outcome: "계약 검토 리드타임이 단축되고, 실수로 인한 재협상이 줄었습니다.",
    metrics: [
      { label: "검토 리드타임", value: "−33%" },
      { label: "조건 누락 사고", value: "−45%" },
    ],
    similarIndustries: ["리츠", "오피스 임대", "상가"],
  }),
  "automotive-supplier-quality": s({
    title: "완성차 2차사 품질 서류 심사",
    customerProblem: "납품 서류 검증이 사람 의존이라 병목이 발생했습니다.",
    solution: "문서 AI로 필수 항목 검증과 예외 라우팅, 공급망 포털 연동",
    outcome: "심사 처리량이 늘고, 납기 리스크가 줄었습니다.",
    metrics: [
      { label: "심사 처리량", value: "+22%" },
      { label: "납기 지연", value: "−16%" },
    ],
    similarIndustries: ["자동차", "전장", "금형"],
  }),
  "broadcast-sales-proposal": s({
    title: "방송 광고 세일즈 제안 초안",
    customerProblem: "제안서 작성에 리서치 시간이 길고, 과거 레퍼런스 탐색이 비효율적이었습니다.",
    solution: "Knowledge AI + Agent형 조립으로 브리프→초안→검수 흐름 표준화",
    outcome: "제안 준비 시간이 줄고, 품질 편차가 완화되었습니다.",
    metrics: [
      { label: "제안 준비 시간", value: "−29%" },
      { label: "재작성률", value: "−18%" },
    ],
    similarIndustries: ["방송광고", "미디어 에이전시"],
  }),
  "hospitality-guest-requests": s({
    title: "호텔·리조트 게스트 요청 라우팅",
    customerProblem: "요청이 채널별로 흩어져 처리 지연이 발생했습니다.",
    solution: "Workflow AI + AICC로 요청 분류·우선순위·담당 배정 자동화",
    outcome: "응답 시간이 개선되고, 크로스셀링 기회 탐지가 늘었습니다.",
    metrics: [
      { label: "평균 응답 시간", value: "−26%" },
      { label: "서비스 복구 만족", value: "+15pt" },
    ],
    similarIndustries: ["호텔", "리조트", "크루즈"],
  }),
  "bank-suspicious-txn-summary": s({
    title: "은행 이상거래 알림 요약·1차 판독",
    customerProblem: "알림 건수가 많아 분석가 초기 스크리닝에 병목이 생겼습니다.",
    solution: "거래·고객 맥락을 요약하고 유사 사례를 연결하는 분석 보조",
    outcome: "1차 스크리닝 시간이 단축되고, 중복 조사가 줄었습니다.",
    metrics: [
      { label: "1차 스크리닝 시간", value: "−34%" },
      { label: "중복 조사", value: "−20%" },
    ],
    similarIndustries: ["은행", "카드", "증권"],
  }),
};
