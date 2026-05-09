"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import GlobalPageViz from "@/components/GlobalPageViz";

export default function MainShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideFloatingBar = pathname === "/ax-consulting";

  return (
    <main
      className={
        hideFloatingBar
          ? ""
          : "pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-[calc(5.25rem+env(safe-area-inset-bottom))]"
      }
    >
      {children}
      <GlobalPageViz />
    </main>
  );
}
