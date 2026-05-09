"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

interface SearchInputProps {
  placeholder?: string;
  defaultValue?: string;
}

export default function SearchInput({
  placeholder = "우리 조직에 맞는 AX를 찾아보세요",
  defaultValue = "",
}: SearchInputProps) {
  const router = useRouter();
  const [value, setValue] = useState(defaultValue);

  const disabled = useMemo(() => value.trim().length === 0, [value]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const query = value.trim();
    if (!query) return;
    router.push(`/ax-consulting?query=${encodeURIComponent(query)}`);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full items-center gap-2 rounded-2xl border border-gray-200 bg-white/80 p-2 shadow-sm backdrop-blur-md"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="h-10 flex-1 bg-transparent px-1 text-sm font-medium text-gray-900 outline-none placeholder:text-gray-400"
        aria-label="AX 검색/상담 입력"
      />
      <button
        type="submit"
        disabled={disabled}
        className="inline-flex h-10 items-center justify-center rounded-xl bg-red-500 px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-gray-300"
        aria-label="AI 컨설턴트로 이동"
      >
        <span className="hidden sm:inline">추천받기</span>
        <span className="sm:hidden">Go</span>
        <svg
          className="ml-2 h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </button>
    </form>
  );
}

