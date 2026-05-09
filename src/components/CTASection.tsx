import Link from "next/link";

interface CTASectionProps {
  title: string;
  description?: string;
  buttonLabel: string;
  buttonHref?: string;
  secondaryButtonLabel?: string;
  secondaryButtonHref?: string;
  variant?: "light" | "dark";
}

export default function CTASection({
  title,
  description,
  buttonLabel,
  buttonHref = "/ax-consulting",
  secondaryButtonLabel,
  secondaryButtonHref = "mailto:ax-sales@kt.com?subject=KT%20AX%20%EC%83%81%EB%8B%B4%20%EB%AC%B8%EC%9D%98",
  variant = "light",
}: CTASectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={
        isDark
          ? "bg-gray-900 py-16 md:py-20"
          : "border-t border-gray-100 bg-gray-50 py-16 md:py-20"
      }
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2
          className={`mb-3 text-2xl font-bold md:text-3xl ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={`mx-auto mb-8 max-w-xl text-sm md:text-base ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {description}
          </p>
        ) : null}
        <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-3">
          <Link
            href={buttonHref}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-red-900/20 transition-all hover:bg-red-600"
          >
            {buttonLabel}
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
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>

          {secondaryButtonLabel ? (
            <a
              href={secondaryButtonHref}
              className={`inline-flex items-center justify-center gap-2 rounded-xl border px-8 py-3.5 text-base font-semibold transition-colors ${
                isDark
                  ? "border-gray-700 bg-gray-900 text-white hover:bg-gray-800"
                  : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50"
              }`}
            >
              {secondaryButtonLabel}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
