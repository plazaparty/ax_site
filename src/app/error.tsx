"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-6 py-16 text-center">
      <p className="mb-2 text-sm font-medium text-red-600">일시적인 오류</p>
      <h1 className="mb-3 text-2xl font-bold text-gray-900">
        페이지를 불러오지 못했습니다
      </h1>
      <p className="mb-8 text-sm leading-relaxed text-gray-500">
        {error.message || "예기치 않은 문제가 발생했습니다. 다시 시도하거나 홈으로 이동해 주세요."}
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-xl bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-600"
        >
          다시 시도
        </button>
        <Link
          href="/"
          className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
        >
          홈으로
        </Link>
      </div>
    </div>
  );
}
