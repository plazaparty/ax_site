"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import type { EnterpriseKpi } from "@/data/enterprisePillar/types";

function formatValue(v: number, decimals: number) {
  if (decimals <= 0) return Math.round(v).toString();
  return v.toFixed(decimals);
}

function KpiCell({ kpi, animate }: { kpi: EnterpriseKpi; animate: boolean }) {
  const decimals = kpi.decimals ?? 0;
  const [shown, setShown] = useState(() => (animate ? 0 : kpi.value));
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    if (!animate) {
      setShown(kpi.value);
      return;
    }
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    const from = 0;
    const to = kpi.value;
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      setShown(from + (to - from) * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, animate, kpi.value]);

  const text = useMemo(() => formatValue(shown, decimals), [shown, decimals]);

  return (
    <div ref={ref} className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">{kpi.label}</p>
      <p className="mt-2 font-mono text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
        {text}
        <span className="text-lg font-semibold text-red-600 md:text-xl">{kpi.suffix}</span>
      </p>
    </div>
  );
}

export default function AnimatedKpiStrip({ kpis, reducedMotion }: { kpis: EnterpriseKpi[]; reducedMotion: boolean }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
      {kpis.map((k) => (
        <motion.div
          key={k.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <KpiCell kpi={k} animate={!reducedMotion} />
        </motion.div>
      ))}
    </div>
  );
}
