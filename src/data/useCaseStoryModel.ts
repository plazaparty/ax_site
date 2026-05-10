/** Use Case 성공 스토리 공통 타입 (순환 참조 방지용 분리) */

export interface SuccessStory {
  title: string;
  customerProblem: string;
  solution: string;
  process: string[];
  outcome: string;
  metrics: { label: string; value: string }[];
  quote: string;
  expansion: string;
  /** 스토리형 상세 · 시각화 */
  legacyProcess?: string[];
  modernProcess?: string[];
  axApplicationPoints?: string[];
  operationModel?: string;
  architectureFlow?: [string, string, string];
  similarIndustries?: string[];
  industryTags?: string[];
  taskTags?: string[];
  solutionTags?: string[];
  difficulty?: "낮음" | "중간" | "높음";
  implementationPeriod?: string;
  kpiTags?: string[];
}
