import type { IndustryVisualSlug } from "@/components/icons/IndustryMonoIcon";

export function slugToIndustryVisual(slug: string): IndustryVisualSlug {
  if (slug === "defense") return "telecom";
  if (slug === "safety") return "manufacturing";
  if (slug === "services") return "retail";
  const s = slug as IndustryVisualSlug;
  if (
    s === "public" ||
    s === "finance" ||
    s === "manufacturing" ||
    s === "retail" ||
    s === "healthcare" ||
    s === "telecom"
  ) {
    return s;
  }
  return "public";
}

export const industryPanelTone: Record<
  IndustryVisualSlug,
  { border: string; bg: string; icon: string }
> = {
  public: {
    border: "border-slate-300",
    bg: "from-slate-100 to-slate-50",
    icon: "text-slate-800",
  },
  finance: {
    border: "border-blue-200",
    bg: "from-blue-50 to-slate-50",
    icon: "text-blue-950",
  },
  manufacturing: {
    border: "border-amber-200",
    bg: "from-amber-50 to-stone-50",
    icon: "text-amber-950",
  },
  retail: {
    border: "border-orange-200",
    bg: "from-orange-50 to-neutral-50",
    icon: "text-orange-950",
  },
  healthcare: {
    border: "border-teal-200",
    bg: "from-teal-50 to-white",
    icon: "text-teal-950",
  },
  telecom: {
    border: "border-indigo-200",
    bg: "from-indigo-50 to-slate-50",
    icon: "text-indigo-950",
  },
};
