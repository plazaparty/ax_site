import Link from "next/link";
import InsightContentCard from "@/components/InsightContentCard";
import InsightsPageHero from "@/components/InsightsPageHero";
import { insightPanelTone } from "@/data/insightVisual";

const sessions = [
  {
    title: "AX Discovery 라이브",
    hint: "선택형 진단 UX와 추천 로직 데모 · Q&A",
    href: "/insights-hub",
  },
  {
    title: "금융 문서 AI 파일럿 리뷰",
    hint: "PoC 범위·평가지표·거버넌스 패널",
    href: "/insights-hub/tech",
  },
  {
    title: "제조 Vision AX 현장 세션",
    hint: "카메라 표준화·불량 탐지 임계값 워크숍",
    href: "/insights-hub/trends",
  },
];

const materials = [
  { title: "웨비나 다시보기", hint: "지난 90일 세션 VOD", href: "/insights-hub/webinars" },
  { title: "발표 자료 모음", hint: "내부 공유용 요약 슬라이드", href: "/insights-hub/reports" },
];

export default function InsightsEventsPage() {
  const { pageBg } = insightPanelTone.events;

  return (
    <div className={`${pageBg} pb-28 pt-10 md:pb-16`}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <InsightsPageHero
          visual="events"
          label="이벤트"
          title="세미나 · 웨비나 · 현장 세션"
          description="일정·초청·자료는 실제 운영 시 CMS·메일과 연동할 수 있습니다. 여기서는 정보 구조와 UX만 제시합니다."
          layout="simple"
        />

        <h2 className="mt-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
          예정 · 진행
        </h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {sessions.map((s) => (
            <InsightContentCard
              key={s.title}
              href={s.href}
              title={s.title}
              description={s.hint}
              visual="events"
              showIcon={false}
            />
          ))}
        </div>

        <h2 className="mt-14 text-sm font-semibold uppercase tracking-wider text-gray-500">
          자료 · 다시보기
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {materials.map((m) => (
            <InsightContentCard
              key={m.title}
              href={m.href}
              title={m.title}
              description={m.hint}
              visual={m.href.includes("webinars") ? "webinars" : "reports"}
              showIcon={false}
            />
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-gray-200/80 bg-white/70 p-6 text-center text-sm text-gray-600 shadow-sm backdrop-blur-sm">
          참가 신청·캘린더 연동은 별도 채널에서 제공할 수 있습니다.{" "}
          <Link href="/insights-hub" className="font-semibold text-red-600 hover:text-red-700">
            인사이트 허브로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
