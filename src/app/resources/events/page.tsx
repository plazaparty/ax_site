import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import EventNewsCard from "@/components/EventNewsCard";
import CTASection from "@/components/CTASection";
import {
  upcomingEvents,
  latestNews,
  featuredInsight,
} from "@/data/axEventsNews";

function badgeFor(type: string) {
  if (type === "event") return "이벤트";
  if (type === "news") return "뉴스";
  return "인사이트";
}

export default function ResourcesEventsPage() {
  return (
    <>
      <PageHero
        glyph="megaphone"
        eyebrow="Resources · Events & Promotions"
        title="이벤트 · 프로모션"
        description="웨비나·세미나 일정과 최신 업데이트를 모았습니다. (시연용 더미)"
      />

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <SectionTitle
          align="left"
          title="Featured"
          subtitle="가장 먼저 살펴볼 만한 주제를 골랐습니다."
        />
        <div className="mb-14">
          <EventNewsCard
            date={featuredInsight.date}
            title={featuredInsight.title}
            description={featuredInsight.description}
            badge={badgeFor(featuredInsight.type)}
          />
        </div>

        <SectionTitle
          align="left"
          title="Upcoming"
          subtitle="등록 예정인 일정입니다. 실제 서비스에서는 RSVP·캘린더 연동이 가능합니다."
        />
        <div className="mb-14 grid gap-5 md:grid-cols-2">
          {upcomingEvents.map((e) => (
            <EventNewsCard
              key={e.id}
              date={e.date}
              title={e.title}
              description={e.description}
              badge={badgeFor(e.type)}
            />
          ))}
        </div>

        <SectionTitle
          align="left"
          title="Latest News"
          subtitle="제품·시장 관련 짧은 업데이트입니다."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {latestNews.map((n) => (
            <EventNewsCard
              key={n.id}
              date={n.date}
              title={n.title}
              description={n.description}
              badge={badgeFor(n.type)}
            />
          ))}
        </div>
      </section>

      <CTASection
        title="관심 일정에 맞춰 상담을 예약하고 싶으신가요?"
        description="AI 컨설턴트가 관심사를 정리한 뒤 담당 연결까지 안내합니다."
        buttonLabel="AI 컨설턴트 시작하기"
        secondaryButtonLabel="상담 연결"
      />
    </>
  );
}

