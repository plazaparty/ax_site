import type {
  ConcernLabel,
  CustomerTypeLabel,
} from "@/store/consultingWizardStore";
import { AX_LEVELS } from "@/store/consultingWizardStore";

export type WizardStepNum = 1 | 2 | 3 | 4 | 5 | 6;

/** 단계별 — 왜 이 질문을 하는지 */
export const STEP_WHY: Record<WizardStepNum, { headline: string; body: string }> = {
  1: {
    headline: "조직 컨텍스트를 먼저 고정합니다",
    body: "규모·거버넌스·예산 사이클이 다르면 동일한 ‘AX 성숙도’라도 해석이 달라집니다. 이후 추천 엔진이 공공·민간 시나리오를 분기합니다.",
  },
  2: {
    headline: "산업별 규제·데이터·고객 접점을 반영합니다",
    body: "산업은 솔루션 포트폴리오 매핑과 리스크 가정(개인정보, 감사, SLA)의 기준이 됩니다. 여기서의 선택이 ‘유사 배포 패턴’ 비교의 축이 됩니다.",
  },
  3: {
    headline: "AX 성숙도는 로드맵 속도와 선행 과제를 결정합니다",
    body: "초기 단계에서는 검증·거버넌스 설계 비중이 높고, 전사 확산 단계에서는 운영·변경관리·Agent 표준화가 중심이 됩니다.",
  },
  4: {
    headline: "경영·현업이 동시에 체감하는 ‘압력 축’을 수집합니다",
    body: "복수 선택은 우선순위 가중치로 들어가며, ROI 가설과 PoC 범위 후보를 좁히는 데 쓰입니다.",
  },
  5: {
    headline: "첫 실행 단위(워크스트림)를 확정합니다",
    body: "산업 내 대표 과제 중에서도 ‘첫 성공’을 만들 업무를 고르면, 이후 확장 시나리오와 의존 리소스를 구체화할 수 있습니다.",
  },
  6: {
    headline: "정성 맥락을 보강합니다",
    body: "레거시, 보안 등급, 조직 정치, 일정 제약은 점수로 잡히기 어렵습니다. 전략 컨설턴트가 읽을 수 있는 메모로 남겨 두면 제안 품질이 올라갑니다.",
  },
};

export const ANALYSIS_TRANSITIONS = [
  "AX 성숙도 신호를 정규화하는 중…",
  "동종 산업·유사 규모의 배포 패턴과 비교하는 중…",
  "고ROI 실행 레버와 제약(규제·데이터)을 교차 검증하는 중…",
  "솔루션 포트폴리오에 매핑하고 근거 체인을 구성하는 중…",
] as const;

export function insightAfterStep1(type: CustomerTypeLabel): string {
  const map: Partial<Record<CustomerTypeLabel, string>> = {
    공공기관:
      "공공은 승인·보안·감사 로그가 제품 선택을 좁힙니다. 이후 단계에서 문서·민원·지식 검색 축을 기본 전제로 둡니다.",
    대기업:
      "대규모 조직은 CoE·데이터 거버넌스·변경관리가 병목인 경우가 많습니다. ‘전사 확산’ 시나리오를 염두에 둡니다.",
    중견기업:
      "중견은 파일럿→부서 확산 속도가 빠른 편입니다. 표준 템플릿과 외주/파트너 혼합 모델을 가정합니다.",
    중소기업:
      "중소는 리드타임과 TCO에 민감합니다. 표준 SaaS형 접근과 최소 커스터마이징을 우선합니다.",
    스타트업:
      "스타트업은 실험 속도는 높지만 운영 내성이 변수입니다. 가드레일·관측성을 초기에 포함하는 방향을 고려합니다.",
  };
  return map[type] ?? "조직 규모에 맞춰 이후 추천 가중치를 조정합니다.";
}

export function insightAfterStep2(
  industry: string,
  isPublic: boolean
): string {
  if (isPublic) {
    return `${industry} 계열은 문서·민원·지식 축의 재현성이 핵심입니다. 외부 규제 변화에 대한 추적 가능성을 가정합니다.`;
  }
  return `${industry} 산업군에서의 대표 Pain(비용·품질·고객 경험)을 기준 패턴 라이브러리와 대조합니다.`;
}

export function insightAfterStep3(level: (typeof AX_LEVELS)[number]): string {
  if (level.includes("검토 전"))
    return "초기 단계로 보입니다. ‘가치 검증 + 거버넌스 설계’가 동시에 필요한 전형 구간입니다.";
  if (level.includes("일부"))
    return "부분 적용 단계입니다. 표준화·품질 지표·재현 가능한 운영이 다음 병목일 확률이 높습니다.";
  if (level.includes("부서"))
    return "부서 단위 활용입니다. 데이터·프롬프트·권한 모델을 전사로 끌어올리는 확장 시나리오를 준비합니다.";
  if (level.includes("전사"))
    return "전사 확산 단계입니다. Agent·워크플로·관측성·FinOps 관점에서 고도화 레버를 찾습니다.";
  return "성숙도 불명 시 보수적으로 ‘검증 우선’ 로드맵을 기본값으로 둡니다.";
}

export function insightAfterStep4(concerns: ConcernLabel[]): string {
  if (concerns.length === 0) return "";
  const top = concerns.slice(0, 3).join(" · ");
  return `선택하신 압력 축: ${top}. 이 조합은 솔루션 스택과 PoC 범위 가중치에 직접 반영됩니다.`;
}

export function insightAfterStep5(
  industry: string | null,
  task: string | null
): string {
  if (!industry || !task) return "";
  return `${industry} 영역에서 ‘${task}’를 첫 워크스트림으로 볼 때, 데이터 접근·HITL·SLA 정의가 성공의 분기점입니다.`;
}

export interface MaturityDiagnosis {
  stageIndex: 1 | 2 | 3 | 4 | 5;
  stageLabel: string;
  organizationalReadiness: string;
  transformationGap: string;
  nextStageRoadmap: string[];
}

export function buildMaturityDiagnosis(input: {
  axLevel: string | null;
  industry: string | null;
  customerType: CustomerTypeLabel | null;
}): MaturityDiagnosis {
  const lv = input.axLevel ?? "";
  let stageIndex: 1 | 2 | 3 | 4 | 5 = 2;
  let stageLabel = "탐색·실험";
  if (lv.includes("검토 전")) {
    stageIndex = 1;
    stageLabel = "인지·탐색";
  } else if (lv.includes("일부")) {
    stageIndex = 2;
    stageLabel = "부분 도입";
  } else if (lv.includes("부서")) {
    stageIndex = 3;
    stageLabel = "부서 표준화";
  } else if (lv.includes("전사")) {
    stageIndex = 4;
    stageLabel = "전사 확산";
  } else if (lv.includes("모르")) {
    stageIndex = 2;
    stageLabel = "진단 필요 (가정: 중간)";
  }

  const org =
    input.customerType === "공공기관"
      ? "승인·보안·감사 추적 가능한 운영 체계 확보가 선행 과제로 보입니다."
      : input.customerType === "대기업" || input.customerType === "중견기업"
        ? "CoE·데이터 거버넌스·변경관리 프로세스가 실행 속도를 좌우합니다."
        : "빠른 파일럿과 제한된 운영 인력 사이의 균형이 핵심 변수입니다.";

  const gap =
    stageIndex <= 2
      ? "‘측정 가능한 첫 성공’과 운영 가드레일이 동시에 부족할 위험이 큽니다."
      : stageIndex === 3
        ? "부서 간 표준·품질·재현성 격차가 확산 단계에서 비용으로 전환될 수 있습니다."
        : "확산 이후에는 FinOps·관측성·모델 회귀 비용이 누적됩니다.";

  const next =
    stageIndex <= 2
      ? [
          "과제 범위·성공 지표·데이터 접근 권한을 2주 내 합의",
          "파일럿에서 HITL·감사 로그 포함",
          "확장 시 표준 템플릿·평가 루프 동반",
        ]
      : stageIndex === 3
        ? [
            "업무 단위 표준 패키지화(프롬프트·툴·권한)",
            "품질 대시보드와 운영 RACI 정리",
            "전사 로드맵 분기(Agent vs 워크플로)",
          ]
        : [
            "관측성·비용·회귀 테스트를 운영 KPI에 편입",
            "Agent 카탈로그와 승인 워크플로 정비",
            "데이터·모델 거버넌스 주기화",
          ];

  if (input.industry) {
    next.push(`${input.industry} 규제/데이터 제약을 분기별 점검 항목에 포함`);
  }

  return {
    stageIndex,
    stageLabel,
    organizationalReadiness: org,
    transformationGap: gap,
    nextStageRoadmap: next,
  };
}

export interface PocReadiness {
  score: number;
  headline: string;
  enablers: string[];
  blockers: string[];
}

export function buildPocReadiness(input: {
  axLevel: string | null;
  concerns: ConcernLabel[];
  freeText: string;
}): PocReadiness {
  let score = 58;
  const lv = input.axLevel ?? "";
  if (lv.includes("일부")) score += 8;
  if (lv.includes("부서")) score += 12;
  if (lv.includes("전사")) score += 18;
  if (lv.includes("검토 전")) score -= 6;
  if (input.concerns.includes("데이터 활용")) score += 5;
  if (input.concerns.includes("AI Agent")) score += 4;
  const ft = input.freeText.toLowerCase();
  if (ft.includes("데이터") || ft.includes("보안") || ft.includes("규제")) score += 4;
  if (ft.includes("레거시") || ft.includes("연동")) score -= 5;
  score = Math.min(92, Math.max(38, score));

  const enablers: string[] = [];
  const blockers: string[] = [];
  if (input.concerns.length >= 2)
    enablers.push("명확한 우선순위 신호(복수 관심 영역)");
  if (lv.includes("부서") || lv.includes("전사"))
    enablers.push("운영 경험·내부 데이터 접근 가능성");
  else blockers.push("운영·데이터 접근 경로가 아직 불명확할 수 있음");
  if (ft.includes("보안") || ft.includes("규제"))
    enablers.push("규제 요구가 초기 설계에 반영될 여지");
  if (ft.length < 4) blockers.push("정성 제약 정보 부족 — 브리핑에서 보완 권장");

  return {
    score,
    headline:
      score >= 72
        ? "4–8주 내 제한적 PoC 착수 가능성이 높습니다."
        : score >= 55
          ? "준비 후 PoC 착수가 현실적입니다(데이터·승인 정리 필요)."
          : "진단·데이터 정비 선행 시 PoC 리스크를 낮출 수 있습니다.",
    enablers,
    blockers,
  };
}

export function executiveSummaryLines(input: {
  customerType: CustomerTypeLabel | null;
  industry: string | null;
  axLevel: string | null;
  concerns: ConcernLabel[];
  priorityTask: string | null;
}): string[] {
  const lines: string[] = [];
  lines.push(
    `조직: ${input.customerType ?? "미지정"} · 산업: ${input.industry ?? "미지정"} · AX 성숙도: ${input.axLevel ?? "미지정"}`
  );
  if (input.concerns.length)
    lines.push(`핵심 압력 축: ${input.concerns.slice(0, 4).join(", ")}`);
  if (input.priorityTask)
    lines.push(`우선 워크스트림(가정): ${input.priorityTask}`);
  lines.push(
    "아래 추천 스택은 동종 배포 패턴·규제 프리셋·내부 포트폴리오 매핑을 결합한 설명 가능한 스코어링 결과입니다."
  );
  return lines;
}
