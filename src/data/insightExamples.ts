/** 홈·인사이트에서 연결되는 예시 기사 (데모용 합성 콘텐츠) */

export type InsightExample = {
  slug: string;
  title: string;
  tag: string;
  dek: string;
  published: string;
  readTime: string;
  sections: { heading: string; body: string }[];
  takeaways: string[];
};

export const insightExamples: Record<string, InsightExample> = {
  "genai-maturity-2026": {
    slug: "genai-maturity-2026",
    title: "산업별 Enterprise GenAI 성숙도 2026",
    tag: "산업 트렌드",
    dek: "규제·데이터·운영 세 축으로 성숙도를 재정의하고, 도입 우선순위를 제안합니다.",
    published: "2026.05",
    readTime: "약 6분",
    sections: [
      {
        heading: "성숙도를 나누는 기준",
        body: "모델 성능이 아니라 거버넌스, 데이터 계보, 운영 관측 가능성이 확산의 분기점입니다. 산업별로 허용 리스크와 감사 주기가 다르므로 동일한 체크리스트를 쓰되 가중치를 조정합니다.",
      },
      {
        heading: "금융·공공·제조의 차이",
        body: "금융은 변경 관리와 설명 가능성, 공공은 접근 통제와 증적, 제조는 현장 영상·MES 연동이 핵심 과제로 부상합니다.",
      },
      {
        heading: "실행 제안",
        body: "성숙도 진단 → 파일럿 범위 고정 → 운영 전환 게이트 순으로 작게 쪼개고, 각 단계마다 KPI와 롤백 계획을 명시합니다.",
      },
    ],
    takeaways: ["규제 산업은 ‘증적 우선’", "현장은 ‘표준 촬영·HITL’", "확산은 ‘관측·비용’ 동시 설계"],
  },
  "rag-vs-agent-roadmap": {
    slug: "rag-vs-agent-roadmap",
    title: "RAG와 Agent, 무엇부터 도입할까",
    tag: "기술 인사이트",
    dek: "검색 품질과 워크플로 자동화를 분리해 로드맵을 짜면 낭비를 줄일 수 있습니다.",
    published: "2026.04",
    readTime: "약 5분",
    sections: [
      {
        heading: "RAG가 먼저인 경우",
        body: "지식이 분산돼 있고, 답의 근거·출처가 감사에 필수일 때 RAG가 선행합니다. 상담·규정·내부 Q&A가 대표적입니다.",
      },
      {
        heading: "Agent가 먼저인 경우",
        body: "시스템 간 반복 작업이 명확하고, 승인·에스컬레이션 경로가 이미 있을 때 에이전트가 ROI를 빨리 만듭니다.",
      },
      {
        heading: "결합 시나리오",
        body: "RAG로 근거를 고정하고, Agent가 그 위에서 티켓·메일·승인을 오케스트레이션하는 패턴이 가장 흔한 엔터프라이즈 조합입니다.",
      },
    ],
    takeaways: ["근거 없는 Agent는 리스크", "RAG만으로는 업무 종결 한계", "결합 시 HITL 게이트 필수"],
  },
  "ax-platform-release-notes": {
    slug: "ax-platform-release-notes",
    title: "KT AX 플랫폼 업데이트 노트",
    tag: "뉴스",
    dek: "보안 패치, 커넥터, 관측 대시보드 개선 등 최근 릴리스 하이라이트를 요약합니다.",
    published: "2026.05",
    readTime: "약 3분",
    sections: [
      {
        heading: "이번 분기 초점",
        body: "멀티 테넌시 정책 템플릿, 감사 로그보내기, 추론 비용 가시화가 포함되었습니다.",
      },
      {
        heading: "마이그레이션 가이드",
        body: "기존 API 버전은 6개월 병행 후 종료 예정이며, 변경점은 샌드박스에서 검증할 수 있습니다.",
      },
    ],
    takeaways: ["API 병행 기간 확인", "샌드박스에서 회귀 테스트", "비용 대시보드 알람 설정"],
  },
  "discovery-live-session": {
    slug: "discovery-live-session",
    title: "AX Discovery 라이브 세션 리캡",
    tag: "이벤트",
    dek: "현장 Q&A에서 반복된 질문과 답변 방향을 정리했습니다.",
    published: "2026.03",
    readTime: "약 4분",
    sections: [
      {
        heading: "다뤄진 주제",
        body: "PoC 범위를 어떻게 줄일지, 거버넌스를 언제 끼워 넣을지, KPI를 누구의 언어로 맞출지에 대한 논의가 중심이었습니다.",
      },
      {
        heading: "다음 세션 예고",
        body: "산업별 규제 체크리스트 워크숍과 라이브 데모가 예정되어 있습니다.",
      },
    ],
    takeaways: ["PoC는 ‘종료 기준’부터", "거버넌스는 파일럿에 포함", "KPI는 경영·현업 공통어"],
  },
  "agent-governance-checklist": {
    slug: "agent-governance-checklist",
    title: "에이전트 거버넌스 체크리스트 v1",
    tag: "기술 인사이트",
    dek: "프롬프트·툴·데이터 접근을 한 장으로 점검할 수 있는 운영 체크리스트입니다.",
    published: "2026.04",
    readTime: "약 7분",
    sections: [
      {
        heading: "정체성·권한",
        body: "에이전트별 허용 툴, 데이터 범위, 사람 승인이 필요한 단계를 문서화합니다.",
      },
      {
        heading: "관측·증적",
        body: "입출력 로그, 모델 버전, 프롬프트 해시를 보존 주기와 함께 정의합니다.",
      },
      {
        heading: "비상 정지",
        body: "품질 임계치, 비용 임계치, 보안 이벤트 시 자동 차단·알람 경로를 사전에 연결합니다.",
      },
    ],
    takeaways: ["툴 화이트리스트", "로그 보존 기간", "임계치 기반 차단"],
  },
  "data-lineage-for-ai": {
    slug: "data-lineage-for-ai",
    title: "AI를 위한 데이터 계보 설계",
    tag: "데이터",
    dek: "피처·문서·지표가 어디서 왔는지 추적 가능해야 모델 운영이 감사를 견딥니다.",
    published: "2026.04",
    readTime: "약 6분",
    sections: [
      {
        heading: "최소 계보 범위",
        body: "원천 → 변환 → 소비(모델·리포트)까지의 식별자와 버전을 강제합니다.",
      },
      {
        heading: "자동화 포인트",
        body: "스키마 변경, 문서 갱신, 권한 변경이 발생하면 다운스트림 알림을 보냅니다.",
      },
    ],
    takeaways: ["식별자·버전 필수", "변경 알림 자동화", "소비 지점까지 연결"],
  },
  "contact-center-quality-ops": {
    slug: "contact-center-quality-ops",
    title: "콜센터 품질 운영을 위한 관측 설계",
    tag: "운영",
    dek: "AHT만 보던 운영에서 벗어나 해결 품질·근거 응답률을 함께 보는 방법입니다.",
    published: "2026.03",
    readTime: "약 5분",
    sections: [
      {
        heading: "지표 세트",
        body: "1차 해결, 근거 링크 응답 비율, 재문의율을 한 대시보드에 묶습니다.",
      },
      {
        heading: "코칭 루프",
        body: "상담사별로 실패 패턴을 클러스터링하고, 스크립트 개선을 주간으로 굴립니다.",
      },
    ],
    takeaways: ["AHT 단일 지표 지양", "근거 응답률 도입", "주간 코칭 루프"],
  },
  "poc-exit-criteria": {
    slug: "poc-exit-criteria",
    title: "PoC 종료 기준을 어떻게 쓸까",
    tag: "전략",
    dek: "‘성공했다’는 말이 모호해지는 것을 막기 위한 체크리스트입니다.",
    published: "2026.02",
    readTime: "약 4분",
    sections: [
      {
        heading: "정량 기준",
        body: "정확도·처리 시간·비용 상한 중 최소 두 가지는 숫자로 고정합니다.",
      },
      {
        heading: "정성 기준",
        body: "현업 채택 의사, 보안 심의 통과, 운영 인력 가용성을 게이트로 둡니다.",
      },
    ],
    takeaways: ["숫자 2개 이상", "운영 전제 명시", "실패 시 롤밄"],
  },
  "security-llm-deployment": {
    slug: "security-llm-deployment",
    title: "사내 LLM 배포 시 보안 체크포인트",
    tag: "보안",
    dek: "망분리, 키 관리, 로그 마스킹을 배포 전에 끝내는 순서를 제안합니다.",
    published: "2026.05",
    readTime: "약 6분",
    sections: [
      {
        heading: "네트워크",
        body: "추론 엔드포인트를 폐쇄 구역에 두고, 프록시를 통한 토큰 검사를 기본값으로 둡니다.",
      },
      {
        heading: "데이터 흐름",
        body: "프롬프트에 포함되는 문서 범위를 라벨 기반으로 제한하고, 반환분에도 동일 정책을 적용합니다.",
      },
    ],
    takeaways: ["폐쇄망 추론", "문서 라벨 통제", "반환분 정책"],
  },
  "value-framework-kpi": {
    slug: "value-framework-kpi",
    title: "AX 가치 프레임과 KPI 연결하기",
    tag: "전략",
    dek: "비용·리스크·매출·고객경험 축에 지표를 매핑하는 실무 예시입니다.",
    published: "2026.01",
    readTime: "약 5분",
    sections: [
      {
        heading: "축별 예시 KPI",
        body: "비용은 처리당 비용, 리스크는 사고 건수, 매출은 전환율, 경험은 NPS·재문의로 연결합니다.",
      },
      {
        heading: "보고 리듬",
        body: "스티어링 위원회에는 축별로 한 장 지표만 올리고, 상세는 부속 자료로 분리합니다.",
      },
    ],
    takeaways: ["축당 1~2개 핵심 KPI", "스티어링용 한 장 요약", "상세는 부속"],
  },
  "multimodal-use-cases": {
    slug: "multimodal-use-cases",
    title: "멀티모달 AX 유스케이스 스캔",
    tag: "기술 인사이트",
    dek: "영상·음성·문서가 동시에 들어오는 과제를 선별하는 프레임입니다.",
    published: "2026.04",
    readTime: "약 5분",
    sections: [
      {
        heading: "적합 과제",
        body: "현장 영상+센서, 콜 녹취+CRM, 도면+검사표처럼 채널이 복수인 경우를 우선합니다.",
      },
      {
        heading: "리스크",
        body: "저장·전송 비용과 개인정보 마스킹 비용을 사전에 산정해야 합니다.",
      },
    ],
    takeaways: ["복수 채널 과제 우선", "저장비 산정", "PII 마스킹"],
  },
  "hybrid-cloud-for-ax": {
    slug: "hybrid-cloud-for-ax",
    title: "AX 워크로드를 위한 하이브리드 클라우드 설계",
    tag: "인프라",
    dek: "추론 워크로드와 거래형 워크로드를 분리해 비용과 보안을 동시에 맞춥니다.",
    published: "2026.05",
    readTime: "약 5분",
    sections: [
      {
        heading: "분리 기준",
        body: "GPU가 필요한 배치는 전용 풀, 민감 데이터는 온프레미스, 고객 접점은 엣지에 두는 식으로 배치합니다.",
      },
      {
        heading: "연결 패턴",
        body: "아이덴티티·시크릿·관측을 공통 레이어로 묶어 운영 복잡도를 줄입니다.",
      },
    ],
    takeaways: ["GPU 풀 분리", "민감 데이터 온프렘", "공통 아이덴티티"],
  },
};

export const INSIGHT_EXAMPLE_SLUGS = Object.keys(insightExamples);

export function getInsightExample(slug: string): InsightExample | null {
  return insightExamples[slug] ?? null;
}
