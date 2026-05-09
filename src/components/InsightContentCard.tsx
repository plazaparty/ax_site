import Link from "next/link";
import InsightMonoIcon, {
  type InsightVisualSlug,
} from "@/components/icons/InsightMonoIcon";
import { insightPanelTone } from "@/data/insightVisual";

export default function InsightContentCard({
  href,
  title,
  description,
  visual,
  showIcon = true,
}: {
  href: string;
  title: string;
  description: string;
  visual: InsightVisualSlug;
  showIcon?: boolean;
}) {
  const tonePalette = showIcon ? insightPanelTone[visual] : null;

  return (
    <Link
      href={href}
      className="group flex gap-4 rounded-3xl border border-gray-100/90 bg-white/90 p-5 shadow-[0_16px_48px_-28px_rgba(15,23,42,0.18)] backdrop-blur-sm transition-all hover:border-red-200/70 hover:shadow-[0_20px_56px_-24px_rgba(15,23,42,0.22)]"
    >
      {tonePalette ? (
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${tonePalette.cardIconBg} ${tonePalette.icon}`}
        >
          <InsightMonoIcon type={visual} className="h-8 w-10" />
        </div>
      ) : null}
      <div className="min-w-0 flex-1">
        <p className="text-lg font-semibold tracking-tight text-gray-900 group-hover:text-red-700">
          {title}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
      </div>
    </Link>
  );
}
