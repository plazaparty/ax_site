import type { EnterprisePillarContent } from "./types";

export const dataEnterpriseContent: EnterprisePillarContent = {
  slug: "data",
  accent: "amber",
  hero: {
    badge: "Enterprise Data",
    headline: "Transform Enterprise Data into AI Intelligence.",
    subhead:
      "Operational intelligence, modern lakehouse foundations, and knowledge systems that make AI accurate, auditable, and actionable.",
    executive:
      "KT delivers practical enterprise AX execution capabilities across strategy, AI, cloud, and data — turning trusted data into governed intelligence and measurable execution.",
  },
  kpis: [
    { label: "Faster decision-making", value: 31, suffix: "%" },
    { label: "Knowledge search time reduction", value: 44, suffix: "%" },
    { label: "AI accuracy improvement (grounded programs)", value: 27, suffix: "%" },
    { label: "Enterprise insight acceleration", value: 2.1, suffix: "×", decimals: 1 },
  ],
  cta: {
    headline: "Activate Enterprise Intelligence with KT",
    buttonLabel: "Request a data-to-AI architecture session",
    href: "/ax-consulting",
  },
  blocks: [
    {
      id: "challenges",
      navLabel: "Challenges",
      surface: "dark",
      kicker: "Enterprise pain points",
      title: "Intelligence fails when truth is fragmented — and AI amplifies the gap.",
      items: [
        {
          title: "Inconsistent definitions",
          body: "Metrics that disagree across domains destroy trust — especially when AI surfaces answers at speed.",
        },
        {
          title: "Dark data and document sprawl",
          body: "Unstructured knowledge hides in silos; retrieval without governance creates compliance exposure.",
        },
        {
          title: "Integration complexity",
          body: "Operational systems need curated pipelines — not one-off extracts that break under change.",
        },
        {
          title: "Slow path to AI-ready data",
          body: "Without lakehouse discipline and semantic layers, models train on noise and drift in production.",
        },
      ],
    },
    {
      id: "palantir",
      navLabel: "Palantir",
      surface: "light",
      kicker: "Sub-service",
      title: "Palantir — enterprise operational intelligence platform",
      lede:
        "Mission-critical visibility across operations — integrating signals, decisions, and execution with audit-grade traceability.",
      services: [
        {
          title: "Palantir",
          subtitle: "Operational intelligence at enterprise scale",
          narrative:
            "Connect operational truth into decision workflows — from digital twin operations to cross-functional command visibility.",
          points: [
            "Decision intelligence — scenario planning with governed evidence",
            "Operational visibility — unified views across systems and teams",
            "Digital twin operations — model physical and business reality for faster response",
            "Enterprise data integration — curated ontology and lineage patterns",
            "Mission-critical analytics — reliability, access control, and operational rigor",
          ],
        },
      ],
      diagram: "maturity",
    },
    {
      id: "structured",
      navLabel: "Structured data",
      surface: "muted",
      kicker: "Sub-service",
      title: "Structured Data Services — modern enterprise data foundation",
      lede:
        "Lakehouse architectures that unify analytics, engineering, and AI consumption — with scalable BI and governed access.",
      services: [
        {
          title: "Databricks",
          subtitle: "Lakehouse + AI workload convergence",
          narrative:
            "Engineering and analytics on one platform — enabling governed datasets that downstream AI can trust.",
          points: [
            "Enterprise analytics — curated metrics and semantic alignment",
            "Lakehouse architecture — open formats with performance at scale",
            "Data engineering — reliable pipelines with testing and observability",
            "AI-ready structured data platform — feature stores and governed datasets",
          ],
        },
        {
          title: "Snowflake",
          subtitle: "Elastic analytics and secure data sharing",
          narrative:
            "Separate storage and compute for predictable scaling — with enterprise-grade security and collaboration patterns.",
          points: [
            "Scalable BI — performance isolation for concurrent workloads",
            "Secure sharing — governed collaboration across business units and partners",
            "Workload governance — spend visibility and policy-aligned usage",
          ],
        },
      ],
      architecture: [
        { layer: "Consumption", hint: "BI, AI features, apps" },
        { layer: "Semantic & metrics", hint: "Definitions owners trust" },
        { layer: "Lakehouse", hint: "Curated zones, lineage" },
        { layer: "Ingestion", hint: "CDC, batch, APIs" },
      ],
    },
    {
      id: "unstructured",
      navLabel: "Unstructured data",
      surface: "light",
      kicker: "Sub-service",
      title: "Unstructured Data Services — enterprise knowledge intelligence",
      lede:
        "RAG and Graph RAG patterns that connect documents, entities, and policies — so answers are grounded, explainable, and enterprise-safe.",
      services: [
        {
          title: "RAG",
          subtitle: "Grounded retrieval for enterprise copilots",
          narrative:
            "Authoritative retrieval with citations — reducing hallucination risk and improving operator confidence.",
          points: [
            "Enterprise search — scoped indexes with access-aware results",
            "Knowledge retrieval — policy-aligned sources and freshness controls",
            "Contextual AI — prompts grounded in verified snippets",
            "Document intelligence — structure extraction and classification",
          ],
        },
        {
          title: "Graph RAG",
          subtitle: "Semantic intelligence with relationships",
          narrative:
            "Combine vector retrieval with graph reasoning for multi-hop questions — where entities and dependencies matter.",
          points: [
            "Enterprise knowledge graph — entities, relationships, and time",
            "Semantic intelligence — richer context for complex decisions",
            "Explainability — paths that support audit and review",
          ],
        },
      ],
      diagram: "dataFlow",
    },
    {
      id: "methodology",
      navLabel: "Methodology",
      surface: "light",
      kicker: "Implementation model",
      title: "Source, curate, publish, govern — data products that AI programs can safely consume.",
      methodology: [
        { phase: "Source", detail: "Authoritative systems, contracts, and ingestion with lineage from day one" },
        { phase: "Curate", detail: "Quality rules, semantic alignment, PII handling, and zone promotion" },
        { phase: "Publish", detail: "Data products, APIs, metrics layers, and retrieval indexes with SLAs" },
        { phase: "Govern", detail: "Access reviews, audit evidence, drift monitoring, and change control" },
      ],
    },
    {
      id: "data-to-ai",
      navLabel: "Data → AI flow",
      surface: "dark",
      kicker: "Transformation diagram",
      title: "Data → Intelligence → AI Agent → Business Execution",
      lede:
        "The enterprise value chain is not a model — it is an operating loop: trusted inputs, governed intelligence, controlled automation, and measurable business impact.",
      flow: {
        steps: [
          { label: "Data", sub: "Trusted sources, lineage, access policy" },
          { label: "Intelligence", sub: "Metrics, graphs, semantic layers" },
          { label: "AI Agent", sub: "Orchestrated actions with guardrails" },
          { label: "Execution", sub: "Workflow outcomes & KPI proof" },
        ],
      },
    },
    {
      id: "value",
      navLabel: "Value",
      surface: "muted",
      kicker: "KPI / value proposition",
      title: "Enterprise intelligence — faster decisions, safer AI, compounding insight.",
      body:
        "Programs are measured on decision latency, search burden, model quality in production, and time-to-insight — aligned to leadership outcomes.",
      bullets: [
        "Faster decision-making — unified operational truth and governed analytics",
        "Reduced knowledge search time — retrieval with citations and access control",
        "AI accuracy improvement — grounding, evaluation, and continuous feedback loops",
        "Enterprise insight acceleration — reusable data products that scale across domains",
      ],
    },
  ],
};
