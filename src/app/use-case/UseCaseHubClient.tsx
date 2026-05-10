"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SitePageHero from "@/components/SitePageHero";
import { curatedUseCases, USE_CASE_INDUSTRY_BUCKETS } from "@/data/useCaseCurated";
import { stagesExplore } from "@/data/discoveryHub";
import { portalPanelTone } from "@/data/portalVisual";

const ordered = [...curatedUseCases].sort((a, b) => a.order - b.order);

type FilterDim = "industry" | "task" | "stage" | "solution";

const FILTER_TABS: { id: FilterDim; label: string }[] = [
  { id: "industry", label: "산업" },
  { id: "task", label: "업무" },
  { id: "stage", label: "도입단계" },
  { id: "solution", label: "솔루션" },
];

export default function UseCaseHubClient() {
  const { pageBg } = portalPanelTone.users;
  const [filterDim, setFilterDim] = useState<FilterDim>("industry");
  const [selected, setSelected] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const industryOptions = useMemo(() => [...USE_CASE_INDUSTRY_BUCKETS], []);
  const taskOptions = useMemo(() => [...new Set(ordered.flatMap((i) => i.tasks))].sort(), []);
  const solutionOptions = useMemo(
    () => [...new Set(ordered.flatMap((i) => i.solutions))].sort(),
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ordered.filter((item) => {
      if (q) {
        const hay = [
          item.title,
          item.dek,
          item.subtitle,
          item.tag,
          item.industryGroup,
          item.period,
          ...item.industries,
          ...item.tasks,
          ...item.solutions,
          stagesExplore.find((s) => s.slug === item.stageSlug)?.title ?? "",
        ]
          .join(" ")
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (!selected) return true;
      switch (filterDim) {
        case "industry":
          return item.industryGroup === selected;
        case "task":
          return item.tasks.includes(selected);
        case "stage":
          return item.stageSlug === selected;
        case "solution":
          return item.solutions.includes(selected);
        default:
          return true;
      }
    });
  }, [filterDim, query, selected]);

  const chipOptions =
    filterDim === "industry"
      ? industryOptions
      : filterDim === "task"
        ? taskOptions
        : filterDim === "stage"
          ? stagesExplore.map((s) => s.slug)
          : solutionOptions;

  function chipLabel(value: string) {
    if (filterDim === "stage") {
      return stagesExplore.find((s) => s.slug === value)?.title ?? value;
    }
    return value;
  }

  return (
    <div className={`${pageBg} pb-28 pt-10 md:pb-16`}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SitePageHero
          glyph="users"
          eyebrow="Use Case"
          title="실제 적용 사례와 KPI를 한 라이브러리로"
          description="산업·업무·도입단계·솔루션으로 좁히고, 검색어로 바로 찾을 수 있습니다."
        />

        <section className="mt-8 space-y-4 rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-sm md:p-6">
          <label className="block">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">검색</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="제목, 산업, 솔루션, KPI 등"
              className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-red-400"
            />
          </label>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">필터 축</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {FILTER_TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setFilterDim(t.id);
                    setSelected(null);
                  }}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                    filterDim === t.id
                      ? "border-gray-900 bg-gray-900 text-white"
                      : "border-gray-200 bg-white text-gray-700 hover:border-gray-400"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">값 선택</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {chipOptions.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setSelected((s) => (s === value ? null : value))}
                  className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold transition ${
                    selected === value
                      ? "border-gray-900 bg-gray-900 text-white"
                      : "border-gray-200 bg-white text-gray-700 hover:border-gray-400"
                  }`}
                >
                  {chipLabel(value)}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  setSelected(null);
                  setQuery("");
                }}
                className="rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-[11px] font-semibold text-red-800"
              >
                초기화
              </button>
            </div>
          </div>
        </section>

        <div className="mt-10 space-y-5">
          {filtered.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <Link
                href={item.href}
                className="group flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-gray-400 hover:shadow-md sm:flex-row sm:items-stretch"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 text-lg font-bold text-white shadow-md">
                  {item.order}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-red-50 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-red-700">
                      {item.tag}
                    </span>
                    <span className="text-xs font-medium text-gray-400">{item.subtitle}</span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[10px] font-semibold text-slate-700">
                      산업 {item.industryGroup}
                    </span>
                    <span className="rounded bg-gray-100 px-2 py-0.5 text-[10px] font-semibold text-gray-600">
                      {item.period}
                    </span>
                    <span className="rounded bg-gray-900 px-2 py-0.5 text-[10px] font-semibold text-white">
                      난이도 {item.difficulty}
                    </span>
                    <span className="rounded border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-900">
                      {stagesExplore.find((s) => s.slug === item.stageSlug)?.title ?? item.stageSlug}
                    </span>
                  </div>
                  <h2 className="mt-2 text-xl font-semibold tracking-tight text-gray-900 group-hover:text-red-800">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.dek}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.kpis.map((k) => (
                      <span
                        key={k}
                        className="rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-[10px] font-semibold text-gray-700"
                      >
                        KPI {k}
                      </span>
                    ))}
                    {item.solutions.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-red-100 bg-red-50/60 px-2 py-0.5 text-[10px] font-semibold text-red-900"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex shrink-0 items-center">
                  <span className="text-sm font-semibold text-gray-900">적용 방식 보기 →</span>
                </div>
              </Link>
            </motion.article>
          ))}
          {filtered.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center text-sm text-gray-600">
              조건에 맞는 사례가 없습니다. 필터나 검색어를 완화해 보세요.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
