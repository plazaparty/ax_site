import type { EnterprisePillarContent } from "./types";

export const aiEnterpriseContent: EnterprisePillarContent = {
  slug: "ai",
  accent: "rose",
  hero: {
    badge: "Enterprise AI",
    headline: "Enterprise AI, Operationalized.",
    subhead:
      "An execution platform for secure generative AI, governed development, agentic workflows, and customer interaction transformation.",
    executive:
      "KT delivers practical enterprise AX execution capabilities across strategy, AI, cloud, and data — with production-grade controls, observability, and measurable business impact.",
  },
  kpis: [
    { label: "상담 처리 시간 단축", value: 35, suffix: "%" },
    { label: "응답 자동화율", value: 48, suffix: "%" },
    { label: "운영 효율 향상", value: 22, suffix: "%" },
    { label: "업무 생산성 향상", value: 28, suffix: "%" },
  ],
  cta: {
    headline: "Launch Enterprise AI with KT",
    buttonLabel: "Book an AI execution review",
    href: "/ax-consulting",
  },
  blocks: [
    {
      id: "challenges",
      navLabel: "Challenges",
      surface: "dark",
      kicker: "Enterprise pain points",
      title: "AI fails in production when controls, data truth, and workflow ownership are unclear.",
      items: [
        {
          title: "Shadow AI & compliance exposure",
          body: "Unmonitored tools leak sensitive context. Enterprises need private execution, policy, and evidence-by-design.",
        },
        {
          title: "Model sprawl without lifecycle discipline",
          body: "Without evaluation, monitoring, and rollback, quality degrades silently — eroding trust with users and regulators.",
        },
        {
          title: "Workflow integration debt",
          body: "Copilots must connect to systems of record, approvals, and audit trails — not chat in a vacuum.",
        },
        {
          title: "Operational blind spots",
          body: "Leaders need cost, latency, usage, and incident signals — not vanity dashboards disconnected from outcomes.",
        },
      ],
    },
    {
      id: "llm",
      navLabel: "LLM",
      surface: "light",
      kicker: "Sub-service",
      title: "LLM — enterprise-grade generative foundation",
      lede:
        "Private, secure, and domain-aware language intelligence — engineered for Korean enterprise contexts and multilingual operations.",
      services: [
        {
          title: "LLM",
          subtitle: "Enterprise-grade generative AI foundation",
          narrative:
            "Deploy models with clear boundaries: tenancy, encryption, access policy, and operational telemetry aligned to enterprise risk posture.",
          points: [
            "Private LLM — controlled environments and data residency patterns",
            "Secure enterprise AI — identity, least privilege, and audit logging",
            "Domain-specialized models — tuned behaviors for regulated workflows",
            "Multilingual AI — consistent quality across markets and channels",
            "Korean enterprise optimization — locale-aware UX, compliance, and operations",
          ],
        },
      ],
      diagram: "pipeline",
    },
    {
      id: "ai-studio",
      navLabel: "AI Studio",
      surface: "muted",
      kicker: "Sub-service",
      title: "AI Studio — development & orchestration platform",
      lede:
        "Build, evaluate, and operate AI workflows with governance embedded — from prompt patterns to production monitoring.",
      services: [
        {
          title: "AI Studio",
          subtitle: "AI development & orchestration platform",
          narrative:
            "A disciplined builder experience for cross-functional teams: design, test, release, and observe — with enterprise guardrails as defaults.",
          points: [
            "Workflow builder — composable steps with approvals and traceability",
            "Prompt engineering — versioning, regression suites, and safe rollout",
            "Model management — routing, capacity, and lifecycle controls",
            "Monitoring — drift, failures, latency, and cost signals in one lane",
            "Evaluation — human-in-the-loop scoring tied to business quality bars",
            "Enterprise AI governance — policy packs aligned to audit expectations",
          ],
        },
      ],
    },
    {
      id: "ai-agent",
      navLabel: "AI Agent",
      surface: "light",
      kicker: "Sub-service",
      title: "AI Agent — autonomous enterprise workflow execution",
      lede:
        "Multi-agent patterns that orchestrate tasks across systems — with human checkpoints where risk requires judgment.",
      services: [
        {
          title: "AI Agent",
          subtitle: "Agentic operations with enterprise controls",
          narrative:
            "Agents are not novelty — they are operations software. KT focuses on reliability: retries, idempotency, approvals, and observable execution graphs.",
          points: [
            "Multi-agent systems — specialized roles with coordinated handoffs",
            "Workflow automation — repeatable enterprise procedures with SLAs",
            "Task orchestration — queues, prioritization, and escalation paths",
            "Enterprise copilots — grounded answers with source-linked evidence",
            "Agentic operations — runbooks that integrate ITSM, CRM, and HR systems",
          ],
        },
      ],
      diagram: "agentMesh",
      items: [
        { title: "HR", body: "Policy guidance, onboarding workflows, and case routing with compliance guardrails." },
        { title: "Customer service", body: "Consistent resolution quality with supervisor assist and quality analytics." },
        { title: "Operations", body: "Incident triage, supplier coordination, and exception handling with audit trails." },
        { title: "Knowledge management", body: "Retrieval grounded in authoritative sources — reducing search time and rework." },
      ],
    },
    {
      id: "aicc",
      navLabel: "AICC",
      surface: "muted",
      kicker: "Sub-service",
      title: "AICC — AI-powered customer interaction transformation",
      lede:
        "상담 품질과 효율을 동시에 끌어올리는 엔터프라이즈 접점 운영 — 음성·텍스트·분석이 하나의 운영 체계로 연결됩니다.",
      services: [
        {
          title: "구축형 AICC",
          subtitle: "On-prem / dedicated patterns for regulated industries",
          narrative:
            "고객사 환경에 맞춘 구축형 상담 AI — 보안·녹취·품질관리·운영 표준을 엔터프라이즈 운영 모델에 정렬합니다.",
          points: [
            "Voice AI — 자연스러운 음성 상호작용과 품질 모니터링",
            "상담 자동화 — 반복 문의 처리와 에이전트 보조의 균형",
            "Real-time assistance — 통화 중 추천 응답·정책 가이드",
            "Sentiment analysis — 이탈 신호 조기 탐지",
            "Omnichannel support — 채널 간 맥락 유지",
            "Enterprise call intelligence — 운영 리포트와 개선 루프",
          ],
        },
        {
          title: "서비스형 AICC",
          subtitle: "Managed service for speed-to-value and continuous optimization",
          narrative:
            "운영을 KT가 함께 관리하는 서비스형 모델 — 릴리즈, 튜닝, 품질 개선, 장애 대응까지 SLA 기반으로 제공합니다.",
          points: [
            "Managed operations — 상담 품질·모델·지식베이스의 지속 운영",
            "Rapid rollout — 템플릿화된 온보딩과 단계적 확장",
            "Analytics loop — VOC·처리시간·자동화율 기반 개선",
            "Governed change control — 정책 변경과 승인 흐름 내장",
          ],
        },
      ],
    },
    {
      id: "methodology",
      navLabel: "Methodology",
      surface: "light",
      kicker: "Implementation model",
      title: "Land, harden, scale — enterprise AI delivery without hero deployments.",
      body:
        "Each wave ships with production gates: security review, evaluation baselines, rollback plans, and operational owners before user scale.",
      methodology: [
        { phase: "Discover", detail: "Workflow mapping, data classification, policy alignment, ROI hypothesis" },
        { phase: "Design", detail: "Reference patterns, integration contracts, monitoring, and governance hooks" },
        { phase: "Build", detail: "Studio workflows, agent graphs, AICC integrations with QA harnesses" },
        { phase: "Operate", detail: "SLOs, incident playbooks, continuous evaluation, and cost controls" },
      ],
    },
    {
      id: "value",
      navLabel: "Value",
      surface: "dark",
      kicker: "KPI / value proposition",
      title: "Operational AI — measured where enterprises actually care.",
      body:
        "We anchor programs to contact-center throughput, resolution quality, employee productivity, and risk reduction — not model trivia.",
      bullets: [
        "상담 처리 시간 단축 — routing, summarization, and assistive drafting",
        "운영 효율 향상 — fewer escalations and cleaner handoffs",
        "응답 자동화율 — governed automation with human oversight",
        "업무 생산성 향상 — less search, less swivel-chair, more execution",
      ],
    },
  ],
};
