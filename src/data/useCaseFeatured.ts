/** 홈·허브에서 공통 순서로 노출되는 성공 사례 카드 */
import { successStories } from "./useCaseStories";
import { USE_CASE_SUCCESS_SLUG_ORDER } from "./useCaseLibraryOrder";

export const featuredUseCases = USE_CASE_SUCCESS_SLUG_ORDER.map((slug) => {
  const st = successStories[slug];
  return {
    title: st.title,
    metric: st.metrics.map((m) => `${m.label} ${m.value}`).join(" · "),
    href: `/use-case/success/${slug}`,
  };
});
