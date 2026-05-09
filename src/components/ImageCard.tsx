/**
 * 이미지 중심 AX 카드 — Tech / Maturity / Industry 공통
 * (텍스트 타일 UI는 MaturityStageCard, IndustryCard 등으로 유지)
 */

interface ImageCardProps {
  title: string;
  /** 한 줄 핵심 메시지 (항상 표시) */
  description: string;
  imageUrl: string;
  /** 상단 작은 라벨 (예: 단계 번호, 카테고리 배지) */
  overlayText?: string;
  /** hover 시 페이드인되는 부가 설명 */
  hoverDetail?: string;
  /** 16:9(기본) 또는 4:3 */
  aspect?: "16/9" | "4/3";
}

export default function ImageCard({
  title,
  description,
  imageUrl,
  overlayText,
  hoverDetail,
  aspect = "16/9",
}: ImageCardProps) {
  const aspectClass = aspect === "4/3" ? "aspect-[4/3]" : "aspect-video";

  return (
    <article
      className={`group relative w-full ${aspectClass} overflow-hidden rounded-2xl bg-gray-900 shadow-md ring-1 ring-black/5 transition-transform duration-300 ease-out will-change-transform hover:scale-[1.035]`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
        aria-hidden
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/55 to-black/30 transition-all duration-300 group-hover:from-black/78 group-hover:via-black/48 group-hover:to-black/25" />

      <div className="relative flex h-full min-h-0 flex-col justify-end p-5 md:p-6">
        {overlayText ? (
          <span className="mb-2 inline-flex w-fit rounded-md bg-white/15 px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-white/90 backdrop-blur-sm">
            {overlayText}
          </span>
        ) : null}

        <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">
          {title}
        </h3>
        <p className="mt-1.5 text-sm font-medium leading-snug text-white/95">
          {description}
        </p>

        {hoverDetail ? (
          <p className="mt-0 max-h-0 overflow-hidden whitespace-pre-line text-sm leading-relaxed text-white/85 opacity-0 transition-all duration-300 ease-out group-hover:mt-3 group-hover:max-h-96 group-hover:opacity-100">
            {hoverDetail}
          </p>
        ) : null}
      </div>
    </article>
  );
}
