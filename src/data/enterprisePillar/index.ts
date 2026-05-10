import type { SolutionPillarSlug } from "@/data/solutionPillars";
import { isSolutionPillarSlug } from "@/data/solutionPillars";

import { aiEnterpriseContent } from "./ai";
import { cloudEnterpriseContent } from "./cloud";
import { dataEnterpriseContent } from "./data";
import { readinessEnterpriseContent } from "./readiness";
import type { EnterprisePillarContent } from "./types";

export type {
  EnterpriseKpi,
  EnterprisePillarBlock,
  EnterprisePillarContent,
  PillarSurface,
} from "./types";

const bySlug: Record<SolutionPillarSlug, EnterprisePillarContent> = {
  "ax-readiness": readinessEnterpriseContent,
  ai: aiEnterpriseContent,
  cloud: cloudEnterpriseContent,
  data: dataEnterpriseContent,
};

export function getEnterprisePillarContent(slug: string): EnterprisePillarContent | null {
  if (!isSolutionPillarSlug(slug)) return null;
  return bySlug[slug] ?? null;
}

export const enterprisePillarSlugs = Object.keys(bySlug) as SolutionPillarSlug[];
