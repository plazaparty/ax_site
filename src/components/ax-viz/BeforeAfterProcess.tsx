"use client";

export default function BeforeAfterProcess({
  beforeTitle = "기존 프로세스",
  afterTitle = "AX 적용 후",
  before,
  after,
}: {
  beforeTitle?: string;
  afterTitle?: string;
  before: string[];
  after: string[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">{beforeTitle}</p>
        <ul className="mt-3 space-y-2 text-sm text-gray-700">
          {before.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="text-gray-400">—</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-red-200 bg-gradient-to-br from-red-50/80 to-white p-5">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-red-700">{afterTitle}</p>
        <ul className="mt-3 space-y-2 text-sm text-gray-800">
          {after.map((a) => (
            <li key={a} className="flex gap-2">
              <span className="font-bold text-red-600">→</span>
              {a}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
