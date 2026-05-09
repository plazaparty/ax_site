import Link from "next/link";

interface MenuCardProps {
  href: string;
  title: string;
  description: string;
}

export default function MenuCard({ href, title, description }: MenuCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-red-200 hover:shadow-lg md:p-8"
    >
      <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-red-600">
        {title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-500">
        {description}
      </p>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-red-500">
        살펴보기
        <svg
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
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
      </span>
    </Link>
  );
}
