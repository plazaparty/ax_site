/** 상세 페이지용 샘플 콘텐츠 (비즈니스 가치 중심). */

export interface IndustryDetail {
  title: string;
  painPoints: string[];
  scenarios: string[];
  solutions: string[];
  effects: string[];
  useCases: string[];
  demoHref: string;
}

export const industryDetails: Record<string, IndustryDetail> = {
  public: {
    title: "공공 AX",
    painPoints: [
      "민원·행정 문서 처리량 증가",
      "현장과 시스템 간 정보 단절",
      "보안·감사 대응 부담",
    ],
    scenarios: [
      "민원 AI 상담 + 지식연동",
      "행정 문서 자동 분류·요약",
      "현장 안전·시설 데이터 통합",
    ],
    solutions: ["KT AICC Plus", "KT Document AI", "KT Knowledge AI"],
    effects: ["응대 리드타임 단축", "오류·누락 감소", "정책 대응 속도 향상"],
    useCases: ["지자체 민원 응대 자동화", "교육 행정 문서 처리"],
    demoHref: "/ax-consulting",
  },
  finance: {
    title: "금융 AX",
    painPoints: [
      "심사·문서 검토 병목",
      "민원·상담 품질 편차",
      "내부 데이터 활용 제약",
    ],
    scenarios: [
      "심사 보조 Agent",
      "상담 품질 관측·코칭",
      "AML/KYC 문서 자동 추출",
    ],
    solutions: ["KT Document AI", "KT AICC Plus", "KT Data Insight AI"],
    effects: ["심사 TAT 단축", "컴플라이언스 가시화", "CS 비용 최적화"],
    useCases: ["카드사 문서 심사 자동화", "금융 콜봇+상담사 보조"],
    demoHref: "/ax-consulting",
  },
  manufacturing: {
    title: "제조 AX",
    painPoints: ["품질 편차", "설비 다운타임", "숙련 의존"],
    scenarios: ["비전 기반 불량 검출", "예지보전 알림", "작업 지원 Agent"],
    solutions: ["KT Vision AX", "KT Workflow AI", "KT AI Agent Studio"],
    effects: ["불량률 감소", "가동률 향상", "현장 표준화"],
    useCases: ["전자부품 검사 자동화", "설비 이상 징후 조기 탐지"],
    demoHref: "/ax-consulting",
  },
  retail: {
    title: "유통 AX",
    painPoints: ["수요 예측 어려움", "재고 과부족", "옴니채널 경험 불일치"],
    scenarios: [
      "프로모션 시나리오 시뮬레이션",
      "매장 응대 AI",
      "물류 예외 처리 자동화",
    ],
    solutions: ["KT Data Insight AI", "KT AICC Plus", "KT Workflow AI"],
    effects: ["재고 회전 개선", "전환율 상승", "운영비 최적화"],
    useCases: ["편의점 재고 추천", "온라인 고객 응대 품질 향상"],
    demoHref: "/ax-consulting",
  },
  healthcare: {
    title: "의료 AX",
    painPoints: ["행정 업무 과부하", "의료 데이터 표준화", "환자 응대 품질"],
    scenarios: ["차팅·기록 보조", "예약·안내 자동화", "운영 리포트 자동 생성"],
    solutions: ["KT Document AI", "KT Knowledge AI", "KT AICC Plus"],
    effects: ["의료진 업무 시간 회복", "환자 경험 개선"],
    useCases: ["병원 콜센터 상담 보조", "진료 기록 요약"],
    demoHref: "/ax-consulting",
  },
  telecom: {
    title: "통신 AX",
    painPoints: ["OSS/BSS 복잡도", "고객 이탈", "현장 장애 대응"],
    scenarios: ["장애 탐지·분류 자동화", "개통·변경 업무 오케스트레이션", "마케팅 개인화"],
    solutions: ["KT Workflow AI", "KT Data Insight AI", "KT AI Agent Studio"],
    effects: ["처리 시간 단축", "고객 이탈 조기 신호 포착"],
    useCases: ["네트워크 운용 알림 요약", "고가치 고객 케어 자동화"],
    demoHref: "/ax-consulting",
  },
  defense: {
    title: "국방 AX",
    painPoints: ["작전·훈련 데이터 민감도", "지휘통신·보안 요구", "현장·본부 정보 단절"],
    scenarios: ["근거 기반 보고 자동화", "장비 예지보전", "훈련 시뮬레이션 데이터 분석"],
    solutions: ["KT Knowledge AI", "KT Vision AX", "KT Workflow AI"],
    effects: ["의사결정 리드타임 단축", "운용 리스크 가시화"],
    useCases: ["현장 정비 지원 Agent", "문서·규정 검색 고도화"],
    demoHref: "/ax-consulting",
  },
  safety: {
    title: "안전·건설 AX",
    painPoints: ["현장 안전 사각지대", "일일 안전 점검 문서 폭증", "설비·공정 데이터 분산"],
    scenarios: ["영상 기반 위험 행동 탐지", "안전 문서 자동 분류", "IoT 센서 이상 알림"],
    solutions: ["KT Vision AX", "KT Document AI", "KT Workflow AI"],
    effects: ["재해 예방 강화", "점검·보고 시간 단축"],
    useCases: ["건설 현장 CCTV 분석", "설비 점검 리포트 자동화"],
    demoHref: "/ax-consulting",
  },
  services: {
    title: "서비스·기타 AX",
    painPoints: ["업무 표준화 어려움", "고객 접점 채널 다양화", "데이터 활용 미숙"],
    scenarios: ["고객 응대 Copilot", "내부 지식 검색", "반복 업무 자동화"],
    solutions: ["KT AICC Plus", "KT Knowledge AI", "KT AI Agent Studio"],
    effects: ["처리 속도·품질 향상", "운영 비용 최적화"],
    useCases: ["콜센터 상담 보조", "사내 규정 Q&A"],
    demoHref: "/ax-consulting",
  },
};

export interface TaskDetail {
  title: string;
  problem: string;
  aiIdeas: string[];
  solutions: string[];
  steps: string[];
  useCases: string[];
  demoHref: string;
}

export const taskDetails: Record<string, TaskDetail> = {
  "contact-center": {
    title: "고객센터 AX",
    problem: "반복 문의 증가, 상담 품질 편차, 지식 탐색 지연",
    aiIdeas: ["상담 요약·후속 제안", "지식 RAG 연동", "실시간 코칭"],
    solutions: ["KT AICC Plus", "KT Knowledge AI"],
    steps: ["지식 정합성 확보", "시나리오 파일럿", "품질 관측 대시보드"],
    useCases: ["금융 콜봇+ 상담사 보조", "공공 민원 응대 표준화"],
    demoHref: "/ax-consulting",
  },
  documents: {
    title: "문서업무 AX",
    problem: "형태 다양한 문서·버전 관리·검증 피로도",
    aiIdeas: ["추출·비교 자동화", "요약·체크리스트 생성"],
    solutions: ["KT Document AI", "KT Workflow AI"],
    steps: ["문서 유형 정의", "추출 정확도 검증", "HITL 운영"],
    useCases: ["금융 심사 패키지 분석", "공공 계약 문서 검토"],
    demoHref: "/ax-consulting",
  },
  quality: {
    title: "품질검사 AX",
    problem: "인력 검사 한계, 기준 편차, 데이터 미연결",
    aiIdeas: ["영상·이미지 불량 탐지", "공정 데이터 연관 분석"],
    solutions: ["KT Vision AX", "KT Data Insight AI"],
    steps: ["샘플 데이터 확보", "모델·임계값 검증", "현장 배포"],
    useCases: ["전자 부품 외관 검사", "식품 포장 라벨 검증"],
    demoHref: "/ax-consulting",
  },
  search: {
    title: "AI 검색 AX",
    problem: "분산 지식·권한·최신성 문제로 검색 실패율 증가",
    aiIdeas: ["권한 기반 RAG", "근거 표시 응답"],
    solutions: ["KT Knowledge AI", "KT AI Agent Studio"],
    steps: ["소스 연결", "답변 품질 평가", "운영 가드레일"],
    useCases: ["사내 규정 Q&A", "고객 응대 스크립트 추천"],
    demoHref: "/ax-consulting",
  },
  automation: {
    title: "업무자동화 AX",
    problem: "시스템 간 단절, 예외 처리 공백",
    aiIdeas: ["이벤트 트리거 워크플로", "Agent 기반 예외 분류"],
    solutions: ["KT Workflow AI", "KT AI Agent Studio"],
    steps: ["프로세스 디지털 트윈", "연결 테스트", "관측·재처리"],
    useCases: ["계약 체결 후 후속 처리", "민원 접수 라우팅"],
    demoHref: "/ax-consulting",
  },
  analytics: {
    title: "데이터분석 AX",
    problem: "데이터는 많지만 실행 가능한 인사이트 부족",
    aiIdeas: ["예측 모델", "설명 가능 리포트", "탐색형 분석 Agent"],
    solutions: ["KT Data Insight AI", "KT AX Consultant"],
    steps: ["지표 정렬", "데이터 거버넌스", "의사결정 루프 연결"],
    useCases: ["이탈 신호 조기 경보", "공급망 리스크 스코어링"],
    demoHref: "/ax-consulting",
  },
};

export interface StageDetail {
  title: string;
  traits: string[];
  priorities: string[];
  quickWins: string[];
  solutions: string[];
  horizon: string;
  cases: string[];
}

export const stageDetails: Record<string, StageDetail> = {
  start: {
    title: "AX 시작 단계",
    traits: ["과제가 산재", "데이터 접근성 불명확", "PoC 중심 논의"],
    priorities: ["첫 성공 범위 고정", "데이터·보안 전제 정리"],
    quickWins: ["문서 요약·분류 파일럿", "상담 요약 PoC"],
    solutions: ["KT AX Consultant", "KT Document AI"],
    horizon: "4–10주 파일럿",
    cases: ["단일 부서 PoC로 신뢰 확보"],
  },
  expand: {
    title: "AX 확장 단계",
    traits: ["파일럿 성과 존재", "연동·운영 이슈 부각"],
    priorities: ["표준 아키텍처", "품질 지표 계약"],
    quickWins: ["워크플로 예외 자동 분류", "지식 검색 전사 확대"],
    solutions: ["KT Workflow AI", "KT Knowledge AI"],
    horizon: "8–16주",
    cases: ["유관 부서로 동일 패턴 확장"],
  },
  enterprise: {
    title: "전사 AX 단계",
    traits: ["거버넌스·비용 통제 필요", "중복 투자 위험"],
    priorities: ["플랫폼화", "보안·준법 표준"],
    quickWins: ["공통 컴포넌트 라이브러리", "운영 관측 표준화"],
    solutions: ["KT AI Agent Studio", "KT Data Insight AI"],
    horizon: "분기 단위 로드맵",
    cases: ["본사-현장 정렬된 운영 체계"],
  },
  agent: {
    title: "AI Agent 단계",
    traits: ["업무 단위 자율 실행 요구", "툴 연동 복잡"],
    priorities: ["도구 권한·감사 추적", "평가 세트 구축"],
    quickWins: ["내부 지식 Agent", "현장 지원 Copilot"],
    solutions: ["KT AI Agent Studio", "KT Knowledge AI"],
    horizon: "지속적 릴리즈",
    cases: ["업무 도메인별 Agent 거버넌스"],
  },
};

export interface SolutionDetail {
  title: string;
  problems: string[];
  features: string[];
  industries: string[];
  architecture: string;
  effects: string[];
  useCases: string[];
  demoHref: string;
}

export const solutionDetails: Record<string, SolutionDetail> = {
  "ax-consultant": {
    title: "KT AX Consultant",
    problems: ["무엇부터 할지 불명확", "이해관계자 설득 자료 부족"],
    features: ["진단 인터뷰", "과제 우선순위", "ROI 관점 로드맵"],
    industries: ["전 산업"],
    architecture: "컨설팅 워크숍 + 산출물 패키지",
    effects: ["의사결정 속도", "중복 투자 방지"],
    useCases: ["AX 시작 단계 기업", "전사 확산 전 재정렬"],
    demoHref: "/ax-consulting",
  },
  "agent-studio": {
    title: "KT AI Agent Studio",
    problems: ["업무별 실험 난립", "운영 표준 부재"],
    features: ["Agent 빌더", "툴 연동", "평가·가드레일"],
    industries: ["금융", "제조", "통신"],
    architecture: "스튜디오 + 런타임 + 관측",
    effects: ["업무 커버리지 확대", "출시 주기 단축"],
    useCases: ["현장 지원 Agent", "내부 업무 오케스트레이션"],
    demoHref: "/ax-consulting",
  },
  "knowledge-ai": {
    title: "KT Knowledge AI",
    problems: ["검색 실패", "근거 불명 응답"],
    features: ["RAG 파이프라인", "권한·감사", "품질 리포트"],
    industries: ["공공", "금융", "통신"],
    architecture: "커넥터 · 인덱스 · 응답 레이어",
    effects: ["온보딩 시간 단축", "응대 일관성"],
    useCases: ["규정 검색", "상담 지식 추천"],
    demoHref: "/ax-consulting",
  },
  "workflow-ai": {
    title: "KT Workflow AI",
    problems: ["시스템 간 반복 클릭", "예외 처리 공백"],
    features: ["프로세스 오케스트레이션", "예외 분류", "모니터링"],
    industries: ["유통", "공공", "제조"],
    architecture: "이벤트 버스 + 어댑터",
    effects: ["리드타임 단축", "오류율 감소"],
    useCases: ["민원 접수 후속 처리", "주문-배송 예외"],
    demoHref: "/ax-consulting",
  },
  "document-ai": {
    title: "KT Document AI",
    problems: ["비정형 문서 처리 피로도"],
    features: ["추출·분류·비교·요약"],
    industries: ["금융", "공공", "의료"],
    architecture: "문서 파이프라인 + 검증 UI",
    effects: ["처리량 증가", "컴플라이언스 증빙"],
    useCases: ["심사 패키지", "계약 검토"],
    demoHref: "/ax-consulting",
  },
  "aicc-plus": {
    title: "KT AICC Plus",
    problems: ["콜 품질 편차", "지식 접근 지연"],
    features: ["AI 상담", "실시간 코칭", "품질 관측"],
    industries: ["금융", "통신", "공공"],
    architecture: "콜 플랫폼 + 지식연동",
    effects: ["AHT/FCR 개선"],
    useCases: ["금융 상담", "통신 개통 문의"],
    demoHref: "/ax-consulting",
  },
  "vision-ax": {
    title: "KT Vision AX",
    problems: ["검사 인력 한계", "현장 안전 리스크"],
    features: ["불량 탐지", "안전 행동 분석", "엣지 배포"],
    industries: ["제조", "물류"],
    architecture: "엣지 추론 + 중앙 학습",
    effects: ["불량률 감소", "사고 예방"],
    useCases: ["외관 검사", "창고 적재 안전"],
    demoHref: "/ax-consulting",
  },
  "data-insight": {
    title: "KT Data Insight AI",
    problems: ["데이터는 많지만 의사결정은 느림"],
    features: ["예측 모델", "설명 가능 분석", "대시보드"],
    industries: ["금융", "유통", "통신"],
    architecture: "데이터 레이크하우스 연계",
    effects: ["예측 정확도·매출 기여도"],
    useCases: ["이탈 예측", "수요 예측"],
    demoHref: "/ax-consulting",
  },
};
