import type { Product } from "@/pages/products/type";

export const useProductDiscount = (newProduct: Product) => {
  const isScheduledOpen = ref(false);
  const dateFrom = ref("");
  const dateTo = ref();
  const isThereSelectedDates = ref(false);
  const deleteDiscount = () => {
    newProduct.value.discounts = null;
    isThereSelectedDates.value = false;
    dateFrom.value = "";
    dateTo.value = "";
    isScheduledOpen.value = false;
  };
  const setDiscount = () => {
    isThereSelectedDates.value = true;
  };

  return {
    isScheduledOpen,
    dateFrom,
    dateTo,
    isThereSelectedDates,
    deleteDiscount,
    setDiscount
  }
}