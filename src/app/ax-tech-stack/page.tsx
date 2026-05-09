import { redirect } from "next/navigation";

export default function AxTechStackLegacyPage() {
  // 레거시 경로 호환: 기존 링크는 AX Value로 안내
  redirect("/ax-value");
}

