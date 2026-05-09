import { Suspense } from "react";
import ConsultantClient from "./ConsultantClient";

export default function ConsultantPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-4xl px-4 py-10 md:px-6">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 text-sm text-gray-500 shadow-sm">
            AI 컨설턴트를 불러오는 중입니다…
          </div>
        </div>
      }
    >
      <ConsultantClient />
    </Suspense>
  );
}
