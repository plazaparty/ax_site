/** 성공 사례 상세 slug 표시 순서 (홈·허브·목록 공통) */
export const USE_CASE_SUCCESS_SLUG_ORDER = [
  "manufacturing-quality",
  "public-civic",
  "finance-advisory",
  "logistics-route-optimization",
  "retail-demand-forecasting",
  "health-medical-records-summary",
  "telecom-network-triage",
  "insurance-fnol-triage",
  "utility-field-inspection-vision",
  "education-admissions-assistant",
  "legal-contract-screening",
  "hr-policy-assistant",
  "ecommerce-search-and-reco",
  "media-subtitle-and-metadata",
  "construction-safety-vision",
  "agritech-pest-detection",
  "pharma-deviation-classification",
  "airline-disruption-comms",
  "real-estate-lease-abstraction",
  "automotive-supplier-quality",
  "broadcast-sales-proposal",
  "hospitality-guest-requests",
  "bank-suspicious-txn-summary",
] as const;

export type UseCaseSuccessSlug = (typeof USE_CASE_SUCCESS_SLUG_ORDER)[number];
