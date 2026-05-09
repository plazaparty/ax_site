import { Suspense } from "react";
import ConsultingWizard from "./ConsultingWizard";

export default function AxConsultingPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[100dvh] items-center justify-center bg-slate-950 text-sm text-white/60">
          AX 컨설팅을 불러오는 중…
        </div>
      }
    >
      <ConsultingWizard />
    </Suspense>
  );
}
