import type { EnterprisePillarContent } from "./types";

export const cloudEnterpriseContent: EnterprisePillarContent = {
  slug: "cloud",
  accent: "sky",
  hero: {
    badge: "엔터프라이즈 클라우드",
    headline: "엔터프라이즈 AX를 위한 확장형 AI 인프라.",
    subhead:
      "하이브리드부터 미션 크리티컬 플랫폼, GPU 용량까지 — AI 워크로드와 기업 복원력을 염두에 둔 설계입니다.",
    executive:
      "KT는 전략·AI·클라우드·데이터에 이르는 실전형 엔터프라이즈 AX 실행 역량을 제공합니다. 대규모에서도 AI 학습·추론을 예측 가능하게 만드는 인프라를 함께합니다.",
  },
  kpis: [
    { label: "배포 가속", value: 2, suffix: "배" },
    { label: "가용성 설계 목표(클래스)", value: 99.99, suffix: "%", decimals: 2 },
    { label: "GPU 활용 효율 개선", value: 18, suffix: "%" },
  ],
  cta: {
    headline: "KT와 AI 인프라를 구축하세요",
    buttonLabel: "인프라 현대화 상담",
    href: "/ax-consulting",
  },
  blocks: [
    {
      id: "challenges",
      navLabel: "과제",
      surface: "dark",
      kicker: "엔터프라이즈 페인포인트",
      title: "네트워크·보안·운영이 뒷전이면 AI 인프라는 깨집니다.",
      items: [
        {
          title: "용량 변동성",
          body: "추론 스파이크와 학습 윈도우에는 탄력 패턴이 필요합니다. 비용·안정성 예측이 어긋나면 안 됩니다.",
        },
        {
          title: "파편화된 클라우드 자산",
          body: "하이브리드·멀티클라우드 복잡도는 아키텍처·운영 표준이 없으면 영향 범위를 키웁니다.",
        },
        {
          title: "보안·컴플라이언스 압력",
          body: "제로 트러스트, 암호화, 증적 수집은 사후 덧붙임이 아니라 기본선이어야 합니다.",
        },
        {
          title: "운영 취약성",
          body: "AI 시스템도 미션 크리티컬 플랫폼과 같은 SRE 규율이 필요합니다. 관측, 변경 통제, DR입니다.",
        },
      ],
    },
    {
      id: "cloud-business",
      navLabel: "Cloud 사업",
      surface: "light",
      kicker: "하위 서비스",
      title: "Cloud 사업 — 엔터프라이즈 클라우드 전환 파트너",
      lede:
        "이전 규율, 매니지드 운영, 클라우드 네이티브 패턴으로 자산을 현대화하고 AI를 안전하게 개방합니다.",
      services: [
        {
          title: "Cloud 사업",
          subtitle: "엔터프라이즈 클라우드 전환",
          narrative:
            "랜딩 존에서 지속 최적화까지 — 아키텍처, FinOps 신호, 운영 플레이북을 기업 거버넌스에 맞춥니다.",
          points: [
            "하이브리드 클라우드 — 환경 간 일관된 아이덴티티·연결·정책",
            "멀티클라우드 — 이식성과 벤더 리스크를 고려한 워크로드 배치",
            "마이그레이션 — 웨이브 계획, 검증 엄격성, 연속성",
            "매니지드 클라우드 — SRE 기반 운영, 장애·변경 규율",
            "클라우드 네이티브 현대화 — 릴리스 케이던스와 복원력을 높이는 플랫폼",
          ],
        },
      ],
      diagram: "cloudStack",
    },
    {
      id: "mpc",
      navLabel: "MPC",
      surface: "muted",
      kicker: "하위 서비스",
      title: "MPC — 미션 크리티컬 엔터프라이즈 플랫폼 인프라",
      lede:
        "다운타임이 용납되지 않는 시스템을 위해 — 경화된 플랫폼, 고가용 패턴, 스택에 녹아든 운영 복원력.",
      services: [
        {
          title: "MPC",
          subtitle: "미션 크리티컬 플랫폼 컴퓨트",
          narrative:
            "엄격한 SLA의 호스팅·플랫폼 운영 — 규제 워크로드와 상시 서비스를 겨냥합니다.",
          points: [
            "보안 엔터프라이즈 컴퓨팅 — 세그먼테이션, 하드닝, 통제된 변경 창",
            "고가용 인프라 — 이중화, 페일오버, 카오스 대비 설계",
            "운영 복원력 — 사업 RTO/RPO에 맞춘 DR·BCP",
            "플랫폼 운영 — 모니터링, 패치, 용량 거버넌스",
          ],
        },
      ],
      architecture: [
        { layer: "미션 크리티컬 앱", hint: "HA 클러스터, 헬스 체크" },
        { layer: "플랫폼 서비스", hint: "DB, 메시징, 아이덴티티" },
        { layer: "보안 네트워크 패브릭", hint: "제로 트러스트, 세그먼트" },
        { layer: "복원력 있는 운영", hint: "SRE, 장애, 변경" },
      ],
    },
    {
      id: "gpuaas",
      navLabel: "GPUaaS",
      surface: "light",
      kicker: "하위 서비스",
      title: "GPUaaS — AI 연산 인프라 서비스",
      lede:
        "엔터프라이즈 통제 하에 학습·추론용 GPU 용량을 공급 — AI 프로그램에 예측 가능한 성능을 제공합니다.",
      services: [
        {
          title: "GPUaaS",
          subtitle: "AI 연산 인프라 서비스",
          narrative:
            "워크로드 수요에 맞춰 클러스터를 확장 — 보안 테넌시, 모니터링, 기업 AI 로드맵에 맞춘 운영 지원.",
          points: [
            "GPU 클러스터 프로비저닝 — 학습 대 추론에 맞는 풀 사이징",
            "AI 학습·추론 — 워크로드 인지 스케줄링·용량 계획",
            "확장형 연산 — 운영을 흔들지 않는 버스트 패턴",
            "보안 AI 운영 — 격리, 시크릿, 접근 거버넌스",
            "엔터프라이즈 AI 가속 — 모델 프로그램의 반복 주기 단축",
          ],
        },
      ],
      diagram: "pipeline",
    },
    {
      id: "methodology",
      navLabel: "방법론",
      surface: "light",
      kicker: "도입·실행 모델",
      title: "진단·표준화·이전·운영 — 프로젝트가 아닌 제품처럼 인프라를 다룹니다.",
      methodology: [
        { phase: "진단", detail: "워크로드 목록, 의존성 맵, 리스크·컴플라이언스 제약" },
        { phase: "표준화", detail: "랜딩 존, 네트워크 패턴, 아이덴티티, 관측 기준선" },
        { phase: "이전", detail: "웨이브 계획, 컷오버 리허설, 롤백 경로, 사업 검증" },
        { phase: "운영", detail: "SRE 케이던스, 용량 거버넌스, FinOps 신호, 지속적 하드닝" },
      ],
    },
    {
      id: "benefits",
      navLabel: "기대 효과",
      surface: "dark",
      kicker: "엔터프라이즈 기대 효과",
      title: "신뢰를 얻는 인프라 — 확장성, 보안, 안정성, AI 성능.",
      items: [
        { title: "확장성", body: "핵심 업무를 해치지 않으면서 AI 스파이크를 흡수하는 탄력 패턴." },
        { title: "보안", body: "기업 정책에 맞춘 다층 네트워크와 암호화." },
        { title: "운영 안정성", body: "SRE 관행, 변경 통제, 측정 가능한 신뢰도 목표." },
        { title: "AI 성능", body: "지연 민감 추론을 위한 GPU·데이터 근접 패턴." },
        { title: "빠른 배포", body: "랜딩 존, 템플릿, 매니지드 경로로 운영 전까지의 시간 단축." },
      ],
    },
  ],
};
