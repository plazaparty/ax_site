interface MaturityStageCardProps {
  title: string;
  summary: string;
  traits: string;
  actions: string;
  exampleServices: string;
}

export default function MaturityStageCard({
  title,
  summary,
  traits,
  actions,
  exampleServices,
}: MaturityStageCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-7">
      <h3 className="mb-2 text-lg font-bold text-gray-900">{title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-gray-600">{summary}</p>
      <ul className="mb-4 flex-1 space-y-2 text-sm text-gray-700">
        <li>
          <span className="font-medium text-gray-500">특징 </span>
          {traits}
        </li>
        <li>
          <span className="font-medium text-gray-500">추천 액션 </span>
          {actions}
        </li>
        <li>
          <span className="font-medium text-gray-500">KT 서비스 예시 </span>
          {exampleServices}
        </li>
      </ul>
    </article>
  );
}
