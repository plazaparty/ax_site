import Link from "next/link";
import SitePageHero from "@/components/SitePageHero";
import { portalPanelTone } from "@/data/portalVisual";

export default function DemoExperience({
  eyebrow,
  title,
  problem,
  experienceHint,
  industries,
  effects,
  useCaseHref,
  useCaseLabel,
}: {
  eyebrow: string;
  title: string;
  problem: string;
  experienceHint: string;
  industries: string[];
  effects: string[];
  useCaseHref: string;
  useCaseLabel: string;
}) {
  const { pageBg } = portalPanelTone.play;

  return (
    <div className={`${pageBg} pb-28 pt-10 md:pb-16`}>
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <SitePageHero
          glyph="play"
          eyebrow={eyebrow}
          title={title}
          description={problem}
        />

        <section className="mt-10 space-y-10">
          <div className="rounded-3xl border border-gray-900 bg-gradient-to-br from-gray-900 to-slate-950 p-6 text-white shadow-xl">
            <h2 className="text-sm font-semibold">데모 체험</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              {experienceHint}
            </p>
            <button
              type="button"
              className="mt-6 w-full rounded-2xl bg-red-500 py-4 text-sm font-semibold text-white shadow-lg shadow-red-900/30 hover:bg-red-600 sm:w-auto sm:px-8"
            >
              체험 시작 (샘플)
            </button>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">적용 산업</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {industries.map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">기대 효과</h2>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {effects.map((e) => (
                <li key={e}>· {e}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_16px_48px_-28px_rgba(15,23,42,0.12)]">
            <h2 className="text-lg font-semibold text-gray-900">관련 Use Case</h2>
            <Link
              href={useCaseHref}
              className="mt-4 inline-flex text-sm font-semibold text-red-600 hover:text-red-700"
            >
              {useCaseLabel} →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
