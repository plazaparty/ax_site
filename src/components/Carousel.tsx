"use client";

import { ReactNode, useMemo, useRef } from "react";

interface CarouselProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
}

export default function Carousel({ title, subtitle, children }: CarouselProps) {
  const ref = useRef<HTMLDivElement>(null);

  const scrollByPx = useMemo(() => 360, []);

  const scroll = (dir: "prev" | "next") => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({
      left: dir === "prev" ? -scrollByPx : scrollByPx,
      behavior: "smooth",
    });
  };

  return (
    <section>
      {title ? (
        <div className="mb-5 flex items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-1 text-sm leading-relaxed text-gray-500">
                {subtitle}
              </p>
            ) : null}
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scroll("prev")}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
              aria-label="이전"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("next")}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
              aria-label="다음"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : null}

      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
    </section>
  );
}

