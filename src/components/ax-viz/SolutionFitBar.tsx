"use client";

import { motion } from "framer-motion";

export default function SolutionFitBar({
  name,
  percent,
  delay = 0,
}: {
  name: string;
  percent: number;
  delay?: number;
}) {
  const w = Math.min(100, Math.max(0, percent));
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-xs font-semibold text-gray-800">
        <span className="truncate pr-2">{name}</span>
        <span className="shrink-0 tabular-nums text-red-700">{w}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-gray-200/90">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-gray-800 via-red-600 to-red-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${w}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
