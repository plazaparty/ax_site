import Link from "next/link";
import InsightMonoIcon, {
  type InsightVisualSlug,
} from "@/components/icons/InsightMonoIcon";
import { insightPanelTone } from "@/data/insightVisual";

export default function InsightChannelCard({
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
  const tone = insightPanelTone[visual];

  return (
    <Link
      href={href}
      className={`group flex gap-4 rounded-3xl border ${tone.border} bg-gradient-to-br ${tone.heroBg} p-5 shadow-sm transition-all hover:border-red-200/90 hover:shadow-md`}
    >
      {showIcon ? (
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/60 bg-white/90 shadow-inner ${tone.icon}`}
        >
          <InsightMonoIcon type={visual} className="h-10 w-12" />
        </div>
      ) : null}
      <div className="min-w-0 flex-1">
        <p className="text-lg font-semibold tracking-tight text-gray-900 group-hover:text-red-700">
          {title}
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{description}</p>
        <span className="mt-3 inline-block text-xs font-semibold uppercase tracking-wider text-red-600 opacity-90 group-hover:opacity-100">
          둘러보기 →
        </span>
      </div>
    </Link>
  );
}
