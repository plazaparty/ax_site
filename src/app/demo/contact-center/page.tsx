import DemoExperience from "@/components/DemoExperience";

export default function DemoContactCenterPage() {
  return (
    <DemoExperience
      eyebrow="데모 / 체험 · AI 고객센터"
      title="실시간 상담 보조 데모"
      problem="상담 중 검색 실패와 스크립트 미준수가 동시에 발생합니다."
      experienceHint="가상 민원 대화를 따라가며 근거 있는 추천 답변과 코칭 팝업을 확인합니다."
      industries={["금융", "통신", "공공"]}
      effects={["AHT 개선", "응답 일관성", "교육 비용 절감"]}
      useCaseHref="/use-case/success/public-civic"
      useCaseLabel="공공 민원 AI 사례"
    />
  );
}
