import { useConsultingWizardStore } from "@/store/consultingWizardStore";

const SUBJECT_BASE = "KT%20AX%20%EC%83%81%EB%8B%B4%20%EC%9A%94%EC%B2%AD";

export function buildConsultMailto(lines: string[]): string {
  const body = encodeURIComponent(lines.filter(Boolean).join("\n"));
  return `mailto:ax-sales@kt.com?subject=${SUBJECT_BASE}&body=${body}`;
}

/** Zustand 스토어 기준 — 같은 탭에서 진단 후 CTA 시 컨텍스트 전달 */
export function summarizeConsultingSession(): string[] {
  const st = useConsultingWizardStore.getState();
  const lines = ["[AX Discovery 세션 요약]"];
  if (st.customerType) lines.push(`조직: ${st.customerType}`);
  if (st.industry) lines.push(`산업: ${st.industry}`);
  if (st.axLevel) lines.push(`AX 성숙도: ${st.axLevel}`);
  if (st.priorityTask) lines.push(`우선 과제: ${st.priorityTask}`);
  if (st.concerns?.length) lines.push(`관심: ${st.concerns.join(", ")}`);
  if (st.recommendations.length) {
    lines.push(
      `추천 Top3: ${st.recommendations
        .slice(0, 3)
        .map((r) => r.name)
        .join(" · ")}`
    );
  }
  return lines.length > 1 ? lines : [];
}
