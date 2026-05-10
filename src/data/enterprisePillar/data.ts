import type { EnterprisePillarContent } from "./types";

export const dataEnterpriseContent: EnterprisePillarContent = {
  slug: "data",
  accent: "amber",
  hero: {
    badge: "엔터프라이즈 데이터",
    headline: "엔터프라이즈 데이터를 AI 인텔리전스로 전환합니다.",
    subhead:
      "운영 인텔리전스, 현대적 레이크하우스, 지식 시스템 — AI를 정확하고 감사 가능하며 실행 가능하게 만듭니다.",
    executive:
      "KT는 전략·AI·클라우드·데이터에 이르는 실전형 엔터프라이즈 AX 실행 역량을 제공합니다. 신뢰할 수 있는 데이터를 거버넌스가 입혀진 인텔리전스와 측정 가능한 실행로 연결합니다.",
  },
  kpis: [
    { label: "의사결정 속도 향상", value: 31, suffix: "%" },
    { label: "지식 검색 시간 단축", value: 44, suffix: "%" },
    { label: "AI 정확도 개선(근거 기반)", value: 27, suffix: "%" },
    { label: "인사이트 도출 가속", value: 2.1, suffix: "배", decimals: 1 },
  ],
  cta: {
    headline: "KT와 엔터프라이즈 인텔리전스를 가동하세요",
    buttonLabel: "데이터→AI 아키텍처 상담",
    href: "/ax-consulting",
  },
  blocks: [
    {
      id: "challenges",
      navLabel: "과제",
      surface: "dark",
      kicker: "엔터프라이즈 페인포인트",
      title: "진실이 파편화되면 인텔리전스는 실패하고, AI는 격차를 증폭합니다.",
      items: [
        {
          title: "정의 불일치",
          body: "도메인마다 다른 지표는 신뢰를 무너뜨립니다. AI가 빠르게 답을 내놓을 때 특히 그렇습니다.",
        },
        {
          title: "다크 데이터·문서 범람",
          body: "비정형 지식이 사일로에 묻히고, 거버넌스 없는 검색은 컴플라이언스 노출을 키웁니다.",
        },
        {
          title: "연동 복잡도",
          body: "운영 시스템에는 큐레이션된 파이프가 필요합니다. 변경에 깨지는 일회 추출이 아닙니다.",
        },
        {
          title: "AI 준비 데이터로 가는 느린 길",
          body: "레이크하우스 규율과 시맨틱 레이어 없이는 모델이 노이즈를 학습하고 운영에서 드리프트합니다.",
        },
      ],
    },
    {
      id: "palantir",
      navLabel: "Palantir",
      surface: "light",
      kicker: "하위 서비스",
      title: "Palantir — 엔터프라이즈 운영 인텔리전스 플랫폼",
      lede:
        "운영 전반의 미션 크리티컬 가시성 — 신호, 의사결정, 실행을 감사 등급 추적으로 통합합니다.",
      services: [
        {
          title: "Palantir",
          subtitle: "엔터프라이즈 규모의 운영 인텔리전스",
          narrative:
            "운영 진실을 의사결정 워크플로에 연결 — 디지털 트윈 운영부터 교차 기능 커맨드 가시성까지.",
          points: [
            "디시전 인텔리전스 — 통제된 증거를 둔 시나리오 계획",
            "운영 가시성 — 시스템·팀을 아우르는 단일 뷰",
            "디지털 트윈 운영 — 물리·비즈니스 현실 모델링으로 대응 속도 향상",
            "엔터프라이즈 데이터 통합 — 큐레이션 온톨로지·계보 패턴",
            "미션 크리티컬 분석 — 신뢰도, 접근 통제, 운영 엄격성",
          ],
        },
      ],
      diagram: "maturity",
    },
    {
      id: "structured",
      navLabel: "정형 데이터",
      surface: "muted",
      kicker: "하위 서비스",
      title: "Structured Data Services — 현대적 엔터프라이즈 데이터 기반",
      lede:
        "분석·엔지니어링·AI 소비를 통합하는 레이크하우스 — 확장형 BI와 통제된 접근.",
      services: [
        {
          title: "Databricks",
          subtitle: "레이크하우스와 AI 워크로드 수렴",
          narrative:
            "엔지니어링과 분석을 한 플랫폼에서 — 하류 AI가 신뢰할 수 있는 거버넌스 데이터셋을 가능하게 합니다.",
          points: [
            "엔터프라이즈 분석 — 큐레이션 지표와 시맨틱 정렬",
            "레이크하우스 아키텍처 — 대규모에서도 성능이 나는 오픈 포맷",
            "데이터 엔지니어링 — 테스트·관측 가능한 신뢰 파이프라인",
            "AI 준비 정형 데이터 — 피처 스토어와 거버넌스 데이터셋",
          ],
        },
        {
          title: "Snowflake",
          subtitle: "탄력 분석과 보안 데이터 공유",
          narrative:
            "스토리지와 컴퓨트 분리로 예측 가능한 확장 — 엔터프라이즈급 보안과 협업 패턴.",
          points: [
            "확장형 BI — 동시 워크로드에 대한 성능 격리",
            "보안 공유 — 사업부·파트너 간 거버넌스 협업",
            "워크로드 거버넌스 — 비용 가시성과 정책 정렬 사용",
          ],
        },
      ],
      architecture: [
        { layer: "소비", hint: "BI, AI 피처, 앱" },
        { layer: "시맨틱·지표", hint: "오너가 신뢰하는 정의" },
        { layer: "레이크하우스", hint: "큐레이션 존, 계보" },
        { layer: "수집", hint: "CDC, 배치, API" },
      ],
    },
    {
      id: "unstructured",
      navLabel: "비정형 데이터",
      surface: "light",
      kicker: "하위 서비스",
      title: "Unstructured Data Services — 엔터프라이즈 지식 인텔리전스",
      lede:
        "문서·엔티티·정책을 연결하는 RAG와 Graph RAG — 근거 있고 설명 가능하며 기업에 안전한 답변.",
      services: [
        {
          title: "RAG",
          subtitle: "엔터프라이즈 코파일럿을 위한 근거 기반 검색",
          narrative:
            "인용이 있는 권위 검색 — 환각 리스크를 줄이고 운영자 신뢰를 높입니다.",
          points: [
            "엔터프라이즈 검색 — 접근 인지형 스코프 인덱스",
            "지식 검색 — 정책 정렬 소스와 신선도 통제",
            "컨텍스트 AI — 검증된 스니펫에 근거한 프롬프트",
            "문서 인텔리전스 — 구조 추출·분류",
          ],
        },
        {
          title: "Graph RAG",
          subtitle: "관계를 담은 시맨틱 인텔리전스",
          narrative:
            "엔티티와 의존성이 중요한 다중 홉 질문에 벡터 검색과 그래프 추론을 결합합니다.",
          points: [
            "엔터프라이즈 지식 그래프 — 엔티티, 관계, 시간",
            "시맨틱 인텔리전스 — 복잡한 의사결정을 위한 풍부한 맥락",
            "설명 가능성 — 감사·검토를 지원하는 경로",
          ],
        },
      ],
      diagram: "dataFlow",
    },
    {
      id: "methodology",
      navLabel: "방법론",
      surface: "light",
      kicker: "도입·실행 모델",
      title: "소스·큐레이션·퍼블리시·거버넌스 — AI가 안전히 소비하는 데이터 제품.",
      methodology: [
        { phase: "소싱", detail: "권위 시스템, 계약, 첫날부터 계보가 있는 수집" },
        { phase: "큐레이션", detail: "품질 규칙, 시맨틱 정렬, PII 처리, 존 승격" },
        { phase: "퍼블리시", detail: "데이터 제품, API, 지표 레이어, SLA가 있는 검색 인덱스" },
        { phase: "거버넌스", detail: "접근 검토, 감사 증적, 드리프트 모니터링, 변경 통제" },
      ],
    },
    {
      id: "data-to-ai",
      navLabel: "데이터→AI 흐름",
      surface: "dark",
      kicker: "전환 다이어그램",
      title: "데이터 → 인텔리전스 → AI 에이전트 → 비즈니스 실행",
      lede:
        "엔터프라이즈 가치 사슬은 모델 하나가 아니라 운영 루프입니다. 신뢰 입력, 통제된 인텔리전스, 통제된 자동화, 측정 가능한 임팩트.",
      flow: {
        steps: [
          { label: "데이터", sub: "신뢰 소스, 계보, 접근 정책" },
          { label: "인텔리전스", sub: "지표, 그래프, 시맨틱 레이어" },
          { label: "AI 에이전트", sub: "가드레일이 있는 오케스트레이션 행동" },
          { label: "실행", sub: "워크플로 성과와 KPI 증명" },
        ],
      },
    },
    {
      id: "value",
      navLabel: "가치",
      surface: "muted",
      kicker: "KPI·가치 제안",
      title: "엔터프라이즈 인텔리전스 — 더 빠른 결정, 더 안전한 AI, 누적되는 인사이트.",
      body:
        "프로그램은 의사결정 지연, 검색 부담, 운영 모델 품질, 인사이트 도출 시간으로 측정합니다. 리더십 성과에 맞춥니다.",
      bullets: [
        "의사결정 속도 향상 — 통합 운영 진실과 거버넌스 분석",
        "지식 검색 시간 단축 — 인용·접근 통제가 있는 검색",
        "AI 정확도 개선 — 근거, 평가, 지속 피드백 루프",
        "인사이트 가속 — 도메인 간 확장 가능한 데이터 제품",
      ],
    },
  ],
};
