"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import DiscoveryFlowDiagram from "@/components/ax-viz/DiscoveryFlowDiagram";
import DiscoveryCard from "@/components/DiscoveryCard";
import PortalMonoIcon from "@/components/icons/PortalMonoIcon";
import { homeProofMetrics, whyKtAxPillars } from "@/data/axPlatform/homePlatform";
import { axExploreHubTiles, featuredUseCases, insightHighlights, scenarioCards } from "@/data/homeDiscovery";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      <section className="relative overflow-hidden px-4 pb-16 pt-14 md:pb-20 md:pt-20">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-red-500/35 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-400/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-red-300"
          >
            AX Platform Company
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-5 text-balance text-3xl font-semibold leading-snug tracking-tight md:text-[40px] md:leading-tight"
          >
            고객의 니즈를 이해하고
            <br className="sm:hidden" /> 고객의 상황에 맞는 최적의 솔루션을 제안합니다
          </motion.h1>
            <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/75 md:text-lg"
          >
            KT AX 컨설팅은 귀사의 과제와 제약을 먼저 정리한 뒤, 실행 가능한 조합과 로드맵으로 연결합니다.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.14 }}
            className="mt-8 flex justify-center"
          >
            <div className="rounded-3xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
              <PortalMonoIcon glyph="spark" className="h-14 w-[4.5rem] text-red-200/95" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mt-10 flex justify-center"
          >
            <Link
              href="/ax-consulting"
              className="inline-flex min-h-[56px] min-w-[240px] items-center justify-center rounded-2xl bg-red-600 px-8 text-base font-semibold text-white shadow-xl shadow-red-900/30 hover:bg-red-500"
            >
              AX 컨설팅 시작
            </Link>
          </motion.div>
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl px-2 md:mt-16">
          <DiscoveryFlowDiagram />
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-900/80 px-4 py-14 md:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-red-300/90">Why KT AX</p>
          <h2 className="mt-3 text-center text-2xl font-semibold md:text-3xl">왜 KT AX인가</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {whyKtAxPillars.map((p) => (
              <div key={p.id} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="text-sm font-semibold text-white">{p.title}</h3>
                <ul className="mt-3 space-y-2 text-[13px] leading-relaxed text-white/65">
                  {p.points.map((x) => (
                    <li key={x}>· {x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {homeProofMetrics.map((m) => (
              <div key={m.id} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-5 text-center">
                <p className="text-2xl font-semibold tabular-nums text-white md:text-3xl">{m.value}</p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-white/50">{m.label}</p>
                <p className="mt-2 text-[10px] leading-snug text-white/40">{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-t-[32px] bg-gray-50 px-4 pb-16 pt-12 text-gray-900 md:px-6 md:pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-red-600">AX 탐색</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">내 상황에 맞는 과제 찾기</h2>
            <p className="mt-2 text-sm text-gray-600 md:text-base">4축 AX Map과 연결된 진입점입니다.</p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {axExploreHubTiles.map((c) => (
              <DiscoveryCard key={c.title} href={c.href} title={c.title} description={c.hint} />
            ))}
          </div>

          <div className="mt-16 max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-red-600">시나리오</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">대표 AX 시나리오</h2>
            <p className="mt-2 text-sm text-gray-600">업무 관점에서 빠르게 구조화할 수 있는 전형 과제입니다.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {scenarioCards.map((c) => (
              <DiscoveryCard key={c.title} href={c.href} title={c.title} />
            ))}
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-red-600">Use Case</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">실제 적용 사례</h3>
              <ul className="mt-6 grid max-h-[min(70vh,52rem)] gap-3 overflow-y-auto pr-1 sm:grid-cols-2 sm:max-h-none sm:overflow-visible xl:grid-cols-3">
                {featuredUseCases.map((u) => (
                  <li key={u.href}>
                    <Link
                      href={u.href}
                      className="group flex items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-4 transition-colors hover:border-gray-300 hover:bg-white"
                    >
                      <div>
                        <p className="font-semibold text-gray-900 group-hover:text-red-800">{u.title}</p>
                        <p className="mt-1 text-sm text-gray-600">{u.metric}</p>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">적용 방식 보기</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-900 bg-gray-900 p-8 text-white shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-red-300">인사이트</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">전략 신호</h3>
              <ul className="mt-6 grid max-h-[min(72vh,56rem)] gap-3 overflow-y-auto pr-1 sm:max-h-none sm:grid-cols-2 sm:overflow-visible lg:grid-cols-2 xl:grid-cols-3">
                {insightHighlights.map((it) => (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 transition-colors hover:border-red-300/40 hover:bg-white/[0.07]"
                    >
                      <span className="text-[11px] font-bold uppercase tracking-wider text-red-300">{it.tag}</span>
                      <span className="mt-2 font-semibold leading-snug">{it.title}</span>
                      <span className="mt-3 text-sm font-semibold text-white/70">이동 →</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/insights-hub"
                className="mt-8 inline-flex text-sm font-semibold text-white underline decoration-white/25 underline-offset-4 hover:text-red-200"
              >
                인사이트 허브로 이동
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
