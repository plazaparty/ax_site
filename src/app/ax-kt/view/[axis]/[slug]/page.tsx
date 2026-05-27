import Link from "next/link";
import { notFound } from "next/navigation";
import { getExploreDetail, type ExploreTabId } from "@/ax-kt/exploreContent";
import { G } from "@/ax-kt/theme";

const AXES = ["industry", "task", "stage", "solution"] as const;

export default async function AxKtExploreDetailPage({
  params,
}: {
  params: Promise<{ axis: string; slug: string }>;
}) {
  const { axis, slug } = await params;
  if (!AXES.includes(axis as (typeof AXES)[number])) notFound();
  const detail = getExploreDetail(axis as ExploreTabId, slug);
  if (!detail) notFound();

  return (
    <div className="ax-kt-shell" style={{ paddingTop: 88, maxWidth: "56rem", margin: "0 auto" }}>
      <Link
        href="/ax-kt"
        style={{
          display: "inline-block",
          marginBottom: 20,
          fontSize: 13,
          color: G.textSub,
          textDecoration: "none",
        }}
      >
        ← AX.KT 홈
      </Link>
      <article
        style={{
          border: `1px solid ${G.border}`,
          borderRadius: 20,
          background: G.surface,
          padding: "1.5rem 1.75rem",
          boxShadow: "0 8px 32px rgba(17,24,39,0.06)",
        }}
      >
        <h1
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.35rem, 4vw, 1.75rem)",
            color: G.text,
            marginBottom: 20,
            lineHeight: 1.25,
          }}
        >
          {detail.title}
        </h1>
        {detail.sections.map((sec) => (
          <div key={sec.heading} style={{ marginBottom: 18 }}>
            <p
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: G.textDim,
                marginBottom: 8,
              }}
            >
              {sec.heading}
            </p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, color: G.textSub, lineHeight: 1.65 }}>
              {sec.items.map((line) => (
                <li key={line} style={{ marginBottom: 4 }}>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div style={{ marginBottom: 18 }}>
          <p
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: G.textDim,
              marginBottom: 8,
            }}
          >
            KT 솔루션
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {detail.solutions.map((s) => (
              <span
                key={s}
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  padding: "4px 10px",
                  borderRadius: 100,
                  background: "#F4F4F5",
                  border: `1px solid ${G.border}`,
                  color: G.text,
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div style={{ marginBottom: 24 }}>
          <p
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: G.textDim,
              marginBottom: 8,
            }}
          >
            Use Case
          </p>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, color: G.textSub }}>
            {detail.useCases.map((u) => (
              <li key={u}>{u}</li>
            ))}
          </ul>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          <Link
            href={detail.href}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 44,
              padding: "0 20px",
              borderRadius: 12,
              background: G.accent,
              color: "#fff",
              fontSize: 13,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            {detail.cta} →
          </Link>
          <Link
            href="/ax-kt"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 44,
              padding: "0 18px",
              borderRadius: 12,
              border: `1px solid ${G.border}`,
              color: G.textSub,
              fontSize: 13,
              textDecoration: "none",
            }}
          >
            닫기
          </Link>
        </div>
      </article>
    </div>
  );
}
