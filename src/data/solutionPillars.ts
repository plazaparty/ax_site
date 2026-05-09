/** AX Transformation Solution Map — 4-Pillar (허브 네비 + 상세 앵커) */

export const SOLUTION_PILLAR_SLUGS = ["ax-readiness", "ai", "cloud", "data"] as const;
export type SolutionPillarSlug = (typeof SOLUTION_PILLAR_SLUGS)[number];

export function isSolutionPillarSlug(slug: string): slug is SolutionPillarSlug {
  return (SOLUTION_PILLAR_SLUGS as readonly string[]).includes(slug);
}

/** 허브 4번째 칸 — 필러 4개만 노출 (하위 구조는 상세 페이지) */
export const solutionPillarHubLinks = [
  {
    slug: "ax-readiness",
    title: "AX Readiness",
    subtitle: "Consulting & Experience",
    href: "/ax-explore/solution/ax-readiness",
  },
  {
    slug: "ai",
    title: "AI",
    subtitle: "Intelligence & Development",
    href: "/ax-explore/solution/ai",
  },
  {
    slug: "cloud",
    title: "Cloud",
    subtitle: "Platform & Security",
    href: "/ax-explore/solution/cloud",
  },
  {
    slug: "data",
    title: "Data",
    subtitle: "Asset & Analytics",
    href: "/ax-explore/solution/data",
  },
] as const;

export type PillarSectionBlock = {
  id: string;
  title: string;
  lead?: string;
  bullets: string[];
};

export type PillarPageModel = {
  title: string;
  kicker: string;
  intro: string;
  frameworkLine: string;
  sections: PillarSectionBlock[];
};

export const solutionPillarPages: Record<SolutionPillarSlug, PillarPageModel> = {
  "ax-readiness": {
    title: "AX Readiness",
    kicker: "Consulting & Experience",
    intro:
      "비즈니스의 목적을 정의하고, 기술 도입의 시행착오를 줄이는 전략적 시작점입니다. 방향(Consulting)과 체험·공동창작(Innovation Hub)을 한 축에서 다룹니다.",
    frameworkLine: "준비(Readiness) 단계에서 로드맵·프로세스·개념 검증을 고정합니다.",
    sections: [
      {
        id: "strategic-roadmap",
        title: "Strategic Roadmap",
        lead: "기업별 맞춤형 AI 도입 단계 및 KPI 설정",
        bullets: ["도입 단계·범위·지표 합의", "이해관계자 정렬용 브리프", "PoC 전제·리스크 시나리오"],
      },
      {
        id: "process-innovation",
        title: "Process Innovation",
        lead: "AI를 통한 업무 프로세스 재설계 및 효율화 진단",
        bullets: ["As-Is / To-Be 흐름 정리", "자동화 후보·예외 처리 설계", "운영 지표와 연결된 개선 과제"],
      },
      {
        id: "concept-center",
        title: "Concept Center",
        lead: "오프라인 쇼룸을 통한 최신 AI 기술 체험",
        bullets: ["유스케이스 데모·레퍼런스 탐색", "산업별 체험 코스", "의사결정자용 짧은 워크스루"],
      },
      {
        id: "co-creation",
        title: "Co-Creation Program",
        lead: "고객사와 함께 아이디어를 발굴하고 즉석에서 검증하는 PoC 워크숍",
        bullets: ["아이디어 스프린트·스코프 고정", "빠른 프로토타입·피드백 루프", "실행 가능성·보안 체크 동시 반영"],
      },
    ],
  },
  ai: {
    title: "AI",
    kicker: "Intelligence & Development",
    intro:
      "실제 지능을 구현하고 서비스화하는 실행의 핵심입니다. 개발 스튜디오, 생성형 AI, 연산 인프라를 연결해 운영 가능한 AI로 이어집니다.",
    frameworkLine: "구현(AI) 축에서 모델·에이전트·추론 환경을 완성합니다.",
    sections: [
      {
        id: "ai-studio",
        title: "AI Studio",
        lead: "AI 모델 학습·튜닝·배포를 지원하는 통합 개발 플랫폼",
        bullets: ["현업 참여 가능한 로우코드 환경", "실험·배포·롤백 표준", "평가·가드레일 템플릿"],
      },
      {
        id: "gen-ai",
        title: "Generative AI",
        lead: "LLM & RAG — 기업 내부 문서·지식 기반 응답",
        bullets: ["권한·갱신 주기 반영 인덱싱", "근거 스니펫·감사 추적", "도메인별 프롬프트·평가 세트"],
      },
      {
        id: "ai-agent",
        title: "AI Agent",
        lead: "단순 챗봇을 넘어 업무를 대행하는 지능형 비서",
        bullets: ["툴 연동·HITL 전환", "업무 오케스트레이션", "운영 관측·알림"],
      },
      {
        id: "ai-infra",
        title: "AI INFRA",
        lead: "GPU/NPU 기반 고성능 연산 및 거대 모델 운영",
        bullets: ["추론 워크로드 최적화", "전용 가속·망분리 옵션", "비용·성능 트레이드오프 관리"],
      },
    ],
  },
  cloud: {
    title: "Cloud",
    kicker: "Platform & Security",
    intro:
      "모든 솔루션이 안정적이고 유연하게 구동되는 기술적 토대입니다. 퍼블릭·프라이빗·관리 서비스를 묶어 워크로드에 맞는 랜딩 존을 제공합니다.",
    frameworkLine: "인프라(Cloud) 축에서 확장·보안·운영을 표준화합니다.",
    sections: [
      {
        id: "cloud-flex",
        title: "Cloud Flex",
        lead: "퍼블릭과 프라이빗을 오가는 하이브리드 클라우드",
        bullets: ["워크로드별 최적 랜딩", "네트워크·아이덴티티 통합", "비용·성능 가시화"],
      },
      {
        id: "auto-scaling",
        title: "Auto-scaling",
        lead: "부하에 따라 자원을 유연하게 할당",
        bullets: ["이벤트·배치·추론 스파이크 대응", "정책 기반 스케일링", "관측·알람 연동"],
      },
      {
        id: "managed-private",
        title: "Managed Private Cloud",
        lead: "보안이 생명인 기업을 위한 단독형 전용 클라우드 구축·운영",
        bullets: ["데이터 주권(Sovereign) 옵션", "폐쇄망·망분리 설계", "패치·백업·DR 위임 운영"],
      },
      {
        id: "sovereign",
        title: "Sovereign & 폐쇄형 인프라",
        lead: "규제·감사 요건을 반영한 격리 환경",
        bullets: ["접근 통제·암호화 표준", "감사 로그·거버넌스 리포트", "AI 워크로드 격리"],
      },
      {
        id: "cloud-msp",
        title: "Cloud MSP",
        lead: "마이그레이션 전략 수립 및 24/7 전문 관제",
        bullets: ["리프트·시프트 vs 리팩토링 로드맵", "FinOps·용량 관리", "장애·변경 프로세스"],
      },
    ],
  },
  data: {
    title: "Data",
    kicker: "Asset & Analytics",
    intro:
      "AI의 연료가 되는 데이터를 정제하고 가치를 부여하는 자산 관리 축입니다. 인텔리전스 플랫폼과 거버넌스를 함께 두어 신뢰 가능한 분석·학습 파이프를 만듭니다.",
    frameworkLine: "자산(Data) 축에서 품질·계보·분석 readiness를 확보합니다.",
    sections: [
      {
        id: "databricks",
        title: "Databricks (Data Intelligence)",
        lead: "레이크하우스 기반 분석·ML·SQL 워크로드 통합",
        bullets: ["배치·스트리밍·ML 플로우", "거버넌스·리니지 연동", "GenAI·RAG용 데이터 준비"],
      },
      {
        id: "databricks-sql",
        title: "SQL / BI 연동",
        lead: "의사결정 레이어와 운영 지표 연결",
        bullets: ["셀프서비스 분석", "대시보드·알림", "KPI와 모델 피처 정합"],
      },
      {
        id: "governance",
        title: "Data Governance",
        lead: "품질·계보·접근 통제",
        bullets: ["메타데이터·데이터 카탈로그", "민감정보 분류·마스킹", "감사 대응 패키지"],
      },
      {
        id: "fabric",
        title: "Data Fabric",
        lead: "분산 데이터를 AI-ready 자산으로 연결",
        bullets: ["소스 연계·가상화", "일관된 접근 정책", "파이프라인 표준화"],
      },
    ],
  },
};
