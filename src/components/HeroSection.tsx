import SearchInput from "@/components/SearchInput";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-red-50 opacity-70 blur-3xl" />
        <div className="absolute -bottom-28 -left-28 h-[420px] w-[420px] rounded-full bg-orange-50 opacity-55 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-10 pt-12 md:pb-16 md:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <div className="min-w-0">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-1.5 text-sm font-medium text-red-600">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
              </span>
              AX 탐색 → 추천 → 상담 연결
            </div>

            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl">
              AX의 시작,
              <br />
              <span className="text-gray-900">KT AX</span>와 함께
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-gray-500 md:text-xl">
              산업과 조직에 맞는 AX 전략과 솔루션을 탐색하고, AI 기반으로 최적의
              도입 방안을 제안받아 보세요.
            </p>

            <div className="max-w-2xl">
              <SearchInput placeholder="어떤 AX가 필요하신가요?" />
              <p className="mt-3 text-xs leading-relaxed text-gray-500">
                예: “AX 도입”, “컨택센터 상담 자동화”, “사내 문서 지식검색”
              </p>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -right-10 top-8 h-64 w-64 rounded-full bg-gradient-to-br from-red-200 via-purple-200 to-blue-200 blur-2xl opacity-80" />
            <div className="absolute right-8 top-16 h-56 w-56 rounded-full bg-gradient-to-tr from-white/60 to-white/10 backdrop-blur-md" />
            <div className="relative ml-auto flex h-[260px] w-[260px] items-center justify-center rounded-full bg-gradient-to-br from-red-500/10 via-purple-500/10 to-blue-500/10 ring-1 ring-gray-200">
              <div className="h-[170px] w-[170px] rounded-full bg-white/70 shadow-sm ring-1 ring-gray-200 backdrop-blur-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
