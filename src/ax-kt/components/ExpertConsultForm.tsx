// @ts-nocheck
"use client";

import { useState } from "react";
import { G } from "../theme";

export default function ExpertConsultForm({
  onClose,
  variant = "modal",
}: {
  onClose?: () => void;
  variant?: "modal" | "inline";
}) {
  const [form, setForm] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    note: "",
  });
  const [sent, setSent] = useState(false);

  const field = (label: string, key: keyof typeof form, type = "text") => (
    <label className="block">
      <span className="text-xs font-semibold text-gray-500">{label}</span>
      {type === "textarea" ? (
        <textarea
          value={form[key]}
          onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
          rows={3}
          className="mt-1.5 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-red-400"
          placeholder="추가로 전달할 내용을 입력해 주세요"
        />
      ) : (
        <input
          type={type}
          value={form[key]}
          onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
          className="mt-1.5 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-red-400"
        />
      )}
    </label>
  );

  const formBody = (
    <>
      <h2 className="text-base font-bold text-gray-900">전문가 상담 신청</h2>
      <p className="mt-1 text-xs text-gray-500">담당 컨설턴트가 영업일 기준 1~2일 내 연락드립니다.</p>

      {sent ? (
        <p className="mt-4 rounded-xl bg-gray-50 p-3 text-sm text-gray-700">
          접수되었습니다. 입력하신 연락처로 안내드리겠습니다.
        </p>
      ) : (
        <form
          className="mt-4 space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {field("기업명", "company")}
            {field("고객명", "name")}
            {field("연락처", "phone", "tel")}
            {field("이메일", "email", "email")}
          </div>
          {field("추가 요청사항", "note", "textarea")}
          <div className="flex gap-2 pt-1">
            {onClose ? (
              <button
                type="button"
                onClick={onClose}
                className="flex-1 rounded-xl border border-gray-200 py-2.5 text-sm font-semibold text-gray-600"
              >
                닫기
              </button>
            ) : null}
            <button
              type="submit"
              className="flex-1 rounded-xl py-2.5 text-sm font-bold text-white"
              style={{ background: G.accent }}
            >
              신청하기
            </button>
          </div>
        </form>
      )}

      {sent && onClose ? (
        <button
          type="button"
          onClick={onClose}
          className="mt-3 w-full rounded-xl border border-gray-200 py-2.5 text-sm font-semibold text-gray-700"
        >
          닫기
        </button>
      ) : null}
    </>
  );

  if (variant === "inline") {
    return (
      <div
        className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
        role="region"
        aria-label="전문가 상담 신청"
      >
        {formBody}
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-[300] flex items-end justify-center bg-black/40 p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label="전문가 상담 신청"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {formBody}
      </div>
    </div>
  );
}
