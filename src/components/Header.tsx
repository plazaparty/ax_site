"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { primaryNav } from "@/data/siteNav";
import KtLogo from "@/components/branding/KtLogo";

export default function Header() {
  const pathname = usePathname();
  const [sheet, setSheet] = useState(false);
  const [megaOpen, setMegaOpen] = useState<string | null>(null);
  const [portalReady, setPortalReady] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    setMegaOpen(null);
  }, [pathname]);

  useEffect(() => {
    if (!megaOpen) return;
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMegaOpen(null);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [megaOpen]);

  useEffect(() => {
    if (!sheet) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSheet(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [sheet]);

  useEffect(() => {
    if (!megaOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMegaOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [megaOpen]);

  useEffect(() => {
    if (sheet) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sheet]);

  const mobileSheet =
    portalReady &&
    createPortal(
      <AnimatePresence>
        {sheet ? (
          <motion.div
            key="mobile-nav-root"
            className="fixed inset-0 z-[200] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label="메뉴 닫기"
              className="absolute inset-0 bg-black/45"
              onClick={() => setSheet(false)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="주 메뉴"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 360, damping: 32 }}
              className="absolute inset-x-0 bottom-0 max-h-[88dvh] overflow-y-auto rounded-t-3xl border border-gray-200 bg-white pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mx-auto w-12 rounded-full bg-gray-200 py-1" />
              <p className="mt-5 px-1 text-center text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                메뉴
              </p>
              <nav className="mt-3 px-2 pb-6" aria-label="주요 메뉴">
                <ul className="divide-y divide-gray-100 rounded-2xl border border-gray-200 bg-white">
                  {primaryNav.map((item) => {
                    const active =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname === item.href || pathname.startsWith(`${item.href}/`);
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`flex min-h-[52px] items-center justify-between px-4 py-3.5 text-[15px] font-semibold ${
                            active ? "text-red-700" : "text-gray-900"
                          }`}
                          onClick={() => setSheet(false)}
                        >
                          {item.label}
                          <span className="text-sm text-gray-300" aria-hidden>
                            →
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>,
      document.body
    );

  return (
    <header className="sticky top-0 z-50 overflow-visible border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 overflow-visible px-4 py-3 md:px-6">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
          onClick={() => setSheet(false)}
          aria-label="홈 — AX Platform Company"
        >
          <KtLogo className="shrink-0" />
          <div className="min-w-0 leading-tight">
            <div className="truncate text-sm font-semibold tracking-tight text-gray-900">
              AX Platform Company
            </div>
            <div className="truncate text-[11px] font-medium text-gray-500">
              AI Strategy Consultant
            </div>
          </div>
        </Link>

        <nav ref={navRef} className="hidden items-center gap-1 lg:flex">
          {primaryNav.slice(1).map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            const hasMega = !!item.megaLinks?.length;
            const open = megaOpen === item.href;
            return (
              <div key={item.href} className="relative flex items-stretch">
                <Link
                  href={item.href}
                  className={`inline-flex items-center rounded-xl px-3 py-2 text-[13px] font-semibold transition-colors ${
                    active
                      ? "bg-gray-900 text-white"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
                {hasMega ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-haspopup="true"
                      aria-label={`${item.label} 하위 메뉴`}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setMegaOpen((v) => (v === item.href ? null : item.href));
                      }}
                      className={`ml-0.5 inline-flex items-center rounded-lg px-1.5 py-2 transition-colors ${
                        open ? "bg-gray-100 text-gray-900" : "text-gray-400 hover:bg-gray-50 hover:text-gray-800"
                      }`}
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    {open ? (
                      <div className="absolute left-0 top-full z-[80] mt-1 w-[min(22rem,calc(100vw-2rem))] rounded-2xl border border-gray-200 bg-white p-4 shadow-xl shadow-gray-900/10">
                        <p className="text-xs font-semibold text-gray-900">{item.label}</p>
                        <p className="mt-1 text-[11px] leading-relaxed text-gray-500">{item.description}</p>
                        <ul className="mt-3 space-y-1 border-t border-gray-100 pt-3">
                          {item.megaLinks!.map((c) => (
                            <li key={c.href + c.label}>
                              <Link
                                href={c.href}
                                className="flex flex-col rounded-xl px-2 py-2 hover:bg-gray-50"
                                onClick={() => setMegaOpen(null)}
                              >
                                <span className="text-[13px] font-semibold text-gray-900">{c.label}</span>
                                <span className="text-[11px] text-gray-500">{c.hint}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex rounded-xl p-2 text-gray-700 hover:bg-gray-50 lg:hidden"
            aria-expanded={sheet}
            aria-label="메뉴"
            onClick={() => setSheet((v) => !v)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {sheet ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileSheet}
    </header>
  );
}
