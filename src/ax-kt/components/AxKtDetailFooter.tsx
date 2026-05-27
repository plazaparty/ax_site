"use client";

import Link from "next/link";
import { useState } from "react";
import { G } from "../theme";
import ExpertConsultForm from "./ExpertConsultForm";

export default function AxKtDetailFooter() {
  const [showExpert, setShowExpert] = useState(false);

  return (
    <>
      <div className="mt-10 flex flex-col gap-3 border-t border-gray-200 pt-8 sm:flex-row">
        <Link
          href="/ax-kt?open=consultant"
          className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-xl px-4 text-sm font-bold text-white no-underline hover:opacity-95"
          style={{ background: G.accent }}
        >
          AI Consultant
        </Link>
        <button
          type="button"
          onClick={() => setShowExpert(true)}
          className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-xl border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-800 hover:bg-gray-50"
        >
          AX전문가 상담 요청
        </button>
      </div>
      {showExpert ? <ExpertConsultForm onClose={() => setShowExpert(false)} /> : null}
    </>
  );
}
