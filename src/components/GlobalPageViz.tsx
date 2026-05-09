"use client";

import { usePathname } from "next/navigation";
import QualitativeImpactBars from "@/components/ax-viz/QualitativeImpactBars";
import { getPageVizConfig } from "@/data/pageVizConfig";

export default function GlobalPageViz() {
  const pathname = usePathname();
  const cfg = getPageVizConfig(pathname);
  if (!cfg) return null;

  return (
    <div className="border-t border-gray-100 bg-gray-50/80">
      <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-12">
        <QualitativeImpactBars
          title={cfg.title}
          subtitle={cfg.subtitle}
          items={cfg.items}
          tone={cfg.tone}
          salt={pathname}
        />
      </div>
    </div>
  );
}
