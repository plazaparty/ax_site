import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import MainShell from "@/components/MainShell";
import FloatingCTA from "@/components/FloatingCTA";
import { ConsultModalProvider } from "@/context/ConsultModalContext";
import { CustomerProvider } from "@/context/CustomerContext";

/** 운영 기본 도메인 — Vercel 등에서는 `NEXT_PUBLIC_SITE_URL`로 덮어쓰기 */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ai.kt.com";
const site = new URL(siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl);

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export const metadata: Metadata = {
  metadataBase: site,
  title: "ai.kt.com | AX Discovery Platform",
  description:
    "고객 문제를 구조화하고 AX 전략·솔루션을 추천하는 KT AI Native Discovery Platform.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: site,
    siteName: "KT AX Discovery Platform",
    title: "ai.kt.com | AX Discovery Platform",
    description:
      "고객 문제를 구조화하고 AX 전략·솔루션을 추천하는 KT AI Native Discovery Platform.",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <CustomerProvider>
          <ConsultModalProvider>
            <Header />
            <MainShell>{children}</MainShell>
            <FloatingCTA />
          </ConsultModalProvider>
        </CustomerProvider>
      </body>
    </html>
  );
}
