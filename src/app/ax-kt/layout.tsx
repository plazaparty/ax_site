import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./ax-kt.css";

export const metadata: Metadata = {
  title: "ai.kt.com | AX.KT Platform",
  description:
    "KT AX Platform — AI Consultant, AX 도입 탐색, Use Case, Insight (ax-kt-com 프로토타입 반영)",
};

export default function AxKtLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="min-h-dvh"
      style={{
        fontFamily:
          'system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans KR", "Apple SD Gothic Neo", sans-serif',
        background: "#FAFAFA",
        color: "#111827",
      }}
    >
      {children}
    </div>
  );
}
