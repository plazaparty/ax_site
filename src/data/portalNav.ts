export type TopNavKey = "value" | "solutions" | "insights" | "resources";

export interface NavLeafItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  items: NavLeafItem[];
}

export interface TopNavItem {
  key: TopNavKey;
  label: string;
  href?: string;
  groups?: NavGroup[];
}

export const topNav: TopNavItem[] = [
  {
    key: "value",
    label: "KT AX Value",
    href: "/ax-value",
  },
  {
    key: "solutions",
    label: "Solutions",
    groups: [
      {
        label: "Solutions",
        items: [
          {
            label: "Technology",
            href: "/solutions/technology",
            description: "AX 구현을 위한 핵심 기술과 구성 요소를 정리합니다.",
          },
          {
            label: "AX Journey",
            href: "/solutions/ax-journey",
            description: "탐색부터 확산까지, 단계별 도입 로드맵을 확인합니다.",
          },
          {
            label: "Industry Solutions",
            href: "/solutions/industry",
            description: "산업별 시나리오와 적용 방향을 한눈에 살펴봅니다.",
          },
        ],
      },
    ],
  },
  {
    key: "insights",
    label: "Insights",
    groups: [
      {
        label: "Insights",
        items: [
          {
            label: "Trends",
            href: "/insights/trends",
            description: "엔터프라이즈 의사결정에 영향을 주는 흐름을 요약합니다.",
          },
          {
            label: "Industry Strategy",
            href: "/insights/industry-strategy",
            description: "산업별 AX 전략 포인트를 빠르게 정리합니다.",
          },
          {
            label: "Case Studies",
            href: "/insights/case-studies",
            description: "고객 사례로 도입 방식과 성과 포인트를 확인합니다.",
          },
        ],
      },
    ],
  },
  {
    key: "resources",
    label: "Resources",
    groups: [
      {
        label: "Resources",
        items: [
          {
            label: "Brochures",
            href: "/resources/brochures",
            description: "소개 자료를 다운로드해 내부 공유에 활용하세요.",
          },
          {
            label: "Events & Promotions",
            href: "/resources/events",
            description: "웨비나·세미나·프로모션 소식을 확인합니다.",
          },
          {
            label: "Contact Us",
            href: "/resources/contact",
            description: "도입 문의를 남기면 담당자가 빠르게 연결합니다.",
          },
        ],
      },
    ],
  },
];

