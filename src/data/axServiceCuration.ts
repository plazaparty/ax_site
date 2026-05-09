import type { IndustryVisualSlug } from "@/components/icons/IndustryMonoIcon";
import type { ServiceIconSlug } from "@/components/icons/ServiceMonoIcon";

/** AX 탐색 — 특정 KT 서비스 큐레이션 (카드 뉴스 / 블록) */

export interface AxServiceCuratedItem {
  id: string;
  title: string;
  kicker: string;
  dek: string;
  href: string;
  icon: ServiceIconSlug;
  /** 카드 배경 톤 */
  tone: "slate" | "sky" | "violet" | "amber" | "emerald" | "rose";
  /** 대표 연관 산업 일러스트 */
  industryVisual: IndustryVisualSlug;
  /** 큰 피처 카드 여부 */
  featured?: boolean;
}

export const axServiceCuration: AxServiceCuratedItem[] = [
  {
    id: "document-ai",
    title: "KT Document AI",
    kicker: "문서 AX",
    dek: "심사·계약·민원 패키지에서 추출·비교·요약까지 한 파이프라인으로 처리 시간을 줄입니다.",
    href: "/ax-explore/solution/document-ai",
    icon: "document",
    tone: "slate",
    industryVisual: "finance",
    featured: true,
  },
  {
    id: "aicc-plus",
    title: "KT AICC Plus",
    kicker: "고객센터",
    dek: "AI 응대와 상담사 코칭·품질 관측을 묶어 AHT·FCR 개선을 동시에 노립니다.",
    href: "/ax-explore/solution/aicc-plus",
    icon: "aicc",
    tone: "sky",
    industryVisual: "telecom",
  },
  {
    id: "agent-studio",
    title: "KT AI Agent Studio",
    kicker: "Agent",
    dek: "업무 단위 Agent 설계·배포·평가를 표준화해 확장 속도와 운영 가시성을 높입니다.",
    href: "/ax-explore/solution/agent-studio",
    icon: "agent",
    tone: "violet",
    industryVisual: "manufacturing",
  },
  {
    id: "vision-ax",
    title: "KT Vision AX",
    kicker: "현장 품질",
    dek: "불량 탐지·안전 모니터링을 엣지와 중앙 학습 구조로 나눠 현장 변동에 대응합니다.",
    href: "/ax-explore/solution/vision-ax",
    icon: "vision",
    tone: "amber",
    industryVisual: "manufacturing",
  },
  {
    id: "knowledge-ai",
    title: "KT Knowledge AI",
    kicker: "지식 검색",
    dek: "RAG·권한·감사 로그를 기본값으로 두어 근거 있는 응답을 재현 가능하게 만듭니다.",
    href: "/ax-explore/solution/knowledge-ai",
    icon: "knowledge",
    tone: "emerald",
    industryVisual: "public",
  },
  {
    id: "workflow-ai",
    title: "KT Workflow AI",
    kicker: "오케스트레이션",
    dek: "시스템 간 이벤트와 예외 분류를 연결해 반복 클릭과 공백 구간을 줄입니다.",
    href: "/ax-explore/solution/workflow-ai",
    icon: "workflow",
    tone: "rose",
    industryVisual: "retail",
  },
];
