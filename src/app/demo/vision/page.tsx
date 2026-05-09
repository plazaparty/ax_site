import DemoExperience from "@/components/DemoExperience";

export default function DemoVisionPage() {
  return (
    <DemoExperience
      eyebrow="데모 / 체험 · Vision AI"
      title="현장 검사 데모"
      problem="육안 검사의 피로도와 기준 편차가 품질 리스크를 만듭니다."
      experienceHint="샘플 이미지 세트로 불량 탐지 임계값과 알림 UX를 확인합니다."
      industries={["제조", "물류"]}
      effects={["불량 탐지 리드타임 단축", "재작업 비용 감소"]}
      useCaseHref="/use-case/success/manufacturing-quality"
      useCaseLabel="제조 품질 혁신 사례"
    />
  );
}
