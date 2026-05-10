import type { EnterprisePillarContent } from "./types";

export const readinessEnterpriseContent: EnterprisePillarContent = {
  slug: "ax-readiness",
  accent: "emerald",
  hero: {
    badge: "AX Readiness",
    headline: "Prepare Your Organization for AI-Native Transformation.",
    subhead:
      "Enterprise AX transformation starting point — strategy, governance, and execution alignment before scale.",
    executive:
      "KT delivers practical enterprise AX execution capabilities across strategy, AI, cloud, and data — beginning with readiness that de-risks adoption and accelerates measurable outcomes.",
  },
  kpis: [
    { label: "Time-to-governance alignment", value: 40, suffix: "% faster" },
    { label: "Portfolio clarity (use-case prioritization)", value: 3, suffix: "×" },
    { label: "Executive decision cycle compression", value: 25, suffix: "%" },
  ],
  cta: {
    headline: "Start Your AX Readiness Assessment",
    buttonLabel: "Request readiness session",
    href: "/ax-consulting",
  },
  blocks: [
    {
      id: "challenges",
      navLabel: "Challenges",
      surface: "dark",
      kicker: "Enterprise challenges",
      title: "Fragmentation hides ROI — and slows AI at scale.",
      lede:
        "Most enterprises stall not on models, but on operating reality: workflows, data, governance, and incentives are misaligned.",
      items: [
        {
          title: "Fragmented workflows",
          body: "Critical processes span legacy systems, vendors, and teams — creating handoffs that erode speed and auditability.",
        },
        {
          title: "Siloed data",
          body: "Insights depend on reconciled truth. When domains disagree on definitions, AI amplifies inconsistency instead of clarity.",
        },
        {
          title: "Low AI adoption",
          body: "Pilots proliferate without a portfolio lane, funding model, or owner — so value never compounds into production.",
        },
        {
          title: "Weak governance",
          body: "Without policy, lineage, and controls, innovation becomes risk — and compliance becomes a brake instead of a guardrail.",
        },
        {
          title: "Unclear ROI",
          body: "Executives need outcome-linked metrics tied to business processes — not model benchmarks disconnected from P&L.",
        },
        {
          title: "Organizational resistance",
          body: "Change fails when roles, incentives, and training lag technology. Readiness is change leadership — not IT alone.",
        },
      ],
    },
    {
      id: "innovation-hub",
      navLabel: "Innovation Hub",
      surface: "light",
      kicker: "Sub-service",
      title: "Innovation Hub — enterprise innovation acceleration",
      lede:
        "A disciplined co-creation environment to discover high-value AX opportunities, validate feasibility fast, and establish governance that survives scale.",
      services: [
        {
          title: "Innovation Hub",
          subtitle: "Enterprise innovation acceleration platform",
          narrative:
            "Move from ideas to governed prototypes with executive visibility — workshops, discovery sprints, and portfolio framing that connect AI to business mechanics.",
          points: [
            "AX ideation workshop — cross-functional problem framing with measurable hypotheses",
            "Rapid PoC — controlled environments with clear success criteria and exit gates",
            "AI use-case discovery — value, feasibility, risk, and data readiness scoring",
            "Enterprise co-creation — business + IT + compliance as one delivery lane",
            "Innovation governance — standards, review cadence, and responsible scale rules",
          ],
        },
      ],
      diagram: "maturity",
    },
    {
      id: "strategy-consulting",
      navLabel: "AX Strategy",
      surface: "muted",
      kicker: "Sub-service",
      title: "AX Strategy Consulting — transformation advisory",
      lede:
            "Executive-grade roadmaps and operating models that align AI investments to business outcomes, risk posture, and delivery capacity.",
      services: [
        {
          title: "AX Strategy Consulting",
          subtitle: "Enterprise transformation advisory",
          narrative:
            "We translate ambition into an executable transformation system: maturity baselines, target architecture, governance, and KPI frameworks that leaders can run.",
          points: [
            "AX maturity assessment — current-state truth across data, platforms, skills, and controls",
            "Roadmap design — sequenced initiatives with dependencies, funding, and value milestones",
            "Operating model redesign — decision rights, delivery lanes, and vendor orchestration",
            "Governance strategy — policy, monitoring, and audit-ready evidence by design",
            "AI organization design — roles, centers of excellence, and federated execution",
            "KPI framework — adoption, productivity, quality, risk, and business outcome metrics",
          ],
        },
      ],
      methodology: [
        { phase: "Discover", detail: "Stakeholder alignment, baseline maturity, constraints mapping" },
        { phase: "Design", detail: "Target model, roadmap, governance, KPI architecture" },
        { phase: "Prove", detail: "Pilot lane with exit criteria and production readiness gates" },
        { phase: "Scale", detail: "Platform patterns, enablement, and continuous assurance" },
      ],
    },
    {
      id: "implementation",
      navLabel: "Model",
      surface: "light",
      kicker: "Implementation model",
      title: "From assessment to governed scale — without heroics.",
      body:
        "Readiness is not a slide deck. It is a delivery system: clear ownership, measurable gates, and an operating rhythm that keeps AI aligned to business execution.",
      bullets: [
        "Executive steering + portfolio management cadence",
        "Use-case intake with data + compliance pre-checks",
        "Reference architectures aligned to KT AX platform patterns",
        "Change management embedded into delivery milestones",
      ],
      architecture: [
        { layer: "Business outcomes", hint: "KPIs tied to processes and owners" },
        { layer: "Governance & risk", hint: "Policy, controls, evidence" },
        { layer: "Data & knowledge", hint: "Trusted sources, lineage, access" },
        { layer: "Platforms & AI", hint: "Secure execution environments" },
      ],
    },
    {
      id: "outcomes",
      navLabel: "Outcomes",
      surface: "dark",
      kicker: "Business outcomes",
      title: "Measurable readiness — faster adoption, lower transformation risk.",
      items: [
        {
          title: "Faster AI adoption",
          body: "Prioritized portfolio, funded lanes, and production readiness criteria reduce thrash and rework.",
        },
        {
          title: "Reduced transformation risk",
          body: "Governance and operating model changes land before scale — preventing compliance debt.",
        },
        {
          title: "Aligned business strategy",
          body: "AI initiatives map to revenue, cost, resilience, and customer experience — not isolated experiments.",
        },
        {
          title: "Operational modernization",
          body: "Workflow redesign and platform standards compound: each wave builds on the last.",
        },
      ],
    },
  ],
};
