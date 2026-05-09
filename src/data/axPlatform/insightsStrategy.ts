/** 인사이트 허브 시각화용 mock 데이터 */

export const trendRadarAxes = [
  { id: "agent", label: "Agent", value: 78 },
  { id: "rag", label: "RAG/지식", value: 85 },
  { id: "doc", label: "문서 AI", value: 72 },
  { id: "vision", label: "Vision", value: 64 },
  { id: "gov", label: "거버넌스", value: 88 },
] as const;

export const industryHeatmap = [
  { industry: "공공", signal: 92, note: "민원·문서" },
  { industry: "금융", signal: 86, note: "심사·상담" },
  { industry: "제조", signal: 79, note: "품질·현장" },
  { industry: "유통", signal: 74, note: "수요·챗" },
  { industry: "의료", signal: 70, note: "기록·운영" },
  { industry: "통신", signal: 81, note: "OSS·케어" },
] as const;

export const adoptionTimeline = [
  { year: "2023", label: "파일럿 확산", level: 35 },
  { year: "2024", label: "운영 표준화", level: 55 },
  { year: "2025", label: "Agent 실험", level: 72 },
  { year: "2026", label: "거버넌스·비용 최적화", level: 84 },
] as const;

export const regulationImpact = [
  { area: "로그·재현", impact: "높음", detail: "공공·금융 필수" },
  { area: "개인정보", impact: "높음", detail: "마스킹·최소수집" },
  { area: "모델 변경관리", impact: "중간", detail: "버전·승인" },
  { area: "다크 데이터", impact: "중간", detail: "접근 정책" },
] as const;

export const executiveBriefCards = [
  {
    title: "AX를 ‘기술’이 아니라 ‘운영체계’로",
    summary: "성공 지표·RACI·감사 추적을 동시에 설계할 때 확산이 빨라집니다.",
    href: "/insights-hub/reports",
  },
  {
    title: "RAG 실패의 대부분은 데이터가 아니라 운영",
    summary: "지식 최신성·권한·평가 세트가 ROI를 가릅니다.",
    href: "/insights-hub/tech",
  },
  {
    title: "규제 변화에 맞춘 로드맵 리밸런싱",
    summary: "분기 단위로 과제 포트폴리오를 재정렬하는 체크리스트.",
    href: "/insights-hub/trends",
  },
] as const;

export const featuredInsightCarousel = [
  { title: "산업별 Agent 거버넌스 체크리스트", tag: "전략", href: "/insights-hub/trends" },
  { title: "문서 AI HITL 설계 패턴", tag: "구축", href: "/insights-hub/tech" },
  { title: "금융 상담 품질 KPI 세트", tag: "ROI", href: "/insights-hub/reports" },
  { title: "공공 근거응답 운영 가이드", tag: "규제", href: "/insights-hub/news" },
] as const;
