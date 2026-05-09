/** 공통 AX 플랫폼 엔티티 타입 — 향후 CMS/API로 교체 가능 */

export interface AxEntityBase {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  tags?: string[];
}

export interface IndustryRecord extends AxEntityBase {
  relatedFunctions: string[];
  relatedSolutions: string[];
  expectedKpis: string[];
  difficulty: "낮음" | "중간" | "높음";
  implementationPeriod: string;
}

export interface BusinessFunctionRecord extends AxEntityBase {
  relatedIndustries: string[];
  relatedSolutions: string[];
  painPoints: string[];
}

export interface MaturityLevelRecord extends AxEntityBase {
  stageIndex: number;
  recommendedFor: string[];
  prerequisites: string[];
  risks: string[];
}

export interface SolutionCatalogRecord extends AxEntityBase {
  slug: string;
  problems: string[];
  applicableTasks: string[];
  expectedKpis: string[];
  difficulty: "낮음" | "중간" | "높음";
  implementationPeriod: string;
  relatedUseCases: string[];
  prerequisites: string[];
}

export interface UseCaseLibraryRecord extends AxEntityBase {
  href: string;
  industry: string[];
  task: string[];
  solutions: string[];
  expectedKpis: string[];
  difficulty: "낮음" | "중간" | "높음";
  implementationPeriod: string;
  recommendedFor: string[];
}

export interface InsightRecord extends AxEntityBase {
  href: string;
  category: string;
  businessImpact: string;
  industries: string[];
  relatedSolutions: string[];
  recommendedAction: string;
}
