"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import { axValueItems } from "@/data/axValue";

const valueHighlights = [
  {
    title: "End-to-End AX 전 주기",
    description:
      "AI 인프라 → 클라우드 → 모델 → Data for AI → Agent → 운영 최적화까지 하나의 구조로 연결합니다.",
  },
  {
    title: "Managed AX & AX CoE",
    description:
      "조직 차원의 운영 체계와 CoE 관점으로 도입·확산·고도화를 지속 가능하게 만듭니다.",
  },
  {
    title: "산업별 Agent 확장",
    description:
      "금융·제조·유통 등 산업별 Agent로 ‘업무 단위’의 실행 시나리오를 빠르게 구체화합니다.",
  },
  {
    title: "Data for AI 실행력",
    description:
      "RAG/Enterprise Search 기반으로 내부 지식을 연결해, 현장에서 답이 나오도록 설계합니다.",
  },
  {
    title: "Alliance × Expert 플랫폼",
    description:
      "파트너 생태계와 전문가 지원 체계를 통해 설계·구축·운영까지 실행을 가속합니다.",
  },
  {
    title: "보안 · 소버린 · 규제 대응",
    description:
      "현실 제약을 전제로 보안/주권/규제 요건을 포함해 ‘승인되고 운영되는 AX’를 지향합니다.",
  },
] as const;

export default function AxValuePage() {
  const [selectedId, setSelectedId] = useState(axValueItems[0]?.id);
  const [open, setOpen] = useState(false);

  const selected = useMemo(
    () => axValueItems.find((v) => v.id === selectedId) ?? axValueItems[0],
    [selectedId]
  );

  return (
    <>
      <PageHero
        glyph="stack"
        eyebrow="AX Value"
        title="KT AX가 만드는 통합 가치 구조"
        description="AI 인프라부터 클라우드·모델·데이터·산업별 Agent·운영 최적화까지. KT AX는 도입과 확산을 ‘구조’로 정리해, 실행 가능한 제안으로 연결합니다."
      />

      {/* Hero CTA (2 buttons) */}
      <section className="mx-auto max-w-6xl px-6 pb-2 pt-10 md:pt-12">
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <Link
            href="/ax-consulting"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-600"
          >
            AI 컨설턴트로 추천받기
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
          <a
            href="mailto:ax-sales@kt.com?subject=KT%20AX%20%EC%83%81%EB%8B%B4%20%EB%AC%B8%EC%9D%98&body=%EC%A1%B0%EC%A7%81%20%EC%A0%95%EB%B3%B4%20%2F%20%EA%B3%BC%EC%A0%9C%20%2F%20%ED%9D%AC%EB%A7%9D%20%EC%9D%BC%EC%A0%95%EC%9D%84%20%EC%9E%85%EB%A0%A5%ED%95%B4%20%EC%A3%BC%EC%84%B8%EC%9A%94."
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-50"
          >
            상담 연결하기
          </a>
        </div>
      </section>

      {/* Infographic */}
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-14">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-red-600">
              Value Architecture
            </p>
            <h2 className="mt-1 text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
              KT AX Value Framework
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="hidden rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 md:inline-flex"
          >
            이미지 크게 보기
          </button>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:p-6">
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="inline-flex rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600">
              End-to-End AX Framework (시연용)
            </span>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex rounded-lg px-2 py-1 text-xs font-medium text-red-600 hover:text-red-700 md:hidden"
            >
              확대 보기
            </button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group relative block w-full overflow-hidden rounded-xl bg-gray-50"
            aria-label="AX Value Framework 이미지 확대"
          >
            <Image
                    src="/api/ax-value-framework"
              alt="KT AX Value Framework"
              width={1600}
              height={900}
              className="h-auto w-full object-contain"
              priority
                    unoptimized
            />
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/35 to-transparent p-4 text-left text-xs font-medium text-white">
                클릭하여 확대 보기
              </div>
            </div>
          </button>

          <p className="mt-4 text-sm leading-relaxed text-gray-500">
            Managed AX &amp; AX CoE, 산업별 Agent, Agent Builder, Data for AI,
            AI 모델/클라우드/인프라, 그리고 보안·소버린·규제까지. KT AX의 핵심
            구성 요소를 한 장으로 정리했습니다.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-6 pb-2">
        <SectionTitle
          align="left"
          title="핵심 가치 요약"
          subtitle="복잡한 요소를 ‘실행 구조’로 묶어, 도입 의사결정과 확산을 빠르게 만듭니다."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {valueHighlights.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {h.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {h.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Selectable UX */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <SectionTitle
          align="left"
          title="관심 관점 선택"
          subtitle="아래 항목을 선택하면, 해당 영역의 의미와 다음 탐색/추천 흐름을 짧게 안내합니다."
        />

        <div className="flex flex-wrap gap-2">
          {axValueItems.map((item) => {
            const active = item.id === selectedId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedId(item.id)}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-red-500 text-white shadow-sm"
                    : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="min-w-0">
              <h3 className="text-xl font-bold tracking-tight text-gray-900">
                {selected.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-gray-700">
                {selected.summary}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {selected.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {selected.keywords.map((k) => (
                  <span
                    key={k}
                    className="rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0">
              <Link
                href={selected.relatedCTA.href}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-600"
              >
                {selected.relatedCTA.label}
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="우리 조직에 맞는 AX 추진 방향을 확인해보세요"
        description="AX Value 구조를 바탕으로, 단계·산업·과제를 묶어 실행 가능한 제안을 드립니다."
        buttonLabel="AI 컨설턴트 시작하기"
        buttonHref="/ax-consulting"
      />

      {/* Image modal */}
      {open ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3 md:px-6">
              <div className="min-w-0">
                <p className="text-xs font-medium text-gray-500">
                  KT AX Value Framework
                </p>
                <p className="truncate text-sm font-semibold text-gray-900">
                  End-to-End AX Value Architecture (시연용)
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-2 text-gray-600 hover:bg-gray-100"
                aria-label="닫기"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="max-h-[80vh] overflow-auto bg-gray-50 p-3 md:p-5">
              <Image
                      src="/api/ax-value-framework"
                alt="KT AX Value Framework 확대"
                width={2000}
                height={1200}
                className="h-auto w-full rounded-xl bg-white object-contain"
                      unoptimized
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute inset-0 -z-10 cursor-default"
            aria-hidden
          />
        </div>
      ) : null}
    </>
  );
}

