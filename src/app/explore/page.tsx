import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import { mainNavItems } from "@/data/nav";

const overviewBlocks = [
  {
    title: "가치 구조와 실행 개요",
    body: "KT AX가 제공하는 통합 가치 구조(인프라-클라우드-모델-데이터-Agent-운영)와 대표 솔루션 라인을 요약해 둔 탐색용 화면입니다. 상세는 각 메뉴 페이지로 이어집니다.",
  },
  {
    title: "왜 이 허브인가",
    body: "기술 소개만이 아니라, 추진 단계·산업·트렌드까지 연결해 ‘다음 행동’을 떠올리도록 구성했습니다.",
  },
];

export default function ExplorePage() {
  return (
    <>
      <PageHero
        glyph="stack"
        eyebrow="KT AX 둘러보기"
        title="AX 기술과 서비스를 한눈에"
        description="기술 중심 탐색과 정보 허브를 오가며, 우리 조직에 맞는 맥락을 쌓을 수 있는 overview입니다. 시연용 구성이며 실제 서비스에서는 콘텐츠가 연동됩니다."
      />

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div className="mb-14 grid gap-6 md:grid-cols-2">
          {overviewBlocks.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
            >
              <h2 className="mb-3 text-lg font-semibold text-gray-900">
                {b.title}
              </h2>
              <p className="text-sm leading-relaxed text-gray-600">{b.body}</p>
            </div>
          ))}
        </div>

        <SectionTitle
          title="허브 메뉴로 이동"
          subtitle="관심 있는 관점을 골라 깊이 있게 살펴보세요."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-gray-200 bg-gray-50/80 p-6 transition-all hover:border-red-200 hover:bg-white hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold text-gray-900 group-hover:text-red-600">
                {item.label}
              </h3>
              <p className="text-sm text-gray-600">{item.shortDescription}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center text-sm text-gray-500">
          본 페이지는 시연용 placeholder입니다. 실제 서비스에서는 ai.kt.com 등
          기술/콘텐츠 소스와 연동할 수 있습니다.
        </div>
      </section>

      <CTASection
        title="탐색을 마쳤다면, 맞춤 추천으로 이어가 보세요"
        buttonLabel="AI 컨설턴트로 추천받기"
        buttonHref="/ax-consulting"
      />
    </>
  );
}
