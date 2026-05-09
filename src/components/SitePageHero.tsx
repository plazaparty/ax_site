import PortalMonoIcon, { type PortalGlyph } from "@/components/icons/PortalMonoIcon";
import { portalPanelTone } from "@/data/portalVisual";

export default function SitePageHero({
  glyph,
  eyebrow,
  title,
  description,
  className = "",
}: {
  glyph: PortalGlyph;
  eyebrow?: string;
  title: string;
  description: string;
  className?: string;
}) {
  const tone = portalPanelTone[glyph];

  return (
    <div
      className={`overflow-hidden rounded-3xl border ${tone.border} bg-gradient-to-br ${tone.heroBg} p-6 shadow-[0_20px_70px_-36px_rgba(15,23,42,0.18)] md:p-8 ${className}`}
    >
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-10">
        <div
          className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-white/70 bg-white/90 shadow-inner backdrop-blur-sm md:h-28 md:w-28 ${tone.icon}`}
        >
          <PortalMonoIcon glyph={glyph} className="h-[3.75rem] w-[4.75rem] md:h-20 md:w-24" />
        </div>
        <div className="min-w-0 flex-1 text-center md:text-left">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-wider text-red-600">
              {eyebrow}
            </p>
          ) : null}
          <h1
            className={`text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl ${eyebrow ? "mt-2" : ""}`}
          >
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
