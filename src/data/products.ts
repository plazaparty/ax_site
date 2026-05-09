import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "enterprise-ax-suite",
    name: "KT Enterprise AX Suite",
    description:
      "기업 전반의 업무 프로세스를 AI로 혁신하는 통합 AX 플랫폼입니다.",
    features: [
      "업무 자동화 워크플로우 설계",
      "AI 기반 의사결정 지원 대시보드",
      "사내 지식 통합 검색 및 요약",
    ],
    targetCustomer: ["기업"],
    targetStage: ["도입 검토", "운영 고도화"],
    targetTech: ["업무자동화", "지식검색", "문서 요약"],
    targetProductType: ["커스터마이징형 구축"],
    recommendReason:
      "대규모 조직의 업무 혁신에 최적화된 올인원 AX 솔루션으로, 도입부터 운영까지 체계적으로 지원합니다.",
    targetAudience: "업무 효율화와 디지털 전환을 추진하는 중·대규모 기업",
  },
  {
    id: "ai-contact-center",
    name: "KT AI Contact Center",
    description:
      "고객 상담 품질을 획기적으로 높이는 AI 기반 컨택센터 솔루션입니다.",
    features: [
      "실시간 음성 인식 및 상담 보조",
      "자동 상담 분류 및 요약",
      "고객 감정 분석 및 이슈 탐지",
    ],
    targetCustomer: ["기업", "공공"],
    targetStage: ["PoC 진행 중", "도입 검토", "운영 고도화"],
    targetTech: ["상담 AI", "음성인식"],
    targetProductType: ["바로 사용 가능한 서비스", "커스터마이징형 구축"],
    recommendReason:
      "상담 운영 비용을 절감하면서도 고객 만족도를 높일 수 있는 검증된 AI 상담 솔루션입니다.",
    targetAudience: "콜센터·고객센터를 운영하는 기업 및 공공기관",
  },
  {
    id: "document-intelligence",
    name: "KT Document Intelligence",
    description:
      "대량의 문서를 AI가 자동으로 분석·요약·분류하는 문서 지능화 솔루션입니다.",
    features: [
      "문서 자동 분류 및 핵심 요약",
      "계약서·보고서 주요 항목 추출",
      "다국어 문서 번역 및 분석",
    ],
    targetCustomer: ["기업", "공공"],
    targetStage: ["아이디어 단계", "PoC 진행 중", "도입 검토"],
    targetTech: ["문서 요약", "지식검색"],
    targetProductType: ["바로 사용 가능한 서비스"],
    recommendReason:
      "반복적인 문서 처리 업무를 AI로 자동화하여 업무 시간을 획기적으로 줄일 수 있습니다.",
    targetAudience: "문서 기반 업무가 많은 법무·금융·행정 분야 조직",
  },
  {
    id: "knowledge-assistant",
    name: "KT Knowledge Assistant",
    description:
      "조직 내 축적된 지식을 AI로 검색하고 활용하는 지식 관리 어시스턴트입니다.",
    features: [
      "자연어 기반 사내 지식 검색",
      "FAQ 자동 생성 및 업데이트",
      "부서간 지식 공유 및 추천",
    ],
    targetCustomer: ["기업", "공공"],
    targetStage: ["아이디어 단계", "PoC 진행 중"],
    targetTech: ["지식검색", "문서 요약"],
    targetProductType: ["바로 사용 가능한 서비스", "컨설팅 우선"],
    recommendReason:
      "흩어진 조직 지식을 하나로 통합하여 누구나 빠르게 필요한 정보를 찾을 수 있게 합니다.",
    targetAudience: "사내 지식 관리가 필요한 중규모 이상 조직",
  },
  {
    id: "vision-ai-platform",
    name: "KT Vision AI Platform",
    description:
      "영상·이미지 데이터를 AI로 분석하는 비전 인텔리전스 플랫폼입니다.",
    features: [
      "실시간 영상 분석 및 이상 탐지",
      "품질 검사 자동화",
      "객체 인식 및 추적",
    ],
    targetCustomer: ["기업", "공공"],
    targetStage: ["PoC 진행 중", "도입 검토", "운영 고도화"],
    targetTech: ["비전AI"],
    targetProductType: ["커스터마이징형 구축"],
    recommendReason:
      "제조·물류·보안 등 다양한 산업에서 영상 기반 AI 분석으로 운영 효율을 극대화합니다.",
    targetAudience: "제조·물류·보안 분야에서 영상 분석이 필요한 기업 및 기관",
  },
  {
    id: "public-ax-assistant",
    name: "KT Public AX Assistant",
    description:
      "공공 서비스 혁신과 행정 효율화를 위한 맞춤형 AI 어시스턴트입니다.",
    features: [
      "민원 자동 응대 및 분류",
      "행정 문서 자동 작성 지원",
      "공공 데이터 분석 및 인사이트 제공",
    ],
    targetCustomer: ["공공"],
    targetStage: ["검토 전", "아이디어 단계", "PoC 진행 중", "도입 검토"],
    targetTech: ["상담 AI", "문서 요약", "지식검색"],
    targetProductType: ["바로 사용 가능한 서비스", "컨설팅 우선"],
    recommendReason:
      "공공기관 특성에 맞춘 보안·규정 준수 기반의 AI 솔루션으로, 행정 효율을 높입니다.",
    targetAudience: "중앙부처·지자체·공공기관",
  },
  {
    id: "work-automation-studio",
    name: "KT Work Automation Studio",
    description:
      "코딩 없이 AI 기반 업무 자동화 워크플로우를 설계하는 노코드 플랫폼입니다.",
    features: [
      "드래그 앤 드롭 워크플로우 빌더",
      "RPA + AI 결합 자동화",
      "주요 업무 시스템 연동",
    ],
    targetCustomer: ["기업", "개인"],
    targetStage: ["아이디어 단계", "PoC 진행 중", "도입 검토"],
    targetTech: ["업무자동화"],
    targetProductType: ["바로 사용 가능한 서비스"],
    recommendReason:
      "전문 개발 인력 없이도 빠르게 업무 자동화를 시작할 수 있어 즉각적인 효율 향상이 가능합니다.",
    targetAudience: "반복 업무가 많은 부서 또는 스타트업",
  },
  {
    id: "genai-starter-pack",
    name: "KT GenAI Starter Pack",
    description:
      "생성형 AI를 처음 도입하는 조직을 위한 올인원 스타터 패키지입니다.",
    features: [
      "LLM 기반 챗봇 빠른 구축",
      "사내 데이터 연동 RAG 파이프라인",
      "AI 활용 교육 및 컨설팅 포함",
    ],
    targetCustomer: ["기업", "공공", "개인"],
    targetStage: ["검토 전", "아이디어 단계"],
    targetTech: ["상담 AI", "문서 요약", "지식검색", "업무자동화"],
    targetProductType: ["컨설팅 우선", "바로 사용 가능한 서비스"],
    recommendReason:
      "AI 도입 초기 단계에서 빠르게 성과를 확인하고, 조직의 AI 역량을 키울 수 있는 최적의 출발점입니다.",
    targetAudience: "생성형 AI 도입을 처음 검토하는 모든 조직",
  },
];
