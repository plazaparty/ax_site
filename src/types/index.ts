export type CustomerType = "개인" | "기업" | "공공";

export type AxStage =
  | "검토 전"
  | "아이디어 단계"
  | "PoC 진행 중"
  | "도입 검토"
  | "운영 고도화";

export type NeededTech =
  | "상담 AI"
  | "문서 요약"
  | "지식검색"
  | "음성인식"
  | "비전AI"
  | "업무자동화";

export type ProductPreference =
  | "바로 사용 가능한 서비스"
  | "커스터마이징형 구축"
  | "컨설팅 우선";

export interface CustomerState {
  customerType: CustomerType | null;
  axStage: AxStage | null;
  neededTech: NeededTech | null;
  productType: ProductPreference | null;
  freePrompt: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  targetCustomer: CustomerType[];
  targetStage: AxStage[];
  targetTech: NeededTech[];
  targetProductType: ProductPreference[];
  recommendReason: string;
  targetAudience: string;
}

export interface ChatMessage {
  id: string;
  role: "bot" | "user";
  content: string;
  options?: string[];
  productCards?: Product[];
  showCta?: boolean;
}
