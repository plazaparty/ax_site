/** 홈 화면 예시 프롬프트 클릭 시 바로 노출할 리포트용 답변 프리셋 */
export type PresetAnswers = {
  industry: string;
  size: string;
  maturity: string;
  needs: string[];
  horizon: string;
};

export const HOME_PROMPT_PRESETS: { prompt: string; answers: PresetAnswers }[] = [
  {
    prompt: "금융 대기업의 고객센터를 AX 해줘",
    answers: {
      industry: "finance",
      size: "large",
      maturity: "scaling",
      needs: ["cx", "speed"],
      horizon: "short",
    },
  },
  {
    prompt: "제조 현장 품질검사를 AI로 자동화하고 싶어",
    answers: {
      industry: "manufacturing",
      size: "mid",
      maturity: "piloting",
      needs: ["quality", "speed"],
      horizon: "mid_term",
    },
  },
  {
    prompt: "공공 민원 응대를 근거 기반으로 바꾸고 싶어",
    answers: {
      industry: "public",
      size: "enterprise",
      maturity: "exploring",
      needs: ["data", "cx"],
      horizon: "long",
    },
  },
  {
    prompt: "AX 시작 단계에서 우선순위를 정리해 줘",
    answers: {
      industry: "services",
      size: "smb",
      maturity: "exploring",
      needs: ["data"],
      horizon: "quick_win",
    },
  },
  {
    prompt: "유통·물류 비용을 AI로 줄이고 매출을 늘리고 싶어",
    answers: {
      industry: "retail",
      size: "large",
      maturity: "scaling",
      needs: ["cost", "data"],
      horizon: "mid_term",
    },
  },
];
