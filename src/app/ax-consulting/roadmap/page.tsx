"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { roadmapPhases } from "@/lib/buildRecommendations";
import { useConsultingWizardStore } from "@/store/consultingWizardStore";

export default function ConsultingRoadmapPage() {
  const router = useRouter();
  const { recommendations, axLevel, industry, consultingMeta, reset } =
    useConsultingWizardStore();

  useEffect(() => {
    if (!recommendations.length) router.replace("/ax-consulting");
  }, [recommendations.length, router]);

  if (!recommendations.length) return null;

  const phases = roadmapPhases({ axLevel, industry });

  return (
    <div className="min-h-[100dvh] bg-white pb-28 pt-8 md:pb-12">
      <div className="mx-auto max-w-lg px-4 md:max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-red-600">
          AX 로드맵
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">
          단계별 실행 타임라인
        </h1>
        <p className="mt-3 text-sm text-gray-600">
          {consultingMeta?.maturity ? (
            <>
              현재 진단 국면은 <strong className="font-semibold text-gray-800">{consultingMeta.maturity.stageLabel}</strong>에 가깝습니다.{" "}
            </>
          ) : null}
          추천 결과를 실행 가능한 순서로 나눈 예시이며, 실제 일정은 규제·데이터
          준비도에 따라 조정됩니다.
        </p>

        <div className="relative mt-12 space-y-0 pl-2">
          <div className="absolute bottom-2 left-[11px] top-2 w-px bg-gradient-to-b from-red-200 via-gray-200 to-transparent" />
          {phases.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
              className="relative pb-10 pl-10"
            >
              <span className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-red-200 bg-white text-[11px] font-bold text-red-600 shadow-sm">
                {i + 1}
              </span>
              <div className="rounded-3xl border border-gray-100 bg-gray-50 p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="text-base font-semibold text-gray-900">
                    {p.title}
                  </h2>
                  <span className="text-xs font-semibold text-red-600">
                    {p.weeks}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {p.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/ax-consulting/result"
            className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-2xl border border-gray-200 text-sm font-semibold text-gray-900 hover:bg-gray-50"
          >
            추천 결과로 돌아가기
          </Link>
          <button
            type="button"
            onClick={() => {
              reset();
              router.push("/ax-consulting");
            }}
            className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-2xl bg-gray-900 text-sm font-semibold text-white hover:bg-gray-800"
          >
            새로 진단하기
          </button>
        </div>
      </div>
    </div>
  );
}
