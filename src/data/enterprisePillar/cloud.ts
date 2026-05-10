import type { EnterprisePillarContent } from "./types";

export const cloudEnterpriseContent: EnterprisePillarContent = {
  slug: "cloud",
  accent: "sky",
  hero: {
    badge: "Enterprise Cloud",
    headline: "Scalable AI Infrastructure for Enterprise AX.",
    subhead:
      "Hybrid to edge patterns, mission-critical platforms, and GPU capacity — engineered for AI workloads and enterprise resilience.",
    executive:
      "KT delivers practical enterprise AX execution capabilities across strategy, AI, cloud, and data — with infrastructure that makes AI training and inference predictable at scale.",
  },
  kpis: [
    { label: "Deployment acceleration", value: 2, suffix: "×" },
    { label: "Availability-class platform design", value: 99.99, suffix: "%", decimals: 2 },
    { label: "GPU utilization efficiency gains", value: 18, suffix: "%" },
  ],
  cta: {
    headline: "Build Your AI Infrastructure with KT",
    buttonLabel: "Plan infrastructure modernization",
    href: "/ax-consulting",
  },
  blocks: [
    {
      id: "challenges",
      navLabel: "Challenges",
      surface: "dark",
      kicker: "Enterprise pain points",
      title: "AI infrastructure breaks when networking, security, and operations are treated as afterthoughts.",
      items: [
        {
          title: "Capacity volatility",
          body: "Inference spikes and training windows need elastic patterns — without surprise cost or instability.",
        },
        {
          title: "Fragmented cloud estates",
          body: "Hybrid and multi-cloud complexity increases blast radius unless architecture and operations are standardized.",
        },
        {
          title: "Security & compliance pressure",
          body: "Zero-trust networking, encryption, and evidence collection must be baseline — not retrofit.",
        },
        {
          title: "Operational fragility",
          body: "AI systems need the same SRE discipline as mission-critical platforms: observability, change control, and DR.",
        },
      ],
    },
    {
      id: "cloud-business",
      navLabel: "Cloud 사업",
      surface: "light",
      kicker: "Sub-service",
      title: "Cloud 사업 — enterprise cloud transformation partner",
      lede:
        "Modernize estates with migration discipline, managed operations, and cloud-native patterns that unlock AI safely.",
      services: [
        {
          title: "Cloud 사업",
          subtitle: "Enterprise cloud transformation partner",
          narrative:
            "From landing zone to continuous optimization — KT aligns architecture, FinOps signals, and operational playbooks to enterprise governance.",
          points: [
            "Hybrid cloud — consistent identity, connectivity, and policy across environments",
            "Multi-cloud — workload placement with portability and vendor risk management",
            "Migration — wave planning, testing rigor, and business continuity",
            "Managed cloud — SRE-backed operations with incident and change discipline",
            "Cloud-native modernization — platforms that improve release cadence and resilience",
          ],
        },
      ],
      diagram: "cloudStack",
    },
    {
      id: "mpc",
      navLabel: "MPC",
      surface: "muted",
      kicker: "Sub-service",
      title: "MPC — mission-critical enterprise platform infrastructure",
      lede:
        "For systems where downtime is unacceptable: hardened platforms, high availability patterns, and operational resilience engineered into the stack.",
      services: [
        {
          title: "MPC",
          subtitle: "Mission-critical platform compute",
          narrative:
            "Enterprise-grade hosting and platform operations with strict SLAs — designed for regulated workloads and always-on services.",
          points: [
            "Secure enterprise computing — segmentation, hardening, and controlled change windows",
            "High-availability infrastructure — redundancy, failover, and chaos-ready design",
            "Operational resilience — DR/BCP aligned to business RTO/RPO",
            "Enterprise platform operations — monitoring, patching, and capacity governance",
          ],
        },
      ],
      architecture: [
        { layer: "Mission-critical apps", hint: "HA clusters, health checks" },
        { layer: "Platform services", hint: "DB, messaging, identity" },
        { layer: "Secure network fabric", hint: "Zero trust, segmentation" },
        { layer: "Resilient operations", hint: "SRE, incident, change" },
      ],
    },
    {
      id: "gpuaas",
      navLabel: "GPUaaS",
      surface: "light",
      kicker: "Sub-service",
      title: "GPUaaS — AI compute infrastructure service",
      lede:
        "Provision GPU capacity for training and inference with enterprise controls — predictable performance for AI programs.",
      services: [
        {
          title: "GPUaaS",
          subtitle: "AI compute infrastructure service",
          narrative:
            "Scale clusters when workloads demand it — with secure tenancy, monitoring, and operational support aligned to enterprise AI roadmaps.",
          points: [
            "GPU cluster provisioning — right-sized pools for training vs inference",
            "AI training / inference — workload-aware scheduling and capacity planning",
            "Scalable compute — burst patterns without destabilizing production",
            "Secure AI operations — isolation, secrets, and access governance",
            "Enterprise AI acceleration — faster iteration cycles for model programs",
          ],
        },
      ],
      diagram: "pipeline",
    },
    {
      id: "methodology",
      navLabel: "Methodology",
      surface: "light",
      kicker: "Implementation model",
      title: "Assess, standardize, migrate, operate — infrastructure as a product, not a project.",
      methodology: [
        { phase: "Assess", detail: "Workload inventory, dependency mapping, risk and compliance constraints" },
        { phase: "Standardize", detail: "Landing zones, networking patterns, identity, and observability baselines" },
        { phase: "Migrate", detail: "Wave planning, cutover rehearsal, rollback paths, and business validation" },
        { phase: "Operate", detail: "SRE cadence, capacity governance, FinOps signals, and continuous hardening" },
      ],
    },
    {
      id: "benefits",
      navLabel: "Benefits",
      surface: "dark",
      kicker: "Enterprise benefits",
      title: "Infrastructure that earns trust — scale, security, stability, AI performance.",
      items: [
        { title: "Scalability", body: "Elastic patterns for AI spikes without compromising core business services." },
        { title: "Security", body: "Defense-in-depth networking and encryption aligned to enterprise policy." },
        { title: "Operational stability", body: "SRE practices, change control, and measurable reliability targets." },
        { title: "AI performance", body: "GPU capacity and data proximity patterns tuned for latency-sensitive inference." },
        { title: "Faster deployment", body: "Landing zones, templates, and managed paths reduce time-to-production." },
      ],
    },
  ],
};
