import type { ServiceIconSlug } from "@/components/icons/ServiceMonoIcon";

export function solutionSlugToIcon(slug: string): ServiceIconSlug {
  const map: Record<string, ServiceIconSlug> = {
    "ax-readiness": "knowledge",
    ai: "agent",
    cloud: "workflow",
    data: "knowledge",
    "ax-consultant": "knowledge",
    "agent-studio": "agent",
    "knowledge-ai": "knowledge",
    "workflow-ai": "workflow",
    "document-ai": "document",
    "aicc-plus": "aicc",
    "vision-ax": "vision",
    "data-insight": "knowledge",
  };
  return map[slug] ?? "document";
}
