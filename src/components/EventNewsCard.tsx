interface EventNewsCardProps {
  date: string;
  title: string;
  description: string;
  badge?: string;
}

export default function EventNewsCard({
  date,
  title,
  description,
  badge,
}: EventNewsCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <time className="text-xs font-medium text-gray-400">{date}</time>
        {badge ? (
          <span className="rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-medium text-red-600">
            {badge}
          </span>
        ) : null}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">
        {description}
      </p>
      <button
        type="button"
        className="self-start text-sm font-medium text-red-600 hover:text-red-700"
      >
        자세히 보기
      </button>
    </article>
  );
}
