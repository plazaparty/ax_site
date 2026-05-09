import Link from "next/link";

type BadgeTone = "gray" | "blue" | "purple" | "green";

const badgeToneToClass: Record<BadgeTone, string> = {
  gray: "bg-gray-50 text-gray-700 ring-gray-200",
  blue: "bg-blue-50 text-blue-700 ring-blue-200",
  purple: "bg-purple-50 text-purple-700 ring-purple-200",
  green: "bg-green-50 text-green-700 ring-green-200",
};

interface ContentCardProps {
  kind: string;
  title: string;
  description: string;
  href: string;
  meta?: string;
  tone?: BadgeTone;
}

export default function ContentCard({
  kind,
  title,
  description,
  href,
  meta,
  tone = "gray",
}: ContentCardProps) {
  return (
    <Link
      href={href}
      className="group block w-[280px] shrink-0 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:w-[320px]"
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ${badgeToneToClass[tone]}`}
        >
          {kind}
        </span>
        {meta ? (
          <span className="text-xs font-medium text-gray-400">{meta}</span>
        ) : null}
      </div>
      <h3 className="mt-4 line-clamp-2 text-base font-semibold text-gray-900">
        {title}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-600">
        {description}
      </p>
      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-600 transition-colors group-hover:text-red-700">
        자세히 보기
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
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </div>
    </Link>
  );
}

