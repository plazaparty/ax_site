import InsightMonoIcon, {
  type InsightVisualSlug,
} from "@/components/icons/InsightMonoIcon";
import { insightPanelTone } from "@/data/insightVisual";

export default function InsightsPageHero({
  visual,
  label,
  title,
  description,
  layout = "hero",
}: {
  visual: InsightVisualSlug;
  label: string;
  title: string;
  description?: string;
  /** simple: 큰 비주얼 없이 텍스트만 (인사이트 하위 등) */
  layout?: "hero" | "simple";
}) {
  const tone = insightPanelTone[visual];

  if (layout === "simple") {
    return (
      <header className="border-b border-gray-200 pb-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-red-600">{label}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">{title}</h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">{description}</p>
        ) : null}
      </header>
    );
  }

  return (
    <div
      className={`mb-10 overflow-hidden rounded-3xl border ${tone.border} bg-gradient-to-br ${tone.heroBg} p-6 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.2)] md:p-8`}
    >
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-10">
        <div
          className={`flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl border border-white/70 bg-white/85 shadow-inner backdrop-blur-sm md:h-36 md:w-36 ${tone.icon}`}
        >
          <InsightMonoIcon type={visual} className="h-[4.5rem] w-[5.5rem] md:h-24 md:w-28" />
        </div>
        <div className="min-w-0 flex-1 text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-red-600">
            {label}
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
