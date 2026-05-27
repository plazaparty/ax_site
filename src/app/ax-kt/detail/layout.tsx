import Link from "next/link";
import type { ReactNode } from "react";
import KtLogo from "@/components/branding/KtLogo";

export default function AxKtDetailLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-[#FAFAFA] text-gray-900">
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-5 py-3">
          <Link href="/ax-kt" className="flex items-center gap-2.5">
            <KtLogo className="!h-8 !max-h-8" />
            <span className="text-sm font-semibold text-gray-900">AX.KT</span>
          </Link>
          <Link
            href="/ax-kt"
            className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-50"
          >
            ← 목록으로
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-5 py-8">{children}</main>
    </div>
  );
}
