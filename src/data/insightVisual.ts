import type { InsightVisualSlug } from "@/components/icons/InsightMonoIcon";

export const insightPanelTone: Record<
  InsightVisualSlug,
  {
    border: string;
    heroBg: string;
    icon: string;
    cardIconBg: string;
    pageBg: string;
  }
> = {
  hub: {
    border: "border-slate-200/90",
    heroBg: "from-slate-100/90 via-white to-slate-50/80",
    icon: "text-slate-800",
    cardIconBg: "bg-slate-100/90",
    pageBg: "bg-gray-50",
  },
  trends: {
    border: "border-violet-200/80",
    heroBg: "from-violet-100/70 via-white to-violet-50/50",
    icon: "text-violet-950",
    cardIconBg: "bg-violet-100/80",
    pageBg: "bg-gradient-to-b from-violet-50/50 to-white",
  },
  tech: {
    border: "border-sky-200/80",
    heroBg: "from-sky-100/70 via-white to-sky-50/40",
    icon: "text-sky-950",
    cardIconBg: "bg-sky-100/80",
    pageBg: "bg-gradient-to-b from-sky-50/45 to-white",
  },
  news: {
    border: "border-amber-200/80",
    heroBg: "from-amber-100/60 via-white to-amber-50/45",
    icon: "text-amber-950",
    cardIconBg: "bg-amber-100/80",
    pageBg: "bg-gradient-to-b from-amber-50/40 to-white",
  },
  events: {
    border: "border-orange-200/80",
    heroBg: "from-orange-100/65 via-white to-orange-50/45",
    icon: "text-orange-950",
    cardIconBg: "bg-orange-100/80",
    pageBg: "bg-gradient-to-b from-orange-50/40 to-white",
  },
  reports: {
    border: "border-emerald-200/80",
    heroBg: "from-emerald-100/65 via-white to-emerald-50/40",
    icon: "text-emerald-950",
    cardIconBg: "bg-emerald-100/80",
    pageBg: "bg-gradient-to-b from-emerald-50/40 to-white",
  },
  webinars: {
    border: "border-rose-200/80",
    heroBg: "from-rose-100/60 via-white to-rose-50/40",
    icon: "text-rose-950",
    cardIconBg: "bg-rose-100/80",
    pageBg: "bg-gradient-to-b from-rose-50/40 to-white",
  },
};
