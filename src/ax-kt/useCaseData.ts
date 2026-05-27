export type UseCaseRow = {
  id: number;
  title: string;
  industry: string;
  industrySlug: string;
  successSlug: string;
  task: string;
  stage: string;
  solution: string;
  desc: string;
  roi: string;
  company: string;
  img: string;
};

/** AI Consultant · Use Case 화면 공통 데이터 */
export const USE_CASES: UseCaseRow[] = [
  { id: 1, title: "제조 현장 이상 감지 AI", industry: "제조", industrySlug: "manufacturing", successSlug: "manufacturing-quality", task: "품질관리", stage: "도입", solution: "AI", desc: "비전 AI로 생산라인 불량률 87% 감소, 검사 자동화 실현", roi: "연 12억 절감", company: "H중공업", img: "🏭" },
  { id: 2, title: "콜센터 AI 상담 자동화", industry: "통신·IT", industrySlug: "services", successSlug: "telecom-network-triage", task: "고객서비스", stage: "운영", solution: "AI", desc: "AI 상담 봇으로 1차 해결율 74% 달성, 상담사 업무 집중도 향상", roi: "비용 40% 절감", company: "T통신", img: "📞" },
  { id: 3, title: "클라우드 기반 ERP 전환", industry: "유통·물류", industrySlug: "retail", successSlug: "retail-demand-forecasting", task: "운영효율", stage: "전환", solution: "Cloud", desc: "레거시 ERP를 클라우드로 마이그레이션, 운영비 55% 절감", roi: "TCO 55% 절감", company: "L물류", img: "☁️" },
  { id: 4, title: "실시간 수요 예측 AI", industry: "유통·물류", industrySlug: "retail", successSlug: "logistics-route-optimization", task: "물류·공급망", stage: "도입", solution: "Data", desc: "ML 기반 수요 예측으로 재고 과잉 30% 감소, 배송 정확도 향상", roi: "재고비 30% 절감", company: "S유통", img: "📦" },
  { id: 5, title: "금융 이상거래 탐지", industry: "금융·보험", industrySlug: "finance", successSlug: "bank-suspicious-txn-summary", task: "리스크관리", stage: "운영", solution: "AI", desc: "실시간 이상거래 탐지 AI로 금융사고 예방, 탐지 정확도 99.2%", roi: "사고 예방 연 50억", company: "K은행", img: "🏦" },
  { id: 6, title: "병원 AI 의료 영상 판독", industry: "의료·헬스", industrySlug: "healthcare", successSlug: "health-medical-records-summary", task: "진단·분석", stage: "도입", solution: "AI", desc: "흉부 X-ray AI 판독으로 판독 시간 85% 단축, 의사 효율 3배", roi: "판독 85% 가속", company: "S병원", img: "🏥" },
  { id: 7, title: "데이터 통합 플랫폼 구축", industry: "제조", industrySlug: "manufacturing", successSlug: "automotive-supplier-quality", task: "데이터관리", stage: "준비", solution: "Data", desc: "산재된 공장 데이터를 통합 분석 플랫폼으로 연결, 의사결정 속도 향상", roi: "데이터 사일로 제거", company: "P전자", img: "🗄️" },
  { id: 8, title: "AI 기반 채용 스크리닝", industry: "서비스", industrySlug: "services", successSlug: "hr-policy-assistant", task: "HR·인재", stage: "도입", solution: "AI", desc: "이력서 AI 분석으로 채용 소요 시간 60% 단축, 적합도 예측 정확도 향상", roi: "채용비 60% 절감", company: "D그룹", img: "👥" },
  { id: 9, title: "스마트 빌딩 에너지 최적화", industry: "건설·부동산", industrySlug: "safety", successSlug: "construction-safety-vision", task: "운영효율", stage: "운영", solution: "AI", desc: "IoT+AI로 건물 에너지 사용 패턴 분석, 냉난방 비용 35% 절감", roi: "에너지 35% 절감", company: "G건설", img: "🏢" },
  { id: 10, title: "공급망 리스크 예측", industry: "유통·물류", industrySlug: "retail", successSlug: "logistics-route-optimization", task: "물류·공급망", stage: "도입", solution: "Data", desc: "외부 데이터 연동 공급망 리스크 조기 경보 시스템 구축", roi: "리스크 손실 70% 예방", company: "H유통", img: "🔍" },
  { id: 11, title: "클라우드 네이티브 앱 전환", industry: "통신·IT", industrySlug: "services", successSlug: "telecom-network-triage", task: "IT인프라", stage: "전환", solution: "Cloud", desc: "모놀리식 앱을 마이크로서비스로 전환, 배포 주기 10배 단축", roi: "출시 속도 10배", company: "N소프트", img: "⚡" },
  { id: 12, title: "고객 이탈 예측 모델", industry: "금융·보험", industrySlug: "finance", successSlug: "finance-advisory", task: "마케팅·CRM", stage: "도입", solution: "Data", desc: "ML로 고객 이탈 조기 예측, 선제적 리텐션 캠페인으로 이탈률 25% 감소", roi: "고객 LTV 25% 향상", company: "I보험", img: "📊" },
  { id: 13, title: "AI 법률 문서 검토", industry: "서비스", industrySlug: "services", successSlug: "legal-contract-screening", task: "업무자동화", stage: "도입", solution: "AI", desc: "계약서 AI 검토로 리뷰 시간 70% 단축, 리스크 조항 자동 플래깅", roi: "법무 비용 70% 절감", company: "B법인", img: "⚖️" },
  { id: 14, title: "전력망 예측 정비 AI", industry: "에너지·환경", industrySlug: "services", successSlug: "utility-field-inspection-vision", task: "설비관리", stage: "운영", solution: "AI", desc: "전력 설비 센서 데이터 AI 분석으로 고장 사전 예측, 정전 90% 예방", roi: "정전 사고 90% 감소", company: "K에너지", img: "⚡" },
  { id: 15, title: "개인화 추천 엔진", industry: "유통·물류", industrySlug: "retail", successSlug: "ecommerce-search-and-reco", task: "마케팅·CRM", stage: "운영", solution: "AI", desc: "구매 이력 기반 실시간 개인화 추천으로 전환율 3.2배 향상", roi: "매출 전환율 3.2배", company: "M커머스", img: "🛒" },
  { id: 16, title: "멀티클라우드 보안 관제", industry: "금융·보험", industrySlug: "finance", successSlug: "public-civic", task: "보안·컴플라이언스", stage: "운영", solution: "Cloud", desc: "멀티클라우드 환경 통합 보안 관제, 위협 탐지 시간 95% 단축", roi: "보안 사고 95% 감소", company: "W금융", img: "🔐" },
  { id: 17, title: "AI 불량 예측 MES 연동", industry: "제조", industrySlug: "manufacturing", successSlug: "manufacturing-quality", task: "품질관리", stage: "운영", solution: "AI", desc: "MES 데이터 AI 분석으로 불량 예측 후 공정 자동 조정, 수율 12% 향상", roi: "수율 12% 향상", company: "S반도체", img: "🔬" },
  { id: 18, title: "디지털 트윈 공장", industry: "제조", industrySlug: "manufacturing", successSlug: "automotive-supplier-quality", task: "운영효율", stage: "전환", solution: "Data", desc: "실제 공장의 디지털 트윈 구축으로 공정 시뮬레이션 및 최적화 실현", roi: "생산성 28% 향상", company: "C자동차", img: "🤖" },
  { id: 19, title: "AI 고객 감성 분석", industry: "서비스", industrySlug: "services", successSlug: "ecommerce-search-and-reco", task: "고객서비스", stage: "도입", solution: "AI", desc: "VOC·SNS 데이터 실시간 감성 분석으로 브랜드 이슈 조기 감지", roi: "브랜드 위기 선제 대응", company: "F리테일", img: "💬" },
  { id: 20, title: "AX Readiness 진단 자동화", industry: "통신·IT", industrySlug: "services", successSlug: "public-civic", task: "전략·기획", stage: "준비", solution: "Readiness", desc: "기업 내 AI 전환 준비도 자동 진단 및 맞춤형 로드맵 생성 시스템", roi: "전략 수립 80% 단축", company: "KT", img: "🎯" },
  { id: 21, title: "스마트팜 AI 생육 최적화", industry: "에너지·환경", industrySlug: "services", successSlug: "agritech-pest-detection", task: "운영효율", stage: "도입", solution: "AI", desc: "센서 데이터 AI 분석으로 온도·습도·조도 자동 제어, 수확량 40% 향상", roi: "수확량 40% 증가", company: "A농업", img: "🌱" },
  { id: 22, title: "클라우드 DR/BCP 구축", industry: "금융·보험", industrySlug: "finance", successSlug: "finance-advisory", task: "IT인프라", stage: "전환", solution: "Cloud", desc: "재해복구 클라우드 전환으로 RTO 4시간→15분, 데이터 유실 제로 달성", roi: "RTO 94% 단축", company: "Y은행", img: "🛡️" },
];
