import PortalMonoIcon, { type PortalGlyph } from "@/components/icons/PortalMonoIcon";
import { portalPanelTone } from "@/data/portalVisual";

/** 상세 본문 위 단색 글리프 배너 (제목과 중복되지 않도록 아이콘만) */
export default function DetailGlyphBanner({
  glyph,
  className = "",
}: {
  glyph: PortalGlyph;
  className?: string;
}) {
  const tone = portalPanelTone[glyph];

  return (
    <div
      className={`mb-10 flex justify-center rounded-3xl border ${tone.border} bg-gradient-to-br ${tone.heroBg} px-6 py-8 shadow-inner ${className}`}
    >
      <div className={`flex h-24 w-24 items-center justify-center rounded-2xl border border-white/70 bg-white/90 ${tone.icon}`}>
        <PortalMonoIcon glyph={glyph} className="h-16 w-20" />
      </div>
    </div>
  );
}
