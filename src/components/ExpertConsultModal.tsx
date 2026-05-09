"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

function buildMailtoBody(fields: {
  name: string;
  company: string;
  contact: string;
  needs: string;
}): string {
  const lines = [
    "[AX 전문가 상담 요청]",
    `고객명: ${fields.name || "—"}`,
    `고객사: ${fields.company || "—"}`,
    `연락처: ${fields.contact || "—"}`,
    "",
    "니즈 / 문의 내용:",
    fields.needs || "—",
  ];
  return lines.join("\n");
}

export default function ExpertConsultModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [needs, setNeeds] = useState("");
  const [sentHint, setSentHint] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    setSentHint(false);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  function submit() {
    const body = buildMailtoBody({ name, company, contact, needs });
    const subject = encodeURIComponent("KT AX 상담 요청");
    const bodyEnc = encodeURIComponent(body);
    window.location.href = `mailto:ax-sales@kt.com?subject=${subject}&body=${bodyEnc}`;
    setSentHint(true);
    setTimeout(() => {
      onClose();
      setName("");
      setCompany("");
      setContact("");
      setNeeds("");
      setSentHint(false);
    }, 400);
  }

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          key="consult-modal"
          className="fixed inset-0 z-[240] flex items-end justify-center sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="닫기"
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="consult-title"
            initial={{ y: 32, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            className="relative z-10 m-4 w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="consult-title" className="text-lg font-semibold text-gray-900">
              AX 전문가와 상담
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              아래 정보를 남겨 주시면 상담 접수 메일 초안이 열립니다. 필요 시 내용을 수정해 발송해 주세요.
            </p>
            <div className="mt-5 space-y-4">
              <label className="block text-sm">
                <span className="font-semibold text-gray-800">고객명</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-red-400"
                  autoComplete="name"
                />
              </label>
              <label className="block text-sm">
                <span className="font-semibold text-gray-800">고객사</span>
                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-red-400"
                  autoComplete="organization"
                />
              </label>
              <label className="block text-sm">
                <span className="font-semibold text-gray-800">연락처</span>
                <input
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-red-400"
                  placeholder="이메일 또는 전화번호"
                  autoComplete="tel"
                />
              </label>
              <label className="block text-sm">
                <span className="font-semibold text-gray-800">니즈</span>
                <textarea
                  value={needs}
                  onChange={(e) => setNeeds(e.target.value)}
                  rows={4}
                  className="mt-1 w-full resize-y rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-red-400"
                  placeholder="도입 배경, 일정, 관심 솔루션 등을 적어 주세요."
                />
              </label>
            </div>
            {sentHint ? (
              <p className="mt-4 text-center text-sm font-medium text-red-700">메일 작성 화면으로 이동합니다…</p>
            ) : null}
            <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50"
              >
                취소
              </button>
              <button
                type="button"
                onClick={submit}
                className="rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
              >
                상담 요청하기
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
