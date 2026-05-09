"use client";

import { motion } from "framer-motion";

const steps = [
  { n: 1, title: "고객 환경 진단", sub: "조직·데이터·규제" },
  { n: 2, title: "산업·업무·성숙도", sub: "맥락 정렬" },
  { n: 3, title: "KT AX 매칭", sub: "조합 스코어링" },
  { n: 4, title: "실행 로드맵", sub: "PoC→확산" },
  { n: 5, title: "전문가·PoC", sub: "실사 연결" },
];

export default function DiscoveryFlowDiagram({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-8 ${className}`}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-red-300/90">AX Discovery Flow</p>
      <h3 className="mt-2 text-lg font-semibold text-white md:text-xl">한 번에 보는 의사결정 경로</h3>
      <div className="mt-8 overflow-x-auto pb-2">
        <div className="flex min-w-[640px] items-start gap-0 md:min-w-0 md:justify-between">
          {steps.map((s, i) => (
            <div key={s.n} className="flex flex-1 items-start">
              <div className="flex flex-1 flex-col items-center text-center">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-red-500/50 bg-gradient-to-br from-red-600 to-red-700 text-sm font-bold text-white shadow-lg shadow-red-900/40"
                >
                  {s.n}
                </motion.div>
                <p className="mt-3 text-xs font-semibold text-white md:text-sm">{s.title}</p>
                <p className="mt-1 text-[10px] text-white/45 md:text-[11px]">{s.sub}</p>
              </div>
              {i < steps.length - 1 ? (
                <div className="mx-1 mt-[22px] hidden h-px flex-1 bg-gradient-to-r from-white/25 to-white/5 md:block" aria-hidden />
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex md:hidden">
        <div className="h-1 flex-1 rounded-full bg-gradient-to-r from-red-500 via-amber-400 to-emerald-500/60" />
      </div>
    </div>
  );
}
