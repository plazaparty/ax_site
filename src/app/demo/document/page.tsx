import DemoExperience from "@/components/DemoExperience";

export default function DemoDocumentPage() {
  return (
    <DemoExperience
      eyebrow="데모 / 체험 · 문서 AI"
      title="문서 추출·비교 체험"
      problem="형태가 제각각인 계약·신청 서류를 사람이 일일이 대조합니다."
      experienceHint="샘플 PDF를 올리면 필드를 추출하고 차이를 요약합니다."
      industries={["금융", "공공", "의료"]}
      effects={["처리량 증가", "오류 감소", "컴플라이언스 증빙"]}
      useCaseHref="/use-case/success/finance-advisory"
      useCaseLabel="금융 상담·문서 사례"
    />
  );
}
