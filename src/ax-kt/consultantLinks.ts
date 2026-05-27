/** KT AX 상품명 → 메인 사이트 솔루션 상세 경로 */
const PRODUCT_HREF: Record<string, string> = {
  "KT AI Studio": "/ax-explore/solution/ai",
  AIWORKS: "/ax-explore/solution/ai",
  "생성형 AI 플랫폼": "/ax-explore/solution/ai",
  "컴퓨터 비전 SDK": "/ax-explore/solution/vision-ax",
  "STT/TTS API": "/ax-explore/solution/aicc-plus",
  "KT Cloud": "/ax-explore/solution/cloud",
  "하이브리드 클라우드": "/ax-explore/solution/cloud",
  "클라우드 마이그레이션": "/ax-explore/solution/cloud",
  "K-Edge": "/ax-explore/solution/cloud",
  "클라우드 보안": "/ax-explore/solution/cloud",
  "빅데이터 플랫폼": "/ax-explore/solution/data-insight",
  데이터레이크: "/ax-explore/solution/data-insight",
  "실시간 분석": "/ax-explore/solution/data-insight",
  "BI 대시보드": "/ax-explore/solution/data-insight",
  "데이터 거버넌스": "/ax-explore/solution/data-insight",
  "AX 진단 서비스": "/ax-explore/solution/ax-consultant",
  "전략 컨설팅": "/ax-explore/solution/ax-consultant",
  "직원 교육 프로그램": "/ax-explore/solution/ax-readiness",
  "변화관리 지원": "/ax-explore/solution/ax-readiness",
  "KPI 설계": "/ax-explore/solution/ax-readiness",
  "KT AICC Plus": "/ax-explore/solution/aicc-plus",
  "KT Knowledge AI": "/ax-explore/solution/knowledge-ai",
  "KT Workflow AI": "/ax-explore/solution/workflow-ai",
  "KT Document AI": "/ax-explore/solution/document-ai",
  "KT Vision AX": "/ax-explore/solution/vision-ax",
  "KT Data Insight AI": "/ax-explore/solution/data-insight",
  "KT AI Agent Studio": "/ax-explore/solution/agent-studio",
  "KT AX Consultant": "/ax-explore/solution/ax-consultant",
};

const PILLAR_HREF: Record<string, string> = {
  AI: "/ax-explore/solution/ai",
  Cloud: "/ax-explore/solution/cloud",
  Data: "/ax-explore/solution/data",
  Readiness: "/ax-explore/solution/ax-readiness",
};

export function solutionLineHref(name: string, pillarKey?: string): string {
  const direct = PRODUCT_HREF[name];
  if (direct) return direct;
  if (pillarKey && PILLAR_HREF[pillarKey]) return PILLAR_HREF[pillarKey];
  return "/ax-explore/solution/ai";
}

export const INDUSTRY_SLUG_LABELS: Record<string, string> = {
  public: "공공",
  finance: "금융",
  manufacturing: "제조",
  retail: "유통",
  healthcare: "의료",
  defense: "국방",
  safety: "안전/건설",
  services: "서비스/기타",
};
