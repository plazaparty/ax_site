"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import MainShell from "@/components/MainShell";
import FloatingCTA from "@/components/FloatingCTA";

/** `/ax-kt` — ax-kt-com.jsx 기반 독립 UI (기본 헤더·플로팅 CTA 없음) */
export default function RootChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAxKt = pathname === "/ax-kt" || pathname.startsWith("/ax-kt/");

  if (isAxKt) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <MainShell>{children}</MainShell>
      <FloatingCTA />
    </>
  );
}
