import Link from "next/link";
import ServiceMonoIcon from "@/components/icons/ServiceMonoIcon";
import type { PillarPageModel } from "@/data/solutionPillars";
import type { SolutionPillarSlug } from "@/data/solutionPillars";
import { solutionSlugToIcon } from "@/data/solutionIcons";
import { portalPanelTone } from "@/data/portalVisual";

const pillarTone: Record<
  SolutionPillarSlug,
  { border: string; heroBg: string; chip: string }
> = {
  "ax-readiness": {
    border: "border-emerald-200",
    heroBg: "from-emerald-50 to-white",
    chip: "text-emerald-800",
  },
  ai: {
    border: "border-red-200",
    heroBg: "from-red-50 to-white",
    chip: "text-red-800",
  },
  cloud: {
    border: "border-sky-200",
    heroBg: "from-sky-50 to-white",
    chip: "text-sky-900",
  },
  data: {
    border: "border-amber-200",
    heroBg: "from-amber-50 to-white",
    chip: "text-amber-900",
  },
};

export default function SolutionPillarPageView({
  slug,
  model,
}: {
  slug: SolutionPillarSlug;
  model: PillarPageModel;
}) {
  const tone = pillarTone[slug];
  const cube = portalPanelTone.cube;

  return (
    <div className={`bg-gradient-to-b ${tone.heroBg} to-white pb-28 pt-10 md:pb-16`}>
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div
          className={`mb-10 flex h-24 w-full items-center justify-center rounded-3xl border ${cube.border} bg-gradient-to-br ${cube.heroBg} text-slate-900 shadow-inner`}
        >
          <ServiceMonoIcon type={solutionSlugToIcon(slug)} className="h-14 w-20" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-wider text-red-600">AX Transformation · 4-Pillar</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">{model.title}</h1>
        <p className="mt-1 text-sm font-medium text-gray-500">{model.kicker}</p>
        <p className="mt-6 text-base leading-relaxed text-gray-700">{model.intro}</p>
        <p className={`mt-4 rounded-xl border ${tone.border} bg-white/80 px-4 py-3 text-sm font-medium leading-relaxed text-gray-800`}>
          {model.frameworkLine}
        </p>

        <div className="mt-10 flex flex-wrap gap-2 text-xs">
          <Link
            href="/ax-explore#ax-explore-axis-solution"
            className="rounded-full border border-gray-200 bg-white px-3 py-1.5 font-semibold text-gray-700 hover:border-red-200 hover:text-red-800"
          >
            ← 4대 축 맵으로
          </Link>
        </div>

        <section className="mt-12 space-y-10">
          {model.sections.map((sec) => (
            <article
              key={sec.id}
              id={sec.id}
              className={`scroll-mt-28 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm ${tone.border}`}
            >
              <h2 className="text-lg font-semibold text-gray-900">{sec.title}</h2>
              {sec.lead ? <p className="mt-3 text-sm font-medium text-gray-700">{sec.lead}</p> : null}
              <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-gray-600">
                {sec.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className={`shrink-0 font-semibold ${tone.chip}`}>·</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
