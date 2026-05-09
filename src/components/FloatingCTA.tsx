"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useConsultModal } from "@/context/ConsultModalContext";
import { buildConsultMailto, summarizeConsultingSession } from "@/lib/axHandoff";

type PrimaryCta = { href: string; external?: boolean; label: string };

type SecondaryCta =
  | { mode: "link"; href: string; external?: boolean; label: string }
  | { mode: "modal"; label: string };

function contextualCtas(pathname: string): { primary: PrimaryCta; secondary: SecondaryCta } {
  if (pathname.startsWith("/use-case/success/")) {
    const slug = pathname.split("/").pop() ?? "";
    return {
      primary: {
        href: buildConsultMailto([`[Use Case] ${slug}`, "이 사례와 유사한 PoC·실행 방안 논의를 요청합니다."]),
        external: true,
        label: "이 사례로 상담하기",
      },
      secondary: { mode: "link", href: "/ax-consulting", label: "AX 컨설팅" },
    };
  }
  if (pathname.startsWith("/ax-explore/solution/")) {
    const slug = pathname.split("/").pop() ?? "";
    return {
      primary: {
        href: buildConsultMailto([`[솔루션] ${slug}`, "PoC 범위·연동 구조 논의 요청"]),
        external: true,
        label: "이 솔루션 PoC 문의",
      },
      secondary: { mode: "link", href: "/ax-consulting", label: "AX 컨설팅" },
    };
  }
  if (pathname === "/ax-consulting/result") {
    return {
      primary: {
        href: "/ax-consulting/brief",
        label: "추천 리포트 받기",
      },
      secondary: { mode: "modal", label: "AX 전문가와 상담" },
    };
  }
  return {
    primary: { href: "/ax-consulting", label: "AX 컨설팅" },
    secondary: { mode: "modal", label: "AX 전문가와 상담" },
  };
}

export default function FloatingCTA() {
  const pathname = usePathname();
  const { open: openConsultModal } = useConsultModal();

  if (pathname === "/ax-consulting") return null;

  const { primary, secondary } = contextualCtas(pathname);

  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40"
    >
      <div className="pointer-events-auto border-t border-white/10 bg-gray-950/92 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md md:px-6 md:py-3.5">
        <div className="mx-auto flex max-w-2xl gap-2 md:gap-3">
          {primary.external ? (
            <a
              href={primary.href}
              className="flex-1 rounded-2xl bg-red-500 px-3 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-red-500/25"
            >
              {primary.label}
            </a>
          ) : (
            <Link
              prefetch={false}
              href={primary.href}
              className="flex-1 rounded-2xl bg-red-500 px-3 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-red-500/25"
            >
              {primary.label}
            </Link>
          )}
          {secondary.mode === "modal" ? (
            <button
              type="button"
              onClick={openConsultModal}
              className="flex-1 rounded-2xl border border-white/15 bg-white/10 px-3 py-3 text-center text-sm font-semibold text-white"
            >
              {secondary.label}
            </button>
          ) : secondary.external ? (
            <a
              href={secondary.href}
              className="flex-1 rounded-2xl border border-white/15 bg-white/10 px-3 py-3 text-center text-sm font-semibold text-white"
            >
              {secondary.label}
            </a>
          ) : (
            <Link
              prefetch={false}
              href={secondary.href}
              className="flex-1 rounded-2xl border border-white/15 bg-white/10 px-3 py-3 text-center text-sm font-semibold text-white"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
