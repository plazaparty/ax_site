"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { EnterprisePillarBlock, EnterprisePillarContent } from "@/data/enterprisePillar/types";
import AnimatedKpiStrip from "./AnimatedKpiStrip";
import { PillarDiagram } from "./PillarDiagrams";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  return reduced;
}

const accentRing: Record<EnterprisePillarContent["accent"], string> = {
  emerald: "from-emerald-400/30 via-emerald-500/10 to-transparent",
  rose: "from-rose-400/35 via-rose-500/10 to-transparent",
  sky: "from-sky-400/35 via-sky-500/10 to-transparent",
  amber: "from-amber-400/35 via-amber-500/10 to-transparent",
};

const accentDot: Record<EnterprisePillarContent["accent"], string> = {
  emerald: "bg-emerald-400",
  rose: "bg-rose-500",
  sky: "bg-sky-400",
  amber: "bg-amber-400",
};

const surfaceClass: Record<EnterprisePillarBlock["surface"], string> = {
  hero: "",
  dark: "bg-slate-950 text-white border-white/[0.08]",
  muted: "bg-slate-50 text-slate-900 border-slate-200/80",
  light: "bg-white text-slate-900 border-slate-200/80",
};

function MethodologyRow({ steps, invert }: { steps: { phase: string; detail: string }[]; invert?: boolean }) {
  return (
    <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li
          key={s.phase}
          className={
            invert
              ? "relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-sm backdrop-blur-sm"
              : "relative rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-sm"
          }
        >
          <span
            className={`font-mono text-[10px] font-bold uppercase tracking-[0.2em] ${invert ? "text-red-400" : "text-red-600"}`}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className={`mt-2 text-sm font-semibold ${invert ? "text-white" : "text-slate-900"}`}>{s.phase}</p>
          <p className={`mt-2 text-xs leading-relaxed ${invert ? "text-white/60" : "text-slate-600"}`}>{s.detail}</p>
        </li>
      ))}
    </ol>
  );
}

function ArchitectureStack({
  layers,
  dark,
}: {
  layers: { layer: string; hint: string }[];
  dark?: boolean;
}) {
  return (
    <div className="mt-10 space-y-3">
      {layers.map((row, idx) => (
        <div
          key={row.layer}
          className={`flex flex-col gap-1 rounded-2xl border px-5 py-4 md:flex-row md:items-center md:justify-between ${
            dark
              ? "border-white/10 bg-white/[0.03]"
              : "border-slate-200/90 bg-gradient-to-r from-slate-50/80 to-white"
          }`}
        >
          <div className="flex items-center gap-3">
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                dark ? "bg-white/10 text-white" : "bg-slate-900 text-white"
              }`}
            >
              {idx + 1}
            </span>
            <p className={`text-sm font-semibold ${dark ? "text-white" : "text-slate-900"}`}>{row.layer}</p>
          </div>
          <p className={`text-xs md:text-right ${dark ? "text-white/55" : "text-slate-500"}`}>{row.hint}</p>
        </div>
      ))}
    </div>
  );
}

function FlowStrip({ steps }: { steps: { label: string; sub: string }[] }) {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-4">
      {steps.map((s, i) => (
        <div key={s.label} className="relative">
          {i < steps.length - 1 ? (
            <div
              className="pointer-events-none absolute left-[calc(100%-0.5rem)] top-8 hidden h-px w-[calc(100%+1.5rem)] bg-gradient-to-r from-red-600/50 to-white/10 md:block"
              aria-hidden
            />
          ) : null}
          <p className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{s.label}</p>
          <p className="mt-3 text-sm leading-relaxed text-white/55">{s.sub}</p>
        </div>
      ))}
    </div>
  );
}

function BlockSection({
  block,
  accent,
  reducedMotion,
}: {
  block: EnterprisePillarBlock;
  accent: EnterprisePillarContent["accent"];
  reducedMotion: boolean;
}) {
  const surface = surfaceClass[block.surface];
  const isDark = block.surface === "dark";

  return (
    <motion.section
      id={block.id}
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`scroll-mt-32 border-y ${surface}`}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        {block.kicker ? (
          <p
            className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${isDark ? "text-red-400" : "text-red-600"}`}
          >
            {block.kicker}
          </p>
        ) : null}
        {block.title ? (
          <h2
            className={`mt-3 max-w-4xl text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            {block.title}
          </h2>
        ) : null}
        {block.lede ? (
          <p
            className={`mt-5 max-w-3xl text-base leading-relaxed md:text-lg ${
              isDark ? "text-white/70" : "text-slate-600"
            }`}
          >
            {block.lede}
          </p>
        ) : null}
        {block.body ? (
          <p
            className={`mt-5 max-w-3xl text-sm leading-relaxed md:text-base ${
              isDark ? "text-white/65" : "text-slate-600"
            }`}
          >
            {block.body}
          </p>
        ) : null}

        {block.items && !block.services ? (
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {block.items.map((it) => (
              <div
                key={it.title}
                className={`rounded-2xl border p-6 shadow-sm ${
                  isDark
                    ? "border-white/10 bg-white/[0.04] backdrop-blur-md"
                    : "border-slate-200/90 bg-white/90"
                }`}
              >
                <h3 className={`text-sm font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{it.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${isDark ? "text-white/60" : "text-slate-600"}`}>
                  {it.body}
                </p>
              </div>
            ))}
          </div>
        ) : null}

        {block.services?.length ? (
          <div className={`mt-10 grid gap-6 ${block.services.length > 1 ? "lg:grid-cols-2" : ""}`}>
            {block.services.map((svc) => (
              <article
                key={svc.title}
                className={`group relative overflow-hidden rounded-3xl border p-8 shadow-sm transition ${
                  isDark
                    ? "border-white/10 bg-white/[0.04] hover:border-white/20"
                    : "border-slate-200/90 bg-gradient-to-br from-white to-slate-50/80 hover:border-red-200/60"
                }`}
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-red-600/10 blur-3xl transition group-hover:bg-red-600/15" />
                <p className={`text-[10px] font-semibold uppercase tracking-wider ${isDark ? "text-red-400" : "text-red-600"}`}>
                  {svc.subtitle}
                </p>
                <h3 className={`mt-2 text-xl font-semibold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                  {svc.title}
                </h3>
                <p className={`mt-4 text-sm leading-relaxed ${isDark ? "text-white/65" : "text-slate-600"}`}>
                  {svc.narrative}
                </p>
                <ul className={`mt-6 space-y-2.5 text-sm leading-relaxed ${isDark ? "text-white/60" : "text-slate-600"}`}>
                  {svc.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className={isDark ? "text-red-400" : "text-red-600"}>▸</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        ) : null}

        {block.diagram ? (
          <div
            className={`mt-10 rounded-3xl border p-6 md:p-8 ${
              isDark ? "border-white/10 bg-black/20" : "border-slate-200/80 bg-slate-50/50"
            }`}
          >
            <PillarDiagram kind={block.diagram} accent={accent} />
          </div>
        ) : null}

        {block.items && block.services ? (
          <div className="mt-12">
            <h3 className={`text-sm font-semibold uppercase tracking-wider ${isDark ? "text-white/80" : "text-slate-800"}`}>
              엔터프라이즈 활용 사례
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {block.items.map((it) => (
                <div
                  key={it.title}
                  className={`rounded-2xl border p-5 ${
                    isDark ? "border-white/10 bg-white/[0.03]" : "border-slate-200/80 bg-white"
                  }`}
                >
                  <p className={`text-sm font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{it.title}</p>
                  <p className={`mt-2 text-xs leading-relaxed ${isDark ? "text-white/55" : "text-slate-600"}`}>
                    {it.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {block.methodology ? <MethodologyRow steps={block.methodology} invert={isDark} /> : null}

        {block.architecture ? <ArchitectureStack layers={block.architecture} dark={isDark} /> : null}

        {block.flow ? <FlowStrip steps={block.flow.steps} /> : null}

        {block.bullets?.length ? (
          <ul className={`mt-8 max-w-3xl space-y-2 text-sm leading-relaxed ${isDark ? "text-white/65" : "text-slate-600"}`}>
            {block.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className={isDark ? "text-red-400" : "text-red-600"}>—</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </motion.section>
  );
}

export default function EnterprisePillarPage({ content }: { content: EnterprisePillarContent }) {
  const reducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.15 });
  const [activeId, setActiveId] = useState("overview");

  const nav = useMemo(
    () => [{ id: "overview", label: "개요" }, ...content.blocks.map((b) => ({ id: b.id, label: b.navLabel }))],
    [content.blocks],
  );

  useEffect(() => {
    const ids = nav.map((n) => n.id);
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.target as HTMLElement).offsetTop - (b.target as HTMLElement).offsetTop);
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -40% 0px", threshold: [0, 0.1, 0.25] },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [nav]);

  const ring = accentRing[content.accent];
  const dot = accentDot[content.accent];

  return (
    <div className="bg-slate-100 pb-24">
      <motion.div
        className="fixed left-0 right-0 top-14 z-[52] h-0.5 origin-left bg-red-600"
        style={{ scaleX, transformOrigin: "0% 50%" }}
        aria-hidden
      />

      <section
        id="overview"
        className="relative scroll-mt-32 overflow-hidden border-b border-white/10 bg-slate-950 text-white"
      >
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${ring} opacity-90`} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-20 pt-24 md:px-6 md:pb-28 md:pt-28">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-red-300/90">
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">{content.hero.badge}</span>
            <span className="text-white/35">KT 엔터프라이즈 AX</span>
          </div>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end">
            <div>
              <motion.h1
                initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl"
              >
                {content.hero.headline}
              </motion.h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">{content.hero.subhead}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md md:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-red-300/90">경영 메시지</p>
              <p className="mt-4 text-sm leading-relaxed text-white/80">{content.hero.executive}</p>
              <div className="mt-6 flex flex-wrap gap-2 text-[10px] font-medium uppercase tracking-wider text-white/45">
                <span className="rounded-lg border border-white/10 px-2 py-1">통제된 전달</span>
                <span className="rounded-lg border border-white/10 px-2 py-1">포트폴리오 규율</span>
                <span className="rounded-lg border border-white/10 px-2 py-1">KPI 연동 성과</span>
              </div>
            </div>
          </div>

          <div className="grid gap-4 rounded-3xl border border-white/10 bg-black/30 p-4 backdrop-blur md:grid-cols-3 md:p-5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">역량 개요</p>
              <p className="mt-2 text-sm text-white/75">
                조달·보안 검토·운영 케이던스에 맞춘 전략부터 실행까지의 모듈형 구성입니다.
              </p>
            </div>
            <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">아키텍처·프로세스</p>
              <p className="mt-2 text-sm text-white/75">
                아래 다이어그램 중심 섹션으로 운영 모델을 경영·스티어링 위원회가 검토하기 쉬운 시각로 번역합니다.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">신뢰 지표</p>
              <p className="mt-2 text-sm text-white/75">
                보안 우선 패턴, 엔터프라이즈 SLA, 감사 친화적 증적 경로 — 규제 산업을 염두에 둔 설계입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <nav
        className="sticky top-14 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md"
        aria-label="섹션"
      >
        <div className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-3 py-3 md:px-6">
          {nav.map((item) => {
            const active = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  active ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <Link
            href="/ax-explore#ax-explore-axis-solution"
            className="ml-auto hidden shrink-0 text-xs font-semibold text-red-700 hover:text-red-800 md:inline"
          >
            ← AX 맵
          </Link>
        </div>
      </nav>

      <div className="relative mx-auto max-w-6xl">
        <div className="pointer-events-none fixed right-3 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-2 lg:flex">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group relative flex h-8 w-8 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 shadow-sm backdrop-blur"
              aria-label={item.label}
            >
              <span
                className={`h-2 w-2 rounded-full transition ${activeId === item.id ? dot : "bg-slate-300 group-hover:bg-slate-400"}`}
              />
            </a>
          ))}
        </div>

        {content.blocks.map((block) => (
          <BlockSection key={block.id} block={block} accent={content.accent} reducedMotion={reducedMotion} />
        ))}

        <section className="border-b border-slate-200/80 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-red-600">KPI·가치 제안</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              경영 회의에서 방어 가능한 성과 지표입니다.
            </h2>
            <div className="mt-10">
              <AnimatedKpiStrip kpis={content.kpis} reducedMotion={reducedMotion} />
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-slate-950 px-4 py-16 text-white md:px-6 md:py-20">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-red-300/90">문의·다음 단계</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">{content.cta.headline}</h2>
              <p className="mt-3 max-w-xl text-sm text-white/60">
                KT 엔터프라이즈급 AX 전환 플랫폼 — 실전 실행, 통제된 확장, 측정 가능한 가치를 지향합니다.
              </p>
            </div>
            <Link
              href={content.cta.href}
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-red-900/30 transition hover:bg-red-500"
            >
              {content.cta.buttonLabel}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
