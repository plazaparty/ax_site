"use client";

import { motion } from "framer-motion";

export interface RoadmapPhase {
  title: string;
  weeks: string;
  detail: string;
}

export default function RoadmapTimeline({ phases }: { phases: RoadmapPhase[] }) {
  return (
    <div className="relative">
      <div className="absolute bottom-3 left-[15px] top-3 w-px bg-gradient-to-b from-red-300 via-gray-200 to-transparent md:left-[19px]" />
      <ul className="space-y-0">
        {phases.map((p, i) => (
          <motion.li
            key={p.title}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="relative flex gap-4 pb-8 pl-10 last:pb-0"
          >
            <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-[11px] font-bold text-red-700 shadow-sm">
              {i + 1}
            </span>
            <div className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-3 md:px-5 md:py-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="text-sm font-semibold text-gray-900 md:text-base">{p.title}</h4>
                <span className="text-[11px] font-bold text-red-700">{p.weeks}</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-gray-600 md:text-sm">{p.detail}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
