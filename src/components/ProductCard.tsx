"use client";

import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg">
      <div className="mb-3 inline-flex rounded-lg bg-red-50 px-3 py-1 text-xs font-medium text-red-600">
        추천
      </div>
      <h3 className="mb-2 text-lg font-bold text-gray-900">{product.name}</h3>
      <p className="mb-4 text-sm leading-relaxed text-gray-500">
        {product.description}
      </p>

      <div className="mb-4 rounded-xl bg-gray-50 p-4">
        <p className="mb-2 text-xs font-semibold text-gray-700">
          추천 이유
        </p>
        <p className="text-sm leading-relaxed text-gray-600">
          {product.recommendReason}
        </p>
      </div>

      <div className="mb-4">
        <p className="mb-2 text-xs font-semibold text-gray-700">주요 기능</p>
        <ul className="space-y-1.5">
          {product.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {f}
            </li>
          ))}
        </ul>
      </div>

      <p className="mb-5 text-xs text-gray-400">
        추천 대상: {product.targetAudience}
      </p>

      <div className="flex flex-wrap gap-2">
        <button className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-600">
          자세히 보기
        </button>
        <button className="rounded-lg border border-red-200 bg-white px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50">
          상담 연결
        </button>
        <button className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50">
          도입 문의
        </button>
      </div>
    </div>
  );
}
