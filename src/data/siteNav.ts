export interface PrimaryNavItem {
  label: string;
  href: string;
  /** 메가메뉴·모바일 시트 한 줄 설명 */
  description: string;
  megaLinks?: { label: string; href: string; hint: string }[];
}

/** Mobile-first: flat primary destinations only (depth in hubs). */
export const primaryNav: PrimaryNavItem[] = [
  {
    label: "Home",
    href: "/",
    description: "AX Discovery 전략 지도",
    megaLinks: [
      { label: "AX 컨설팅으로", href: "/ax-consulting", hint: "진단 시작" },
      { label: "AX 탐색", href: "/ax-explore", hint: "4축 지도" },
      { label: "Use Case", href: "/use-case", hint: "사례 라이브러리" },
    ],
  },
  {
    label: "AX 컨설팅",
    href: "/ax-consulting",
    description: "우리 회사에 맞는 AX 컨설팅 진단",
    megaLinks: [
      { label: "진단 시작", href: "/ax-consulting", hint: "6단계 Discovery" },
      { label: "브리핑 문서", href: "/ax-consulting/brief", hint: "PDF·md" },
      { label: "로드맵", href: "/ax-consulting/roadmap", hint: "실행 타임라인" },
    ],
  },
  {
    label: "AX 탐색",
    href: "/ax-explore",
    description: "산업·업무·단계·솔루션별 AX(4대 축)",
    megaLinks: [
      { label: "산업별", href: "/ax-explore#ax-explore-axis-industry", hint: "규제·가치사슬" },
      { label: "업무별", href: "/ax-explore#ax-explore-axis-task", hint: "과제 축" },
      { label: "도입단계", href: "/ax-explore#ax-explore-axis-stage", hint: "성숙도" },
      { label: "솔루션 맵", href: "/ax-explore#ax-explore-axis-solution", hint: "Readiness · AI · Cloud · Data" },
    ],
  },
  {
    label: "Use Case",
    href: "/use-case",
    description: "실제 적용 사례와 KPI",
    megaLinks: [
      { label: "스토리 허브", href: "/use-case", hint: "필터 가능" },
      { label: "제조 품질", href: "/use-case/success/manufacturing-quality", hint: "Vision" },
      { label: "공공 민원", href: "/use-case/success/public-civic", hint: "AICC+RAG" },
    ],
  },
  {
    label: "인사이트",
    href: "/insights-hub",
    description: "AX 전략 자료와 트렌드",
    megaLinks: [
      { label: "트렌드", href: "/insights-hub/trends", hint: "산업 시그널" },
      { label: "기술", href: "/insights-hub/tech", hint: "적용 조건" },
      { label: "리포트", href: "/insights-hub/reports", hint: "브리프" },
    ],
  },
];

export const mailtoConsult =
  "mailto:ax-sales@kt.com?subject=KT%20AX%20%EC%83%81%EB%8B%B4%20%EC%9A%94%EC%B2%AD";
