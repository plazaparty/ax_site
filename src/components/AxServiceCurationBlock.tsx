"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import IndustryMonoIcon from "@/components/icons/IndustryMonoIcon";
import ServiceMonoIcon from "@/components/icons/ServiceMonoIcon";
import { axServiceCuration } from "@/data/axServiceCuration";

const toneClass: Record<
  (typeof axServiceCuration)[number]["tone"],
  string
> = {
  slate: "border-slate-200 bg-slate-50/90",
  sky: "border-sky-100 bg-sky-50/80",
  violet: "border-violet-100 bg-violet-50/80",
  amber: "border-amber-100 bg-amber-50/80",
  emerald: "border-emerald-100 bg-emerald-50/80",
  rose: "border-rose-100 bg-rose-50/80",
};

export default function AxServiceCurationBlock() {
  const featured = axServiceCuration.find((x) => x.featured);
  const rest = axServiceCuration.filter((x) => !x.featured);

  return (
    <section className="mt-16 rounded-3xl border border-gray-100 bg-white p-6 shadow-lg md:p-10">
      <p className="text-xs font-semibold uppercase tracking-wider text-red-600">
        서비스 큐레이션
      </p>
      <h2 className="mt-2 text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">
        지금 주목할 KT AX 서비스
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-gray-600">
        메뉴 이동 대신, 대표 과제에 바로 연결되는 서비스를 카드 뉴스 형태로 모았습니다.
      </p>

      {featured ? (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Link
            href={featured.href}
            className={`group flex flex-col gap-6 overflow-hidden rounded-3xl border p-6 shadow-sm transition-all hover:shadow-md md:flex-row md:p-8 ${toneClass[featured.tone]}`}
          >
            <div className="flex shrink-0 items-center justify-center gap-4 rounded-2xl bg-white/80 px-6 py-8 shadow-inner md:flex-col md:py-10">
              <ServiceMonoIcon type={featured.icon} className="h-12 w-14 text-slate-900 md:h-14 md:w-16" />
              <div className="hidden h-px w-full bg-slate-200/80 md:block" />
              <IndustryMonoIcon
                industry={featured.industryVisual}
                className="h-10 w-12 text-slate-600 md:h-11 md:w-14"
              />
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                연관 산업
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                {featured.kicker}
              </span>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 group-hover:text-red-700 md:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
                {featured.dek}
              </p>
              <span className="mt-6 inline-flex text-sm font-semibold text-red-600">
                서비스 상세 보기 →
              </span>
            </div>
          </Link>
        </motion.div>
      ) : null}

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
          >
            <Link
              href={item.href}
              className={`flex h-full flex-col rounded-2xl border p-5 transition-all hover:shadow-md ${toneClass[item.tone]}`}
            >
              <div className="flex items-start justify-between gap-3">
                <ServiceMonoIcon type={item.icon} className="h-9 w-11 shrink-0 text-slate-900" />
                <div className="rounded-xl bg-white/70 p-1.5 shadow-sm">
                  <IndustryMonoIcon
                    industry={item.industryVisual}
                    className="h-7 w-9 text-slate-600"
                  />
                </div>
              </div>
              <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-red-600">
                {item.kicker}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{item.dek}</p>
              <span className="mt-4 text-xs font-semibold text-slate-700">더보기 →</span>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-dashed border-gray-200 bg-gray-50/80 px-4 py-5 text-center text-xs text-gray-500">
        전체 포트폴리오는{" "}
        <Link href="/ax-explore#ax-explore-axis-solution" className="font-semibold text-red-600 hover:underline">
          솔루션별 AX
        </Link>
        에서 확인하세요.
      </div>
    </section>
  );
}
