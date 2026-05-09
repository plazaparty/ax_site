"use client";

export default function RecommendationReasonCard({
  title,
  bullets,
}: {
  title: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 md:p-5">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">{title}</p>
      <ul className="mt-3 space-y-2 text-sm text-gray-700">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2 border-l-2 border-red-500/40 pl-3">
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
