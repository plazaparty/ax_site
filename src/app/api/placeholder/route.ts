function escapeXml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function toneToGradient(tone: string) {
  switch (tone) {
    case "red":
      return ["#ffeded", "#ffe7f1", "#eef2ff"];
    case "blue":
      return ["#e8f3ff", "#eef2ff", "#f3f4ff"];
    case "green":
      return ["#eafff3", "#ecfeff", "#f0f9ff"];
    case "dark":
      return ["#0b1220", "#111827", "#0f172a"];
    default:
      return ["#f5f6f8", "#eef2ff", "#ffffff"];
  }
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const label = escapeXml(url.searchParams.get("label") ?? "KT AX");
  const sub = escapeXml(url.searchParams.get("sub") ?? "Demo");
  const tone = url.searchParams.get("tone") ?? "default";

  const [c1, c2, c3] = toneToGradient(tone);

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="0.55" stop-color="${c2}"/>
      <stop offset="1" stop-color="${c3}"/>
    </linearGradient>
    <radialGradient id="orb" cx="72%" cy="34%" r="55%">
      <stop offset="0" stop-color="#ef4444" stop-opacity="0.22"/>
      <stop offset="0.45" stop-color="#8b5cf6" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#3b82f6" stop-opacity="0.10"/>
    </radialGradient>
    <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="24"/>
    </filter>
  </defs>

  <rect width="1600" height="1000" fill="url(#g)"/>
  <circle cx="1180" cy="320" r="360" fill="url(#orb)" filter="url(#blur)"/>

  <g opacity="0.9">
    <path d="M140 770 C 420 630, 640 920, 960 760 S 1320 630, 1480 740" fill="none" stroke="#111827" stroke-opacity="0.08" stroke-width="8"/>
    <path d="M140 820 C 420 680, 640 970, 960 810 S 1320 680, 1480 790" fill="none" stroke="#111827" stroke-opacity="0.06" stroke-width="8"/>
  </g>

  <g font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial">
    <text x="96" y="120" font-size="26" fill="#ef4444" font-weight="700">KT AX</text>
    <text x="96" y="172" font-size="56" fill="#111827" font-weight="800">${label}</text>
    <text x="96" y="220" font-size="22" fill="#374151" font-weight="600">${sub}</text>
    <text x="96" y="920" font-size="18" fill="#6b7280" font-weight="600">placeholder image</text>
  </g>
</svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

