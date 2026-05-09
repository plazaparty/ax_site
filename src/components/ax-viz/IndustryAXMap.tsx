"use client";

import Link from "next/link";
import type { ExploreCardMeta } from "@/data/axPlatform/axExploreMap";

export default function IndustryAXMap({
  cards,
  activeAxis,
}: {
  cards: ExploreCardMeta[];
  activeAxis: ExploreCardMeta["axis"] | "all";
}) {
  const filtered = activeAxis === "all" ? cards : cards.filter((c) => c.axis === activeAxis);
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {filtered.map((c) => (
        <Link
          key={c.id}
          href={c.href}
          className="group flex flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-gray-400 hover:shadow-md"
        >
          <span className="text-[10px] font-bold uppercase tracking-wider text-red-700">{c.axis}</span>
          <p className="mt-2 text-sm font-semibold text-gray-900 group-hover:text-red-800">{c.title}</p>
          <dl className="mt-3 space-y-1.5 text-[11px] text-gray-600">
            <div>
              <dt className="font-semibold text-gray-500">Pain</dt>
              <dd>{c.painPoint}</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-500">추천</dt>
              <dd>{c.recommendedSolution}</dd>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="rounded bg-gray-100 px-2 py-0.5 text-[10px] font-semibold text-gray-700">KPI {c.expectedKpi}</span>
              <span className="rounded bg-gray-900 px-2 py-0.5 text-[10px] font-semibold text-white">난이도 {c.difficulty}</span>
            </div>
          </dl>
        </Link>
      ))}
    </div>
  );
}
