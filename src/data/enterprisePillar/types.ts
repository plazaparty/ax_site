import type { SolutionPillarSlug } from "@/data/solutionPillars";

export type PillarSurface = "hero" | "dark" | "muted" | "light";

export type EnterprisePillarBlock = {
  id: string;
  navLabel: string;
  surface: PillarSurface;
  kicker?: string;
  title?: string;
  lede?: string;
  body?: string;
  /** Executive challenge / outcome cards */
  items?: { title: string; body: string }[];
  bullets?: string[];
  /** Deep-dive service bands (e.g. Innovation Hub + Strategy Consulting) */
  services?: {
    title: string;
    subtitle: string;
    narrative: string;
    points: string[];
  }[];
  methodology?: { phase: string; detail: string }[];
  architecture?: { layer: string; hint: string }[];
  /** Data → Intelligence → Agent → Execution */
  flow?: { steps: { label: string; sub: string }[] };
  diagram?: "maturity" | "pipeline" | "agentMesh" | "cloudStack" | "dataFlow";
};

export type EnterpriseKpi = {
  label: string;
  value: number;
  suffix: string;
  /** Defaults to 0 (integer). Use 1–2 for fractional KPIs. */
  decimals?: number;
};

export type EnterprisePillarContent = {
  slug: SolutionPillarSlug;
  accent: "emerald" | "rose" | "sky" | "amber";
  hero: {
    badge: string;
    headline: string;
    subhead: string;
    executive: string;
  };
  kpis: EnterpriseKpi[];
  cta: { headline: string; buttonLabel: string; href: string };
  blocks: EnterprisePillarBlock[];
};
