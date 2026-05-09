import os from "node:os";
import { execSync } from "node:child_process";

/** 링크로컬(자동 할당) — 가능하면 목록에서 뒤로 미룸 */
function isLinkLocal(ip) {
  return ip.startsWith("169.254.");
}

/** 사설망 우선순위 (낮을수록 앞) */
function privateRank(ip) {
  if (ip.startsWith("192.168.")) return 0;
  if (ip.startsWith("10.")) return 1;
  const m = ip.match(/^172\.(\d+)\./);
  if (m) {
    const n = parseInt(m[1], 10);
    if (n >= 16 && n <= 31) return 2;
  }
  if (isLinkLocal(ip)) return 99;
  return 50;
}

function sortLanIps(ips) {
  return [...ips].sort((a, b) => {
    const d = privateRank(a) - privateRank(b);
    if (d !== 0) return d;
    return a.localeCompare(b, undefined, { numeric: true });
  });
}

/**
 * @returns {string[]}
 */
export function getLanIPv4s() {
  const ips = [];
  const seen = new Set();

  function add(ip) {
    if (!ip || typeof ip !== "string") return;
    const t = ip.trim();
    if (!/^\d{1,3}(\.\d{1,3}){3}$/.test(t)) return;
    if (t.startsWith("127.")) return;
    if (seen.has(t)) return;
    seen.add(t);
    ips.push(t);
  }

  /** Node os — family 값이 숫자 4 / 문자열 IPv4 혼재 */
  function isV4(net) {
    if (!net) return false;
    if (net.family === "IPv4") return true;
    if (net.family === 4) return true;
    if (String(net.family) === "4") return true;
    return false;
  }

  /** 인터페이스 이름 우선순위 (Wi‑Fi·이더넷이 앞) */
  function ifaceScore(name) {
    const n = String(name).toLowerCase();
    if (/^en[0-9]+$/.test(n)) {
      const num = parseInt(n.slice(2), 10) || 0;
      return num;
    }
    if (n.includes("wi-fi") || n.includes("wifi") || n.includes("wlan")) return 200;
    if (n.includes("ethernet") || n.includes("eth")) return 300;
    if (n.startsWith("bridge")) return 900;
    return 500;
  }

  try {
    const entries = Object.entries(os.networkInterfaces()).sort(
      (a, b) => ifaceScore(a[0]) - ifaceScore(b[0])
    );
    for (const [, faces] of entries) {
      if (!faces) continue;
      for (const net of faces) {
        if (isV4(net) && !net.internal) {
          add(net.address);
        }
      }
    }
  } catch {
    /* ignore */
  }

  if (process.platform === "darwin") {
    try {
      const route = execSync(
        "route -n get default 2>/dev/null || route get default 2>/dev/null",
        {
          encoding: "utf8",
          stdio: ["ignore", "pipe", "ignore"],
          maxBuffer: 256 * 1024,
        }
      );
      const m = route.match(/interface:\s*(\S+)/);
      if (m) {
        try {
          const out = execSync(`ipconfig getifaddr ${m[1]}`, {
            encoding: "utf8",
            stdio: ["ignore", "pipe", "ignore"],
          }).trim();
          add(out);
        } catch {
          /* ignore */
        }
      }
    } catch {
      /* ignore */
    }

    for (const iface of [
      "en0",
      "en1",
      "en2",
      "en3",
      "en4",
      "en5",
      "en6",
      "en7",
      "en8",
      "en9",
      "en10",
      "en11",
      "bridge100",
      "bridge0",
    ]) {
      try {
        const out = execSync(`ipconfig getifaddr ${iface}`, {
          encoding: "utf8",
          stdio: ["ignore", "pipe", "ignore"],
        }).trim();
        add(out);
      } catch {
        /* ignore */
      }
    }

    /** ifconfig: `inet x.x.x.x` 다양한 뒤따르는 토큰 허용 */
    try {
      const out = execSync("LC_ALL=C ifconfig 2>/dev/null", {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
        maxBuffer: 2 * 1024 * 1024,
      });
      const re = /^\s*inet (\d{1,3}(?:\.\d{1,3}){3})\b/gm;
      let mm;
      while ((mm = re.exec(out)) !== null) {
        add(mm[1]);
      }
    } catch {
      /* ignore */
    }

    /** macOS: 기본 경로에서 src 주소 (일부 환경) */
    try {
      const out = execSync("route -n get default 2>/dev/null", {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
        maxBuffer: 64 * 1024,
      });
      const sm = out.match(/source:\s*(\d{1,3}(?:\.\d{1,3}){3})/);
      if (sm) add(sm[1]);
    } catch {
      /* ignore */
    }
  }

  if (ips.length === 0 && process.platform === "linux") {
    try {
      const out = execSync("hostname -I", {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      })
        .trim()
        .split(/\s+/)[0];
      add(out);
    } catch {
      /* ignore */
    }
    try {
      const out = execSync("ip -4 route get 1.1.1.1 2>/dev/null", {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
        maxBuffer: 32 * 1024,
      });
      const m = out.match(/\bsrc (\d{1,3}(?:\.\d{1,3}){3})\b/);
      if (m) add(m[1]);
    } catch {
      /* ignore */
    }
  }

  if (process.platform === "win32") {
    try {
      const out = execSync(
        'powershell -NoProfile -Command "Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.IPAddress -notlike \'127.*\' -and $_.PrefixOrigin -ne \'WellKnown\' } | Select-Object -ExpandProperty IPAddress"',
        { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"], maxBuffer: 256 * 1024 }
      );
      for (const line of out.split(/\r?\n/)) add(line);
    } catch {
      /* ignore */
    }
  }

  const sorted = sortLanIps(ips);
  /** 169.254만 있을 때는 그대로 반환, 그 외에는 링크로컬을 뒤로 */
  const nonLink = sorted.filter((ip) => !isLinkLocal(ip));
  if (nonLink.length > 0) return nonLink;
  return sorted;
}

/**
 * @param {string} [port]
 * @param {string} [note]
 * @param {{ streams?: ("out" | "err")[] }} [opts]
 */
export function printLanUrls(port = process.env.PORT ?? "3000", note = "", opts = {}) {
  const streams = opts.streams ?? ["err"];
  const ips = getLanIPv4s();
  const p = String(port);

  let block = "\n";
  if (note) block += `${note}\n`;
  block += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
  block += "  같은 Wi‑Fi 모바일 접속 (PC와 동일 SSID)\n";
  block += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";

  if (ips.length === 0) {
    block += `  (LAN IPv4를 자동으로 찾지 못했습니다 — 아래로 IP 확인 후)\n`;
    block += `  http://<PC의 IPv4>:${p}\n\n`;
    if (process.platform === "darwin") {
      block += "  macOS에서 IP 확인:\n";
      block += "    ipconfig getifaddr en0\n";
      block += "    또는:  ifconfig | grep 'inet '\n";
    } else if (process.platform === "linux") {
      block += "  Linux:  hostname -I   또는   ip -4 addr\n";
    } else if (process.platform === "win32") {
      block += "  Windows:  ipconfig  (무선 LAN 어댑터 IPv4)\n";
    }
    block += "\n  설정 앱: Wi‑Fi → 세부 정보 → IPv4 주소\n";
  } else {
    for (const ip of ips) {
      block += `  → http://${ip}:${p}\n`;
    }
    block += `\n  모바일 브라우저 주소창에 위 URL을 그대로 입력하세요.\n`;
    block += `  (포트는 터미널의 Local: http://localhost:XXXX 와 동일해야 합니다)\n`;
    block += "  접속 안 될 때: PC 방화벽에서 Node/Terminal 허용, VPN 일시 해제\n";
    if (process.platform === "darwin") {
      block +=
        "  macOS: 시스템 설정 → 개인정보 보호 및 보안 → 로컬 네트워크에서 터미널/IDE 허용\n";
    }
  }
  block += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";

  for (const s of streams) {
    if (s === "err") process.stderr.write(block);
    else process.stdout.write(block);
  }
}
