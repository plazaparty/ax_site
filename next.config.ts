import type { NextConfig } from "next";

/** 사설망(LAN) IPv4 — 모바일에서 IP로 접속 시 /_next 리소스 차단 방지 */
const privateLanOrigins = [
  "192.168.*.*",
  "10.*.*.*",
  ...Array.from({ length: 16 }, (_, i) => `172.${16 + i}.*.*`),
  "*.loca.lt",
];

const nextConfig: NextConfig = {
  allowedDevOrigins: privateLanOrigins,
  /** 하단 CTA 등과 겹치는 Next 개발용 라우트 표시(작은 N) 비활성화 */
  devIndicators: false,

  async redirects() {
    return [
      {
        source: "/ax-kt/view/:axis/:slug",
        destination: "/ax-kt/detail/explore/:axis/:slug",
        permanent: false,
      },
      { source: "/consultant", destination: "/ax-consulting", permanent: false },
      /** 브라우저 기본 요청 `/favicon.ico` — `app/icon.tsx`는 `/icon`에 매핑됨 */
      { source: "/favicon.ico", destination: "/icon", permanent: false },
    ];
  },
};

export default nextConfig;
