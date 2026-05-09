interface IndustryCardProps {
  name: string;
  useCase: string;
  benefit: string;
  productHint: string;
}

export default function IndustryCard({
  name,
  useCase,
  benefit,
  productHint,
}: IndustryCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-7">
      <h3 className="mb-3 text-lg font-bold text-gray-900">{name}</h3>
      <dl className="flex flex-1 flex-col gap-3 text-sm">
        <div>
          <dt className="mb-0.5 font-medium text-gray-500">대표 적용</dt>
          <dd className="text-gray-800">{useCase}</dd>
        </div>
        <div>
          <dt className="mb-0.5 font-medium text-gray-500">기대 효과</dt>
          <dd className="text-gray-800">{benefit}</dd>
        </div>
        <div>
          <dt className="mb-0.5 font-medium text-gray-500">추천 상품 예시</dt>
          <dd className="text-gray-800">{productHint}</dd>
        </div>
      </dl>
    </article>
  );
}
