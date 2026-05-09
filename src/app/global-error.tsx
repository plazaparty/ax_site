"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 text-center">
          <p className="mb-2 text-sm font-medium text-red-600">치명적 오류</p>
          <h1 className="mb-3 text-2xl font-bold text-gray-900">
            앱을 표시할 수 없습니다
          </h1>
          <p className="mb-8 text-sm text-gray-500">
            {error.message ||
              "루트 레이아웃에서 오류가 발생했습니다. 개발 서버를 재시작해 보세요."}
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-xl bg-red-500 px-6 py-3 text-sm font-semibold text-white hover:bg-red-600"
          >
            다시 시도
          </button>
        </div>
      </body>
    </html>
  );
}
