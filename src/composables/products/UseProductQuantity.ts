import type { Product } from "@/pages/products/type";
export const useProductQuantity = (newProduct: Product) => {
  const selectedAction: Ref<string> = ref("");
  const addQuantity = (quantity: number) => {
    newProduct.value.stockQuantity += +quantity;
    selectedAction!.value = "";
  };
  const reduceQuantity = (quantity: number) => {
    newProduct.value.stockQuantity -= +quantity;
    selectedAction.value = "";
  };

  return {
    selectedAction,
    addQuantity,
    reduceQuantity
  }
}

