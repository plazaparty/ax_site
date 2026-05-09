export interface BrochureItem {
  id: string;
  title: string;
  description: string;
  fileLabel: string;
}

export const brochures: BrochureItem[] = [
  {
    id: "b-ax-value",
    title: "KT AX Value Framework",
    description:
      "AX의 전 주기(인프라-클라우드-모델-데이터-Agent-운영)를 한 장으로 정리한 소개 자료입니다. (시연용)",
    fileLabel: "PDF 다운로드 (mock)",
  },
  {
    id: "b-industry",
    title: "Industry Solutions Overview",
    description:
      "산업별 적용 시나리오와 기대 효과를 빠르게 공유할 수 있는 요약본입니다. (시연용)",
    fileLabel: "PDF 다운로드 (mock)",
  },
  {
    id: "b-journey",
    title: "AX Journey Playbook",
    description:
      "탐색→PoC→도입→확산→고도화 단계별 체크리스트와 운영 포인트를 정리했습니다. (시연용)",
    fileLabel: "PDF 다운로드 (mock)",
  },
];

