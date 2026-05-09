import type {
  RecommendedSolution,
  ConcernLabel,
  CustomerTypeLabel,
} from "@/store/consultingWizardStore";

const SOLUTIONS: Omit<
  RecommendedSolution,
  | "fitPercent"
  | "whyFit"
  | "businessContext"
  | "evidenceDrivers"
  | "risks"
  | "prerequisites"
  | "kpiOutlook"
  | "deploymentComplexity"
  | "similarPatterns"
  | "roiReasoning"
>[] = [
  {
    id: "ax-consultant",
    name: "KT AX Consultant",
    solves: "도입 방향·우선순위·ROI 관점의 AX 진단과 실행 과제 정렬",
    effect: "의사결정 속도 단축, 불필요한 PoC 반복 감소",
    timeline: "2–4주 (진단·설계)",
    phases: ["현황 인터뷰", "과제 우선순위", "로드맵 합의"],
  },
  {
    id: "agent-studio",
    name: "KT AI Agent Studio",
    solves: "업무 단위 Agent 설계·배포·운영을 표준화",
    effect: "현장 생산성·자동화 커버리지 확대",
    timeline: "4–10주",
    phases: ["유스케이스 정의", "툴 연동", "평가·가드레일"],
  },
  {
    id: "knowledge-ai",
    name: "KT Knowledge AI",
    solves: "분산 지식을 검색 가능한 형태로 통합 (RAG 중심)",
    effect: "응대 품질·온보딩 시간 개선",
    timeline: "6–12주",
    phases: ["문서 정제", "인덱싱", "검증 루프"],
  },
  {
    id: "workflow-ai",
    name: "KT Workflow AI",
    solves: "반복 프로세스 자동화 및 시스템 간 오케스트레이션",
    effect: "처리 리드타임·오류율 감소",
    timeline: "6–14주",
    phases: ["프로세스 맵", "API 연동", "모니터링"],
  },
  {
    id: "document-ai",
    name: "KT Document AI",
    solves: "문서 분류·추출·요약·비교 자동화",
    effect: "심사·계약·행정 업무의 처리량 증가",
    timeline: "4–8주",
    phases: ["유형 정의", "추출 규칙", "HITL 검증"],
  },
  {
    id: "aicc-plus",
    name: "KT AICC Plus",
    solves: "고객센터 AI 상담·지식연동·품질관리 일체화",
    effect: "FCR·AHT·CSAT 개선",
    timeline: "8–16주",
    phases: ["시나리오 설계", "지식 연결", "품질 관측"],
  },
  {
    id: "vision-ax",
    name: "KT Vision AX",
    solves: "현장 영상·이미지 기반 검사·안전·품질 관리",
    effect: "불량 탐지·현장 리스크 감소",
    timeline: "8–20주",
    phases: ["데이터 확보", "모델 검증", "엣지 배포"],
  },
  {
    id: "data-insight",
    name: "KT Data Insight AI",
    solves: "데이터 파이프라인·분석·설명 가능한 인사이트",
    effect: "예측 정확도·운영 의사결정 개선",
    timeline: "10–20주",
    phases: ["데이터 거버넌스", "모델링", "대시보드"],
  },
];

const concernBoost: Partial<Record<ConcernLabel, string[]>> = {
  "고객 응대 혁신": ["aicc-plus", "knowledge-ai", "agent-studio"],
  "문서 처리": ["document-ai", "workflow-ai", "knowledge-ai"],
  "업무 자동화": ["workflow-ai", "agent-studio", "document-ai"],
  "AI Agent": ["agent-studio", "workflow-ai", "knowledge-ai"],
  "데이터 활용": ["data-insight", "knowledge-ai", "ax-consultant"],
  "품질 향상": ["vision-ax", "aicc-plus", "workflow-ai"],
  "비용 절감": ["workflow-ai", "document-ai", "ax-consultant"],
  "생산성 향상": ["agent-studio", "workflow-ai", "knowledge-ai"],
};

const industryBoost: Record<string, string[]> = {
  금융: ["document-ai", "aicc-plus", "data-insight", "knowledge-ai"],
  제조: ["vision-ax", "workflow-ai", "data-insight", "agent-studio"],
  유통: ["data-insight", "workflow-ai", "aicc-plus", "knowledge-ai"],
  의료: ["document-ai", "knowledge-ai", "workflow-ai", "data-insight"],
  물류: ["vision-ax", "workflow-ai", "data-insight", "agent-studio"],
  통신: ["aicc-plus", "data-insight", "agent-studio", "workflow-ai"],
  교육: ["knowledge-ai", "aicc-plus", "document-ai", "workflow-ai"],
  국방: ["knowledge-ai", "document-ai", "workflow-ai", "data-insight"],
  행정: ["document-ai", "workflow-ai", "knowledge-ai", "aicc-plus"],
  지자체: ["aicc-plus", "document-ai", "knowledge-ai", "workflow-ai"],
};

const taskBoost: Record<string, string[]> = {
  상담: ["aicc-plus", "knowledge-ai", "agent-studio"],
  문서심사: ["document-ai", "knowledge-ai", "workflow-ai"],
  품질검사: ["vision-ax", "workflow-ai", "data-insight"],
  민원처리: ["aicc-plus", "document-ai", "workflow-ai"],
};

function scoreAdjustments(input: {
  customerType: CustomerTypeLabel | null;
  axLevel: string | null;
  freeText: string;
}): Record<string, number> {
  const adj: Record<string, number> = {};
  const add = (id: string, n: number) => {
    adj[id] = (adj[id] ?? 0) + n;
  };
  const ft = input.freeText;

  if (input.customerType === "공공기관") {
    add("document-ai", 6);
    add("aicc-plus", 5);
    add("knowledge-ai", 4);
  }
  if (input.customerType === "스타트업") {
    add("agent-studio", 6);
    add("workflow-ai", 4);
  }
  if (input.customerType === "대기업" || input.customerType === "중견기업") {
    add("data-insight", 4);
    add("ax-consultant", 5);
  }

  const lv = input.axLevel ?? "";
  if (lv.includes("검토 전")) {
    add("ax-consultant", 12);
    add("document-ai", 3);
  }
  if (lv.includes("전사") || lv.includes("부서")) {
    add("agent-studio", 8);
    add("workflow-ai", 5);
    add("data-insight", 6);
  }
  if (lv.includes("일부")) {
    add("knowledge-ai", 4);
    add("workflow-ai", 4);
  }

  if (/보안|규제|감사|개인정보/i.test(ft)) {
    add("document-ai", 4);
    add("knowledge-ai", 3);
  }
  if (/레거시|연동|SAP|ERP/i.test(ft)) {
    add("workflow-ai", 6);
    add("ax-consultant", 4);
  }
  if (/콜센터|상담|민원|고객/i.test(ft)) {
    add("aicc-plus", 7);
  }
  if (/이미지|영상|불량|현장/i.test(ft)) {
    add("vision-ax", 8);
  }

  return adj;
}

function complexityFor(
  id: string,
  ctx: { axLevel: string | null; customerType: CustomerTypeLabel | null }
): "낮음" | "중간" | "높음" {
  const high = ["vision-ax", "data-insight", "aicc-plus"];
  const low = ["ax-consultant", "document-ai"];
  if (low.includes(id)) return ctx.axLevel?.includes("검토 전") ? "낮음" : "중간";
  if (high.includes(id)) return ctx.customerType === "스타트업" ? "중간" : "높음";
  return "중간";
}

function enrich(
  base: (typeof SOLUTIONS)[number],
  ctx: {
    industry: string | null;
    concerns: ConcernLabel[];
    priorityTask: string | null;
    customerType: CustomerTypeLabel | null;
    axLevel: string | null;
    rank: number;
    rawScore: number;
  }
): RecommendedSolution {
  const industry = ctx.industry ?? "귀사 산업";
  const concerns = ctx.concerns;
  const pt = ctx.priorityTask ?? "핵심 업무";

  const evidenceDrivers: string[] = [
    `${industry} 산업 프리셋과 솔루션 매핑 상위 일치`,
    concerns.length
      ? `관심 영역: ${concerns.slice(0, 3).join(", ")}`
      : "관심 영역: 일반 AX 도입 패턴",
    ctx.priorityTask ? `우선 워크스트림: ${ctx.priorityTask}` : "우선 워크스트림: 미세분화 전 단계",
    ctx.customerType ? `조직 유형 가중: ${ctx.customerType}` : "",
  ].filter(Boolean);

  const whyFit = `${base.name}은(는) ${industry}에서 ‘${pt}’를 중심으로 확장할 때 흔히 관측되는 병목(처리량·일관성·추적성)을 직접 겨냥합니다.`;

  const businessContext =
    ctx.customerType === "공공기관"
      ? "공공은 감사·로그·재현 가능한 판단 근거가 구매·확산의 게이트입니다. HITL과 문서 근거 축을 초기에 포함합니다."
      : ctx.customerType === "대기업" || ctx.customerType === "중견기업"
        ? "대규모 조직은 표준 템플릿·CoE·운영 KPI의 동시 설계가 비용을 좌우합니다."
        : "빠른 가치 입증과 제한된 운영 인력 사이에서 ‘좁은 범위·높은 신호’ 전략이 유효합니다.";

  const risks: string[] = [
    "데이터 품질·접근 권한 지연이 일정을 밀 수 있습니다.",
    "레거시 연동 범위가 커지면 회귀 테스트 비용이 증가합니다.",
  ];
  if (base.id === "agent-studio")
    risks.push("Agent 권한·감사 추적 설계 미흡 시 운영 리스크가 커질 수 있습니다.");
  if (base.id === "vision-ax")
    risks.push("현장 카메라 표준·라벨링 비용이 초기 투자를 좌우합니다.");

  const prerequisites: string[] = [
    "성공 지표·범위·RACI 합의",
    "대표 문서/티켓 샘플과 접근 정책",
  ];
  if (base.id === "aicc-plus" || base.id === "knowledge-ai")
    prerequisites.push("지식 소스의 최신성·보존 기간 정책");

  const kpiOutlook =
    base.id === "aicc-plus"
      ? "AHT −10~25%, FCR +5~15pt (채널·규모에 따라 편차)"
      : base.id === "document-ai"
        ? "문서 처리 리드타임 −20~40%, 재작업률 −10~25%"
        : base.id === "vision-ax"
          ? "불량 탐지 정밀도·현장 정지 시간 개선(라인별 상이)"
          : "운영 리드타임·오류율·직원 1인당 처리량 등 핵심 2~3지표에 집중";

  const similarPatterns =
    ctx.rank === 0
      ? "동급 산업에서 ‘첫 성공’을 문서·상담 축으로 고정한 뒤 Agent로 확장한 패턴과 유사합니다."
      : "부서 파일럿 후 워크플로 표준화 → 전사 확산 순의 사례군에 근접합니다.";

  const roiReasoning =
    "직접 비용 절감보다 ‘결함·지연·재작업’로 인한 숨은 비용을 먼저 제거하는 쪽이 초기 ROI 신호로 관측되기 쉽습니다. 이후 생산성·매출 관련 2차 효과를 분리해 측정합니다.";

  return {
    ...base,
    fitPercent: Math.min(96, Math.max(66, Math.round(ctx.rawScore))),
    whyFit,
    businessContext,
    evidenceDrivers,
    risks,
    prerequisites,
    kpiOutlook,
    deploymentComplexity: complexityFor(base.id, {
      axLevel: ctx.axLevel,
      customerType: ctx.customerType,
    }),
    similarPatterns,
    roiReasoning,
  };
}

export function buildRecommendations(input: {
  industry: string | null;
  concerns: ConcernLabel[];
  priorityTask: string | null;
  customerType: CustomerTypeLabel | null;
  axLevel: string | null;
  freeText: string;
}): RecommendedSolution[] {
  const scores = new Map<string, number>();
  for (const s of SOLUTIONS) scores.set(s.id, 52);

  const industry = input.industry ?? "";
  for (const id of industryBoost[industry] ?? []) {
    scores.set(id, (scores.get(id) ?? 0) + 14);
  }
  for (const c of input.concerns) {
    for (const id of concernBoost[c] ?? []) {
      scores.set(id, (scores.get(id) ?? 0) + 9);
    }
  }
  const pt = input.priorityTask ?? "";
  for (const [key, ids] of Object.entries(taskBoost)) {
    if (pt.includes(key)) {
      for (const id of ids) scores.set(id, (scores.get(id) ?? 0) + 10);
    }
  }

  const extra = scoreAdjustments({
    customerType: input.customerType,
    axLevel: input.axLevel,
    freeText: input.freeText,
  });
  for (const [id, n] of Object.entries(extra)) {
    scores.set(id, (scores.get(id) ?? 0) + n);
  }

  const ranked = [...scores.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  return ranked.map(([id, raw], rank) => {
    const base = SOLUTIONS.find((s) => s.id === id)!;
    return enrich(base, {
      industry: input.industry,
      concerns: input.concerns,
      priorityTask: input.priorityTask,
      customerType: input.customerType,
      axLevel: input.axLevel,
      rank,
      rawScore: raw,
    });
  });
}

export function roadmapPhases(input: {
  axLevel: string | null;
  industry: string | null;
}) {
  const level = input.axLevel ?? "";
  const widen = level.includes("전사") || level.includes("부서");
  return [
    {
      title: "Discovery & 과제 정렬",
      weeks: "2–4주",
      detail:
        "현업 인터뷰·데이터 가능성·규제 체크로 ‘첫 성공’ 범위를 고정합니다.",
    },
    {
      title: widen ? "파일럿 확장" : "파일럿 검증",
      weeks: widen ? "6–12주" : "4–8주",
      detail:
        "작은 범위에서 품질 지표(AHT, 처리량, 오류율 등)를 계약 가능 수준까지 끌어올립니다.",
    },
    {
      title: "운영 표준화",
      weeks: "4–10주",
      detail:
        "가드레일·모니터링·변경관리 프로세스를 넣어 재현 가능한 운영 체계를 만듭니다.",
    },
    {
      title: "확산·Agent 고도화",
      weeks: "지속",
      detail:
        `${input.industry ?? "조직"} 맥락에 맞춰 업무 단위 Agent와 워크플로를 단계적으로 확장합니다.`,
    },
  ];
}
