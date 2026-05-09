interface InsightCardProps {
  title: string;
  description: string;
  whyItMatters: string;
}

export default function InsightCard({
  title,
  description,
  whyItMatters,
}: InsightCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-7">
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">
        {description}
      </p>
      <div className="rounded-xl bg-gray-50 p-4">
        <p className="mb-1 text-xs font-semibold text-gray-500">왜 중요한가</p>
        <p className="text-sm leading-relaxed text-gray-700">{whyItMatters}</p>
      </div>
    </article>
  );
}
