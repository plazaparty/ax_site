import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import ImageCard from "@/components/ImageCard";
import CTASection from "@/components/CTASection";

const journeyStages = [
  {
    id: "discover",
    title: "탐색",
    tagline: "우선순위와 성공 조건 정리",
    imageUrl:
      "/api/placeholder?label=%ED%83%90%EC%83%89&sub=%EA%B3%BC%EC%A0%9C%20%EC%A0%95%EC%9D%98%20%C2%B7%20%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EC%A0%90%EA%B2%80%20%C2%B7%20KPI%20%ED%95%A9%EC%9D%98&tone=default",
    summary:
      "조직 목표·데이터·업무 흐름을 빠르게 파악해 ‘어디서부터 시작할지’를 정리합니다.",
    actions: "과제 정의, 데이터 점검, KPI/리스크 합의",
  },
  {
    id: "poc",
    title: "PoC",
    tagline: "가치 검증과 운영 조건 확인",
    imageUrl:
      "/api/placeholder?label=PoC&sub=RAG%2FAgent%20%EA%B2%80%EC%A6%9D%20%C2%B7%20%ED%8F%89%EA%B0%80%2F%ED%85%8C%EC%8A%A4%ED%8A%B8%20%C2%B7%20%EC%9A%B4%EC%98%81%20%EC%8B%9C%EB%82%98%EB%A6%AC%EC%98%A4&tone=green",
    summary:
      "작게 시작해 빠르게 검증합니다. 단, 실사용을 위해 권한·감사·운영 조건을 함께 확인합니다.",
    actions: "RAG/Agent PoC, 평가/테스트, 운영 시나리오",
  },
  {
    id: "adopt",
    title: "도입",
    tagline: "업무 시스템과 안전하게 연결",
    imageUrl:
      "/api/placeholder?label=%EB%8F%84%EC%9E%85&sub=SSO%2F%EA%B6%8C%ED%95%9C%20%C2%B7%20%EA%B0%90%EC%82%AC%EB%A1%9C%EA%B7%B8%20%C2%B7%20%EB%AA%A8%EB%8B%88%ED%84%B0%EB%A7%81&tone=blue",
    summary:
      "업무 시스템 연동, 보안/개인정보 설계, 장애/품질 관리 체계를 포함해 운영 가능한 형태로 구축합니다.",
    actions: "SSO/권한, 로그/감사, 모니터링/비용 관리",
  },
  {
    id: "scale",
    title: "확산",
    tagline: "CoE 기반 표준화와 재사용",
    imageUrl:
      "/api/placeholder?label=%ED%99%95%EC%82%B0&sub=CoE%20%EC%9A%B4%EC%98%81%20%C2%B7%20%ED%85%9C%ED%94%8C%EB%A6%BF%2F%EC%A0%95%EC%B1%85%20%C2%B7%20%EA%B5%90%EC%9C%A1%2F%EB%B3%80%ED%99%94%EA%B4%80%EB%A6%AC&tone=default",
    summary:
      "템플릿·가이드·운영 프로세스를 표준화해 다른 부서로 안전하게 확산합니다.",
    actions: "CoE 운영, 템플릿/정책, 교육/변화관리",
  },
  {
    id: "optimize",
    title: "고도화",
    tagline: "성과 최적화와 지속 개선",
    imageUrl:
      "/api/placeholder?label=%EA%B3%A0%EB%8F%84%ED%99%94&sub=%ED%92%88%EC%A7%88%2F%EB%B9%84%EC%9A%A9%20%EC%B5%9C%EC%A0%81%ED%99%94%20%C2%B7%20%ED%8F%89%EA%B0%80%2F%EA%B0%9C%EC%84%A0%20%EB%A3%A8%ED%94%84&tone=dark",
    summary:
      "KPI 기반으로 품질과 비용을 최적화하고, 모델/데이터/Agent를 지속적으로 개선합니다.",
    actions: "평가/개선 루프, 비용 최적화, 운영 자동화",
  },
] as const;

export default function SolutionsAxJourneyPage() {
  return (
    <>
      <PageHero
        glyph="compass"
        eyebrow="Solutions · AX Journey"
        title="탐색부터 확산까지, AX 도입 여정"
        description="조직 상황에 맞춰 다음 액션이 보이도록, 단계별 목표·체크포인트를 카드로 정리했습니다. (시연용 더미)"
      />

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <SectionTitle
          align="left"
          title="AX Journey"
          subtitle="탐색 → PoC → 도입 → 확산 → 고도화 흐름이 자연스럽게 이어지도록 구성했습니다."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {journeyStages.map((s, i) => (
            <ImageCard
              key={s.id}
              title={s.title}
              description={s.tagline}
              imageUrl={s.imageUrl}
              overlayText={`0${i + 1}`}
              hoverDetail={[s.summary, `추천 액션: ${s.actions}`].join("\n")}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/ax-consulting"
            className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-600"
          >
            현재 단계에 맞는 추천받기
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
      </section>

      <CTASection
        title="조직 상황에 맞는 AX Journey를 함께 그려보세요"
        description="AI 컨설턴트가 과제·기술·거버넌스 조건을 묶어 실행 가능한 제안으로 연결합니다."
        buttonLabel="AI 컨설턴트 시작하기"
        secondaryButtonLabel="상담 연결"
      />
    </>
  );
}

