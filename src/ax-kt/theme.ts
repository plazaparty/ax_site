import type { CSSProperties } from "react";

/** AX.KT 프로토타입 — 화이트 톤 · 모바일 우선 쉘 */
export const G = {
  bg: "#FAFAFA",
  surface: "#FFFFFF",
  card: "#FFFFFF",
  border: "#E5E7EB",
  borderBright: "#D1D5DB",
  text: "#111827",
  textSub: "#6B7280",
  textDim: "#9CA3AF",
  accent: "#E8002D",
  green: "#059669",
  orange: "#EA580C",
  purple: "#7C3AED",
  kt: "#E8002D",
  accentSoft: "rgba(232,0,45,0.06)",
  accentGlow: "rgba(232,0,45,0.12)",
} as const;

export const shell = {
  narrow: "min(100%, 42rem)",
  wide: "min(100%, 56rem)",
  pad: "1rem 1.25rem",
  padMd: "1.5rem 2rem",
} as const;

/** 모노톤 그리드 + 은은한 그라데이션 */
export const monoPanelStyle: CSSProperties = {
  backgroundColor: "#FAFAFA",
  backgroundImage: `
    linear-gradient(180deg, rgba(255,255,255,0.97) 0%, rgba(244,244,245,0.92) 100%),
    radial-gradient(circle at 1px 1px, rgba(17,24,39,0.045) 1px, transparent 0)
  `,
  backgroundSize: "100% 100%, 22px 22px",
};

export const monoBannerStyle: CSSProperties = {
  backgroundColor: "#F4F4F5",
  backgroundImage: `
    linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(228,228,231,0.35) 100%),
    radial-gradient(ellipse 80% 60% at 100% 0%, rgba(17,24,39,0.04), transparent),
    radial-gradient(circle at 1px 1px, rgba(17,24,39,0.035) 1px, transparent 0)
  `,
  backgroundSize: "100% 100%, 100% 100%, 20px 20px",
};

/** 홈 AI Consultant 영역 — 예시 프롬프트 상단 라벨 (영문) */
export const SAMPLE_PROMPTS_HEADING = "Sample prompts";

/** 홈 AI Consultant — 5단계 진단 안내 */
export const CONSULTANT_FLOW_STEPS = [
  { step: 1, title: "산업군 선택", hint: "산업 특화", icon: "🏭" },
  { step: 2, title: "기업규모", hint: "규모 맞춤", icon: "🏢" },
  { step: 3, title: "AI 성숙도", hint: "성숙 진단", icon: "📊" },
  { step: 4, title: "경영과제", hint: "과제 정렬", icon: "🎯" },
  { step: 5, title: "성과 예측", hint: "ROI 시뮬", icon: "📈" },
] as const;

export const CONSULTANT_PROMPT_EXAMPLES = [
  {
    prompt: "금융 대기업의 고객센터를 AX 해줘",
    output: "KT AICC Plus + Knowledge AI · AHT·FCR·CSAT 로드맵",
  },
  {
    prompt: "제조 현장 품질검사를 AI로 자동화하고 싶어",
    output: "KT Vision AX + Workflow AI · 불량 탐지·예지보전",
  },
  {
    prompt: "공공 민원 응대를 근거 기반으로 바꾸고 싶어",
    output: "AICC Plus + Document AI · 민원 리드타임·감사 추적",
  },
  {
    prompt: "AX 시작 단계에서 우선순위를 정리해 줘",
    output: "KT AX Consultant · 4–10주 파일럿 범위 제안",
  },
] as const;
