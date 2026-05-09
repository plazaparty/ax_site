"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import SitePageHero from "@/components/SitePageHero";
import { industriesExplore, stagesExplore, tasksExplore } from "@/data/discoveryHub";
import { solutionPillarHubLinks } from "@/data/solutionPillars";
import { portalPanelTone } from "@/data/portalVisual";

const axisBlocksThree = [
  {
    id: "ax-explore-axis-industry",
    title: "산업별 AX",
    subtitle: "규제·가치사슬 맥락",
    links: industriesExplore.map((i) => ({ label: i.title, href: i.href })),
  },
  {
    id: "ax-explore-axis-task",
    title: "업무별 AX",
    subtitle: "가치사슬 과제 축",
    links: tasksExplore.map((t) => ({ label: t.title, href: t.href })),
  },
  {
    id: "ax-explore-axis-stage",
    title: "도입단계별 AX",
    subtitle: "성숙도 래더",
    links: stagesExplore.map((s) => ({ label: s.title, href: s.href })),
  },
] as const;

export default function AxExploreHubClient() {
  const { pageBg } = portalPanelTone.spark;
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/ax-explore") return;
    const id = window.location.hash.replace(/^#/, "");
    if (!id) return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [pathname]);

  return (
    <div className={`${pageBg} pb-28 pt-10 md:pb-16`}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SitePageHero
          glyph="spark"
          eyebrow="AX 탐색"
          title="산업·업무·도입단계·솔루션을 한 화면에서 고릅니다"
          description="솔루션은 AX Readiness, AI, Cloud, Data 네 축만 허브에 표시하고, 세부 항목은 각 상세 페이지에서 확인합니다."
        />

        <section className="mt-10 rounded-2xl border border-gray-900 bg-gray-900 p-5 text-white shadow-xl md:p-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-red-300/90">AX Map</p>
          <h2 className="mt-2 text-lg font-semibold md:text-xl">탐색 축 선택</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {axisBlocksThree.map((axis) => (
              <div
                key={axis.id}
                id={axis.id}
                className="scroll-mt-28 rounded-xl border border-white/10 bg-white/[0.06] p-4 md:p-5"
              >
                <p className="text-[10px] font-semibold uppercase tracking-wider text-red-300/80">{axis.title}</p>
                <p className="mt-1 text-[11px] leading-snug text-white/45">{axis.subtitle}</p>
                <ul className="mt-4 space-y-1.5 border-t border-white/10 pt-3">
                  {axis.links.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block rounded-lg px-2 py-1.5 text-left text-[13px] font-semibold text-white/90 transition hover:bg-white/10 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div
              id="ax-explore-axis-solution"
              className="scroll-mt-28 rounded-xl border border-white/10 bg-white/[0.06] p-4 md:p-5"
            >
              <p className="text-[10px] font-semibold uppercase tracking-wider text-red-300/80">솔루션별 AX</p>
              <p className="mt-1 text-[11px] leading-snug text-white/45">Readiness · AI · Cloud · Data</p>
              <ul className="mt-4 space-y-1.5 border-t border-white/10 pt-3">
                {solutionPillarHubLinks.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={p.href}
                      className="block rounded-lg px-2 py-1.5 text-left text-[13px] font-semibold text-white/90 transition hover:bg-white/10 hover:text-white"
                    >
                      {p.title}
                      <span className="mt-0.5 block text-[11px] font-normal text-white/45">{p.subtitle}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
