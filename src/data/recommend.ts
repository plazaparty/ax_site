import { Product, CustomerState } from "@/types";
import { products } from "./products";

export function getRecommendations(state: CustomerState): Product[] {
  const scored = products.map((product) => {
    let score = 0;

    if (
      state.customerType &&
      product.targetCustomer.includes(state.customerType)
    ) {
      score += 3;
    }
    if (state.axStage && product.targetStage.includes(state.axStage)) {
      score += 2;
    }
    if (state.neededTech && product.targetTech.includes(state.neededTech)) {
      score += 3;
    }
    if (
      state.productType &&
      product.targetProductType.includes(state.productType)
    ) {
      score += 2;
    }

    return { product, score };
  });

  const sorted = [...scored].sort((a, b) => b.score - a.score);
  const withScore = sorted.filter((s) => s.score > 0);

  if (withScore.length === 0) {
    return sorted.slice(0, 3).map((s) => s.product);
  }

  return withScore.slice(0, 3).map((s) => s.product);
}
