import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { printLanUrls } from "./lan-url.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const nextCli = path.join(root, "node_modules", "next", "dist", "bin", "next");

const env = {
  ...process.env,
  WATCHPACK_POLLING: "true",
};

/** 기본값: 터널 켜기(Wi‑Fi AP 격리·방화벽 우회). 끄려면 SKIP_MOBILE_TUNNEL=1 */
const useMobileTunnel = process.env.SKIP_MOBILE_TUNNEL !== "1";

let tunnelRef = null;

process.stderr.write(
  "\n(시작 중… 실제 포트는 곧 아래에 표시됩니다. 포트가 바뀌면 주소 안내도 자동으로 맞춰집니다)\n"
);
if (useMobileTunnel) {
  process.stderr.write(
    "※ 인터넷 터널 주소도 곧 표시됩니다. 끄려면 SKIP_MOBILE_TUNNEL=1 npm run dev\n\n"
  );
} else {
  process.stderr.write("\n");
}

/** stderr에만 찍어 Next stdout 로그에 묻히지 않게 함 */
const URL_STREAMS = ["err"];

/** 시작 직후: 대략 포트로 LAN IP만 먼저 보여줌 */
printLanUrls(process.env.PORT ?? "3000", "▼ 지금 바로 시도 (포트는 아래 Next와 다를 수 있음)", {
  streams: URL_STREAMS,
});

let detectedPort = process.env.PORT ?? null;
let repeatTimers = [];

function clearRepeats() {
  for (const t of repeatTimers) clearTimeout(t);
  repeatTimers = [];
}

function scheduleRepeats(port) {
  clearRepeats();
  printLanUrls(port, "▼ 모바일 접속 주소 (최종 포트 반영)", { streams: URL_STREAMS });
  repeatTimers.push(
    setTimeout(() => printLanUrls(port, "▼ 재안내", { streams: URL_STREAMS }), 6000),
    setTimeout(() => printLanUrls(port, "▼ 재안내", { streams: URL_STREAMS }), 18000)
  );
}

async function startMobileTunnel(port) {
  if (!useMobileTunnel) return;
  try {
    const localtunnel = (await import("localtunnel")).default;
    const tunnel = await localtunnel({ port: parseInt(port, 10) });
    tunnelRef = tunnel;
    process.stderr.write(
      `\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n  인터넷으로 모바일 접속 (같은 Wi‑Fi 불필요)\n  → ${tunnel.url}\n  ※ 외부에서 접근 가능합니다. 데모용으로만 사용하세요.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`
    );
    tunnel.on("error", (err) => {
      process.stderr.write(`localtunnel 오류: ${err.message}\n`);
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    process.stderr.write(
      `\nlocaltunnel을 시작하지 못했습니다 (LAN 주소만 사용): ${msg}\n`
    );
  }
}

function tryDetectPort(chunk) {
  if (detectedPort) return;
  const s = chunk.toString();
  const m =
    s.match(/localhost:(\d+)/) ||
    s.match(/127\.0\.0\.1:(\d+)/) ||
    s.match(/0\.0\.0\.0:(\d+)/);
  if (!m) return;
  detectedPort = m[1];
  process.env.PORT = detectedPort;
  scheduleRepeats(detectedPort);
  void startMobileTunnel(detectedPort);
}

const child = spawn(process.execPath, [nextCli, "dev", "--hostname", "0.0.0.0"], {
  cwd: root,
  env,
  stdio: ["inherit", "pipe", "pipe"],
});

child.stdout.on("data", (chunk) => {
  tryDetectPort(chunk);
  process.stdout.write(chunk);
});

child.stderr.on("data", (chunk) => {
  tryDetectPort(chunk);
  process.stderr.write(chunk);
});

repeatTimers.push(
  setTimeout(() => {
    if (!detectedPort) scheduleRepeats(process.env.PORT ?? "3000");
  }, 12000)
);

function shutdown(signal) {
  clearRepeats();
  if (tunnelRef) {
    try {
      tunnelRef.close();
    } catch {
      /* ignore */
    }
    tunnelRef = null;
  }
  if (child.pid && !child.killed) {
    child.kill(signal ?? "SIGTERM");
  }
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));

child.on("error", (err) => {
  shutdown();
  console.error(err);
  process.exit(1);
});

child.on("exit", (code, signal) => {
  clearRepeats();
  if (tunnelRef) {
    try {
      tunnelRef.close();
    } catch {
      /* ignore */
    }
    tunnelRef = null;
  }
  if (signal) process.kill(process.pid, signal);
  process.exit(code ?? 0);
});
