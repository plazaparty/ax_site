import Link from "next/link";
import type { ReactNode } from "react";

interface DiscoveryCardProps {
  href: string;
  title: string;
  description?: string;
  footer?: ReactNode;
  variant?: "light" | "dark";
}

export default function DiscoveryCard({
  href,
  title,
  description,
  footer,
  variant = "light",
}: DiscoveryCardProps) {
  const base =
    variant === "dark"
      ? "border-white/10 bg-white/[0.06] text-white"
      : "border-gray-100 bg-white text-gray-900 shadow-[0_20px_60px_-28px_rgba(15,23,42,0.35)]";

  const active =
    variant === "dark"
      ? "active:bg-white/[0.12]"
      : "active:bg-gray-100";

  return (
    <Link
      href={href}
      className={`flex min-h-[112px] flex-col rounded-3xl border p-5 transition-colors hover:border-red-200/80 ${active} ${base}`}
    >
        <p className="text-lg font-semibold tracking-tight">{title}</p>
        {description ? (
          <p
            className={`mt-2 text-sm leading-relaxed ${variant === "dark" ? "text-white/75" : "text-gray-600"}`}
          >
            {description}
          </p>
        ) : null}
        {footer ? (
          <div className="mt-4">{footer}</div>
        ) : (
          <span
            className={`mt-auto pt-4 text-xs font-semibold uppercase tracking-wider ${variant === "dark" ? "text-red-300" : "text-red-600"}`}
          >
            이동 →
          </span>
        )}
    </Link>
  );
}
