import type { EnterprisePillarContent } from "./types";

export const readinessEnterpriseContent: EnterprisePillarContent = {
  slug: "ax-readiness",
  accent: "emerald",
  hero: {
    badge: "AX Readiness",
    headline: "조직의 AI·AX 전환 준비도를 완성합니다.",
    subhead:
      "엔터프라이즈 AX 전환의 출발점 — 확장 전에 전략, 거버넌스, 실행 체계를 한 번에 정렬합니다.",
    executive:
      "KT는 전략·AI·클라우드·데이터에 이르는 실전형 엔터프라이즈 AX 실행 역량을 제공합니다. 도입 리스크를 낮추고 측정 가능한 성과로 이어지는 준비도(Readiness)부터 함께합니다.",
  },
  kpis: [
    { label: "거버넌스 정렬 리드타임", value: 40, suffix: "% 단축" },
    { label: "유스케이스 포트폴리오 명확도 향상", value: 3, suffix: "배" },
    { label: "경영 의사결정 사이클", value: 25, suffix: "% 단축" },
  ],
  cta: {
    headline: "AX Readiness 진단으로 시작하세요",
    buttonLabel: "Readiness 상담 요청",
    href: "/ax-consulting",
  },
  blocks: [
    {
      id: "challenges",
      navLabel: "과제",
      surface: "dark",
      kicker: "엔터프라이즈 과제",
      title: "조각난 운영은 ROI를 가리고, AI 확장을 늦춥니다.",
      lede:
        "많은 기업이 모델이 아니라 운영 현실에서 멈춥니다. 워크플로, 데이터, 거버넌스, 인센티브가 어긋나 있기 때문입니다.",
      items: [
        {
          title: "워크플로 파편화",
          body: "핵심 프로세스가 레거시, 벤더, 조직 경계를 넘나들며 속도와 감사 추적성을 잃습니다.",
        },
        {
          title: "데이터 사일로",
          body: "인사이트는 정합된 진실에 달려 있습니다. 정의가 제각각이면 AI는 명확함이 아니라 불일치를 증폭합니다.",
        },
        {
          title: "AI 도입 저조",
          body: "포트폴리오 레인, 예산 모델, 오너 없이 파일럿만 늘면 가치가 운영으로 복리되지 않습니다.",
        },
        {
          title: "거버넌스 공백",
          body: "정책·계보·통제가 없으면 혁신은 리스크가 되고, 컴플라이언스는 브레이크가 아니라 마찰로 작동합니다.",
        },
        {
          title: "ROI 불명확",
          body: "경영진은 모델 지표가 아니라 비즈니스 프로세스와 연결된 성과 지표가 필요합니다.",
        },
        {
          title: "조직 저항",
          body: "역할·인센티브·교육이 기술보다 늦으면 변화는 실패합니다. Readiness는 IT만의 과제가 아니라 변화 리더십입니다.",
        },
      ],
    },
    {
      id: "innovation-hub",
      navLabel: "Innovation Hub",
      surface: "light",
      kicker: "하위 서비스",
      title: "Innovation Hub — 기업 혁신 가속 플랫폼",
      lede:
        "고부가 AX 기회를 발굴하고 실현 가능성을 빠르게 검증하며, 확장 이후에도 유지되는 거버넌스를 세웁니다.",
      services: [
        {
          title: "Innovation Hub",
          subtitle: "엔터프라이즈 혁신 가속",
          narrative:
            "아이디어에서 거버넌스가 입혀진 프로토타입까지, 경영 가시성을 갖춘 워크숍·디스커버리·포트폴리오 설계로 AI를 업무 메커니즘에 연결합니다.",
          points: [
            "AX 아이데이션 워크숍 — 측정 가능한 가설을 가진 교차 기능 문제 정의",
            "Rapid PoC — 성공 기준·종료 게이트가 분명한 통제 환경",
            "AI 유스케이스 디스커버리 — 가치·실현 가능성·리스크·데이터 준비도 스코어링",
            "엔터프라이즈 코크리에이션 — 비즈니스·IT·컴플라이언스를 하나의 전달 레인으로",
            "혁신 거버넌스 — 표준, 검토 주기, 책임 있는 확장 규칙",
          ],
        },
      ],
      diagram: "maturity",
    },
    {
      id: "strategy-consulting",
      navLabel: "AX 전략",
      surface: "muted",
      kicker: "하위 서비스",
      title: "AX Strategy Consulting — 전환 어드바이저리",
      lede:
        "AI 투자를 사업 성과, 리스크 포지션, 전달 역량에 맞추는 경영급 로드맵과 운영 모델을 설계합니다.",
      services: [
        {
          title: "AX Strategy Consulting",
          subtitle: "엔터프라이즈 전환 자문",
          narrative:
            "야망을 실행 가능한 전환 체계로 번역합니다. 성숙도 기준선, 목표 아키텍처, 거버넌스, KPI 프레임워크까지 리더가 운영할 수 있게 정리합니다.",
          points: [
            "AX 성숙도 진단 — 데이터·플랫폼·역량·통제를 아우르는 현재 상태",
            "로드맵 설계 — 의존성·예산·가치 마일스톤이 있는 단계적 이니셔티브",
            "운영 모델 재설계 — 의사결정 권한, 전달 레인, 벤더 오케스트레이션",
            "거버넌스 전략 — 정책·모니터링·설계 단계부터 감사 대응 증적",
            "AI 조직 설계 — 역할, CoE, 연합 실행 구조",
            "KPI 프레임워크 — 도입·생산성·품질·리스크·사업 성과 지표",
          ],
        },
      ],
      methodology: [
        { phase: "탐색", detail: "이해관계자 정렬, 성숙도 기준선, 제약 맵핑" },
        { phase: "설계", detail: "목표 모델, 로드맵, 거버넌스, KPI 아키텍처" },
        { phase: "증명", detail: "종료 기준·운영 전환 게이트가 있는 파일럿 레인" },
        { phase: "확장", detail: "플랫폼 패턴, 역량 강화, 지속적 보증" },
      ],
    },
    {
      id: "implementation",
      navLabel: "실행 모델",
      surface: "light",
      kicker: "도입·실행 모델",
      title: "진단에서 통제된 확장까지 — 과시적 일회성이 아닌 체계입니다.",
      body:
        "Readiness는 슬라이드가 아니라 전달 체계입니다. 명확한 오너십, 측정 가능한 게이트, AI를 비즈니스 실행에 맞추는 운영 리듬이 핵심입니다.",
      bullets: [
        "경영 스티어링 + 포트폴리오 관리 케이던스",
        "데이터·컴플라이언스 사전 점검이 포함된 유스케이스 인테이크",
        "KT AX 플랫폼 패턴에 맞춘 레퍼런스 아키텍처",
        "전달 마일스톤에 내장된 체인지 매니지먼트",
      ],
      architecture: [
        { layer: "비즈니스 성과", hint: "프로세스·오너와 연결된 KPI" },
        { layer: "거버넌스·리스크", hint: "정책, 통제, 증적" },
        { layer: "데이터·지식", hint: "신뢰 소스, 계보, 접근" },
        { layer: "플랫폼·AI", hint: "보안 실행 환경" },
      ],
    },
    {
      id: "outcomes",
      navLabel: "성과",
      surface: "dark",
      kicker: "비즈니스 성과",
      title: "측정 가능한 준비도 — 더 빠른 도입, 더 낮은 전환 리스크.",
      items: [
        {
          title: "AI 도입 가속",
          body: "우선순위 포트폴리오, 자금 레인, 운영 전환 기준으로 낭비와 재작업을 줄입니다.",
        },
        {
          title: "전환 리스크 완화",
          body: "확장 전에 거버넌스와 운영 모델 변화를 착지시켜 컴플라이언스 부채를 예방합니다.",
        },
        {
          title: "사업 전략 정렬",
          body: "AI 이니셔티브가 매출·비용·탄력성·고객 경험에 매핑되도록 고립 실험을 넘어섭니다.",
        },
        {
          title: "운영 현대화",
          body: "워크플로 재설계와 플랫폼 표준이 누적되어 물결이 겹칠수록 강해집니다.",
        },
      ],
    },
  ],
};
