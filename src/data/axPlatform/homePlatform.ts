/** 홈 전용 — Why KT AX, Proof metrics (mock, 교체 가능) */

export const whyKtAxPillars = [
  {
    id: "industry",
    title: "산업 전문성",
    points: ["공공·금융·제조 레퍼런스 프리셋", "규제·감사 대응 경험 반영"],
  },
  {
    id: "stack",
    title: "AI · Cloud · Network",
    points: ["엣지~코어 일관된 연결성", "하이브리드·망분리 옵션"],
  },
  {
    id: "secure",
    title: "보안 · 운영 안정성",
    points: ["접근통제·감사 로그·HITL", "SRE 관점 운영 관측"],
  },
  {
    id: "portfolio",
    title: "AICC · Agent · RAG · Vision",
    points: ["상담·지식·문서·현장 시각을 단일 로드맵으로 정렬"],
  },
] as const;

/** 실제 수치 확보 시 이 객체만 교체하면 됩니다. */
export const homeProofMetrics = [
  { id: "saving", label: "예상 운영 절감(범위)", value: "12–28%", note: "문서·콜 중심 과제 기준" },
  { id: "time", label: "첫 가시 성과까지", value: "6–12주", note: "파일럿 범위·데이터 준비도 의존" },
  { id: "auto", label: "자동화 후보 업무군", value: "40+", note: "KT AX 과제 라이브러리 기준" },
  { id: "vertical", label: "적용 산업군", value: "12+", note: "공공·금융·제조·유통·의료·물류 등" },
] as const;
