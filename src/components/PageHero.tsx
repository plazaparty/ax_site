import SitePageHero from "@/components/SitePageHero";
import type { PortalGlyph } from "@/components/icons/PortalMonoIcon";
import { portalPanelTone } from "@/data/portalVisual";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  glyph?: PortalGlyph;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  glyph = "spark",
}: PageHeroProps) {
  const { pageBg } = portalPanelTone[glyph];

  return (
    <section className={`border-b border-gray-100/90 ${pageBg}`}>
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <SitePageHero
          glyph={glyph}
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
      </div>
    </section>
  );
}
