import type { QualitativeBarTone } from "@/components/ax-viz/QualitativeImpactBars";

export type PageVizConfig = {
  title: string;
  subtitle?: string;
  items: string[];
  tone: QualitativeBarTone;
};

/** 전역 하단 도식 — 허브·세부 슬러그·결과 대시보드 등은 페이지 내부에서 처리 */
export function isExcludedFromGlobalPageViz(pathname: string): boolean {
  if (pathname === "/" || pathname.startsWith("/insights-hub") || pathname.startsWith("/insights/example")) return true;
  if (pathname === "/ax-explore" || pathname === "/use-case") return true;
  if (pathname === "/ax-kt" || pathname.startsWith("/ax-kt/")) return true;
  if (pathname === "/ax-consulting") return true;
  if (pathname === "/ax-consulting/result") return true;
  if (/^\/ax-explore\/(industry|task|stage|solution)\/.+/.test(pathname)) return true;
  if (/^\/use-case\/success\/.+/.test(pathname)) return true;
  return false;
}

const MAP: Record<string, PageVizConfig> = {
  "/explore": {
    title: "둘러보기 허브 가치",
    tone: "sky",
    items: ["가치 구조와 실행 개요", "추진 단계·산업·트렌드 연결", "다음 행동으로 이어지는 내비게이션"],
  },
  "/consultant": {
    title: "AX 컨설팅 진입 포인트",
    tone: "rose",
    items: ["현장 맥락 수집", "우선순위·ROI 논리", "PoC·확산까지 실행 설계"],
  },
  "/ax-events-news": {
    title: "이벤트·뉴스 허브에서 보는 것",
    tone: "amber",
    items: ["세미나·밋업 일정", "플랫폼 릴리즈·레퍼런스", "규제·시장 시그널"],
  },
  "/ax-maturity": {
    title: "성숙도 관점 체크",
    tone: "emerald",
    items: ["데이터·거버넌스 준비", "운영 표준·관측", "CoE·변경관리", "확산·비용 최적화"],
  },
  "/ax-tech-stack": {
    title: "기술 스택 관측 축",
    tone: "violet",
    items: ["Infra·Cloud·Model", "Data for AI·RAG", "Agent·워크플로", "보안·망분리·규제"],
  },
  "/ax-industry": {
    title: "산업별 적용 강도",
    tone: "rose",
    items: ["규제·감사 압력", "데이터 표준·품질", "현장 자동화 여지", "고객 경험 개선"],
  },
  "/ax-trends": {
    title: "트렌드 신호 스냅샷",
    tone: "sky",
    items: ["GenAI 운영화", "에이전트 거버넌스", "비용·성능 최적화", "멀티모달·엣지"],
  },
  "/ax-value": {
    title: "AX 가치 프레임 요약",
    tone: "emerald",
    items: ["비용·리드타임", "리스크·컴플라이언스", "매출·고객 경험", "조직 역량·학습"],
  },
  "/ax-consulting/brief": {
    title: "브리핑 문서에 담기는 축",
    tone: "violet",
    items: ["Executive summary", "AX maturity·전환 갭", "실행 타임라인", "추천 솔루션 랭킹", "PoC readiness"],
  },
  "/ax-consulting/roadmap": {
    title: "로드맵 단계별 초점",
    tone: "amber",
    items: ["범위·지표 합의", "연동·파일럿", "운영 이관·관측", "확산·표준화"],
  },
  "/use-case/industry": {
    title: "산업 사례 관점",
    tone: "rose",
    items: ["맥락 공감", "KPI·기간", "솔루션 조합", "확장 시나리오"],
  },
  "/use-case/task": {
    title: "업무 사례 관점",
    tone: "sky",
    items: ["과제 정의", "운영 모델", "품질·감사", "확산 리스크"],
  },
  "/use-case/stage": {
    title: "단계별 사례 관점",
    tone: "amber",
    items: ["PoC 범위", "운영 전제", "전사 확산", "CoE·교육"],
  },
  "/use-case/success": {
    title: "성공 사례 라이브러리 신호",
    tone: "emerald",
    items: ["정량 KPI", "운영 Before/After", "아키텍처 흐름", "유사 산업 확장"],
  },
  "/demo": {
    title: "데모 체험 구성",
    tone: "violet",
    items: ["Agent", "고객센터", "문서 AI", "Vision", "시나리오"],
  },
  "/demo/agent": {
    title: "에이전트 데모 포인트",
    tone: "violet",
    items: ["툴 연동", "가드레일", "관측·평가", "HITL 전환"],
  },
  "/demo/contact-center": {
    title: "콜센터 데모 포인트",
    tone: "sky",
    items: ["지식 연동", "코칭·품질", "AHT·FCR", "민원 근거 응답"],
  },
  "/demo/document": {
    title: "문서 AI 데모 포인트",
    tone: "amber",
    items: ["추출·분류", "검증 UI", "감사 추적", "버전 관리"],
  },
  "/demo/vision": {
    title: "비전 AI 데모 포인트",
    tone: "emerald",
    items: ["샘플·라벨", "엣지 배포", "불량 탐지", "안전 행동"],
  },
  "/demo/scenario": {
    title: "시나리오 체험 포인트",
    tone: "rose",
    items: ["엔드투엔드 흐름", "역할 분담", "성공 지표", "롤백 계획"],
  },
  "/insights/trends": {
    title: "인사이트 · 트렌드 읽기",
    tone: "sky",
    items: ["시장 속도", "규제 변화", "ROI 논리", "적용 조건"],
  },
  "/insights/case-studies": {
    title: "케이스 스터디 관점",
    tone: "emerald",
    items: ["문제 정의", "도입 구조", "측정 지표", "교훈·재현"],
  },
  "/insights/industry-strategy": {
    title: "산업 전략 관점",
    tone: "rose",
    items: ["가치사슬 압력", "디지털 자산", "파트너 생태계", "리스크 허용"],
  },
  "/resources/brochures": {
    title: "브로슈어 자료 활용",
    tone: "violet",
    items: ["요약 슬라이드", "아키텍처 도면", "ROI 템플릿"],
  },
  "/resources/events": {
    title: "리소스 · 이벤트",
    tone: "amber",
    items: ["일정 동기화", "등록·리마인더", "세션 자료"],
  },
  "/resources/contact": {
    title: "문의·연결 흐름",
    tone: "rose",
    items: ["요구사항 정리", "보안·망분리 질문", "PoC 범위 협의"],
  },
  "/solutions/industry": {
    title: "솔루션 · 산업 매핑",
    tone: "rose",
    items: ["규제 허용 범위", "데이터 거버넌스", "현장 연동"],
  },
  "/solutions/technology": {
    title: "솔루션 · 기술 매핑",
    tone: "sky",
    items: ["모델·추론", "데이터 파이프라인", "보안·관측"],
  },
  "/solutions/ax-journey": {
    title: "AX 저니 관점",
    tone: "emerald",
    items: ["탐색·범위", "파일럿", "도입", "확산", "고도화"],
  },
};

export function getPageVizConfig(pathname: string): PageVizConfig | null {
  if (isExcludedFromGlobalPageViz(pathname)) return null;
  return MAP[pathname] ?? null;
}
