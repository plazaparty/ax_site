// @ts-nocheck
"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { G } from "./theme";
import { exploreDetailPath, exploreTabs, getExploreList, type ExploreTabId } from "./exploreContent";

function Tag({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        background: G.accentSoft,
        border: `1px solid rgba(232,0,45,0.15)`,
        borderRadius: 100,
        padding: "3px 10px",
        fontSize: 11,
        fontWeight: 600,
        color: G.accent,
        letterSpacing: "0.06em",
      }}
    >
      {children}
    </span>
  );
}

export default function AdoptionPage() {
  const [activeTab, setActiveTab] = useState<ExploreTabId>("industry");

  const list = getExploreList(activeTab);

  const onTab = (id: ExploreTabId) => {
    setActiveTab(id);
  };

  return (
    <div className="ax-kt-shell">
      <div style={{ marginBottom: 28 }}>
        <Tag>AX 탐색</Tag>
        <h1
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.5rem, 5vw, 2rem)",
            color: G.text,
            marginTop: 12,
            marginBottom: 8,
            lineHeight: 1.2,
          }}
        >
          산업·업무·단계·솔루션을 한 화면에서
        </h1>
        <p style={{ fontSize: 14, color: G.textSub, lineHeight: 1.6 }}>
          각 카드를 누르면 AX.KT 상세 페이지로 이동합니다. 메인 AX 탐색의 풍부한 콘텐츠는 상세 화면의 버튼으로 연결됩니다.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: 6,
          marginBottom: 20,
          overflowX: "auto",
          paddingBottom: 4,
          WebkitOverflowScrolling: "touch",
        }}
      >
        {exploreTabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => onTab(t.id)}
            style={{
              flexShrink: 0,
              background: activeTab === t.id ? G.text : G.surface,
              border: `1px solid ${activeTab === t.id ? G.text : G.border}`,
              borderRadius: 10,
              padding: "8px 16px",
              fontSize: 13,
              fontWeight: activeTab === t.id ? 700 : 500,
              color: activeTab === t.id ? "#fff" : G.textSub,
              cursor: "pointer",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="ax-kt-grid-cards" style={{ marginBottom: 20 }}>
        {list.map((item) => (
          <Link
            key={item.id}
            href={exploreDetailPath(activeTab, item.id)}
            style={{
              textAlign: "left",
              background: G.card,
              border: `1px solid ${G.border}`,
              borderRadius: 16,
              padding: 18,
              cursor: "pointer",
              transition: "border-color 0.15s, box-shadow 0.15s",
              textDecoration: "none",
              color: "inherit",
              display: "block",
            }}
          >
            <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
            <div
              style={{
                fontWeight: 700,
                fontSize: 15,
                color: G.text,
                marginBottom: 6,
              }}
            >
              {item.title}
            </div>
            <div style={{ fontSize: 12, color: G.textSub, lineHeight: 1.55 }}>{item.desc}</div>
            <div style={{ marginTop: 12, fontSize: 12, fontWeight: 600, color: G.accent }}>상세 페이지 →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
