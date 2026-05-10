import Image from "next/image";

/** 헤더용 KT 워드마크 — `public/brand/kt-wordmark.png` 교체로 자산만 갈아끼울 수 있습니다. */
export default function KtLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/kt-wordmark.png"
      alt="KT"
      width={200}
      height={80}
      priority
      className={`h-7 w-auto max-h-7 object-contain object-left sm:h-8 sm:max-h-8 ${className ?? ""}`}
    />
  );
}
