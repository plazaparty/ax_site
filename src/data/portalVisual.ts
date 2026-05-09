import type { PortalGlyph } from "@/components/icons/PortalMonoIcon";

export const portalPanelTone: Record<
  PortalGlyph,
  { border: string; heroBg: string; icon: string; pageBg: string }
> = {
  spark: {
    border: "border-slate-200/90",
    heroBg: "from-slate-100/90 via-white to-slate-50/70",
    icon: "text-slate-800",
    pageBg: "bg-gradient-to-b from-slate-50/80 to-white",
  },
  stack: {
    border: "border-indigo-200/85",
    heroBg: "from-indigo-100/65 via-white to-violet-50/50",
    icon: "text-indigo-950",
    pageBg: "bg-gradient-to-b from-indigo-50/45 to-white",
  },
  building: {
    border: "border-blue-200/85",
    heroBg: "from-blue-100/60 via-white to-slate-50/50",
    icon: "text-blue-950",
    pageBg: "bg-gradient-to-b from-blue-50/40 to-white",
  },
  chart: {
    border: "border-violet-200/85",
    heroBg: "from-violet-100/65 via-white to-fuchsia-50/40",
    icon: "text-violet-950",
    pageBg: "bg-gradient-to-b from-violet-50/45 to-white",
  },
  megaphone: {
    border: "border-orange-200/85",
    heroBg: "from-orange-100/60 via-white to-amber-50/45",
    icon: "text-orange-950",
    pageBg: "bg-gradient-to-b from-orange-50/40 to-white",
  },
  book: {
    border: "border-emerald-200/85",
    heroBg: "from-emerald-100/55 via-white to-teal-50/40",
    icon: "text-emerald-950",
    pageBg: "bg-gradient-to-b from-emerald-50/38 to-white",
  },
  envelope: {
    border: "border-sky-200/85",
    heroBg: "from-sky-100/60 via-white to-cyan-50/40",
    icon: "text-sky-950",
    pageBg: "bg-gradient-to-b from-sky-50/40 to-white",
  },
  compass: {
    border: "border-amber-200/85",
    heroBg: "from-amber-100/55 via-white to-yellow-50/35",
    icon: "text-amber-950",
    pageBg: "bg-gradient-to-b from-amber-50/38 to-white",
  },
  clipboard: {
    border: "border-cyan-200/85",
    heroBg: "from-cyan-100/55 via-white to-slate-50/50",
    icon: "text-cyan-950",
    pageBg: "bg-gradient-to-b from-cyan-50/35 to-white",
  },
  users: {
    border: "border-teal-200/85",
    heroBg: "from-teal-100/55 via-white to-emerald-50/35",
    icon: "text-teal-950",
    pageBg: "bg-gradient-to-b from-teal-50/35 to-white",
  },
  cube: {
    border: "border-purple-200/85",
    heroBg: "from-purple-100/55 via-white to-violet-50/40",
    icon: "text-purple-950",
    pageBg: "bg-gradient-to-b from-purple-50/38 to-white",
  },
  stairs: {
    border: "border-yellow-200/80",
    heroBg: "from-yellow-100/50 via-white to-stone-50/45",
    icon: "text-yellow-950",
    pageBg: "bg-gradient-to-b from-amber-50/30 to-white",
  },
  gear: {
    border: "border-zinc-300/90",
    heroBg: "from-zinc-100/70 via-white to-slate-50/50",
    icon: "text-zinc-900",
    pageBg: "bg-gradient-to-b from-zinc-50/50 to-white",
  },
  case: {
    border: "border-rose-200/85",
    heroBg: "from-rose-100/55 via-white to-pink-50/35",
    icon: "text-rose-950",
    pageBg: "bg-gradient-to-b from-rose-50/35 to-white",
  },
  strategy: {
    border: "border-fuchsia-200/80",
    heroBg: "from-fuchsia-100/50 via-white to-purple-50/40",
    icon: "text-fuchsia-950",
    pageBg: "bg-gradient-to-b from-fuchsia-50/35 to-white",
  },
  play: {
    border: "border-red-200/80",
    heroBg: "from-red-100/45 via-white to-orange-50/35",
    icon: "text-red-950",
    pageBg: "bg-gradient-to-b from-red-50/30 to-white",
  },
};
