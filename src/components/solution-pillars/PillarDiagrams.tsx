import type { EnterprisePillarBlock } from "@/data/enterprisePillar/types";

type DiagramKey = NonNullable<EnterprisePillarBlock["diagram"]>;

const accentStroke: Record<"emerald" | "rose" | "sky" | "amber", string> = {
  emerald: "#10b981",
  rose: "#f43f5e",
  sky: "#0ea5e9",
  amber: "#f59e0b",
};

export function PillarDiagram({ kind, accent }: { kind: DiagramKey; accent: keyof typeof accentStroke }) {
  const c = accentStroke[accent];
  switch (kind) {
    case "maturity":
      return <MaturitySvg stroke={c} />;
    case "pipeline":
      return <PipelineSvg stroke={c} />;
    case "agentMesh":
      return <AgentMeshSvg stroke={c} />;
    case "cloudStack":
      return <CloudStackSvg stroke={c} />;
    case "dataFlow":
      return <DataFlowSvg stroke={c} />;
    default:
      return null;
  }
}

function MaturitySvg({ stroke }: { stroke: string }) {
  return (
    <svg viewBox="0 0 720 220" className="h-auto w-full max-w-3xl" aria-hidden>
      <defs>
        <linearGradient id="matg" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.15" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0.85" />
        </linearGradient>
      </defs>
      <rect x="40" y="140" width="640" height="4" rx="2" fill="rgba(15,23,42,0.12)" />
      <path
        d="M 60 130 Q 180 40 360 88 T 660 52"
        fill="none"
        stroke="url(#matg)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {[
        { x: 80, lab: "Ad-hoc" },
        { x: 220, lab: "Pilot" },
        { x: 380, lab: "Scaled" },
        { x: 540, lab: "Optimized" },
        { x: 660, lab: "AI-native" },
      ].map((p) => (
        <g key={p.lab}>
          <circle cx={p.x} cy="142" r="6" fill={stroke} />
          <text
            x={p.x}
            y="178"
            textAnchor="middle"
            fill="#64748b"
            fontSize="11"
            fontFamily="system-ui, sans-serif"
            fontWeight="600"
          >
            {p.lab}
          </text>
        </g>
      ))}
      <text
        x="360"
        y="32"
        textAnchor="middle"
        fill="#475569"
        fontSize="12"
        fontFamily="system-ui, sans-serif"
        fontWeight="600"
      >
        Transformation maturity curve
      </text>
    </svg>
  );
}

function PipelineSvg({ stroke }: { stroke: string }) {
  const layers = ["Ingress", "Policy", "Model", "Serve", "Observe"];
  return (
    <svg viewBox="0 0 720 200" className="h-auto w-full max-w-3xl" aria-hidden>
      {layers.map((lab, i) => {
        const x = 40 + i * 136;
        return (
          <g key={lab}>
            <rect
              x={x}
              y="56"
              width="120"
              height="72"
              rx="12"
              fill="rgba(15,23,42,0.04)"
              stroke="rgba(15,23,42,0.12)"
            />
            <rect x={x + 8} y="64" width="104" height="6" rx="3" fill={stroke} opacity={0.35 + i * 0.1} />
            <text
              x={x + 60}
              y="112"
              textAnchor="middle"
              fill="#334155"
              fontSize="12"
              fontFamily="system-ui, sans-serif"
              fontWeight="600"
            >
              {lab}
            </text>
            {i < layers.length - 1 ? (
              <path
                d={`M ${x + 124} 92 L ${x + 136} 92`}
                stroke={stroke}
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.5"
              />
            ) : null}
          </g>
        );
      })}
      <text
        x="360"
        y="36"
        textAnchor="middle"
        fill="#475569"
        fontSize="12"
        fontFamily="system-ui, sans-serif"
        fontWeight="600"
      >
        Inference & orchestration flow
      </text>
    </svg>
  );
}

function AgentMeshSvg({ stroke }: { stroke: string }) {
  const nodes = [
    { x: 120, y: 70, t: "Planner" },
    { x: 360, y: 50, t: "Tools" },
    { x: 600, y: 70, t: "Memory" },
    { x: 240, y: 150, t: "Worker A" },
    { x: 480, y: 150, t: "Worker B" },
  ];
  return (
    <svg viewBox="0 0 720 200" className="h-auto w-full max-w-3xl" aria-hidden>
      <path d="M 120 70 L 360 50 L 600 70" stroke={stroke} strokeOpacity="0.35" strokeWidth="1.5" fill="none" />
      <path d="M 360 50 L 240 150 L 480 150 Z" stroke={stroke} strokeOpacity="0.25" strokeWidth="1.2" fill="none" />
      {nodes.map((n) => (
        <g key={n.t}>
          <circle cx={n.x} cy={n.y} r="22" fill="rgba(15,23,42,0.05)" stroke={stroke} strokeWidth="1.5" />
          <text
            x={n.x}
            y={n.y + 4}
            textAnchor="middle"
            fill="#334155"
            fontSize="10"
            fontFamily="system-ui, sans-serif"
            fontWeight="700"
          >
            {n.t}
          </text>
        </g>
      ))}
      <text
        x="360"
        y="190"
        textAnchor="middle"
        fill="#64748b"
        fontSize="11"
        fontFamily="system-ui, sans-serif"
        fontWeight="500"
      >
        Multi-agent orchestration (governed handoffs)
      </text>
    </svg>
  );
}

function CloudStackSvg({ stroke }: { stroke: string }) {
  const rows = [
    { y: 40, w: 520, label: "Workloads & AI services" },
    { y: 88, w: 580, label: "Platform & data plane" },
    { y: 136, w: 640, label: "Network & security fabric" },
    { y: 184, w: 600, label: "Physical / edge footprint" },
  ];
  return (
    <svg viewBox="0 0 720 220" className="h-auto w-full max-w-3xl" aria-hidden>
      {rows.map((r, i) => {
        const x = 360 - r.w / 2;
        return (
          <g key={r.label}>
            <rect
              x={x}
              y={r.y}
              width={r.w}
              height="36"
              rx="10"
              fill="rgba(15,23,42,0.03)"
              stroke="rgba(15,23,42,0.1)"
            />
            <rect x={x + 10} y={r.y + 12} width="48" height="4" rx="2" fill={stroke} opacity={0.25 + i * 0.15} />
            <text
              x={x + 70}
              y={r.y + 23}
              fill="#334155"
              fontSize="12"
              fontFamily="system-ui, sans-serif"
              fontWeight="600"
            >
              {r.label}
            </text>
          </g>
        );
      })}
      <text
        x="360"
        y="24"
        textAnchor="middle"
        fill="#475569"
        fontSize="12"
        fontFamily="system-ui, sans-serif"
        fontWeight="600"
      >
        Enterprise cloud topology (simplified)
      </text>
    </svg>
  );
}

function DataFlowSvg({ stroke }: { stroke: string }) {
  return (
    <svg viewBox="0 0 720 120" className="h-auto w-full max-w-3xl" aria-hidden>
      <defs>
        <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={stroke} opacity="0.7" />
        </marker>
      </defs>
      <line x1="80" y1="60" x2="200" y2="60" stroke={stroke} strokeWidth="2" markerEnd="url(#arr)" opacity="0.6" />
      <line x1="260" y1="60" x2="380" y2="60" stroke={stroke} strokeWidth="2" markerEnd="url(#arr)" opacity="0.6" />
      <line x1="440" y1="60" x2="560" y2="60" stroke={stroke} strokeWidth="2" markerEnd="url(#arr)" opacity="0.6" />
      {["Sources", "Lakehouse", "Graph / vectors", "Agents"].map((t, i) => (
        <text
          key={t}
          x={80 + i * 160}
          y="92"
          textAnchor="middle"
          fill="#475569"
          fontSize="11"
          fontFamily="system-ui, sans-serif"
          fontWeight="600"
        >
          {t}
        </text>
      ))}
    </svg>
  );
}
