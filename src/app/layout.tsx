import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import RootChrome from "@/components/layout/RootChrome";
import { ConsultModalProvider } from "@/context/ConsultModalContext";
import { CustomerProvider } from "@/context/CustomerContext";

/** 운영 기본 도메인 — Vercel Preview/Production에서는 env 또는 VERCEL_URL 사용 */
function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "https://ai.kt.com";
}
const siteUrl = resolveSiteUrl();
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
  title: "ai.kt.com | AX Platform Company",
  description:
    "고객 문제를 구조화하고 AX 전략·솔루션을 추천하는 KT AI Native Discovery Platform.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: site,
    siteName: "AX Platform Company",
    title: "ai.kt.com | AX Platform Company",
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
      <body className="min-h-dvh bg-white text-gray-900 antialiased">
        <CustomerProvider>
          <ConsultModalProvider>
            <RootChrome>{children}</RootChrome>
          </ConsultModalProvider>
        </CustomerProvider>
      </body>
    </html>
  );
}
